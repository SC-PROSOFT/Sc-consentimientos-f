<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc101"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc101 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc101 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc101">
              {{ opcion_hc101 }}
            </q-chip>
          </p>
        </div>
      </q-card-section>

      <q-card-section>
        <span class="text-bold">TEST AUDIT (ALCOHOL USE DISORDERS IDENTIFICATION TEST)</span>
        <p class="text-justify">
          Prueba de Identificación de Trastornos Relacionados con el Consumo de Alcohol, una prueba simple de diez preguntas desarrollada por la
          Organización Mundial de la Salud, que sirve para determinar si el consumo de alcohol de una persona puede considerarse peligroso.
        </p>

        <span class="text-bold">APLICACIÓN DEL INSTRUMENTO</span>

        <ul>
          <li>Las preguntas 1 a 3 están relacionadas con el consumo de alcohol.</li>
          <li>Las preguntas 4 a 6 están relacionadas con la dependencia del alcohol.</li>
          <li>Las preguntas 7 a 10 consideran problemas relacionados con el consumo de alcohol.</li>
        </ul>

        <p class="text-justify">
          El profesional de salud que realice la prueba debe informarle a la persona: Debido a que el uso del alcohol puede afectar su salud e
          interferir con ciertos medicamentos y tratamientos, es importante que le hagamos algunas preguntas sobre su uso del alcohol. Sus respuestas
          serán confidenciales, así que le agradecemos su honestidad. Para cada pregunta en la tabla siguiente, marque una X en el cuadro que mejor
          describa su respuesta.
        </p>
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
            <q-td :props="props" style="max-width: 300px; white-space: normal; text-align: justify">
              <template v-if="props.col.field === 'question'">
                <span style="font-size: 14px">{{ props.row.question }}</span>
              </template>
              <template v-else>
                <q-radio
                  v-if="labels_column[props.col.name][props.row.id] != ''"
                  v-model="respuestas[props.row.id]"
                  :label="labels_column[props.col.name][props.row.id]"
                  :val="props.col.value"
                  color="primary"
                  size="sm"
                />
              </template>
            </q-td>
          </template>
        </q-table>
        <div class="row" style="width: 100%">
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 23%">
            <p style="font-weight: bold; margin-top: 10px">Total</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 11%">
            <p style="font-weight: bold; margin-top: 10px">{{ calcularSumaColumna(0) }}</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 14%">
            <p style="font-weight: bold; margin-top: 10px">{{ calcularSumaColumna(1) }}</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 17%">
            <p style="font-weight: bold; margin-top: 10px">{{ calcularSumaColumna(2) }}</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 19%">
            <p style="font-weight: bold; margin-top: 10px">{{ calcularSumaColumna(3) }}</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 16%">
            <p style="font-weight: bold; margin-top: 10px">{{ calcularSumaColumna(4) }}</p>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <span class="text-bold">INTERPRETACIÓN DE LOS RESULTADOS</span>

        <div class="row" style="width: 100%">
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 25%">
            <p style="font-weight: bold; margin-top: 10px">HOMBRES</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 25%">
            <p style="font-weight: bold; margin-top: 10px">MUJERES</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 50%">
            <p style="font-weight: bold; margin-top: 10px">INDICACIÓN</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 25%">
            <p style="margin-top: 10px">8 o más puntos</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 25%">
            <p style="margin-top: 10px">7 o más puntos</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; width: 50%">
            <p style="margin-top: 10px">Fuerte probabilidad de daños debido al consumo de alcohol</p>
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
        :disable="opcion_hc101 ? false : true"
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
import { impresionHIC101, impresion, generarArchivo } from "@/impresiones";
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
const HIC101 = reactive({
  fecha: "",
});

