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
        v-if="name"
        >{{ name }}</q-tooltip
      >
    </q-toolbar-title>
    <q-btn v-if="close_state" flat color="white" @click="cerrar" round dense icon="close" />
  </q-toolbar>
</template>
<script setup>
defineProps({ titulo: String, name: String, icon: String, close_state: { type: Boolean, default: true } });
const emit = defineEmits(["cerrar"]);

const cerrar = () => emit("cerrar");
</script>
