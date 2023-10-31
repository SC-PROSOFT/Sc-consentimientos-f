<template>
  <div>
    <ToolBar_ @validarAccion="validarAccion" />
    <ConfigUsunet_
      v-if="configuracion.estado"
      :configuracion="configuracion"
      @cerrar="configuracion.estado = false"
      @guardar="configuracion.estado = false"
    />
    <ConfigMaestros_
      v-if="config_maestro.estado"
      :configuracion="config_maestro"
      @cerrar="config_maestro.estado = false"
      @guardar="config_maestro.estado = false"
    />
    <div class="q-ma-lg">
      <ListaConsentimientos_ class="justify-center q-mx-auto" />
    </div>
  </div>
</template>
<script setup>
import { useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { defineAsyncComponent, onMounted, ref } from "vue";
import { empresas } from "@/fuentes";

const ToolBar_ = defineAsyncComponent(() => import("@/components/global/ToolBar.vue"));
const ConfigUsunet_ = defineAsyncComponent(() => import("@/components/consen/ConfigUsunet.vue"));
const ConfigMaestros_ = defineAsyncComponent(() => import("@/components/consen/ConfigMaestros.vue"));
const ListaConsentimientos_ = defineAsyncComponent(() =>
  import("@/components/consen/ListaConsentimientos.vue")
);

const { getDll$ } = useApiContabilidad();

const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const configuracion = ref({ estado: false });
const config_maestro = ref({ estado: false });

onMounted(() => {
  verificarSesion();
});

const verificarSesion = async () => {
  try {
    const nit = 1;
    sessionStorage.ip = empresas[nit].ip_servicio;
    const response = await getDll$({ modulo: `get_usunet.dll` });
    configuracion.value.estado = false;
    return response;
  } catch (error) {
    CON851("?", "info", error, () => {
      configuracion.value.estado = true;
    });
  }
};
const validarAccion = (event) => {
  console.log("validarAccion", event);
  switch (event) {
    case 0: // configuracion de servidor
      abrirConfiguracion();
      break;
    case 1: // configuracion de maestros
      config_maestro.value.estado = true;
      break;
    case 2: // impresiones
      break;
  }
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
