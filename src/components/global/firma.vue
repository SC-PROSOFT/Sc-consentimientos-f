<template>
  <q-dialog v-model="estado" persistent>
    <q-card :style="cardStyle">
      <ToolBar @cerrar="close" titulo="Firma consentimiento informado" name="firma"></ToolBar>
      <q-card-section class="row items-center q-pb-none">
        <VueSignaturePad
          :style="signaturePadStyle"
          :height="signaturePadHeight"
          ref="signaturePad"
          :options="{
            ...opciones_firma,
            onBegin: () => {
              signaturePad.resizeCanvas();
            },
          }"
        />
      </q-card-section>
      <q-separator />
      <q-card-actions align="around">
        <q-btn flat @click="save">Guardar</q-btn>
        <q-btn flat @click="clear">Limpiar</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { defineAsyncComponent, ref, computed } from "vue";
import { useModuleFormatos } from "@/store";
const ToolBar = defineAsyncComponent(() => import("./ToolBarTable.vue"));
const emit = defineEmits(["CallBackFirma"]);

const { accesoMovil } = useModuleFormatos();
const signaturePad = ref(null);
const opciones_firma = ref({
  dotSize: (1 + 2.5) / 2,
  minWidth: 2.5,
  maxWidth: 5,
  throttle: 16,
  minDistance: 5,
  backgroundColor: "rgba(0,0,0,0)",
  penColor: "black",
  velocityFilterWeight: 0.7,
});
const estado = ref(true);

const cardStyle = computed(() => {
  return accesoMovil ? "width: 98vw; max-width: 98vw; min-width: 0; min-height: 0;" : "width: 600px; max-width: 98vw; min-width: 1300px;";
});

const signaturePadHeight = computed(() => (accesoMovil ? "400px" : "550px"));
const signaturePadStyle = computed(() => ({
  width: accesoMovil ? "95vw" : "1300px",
  maxWidth: "100%",
}));

function save() {
  const { isEmpty, data } = signaturePad.value.saveSignature();
  !isEmpty && emit("CallBackFirma", data);
}

function clear() {
  signaturePad.value.clearSignature();
}

function close() {
  emit("CallBackFirma");
}
</script>
