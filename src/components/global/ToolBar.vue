<template>
  <q-toolbar reveal class="bg-primary text-white sticky">
    <q-btn
      color="blue-grey-2 text-black"
      @click="validarSalir"
      class="q-mr-xs btone"
      icon-right="tune"
      dense
      push
    >
    </q-btn>
    <q-img
      style="height: 50px; max-width: 40px"
      src="@/assets/image/pensador.ico"
      spinner-color="white"
      fit="contain"
    />
    <q-toolbar-title class="text-bold"> PROSOFT</q-toolbar-title>
    <q-toolbar-title class="text-bold"> CONSENTIMIENTOS</q-toolbar-title>
    <q-btn
      color="blue-grey-2 text-black"
      @click="validarSalir"
      class="q-mr-xs btone"
      icon-right="login"
      dense
      push
    >
      salir
    </q-btn>
  </q-toolbar>
</template>

<script setup>
import { useModuleCon851p, useApiContabilidad } from "@/store";

const { CON851P } = useModuleCon851p();
const { logOut$ } = useApiContabilidad();

const validarSalir = () => CON851P("SALIR", "warning", null, null, logOut$);
</script>
<style scoped>
.sticky {
  position: sticky;
  top: 0px;
  z-index: 1;
}
</style>