const questions = [
  { id: 1, question: "1. ¿Con qué frecuencia consume alguna bebida alcohólica?" },
  { id: 2, question: "2. ¿Cuántas bebidas alcohólicas suele realizar en un día de consumo normal?" },
  { id: 3, question: "3. ¿Con qué frecuencia toma 5 o más bebidas alcohólicas en un solo día?" },
  { id: 4, question: "4. ¿En el último año, con qué frecuencia ha sido incapaz de parar de beber, una vez haya iniciado?" },
  { id: 5, question: "5. ¿En el último año, con qué frecuencia no pudo atender sus obligaciones porque había bebido?" },
  {
    id: 6,
    question:
      "6. ¿En el último año, con qué frecuencia ha necesitado beber en ayunas para recuperarse después de haber bebido mucho el día anterior?",
  },
  { id: 7, question: "7. ¿En el último año, con qué frecuencia ha tenido remordimientos o sentimientos de culpa después de haber bebido?" },
  {
    id: 8,
    question: "8. ¿En el último año, con qué frecuencia no ha podido recordar lo que sucedió la noche anterior porque había estado bebiendo?",
  },
  { id: 9, question: "9. ¿Usted o alguna otra persona ha resultado herido porque usted había bebido?" },
  {
    id: 10,
    question:
      "10. ¿Algún familiar, amigo, médico o profesional de la salud ha mostrado preocupación por un consumo de bebidas alcohólicas o le ha sugerido que deje de beber?",
  },
];

const columns = [
  { name: "question", label: "Pregunta", align: "left", field: "question" },
  { name: "0", label: "0", align: "center", field: "0", value: 0 },
  { name: "1", label: "1", align: "center", field: "1", value: 1 },
  { name: "2", label: "2", align: "center", field: "2", value: 2 },
  { name: "3", label: "3", align: "center", field: "3", value: 3 },
  { name: "4", label: "4", align: "center", field: "4", value: 4 },
];

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

const labels_column = {
  0: { 1: "Nunca", 2: "1 o 2", 3: "Nunca", 4: "Nunca", 5: "Nunca", 6: "Nunca", 7: "Nunca", 8: "Nunca", 9: "No", 10: "No" },
  1: {
    1: "Una o menos veces al mes",
    2: "3 o 4",
    3: "Menos de una vez al mes",
    4: "Menos de una vez al mes",
    5: "Menos de una vez al mes",
    6: "Menos de una vez al mes",
    7: "Menos de una vez al mes",
    8: "Menos de una vez al mes",
    9: "",
    10: "",
  },
  2: {
    1: "De 2 a 4 veces al mes",
    2: "5 o 6",
    3: "Mensualmente",
    4: "Mensualmente",
    5: "Mensualmente",
    6: "Mensualmente",
    7: "Mensualmente",
    8: "Mensualmente",
    9: "Sí, pero no en el último año",
    10: "Sí, pero no en el último año",
  },
  3: {
    1: "De 2 a 3 más veces a la semana",
    2: "De 7 a 9",
    3: "Semanalmente",
    4: "Semanalmente",
    5: "Semanalmente",
    6: "Semanalmente",
    7: "Semanalmente",
    8: "Semanalmente",
    9: "",
    10: "",
  },
  4: {
    1: "4 o más veces a la semana",
    2: "10 o más",
    3: "A diario o casi a diario",
    4: "A diario o casi a diario",
    5: "A diario o casi a diario",
    6: "A diario o casi a diario",
    7: "A diario o casi a diario",
    8: "A diario o casi a diario",
    9: "Sí, el último año",
    10: "Sí, el último año",
  },
};

const opcion_hc101 = ref(null);

onMounted(() => {
  HIC101.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc101.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC101",
    disentimiento: "N",
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
    total_0: calcularSumaColumna(0),
    total_1: calcularSumaColumna(1),
    total_2: calcularSumaColumna(2),
    total_3: calcularSumaColumna(3),
    total_4: calcularSumaColumna(4),
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC101.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic101 = {
      autorizo: opcion_hc101.value == "AUTORIZAR" ? true : false,
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
      total_0: calcularSumaColumna(0),
      total_1: calcularSumaColumna(1),
      total_2: calcularSumaColumna(2),
      total_3: calcularSumaColumna(3),
      total_4: calcularSumaColumna(4),
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC101" },
      content: impresionHIC101({
        datos: datos_hic101,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC101" },
      content: impresionHIC101({
        datos: datos_hic101,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-101` });
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
}
</style>
