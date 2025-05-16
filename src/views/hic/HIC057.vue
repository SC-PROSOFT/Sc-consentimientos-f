<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="HIC057.opcion_hic057"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="HIC057.opcion_hic057 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="HIC057.opcion_hic057 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="HIC057.opcion_hic057">
              {{ HIC057.opcion_hic057 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p>Historia clínica numero:</p>
          <q-input disable type="text" dense v-model="HIC057.llave" class="col-1" />
        </div>
        <div class="row">
          <p>Ciudad:</p>
          <q-input disable type="text" dense class="col-1" v-model="getEmpresa.ciudad_usuar" />
          <p>fecha:</p>
          <q-input disable type="text" dense class="col-1" v-model="HIC057.fecha_act" />
        </div>

        <div class="row justify-start">
          <p>Yo,</p>
          <q-input disable v-model="reg_firmador.descrip" type="text" dense class="col-4" />
          <p>, identificado (a) con cedula numero</p>
          <q-input disable type="text" dense class="col-2" v-model="reg_firmador.cod" />
          <p>expedida en</p>
          <q-input disable type="text" dense class="col-2" v-model="reg_firmador.descrip_ciudad" />
          <p>actuando en nombre propio o como acudiente de</p>
          <q-input disable type="text" dense class="col-2" v-model="acudiente" />
          <p>.</p>
          <p align="justify">
            Comprendo que durante el procedimiento pueden aparecer circunstancias imprevisibles o inesperadas, que pueden requerir una extensión de
            otro procedimiento; acepto que las ciencias de la salud no son una ciencia exacta, que se garantizan resultados en la atención, y que
            aunque son procedimientos seguros pueden presentarse complicaciones como:
          </p>
          <Input_ style="min-width: 100%; display: inline-block" v-model="HIC057.complicaciones" :field="form.complicaciones" />
        </div>
        <p align="justify">
          Me han explicado también que de negarme a realizarme los exámenes diagnósticos, procedimientos y/o tratamientos ordenados, estoy asumiendo
          la responsabilidad por sus consecuencias, con lo que exonero de ellas el quipo asistencial tratante y la institución, sin embargo ello no
          significa que pierda mis derechos para una atención posterior.
        </p>
        <p class="row" align="justify">
          Se me ha informado que en la {{ getEmpresa.nomusu }}, cuenta con personal idóneo, competente y capacitado para la determinación de conductas
          terapéuticas que contribuyan a mejorar mi calidad de vida y salud. Doy constancia de que se me ha explicado en lenguaje sencillo claro, y
          entendible para mí, los aspectos relacionados con mi condición actual, los riesgos y beneficios de los procedimientos; se me ha permitido
          hacer todas las preguntas necesarias, y han sido resueltas satisfactoriamente.
        </p>
        <p align="justify">Por lo tanto, en forma consciente y voluntaria, sin haber sido objeto de coacción, persuasión, ni manipulación:</p>
        <div class="row" v-show="HIC057.opcion_hic057 == 'AUTORIZAR'">
          <p>
            <ins class="text-bold">Autorizo</ins> al personal asistencial de la {{ getEmpresa.nomusu }}, para la realización de los procedimientos de
            salud:
            <Input_ style="min-width: 100%; display: inline-block" v-model="HIC057.procedimiento" :field="form.procedimiento" />
            cuyo objetivo es:
            <Input_ style="min-width: 100%; display: inline-block" v-model="HIC057.objetivo" :field="form.objetivo" />
            diagnostico
            <Input_
              style="min-width: 100px; display: inline-block"
              @validate="datoCodigoEnfermedad"
              v-model="HIC057.diagnostico"
              :field="form.codigo"
            />
            <q-input dense disable type="text" maxlength="4" v-model="descrip_diagnostico" style="min-width: 300px; display: inline-block" />
          </p>
          En el servicio de terapia:
          <Input_ style="min-width: 100%; display: inline-block" v-model="HIC057.serv_terapia" :field="form.serv_terapia" />
        </div>
        <div class="row" v-show="HIC057.opcion_hic057 == 'REVOCAR'">
          <p align="justify">
            Expreso mi voluntad de <ins class="text-bold">revocar</ins> el consentimiento presentado y declaro por tanto que, tras la información
            recibida, no consiento someterme al procedimiento de:
            <strong class="text-bold">GENERAL PYP OK</strong>
            por los siguientes motivos:
          </p>
          <Input_ style="min-width: 100%; display: inline-block" v-model="HIC057.revocar_motivos" :field="form.revocar_motivos" />
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
          :disable="!getAcomp.cod ? true : false"
          :registro_profe="getAcomp.cod"
          :tipo_doc="getAcomp.tipo_id"
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
        :disable="HIC057.opcion_hic057 ? false : true"
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
import { impresionHIC057, impresion, generarArchivo } from "@/impresiones";
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

const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);
const acudiente = ref(getAcomp.cod ? getPaci.descrip : "");
const firma_recibida_acomp = ref("");
const descrip_diagnostico = ref("");
const show_consen800 = ref(false);
const firma_recibida = ref("");
const huella_paci = ref(null);
const huella_acomp = ref(null);
const firma_prof = ref(null);
const HIC057 = reactive({
  revocar_procedim: "",
  revocar_motivos: "",
  complicaciones: "",
  procedimiento: "",
  diagnostico: "",
  objetivo: "",
  serv_terapia: "",

  //Extras
  opcion_hic057: "",
  fecha_act: "",
  llave: "",
});

const form = ref({
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
  procedimiento: {
    id: "procedimiento",
    maxlength: "285",
    label: "",
    required: true,
    standout: "N",
    outlined: "N",
    campo_abierto: true,
  },
  objetivo: {
    id: "objetivo",
    maxlength: "285",
    label: "",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
  serv_terapia: {
    id: "serv_terapia",
    maxlength: "285",
    label: "",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
  complicaciones: {
    id: "complicaciones",
    maxlength: "380",
    label: "",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
  revocar_motivos: {
    id: "revocar_motivos",
    maxlength: "285",
    label: "",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
});

onMounted(() => {
  console.log("formato HIC057");
  setTimeout(() => {
    datosInit();
    getFirmaProf();
  }, 400);
});

watch(
  () => HIC057.opcion_hic057,
  (val) => {
    if (val == "AUTORIZAR") {
      HIC057.revocar_motivos = "";
    } else {
      HIC057.diagnostico = "";
    }
  }
);

const datosInit = () => {
  HIC057.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  console.log("getHc ", getHc);
  HIC057.llave = getHc.llave.slice(15);

  if (getHc.rips?.diagn && getHc.rips?.diagn.length) {
    HIC057.diagnostico = getHc.rips?.diagn[0].cod;
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
      data: { llave: "2" + HIC057.diagnostico },
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

  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }

  if (getAcomp.cod && !huella_acomp.value && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma o huella del acompañate");
  }

  // if (getAcomp.cod && !huella_acomp.value && getAcomp.cod && !firma_recibida_acomp.value) {
  //   return CON851("?", "info", "No se ha realizado la firma del acompañate");
  // }

  if (!HIC057.complicaciones) return CON851("?", "info", `${requiere}, complicaciones `, () => foco_(form, "complicaciones"));

  if (HIC057.opcion_hic057 == "REVOCAR") {
    if (!HIC057.revocar_motivos) return CON851("?", "info", `${requiere}, revocar motivos `, () => foco_(form, "revocar_motivos"));
  }

  if (HIC057.opcion_hic057 == "AUTORIZAR") {
    if (!HIC057.diagnostico) return CON851("?", "info", requiere, () => foco_(form, "codigo"));
    if (!HIC057.procedimiento) return CON851("?", "info", requiere, () => foco_(form, "procedimiento"));
    if (!HIC057.objetivo) return CON851("?", "info", requiere, () => foco_(form, "objetivo"));
  }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC057));
  let datos = {
    estado: HIC057.opcion_hic057 == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC057",
    disentimiento: "N",
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 32);
        console.log("data en llave_consen ", data);

        HIC057.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
        return grabarFirmaConsen(data?.llave_consen);
      } else CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
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
        await imprimirConsen(llave);
        router.back();
      },
      async () => {
        const file = await imprimirConsen(llave);
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

const imprimirConsen = async (llave) => {
  const datos_hic057 = {
    autorizo: HIC057.opcion_hic057 == "AUTORIZAR" ? true : false,
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
    ...HIC057,
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
    content: impresionHIC057({
      datos: datos_hic057,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionHIC057({
      datos: datos_hic057,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-057` });
  return response_impresion;
};
const callbackCONSEN800 = (data) => {
  if (data) {
    HIC057.diagnostico = data.cod;
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
const requerido = (val) => {
  return !!val || "Este campo es requerido";
};
</script>

<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
