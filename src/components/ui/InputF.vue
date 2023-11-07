<template>
  <q-input
    :style="'min-width:' + props.width + 'px' + ';display:' + props.display"
    :placeholder="placeholder"
    :readonly="props.readonly"
    :disable="props.disable"
    :maxlength="maxlength"
    :type="props.tipo"
    v-model="value"
    dense
  />
</template>

<script setup>
import { onMounted, computed, ref } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: "",
  tipo: {
    type: String,
    default: "text",
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disable: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "100px",
  },
  display: {
    type: String,
    default: "inline-block",
  },
  placeholder: {
    type: String,
    default: "",
  },
  maxlength: {
    type: String,
    default: "",
  },
});

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
