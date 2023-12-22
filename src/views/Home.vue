<template>
  <div class="background-container">
    <div v-if="matchRoute()" class="q-pa-none q-ma-none">
      <Header_ :titulo="route.meta.title" />
      <HeaderFormat_ />
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";
import { useRoute } from "vue-router";

const HeaderFormat_ = defineAsyncComponent(() => import("@/components/global/headerFormat.vue"));
const route = ref(useRoute());
const no_match = ["menu", "dev"];

const matchRoute = () => {
  if(no_match.includes(route.value.name)) return false
  return true;
};
</script>

<style>
.background-container {
  background-size: cover;
  background-position: center center;
  height: 100vh;
  background-image: url("@/assets/image/cover-b.png");
  background-attachment: fixed;
  overflow-y: auto;
}
</style>
