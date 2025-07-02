<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc100"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc100 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc100 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc100">
              {{ opcion_hc100 }}
            </q-chip>
          </p>
        </div>

        <div class="row justify-between items-center">
          <!-- <p>
            <span class="text-bold">Ciudad:&nbsp;</span>
            <span>{{ getPaci.descrip_ciudad }} &nbsp;</span>
            <span class="text-bold">Fecha:&nbsp;</span>
            <span>{{ HIC100.fecha }}</span>
          </p> -->
          <!-- <p><span class="text-bold">Nombre:</span> {{ getPaci.descrip }}&nbsp;</p> -->
          <!-- <p><span class="text-bold">Tipo y numero documento de identificación:</span> {{ getPaci.tipo_id + " " + getPaci.cod }} &nbsp;</p> -->
          <!-- <p>
              <span class="text-bold">N° Historia Clínica: &nbsp;</span><span>{{ getHc.llave.slice(15) }}</span> &nbsp;
            </p> -->
          <!-- <p>
              <span class="text-bold">Edad: &nbsp;</span><span>{{ calcularEdad(getPaci.nacim) }}</span> &nbsp;
            </p> -->
        </div>
      </q-card-section>

      <q-card-section>
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
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px">Total por columnas</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 25%">
            <p style="font-weight: bold; margin-top: 10px">(0) En lo absoluto</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 25%">
            <p style="font-weight: bold; margin-top: 10px">(1) Varios días</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 25%">
            <p style="font-weight: bold; margin-top: 10px">(2) Más de la mitad de los días</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 25%">
            <p style="font-weight: bold; margin-top: 10px">(3) Casi todos los días</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 25%">
            <p>{{ calcularSumaColumna(0) }}</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 25%">
            <p>{{ calcularSumaColumna(1) }}</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 25%">
            <p>{{ calcularSumaColumna(2) }}</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 25%">
            <p>{{ calcularSumaColumna(3) }}</p>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <span class="text-bold"> (Profesional de la salud: Para la interpretación del TOTAL, consulte la tarjeta de puntuación adjunta). </span>
      </q-card-section>

      <div class="row q-pa-xs">
        <div class="row q-pa-md" style="width: 100%">
          <div class="text-justify q-pa-xs" style="border: 1px solid #ccc; width: 40%">
            <p style="margin-top: 10px">
              10. Si marcó algún problema, ¿qué tan difícil le han resultado estos problemas para hacer su trabajo, ocuparse de las cosas en casa o
              llevarse bien con otras personas?
            </p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <q-radio color="primary" v-model="HIC100.pregunta_10" val="0" label="Nada difícil" />
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <q-radio color="primary" v-model="HIC100.pregunta_10" val="1" label="Algo difícil" />
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <q-radio color="primary" v-model="HIC100.pregunta_10" val="2" label="Muy difícil" />
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <q-radio color="primary" v-model="HIC100.pregunta_10" val="3" label="Extremadamente difícil" />
          </div>
        </div>
      </div>
      <q-card-section>
        <span class="text-bold">Para diagnóstico inicial:</span>
        <ol>
          <li>
            <p>El paciente completa el PHQ-9, Evaluación Rápida de Depresión.</p>
          </li>
          <li>
            <p>
              Si hay al menos 4 ✓ en la sección sombreada (incluyendo las Preguntas #1 y #2), considerar un trastorno depresivo. Sume los puntajes
              para determinar la gravedad.
            </p>
          </li>
        </ol>
        <span class="text-bold">Considere Trastorno Depresivo Mayor</span>
        <ul>
          <li>
            <p>Si hay al menos 5 ✓ en la sección sombreada (una de las cuales corresponde a la Pregunta #1 o #2).</p>
          </li>
        </ul>

        <span class="text-bold">Considere Otro Trastorno Depresivo</span>
        <ul>
          <li>
            <p>Si hay 2-4 ✓ en la sección sombreada (una de las cuales corresponde a la Pregunta #1 o #2).</p>
          </li>
        </ul>
        <p class="text-justify">
          <span class="text-bold">Nota:</span>
          Dado que el cuestionario se basa en el autoinforme del paciente, todas las respuestas deben ser verificadas por el clínico, y el diagnóstico
          definitivo se realiza en base a criterios clínicos, considerando qué tan bien el paciente entendió el cuestionario, así como otra
          información relevante del paciente.
        </p>
        <p class="text-justify">
          Los diagnósticos de Trastorno Depresivo Mayor u Otro Trastorno Depresivo también requieren deterioro en el funcionamiento social, laboral u
          otras áreas importantes (Pregunta #10) y descartar duelo normal, antecedentes de un Episodio Maníaco (Trastorno Bipolar) o un trastorno
          físico, medicamento u otra sustancia como causa biológica de los síntomas depresivos.
        </p>

        <span class="text-bold"
          >Para monitorear la gravedad en el tiempo en pacientes recién diagnosticados o en tratamiento actual por depresión:</span
        >
        <ol>
          <li>
            <p>
              Los pacientes pueden completar los cuestionarios al inicio y en intervalos regulares (ej., cada 2 semanas) en casa y traerlos en su
              próxima cita para su puntuación, o pueden completarlo durante cada cita programada.
            </p>
          </li>
          <li>
            <p>Sume las ✓ por columna. Por cada ✓: Varios días = 1; Más de la mitad de los días = 2; Casi todos los días = 3.</p>
          </li>
          <li>
            <p>Sume los puntajes de las columnas para obtener un TOTAL.</p>
          </li>
          <li>
            <p>Consulte el Cuadro de Puntuación del PHQ-9 adjunto para interpretar el puntaje TOTAL.</p>
          </li>
          <li>
            <p>
              Los resultados pueden incluirse en el expediente del paciente para ayudar a establecer un objetivo de tratamiento, determinar el grado
              de respuesta y guiar la intervención terapéutica.
            </p>
          </li>
        </ol>

        <p class="text-bold">Puntuación: sume todas las casillas marcadas en el PHQ-9</p>
        <p class="text-justify">Por cada ✓ Nada = 0; Varios días = 1;</p>
        <p class="text-justify">Más de la mitad de los días = 2; Casi todos los días = 3.</p>

        <span class="text-bold">Interpretación del Puntaje Total</span>
        <div class="row">
          <div class="row q-pa-md" style="width: 100%">
            <div class="text-center q-pa-xs" style="border: 1px solid #ccc; background-color: #123d7d; width: 15%">
              <p class="text-bold" style="margin-top: 10px; color: white">Rango</p>
            </div>
            <div class="text-center q-pa-xs" style="border: 1px solid #ccc; background-color: #123d7d; width: 85%">
              <p class="text-bold" style="margin-top: 10px; color: white">Gravedad de la Depresión</p>
            </div>
            <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 15%">
              <p style="margin-top: 10px">1 - 4</p>
            </div>
            <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 85%">
              <p style="margin-top: 10px">Depresión mínima</p>
            </div>
            <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 15%">
              <p style="margin-top: 10px">5 - 9</p>
            </div>
            <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 85%">
              <p style="margin-top: 10px">Depresión leve</p>
            </div>
            <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 15%">
              <p style="margin-top: 10px">10 - 14</p>
            </div>
            <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 85%">
              <p style="margin-top: 10px">Depresión moderada</p>
            </div>
            <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 15%">
              <p style="margin-top: 10px">15 - 19</p>
            </div>
            <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 85%">
              <p style="margin-top: 10px">Depresión moderadamente grave</p>
            </div>
            <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 15%">
              <p style="margin-top: 10px">20 - 27</p>
            </div>
            <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 85%">
              <p style="margin-top: 10px">Depresión grave</p>
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <p class="text-bold">PHQ-9 Copyright © Pfizer Inc. Todos los derechos reservados. Reproducido con permiso.</p>
        <p class="text-bold">PRIME-MD® es una marca registrada de Pfizer Inc.</p>
        <p class="text-bold">A2662B 10-04-2005</p>
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
        :disable="opcion_hc100 ? false : true"
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
import { impresionHIC100, impresion, generarArchivo } from "@/impresiones";
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
const HIC100 = reactive({
  fecha: "",
  pregunta_10: "",
});

const questions = [
  { id: 1, question: "1. Poco interés o placer en hacer las cosas" },
  { id: 2, question: "2. Sentirse decaído, deprimido o sin energía" },
  { id: 3, question: "3. Dificultad para conciliar el sueño o permanecer dormido, o dormir demasiado" },
  { id: 4, question: "4. Sentirse cansado o con poca energía" },
  { id: 5, question: "5. Poco apetito o comer en exceso" },
  { id: 6, question: "6. Sentirse mal consigo mismo... o que es un fracaso o que se ha decepcionado a sí mismo o a su familia" },
  { id: 7, question: "7. Dificultad para concentrarse en cosas, como leer el periódico o ver la televisión" },
  {
    id: 8,
    question:
      "8. Moverse o hablar tan despacio que otras personas podrían haberlo notado. O lo contrario, estar tan inquieto o inquieto que se ha estado moviendo mucho más de lo habitual",
  },
  {
    id: 9,
    question: "9. Pensamientos de que lo darían por muerto o de hacerse daño",
  },
];

const columns = [
  {
    name: "question",
    label: "Durante  las ultimas 2 semanas ¿con que frecuencia ha presentado alguno de los siguientes problemas?",
    align: "left",
    field: "question",
  },
  { name: "0", label: "(0) En lo absoluto", align: "center", field: "0", value: 0 },
  { name: "1", label: "(1) Varios días", align: "center", field: "1", value: 1 },
  { name: "2", label: "(2) Más de la mitad de los días", align: "center", field: "2", value: 2 },
  { name: "3", label: "(3) Casi todos los días", align: "center", field: "3", value: 3 },
];

const respuestas = ref({
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
});

const opcion_hc100 = ref(null);

onMounted(() => {
  HIC100.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  getFirmaProf();
});
const calcularSumaColumna = (columna) => {
  return Object.values(respuestas.value).reduce((suma, respuesta) => {
    return respuesta === columna ? suma + 1 : suma;
  }, 0);
};
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
  //   if (!firma_recibida.value && !getAcomp.cod) {
  //     return CON851("?", "info", "No se ha realizado la firma del paciente");
  //   }
  //   if (getAcomp.cod && !firma_recibida_acomp.value) {
  //     return CON851("?", "info", "No se ha realizado la firma del acompañante");
  //   }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc100.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC100",
    disentimiento: "N",
    pregunta_1: respuestas.value[1],
    pregunta_2: respuestas.value[2],
    pregunta_3: respuestas.value[3],
    pregunta_4: respuestas.value[4],
    pregunta_5: respuestas.value[5],
    pregunta_6: respuestas.value[6],
    pregunta_7: respuestas.value[7],
    pregunta_8: respuestas.value[8],
    pregunta_9: respuestas.value[9],
    pregunta_10: HIC100.pregunta_10,
    total_0: calcularSumaColumna(0),
    total_1: calcularSumaColumna(1),
    total_2: calcularSumaColumna(2),
    total_3: calcularSumaColumna(3),
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC100.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic100 = {
      autorizo: opcion_hc100.value == "AUTORIZAR" ? true : false,
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
      pregunta_1: respuestas.value[1],
      pregunta_2: respuestas.value[2],
      pregunta_3: respuestas.value[3],
      pregunta_4: respuestas.value[4],
      pregunta_5: respuestas.value[5],
      pregunta_6: respuestas.value[6],
      pregunta_7: respuestas.value[7],
      pregunta_8: respuestas.value[8],
      pregunta_9: respuestas.value[9],
      pregunta_10: HIC100.pregunta_10,
      total_0: calcularSumaColumna(0),
      total_1: calcularSumaColumna(1),
      total_2: calcularSumaColumna(2),
      total_3: calcularSumaColumna(3),
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC100" },
      content: impresionHIC100({
        datos: datos_hic100,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC100" },
      content: impresionHIC100({
        datos: datos_hic100,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-100` });
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
