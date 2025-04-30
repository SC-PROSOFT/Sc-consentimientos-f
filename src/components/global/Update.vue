<template>
  <q-dialog v-model="estado" persistent>
    <q-card
      class="my-card"
      bordered
      :style="{
        'border-left': `4px solid #123D7D`,
        'border-radius': '15px',
      }"
    >
      <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 q-mt-lg">
          <LottieAnimation
            :animation-data="update"
            style="height: 130px"
            :loopDelayMin="2.5"
            :auto-play="true"
            :loopDelayMax="5"
            class="q-mt-20"
            :loop="true"
            :speed="1"
            ref="anim"
          />
        </div>
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
          <q-card-section class="q-pb-sm">
            <div :class="`text-primary text-center`" class="text-h6 text-bold">
              {{ use_loader.loader ? "ACTUALIZANDO..." : "ACTUALIZACIÓN DISPONIBLE" }}
            </div>
            <q-separator color="primary" class="q-pb-xs" />
          </q-card-section>
          <q-card-section
            class="q-pt-none text-center text-h7"
            v-html="use_loader.loader ? 'Actualizando porfavor espera a que finalice la instalación' : mensaje"
          >
          </q-card-section>
          <q-card-actions align="center" class="text-primary text-center" v-show="!use_loader.loader">
            <q-btn outline id="boton1" color="red-14" label="Cancelar" @click="cancelar" icon-right="cancel" class="botone q-mx-sm" />
            <q-btn outline id="boton2" color="green" label="Aceptar" @click="aceptar" class="botone q-mx-sm" icon-right="check_circle" />
          </q-card-actions>
          <div v-show="use_loader.loader" class="q-mb-md animacion-tres-puntos">
            <div class="punto">...</div>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { LottieAnimation } from "lottie-web-vue";
import { useModuleLoader } from "@/store";
import update from "@/assets/json/update.json";

const use_loader = useModuleLoader();

const props = defineProps({
  mensaje: String,
});
const estado = ref(true);

const emit = defineEmits(["aceptar", "cancelar"]);

onMounted(() => configAlert());
const configAlert = () => setTimeout(() => focoBoton(), 300);

const aceptar = () => emit("aceptar");
const cancelar = () => emit("cancelar");

const focoBoton = () => {
  setTimeout(() => {
    document.getElementById("boton1")?.focus();
  }, 1000);
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px

.animacion-tres-puntos
  display: flex
  align-items: center
  justify-content: center
  font-size: 24px // Ajusta según sea necesario

  .punto
    animation: puntoAnimacion 1s infinite // Puedes ajustar la duración según sea necesario
    margin: 0 4px // Espaciado entre los puntos

@keyframes puntoAnimacion
  0%, 20%
    opacity: 0.2
  50%
    opacity: 1
  80%, 100%
    opacity: 0.2
</style>
