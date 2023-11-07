<template>
  <div class="q-px-sm text-left" :class="field.capitalize ? 'text-capitalize' : ''">
    <label>{{ field?.label || "" }}</label>
    <div class="q-gutter-md">
      <q-select
        dense
        standout
        outlined
        focusable
        map-options
        :id="field.id"
        behavior="menu"
        @blur="blurCaja"
        @click="clickCaja"
        input-debounce="0"
        ref="my_select_ref"
        @focus="focusCaja"
        selected-item="cod"
        v-model="model_value_"
        :options="items_value"
        :bg-color="color_foco"
        :disable="field.disable"
        transition-show="scale"
        transition-hide="scale"
        @keydown.esc="backValidate"
        @keydown.enter="nextValidate"
        @update:model-value="changeSelect"
        options-selected-class="bg-primary text-white"
        :option-value="field.option_value || 'value'"
        :option-label="field.option_label || 'label'"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey"> Sin datos </q-item-section>
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
    option_value: String,
    option_label: String,
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
      const find_object = props.items.find(
        (e) => e[props.field.option_value || "value"] == val[props.field.option_value || "value"]
      );
      const value = { value: find_object[props.field.option_value || "value"] };
      update(value || val);
    },
  });
};
const model_value_ = useField();
const items_value = ref(props.items);
const my_select_ref = ref(null);
const input_element = ref(null);
const click_select = ref(false);
const flag_foco = ref(false);
const color_foco = ref("white");

watch(props.field, (new_value) => {
  asignarFocoSelect();
  new_value.disable && (color_foco.value = "white");
});
watch(flag_foco, (new_value) => {
  click_select.value = false;
  if (props.field.campo_abierto) return;
  if (new_value && !props.field.disable) color_foco.value = "yellow-7";
  else if (!new_value && !props.field.disable) {
    color_foco.value = "white";
  } else color_foco.value = "white";
});

const asignarFocoSelect = () => {
  if (props.field.disable && props.items.length) return;

  setTimeout(() => {
    input_element.value = my_select_ref.value.$el.querySelector("input");
    if (input_element.value) input_element.value.focus();
  }, 50);
};

const update = ({ value }) => {
  emit("update:modelValue", value);
};

const nextValidate = () => {
  !props.field.campo_abierto && (props.field.disable = true);
  emit("validate", "enter");
};
const backValidate = () => {
  !props.field.campo_abierto && (props.field.disable = true);
  setTimeout(() => emit("validate", "esc"), 50);
};
const changeSelect = () => {
  !props.field.campo_abierto && (props.field.disable = true);
  emit("validate", "enter");
};
const blurCaja = () => {
  flag_foco.value = true;
  click_select.value = false;
};
const clickCaja = () => {
  click_select.value = true;
};
const focusCaja = (e) => {
  if (!e.target) return;
  flag_foco.value = false;
  if (!model_value_.value && props.items.length) {
    update({ value: props.items[0][props.field.option_value || "value"] });
  }
  input_element.value = my_select_ref.value.$el.querySelectorAll("input");
  if (input_element.value) {
    setTimeout(() => {
      !click_select.value && input_element.value[0].click();
    }, 150);
  }
  scrollToFoco();
};

const scrollToFoco = () => {
  const element_select = document.querySelectorAll(`#${props.field.id}`);
  element_select.forEach((input) => {
    !input.disable &&
      input.addEventListener("focus", () => input.scrollIntoView({ behavior: "smooth", block: "center" }));
  });
};
</script>
