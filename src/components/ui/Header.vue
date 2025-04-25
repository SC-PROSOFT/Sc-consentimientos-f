<template>
  <q-toolbar class="bg-primary">
    <q-toolbar-title class="text-white q-ma-xs"
      >{{ empresa?.NOMUSU }}
      <div class="text-subtitle2 text-bold text-white">{{ titulo }}</div>
    </q-toolbar-title>
    <div class="text-subtitle2 text-bold text-white">{{ reg_usunet.NOMUSU }}</div>
    <q-toolbar-title class="text-white q-ma-xs"> </q-toolbar-title>

    <q-btn
      v-if="route.name != 'elaborarconsent'"
      flat
      round
      label="Regresar"
      icon="undo"
      dense
      class="q-mr-xs botone"
      color="white"
      @click="() => router.back()"
    >
      <q-tooltip anchor="center right" self="center left" :offset="[10, 10]" class="bg-red">Regresar</q-tooltip>
    </q-btn>
    <q-btn
      v-if="route.name == 'elaborarconsent'"
      flat
      dense
      icon-right="account_circle"
      class="q-mr-xs botone"
      :label="reg_usunet.OPER"
      color="white"
    >
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column items-center">
            <q-avatar size="72px">
              <img src="@/assets/image/cover-pen.webp" />
            </q-avatar>
            <div class="text-subtitle1 q-mt-md q-mb-xs">{{ "GEBC" }}</div>
            <q-btn push size="sm" class="botone" color="primary" label="Cerrar sesión" @click="cerrarSesion" />
          </div>
        </div>
      </q-menu>
    </q-btn>
  </q-toolbar>
</template>

<script setup>
import { useApiContabilidad, useModuleCon851p, useModuleFormatos } from "@/store";
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const { CON851P } = useModuleCon851p();
const { encabezado } = useApiContabilidad();
const formatosStore = useModuleFormatos();
const router = useRouter();
const route = ref(useRoute());
defineProps({ titulo: String });
const reg_usunet = ref(JSON.parse(sessionStorage.getItem("usunet")));
const empresa = ref(sessionStorage.empresa);
const datos = ref("");
onMounted(() => {
  console.log("route.name  ", route.value.name);

  if (Object.values(encabezado).length) datos.value = encabezado;
  else datos.value = sessionStorage.encabezado && JSON.parse(sessionStorage.encabezado);

  empresa.value = sessionStorage.empresa && JSON.parse(sessionStorage.empresa);
});
const cerrarSesion = () => {
  CON851P("?", "warning", "¿Deseas cerrar sesión?", null, () => {
    formatosStore.setcerrandoSesion(true);
    sessionStorage.clear();
    router.push({ name: "login" });
  });
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
