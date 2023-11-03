<template>
  <q-toolbar class="bg-primary">
    <q-toolbar-title class="text-white q-ma-xs"
      >{{ empresa?.NOMUSU }}
      <div class="text-subtitle2 text-bold text-white">{{ titulo }}</div>
    </q-toolbar-title>
    <q-btn flat round dense class="q-mr-xs botone" color="white" @click="() => router.back()">
      <span class="material-icons"> reply </span
      ><q-tooltip anchor="center right" self="center left" :offset="[10, 10]" class="bg-red"
        >Regresar</q-tooltip
      >
    </q-btn>
  </q-toolbar>
</template>

<script setup>
import { useModuleCon851p, useApiContabilidad } from "@/store";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const { logOut$, encabezado } = useApiContabilidad();
const { CON851P } = useModuleCon851p();
const router = useRouter();

defineProps({ titulo: String });

const empresa = ref(sessionStorage.empresa);
const operador = ref("");
const datos = ref("");

onMounted(() => {
  if (Object.values(encabezado).length) datos.value = encabezado;
  else datos.value = sessionStorage.encabezado && JSON.parse(sessionStorage.encabezado);

  empresa.value = sessionStorage.empresa && JSON.parse(sessionStorage.empresa);
});

const validarVolverMenu = () => {
  return CON851P("MENU", "warning", null, null, () => router.push({ name: "menu" }));
};
const validarSalir = () => {
  return CON851P("SALIR", "warning", null, null, logOut$);
};
</script>
<style scoped>
.sticky {
  position: sticky;
  top: 0px;
  z-index: 1;
}

.material-icons {
  font-size: 25px;
}
</style>
