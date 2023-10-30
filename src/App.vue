<template>
  <router-view />
  <Loader_ />
  <CON851 v-if="use_module_con851.con851.estado" />
  <CON851P v-if="use_module_con851p.con851p.estado" />
</template>
<script setup>
import Loader_ from "@/components/global/loader";
import CON851 from "@/components/CONTAB/CON851.vue";
import CON851P from "@/components/CONTAB/CON851P.vue";
import { useModuleCon851, useModuleCon851p } from "@/store";
const use_module_con851 = useModuleCon851();
const use_module_con851p = useModuleCon851p();
</script>

<style lang="scss">
@import "./assets/styles/style";
</style>
