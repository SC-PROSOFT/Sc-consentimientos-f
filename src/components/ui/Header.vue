<template>
  <q-toolbar class="bg-primary">
    <q-toolbar-title class="text-white q-ma-xs"
      >{{ empresa?.NOMUSU }}
      <div class="text-subtitle2 text-bold text-white">{{ titulo }}</div>
    </q-toolbar-title>
    <q-btn flat round dense icon="menu" class="q-mr-xs" color="white">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Configuración</div>
            <q-separator />
            <q-list style="min-width: 80px">
              <q-item
                style="min-height: 0px; border-radius: 0.4rem"
                class="q-my-sm q-pa-none botone"
                clickable
              >
                <q-item-section class="subtitle4">Conversaciones </q-item-section>
                <q-item-section avatar>
                  <q-icon size="xs" name="question_answer" />
                </q-item-section>
              </q-item>
              <q-item
                style="min-height: 0px; border-radius: 0.4rem"
                class="q-my-sm q-pa-none botone"
                clickable
              >
                <q-item-section class="subtitle4">Mantenimiento</q-item-section>
                <q-item-section avatar>
                  <q-icon size="xs" name="settings_suggest" />
                </q-item-section>
              </q-item>
              <q-item
                style="min-height: 0px; border-radius: 0.4rem"
                @click="validarVolverMenu"
                class="q-my-sm q-pa-none botone"
                clickable
              >
                <q-item-section class="subtitle4">Menu principal</q-item-section>
                <q-item-section avatar>
                  <q-icon size="xs" name="menu_open" />
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <q-separator vertical inset class="q-mx-lg" />
          <div class="column items-center">
            <q-avatar size="72px">
              <img src="@/assets/image/cover-pen.webp" />
            </q-avatar>
            <div class="text-subtitle1 q-mt-md q-mb-xs">{{ operador?.nombre_oper || "Sin asignar" }}</div>
            <q-btn
              push
              size="sm"
              class="botone"
              color="primary"
              label="Cerrar sesión"
              @click="validarSalir"
            />
          </div>
        </div>
      </q-menu>
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
</style>
