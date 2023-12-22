<template>
    <div class="q-pa-md background-container">
      <div class="row justify-center fixed-center">
        <q-card class="q-my-sm q-mx-auto text-center">
          <q-toolbar reveal class="bg-primary text-white">
            <div class="text-h6">LA OPCIÓN SE ENCUENTRA EN MANTENIMIENTO</div>
          </q-toolbar>
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
          <q-card-actions align="center" class="text-primary text-center q-mb-lg">
            <q-btn
              id="boton"
              class="botone"
              color="primary"
              icon-right="home"
              label="Volver al menu"
              @click="() => router.push({ name: 'menu' })"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </template>
  <script setup>
  import { LottieAnimation } from "lottie-web-vue";
  import pensador from "@/assets/json/dev1.json";
  import { useRouter } from "vue-router";
  import { onMounted } from "vue";
  
  const router = useRouter();
  
  onMounted(() => focoBoton());
  const focoBoton = () => {
    setTimeout(() => {
      document.getElementById("boton").focus();
    }, 300);
  };
  </script>
  <style scoped>
  .background-container {
    background-size: cover;
    background-position: center center;
    height: 100vh;
    background-image: url("@/assets/image/dev.webp");
    background-attachment: fixed;
    overflow-y: auto;
  }
  </style>
  