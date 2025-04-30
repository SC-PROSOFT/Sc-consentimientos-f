<template>
  <q-toolbar :class="`bg-${color}`" style="min-height: 33px">
    <q-toolbar-title class="text-bold text-center text-white">
      <span style="font-size: 15px">{{ titulo }}</span>
      <q-icon round v-if="icon" class="q-my-auto" color="white" :name="icon" />
      <q-tooltip class="bg-red text-white shadow-4" anchor="top middle" self="bottom middle" :offset="[0, 10]" v-if="tooltip">{{ name }}</q-tooltip>
    </q-toolbar-title>
    <q-btn v-if="close_state" flat color="white" @click="cerrar" round dense icon="close" />
  </q-toolbar>
</template>
<script setup>
defineProps({
  color: {
    type: String,
    default: "primary",
  },
  titulo: String,
  tooltip: Boolean,
  name: String,
  icon: String,
  close_state: { type: Boolean, default: true },
});
const emit = defineEmits(["cerrar"]);

const cerrar = () => emit("cerrar");
</script>
