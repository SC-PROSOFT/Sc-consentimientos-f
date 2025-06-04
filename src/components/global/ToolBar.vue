<template>
  <q-toolbar class="bg-primary">
    <q-toolbar-title class="text-white q-ma-xs"
      >{{ modulo }}
      <div class="text-subtitle2 text-bold text-white">{{ titulo }}</div>
    </q-toolbar-title>
    <q-btn v-if="accesoMovil" flat dense icon-right="account_circle" class="q-mr-xs botone" :label="reg_usunet.OPER" color="white">
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
    <q-btn flat round dense icon="menu" class="q-mr-xs" color="white" v-if="['GEBC', 'ADMI'].includes(operador)">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Configuración</div>
            <q-separator />
            <q-list style="min-width: 80px">
              <q-item style="min-height: 0px; border-radius: 0.4rem" class="q-my-sm q-pa-none botone" @click="validarAccion(0)" clickable>
                <q-item-section class="subtitle4">Servidor </q-item-section>
                <q-item-section avatar>
                  <q-icon size="xs" name="dns" />
                </q-item-section>
              </q-item>
              <q-item style="min-height: 0px; border-radius: 0.4rem" class="q-my-sm q-pa-none botone" @click="validarAccion(1)" clickable>
                <q-item-section class="subtitle4">Maestros</q-item-section>
                <q-item-section avatar>
                  <q-icon size="xs" name="settings_suggest" />
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <q-separator vertical inset class="q-mx-lg" />
          <div class="column items-center">
            <q-avatar size="72px">
              <img src="@/assets/image/cover-pen.webp" />
            </q-avatar>
            <div class="text-subtitle1 q-mt-md q-mb-xs">{{ "GEBC" }}</div>
            <q-btn push size="sm" class="botone" color="primary" label="Cerrar pagina" @click="validarSalir" />
          </div>
        </div>
      </q-menu>
    </q-btn>
  </q-toolbar>
</template>

<script setup>
import { useModuleCon851p, useApiContabilidad, useModuleFormatos } from "@/store";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
const router = useRouter();
const route = useRoute();
const formatosStore = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { logOut$ } = useApiContabilidad();
const { getArtic, accesoMovil } = useModuleFormatos();

defineProps({ titulo: String });
const reg_usunet = ref(JSON.parse(sessionStorage.getItem("usunet")));
const emit = defineEmits(["validarAccion"]);
const modulo = ref("CONSENTIMIENTOS");
const operador = ref(null);

onMounted(() => {
  operador.value = route.query.oper;
  const opciones = { HIC: "HISTORIA CLINICA", ODO: "ODONTOLOGIA", LAB: "LABORATORIO" };
  if (route.query.modulo == "LAB") {
    const cod = getArtic[0]?.codigo?.slice(0, 2);
    if (["87", "88"].includes(cod)) {
      return (modulo.value = `${modulo.value} DE IMAGENOLOGIA`);
    }
  }
  modulo.value = `${modulo.value} DE ${opciones[route.query.modulo]}`;
});

const validarSalir = () => {
  return CON851P("SALIR", "warning", null, null, logOut$);
};
const validarAccion = (evento) => emit("validarAccion", evento);
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
</style>
