<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc099"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc099 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc099 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc099">
              {{ opcion_hc099 }}
            </q-chip>
          </p>
        </div>

        <div class="row justify-between items-center">
          <p>
            <span class="text-bold">Ciudad:&nbsp;</span>
            <span>{{ getPaci.descrip_ciudad }} &nbsp;</span>
            <span class="text-bold">Fecha:&nbsp;</span>
            <span>{{ HIC099.fecha }}</span>
          </p>
          <p><span class="text-bold">Nombre:</span> {{ getPaci.descrip }}&nbsp;</p>
          <p><span class="text-bold">Tipo y numero documento de identificación:</span> {{ getPaci.tipo_id + " " + getPaci.cod }} &nbsp;</p>
          <!-- <p>
            <span class="text-bold">N° Historia Clínica: &nbsp;</span><span>{{ getHc.llave.slice(15) }}</span> &nbsp;
          </p> -->
          <!-- <p>
            <span class="text-bold">Edad: &nbsp;</span><span>{{ calcularEdad(getPaci.nacim) }}</span> &nbsp;
          </p> -->
        </div>
      </q-card-section>

      <q-card-section>
        <q-table flat :rows="questions" :columns="columns" row-key="id" hide-bottom bordered denseflat>
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th v-for="col in props.cols" :key="col.name" class="bg-primary text-white">
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body-cell="props">
            <q-td :props="props">
              <template v-if="props.col.field === 'question'">
                {{ props.row.question }}
              </template>
              <template v-else>
                <q-radio v-model="respuestas[props.row.id]" :val="props.col.value" color="primary" size="sm" />
              </template>
            </q-td>
          </template>
        </q-table>
      </q-card-section>

      <q-card-section>
        <div class="text-left text-subtitle1 text-bold q-py-xs q-ml-sm q-mb-md">Notas</div>
        <TextArea_ v-model="HIC099.notas" :field="form.notas" />
      </q-card-section>

      <q-card-section>
        <div class="text-left text-subtitle1 text-bold q-ml-sm q-py-xs">Puntuación</div>
        <p>La puntuación total del PHQ-4 oscila entre 0 y 12, con las siguientes categorías de malestar psicológico:</p>

        <li><span class="text-bold">Ninguno: </span> 0-2</li>
        <li><span class="text-bold">Leve: </span> 3-5</li>
        <li><span class="text-bold">Ninguno: </span> 6-8</li>
        <li><span class="text-bold">Ninguno: </span> 9-12</li>
        <div class="q-mt-lg">
          <p><span class="text-bold">Subescala de ansiedad = </span>suma de los ítems 1 y 2 (rango de puntuación: 0 a 6).</p>
          <p><span class="text-bold">Subescala de depresión = </span>suma de los ítems 3 y 4 (rango de puntuación: 0 a 6).</p>
          <p>En cada subescala, una puntuación de 3 o más se considera positiva para fines de detección.</p>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-left text-subtitle1 text-bold q-ml-sm q-py-xs">References</div>
        <p>
          Kroenke K, Spitzer RL, Williams JBW, Löwe B. An ultra-brief screening scale for anxiety and depression: the PHQ-4 Psychosomatics
          2009;50:613-621.
        </p>
      </q-card-section>

      <q-card-section>
        <div class="text-left text-subtitle1 text-bold q-ml-sm q-py-xs">Spanish Translation</div>
        <p class="text-justify">Translated questions 1 and 2 of this CRF are based on a validated translation by the survey developers:</p>
        <p class="text-justify">
          Elaborado por los doctores Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke y colegas, mediante una subvención educativa otorgada por
          Pfizer Inc. No se requiere permiso para reproducir, traducir, presentar o distribuir.
        </p>
        <p>Translated questions 3 and 4 of this CRF are based on a validated translation:</p>
        <p class="text-justify">
          Arrieta J, Aguerrebere M, Raviola G, Flores H, Elliott P, Espinosa A, Reyes A, Ortiz-Panozo E, Rodriguez-Gutierrez EG, Mukherjee J,
          Palazuelos D, Franke MF. Validity and Utility of the Patient Health Questionnaire (PHQ)-2 and PHQ-9 for Screening and Diagnosis of
          Depression in Rural Chiapas, Mexico: A Cross-Sectional Study. J Clin Psychol. 2017 Sep;73(9):1076-1090. doi: 10.1002/jclp.22390. Epub 2017
          Feb 13. PMID: 28195649; PMCID: PMC5573982.
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
        :disable="opcion_hc099 ? false : true"
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
import { impresionHIC099, impresion, generarArchivo } from "@/impresiones";
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
const HIC099 = reactive({
  fecha: "",
  notas: "",
});
const form = ref({
  notas: {
    id: "notas",
    maxlength: "500",
    label: "",
    rows: 4,
    campo_abierto: true,
  },
});
const questions = [
  { id: 1, question: "1. ¿Se ha sentido nervioso(a), ansioso(a) o con los nervios de punta?" },
  { id: 2, question: "2. ¿No ha sido capaz de parar o controlar su preocupación?" },
  { id: 3, question: "3. ¿Tiene poco interés o placer en hacer las cosas?" },
  { id: 4, question: "4. ¿Se siente desanimado/a, deprimido/a, o sin esperanza?" },
];

const columns = [
  { name: "question", label: "Durante las últimas 2 semanas, ¿cuánto le han molestado los siguientes problemas?", align: "left", field: "question" },
  { name: "0", label: "(0) De nada", align: "center", field: "0", value: 0 },
  { name: "1", label: "(1) Varios días", align: "center", field: "1", value: 1 },
  { name: "2", label: "(2) Más de la mitad de los días", align: "center", field: "2", value: 2 },
  { name: "3", label: "(3) Casi todos los días", align: "center", field: "3", value: 3 },
];

const respuestas = ref({
  1: null,
  2: null,
  3: null,
  4: null,
});

const opcion_hc099 = ref(null);

onMounted(() => {
  HIC099.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
    estado: opcion_hc099.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC099",
    disentimiento: "N",
    pregunta_1: respuestas.value[1],
    pregunta_2: respuestas.value[2],
    pregunta_3: respuestas.value[3],
    pregunta_4: respuestas.value[4],
    notas: HIC099.notas,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC099.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic099 = {
      autorizo: opcion_hc099.value == "AUTORIZAR" ? true : false,
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
      notas: HIC099.notas,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC099" },
      content: impresionHIC099({
        datos: datos_hic099,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC099" },
      content: impresionHIC099({
        datos: datos_hic099,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-099` });
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
