<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc102"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc102 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc102 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc102">
              {{ opcion_hc102 }}
            </q-chip>
          </p>
        </div>
      </q-card-section>

      <q-card-section>
        <p class="text-bold">1.1.Cuestionario de Síntomas Self-Reporting Questionnaire (SRQ)</p>
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

      <q-card-section>
        <div class="col">
          <p class="text-bold">Determinación de la puntuación:</p>
          <p>Se suman las respuestas afirmativas.</p>
          <ol type="a">
            <li>Si la suma es 11 o más, de la pregunta número 1 a la 20 o</li>
            <li>si alguna de las preguntas 21 a 25 se responde afirmativamente (Sí)</li>
          </ol>
          <p>se debe hacer evaluación por el médico.</p>
          <p>
            Además, si el comportamiento de una persona entrevistada parece evidentemente raro o extraño (ejemplo: suspicaz, habla demasiado, triste o
            llora) debe tener también una evaluación, independientemente de las respuestas que se hayan dado en el cuestionario.
          </p>
        </div>
      </q-card-section>

      <q-card-section>
        <span class="text-bold">1.2.Cuestionario CIE 10 para ansiedad</span>
        <p>¿Durante el último mes ha tenido cualquiera de las siguientes quejas la mayoría del tiempo?</p>
        <ol type="I">
          <li>
            <div class="row">
              <div class="row">
                <p class="q-mt-md">¿Se ha venido sintiendo tenso o ansioso?</p>
                <q-radio color="primary" v-model="HIC102.preg_1_2_i" val="S" label="SI" />
                <q-radio color="primary" v-model="HIC102.preg_1_2_i" val="N" label="NO" />
              </div>
            </div>
          </li>
          <li>
            <div class="row">
              <div class="row">
                <p class="q-mt-md">¿Ha estado usted muy preocupado acerca de cosas?</p>
                <q-radio color="primary" v-model="HIC102.preg_1_2_ii" val="S" label="SI" />
                <q-radio color="primary" v-model="HIC102.preg_1_2_ii" val="N" label="NO" />
              </div>
            </div>
          </li>
        </ol>
        <span class="text-bold">Si contesta SI a alguna de las preguntas anteriores continúe con las siguientes:</span>
        <p class="text-bold">1. Ha experimentado en el último mes:</p>
        <ol type="a" class="list-none">
          <li>
            <q-checkbox v-model="HIC102.preg_1_a" true-value="S" false-value="N" label="¿Miedo a morir?" />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_1_b" true-value="S" false-value="N" label="¿Miedo a perder el control (descontrolarse)?" />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_1_c" true-value="S" false-value="N" label="¿Palpitaciones?" />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_1_d" true-value="S" false-value="N" label="¿Sudoración?" />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_1_e" true-value="S" false-value="N" label="¿Temblor?" />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_1_f" true-value="S" false-value="N" label="¿Opresión en el pecho y dificultad para respirar?" />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_1_g" true-value="S" false-value="N" label="¿Mareo, sensación de desmayo?" />
          </li>
          <li>
            <q-checkbox
              v-model="HIC102.preg_1_h"
              true-value="S"
              false-value="N"
              label="¿Sensación de hormigueo o adormecimiento de partes del cuerpo?"
            />
          </li>
          <li>
            <q-checkbox
              v-model="HIC102.preg_1_i"
              true-value="S"
              false-value="N"
              label="¿Sentimientos de desrealización (ver el mundo como si fuera un sueño o una película?"
            />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_1_j" true-value="S" false-value="N" label="¿Nauseas?" />
          </li>
        </ol>
        <p class="text-bold">2. Ha experimentado estos síntomas cuando:</p>
        <ol type="a" class="list-none">
          <li>
            <q-checkbox v-model="HIC102.preg_2_a" true-value="S" false-value="N" label="¿va a lugares desconocidos?" />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_2_b" true-value="S" false-value="N" label="¿Viaja solo (por ejemplo en trasporte público)?" />
          </li>
          <li>
            <q-checkbox
              v-model="HIC102.preg_2_c"
              true-value="S"
              false-value="N"
              label="¿Se encuentra en multitudes/lugares cerrados/lugares públicos?"
            />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_2_d" true-value="S" false-value="N" label="¿está en un ascensor?" />
          </li>
        </ol>
        <p class="text-bold">3. Miedo/ Ansiedad en situaciones sociales:</p>
        <ol type="a" class="list-none">
          <li>
            <q-checkbox v-model="HIC102.preg_3_a" true-value="S" false-value="N" label="¿Hablar en público?" />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_3_b" true-value="S" false-value="N" label="¿Eventos sociales?" />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_3_c" true-value="S" false-value="N" label="¿Comer delante de otras personas?" />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_3_d" true-value="S" false-value="N" label="¿Preocupación/tensión/sentimientos de temor?" />
          </li>
        </ol>
        <p class="text-bold">i. Durante el último mes se ha visto limitado en una o más de las siguientes áreas de su vida la mayoría del tiempo:</p>
        <ol type="a" class="list-none">
          <li>
            <q-checkbox v-model="HIC102.preg_i_a" true-value="S" false-value="N" label="¿Autocuidado (bañarse, vestirse, comer)?" />
          </li>
          <li>
            <q-checkbox
              v-model="HIC102.preg_i_b"
              true-value="S"
              false-value="N"
              label="¿Relaciones familiares (con el cónyuge, hijos, familiares)?"
            />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_i_c" true-value="S" false-value="N" label="¿Ir a trabajar o a estudiar?" />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_i_d" true-value="S" false-value="N" label="¿Hacer las labores domésticas?" />
          </li>
          <li>
            <q-checkbox
              v-model="HIC102.preg_i_e"
              true-value="S"
              false-value="N"
              label="¿Asistir a actividades sociales (verse con amigos, aficiones)?"
            />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_i_f" true-value="S" false-value="N" label="¿Recordar cosas (problemas de memoria)?" />
          </li>
        </ol>
        <p class="text-bold">ii. Debido a estos problemas durante el último mes:</p>
        <ol type="a" class="list-none">
          <li>
            <q-checkbox
              v-model="HIC102.preg_ii_a"
              true-value="S"
              false-value="N"
              label="¿Cuantos días fue usted incapaz de llevar a cabo sus labores diarias?"
            />
          </li>
          <li>
            <q-checkbox v-model="HIC102.preg_ii_b" true-value="S" false-value="N" label="¿Cuantos días pasó en cama para descansar? " />
          </li>
        </ol>
      </q-card-section>
      <q-card-section>
        <div class="col">
          <p>
            Sí I o II son positivos pero 1, 2 y 3 son negativos indica
            <span class="text-bold">Ansiedad Generalizada.</span>
          </p>
          <p>
            Sí I es afirmativo y 1 son positivos indica
            <span class="text-bold">Trastorno de Pánico. </span>
          </p>
          <p>
            Sí I y 2 son afirmativos indica
            <span class="text-bold">Agorafobia. </span>
          </p>
          <p>
            Sí I y 3 son afirmativos indica
            <span class="text-bold">Fobia Social. </span>
          </p>
          <p style="font-style: italic">En todos los casos anteriores la persona debe ser valorada por el médico.</p>
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
        :disable="opcion_hc102 ? false : true"
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
import { impresionHIC102, impresion, generarArchivo } from "@/impresiones";
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
});
const HIC102 = reactive({
  fecha: "",

  preg_1_2_i: "",
  preg_1_2_ii: "",
  preg_1_a: "N",
  preg_1_b: "N",
  preg_1_c: "N",
  preg_1_d: "N",
  preg_1_e: "N",
  preg_1_f: "N",
  preg_1_g: "N",
  preg_1_h: "N",
  preg_1_i: "N",
  preg_1_j: "N",

  preg_2_a: "N",
  preg_2_b: "N",
  preg_2_c: "N",
  preg_2_d: "N",

  preg_3_a: "N",
  preg_3_b: "N",
  preg_3_c: "N",
  preg_3_d: "N",

  preg_i_a: "N",
  preg_i_b: "N",
  preg_i_c: "N",
  preg_i_d: "N",
  preg_i_e: "N",

  preg_i_f: "N",
  preg_ii_a: "N",
  preg_ii_b: "N",
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

const opcion_hc102 = ref(null);

onMounted(() => {
  HIC102.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC102));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc102.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC102",
    disentimiento: "N",
    ...datos_format,
    preg_srq_1: respuestas.value[1],
    preg_srq_2: respuestas.value[2],
    preg_srq_3: respuestas.value[3],
    preg_srq_4: respuestas.value[4],
    preg_srq_5: respuestas.value[5],
    preg_srq_6: respuestas.value[6],
    preg_srq_7: respuestas.value[7],
    preg_srq_8: respuestas.value[8],
    preg_srq_9: respuestas.value[9],
    preg_srq_10: respuestas.value[10],
    preg_srq_11: respuestas.value[11],
    preg_srq_12: respuestas.value[12],
    preg_srq_13: respuestas.value[13],
    preg_srq_14: respuestas.value[14],
    preg_srq_15: respuestas.value[15],
    preg_srq_16: respuestas.value[16],
    preg_srq_17: respuestas.value[17],
    preg_srq_18: respuestas.value[18],
    preg_srq_19: respuestas.value[19],
    preg_srq_20: respuestas.value[20],
    preg_srq_21: respuestas.value[21],
    preg_srq_22: respuestas.value[22],
    preg_srq_23: respuestas.value[23],
    preg_srq_24: respuestas.value[24],
    preg_srq_25: respuestas.value[25],
  };
  console.log("datos -> ", datos);

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC102.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic102 = {
      autorizo: opcion_hc102.value == "AUTORIZAR" ? true : false,
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
      preg_srq_1: respuestas.value[1],
      preg_srq_2: respuestas.value[2],
      preg_srq_3: respuestas.value[3],
      preg_srq_4: respuestas.value[4],
      preg_srq_5: respuestas.value[5],
      preg_srq_6: respuestas.value[6],
      preg_srq_7: respuestas.value[7],
      preg_srq_8: respuestas.value[8],
      preg_srq_9: respuestas.value[9],
      preg_srq_10: respuestas.value[10],
      preg_srq_11: respuestas.value[11],
      preg_srq_12: respuestas.value[12],
      preg_srq_13: respuestas.value[13],
      preg_srq_14: respuestas.value[14],
      preg_srq_15: respuestas.value[15],
      preg_srq_16: respuestas.value[16],
      preg_srq_17: respuestas.value[17],
      preg_srq_18: respuestas.value[18],
      preg_srq_19: respuestas.value[19],
      preg_srq_20: respuestas.value[20],
      preg_srq_21: respuestas.value[21],
      preg_srq_22: respuestas.value[22],
      preg_srq_23: respuestas.value[23],
      preg_srq_24: respuestas.value[24],
      preg_srq_25: respuestas.value[25],
      ...HIC102,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC102" },
      content: impresionHIC102({
        datos: datos_hic102,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC102" },
      content: impresionHIC102({
        datos: datos_hic102,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-102` });
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
