<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="HIC010.opcion_hic010"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="HIC010.opcion_hic010 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="HIC010.opcion_hic010 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="HIC010.opcion_hic010">
              {{ HIC010.opcion_hic010 }}
            </q-chip>
          </p>
        </div>

        <div class="row">
          <p>Fecha: {{ HIC010.fecha_act }}</p>
          <!-- <q-input disable type="text" dense class="col-1" v-model="HIC010.fecha_act" /> -->
          <p>Hora: {{ HIC010.hora_act }}</p>
          <!-- <q-input disable type="text" dense class="col-1" v-model="HIC010.hora_act" /> -->
        </div>

        <div class="row justify-start">
          <p align="justify">
            Yo, {{ reg_firmador.descrip.trim() }}, identificado (a) con documento {{ reg_firmador.cod }}

            expedido en {{ reg_firmador.descrip_ciudad }}, mayor de edad y / o responsable del paciente {{ acudiente.descrip }} identificado con el
            numero de documento {{ acudiente.cod }} expedido en {{ acudiente.descrip_ciudad }} actuando en nombre propio en pleno uso de mis
            facultades, libre y consciente declaro:
          </p>
          <p align="justify">
            Que por mi propia voluntad y pleno conocimiento de riesgos y complicaciones explicadas por el personal médico y de enfermería, he decidido
            solicitar el retiro voluntario de esta institución eximiendo de toda responsabilidad a esta institución y al personal que en ella labora,
            por las consecuencias que pudieran sobrevenir por mi determinación.
          </p>
          <div class="row q-mt-md">
            <p class="text-left">Fecha de ingreso:</p>
            <Input_ v-model="HIC010.fecha_ingreso" :field="form.fecha_ingreso" />
          </div>
          <div class="row q-mt-md">
            <p class="text-left">Hora de ingreso:</p>
            <Input_ v-model="HIC010.hora_ingreso" :field="form.hora_ingreso" />
          </div>
          <div class="row q-mt-md">
            <p class="text-left">Fecha de egreso:</p>
            <Input_ v-model="HIC010.fecha_egreso" :field="form.fecha_egreso" />
          </div>
          <div class="row q-mt-md">
            <p class="text-left">Hora de egreso:</p>
            <Input_ v-model="HIC010.hora_egreso" :field="form.hora_egreso" />
          </div>
        </div>

        <div class="row">
          <p>
            Diagnostico:
            <Input_
              style="min-width: 100px; display: inline-block"
              @validate="datoCodigoEnfermedad"
              v-model="HIC010.diagnostico"
              :field="form.codigo"
            />
            <q-input dense disable type="text" v-model="descrip_diagnostico" style="min-width: 300px; display: inline-block" />
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Motivo del retiro</div>
          <TextArea_ v-model="HIC010.motivo_retiro" :field="form.motivo_retiro" />
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Observaciones</div>
          <TextArea_ v-model="HIC010.observaciones" :field="form.observaciones" />
        </div>
      </q-card-section>
    </q-form>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          :registro_profe="getPaci.cod"
          :tipo_doc="getPaci.tipo_id"
          @reciFirma="callBackFirma"
          :huella_="getAcomp.cod ? null : huella_paci"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :registro_profe="getAcomp.cod"
          :tipo_doc="getAcomp.tipo_id"
          :disable="!getAcomp.cod ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :huella_="huella_acomp"
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
        <ContainerFirma
          @reciFirma="callBackFirmaProf"
          :firma_="firma_prof"
          :codigo_firma="getProf.cod"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.registro_profe"
          quien_firma="FIRMA PROFESIONAL"
          class="col-4"
        />
      </div>
    </q-card-actions>
    <div class="row justify-center q-my-lg">
      <q-btn
        :disable="HIC010.opcion_hic010 ? false : true"
        @click="validarDatos"
        icon-right="check_circle"
        class="q-mr-lg"
        color="green"
        label="GRABAR"
        type="submit"
      />
    </div>
    <CONSEN800 v-if="show_consen800" @esc="callbackCONSEN800" @enter="callbackCONSEN800" />
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted, watch } from "vue";
import { impresionHIC010, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/ContainerFirma.vue"));
const CONSEN800 = defineAsyncComponent(() => import("@/components/consen/CONSEN800.vue"));

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const reg_firmador = ref(getAcomp.cod.trim() != "" ? getAcomp : getPaci);
const acudiente_descrip = ref(getAcomp.cod ? getPaci.descrip : "");
const acudiente = ref(getAcomp.cod ? getPaci : "");
const firma_recibida_acomp = ref("");
const descrip_diagnostico = ref("");
const show_consen800 = ref(false);
const firma_recibida = ref("");
const huella_paci = ref(null);
const huella_acomp = ref(null);
const firma_prof = ref(null);

const HIC010 = reactive({
  fecha_ingreso: "",
  hora_ingreso: "",
  fecha_egreso: "",
  hora_egreso: "",
  motivo_retiro: "",
  observaciones: "",
  diagnostico: "",

  //Extras
  opcion_hic010: "",
  fecha_act: "",
  llave: "",
});

const form = ref({
  fecha_ingreso: {
    id: "fecha_ingreso",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  hora_ingreso: {
    id: "hora_ingreso",
    maxlength: "10",
    label: "",
    tipo: "time",
    campo_abierto: true,
  },
  fecha_egreso: {
    id: "fecha_egreso",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  hora_egreso: {
    id: "hora_egreso",
    maxlength: "10",
    label: "",
    tipo: "time",
    campo_abierto: true,
  },
  codigo: {
    id: "codigo",
    label: "",
    maxlength: "4",
    f0: ["f8"],
    standout: "N",
    outlined: "N",
    required: true,
    campo_abierto: true,
  },
  motivo_retiro: {
    id: "motivo_retiro",
    maxlength: "380",
    label: "",
    rows: 3,
    campo_abierto: true,
  },
  observaciones: {
    id: "observaciones",
    maxlength: "380",
    label: "",
    rows: 3,
    campo_abierto: true,
  },
});

onMounted(() => {
  console.log("getEmpresa ", getEmpresa);
  console.log("getEmpresa ", getEmpresa);

  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  HIC010.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC010.hora_act = dayjs().format("HH:mm");
  HIC010.llave = getHc.llave.slice(15);

  if (getHc.rips?.diagn && getHc.rips?.diagn.length) {
    HIC010.diagnostico = getHc.rips?.diagn[0].cod;
    descrip_diagnostico.value = getHc.rips?.diagn[0].descrip;
  }
};

const getFirmaProf = async () => {
  try {
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
    huella_acomp.value = await _getHuella$({ codigo: getAcomp.cod });
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const datoCodigoEnfermedad = async (event) => {
  switch (event) {
    case "f8":
      show_consen800.value = true;
      break;
    case "enter":
      consultarEnfermedad();
      break;
  }
};

const consultarEnfermedad = async () => {
  try {
    const response = await getDll$({
      modulo: `get_enf.dll`,
      data: { llave: "2" + HIC010.diagnostico },
    });
    if (response.llave) {
      descrip_diagnostico.value = response.nombre;
      return;
    }
    return CON851("?", "info", "No existe diagnostico");
  } catch (error) {
    CON851("?", "info", error);
  }
};

const validarDatos = async () => {
  await consultarEnfermedad();
  const requiere = "Complete el siguiente campo";

  if (getAcomp.cod.trim() == "") {
    if (firma_recibida.value) {
      return CON851("?", "info", "No se ha realizado la firma del paciente");
    }
  }

  if (getAcomp.cod && !huella_acomp.value && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma o huella del acompañate");
  }

  if (HIC010.opcion_hic010 == "AUTORIZAR") {
    if (!HIC010.fecha_ingreso) return CON851("?", "info", requiere, () => foco_(form, "fecha_ingreso"));
    if (!HIC010.hora_ingreso) return CON851("?", "info", requiere, () => foco_(form, "hora_ingreso"));
    if (!HIC010.fecha_egreso) return CON851("?", "info", requiere, () => foco_(form, "fecha_egreso"));
    if (!HIC010.hora_egreso) return CON851("?", "info", requiere, () => foco_(form, "hora_egreso"));
    if (!HIC010.motivo_retiro) return CON851("?", "info", requiere, () => foco_(form, "motivo_retiro"));
    if (!HIC010.diagnostico) return CON851("?", "info", requiere, () => foco_(form, "codigo"));
  }
  console.log("HIC010 ", HIC010);

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC010));
  let datos = {
    estado: HIC010.opcion_hic010 == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC010",
    disentimiento: "N",
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 32);
        console.log("data en llave_consen ", data);

        HIC010.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
        return grabarFirmaConsen(data?.llave_consen);
      } else CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });

    return CON851P(
      "?",
      "info",
      "¿Deseas enviar el correo del consentimientos?",
      async () => {
        await imprimirConsen();
        router.back();
      },
      async () => {
        const file = await imprimirConsen();
        const response = await enviarCorreo$({
          cuerpo: `SE ADJUNTA ${getEncabezado.descrip} PARA ${getPaci.descrip} IDENTIDICADO CON ${getPaci.cod}`,
          destino: getPaci.email,
          subject: getEncabezado.descrip,
          file,
        });
        CON851("?", response.tipo, response.message, () => router.back());
      }
    );
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const imprimirConsen = async () => {
  const datos_hic010 = {
    autorizo: HIC010.opcion_hic010 == "AUTORIZAR" ? true : false,
    empresa: getEmpresa,
    paciente: getPaci,
    prof: getProf,
    acomp: getAcomp,
    firmador: reg_firmador.value,
    paren_acomp: getSesion.paren_acomp,
    acudiente: acudiente.value,
    firmas: {
      firma_paci: firma_recibida.value ? true : false,
      huella_paci: huella_paci.value ? true : false,
      huella_acomp: huella_acomp.value ? true : false,
      firma_acomp: firma_recibida_acomp.value ? true : false,
      firma_prof: firma_prof.value ? true : false,
    },
    ...HIC010,
    diagnostico: getHc.rips?.diagn.length ? getHc.rips?.diagn[0]?.cod : "",
    descrip_enfer: descrip_diagnostico.value || "",
  };

  const firmas = {
    img_firma_acomp: firma_recibida_acomp.value,
    img_firma_consen: firma_recibida.value,
    img_firma_paci: firma_recibida.value,
    img_huella_paci: huella_paci.value,
    img_huella_acomp: huella_acomp.value,
    firma_prof: firma_prof.value,
  };

  const docDefinitionPrint = await utilsFormat({
    datos: firmas,
    content: impresionHIC010({
      datos: datos_hic010,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionHIC010({
      datos: datos_hic010,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile });
  return response_impresion;
};
const callbackCONSEN800 = (data) => {
  if (data) {
    HIC010.diagnostico = data.cod;
    descrip_diagnostico.value = data.descrip;
  }
  show_consen800.value = false;
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};
const callBackFirmaProf = (data_firma) => {
  data_firma && (firma_prof.value = data_firma);
};
</script>

<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
