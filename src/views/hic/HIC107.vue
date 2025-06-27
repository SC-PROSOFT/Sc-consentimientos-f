<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc107"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc107 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc107 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc107">
              {{ opcion_hc107 }}
            </q-chip>
          </p>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="col">
          <p class="text-bold">DEFINICIÓN</p>
          <p>
            Este instrumento se aplica a las personas a partir de los 16 años de edad y consta de 30 preguntas, referidas a los últimos 30 días (el
            último mes).
          </p>
          <p class="text-bold">APLICACIÓN DEL INSTRUMENTO</p>
          <p>Puede ser auto aplicado o a manera de entrevista estructurada. La persona responde SI o NO dependiendo de su vivencia.</p>
          <p>
            Las primeras 20 preguntas se refieren a problemas de salud mental como depresión, ansiedad y otros. Once o más respuestas positivas en
            este grupo determinan una alta probabilidad de sufrir uno de estos problemas.
          </p>
          <p>De la 21 a la 24 evalúa posible psicosis. Con una respuesta positiva se considera un posible caso.</p>
          <p>La respuesta positiva a la pregunta 25 indica alta probabilidad de sufrir un trastorno convulsivo.</p>
          <p>
            Las preguntas 26 a 30 indican problemas relacionados con el alcohol; la respuesta positiva a una sola de ellas determina que la persona
            tiene alto riesgo de sufrir alcoholismo.
          </p>
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
        :disable="opcion_hc107 ? false : true"
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
import { impresionHIC107, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
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
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
  21: "",
  22: "",
  23: "",
  24: "",
  25: "",
  26: "",
  27: "",
  28: "",
  29: "",
  30: "",
});
const HIC107 = reactive({
  fecha: "",
});

const questions = [
  { id: 1, question: "1. ¿Tiene frecuentes dolores de cabeza?" },
  { id: 2, question: "2. ¿Tiene mal apetito?" },
  { id: 3, question: "3. ¿Duerme mal?" },
  { id: 4, question: "4. ¿Se asusta con facilidad?" },
  { id: 5, question: "5. ¿Sufre de temblor de manos?" },
  { id: 6, question: "6. ¿Se siente nervioso, tenso o aburrido?" },
  { id: 7, question: "7. ¿Sufre de mala digestión?" },
  { id: 8, question: "8. ¿No puede pensar con claridad?" },
  { id: 9, question: "9. ¿Se siente triste?" },
  { id: 10, question: "10. ¿Llora usted con mucha frecuencia?" },
  { id: 11, question: "11. ¿Tiene dificultad en disfrutar sus actividades diarias?" },
  { id: 12, question: "12. ¿Tiene dificultad para tomar decisiones?" },
  { id: 13, question: "13. ¿Tiene dificultad en hacer su trabajo? (¿Sufre usted con su trabajo?)" },
  { id: 14, question: "14. ¿Es incapaz de desempeñar un papel útil en su vida?" },
  { id: 15, question: "15. ¿Ha perdido interés en las cosas?" },
  { id: 16, question: "16. ¿Siente que usted es una persona inútil?" },
  { id: 17, question: "17. ¿Ha tenido la idea de acabar con su vida?" },
  { id: 18, question: "18. ¿Se siente cansado todo el tiempo?" },
  { id: 19, question: "19. ¿Tiene sensaciones desagradables en su estómago?" },
  { id: 20, question: "20. ¿Se cansa con facilidad?" },
  { id: 21, question: "21. ¿Siente usted que alguien ha tratado de herirlo en alguna forma?" },
  { id: 22, question: "22. ¿Es usted una persona mucho más importante de lo que piensan los demás?" },
  { id: 23, question: "23. ¿Ha notado interferencias o algo raro en su pensamiento?" },
  { id: 24, question: "24. ¿Oye voces sin saber de dónde vienen o que otras personas no pueden oír?" },
  {
    id: 25,
    question:
      "25. ¿Ha tenido convulsiones, ataques o caídas al suelo, con movimientos de brazos y piernas; con mordedura de la lengua o pérdida del conocimiento?",
  },
  {
    id: 26,
    question: "26. ¿Alguna vez le ha parecido a su familia, sus amigos, su médico o a su sacerdote que usted estaba bebiendo demasiado licor?",
  },
  {
    id: 27,
    question: "27. ¿Alguna vez ha querido dejar de beber, pero no ha podido?",
  },
  {
    id: 28,
    question:
      "28. ¿Ha tenido alguna vez dificultades en el trabajo (o estudio) a causa de la bebida, como beber en el trabajo o en el colegio, o faltar a ellos?",
  },
  {
    id: 29,
    question: "29. ¿Ha estado en riñas o lo han detenido estando borracho?",
  },
  {
    id: 30,
    question: "30. ¿Le ha parecido alguna vez que usted bebía demasiado?",
  },
];

const columns = [
  {
    name: "question",
    label: "Pregunta",
    align: "left",
    field: "question",
  },
  { name: "S", label: "SI", align: "center", field: "S", value: "S" },
  { name: "N", label: "NO", align: "center", field: "N", value: "N" },
];

const opcion_hc107 = ref(null);

onMounted(() => {
  HIC107.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC107));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc107.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC107",
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
    preg_11: respuestas.value[11],
    preg_12: respuestas.value[12],
    preg_13: respuestas.value[13],
    preg_14: respuestas.value[14],
    preg_15: respuestas.value[15],
    preg_16: respuestas.value[16],
    preg_17: respuestas.value[17],
    preg_18: respuestas.value[18],
    preg_19: respuestas.value[19],
    preg_20: respuestas.value[20],
    preg_21: respuestas.value[21],
    preg_22: respuestas.value[22],
    preg_23: respuestas.value[23],
    preg_24: respuestas.value[24],
    preg_25: respuestas.value[25],
    preg_26: respuestas.value[25],
    preg_27: respuestas.value[25],
    preg_28: respuestas.value[25],
    preg_29: respuestas.value[25],
    preg_30: respuestas.value[25],
  };
  console.log("datos -> ", datos);

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC107.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic107 = {
      autorizo: opcion_hc107.value == "AUTORIZAR" ? true : false,
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
      preg_11: respuestas.value[11],
      preg_12: respuestas.value[12],
      preg_13: respuestas.value[13],
      preg_14: respuestas.value[14],
      preg_15: respuestas.value[15],
      preg_16: respuestas.value[16],
      preg_17: respuestas.value[17],
      preg_18: respuestas.value[18],
      preg_19: respuestas.value[19],
      preg_20: respuestas.value[20],
      preg_21: respuestas.value[21],
      preg_22: respuestas.value[22],
      preg_23: respuestas.value[23],
      preg_24: respuestas.value[24],
      preg_25: respuestas.value[25],
      preg_26: respuestas.value[25],
      preg_27: respuestas.value[25],
      preg_28: respuestas.value[25],
      preg_29: respuestas.value[25],
      preg_30: respuestas.value[25],
      ...HIC107,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC107" },
      content: impresionHIC107({
        datos: datos_hic107,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC107" },
      content: impresionHIC107({
        datos: datos_hic107,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-107` });
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
