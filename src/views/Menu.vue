<template>
  <div>
    <ToolBar_ @validarAccion="validarAccion" />
    <!-- <Menu_ /> -->
    <ConfigUsunet_
      v-if="configuracion.estado"
      :configuracion="configuracion"
      @guardar="configuracion.estado = false"
    />
    <q-btn @click="abrirConfiguracion" />
  </div>
</template>
<script setup>
import { useModuleLoader, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { defineAsyncComponent, onMounted, ref } from "vue";

const ToolBar_ = defineAsyncComponent(() => import("@/components/global/ToolBar.vue"));
const ConfigUsunet_ = defineAsyncComponent(() => import("@/components/consen/ConfigUsunet.vue"));

const { getDll$ } = useApiContabilidad();

const use_loader = useModuleLoader();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const configuracion = ref({ estado: false });

onMounted(() => verificarSesion());

const verificarSesion = async () => {
  try {
    const response = await getDll$({
      ip: "34.234.185.158",
      modulo: `${process.env.APP}/get_usunet.dll`,
    });
    configuracion.value.estado = false;
    return response;
  } catch (error) {
    CON851("?", "info", error, () => {
      configuracion.value.estado = true;
    });
  }
};
const validarAccion = (event) => {
  switch (event) {
    case 0: // configuracion de servidor
      abrirConfiguracion();
      break;
    case 1: // configuracion de maestros
      break;
    case 2: // impresiones
      break;
  }
  console.log(event);
};
const abrirConfiguracion = async () => {
  try {
    const response = await verificarSesion();
    Object.assign(configuracion.value, response);
    configuracion.value.estado = true;
  } catch (error) {
    CON851("?", "info", error, () => {
      configuracion.value.estado = true;
    });
  }
};
</script>
<style></style>
