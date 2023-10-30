<template>
  <div class="q-ma-sm">
    <q-card bordered class="bg-gray-1" @click="item_activo = 0">
      <div class="q-px-sm">
        <div class="row q-px-md">
          <q-card-section
            v-for="item in datos_tabla.headers"
            class="q-pa-none text-bold cursor"
            :class="`${item.class} `"
          >
            <q-tooltip
              class="bg-primary text-white shadow-4"
              v-if="datos_tabla.data.length"
              anchor="top middle"
              self="bottom middle"
              :offset="[0, 20]"
              >Click para seleccionar el primer elemento</q-tooltip
            >
            <div :class="validarTextoAling(item.tipo)" class="text-subtitle1">{{ item.label }}</div>
          </q-card-section>
        </div>
      </div>
    </q-card>
    <q-card>
      <q-list color="primary" class="q-pa-sm text-primary">
        <q-item
          :class="[
            item_activo == index_tabla ? 'desplace text-white bg-primary' : 'text-black text-subtitle2',
            index_tabla % 2 === 0 ? 'zebra' : '',
          ]"
          v-for="(item_tabla, index_tabla) in datos_tabla.data"
          @click="selectClickRow(item_tabla, index_tabla)"
          style="min-height: 2px; border-radius: 0.2rem"
          class="botone row"
          manual-focus
          clickable
          active
          exact
        >
          <div
            :class="`${item.class} ${validarTextoAling(item.tipo)}`"
            v-for="item in datos_tabla.headers"
            class="q-my-none"
          >
            <q-item-label>
              {{ validarValue(item_tabla[item.value], item.tipo) }}
            </q-item-label>
          </div>
        </q-item>
      </q-list>
      <q-separator v-if="datos_tabla.data.length" />
      <div class="q-ma-sm text-subtitle2 text-right" v-if="datos_tabla.data.length">
        <div class="q-pa-sm flex flex-center">
          <q-pagination
            @update:model-value="cambiaPagina"
            :max="datos_tabla.total_paginas"
            v-model="pagina_data"
            direction-links
            color="primary"
            boundary-links
            max-pages="10"
            ellipses
          />
        </div>
      </div>
      <div v-else>
        <LottieAnimation
          :animation-data="no_found"
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
</template>
<script setup>
import { ref, watch, onBeforeUnmount, onMounted } from "vue";
import { LottieAnimation } from "lottie-web-vue";
import no_found from "@/assets/json/no_data.json";
import { useModuleLoader } from "@/store";
import { formatNumberMask_ } from "@/setup";

const use_loader = useModuleLoader();

const props = defineProps({
  datos_tabla: Object,
  focus_table: Boolean,
  pagina: Number,
});

const emit = defineEmits(["escTable", "selectRow", "selectIndex", "nextData", "cambioPagina"]);

const pagina_data = ref(0);
const item_activo = ref(null);

watch(props, (new_value) => {
  if (new_value.focus_table) {
    item_activo.value = 0;
    pagina_data.value = Number(props.pagina);
    iniciarEventos();
  } else {
    pagina_data.value = 0;
    item_activo.value = null;
    cancelarEventos();
  }
});

onMounted(() => props.focus_table && iniciarEventos());
onBeforeUnmount(() => cancelarEventos());

const iniciarEventos = () => {
  document.addEventListener("keydown", checkKeyTable);
};
const cancelarEventos = () => {
  document.removeEventListener("keydown", checkKeyTable);
};

const cambiaPagina = (pagina) => emit("cambioPagina", pagina);

const validarValue = (value, tipo) => {
  if (tipo == "moneda") return formatNumberMask_(value, 2);
  if (tipo == "unidad") return formatNumberMask_(value, 0);
  return value;
};
const validarTextoAling = (tipo) => {
  if (["number", "moneda", "unidad"].includes(tipo)) return "text-right";
  if (tipo == "text") return "text-left";
  return "text-center";
};
const checkKeyTable = ({ keyCode }) => {
  switch (keyCode) {
    case 38:
      if (item_activo.value == 0) return;
      return item_activo.value--;
    case 40:
      if (item_activo.value >= props.datos_tabla.data.length - 1) return;
      return item_activo.value++;
    case 34:
    case 39:
      !use_loader.loader && emit("nextData", ">");
      item_activo.value = 0;
      break;
    case 33:
    case 37:
      !use_loader.loader && emit("nextData", "<");
      item_activo.value = 0;
      break;
    case 13:
      if ([null].includes(item_activo.value)) return;
      emit("selectRow", props.datos_tabla.data[item_activo.value]);
      emit("selectIndex", item_activo.value);
      break;
    case 27:
      item_activo.value = null;
      emit("escTable");
      break;
  }
};

const selectClickRow = (item_tabla, index_tabla) => {
  emit("selectRow", item_tabla);
  emit("selectIndex", index_tabla);
};
</script>
<style scoped>
.desplace {
  transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.desplace.botone {
  transform: translateX(3px);
}
.zebra:nth-child(odd) {
  background-color: #f7f7f7; /* Color de fondo para las filas impares */
}
</style>
