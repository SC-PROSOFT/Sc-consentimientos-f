<template>
  <div
    class="text-left"
    :class="[field?.capitalize ? 'text-capitalize' : '', width_label ? 'row flex-center ' : 'q-px-sm']"
  >
    <label :class="`${width_label ? `${width_label} text-left with-background` : ''} `">{{
      field?.label || "Label no especificado"
    }}</label>
    <div :class="`${width_input} q-gutter-md`">
      <q-input
        dense
        disable
        outlined
        :id="field.id"
        :ref="field.id"
        bg-color="grey-1"
        :mask="field.mask"
        v-model="modelvalue_"
        :disable="field.disable"
        :input-class="'text-center'"
        @keydown.enter="nextValidate"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: [String, Number, undefined],
  width_label: String,
  width_input: String,
  field: {
    id: String,
    mask: String,
    label: String,
    disable: Boolean,
    capitalize: Boolean,
  },
});

const emit = defineEmits(["validate", "update:modelValue"]);

const useField = () => {
  return computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      update(val);
    },
  });
};
const modelvalue_ = useField();

const update = (newValue) => emit("update:modelValue", newValue);
const nextValidate = () => {
  emit("validate");
};
</script>
<style scoped></style>
