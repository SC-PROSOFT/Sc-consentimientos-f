<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="HIC032.opcion_hc032"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="HIC032.opcion_hc032 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="HIC032.opcion_hc032 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="HIC032.opcion_hc032"
            >
              {{ HIC032.opcion_hc032 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p>Historia clínica numero:</p>
          <q-input readonly type="text" dense v-model="HIC032.llave" class="col-1" />
        </div>
        <div class="row">
          <p>Ciudad:</p>
          <q-input readonly type="text" dense class="col-1" v-model="getEmpresa.CIUDAD_USUAR" />
          <p>fecha:</p>
          <q-input readonly type="text" dense class="col-1" v-model="HIC032.fecha_act" />
        </div>

        <div class="row">
          <p>Yo,</p>
          <q-input readonly v-model="reg_firmador.descrip" type="text" dense class="col-4" />
          <p>, identificado (a) con cedula numero</p>
          <q-input readonly type="text" dense class="col-2" v-model="reg_firmador.cod" />
          <p>expedida en</p>
          <q-input readonly type="text" dense class="col-2" v-model="reg_firmador.descrip_ciudad" />
          <p>actuando en nombre propio o como acudiente de</p>
          <q-input readonly type="text" dense class="col-2" v-model="acudiente" />
          <p>.</p>
          <p>
            Comprendo que durante el procedimiento pueden aparecer circunstancias imprevisibles o inesperadas,
            que pueden requerir una extensión de otro procedimiento; acepto que las ciencias de la salud no
            son una ciencia exacta, que se garantizan resultados en la atención, y que aunque son
            procedimientos seguros pueden presentarse complicaciones como:
          </p>
          <q-input
            placeholder="Ingrese complicaciones"
            v-model="HIC032.complicaciones"
            maxlength="380"
            type="textarea"
            class="col-12"
            autogrow
            dense
          />
        </div>
        <p>
          Me han explicado también que de negarme a realizarme los exámenes diagnósticos, procedimientos y/o
          tratamientos ordenados, estoy asumiendo la responsabilidad por sus consecuencias, con lo que exonero
          de ellas el quipo asistencial tratante y la institución, sin embargo ello no significa que pierda
          mis derechos para una atención posterior.
        </p>
        <p>
          Se me ha informado que en la ESE salud Yopal, cuenta con personal idóneo, competente y capacitado
          para la determinación de conductas terapéuticas que contribuyan a mejorar mi calidad de vida y
          salud. Doy constancia de que se me ha explicado en lenguaje sencillo claro, y entendible para mí,
          los aspectos relacionados con mi condición actual, los riesgos y beneficios de los procedimientos;
          se me ha permitido hacer todas las preguntas necesarias, y han sido resueltas satisfactoriamente.
        </p>
        <p>
          Por lo tanto, en forma consciente y voluntaria, sin haber sido objeto de coacción, persuasión, ni
          manipulación:
        </p>
        <div class="row" v-show="HIC032.opcion_hc032 == 'AUTORIZAR'">
          <p>
            <ins class="text-bold">Autorizo</ins> al personal asistencial de la ESE Salud Yopal, para la
            realización de los procedimientos de salud:
            <Input_
              style="min-width: 100px; display: inline-block"
              v-model="HIC032.procedimiento"
              :field="form.procedimiento"
            />
            cuyo objetivo es:
            <Input_
              style="min-width: 100px; display: inline-block"
              v-model="HIC032.objetivo"
              :field="form.objetivo"
            />
            diagnostico
            <Input_
              style="min-width: 100px; display: inline-block"
              @validate="datoCodigoEnfermedad"
              v-model="HIC032.diagnostico"
              :field="form.codigo"
            />
            <q-input
              dense
              disable
              type="text"
              maxlength="4"
              v-model="descrip_diagnostico"
              style="min-width: 300px; display: inline-block"
            />
          </p>
        </div>
        <div class="row" v-show="HIC032.opcion_hc032 == 'REVOCAR'">
          <p>
            Expreso mi voluntad de <ins class="text-bold">revocar</ins> el consentimiento presentado y declaro
            por tanto que, tras la información recibida, no consiento someterme al procedimiento de:
            <strong>GENERAL PYP OK</strong>
            por los siguientes motivos:
            <q-input
              v-model="HIC032.revocar_motivos"
              ref="revocar_motivos"
              class="col-8 input-p"
              :rules="[requerido]"
              maxlength="285"
              type="text"
              dense
            />
          </p>
        </div>
      </q-card-section>
    </q-form>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          @reciFirma="callBackFirma"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.cod || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.cod ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
        <ContainerFirma
          @reciFirma="callBackFirma"
          :firma_="firma_prof"
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
        :disable="HIC032.opcion_hc032 ? false : true"
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
import { impresionHC032, impresion } from "@/impresiones";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/ContainerFirma.vue"));
const CONSEN800 = defineAsyncComponent(() => import("@/components/consen/CONSEN800.vue"));

const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { getDll$, _getFirma$, guardarFile$ } = useApiContabilidad();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);
const acudiente = ref(getAcomp.cod ? getPaci.descrip : "");
const firma_recibida_acomp = ref("");
const descrip_diagnostico = ref("");
const show_consen800 = ref(false);
const revocar_motivos = ref(null);
const firma_recibida = ref("");
const firma_prof = ref(null);
const HIC032 = reactive({
  revocar_procedim: "",
  revocar_motivos: "",
  complicaciones: "",
  procedimiento: "",
  diagnostico: "",
  objetivo: "",

  //Extras
  opcion_hc032: "",
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
    maxlength: "200",
    label: "",
    required: true,
    standout: "N",
    outlined: "N",
    campo_abierto: true,
  },
  objetivo: {
    id: "objetivo",
    maxlength: "200",
    label: "",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
});

onMounted(() => {
  datosInit();
  getFirmaProf();
});

watch(
  () => HIC032.opcion_hc032,
  (val) => {
    if (val == "AUTORIZAR") {
      HIC032.revocar_motivos = "";
    } else {
      HIC032.diagnostico = "";
    }
  }
);

const datosInit = () => {
  HIC032.fecha_act = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  HIC032.llave = getHc.llave.slice(15);

  if (getHc.rips.diagn.length) {
    HIC032.diagnostico = getHc.rips.diagn[0].cod;
    descrip_diagnostico.value = getHc.rips.diagn[0].descrip;
  }
};

const getFirmaProf = async () => {
  try {
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
      data: { llave: "2" + HIC032.diagnostico },
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

  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañate");
  }

  if (HIC032.opcion_hc032 == "REVOCAR") {
    revocar_motivos.value.validate();
    if (revocar_motivos.value.hasError) return revocar_motivos.value.focus();
  }

  if (HIC032.opcion_hc032 == "AUTORIZAR") {
    const requiere = "Complete el siguiente campo";
    if (!HIC032.diagnostico) return CON851("?", "info", requiere, () => foco_(form, "codigo"));
    if (!HIC032.procedimiento) return CON851("?", "info", requiere, () => foco_(form, "procedimiento"));
    if (!HIC032.objetivo) return CON851("?", "info", requiere, () => foco_(form, "objetivo"));
  }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC032));
  let datos = {
    estado: HIC032.opcion_hc032 == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC032",
    disentimiento: "N",
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(24, 32);
        HIC032.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
        return grabarFirmaConsen(data?.llave_consen);
      }
      CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    firma_recibida.value.length &&
      (await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` }));
    firma_recibida_acomp.value.length &&
      (await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` }));

    return CON851P(
      "?",
      "info",
      "¿Deseas imprimir el consentimiento?",
      () => router.back(),
      () => {
        imprimirConsen();
        setTimeout(() => router.back(), 500);
      }
    );
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const imprimirConsen = async () => {
  const docDefinition = utilsFormat({
    datos: {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    },
    content: impresionHC032({
      datos: {
        autorizo: HIC032.opcion_hc032 == "AUTORIZAR" ? true : false,
        empresa: { ...getEmpresa },
        paciente: { ...getPaci },
        prof: { ...getProf },
        acomp: { ...getAcomp },
        firmador: { ...reg_firmador.value },
        paren_acomp: getSesion.paren_acomp,
        acudiente: acudiente.value,
        firmas: {
          firma_paci: firma_recibida.value ? true : false,
          firma_acomp: firma_recibida_acomp.value ? true : false,
          firma_prof: firma_prof.value ? true : false,
        },
        ...HIC032,
        diagnostico: getHc.rips.diagn.length ? getHc.rips.diagn[0].cod : "",
      },
    }),
  });

  await impresion({ docDefinition });
};
const callbackCONSEN800 = (data) => {
  if (data) {
    HIC032.diagnostico = data.cod;
    descrip_diagnostico.value = data.descrip;
  }
  show_consen800.value = false;
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma.slice(22));
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma.slice(22));
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
