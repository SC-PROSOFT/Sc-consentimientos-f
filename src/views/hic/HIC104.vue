<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc104"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc104 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc104 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc104">
              {{ opcion_hc104 }}
            </q-chip>
          </p>
        </div>
      </q-card-section>

      <q-card-section>
        <span class="text-bold">LA ESCALA PARA DESORDEN DE ANSIEDAD GENERALIZADA GAD - 2</span>
        <p class="text-justify q-mt-xs">
          La Generalized Anxiety Disorder Scale-2 (GAD-2), validada para personas mayores de 18 años, está conformada por 2 ítems que evalúan
          conductas vinculadas con la expresión emocional y cognitiva de la ansiedad generalizada, escalados en 5 opciones de respuesta ordinal (desde
          para nada hasta casi todos los días).
        </p>
        <p class="text-justify">Es útil para la tamización de los trastornos de ansiedad excepto las fobias y trastorno de estrés postraumático.</p>
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
        <p class="text-justify q-mt-md">
          Si la persona obtiene un puntaje mayor a 3, la tamización es positiva y se debe realizar la valoración correspondiente para confirmar un
          diagnóstico de ansiedad generalizada.
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
        :disable="opcion_hc104 ? false : true"
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
import { impresionHIC104, impresion, generarArchivo } from "@/impresiones";
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
const HIC104 = reactive({
  fecha: "",
});

const questions = [
  { id: 1, question: "1. ¿Sentirse nervioso(a), ansioso(a), o inquieto?" },
  { id: 2, question: "2. ¿No poder parar o controlar la preocupación?" },
];

const columns = [
  {
    name: "question",
    label: "Durante las últimas 2 semanas, ¿qué tan seguido se ha molestado por los siguientes problemas?",
    align: "left",
    field: "question",
  },
  { name: "0", label: "(0) Para nada", align: "center", field: "0", value: 0 },
  { name: "1", label: "(1) Algunos días", align: "center", field: "1", value: 1 },
  { name: "2", label: "(2) Más de la mitad de los días", align: "center", field: "2", value: 2 },
  { name: "3", label: "(3) Casi todos los días", align: "center", field: "3", value: 3 },
];

const respuestas = ref({
  1: "",
  2: "",
});

const opcion_hc104 = ref(null);

onMounted(() => {
  HIC104.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
    estado: opcion_hc104.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC104",
    disentimiento: "N",
    preg_1: respuestas.value[1],
    preg_2: respuestas.value[2],
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC104.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic104 = {
      autorizo: opcion_hc104.value == "AUTORIZAR" ? true : false,
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
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC104" },
      content: impresionHIC104({
        datos: datos_hic104,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC104" },
      content: impresionHIC104({
        datos: datos_hic104,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-104` });
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
