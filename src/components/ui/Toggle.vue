<template>
  <div
    class="text-left"
    :class="[field?.capitalize ? 'text-capitalize' : '', width_label ? 'row flex-center ' : '']"
  >
    <label :class="`${width_label ? `${width_label} text-left with-background` : ''} `">{{
      field?.label || "Label no especificado"
    }}</label>
    <div :class="`${width_input} q-gutter-md`">
      <q-toggle
        focusable
        keep-color
        true-value="S"
        false-value="N"
        :id="field.id"
        ref="my_input_ref"
        checked-icon="check"
        unchecked-icon="clear"
        v-model="model_value_"
        :disable="field.disable"
        @keydown="executeEventos"
        @keydown.esc="backValidate"
        indeterminate-value="maybe"
        @keydown.enter="nextValidate"
        indeterminate-icon="radio_button_unchecked"
        :class="width_label ? 'with-background-toggle flex-center' : ''"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useModuleCon851 } from "@/store";
const { CON851 } = useModuleCon851();

const props = defineProps({
  modelValue: [Boolean, String],
  label_position: Boolean,
  width_label: String,
  width_input: String,
  field: {
    f0: Array,
    id: String,
    label: String,
    disable: Boolean,
    required: Boolean,
    capitalize: Boolean,
    campo_abierto: Boolean,
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
const my_input_ref = ref(null);
const input_element = ref(null);
const model_value_ = useField();

onMounted(() => {
  if (!my_input_ref.value) return;
  input_element.value = my_input_ref.value.$el.querySelector("input");
  if (input_element.value) input_element.value.id = props.field.id;
});

const update = (new_value) => emit("update:modelValue", new_value);

const nextValidate = () => {
  !props.field.campo_abierto && (props.field.disable = true);
  if (props.field.required && model_value_.value == null) {
    return CON851("02", "info", props.field.label, focoField);
  }
  emit("validate", "enter");
};

const backValidate = () => {
  !props.field.campo_abierto && (props.field.disable = true);
  emit("validate", "esc");
};
const executeEventos = ({ key }) => {
  event.preventDefault();
  if (/^F([1-9]|1[0-2])$/.test(key) && props.field.f0.includes(key?.toLowerCase())) {
    !props.field.campo_abierto && (props.field.disable = true);
    if (props.field.required && model_value_.value == null) {
      return CON851("02", "info", props.field.label, focoField);
    }
    emit("validate", key?.toLowerCase());
  }
};

const focoField = () => {
  props.field.disable = false;
  const fields = document.querySelectorAll(`#${props.field.id}`);
  setTimeout(() => {
    fields.forEach((field) => !field.disable && field.focus());
  }, 20);
};
</script>
<style scoped>
.with-background-toggle {
  background-color: #ffffff;
  border: 1px solid #00000042;
  border-radius: 2px;
  width: 85%;
}
</style>
