<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc103"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc103 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc103 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc103">
              {{ opcion_hc103 }}
            </q-chip>
          </p>
        </div>
      </q-card-section>

      <q-card-section>
        <span class="text-bold">DEFINICIÓN</span>
        <p class="text-justify">
          Es un instrumento que cuantifica el grado de sobrecarga que padecen los cuidadores de las personas dependientes. Consta de un listado de
          afirmaciones que describen cómo se sienten los cuidadores.
        </p>

        <span class="text-bold">APLICACIÓN DEL INSTRUMENTO</span>
        <p class="text-justify">
          A continuación, se presenta una lista de afirmaciones, en las cuales el cuidador debe indicar la frecuencia con que se siente así,
          utilizando una escala que consta de 0 (nunca), 1 (rara vez), 2 (algunas veces), 3 (bastantes veces) y 4 (casi siempre). A la hora de
          responder piense que no existen respuestas acertadas o equivocadas. Las puntuaciones obtenidas en cada ítem se suman, y la puntuación final
          representa el grado de sobrecarga del cuidador. Por tanto, la puntuación global oscila entre 0 y 88 puntos.
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
                <q-radio v-model="respuestas[props.row.id]" :val="props.col.value" color="primary" size="sm" />
              </template>
            </q-td>
          </template>
        </q-table>
      </q-card-section>

      <q-card-section>
        <span class="text-bold">INTERPRETACIÓN DE LOS RESULTADOS</span>
        <p class="text-justify">
          Puntuación máxima de 88 puntos. No existen normas ni puntos de corte establecidos. Sin embargo, suele considerarse indicativa de "no
          sobrecarga" una puntuación inferior a 46, y de "sobrecarga intensa" una puntuación superior a 56.
        </p>
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
        :disable="opcion_hc103 ? false : true"
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
import { impresionHIC103, impresion, generarArchivo } from "@/impresiones";
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
const HIC103 = reactive({
  fecha: "",
});

const questions = [
  { id: 1, question: "1. ¿Cree que su familiar solicita más ayuda de la que realmente necesita?" },
  { id: 2, question: "2. ¿Cree que debido al tiempo que dedica a su familiar ya no dispone de tiempo suficiente para usted?" },
  { id: 3, question: "3. ¿Se siente agobiado entre cuidar a su familiar y atender además otras responsabilidades en su trabajo o familia?" },
  { id: 4, question: "4. ¿Se siente avergonzado por la conducta de su familiar?" },
  { id: 5, question: "5. ¿Se siente enfadado cuando está cerca de su familiar?" },
  { id: 6, question: "6. ¿Piensa que su familiar afecta negativamente a su relación con otros miembros de su familia?" },
  { id: 7, question: "7. ¿Tiene miedo de lo que el futuro depare a su familiar?" },
  { id: 8, question: "8. ¿Cree que su familiar depende de usted?" },
  { id: 9, question: "9. ¿Se siente tenso cuando está cerca de su familiar?" },
  { id: 10, question: "10. ¿Cree que su salud se ha resentido por cuidar a su familiar?" },
  { id: 11, question: "11. ¿Cree que no tiene tanta intimidad como le gustaría debido a su familiar?" },
  { id: 12, question: "12. ¿Cree que su vida social se ha resentido por cuidar a su familiar?" },
  { id: 13, question: "13. ¿Se siente incómodo por desatender a sus amistades debido a su familiar?" },
  {
    id: 14,
    question:
      "14. ¿Cree que su familiar parece esperar que usted sea la persona que le cuide, como si usted fuera la única persona de quien depende?",
  },
  { id: 15, question: "15. ¿Cree que no tiene suficiente dinero para cuidar a su familiar además de sus otros gastos?" },
  { id: 16, question: "16. ¿Cree que será incapaz de cuidarle/a por mucho más tiempo?" },
  { id: 17, question: "17. ¿Siente que ha perdido el control de su vida desde la enfermedad de su familiar?" },
  { id: 18, question: "18. ¿Desearía poder dejar el cuidado de su familiar a otros?" },
  { id: 19, question: "19. ¿Se siente indeciso sobre qué hacer con su familiar?" },
  { id: 20, question: "20. ¿Cree que debería hacer más por su familiar?" },
  { id: 21, question: "21. ¿Cree que podría cuidar mejor de su familiar?" },
  { id: 22, question: "22. Globalmente, ¿qué grado de carga experimenta por el hecho de cuidar a su familiar?" },
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
});

const opcion_hc103 = ref(null);

onMounted(() => {
  HIC103.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc103.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC103",
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
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC103.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic103 = {
      autorizo: opcion_hc103.value == "AUTORIZAR" ? true : false,
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
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC103" },
      content: impresionHIC103({
        datos: datos_hic103,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC103" },
      content: impresionHIC103({
        datos: datos_hic103,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-103` });
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
