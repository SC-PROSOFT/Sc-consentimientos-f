<template>
  <div class="q-px-sm text-left" :class="field.capitalize ? 'text-capitalize' : ''">
    <label>{{ field?.label || "Label no especificado" }}</label>
    <div class="q-gutter-md">
      <q-select
        dense
        outlined
        standout
        use-input
        map-options
        :id="field.id"
        behavior="menu"
        @blur="blurCaja"
        ref="my_select_ref"
        input-debounce="0"
        @focus="focusCaja"
        @filter="filterItems"
        v-model="model_value_"
        :options="items_value"
        :bg-color="color_foco"
        :disable="field.disable"
        transition-show="scale"
        transition-hide="scale"
        @keydown.esc="backValidate"
        @keydown.enter="nextValidate"
        @update:model-value="changeSelect"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey"> Sin registros </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
  modelValue: String,
  items: [Array],
  field: {
    f0: Array,
    id: String,
    label: String,
    disable: Boolean,
    capitalize: Boolean,
    placeholder: String,
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

const model_value_ = useField();
const items_value = ref(props.items);
const my_select_ref = ref(null);
const input_element = ref(null);
const flag_foco = ref(false);
const color_foco = ref("white");

watch(props.field, (new_value) => {
  asignarFocoSelect();
  new_value.disable && (color_foco.value = "white");
});
watch(flag_foco, (new_value) => {
  if (props.field.campo_abierto) return;
  if (new_value && !props.field.disable) color_foco.value = "yellow-7";
  else if (!new_value && !props.field.disable) {
    color_foco.value = "white";
  } else color_foco.value = "white";
});

const filterItems = (val, updateItems) => {
  if (!val) {
    updateItems(() => {
      items_value.value = props.items;
    });
    return;
  }
  updateItems(() => {
    const needle = val.toLowerCase();
    items_value.value = props.items.filter((v) => v.label.toLowerCase().indexOf(needle) > -1);
  });
};
const asignarFocoSelect = () => {
  if (props.field.disable && props.items.length) return;
  setTimeout(() => {
    input_element.value = my_select_ref.value.$el.querySelector("input");
    if (input_element.value) input_element.value.focus();
  }, 50);
};

const update = ({ value }) => emit("update:modelValue", value);

const nextValidate = () => {
  !props.field.campo_abierto && (props.field.disable = true);
  emit("validate", "enter");
};
const backValidate = () => {
  props.field.disable = true;
  setTimeout(() => emit("validate", "esc"), 50);
};
const changeSelect = () => {
  !props.field.campo_abierto && (props.field.disable = true);
  emit("validate", "enter");
};
const blurCaja = () => {
  flag_foco.value = true;
};
const focusCaja = (e) => {
  if (!e.target) return;
  flag_foco.value = false;
  if (!model_value_.value) update({ value: props.items[0].value });
  input_element.value = my_select_ref.value.$el.querySelectorAll("input");
  if (input_element.value) input_element.value[0].click();
  scrollToFoco();
};
const scrollToFoco = () => {
  const element_select = document.querySelectorAll(`#${props.field.id}`);
  element_select.forEach((input) => {
    !input.disable &&
      input.addEventListener("focus", () =>
        input.scrollIntoView({ behavior: "smooth", block: "center" })
      );
  });
};
</script>
