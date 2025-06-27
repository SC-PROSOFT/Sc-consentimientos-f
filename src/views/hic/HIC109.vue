<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc109"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc109 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc109 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc109">
              {{ opcion_hc109 }}
            </q-chip>
          </p>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="col">
          <p>La puntación se calcula a partir de diez preguntas de SI/NO, con un punto por cada respuesta afirmativa:</p>
        </div>
        <q-table flat :rows="questions" :columns="columns" row-key="id" hide-bottom bordered denseflat :pagination="{ rowsPerPage: 0 }">
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th v-for="col in props.cols" :key="col.name" class="bg-primary text-white">
                <span style="font-size: 14px">{{ col.label }}</span>
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body-cell="props">
            <q-td
              :props="props"
              :class="['q-td', props.col.name === '2' || props.col.name === '3' ? 'bg-grey-5' : '']"
              style="max-width: 300px; white-space: normal; text-align: justify"
            >
              <template v-if="props.col.field === 'question'">
                <span style="font-size: 14px">{{ props.row.question }}</span>
              </template>
              <template v-else>
                <q-radio v-model="respuestas[props.row.id]" :val="props.col.value" color="primary" size="sm" />
              </template>
            </q-td>
          </template>
        </q-table>
        <div class="row" style="width: 100%">
          <div class="text-right q-pr-md" style="border: 1px solid #ccc; width: 70%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Puntuación obtenida (respuestas afirmativas)</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px">{{ puntosAfirmativos }}</p>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <p class="text-bold">Interpretación:</p>
        <div class="row" style="width: 100%">
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 10%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Puntos</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 10%">
            <p style="font-weight: bold; margin-top: 10px">Riesgo</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">Recomendaciones</p>
          </div>
          <div class="text-left q-pr-md" style="border: 1px solid #ccc; width: 10%">
            <p style="margin-top: 10px; margin-left: 10px">0-2 Puntos</p>
          </div>
          <div class="text-left q-pr-md" style="border: 1px solid #ccc; width: 10%">
            <p style="margin-top: 10px; margin-left: 10px">Sin riesgo</p>
          </div>
          <div class="text-left q-pr-md" style="border: 1px solid #ccc; width: 80%">
            <p style="margin-top: 10px; margin-left: 10px">Alta con seguimiento ambulatorio</p>
          </div>
          <div class="text-left q-pr-md" style="border: 1px solid #ccc; width: 10%">
            <p style="margin-top: 10px; margin-left: 10px">3-4 Puntos</p>
          </div>
          <div class="text-left q-pr-md" style="border: 1px solid #ccc; width: 10%">
            <p style="margin-top: 10px; margin-left: 10px">Riesgo bajo</p>
          </div>
          <div class="text-left q-pr-md" style="border: 1px solid #ccc; width: 80%">
            <p style="margin-top: 10px; margin-left: 10px">Seguimiento ambulatorio intensivo - Considerar ingreso psiquiátrico</p>
          </div>
          <div class="text-left q-pr-md" style="border: 1px solid #ccc; width: 10%">
            <p style="margin-top: 10px; margin-left: 10px">5-6 Puntos</p>
          </div>
          <div class="text-left q-pr-md" style="border: 1px solid #ccc; width: 10%">
            <p style="margin-top: 10px; margin-left: 10px">Riesgo medio</p>
          </div>
          <div class="text-left q-pr-md" style="border: 1px solid #ccc; width: 80%">
            <p style="margin-top: 10px; margin-left: 10px">Si no hay apoyo familiar estrecho debe internarse</p>
          </div>
          <div class="text-left q-pr-md" style="border: 1px solid #ccc; width: 10%">
            <p style="margin-top: 10px; margin-left: 10px">7-10 Puntos</p>
          </div>
          <div class="text-left q-pr-md" style="border: 1px solid #ccc; width: 10%">
            <p style="margin-top: 10px; margin-left: 10px">Riesgo alto</p>
          </div>
          <div class="text-left q-pr-md" style="border: 1px solid #ccc; width: 80%">
            <p style="margin-top: 10px; margin-left: 10px">Ingreso. Riesgo de intento inminente.</p>
          </div>
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
        :disable="opcion_hc109 ? false : true"
        @click="validarDatos"
        icon-right="check_circle"
        class="q-mr-lg"
        color="green"
        label="GRABAR"
        type="submit"
      />
    </div>
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { impresionHIC109, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive, computed } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const respuestas = ref({
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
});
const HIC109 = reactive({
  fecha: "",
});

const questions = [
  { id: 1, question: "1. Sex. Sexo Masculino" },
  { id: 2, question: "2. Age:  Edad (menor de 19 ó mayor 45 años)" },
  { id: 3, question: "3. Depression: Depresión" },
  { id: 4, question: "4. Previous Attempt: Intentos de suicidio previos" },
  { id: 5, question: "5. Ethanol abuse: Abuso de alcohol" },
  { id: 6, question: "6. Rational thinking los: Trastornos cognitivos" },
  { id: 7, question: "7. Social supports lacking: Sin apoyo social" },
  { id: 8, question: "8. Organized plan: Plan organizado de suicidio" },
  { id: 9, question: "9. No spouse: Sin pareja estable" },
  { id: 10, question: "10. Sickness: Enfermedad somática" },
];

const columns = [
  {
    name: "question",
    label: "Parametro - (Dar 1 punto a cada respuesta afirmativa)",
    align: "left",
    field: "question",
  },
  { name: "S", label: "SI", align: "center", field: "S", value: "S" },
  { name: "N", label: "NO", align: "center", field: "N", value: "N" },
];

const opcion_hc109 = ref(null);

const puntosAfirmativos = computed(() => {
  return Object.values(respuestas.value).filter((respuesta) => respuesta === "S").length;
});

onMounted(() => {
  HIC109.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC109));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc109.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC109",
    disentimiento: "N",
    ...datos_format,
    preg_1: respuestas.value[1],
    preg_2: respuestas.value[2],
    preg_3: respuestas.value[3],
    preg_4: respuestas.value[4],
    preg_5: respuestas.value[5],
    preg_6: respuestas.value[6],
    preg_7: respuestas.value[7],
    preg_8: respuestas.value[8],
    preg_9: respuestas.value[9],
    preg_10: respuestas.value[10],
  };
  console.log("datos -> ", datos);

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC109.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic109 = {
      autorizo: opcion_hc109.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      llave: getHc.llave.slice(15),
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      preg_1: respuestas.value[1],
      preg_2: respuestas.value[2],
      preg_3: respuestas.value[3],
      preg_4: respuestas.value[4],
      preg_5: respuestas.value[5],
      preg_6: respuestas.value[6],
      preg_7: respuestas.value[7],
      preg_8: respuestas.value[8],
      preg_9: respuestas.value[9],
      preg_10: respuestas.value[10],
      ...HIC109,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC109" },
      content: impresionHIC109({
        datos: datos_hic109,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC109" },
      content: impresionHIC109({
        datos: datos_hic109,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-109` });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
</script>

<style scoped>
.q-radio {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
