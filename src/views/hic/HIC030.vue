<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc030"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc030 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc030 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc030">
              {{ opcion_hc030 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p>Historia clínica numero:</p>
          <q-input disable type="text" dense class="col-1" v-model="llave" />
        </div>
        <div class="row">
          <p>Ciudad:</p>
          <q-input v-model="getEmpresa.ciudad_usuar" class="col-3" type="text" readonly disable dense />
          <p>Fecha:</p>
          <q-input v-model="fecha_act" class="col-1" type="text" readonly disable dense />
        </div>
        <div class="row">
          <p>Yo,</p>
          <q-input v-model="getPaci.descrip" class="col-4" type="text" readonly outline dense />
          <p>, identificado (a) con cedula numero</p>
          <q-input type="text" dense class="col-2" v-model="getPaci.cod" readonly />
          <p>expedida en</p>
          <q-input type="text" dense class="col-2" v-model="getPaci.descrip_ciudad" readonly />
          <p>actuando en nombre propio.</p>

          <p class="text-justify">
            Comprendo que durante el procedimiento pueden aparecer circunstancias imprevisibles o inesperadas, que pueden requerir una extensión de
            otro procedimiento; acepto que las ciencias de la salud no son una ciencia exacta, que se garantizan resultados en la atención, y que,
            aunque son procedimientos seguros pueden presentarse complicaciones como:
          </p>
          <ul>
            <li>SANGRADO</li>
            <li>COLOR</li>
            <li>PELLIZCOS</li>
          </ul>
          <q-input
            placeholder="Ingrese complicaciones"
            v-model="HIC030.complicaciones"
            maxlength="285"
            type="textarea"
            class="col-12"
            autogrow
            counter
            dense
          />
          <p class="q-pt-md text-justify">
            Me han explicado también que de negarme a realizarme los exámenes diagnósticos, procedimientos y/o tratamientos ordenados, estoy asumiendo
            la responsabilidad por sus consecuencias, con lo que exonero de ellas el quipo asistencial tratante y la institución, sin embargo ello no
            significa que pierda mis derechos para una atención posterior. Se me ha informado que en la {{ getEmpresa.nomusu }}, cuenta con personal
            idóneo, competente y capacitado para la determinación de conductas terapéuticas que contribuyan a mejorar mi calidad de vida y salud. Doy
            constancia de que se me ha explicado en lenguaje sencillo claro, y entendible para mí, los aspectos relacionados con mi condición actual,
            los riesgos y beneficios de los procedimientos; se me ha permitido hacer todas las preguntas necesarias, y han sido resueltas
            satisfactoriamente.
          </p>
          <p>Por lo tanto, en forma consciente y voluntaria, sin haber sido objeto de coacción, persuasión, ni manipulación:</p>
          <div class="row" v-show="opcion_hc030 == 'AUTORIZAR'">
            <p>
              <ins class="text-bold">Autorizo</ins> al personal asistencial de la {{ getEmpresa.nomusu }}, para la realización de los procedimientos
              de salud: TOMA DE CITOLOGIA CERVICOVAGINAL, cuyo objetivo es:
            </p>
            <p>DETECCION TEMPRANA DE CANCER DE CERVIX, ante el diagnostico</p>
            <Input_
              class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"
              @validate="datoCodigoEnfermedad"
              v-model="HIC030.diagnostico"
              :field="form.codigo"
            />
            <q-input dense disable outlined type="text" class="col-2" maxlength="4" v-model="descrip_diagnostico" />
          </div>
          <div class="row" v-show="opcion_hc030 == 'REVOCAR'">
            <p>
              Expreso mi voluntad de
              <ins class="text-bold">revocar</ins> revocar el consentimiento presentado y declaro por tanto que, tras la información recibida, no
              consiento someterme al procedimiento de toma de citologia
            </p>

            <p>por los siguientes motivos:</p>
            <q-input v-model="HIC030.revocar_motivos" ref="revocar_motivos" maxlength="285" :rules="[requerido]" class="col-7" type="text" dense />
          </div>

          <table class="col-12 q-pt-lg">
            <tr>
              <th style="border: 1px solid #ccc">
                <div style="display: flex">
                  <span class="q-my-auto q-mx-md col-8">FECHA DE ULTIMA CITOLOGIA CERVICOVAGINAL:</span>
                  <q-input class="col-3" v-model="HIC030.fecha_ult_cito" :rules="[requerido]" :max="fecha_act" type="date" dense />
                </div>
              </th>
            </tr>
            <tr>
              <td style="border: 1px solid #ccc">
                <p>
                  <strong
                    >TELEFONO 1:
                    <q-input
                      dense
                      unmasked-value
                      mask="(###) ### - ####"
                      v-model="HIC030.telefono1"
                      class="q-py-none q-my-telefono2"
                      style="min-width: 300px; display: inline-block"
                    />
                  </strong>
                </p>
                <p>
                  <strong
                    >TELEFONO 2:
                    <q-input
                      dense
                      unmasked-value
                      mask="(###) ### - ####"
                      v-model="HIC030.telefono2"
                      class="q-py-none q-my-non"
                      :disable="!HIC030.telefono1"
                      style="min-width: 300px; display: inline-block"
                    />
                  </strong>
                </p>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </q-form>
    </q-card-section>
    <q-separator />

    <q-card-actions>
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
          @reciFirma="callBackFirmaProf"
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.registro_profe"
          quien_firma="FIRMA PROFESIONAL"
          class="col-4"
        />
      </div>
      <div class="col-12 row justify-center q-my-md">
        <q-btn
          :disable="opcion_hc030 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mr-lg"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card-actions>
    <CONSEN800 v-if="show_consen800" @esc="callbackCONSEN800" @enter="callbackCONSEN800" />
  </q-card>
</template>
<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { impresionHIC030, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const router = useRouter();
const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const CONSEN800 = defineAsyncComponent(() => import("@/components/consen/CONSEN800.vue"));

const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const descrip_diagnostico = ref(null);

const show_consen800 = ref(null);

const opcion_hc030 = ref(null);
const fecha_citologia = ref(null);
const llave = ref(null);
const fecha_act = ref(null);
const firma_prof = ref(null);
const huella_paci = ref(null);

const form = ref({
  codigo: {
    id: "codigo",
    label: "",
    maxlength: "4",
    f0: ["f8"],
    required: true,
    campo_abierto: true,
  },
  cant_antec_gineco: {
    label: "",
    tipo: "number",
    maxlength: "1",
    required: true,
    campo_abierto: true,
    id: "cant_antec_gineco",
  },
  antecedentes: {
    label: "",
    maxlength: 1,
    required: true,
    placeholder: "",
    campo_abierto: true,
    id: "antecedentes",
  },
});

const antecedenter = [
  { value: "G", label: "G" },
  { value: "P", label: "P" },
  { value: "C", label: "C" },
  { value: "V", label: "V" },
  { value: "A", label: "A" },
];

const revocar_motivos = ref(null);

const HIC030 = ref({
  telefono1: "",
  telefono2: "",
  diagnostico: "",
  antec_gineco: "",
  fecha_ult_cito: "",
  complicaciones: "",
  revocar_motivos: "",
  cant_antec_gineco: "",
});

watch(opcion_hc030, (val) => {
  if (val == "AUTORIZAR") {
    HIC030.value.revocar_motivos = "";
  } else {
    HIC030.value.diagnostico = "";
  }
});

onMounted(() => {
  fecha_act.value = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  llave.value = getHc.llave.slice(15);
  if (getHc.rips.diagn.length) {
    HIC030.value.diagnostico = getHc.rips.diagn[0].cod;
    descrip_diagnostico.value = getHc.rips.diagn[0].descrip;
  }
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
      data: { llave: "2" + HIC030.value.diagnostico },
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

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaProf = (data_firma) => {
  data_firma && (firma_prof.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};

const validarDatos = async () => {
  const requiere = "Le falta por completar el campo";
  await consultarEnfermedad();
  if (opcion_hc030.value == "REVOCAR") {
    revocar_motivos.value.validate();
    if (revocar_motivos.value.hasError) return revocar_motivos.value.focus();
  }

  //TODO: SE OCULTA ANTECEDENTE GINECOLOGICOS (YOPAL)
  // if (fecha_citologia.value && (!HIC030.value.cant_antec_gineco || !HIC030.value.antec_gineco)) {
  //   return CON851("?", "info", `Complete campos de antecedentes`, () => foco_(form, "cant_antec_gineco"));
  // }

  if (opcion_hc030.value == "AUTORIZAR") {
    if (!HIC030.value.diagnostico) return CON851("?", "info", "No hay ningun codigo del diagnostico");
  }
  grabarConsentimiento();
};
const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC030.value));

  datos_format.fecha_ult_cito = dayjs(datos_format.fecha_ult_cito).format("YYYYMMDD");
  let datos = {
    estado: opcion_hc030.value == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC030",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };
  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañate");
  }
  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(24, 32);
        fecha_act.value = dayjs(fecha).format("YYYY-MM-DD");
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
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    getAcomp.cod && (await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` }));

    if (getEmpresa.envio_email == "N") {
      await imprimirConsen();
      return router.back();
    }
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

const imprimirConsen = async () => {
  try {
    const datos_hic030 = {
      autorizo: opcion_hc030.value == "AUTORIZAR" ? true : false,
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
      fecha: fecha_act.value,
      llave: llave.value,
      diagnostico: getHc.rips.diagn.length ? getHc.rips.diagn[0].cod : "",
      ...HIC030.value,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: firmas,
      content: impresionHIC030({
        datos: datos_hic030,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: firmas,
      content: impresionHIC030({
        datos: datos_hic030,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

const callbackCONSEN800 = (data) => {
  if (data) {
    HIC030.value.diagnostico = data.cod;
    descrip_diagnostico.value = data.descrip;
  }
  show_consen800.value = false;
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
span.custum {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
