<template>
  <div>
    <ToolBar_ />
    <Menu_ />
    <q-btn
      class="absolute-bottom-left q-ma-md"
      v-if="node_env == 'production'"
      :loading="use_loader.loader"
      icon="cloud_download"
      color="primary"
      @click="bakup"
      round
    />
  </div>
</template>
<script setup>
import { useModuleLoader, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { defineAsyncComponent, onMounted } from "vue";

const ToolBar_ = defineAsyncComponent(() => import("@/components/global/ToolBar.vue"));
const Menu_ = defineAsyncComponent(() => import("@/components/global/Menu.vue"));

const { CON000VerificarCopiaDelDia$, CON000Backup$ } = useApiContabilidad();

const use_loader = useModuleLoader();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const node_env = process.env.NODE_ENV;

onMounted(() => verificarCopiaDelDia());

const bakup = async () => {
  try {
    await CON000Backup$({});
  } catch (error) {
    CON851("?", "info", error);
  }
};

const verificarCopiaDelDia = async () => {
  console.log(node_env);
  if (node_env == "development") return;
  try {
    const response = await CON000VerificarCopiaDelDia$({});
    if (!response)
      return CON851P("?", "info", "No ha realizado la copia de seguridad hoy, ¿Deseas hacerla?", null, () =>
        bakup()
      );
  } catch (error) {
    CON851("?", "info", error);
  }
};
</script>
<style></style>
