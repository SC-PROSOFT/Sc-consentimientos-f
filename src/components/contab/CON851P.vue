<template>
  <q-dialog v-model="use_module_con851p.con851p.estado" persistent>
    <q-card
      class="my-card"
      bordered
      :style="{
        'border-left': `4px solid ${estructura.color_css}`,
        'border-radius': '15px',
      }"
    >
      <div class="row">
        <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-mt-lg">
          <LottieAnimation
            :animation-data="estructura.lottie"
            style="height: 100px"
            :loopDelayMin="2.5"
            :auto-play="true"
            :loopDelayMax="5"
            class="q-mt-20"
            :loop="true"
            :speed="1"
            ref="anim"
          />
        </div>
        <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
          <q-card-section class="q-pb-sm">
            <div :class="`text-${estructura.color} text-center`" class="text-h5 text-bold">
              {{ estructura.title }}
            </div>
            <q-separator :color="estructura.color" class="q-pb-xs" />
          </q-card-section>
          <q-card-section class="q-pt-none text-center text-h7" v-html="mensaje_"> </q-card-section>
          <q-card-actions align="center" class="text-primary text-center">
            <q-btn
              outline
              id="boton1"
              color="red-14"
              label="Cancelar"
              icon-right="cancel"
              class="botone q-mx-sm"
              @click="cancelCon851p"
            />
            <q-btn
              outline
              id="boton2"
              color="green"
              label="Aceptar"
              class="botone q-mx-sm"
              @click="aceptarCon851p"
              icon-right="check_circle"
              :color="estructura.color_css"
            />
          </q-card-actions>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { LottieAnimation } from "lottie-web-vue";

import warning from "@/assets/json/warning.json";
import success from "@/assets/json/success.json";
import error from "@/assets/json/error.json";
import info from "@/assets/json/info.json";
import { useModuleCon851p } from "@/store";
import { msgCon851p_ } from "@/fuentes";
import { computed } from "vue";

const use_module_con851p = useModuleCon851p();

const mensaje_ = ref("");
const data_con851 = ref({
  warning: {
    lottie: warning,
    color: "warning",
    title: "¡Precaución!",
    color_css: "#F2C037",
  },
  error: {
    lottie: error,
    color: "red",
    title: "¡Error!",
    color_css: "red",
  },
  success: {
    lottie: success,
    color: "green",
    title: "¡Realizado!",
    color_css: "green",
  },
  info: {
    lottie: info,
    color: "info",
    title: "¡Atención!",
    color_css: "#123D7D",
  },
});

const estructura = computed(() => data_con851.value[use_module_con851p.con851p.tipo]);

onMounted(() => {
  configAlert();
  document.addEventListener("keydown", checkKey);
});
onBeforeUnmount(() => {
  document.removeEventListener("keydown", checkKey);
});
const configAlert = () => {
  const { codigo, mensaje } = use_module_con851p.con851p;
  mensaje_.value = msgCon851p_(codigo, mensaje);
  setTimeout(() => focoBoton2(), 300);
};
const checkKey = ({ which }) => {
  switch (true) {
    case [78, 27].includes(which):
      return cancelCon851p();
    case which == 83:
      return aceptarCon851p();
    case which == 39:
      return focoBoton2();
    case [38, 37].includes(which):
      return focoBoton1();
  }
};
const cancelCon851p = () => {
  if (use_module_con851p.con851p.func1) use_module_con851p.con851p.func1();
  use_module_con851p.CON851Poff();
};
const aceptarCon851p = () => {
  if (use_module_con851p.con851p.func2) use_module_con851p.con851p.func2();
  use_module_con851p.CON851Poff();
};
const focoBoton1 = () => document.getElementById("boton1")?.focus();
const focoBoton2 = () => document.getElementById("boton2")?.focus();
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
  z-index: 1000
</style>
