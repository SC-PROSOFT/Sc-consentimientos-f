<template>
  <q-toolbar class="bg-primary">
    <q-toolbar-title class="text-bold text-center text-white">
      {{ titulo }}
      <q-btn round v-if="icon" color="primary" :icon="icon" />

      <q-tooltip
        class="bg-red text-white shadow-4"
        anchor="top middle"
        self="bottom middle"
        :offset="[0, 10]"
        >{{ name }}</q-tooltip
      >
    </q-toolbar-title>
    <q-btn flat color="white" @click="cerrar" round dense icon="close" />
  </q-toolbar>
</template>
<script setup>
defineProps({ titulo: String, name: String, icon: String });
const emit = defineEmits(["cerrar"]);

const cerrar = () => emit("cerrar");
</script>
