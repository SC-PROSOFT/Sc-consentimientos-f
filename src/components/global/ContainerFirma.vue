<template>
  <q-card bordered flat>
    <ToolBar name="containerFirma" :titulo="quien_firma" :close_state="false" />
    <q-card-section>
      <q-img :src="firma" />
    </q-card-section>
    <q-card-actions align="around">
      <q-btn
        flat
        @click="() => (show_firma = true)"
        class="material-icons"
        :disable="disable"
      >
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
import { ref, defineAsyncComponent } from "vue";

const ToolBar = defineAsyncComponent(() =>
  import("@/components/global/ToolBarTable.vue")
);
const FIRMA = defineAsyncComponent(() => import("./firma.vue"));

const emit = defineEmits(["envFirma"]);

defineProps({
  disable: {
    type: Boolean,
    default: false,
  },
  firmador: {
    type: String,
    default: "Sin asignar",
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
