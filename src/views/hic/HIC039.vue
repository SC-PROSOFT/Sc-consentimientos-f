<template>

</template>
<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";
const titulo = ref("Consentimiento de PYP - Consentimiento informado ingreso a modalidad de Tratamiendo Directamente Observado TDO Virtual");
const ContFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));

function CallBackFirma(param, data) {
  console.log("🚀 ~ CallBackFirma ~ param:", param);

  console.log("🚀 ~ CallBackFirma ~ data:", data);
}

const disentir = ref(false);
const aceptar = ref(false);

const servicio = ref("");
const otras_considera = ref("");

const reg = {
  paciente: null,
  tipo_id: null,
  cedula: null,
};

const btnDisentir = () => {
  disentir.value = !disentir.value;
};

const btnAceptar = () => {
  aceptar.value = !aceptar.value;
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