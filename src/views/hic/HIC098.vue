<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc098"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc098 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc098 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc098">
              {{ opcion_hc098 }}
            </q-chip>
          </p>
        </div>
        <div>
          <div>
            <div class="row">
              <p class="q-ml-xs">
                <span class="text-bold">Fuentedeoro Meta,</span>
              </p>
              <p class="q-ml-xs">
                <span class="text-bold">Fecha:</span>
                {{ HIC098.fecha }}
              </p>
            </div>
            <div class="row">
              <p class="q-ml-xs">
                <span class="text-bold">Nombre del paciente: </span>
                {{ getPaci.descrip }}
              </p>
            </div>
            <div class="row">
              <p class="q-ml-xs">
                <span class="text-bold">Historia clínica N°: </span>
                {{ getHc.llave.slice(15) }}
              </p>
            </div>
          </div>
          <p style="text-align: justify">
            Yo <span class="text-bold"> {{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }},</span> identificado con documento
            <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.tipo_id : getPaci.tipo_id }}</span> No.
            <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.cod : getPaci.cod }}</span> mayor de edad y/o responsable del paciente
            <span class="text-bold">{{ reg_acudiente.cod ? getPaci.descrip : "N/A" }} </span> identificado con documento
            <span class="text-bold">{{ reg_acudiente.cod ? getPaci.tipo_id : "N/A" }}</span> No.
            <span class="text-bold">{{ reg_acudiente.cod ? getPaci.cod : "N/A." }}</span
            >, actuando en nombre propio en pleno uso de mis facultades, libre y conscientemente declaro:
          </p>

          <p class="text-bold" style="text-align: justify">
            Que por mi propia voluntad y pleno conocimiento de riesgos y complicaciones explicadas por el personal médico del Hospital Local Primer
            Nivel ESE Fuentedeoro Meta, he decidido solicitar retiro voluntario de esta institución, eximiendo de toda responsabilidad a esta
            institución y al personal que en el laboran, por las consecuencias que pudieran sobrevenir por mi determinación.
          </p>
        </div>
        <div class="row">
          <div class="row q-mt-md">
            <p class="text-left q-mt-xs">Fecha de ingreso:</p>
            <Input_ v-model="HIC098.fecha_ingreso" :field="form.fecha_ingreso" />
          </div>
          <div class="row q-mt-md">
            <p class="text-left q-mt-xs">Fecha de egreso:</p>
            <Input_ v-model="HIC098.fecha_egreso" :field="form.fecha_egreso" />
          </div>
        </div>
        <div class="row q-mt-lg">
          <p>
            Diagnóstico de ingreso:
            <Input_
              style="min-width: 100px; display: inline-block"
              @validate="datoDiagnosticoIngreso"
              v-model="HIC098.cod_diag_ingreso"
              :field="form.cod_diag_ingreso"
            />
            <q-input dense disable type="text" v-model="descrip_diag_ingreso" style="min-width: 300px; display: inline-block" />
          </p>
        </div>
        <div class="row q-mt-lg">
          <p>
            Diagnóstico de egreso:
            <Input_
              style="min-width: 100px; display: inline-block"
              @validate="datoDiagnosticoEgreso"
              v-model="HIC098.cod_diag_egreso"
              :field="form.cod_diag_egreso"
            />
            <q-input dense disable type="text" v-model="descrip_diag_egreso" style="min-width: 300px; display: inline-block" />
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Motivo del egreso</div>
          <TextArea_ v-model="HIC098.motivo_egreso" :field="form.motivo_egreso" />
        </div>
      </q-card-section>
    </div>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          :registro_profe="getPaci.cod"
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :registro_profe="getAcomp.cod"
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
        <ContainerFirma
          disable
          quien_firma="FIRMA PROFESIONAL"
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.cod"
          :codigo_firma="getProf.cod"
          class="col-4"
        />
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hc098 ? false : true"
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
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { impresionHIC098, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";
const CONSEN800 = defineAsyncComponent(() => import("@/components/consen/CONSEN800.vue"));
const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const reg_acudiente = ref(getAcomp.cod ? getAcomp : {});
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);

const descrip_diag_ingreso = ref("");
const descrip_diag_egreso = ref("");
const id_input = ref("");

const show_consen800 = ref(false);

