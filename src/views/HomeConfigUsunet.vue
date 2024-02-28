<template>
  <ConfigUsunet_ :configuracion="{ estado }" @cerrar="closePage" @guardar="closePage" />
  <ToolBar_ @validarAccion="validarAccion" />
  <ConfigMaestros_
    @guardar="config_maestro.estado = false"
    :configuracion="config_maestro"
    v-if="config_maestro.estado"
    @cerrar="closePage"
  />
  <Update_
    :mensaje="datos_actualizacion.mensaje"
    v-if="datos_actualizacion.estado"
    @cancelar="validarAct(1)"
    @aceptar="validarAct(2)"
  />
</template>

<script setup>
import { useApiContabilidad, useModuleCon851 } from "@/store";
import { defineAsyncComponent, onMounted, ref } from "vue";

const ConfigMaestros_ = defineAsyncComponent(() => import("@/components/consen/ConfigMaestros.vue"));
const ConfigUsunet_ = defineAsyncComponent(() => import("@/components/consen/ConfigUsunet.vue"));
const ToolBar_ = defineAsyncComponent(() => import("@/components/global/ToolBar.vue"));
const Update_ = defineAsyncComponent(() => import("@/components/global/Update.vue"));

const { getVersionBuild$, actualizarVersion$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();

const config_maestro = ref({ estado: false });
const datos_actualizacion = ref({
  estado: false,
  mensaje: "",
});
const estado = ref(false);

onMounted(() => getVersionBuild());

const getVersionBuild = async () => {
  try {
    const response = await getVersionBuild$({});
    datos_actualizacion.value.estado = true;
    datos_actualizacion.value.mensaje = `La nueva versión ${response} de consentimientos ya esta disponible.
    ¿Desea actualizarla?`;
  } catch (error) {
    CON851("?", "info", error);
  }
};

const validarAct = async (opc) => {
  try {
    switch (opc) {
      case 1:
        return controlarVentanas();
      case 2:
        const data = await actualizarVersion();
        return CON851("?", "success", data, controlarVentanas);
    }
  } catch (error) {
    CON851("?", "info", error);
  }
};

const actualizarVersion = async () => {
  try {
    const response = await actualizarVersion$({});
    datos_actualizacion.value.mensaje = "";
    return response;
  } catch (error) {
    throw error;
  } finally {
    datos_actualizacion.value.estado = false;
  }
};

const controlarVentanas = () => {
  datos_actualizacion.value.estado = false;
  estado.value = true;
};

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
