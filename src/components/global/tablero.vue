<template>
  <!-- <q-dialog v-model="estado" persistent> -->
  <q-card class="custom-card-size">
    <!-- <ToolBar @cerrar="close" titulo="Registro de inspección" name="trazos"></ToolBar> -->
    <q-card-section class="row items-center q-pb-none">
      <div class="signature-container">
        <img src="@/assets/image/mamografia.png" alt="Imagen de fondo" class="background-image" />
        <VueSignaturePad
          ref="signaturePad"
          class="signature-pad"
          :options="{
            ...opciones_imagen,
            onBegin: () => {
              signaturePad.resizeCanvas();
            },
          }"
        />
      </div>
    </q-card-section>
    <q-separator />
    <q-card-actions align="around">
      <!-- <q-btn flat @click="save">Guardar</q-btn> -->
      <q-btn flat @click="clear">Limpiar</q-btn>
    </q-card-actions>
  </q-card>
  <!-- </q-dialog> -->
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";
import backgroundImage from "@/assets/image/mamografia.png";
const ToolBar = defineAsyncComponent(() => import("./ToolBarTable.vue"));
const emit = defineEmits(["CallBackImagen"]);

const signaturePad = ref(null);
const opciones_imagen = ref({
  dotSize: (1 + 1.5) / 2,
  minWidth: 1.5,
  maxWidth: 3,
  throttle: 16,
  minDistance: 5,
  backgroundColor: "rgba(0,0,0,0)",
  penColor: "black",
  velocityFilterWeight: 0.7,
});
const estado = ref(true);

function save() {
  const canvas = signaturePad.value.$el.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = backgroundImage;

  img.onload = () => {
    // Dibuja la imagen de fondo en el canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Ahora dibuja la trazos
    const signatureDataUrl = signaturePad.value.saveSignature().data;

    const signatureImg = new Image();
    signatureImg.src = signatureDataUrl;
    // console.log(signatureDataUrl);

    signatureImg.onload = () => {
      // Dibuja la trazos encima de la imagen de fondo
      ctx.drawImage(signatureImg, 0, 0, canvas.width, canvas.height);

      // Generar el DataURL final con la imagen de fondo y la trazos
      const finalImage = canvas.toDataURL("image/png");
      emit("CallBackImagen", finalImage);
    };
  };
}

function clear() {
  signaturePad.value.clearSignature();
}

function close() {
  emit("CallBackImagen");
}
</script>

<style scoped>
.signature-container {
  position: relative;
  width: 100%;
  height: 300px;
  border: 1px solid #ccc;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.signature-pad {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.custom-card-size {
  width: 570px;
  height: 320px;
}
</style>