const opcion_hc098 = ref(null);
const HIC098 = reactive({
  fecha: "",
  fecha_ingreso: "",
  fecha_egreso: "",
  cod_diag_ingreso: "",
  cod_diag_egreso: "",
  motivo_egreso: "",
});
const form = ref({
  fecha_ingreso: {
    id: "fecha_ingreso",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  fecha_egreso: {
    id: "fecha_egreso",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  cod_diag_ingreso: {
    id: "cod_diag_ingreso",
    label: "",
    maxlength: "4",
    f0: ["f8"],
    standout: "N",
    outlined: "N",
    required: true,
    campo_abierto: true,
  },
  cod_diag_egreso: {
    id: "cod_diag_egreso",
    label: "",
    maxlength: "4",
    f0: ["f8"],
    standout: "N",
    outlined: "N",
    required: true,
    campo_abierto: true,
  },
  motivo_egreso: {
    id: "motivo_egreso",
    maxlength: "500",
    label: "",
    rows: 4,
    campo_abierto: true,
  },
});

onMounted(() => {
  HIC098.fecha = dayjs().format("YYYY-MM-DD");
  getFirmaProf();
});

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = () => {
  if (!firma_recibida.value && !getAcomp.cod) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC098));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc098.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC098",
    disentimiento: "N",
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        return grabarFirmaConsen(data?.llave_consen);
      }
      CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", error);
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    getAcomp.cod.trim() && (await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` }));

    if (getEmpresa.envio_email == "N") {
      await imprimirConsen(llave);
      return router.back();
    }
    return CON851P(
      "?",
      "info",
      "¿Deseas enviar el correo del consentimientos?",
      async () => {
        await imprimirConsen(llave);
        router.back();
      },
      async () => {
        const file = await imprimirConsen(llave);
        if (getPaci.email && !/.+@.+\..+/.test(getPaci.email.toLowerCase())) {
          return CON851("?", "info", "El correo no es valido", () => router.back());
        }

        const response = await enviarCorreo$({
          cuerpo: `SE ADJUNTA ${getEncabezado.descrip} PARA ${getPaci.descrip} IDENTIDICADO CON ${getPaci.cod}`,
          destino: getPaci.email.toLowerCase(),
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

const imprimirConsen = async (llave) => {
  try {
    const datos_hic098 = {
      autorizo: opcion_hc098.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      ...HIC098,
      llave: getHc.llave.slice(15),
      nomb_diag_ingreso: descrip_diag_ingreso.value,
      nomb_diag_egreso: descrip_diag_egreso.value,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC098" },
      content: impresionHIC098({
        datos: datos_hic098,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC098" },
      content: impresionHIC098({
        datos: datos_hic098,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-098` });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};
const datoDiagnosticoIngreso = async (event) => {
  switch (event) {
    case "f8":
      id_input.value = "ingreso";
      show_consen800.value = true;
      break;
    case "enter":
      consultarEnfermedadIngreso();
      break;
  }
};
const consultarEnfermedadIngreso = async () => {
  try {
    const response = await getDll$({
      modulo: `get_enf.dll`,
      data: { llave: "2" + HIC098.cod_diag_ingreso },
    });
    if (response.llave) {
      descrip_diag_ingreso.value = response.nombre;
      return;
    }
    return CON851("?", "info", "No existe diagnostico");
  } catch (error) {
    CON851("?", "info", error);
  }
};
const datoDiagnosticoEgreso = async (event) => {
  switch (event) {
    case "f8":
      id_input.value = "egreso";
      show_consen800.value = true;
      break;
    case "enter":
      consultarEnfermedadEgreso();
      break;
  }
};
const consultarEnfermedadEgreso = async () => {
  try {
    const response = await getDll$({
      modulo: `get_enf.dll`,
      data: { llave: "2" + HIC098.cod_diag_egreso },
    });
    if (response.llave) {
      descrip_diag_egreso.value = response.nombre;
      return;
    }
    return CON851("?", "info", "No existe diagnostico");
  } catch (error) {
    CON851("?", "info", error);
  }
};
const callbackCONSEN800 = (data) => {
  if (data) {
    if (id_input.value == "ingreso") {
      HIC098.cod_diag_ingreso = data.cod;
      descrip_diag_ingreso.value = data.descrip;
    } else {
      HIC098.cod_diag_egreso = data.cod;
      descrip_diag_egreso.value = data.descrip;
    }
  }
  show_consen800.value = false;
};
const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
</script>
