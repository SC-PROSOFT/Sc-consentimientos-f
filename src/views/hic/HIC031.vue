<template>
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc031"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc031 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="opcion_hc031 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="opcion_hc031"
            >
              {{ opcion_hc031 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p>Historia clínica numero:</p>
          <q-input type="text" disable dense v-model="llave" class="col-2" />
        </div>
        <div class="row">
          <p>Ciudad:</p>
          <q-input type="text" disable v-model="getEmpresa.CIUDAD_USUAR" dense class="col-2 q-mr-md" />
          <p>Fecha:</p>
          <q-input v-model="fecha_act" disable dense type="date" class="col-2" />
        </div>
        <h6 style="margin: 0">LA COLPOSCOPIA</h6>
        <div class="row">
          <p class="text-justify">
            Es un examen sencillo del cuello, vagina y vulva, similar a la toma de citología cervicouterina,
            donde se realiza observación con un microscopio especial que permite visualizar los cambios
            ocurridos en el cuello del útero. Para ayudarnos durante este examen se utilizan sustancias que
            facilitan el reconocimiento de estas lesiones. Cuando el ginecólogo visualiza las lesiones
            sospechosas procede a tomar una muestra pequeña (biopsia) para posteriormente ser analizado por un
            patólogo. Normalmente puede presentar sangrado y dolor durante el procedimiento
          </p>
        </div>
        <p style="margin: 0; font-weight: bold">Riesgos de la colposcopia:</p>
        <q-list bordered>
          <q-item>
            <q-item-section>
              <q-item-label>1. Molestias producidas por las soluciones aplicadas.</q-item-label>
              <q-item-label>2. Calambres, picadas o leve dolor.</q-item-label>
              <q-item-label
                >3. Sangrado mínimo durante varios días. Si es moderado se dejará una gasa para retirarla 6
                horas después</q-item-label
              >
              <q-item-label>4. Infección</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <div class="row">
          <p>Yo</p>
          <q-input v-model="getPaci.descrip" disable type="text" dense class="col-4" />
          <p>identificado (a) con cédula número</p>
          <q-input v-model="getPaci.cod" disable type="text" dense class="col-2" />
          <p>de</p>
          <q-input v-model="getPaci.descrip_ciudad" disable type="text" dense class="col-2" />
          <p class="text-justify">
            en forma voluntaria y en pleno uso de mis facultades mentales y psíquicas sin presión o inducción
            alguna:
          </p>
          <div v-show="opcion_hc031 == 'AUTORIZAR'">
            <p class="text-justify" style="margin-top: -5px">
              Doy el consentimiento para que el ginecólogo de la E.S.E salud Yopal - Hospital local de Yopal,
              realice el procedimiento de colposcopia y biopsia. Acepto sus riesgos e imprevistos. Entiendo lo
              que he leído, se me ha explicado verbalmente y por escrito acerca del procedimiento, los
              cuidados que debo tener antes y después de la
              <span style="font-weight: bold">COLPOSCOPIA</span>, los riesgos justificados y previsibles.
              También se me ha dado la oportunidad de preguntar y resolver dudas. Entiendo que este
              procedimiento puede traer efectos adversos, como infección y sangrado, propias del procedimiento
              que aquí autorizo, los cuales asumo bajo mi responsabilidad.
            </p>
          </div>
        </div>
        <div class="row q-mt-md q-mb-md row" v-show="opcion_hc031 == 'REVOCAR'">
          <p>
            Expreso mi voluntad de
            <span style="font-weight: bold; text-decoration: underline">revocar</span> el consentimiento
            presentado y declaro por tanto que, tras la información recibida, no consiento someterme al
            procedimiento de <span style="font-weight: bold">COLPOSCOPIA</span>
          </p>
          <p>por los siguientes motivos:</p>
          <Input_ class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8" v-model="HIC031.revocar_motivos" :field="form.revocar" />
        </div>
      </q-form>
    </q-card-section>
    <q-separator />

    <q-card-actions>
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          @reciFirma="callBackFirma"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.cod || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.cod ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          @reciFirma="callBackFirmaAcomp"
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
      <div class="col-12 row justify-center q-my-md">
        <q-btn
          :disable="opcion_hc031 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mr-lg"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card-actions>
  </q-card>
  <div style="height: 1px"></div>
  <!-- Spacer final de hoja -->
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { impresionHC031, impresion } from "@/impresiones";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const router = useRouter();
const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));

const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { getDll$, _getFirma$, guardarFile$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");


const opcion_hc031 = ref(null);
const llave = ref(null);
const fecha_act = ref(null);
const firma_prof = ref(null);
const revocar_motivos = ref(null);

const HIC031 = ref({
  revocar_motivos: "",
});

const form = ref({
  revocar: {
    id: "revocar",
    label: "",
    maxlength: "285",
    required: true,
    campo_abierto: true,
  },
});

watch(opcion_hc031, (val) => {
  if (val == "AUTORIZAR") {
    HIC031.value.revocar_motivos = "";
  }
});

onMounted(() => {
  fecha_act.value = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  llave.value = getHc.llave.slice(15);
  getFirmaProf();
});

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

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma.slice(22));
};

const validarDatos = async () => {
  console.log("Entro", opcion_hc031)
  if (opcion_hc031.value == "REVOCAR" && HIC031.value.revocar_motivos == "") {
    return CON851("?", "info", "Debe ingresar motivos de revocación", () => foco_(form, "revocar"));
  }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC031.value));
  let datos = {
    estado: opcion_hc031.value == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC031",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };
  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (!firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañate");
  }
  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
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
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });
    return CON851P(
      "?",
      "info",
      "¿Deseas imprimir el consentimiento?",
      () => router.back(),
      () => {
        imprimirConsen();
        setTimeout(() => router.back(), 500);
      }
    );
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const imprimirConsen = async () => {
  try {
    const docDefinition = utilsFormat({
      datos: {
        img_firma_consen: firma_recibida.value,
        img_firma_paci: firma_recibida.value,
        img_firma_acomp: firma_recibida_acomp.value,
        firma_prof: firma_prof.value,
      },
      content: impresionHC031({
        datos: {
          autorizo: opcion_hc031.value == "AUTORIZAR" ? true : false,
          empresa: { ...getEmpresa },
          paciente: { ...getPaci },
          prof: { ...getProf },
          acomp: { ...getAcomp },
          paren_acomp: getSesion.paren_acomp,
          firmas: {
            firma_paci: firma_recibida.value ? true : false,
            firma_acomp: firma_recibida_acomp.value ? true : false,
            firma_prof: firma_prof.value ? true : false,
          },
          fecha: fecha_act.value,
          llave: llave.value,
          ...HIC031.value,
        },
      }),
    });

    await impresion({ docDefinition });
  } catch (error) {
    console.error("error -->", error);
  }
};

const requerido = (val) => {
  return !!val || "Este campo es requerido";
};
</script>
<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
}
.custom-q-list .q-item {
  margin: 0;
}
</style>
