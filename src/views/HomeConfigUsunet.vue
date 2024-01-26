<template>
  <ConfigUsunet_ :configuracion="{ estado: true }" @cerrar="logOut$" @guardar="closePage" />
</template>

<script setup>
import { useApiContabilidad, useModuleCon851 } from "@/store";
import { defineAsyncComponent } from "vue";

const ConfigUsunet_ = defineAsyncComponent(() => import("@/components/consen/ConfigUsunet.vue"));
const { logOut$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();

const closePage = () => {
  CON851("?", "success", "Error consultando datos paciente", logOut$);
};
</script>
