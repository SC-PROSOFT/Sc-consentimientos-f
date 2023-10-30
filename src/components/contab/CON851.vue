<template>
  <q-dialog v-model="use_module_con851.con851.estado" persistent>
    <q-card
      class="my-card"
      bordered
      :style="{
        'border-left': `4px solid ${estructura.color_css}`,
        'border-radius': '15px',
      }"
    >
      <div class="row">
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-mt-lg">
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
        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
          <q-card-section class="q-pb-sm">
            <div :class="`text-${estructura.color} text-center`" class="text-h5 text-bold">
              {{ estructura.title }}
            </div>
            <q-separator :color="estructura.color" class="q-pb-xs" />
          </q-card-section>

          <q-card-section class="q-pt-none text-center text-h7">
            {{ mensaje_ }}
          </q-card-section>
          <q-card-actions align="center" class="text-primary text-center">
            <q-btn
              outline
              id="boton"
              class="botone"
              label="Cerrar"
              icon-right="cancel"
              @click="aceptarCon851"
              :color="estructura.color_css"
            />
          </q-card-actions>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { LottieAnimation } from "lottie-web-vue";

import warning from "@/assets/json/warning.json";
import success from "@/assets/json/success.json";
import error from "@/assets/json/error.json";
import info from "@/assets/json/info.json";
import { useModuleCon851 } from "@/store";
import { msgCon851_ } from "@/fuentes";
import { computed } from "vue";

const use_module_con851 = useModuleCon851();

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

const estructura = computed(() => data_con851.value[use_module_con851.con851.tipo]);

onMounted(() => configAlert());

const configAlert = () => {
  const { codigo, mensaje } = use_module_con851.con851;
  mensaje_.value = msgCon851_(codigo, mensaje);
  setTimeout(() => focoBoton(), 300);
};
const aceptarCon851 = () => {
  if (use_module_con851.con851.func) use_module_con851.con851.func();
  use_module_con851.CON851off();
};
const focoBoton = () => document.getElementById("boton").focus();
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
