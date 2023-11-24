<template>
  <div
    :class="[
      field?.capitalize ? 'text-capitalize' : '',
      width_label ? 'row flex-center self-end' : 'q-px-sm',
      text_class ? `${text_class} ` : 'text-left ',
    ]"
  >
    <label :class="`${width_label ? `${width_label}   with-background` : ''} `">{{
      field.label || ""
    }}</label>
    <div :class="`${width_input} q-gutter-md` ">
      <q-select
        dense
        standout
        outlined
        focusable
        map-options
        options-dense
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
        transition-show="jump-up"
        transition-hide="jump-up"
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
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps" @click="changeSelect">
            <q-item-section>
              <q-item-label>{{ scope.opt[field.option_label || "label"] }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
  modelValue: [String, Number],
  items: [Array],
  text_class: String,
  width_label: String,
  width_input: String,
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

const update = ({ value }) => emit("update:modelValue", value);

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
};
const clickCaja = (click_verdadero) => {
  if (click_verdadero.isTrusted) click_select.value = click_verdadero.isTrusted;
};
const focusCaja = (e) => {
  if (!e.target) return;
  if (!model_value_.value && props.items.length) {
    update({ value: props.items[0][props.field.option_value || "value"] });
  }

  input_element.value = my_select_ref.value.$el.querySelectorAll("input");
  setTimeout(() => scrollToFoco(), 150);
};

const scrollToFoco = () => {
  const element_select = document.querySelectorAll(`#${props.field.id}`);
  element_select.forEach((input) => {
    !input.disable &&
      input.addEventListener("focus", () =>
        input.scrollIntoView({ behavior: "smooth", block: "center" })
      );
    if (input_element.value) {
      if (click_select.value && model_value_.value && props.field.campo_abierto) return;
      !click_select.value && input_element.value[0]?.click(false);
    }
  });
  flag_foco.value = false;
};
</script>
<style scoped>
.margin-input-label {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
