<template>
  <ConfigUsunet_ :configuracion="{ estado }" @cerrar="closePage" @guardar="closePage" />
  <ToolBar_ @validarAccion="validarAccion" />
  <ConfigMaestros_
    @guardar="config_maestro.estado = false"
    :configuracion="config_maestro"
    v-if="config_maestro.estado"
    @cerrar="closePage"
  />
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";

const ConfigMaestros_ = defineAsyncComponent(() => import("@/components/consen/ConfigMaestros.vue"));
const ConfigUsunet_ = defineAsyncComponent(() => import("@/components/consen/ConfigUsunet.vue"));
const ToolBar_ = defineAsyncComponent(() => import("@/components/global/ToolBar.vue"));

const config_maestro = ref({ estado: false });
const estado = ref(true);

const closePage = () => {
  setTimeout(() => {
    config_maestro.value.estado = false;
    estado.value = false;
  }, 500);
};

const validarAccion = (event) => {
  switch (event) {
    case 0: // configuracion de servidor
      return (estado.value = true);

    case 1: // configuracion de maestros
      return (config_maestro.value.estado = true);
  }
};
</script>
