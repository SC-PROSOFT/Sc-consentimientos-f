<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form ref="form_hic" @submit="onSubmit">
        <div class="row">
          <p>Historia clínica numero:</p>
          <q-input disable type="text" dense class="col-1" v-model="llave" />
        </div>
        <div class="row">
          <p>Ciudad:</p>
          <q-input
            v-model="getEmpresa.CIUDAD_USUAR"
            class="col-3"
            type="text"
            readonly
            disable
            dense
          />
          <p>Fecha:</p>
          <q-input
            v-model="fecha_act"
            class="col-1"
            type="text"
            readonly
            disable
            dense
          />
        </div>
        <div class="row">
          <p>Yo,</p>
          <q-input
            v-model="getPaci.descrip"
            class="col-4"
            type="text"
            readonly
            outline
            dense
          />
          <p>, identificado (a) con cedula numero</p>
          <q-input
            type="text"
            dense
            class="col-2"
            v-model="getPaci.cod"
            readonly
          />
          <p>expedida en</p>
          <q-input
            type="text"
            dense
            class="col-2"
            v-model="getPaci.descrip_ciudad"
            readonly
          />
          <p>actuando en nombre propio.</p>

          <p>
            Comprendo que durante el procedimiento pueden aparecer
            circunstancias imprevisibles o inesperadas, que pueden requerir una
            extensión de otro procedimiento; acepto que las ciencias de la salud
            no son una ciencia exacta, que se garantizan resultados en la
            atención, y que, aunque son procedimientos seguros pueden
            presentarse complicaciones como:
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
          <p class="q-pt-md">
            Me han explicado también que de negarme a realizarme los exámenes
            diagnósticos, procedimientos y/o tratamientos ordenados, estoy
            asumiendo la responsabilidad por sus consecuencias, con lo que
            exonero de ellas el quipo asistencial tratante y la institución, sin
            embargo ello no significa que pierda mis derechos para una atención
            posterior. Se me ha informado que en la ESE salud Yopal, cuenta con
            personal idóneo, competente y capacitado para la determinación de
            conductas terapéuticas que contribuyan a mejorar mi calidad de vida
            y salud. Doy constancia de que se me ha explicado en lenguaje
            sencillo claro, y entendible para mí, los aspectos relacionados con
            mi condición actual, los riesgos y beneficios de los procedimientos;
            se me ha permitido hacer todas las preguntas necesarias, y han sido
            resueltas satisfactoriamente.
          </p>
          <p>
            Por lo tanto, en forma consciente y voluntaria, sin haber sido
            objeto de coacción, persuasión, ni manipulación:
          </p>
          <div class="row" v-show="HIC030.autorizo">
            <p>
              <ins class="text-bold">Autorizo</ins> al personal asistencial de
              la ESE Salud Yopal, para la realización de los procedimientos de
              salud: TOMA DE CITOLOGIA CERVICOVAGINAL, cuyo objetivo es:
            </p>
            <p>DETECCION TEMPRANA DE CANCER DE CERVIX, ante el diagnostico</p>
            <q-input
              dense
              ref="diag"
              type="text"
              class="col-2"
              :rules="[requerido]"
              v-model="HIC030.diagnostico"
            />
          </div>
          <div class="row" v-show="HIC030.revocar">
            <p>
              Expreso mi voluntad de
              <ins class="text-bold">revocar</ins> revocar el consentimiento
              presentado y declaro por tanto que, tras la información recibida,
              no consiento someterme al procedimiento de:
            </p>
            <q-input
              type="text"
              dense
              class="col-2"
              label="falta procedimiento"
            />
            <p>por los siguientes motivos:</p>
            <q-input
              type="text"
              dense
              class="col-7"
              v-model="HIC030.revocar_motivos"
              label="Ingrese motivos"
            />
          </div>

          <table class="col-12 q-pt-lg">
            <tr>
              <th style="border: 1px solid #ccc">
                <div class="row justify-left">
                  <span class="custum col-6"
                    >FECHA DE ULTIMA CITOLOGIA CEVIOVAGINAL:</span
                  >
                  <q-input
                    v-model="HIC030.fecha_ult_cito"
                    class="py-0 my-0 col-2"
                    type="date"
                    dense
                  />
                </div>
              </th>
              <th style="border: 1px solid #ccc">
                <div class="row justify-left">
                  <span class="custum col-6"
                    >ANTECEDENTES GINECOLOGICOS: G: P: C: V: A:</span
                  >
                  <q-input class="q-py-none q-my-none col-2" dense />
                </div>
              </th>
            </tr>
            <tr>
              <td>
                <p>
                  <strong
                    >TELEFONO 1:
                    <q-input
                      dense
                      type="number"
                      maxlength="10"
                      v-model="HIC030.telefono1"
                      class="q-py-none q-my-non"
                      style="min-width: 300px; display: inline-block"
                    />
                  </strong>
                </p>
                <p>
                  <strong
                    >TELEFONO 2:
                    <q-input
                      dense
                      type="number"
                      maxlength="10"
                      v-model="HIC030.telefono2"
                      class="q-py-none q-my-non"
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
      <div class="col-12 row justify-center q-mb-md">
        <q-btn
          class="q-mr-lg"
          color="green"
          icon-right="check_circle"
          label="Autorizo"
          type="submit"
          @click="grabarConsentimiento"
        />
        <!-- @click="() => !HIC030.revocar && btnAutorizo()" -->
        <q-btn
          color="amber"
          icon-right="block"
          label="Revocar"
          @click="() => !HIC030.autorizo && btnRevocar()"
        />
      </div>
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          @reciFirma="callBackFirma"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.cod || 'NO HAY ACOMPAÑANTE'"
          :disable="getAcomp.cod ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          @reciFirma="callBackFirma"
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
  </q-card>
</template>
<script setup>
import {
  useModuleFormatos,
  useApiContabilidad,
  useModuleCon851,
  useModuleCon851p,
} from "@/store";
import { ref, defineAsyncComponent, onMounted } from "vue";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() =>
  import("@/components/global/containerFirma.vue")
);

const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } =
  useModuleFormatos();
const { getDll$, _getFirma$, guardarFile$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const firma_recibida = ref("");
const form_hic = ref(null);
const diag = ref(null);

const llave = ref(null);
const fecha_act = ref(null);
const firma_prof = ref(null);

const HIC030 = ref({
  telefono1: "",
  telefono2: "",
  revocar: false,
  autorizo: false,
  diagnostico: "",
  antec_gineco: "",
  fecha_ult_cito: "",
  complicaciones: "",
  revocar_motivos: "",
});

const llaveFirmaConsen = () => {
  return `${getHc.llave}${dayjs().format("YYYYMMDDhhmm")}${getSesion.oper}`;
};
onMounted(() => {
  fecha_act.value = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  llave.value = getHc.llave.slice(15);

  getFirmaProf();
});

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({
      base64: firma_recibida.value,
      codigo: llave,
    });
    return CON851P("?", "info", "¿Deseas imprimir el consentimiento?");
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
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
const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma.slice(22));
};

const btnRevocar = () => {
  HIC030.value.revocar = !HIC030.value.revocar;
};

const btnAutorizo = () => {
  !HIC030.value.autorizo && setTimeout(() => diag.value.focus(), 100);
  HIC030.value.autorizo = !HIC030.value.autorizo;
};

const onSubmit = () => {
  console.log("--> onSubmit");
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  let datos = {
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC030",
    ...HIC030.value,
  };
  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma");
  }

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        return grabarFirmaConsen(data?.llave_consen);
      }
      CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al guardar el consentimiento");
    });
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
