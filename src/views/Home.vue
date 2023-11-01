<template>
  <div class="background-container">
    <div v-show="route.name != 'menu'" class="q-pa-none q-ma-none">
      <Header_ :titulo="route.meta.title" />
      <HeaderFormat />
    </div>
    <RouterView />
  </div>
</template>

<script setup>
const HeaderFormat = defineAsyncComponent(() => import("../components/global/headerFormat.vue"));
import { defineAsyncComponent, ref } from "vue";
import { useRoute } from "vue-router";
const route = ref(useRoute());
</script>

<style>
.background-container {
  background-size: cover;
  background-position: center center;
  height: 100vh;
  background-image: url("@/assets/image/cover-b.png");
}
</style>
