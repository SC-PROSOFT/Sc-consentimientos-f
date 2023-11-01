<template>
  <q-dialog v-model="estado" persistent full-width>
    <q-card>
      <ToolBar @cerrar="close" titulo="Firma consentimiento informado" name="firma"></ToolBar>
      <q-card-section class="row items-center q-pb-none">
        <VueSignaturePad
          full-width
          height="500px"
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
import { defineAsyncComponent, ref } from "vue";

const ToolBar = defineAsyncComponent(() => import("./ToolBarTable.vue"));
const emit = defineEmits(["CallBackFirma"]);

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
