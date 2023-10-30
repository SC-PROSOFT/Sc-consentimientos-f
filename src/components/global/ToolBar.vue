<template>
  <q-toolbar class="bg-primary">
    <q-toolbar-title class="text-white q-ma-xs"
      >{{ nombre_empresa }}
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
                <q-item-section @click="validarAccion(0)" class="subtitle4">Servidor </q-item-section>
                <q-item-section avatar>
                  <q-icon size="xs" name="dns" />
                </q-item-section>
              </q-item>
              <q-item
                style="min-height: 0px; border-radius: 0.4rem"
                class="q-my-sm q-pa-none botone"
                clickable
              >
                <q-item-section @click="validarAccion(1)" class="subtitle4">Maestros</q-item-section>
                <q-item-section avatar>
                  <q-icon size="xs" name="settings_suggest" />
                </q-item-section>
              </q-item>
              <q-item
                style="min-height: 0px; border-radius: 0.4rem"
                class="q-my-sm q-pa-none botone"
                clickable
              >
                <q-item-section @click="validarAccion(2)" class="subtitle4">Imprimir</q-item-section>
                <q-item-section avatar>
                  <q-icon size="xs" name="book" />
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
            <q-btn
              push
              size="sm"
              class="botone"
              color="primary"
              label="Cerrar pagina"
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
import { ref } from "vue";

const router = useRouter();
const { CON851P } = useModuleCon851p();
const { logOut$ } = useApiContabilidad();

defineProps({ titulo: String });

const emit = defineEmits(["validarAccion"]);

const nombre_empresa = ref("CONSENTIMIENTOS");

const validarSalir = () => {
  return CON851P("SALIR", "warning", null, null, logOut$);
};
const validarAccion = (evento) => emit("validarAccion", evento);
</script>
<style scoped>
.sticky {
  position: sticky;
  top: 0px;
  z-index: 1;
}
</style>
