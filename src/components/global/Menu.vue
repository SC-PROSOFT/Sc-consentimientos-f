<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 column items-center">
        <div class="bg-blue-grey-2 items-center shadow-24" style="width: 60%; border-radius: 0.5rem">
          <q-card class="text-center text-primary q-my-xs q-mx-auto" style="width: 98%">
            <q-card-section class="q-ma-none q-pa-none text-h6 text-bold">
              {{ use_menu.title_opc.join(",") }}
              {{ use_menu.title_historial[use_menu.title_historial.length - 1]?.toUpperCase() }}
            </q-card-section>
          </q-card>
          <q-card style="width: 98%" class="q-my-sm q-mx-auto">
            <q-list class="q-pa-sm q-pr-md text-primary" bordered separator>
              <q-item
                :class="[
                  ['S', 'F'].includes(opc.opc) && item_activo != index
                    ? `bg-blue-grey-2  text-blue-grey-10 `
                    : '',
                  { botone: item_activo == index, delay: item_activo == index },
                  item_activo == index ? 'desplace text-white bg-primary' : '',
                ]"
                style="min-height: 0px; border-radius: 0.4rem"
                v-for="(opc, index) in use_menu.menu"
                @click="validarClick(opc)"
                class="botone"
                manual-focus
                clickable
                v-ripple
                active
                exact
              >
                <q-item-section>
                  <q-item-label>{{ `${opc.opc}. ${opc.text?.toUpperCase()}` }}</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-icon size="xs" :name="opc.icon" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 justify-center">
        <q-card class="q-ma-md text-center text-primary" style="width: 50%">
          <q-card-section class="q-ma-none q-pa-none text-h6 text-bold">
            {{ titulo_lateral?.toUpperCase() || "Sin enunciado" }}
          </q-card-section>
        </q-card>
        <q-card class="q-mx-md" style="width: 50%">
          <q-list
            class="q-ma-none q-pa-sm q-pr-md text-primary"
            v-if="menu_lateral?.length"
            color="primary"
            separator
          >
            <q-item style="min-height: 0px; border-radius: 0.4rem" v-for="opc in menu_lateral" class="botone">
              <q-item-section v-if="!['S', 'F'].includes(opc.opc)">
                <q-item-label>{{ `${opc.opc}. ${opc.text?.toUpperCase()}` }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <div v-else>
            <LottieAnimation
              :animation-data="pensador"
              style="height: 300px"
              :loopDelayMin="2.5"
              :auto-play="true"
              :loopDelayMax="5"
              class="q-mt-20"
              :loop="true"
              :speed="1"
              ref="anim"
            />
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useModuleCon851, useModuleCon851p, useModuleMenu, useApiContabilidad } from "@/store";
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import pensador from "@/assets/json/dev.json";
import { LottieAnimation } from "lottie-web-vue";
import { useRouter } from "vue-router";
import { menu_consen } from "@/menus";

const router = useRouter();

const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();
const { setMenu$, setMenuHistorial$, setTitleHistorial$, setMenuHistorialPop$ } = useModuleMenu();
const { logOut$ } = useApiContabilidad();
const use_menu = useModuleMenu();

const item_activo = ref(0);
const menu_lateral = ref([]);
const titulo_lateral = ref("");

watch(item_activo, () => cargarMenuLateral());
watch(use_menu, () => cargarMenuLateral());

onMounted(() => {
  iniciarEventos();
  iniciarMenu();
});
onBeforeUnmount(() => cancelarEventos());

const iniciarEventos = () => {
  document.addEventListener("keydown", checkKey);
};
const cancelarEventos = () => {
  document.removeEventListener("keydown", checkKey);
};
const iniciarMenu = () => {
  if (use_menu.menu_historial.length) return;
  setMenu$(menu_consen);
  setMenuHistorial$(menu_consen);
};

const cargarMenuLateral = () => {
  const item_mene_lateral = use_menu.menu.find((e, i) => i == item_activo.value);
  if (item_mene_lateral) {
    titulo_lateral.value = `${item_mene_lateral.opc} - ${item_mene_lateral.text}`;
    menu_lateral.value = item_mene_lateral.sub;
  }
};

const checkKey = ({ keyCode, key }) => {
  // event.preventDefault();
  switch (keyCode) {
    case 38:
      if (item_activo.value == 0) return;
      return item_activo.value--;
    case 40:
      if (item_activo.value >= use_menu.menu.length - 1) return;
      return item_activo.value++;
    case 13:
      return validarOpcion();
    case 83:
      item_activo.value = use_menu.menu.length - 1;
      return validarSalir();
    case 70:
      return volverAnterior();
    default:
      if (/^[A-EG-MON1-9]$/.test(key?.toUpperCase())) {
        const find_opc = use_menu.menu.find((ele) => ele.opc == key.toUpperCase());
        if (find_opc) return validarRouteSub(find_opc, find_opc.ruta);
      }
      break;
  }
};
const validarOpcion = () => {
  let find_opc = use_menu.menu.find((ele, index) => index == item_activo.value);
  if (!find_opc) return;
  if (find_opc.opc == "S") return validarSalir();
  if (find_opc.opc == "F") return volverAnterior();
  validarRouteSub(find_opc);
};
const validarClick = ({ opc }) => {
  if (opc == "S") return validarSalir();
  if (opc == "F") return volverAnterior();
  if (/^[A-EG-MON1-9]$/.test(opc.toUpperCase())) {
    const find_opc = use_menu.menu.find((ele) => ele.opc == opc.toUpperCase());
    if (find_opc) return validarRouteSub(find_opc, find_opc.ruta);
  }
};
const validarRouteSub = (find_opc) => {
  if (find_opc.sub) {
    item_activo.value = 0;
    setMenuHistorial$(find_opc.sub);
    setTitleHistorial$(`${find_opc.text}`, find_opc.opc);
    return setMenu$(find_opc.sub);
  }
  router.push({ path: find_opc.route });
};
const volverAnterior = () => {
  if (use_menu.menu_historial.length > 1) {
    setMenuHistorialPop$();
    setMenu$(use_menu.menu_historial[use_menu.menu_historial.length - 1]);
    item_activo.value = 0;
  }
};
const validarSalir = () => {
  cancelarEventos();
  return CON851P("SALIR", "warning", null, iniciarEventos, logOut$);
};
</script>

<style scoped>
.desplace {
  transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.desplace.botone {
  transform: translateX(3px);
}
</style>
