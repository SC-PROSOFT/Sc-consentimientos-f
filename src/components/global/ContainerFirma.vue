<template>
  <q-card bordered flat>
    <ToolBar_ name="containerFirma" :titulo="quien_firma" :close_state="false" color="blue-grey-13" />
    <q-card-section class="row">
      <q-img
        :class="huella_ ? 'col-8' : 'col-12'"
        style="height: 100px"
        spinner-color="white"
        :src="firma || firma_"
        class="shadow-1"
        fit="contain"
      />
      <q-img
        v-if="huella_ ? true : false"
        style="height: 100px"
        spinner-color="white"
        class="shadow-1 col-4"
        :src="huella_"
        fit="contain"
      />
    </q-card-section>
    <q-card-actions align="around">
      <q-btn flat @click="() => (show_firma = true)" class="material-icons" :disable="disable">
        <span class="q-ml-sm material-icons md-48"> draw </span>
      </q-btn>
    </q-card-actions>
    <div class="text-center">
      <div>{{ firmador }}</div>
      <div>{{ descrip_prof }}</div>
      <div>{{ registro_profe ? `Reg. ${registro_profe}` : "" }}</div>
    </div>
    <FIRMA v-if="show_firma" @CallBackFirma="CallBackFirma" />
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useModuleCon851, useApiContabilidad } from "@/store";
import { ref, defineAsyncComponent, onMounted } from "vue";

const ToolBar_ = defineAsyncComponent(() => import("@/components/global/ToolBarTable.vue"));
const FIRMA = defineAsyncComponent(() => import("./firma.vue"));

const { _getHuella$, getImgBs64 } = useApiContabilidad();
const { getEmpresa, getPaci } = useModuleFormatos();
const { CON851 } = useModuleCon851();

const emit = defineEmits(["reciFirma"]);

const props = defineProps({
  disable: {
    type: Boolean,
    default: false,
  },
  firmador: {
    type: String,
    default: "Sin asignar",
  },
  firma_: {
    type: String,
    default: "",
  },
  huella_: {
    type: String,
    default: "",
  },
  descrip_prof: {
    type: String,
    default: "",
  },
  registro_profe: {
    type: String,
    default: "",
  },
  quien_firma: {
    type: String,
    default: "Sin asignar",
  },
});

onMounted(() => {
  getFirmaPaci();
});

const getFirmaPaci = async () => {
  try {
    /* Yopal solicita la firma que ya tienen registrada en las actualizaciones del paciente. */
    const check_paci = props.quien_firma.toLowerCase().includes("paciente");
    if (Number(getEmpresa.nitusu) == 844003225 && check_paci) {
      firma.value = await _getHuella$({
        codigo: `${getPaci.cod}-FIR`,
        ruta: "E:/SC/NEWCOBOL/DATOS/BIOMETRIA",
        formato: "png",
      });    

      /* Yopal solicita que no es necesario que el paciente firme o tenga firma, entonces ponemos una IMG por defecto */
      /* TODO: Lo mejor seria agrega una validacion por cada vista, para no guardar una imagen vacia en el servidor del cliente, queda pendiente */
      const existeFirma = firma.value ? firma.value : getImgBs64
      CallBackFirma(existeFirma);
    }
  } catch (error) {
    console.error("Verificar si la firma del paciente esta registrada en maestro (YOPAL)");
    CON851("?", "info", "Error consultando firma de paciente");
  }
};

const show_firma = ref(false);
let firma = ref(null);

function CallBackFirma(dataF) {
  if (dataF) {
    firma.value = dataF;
    emit("reciFirma", dataF);
  }
  show_firma.value = false;
}
</script>

<style>
.material-icons.md-48 {
  font-size: 20px;
}
</style>
