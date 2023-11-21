<template>
  <div class="q-px-sm text-left" :class="field?.capitalize ? 'text-capitalize' : ''">
    <label>{{ field?.label }}</label>
    <div class="q-gutter-md">
      <q-input
        dense
        border
        standout
        outlined
        borderless
        underlying
        :id="field.id"
        type="textarea"
        @blur="blurCaja"
        :rows="field.rows"
        :mask="field.mask"
        @focus="focusCaja"
        ref="my_textarea_ref"
        v-model="model_value_"
        :bg-color="color_foco"
        :disable="field.disable"
        :maxlength="field.maxlength"
        @keydown.esc="backValidate"
        @keydown.f1="executeEventos"
        @keydown.f2="executeEventos"
        @keydown.f3="executeEventos"
        @keydown.f4="executeEventos"
        @keydown.f5="executeEventos"
        @keydown.f6="executeEventos"
        @keydown.f7="executeEventos"
        @keydown.f8="executeEventos"
        @keydown.f9="executeEventos"
        @keydown.f10="executeEventos"
        @keydown.f11="executeEventos"
        @keydown.f12="executeEventos"
        @keydown.enter="nextValidate"
        :input-class="field.tipo == 'number' ? 'text-right ' : ''"
        :counter="field.counter = field.counter == undefined ? true : field.counter"
        :placeholder="`${props.field.placeholder || `Escribe ${props.field.label}`}`"
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
      >
        <template v-slot:append v-if="field.f8">
          <q-icon name="search" class="cursor-pointer" @click="executeEventos({ key: 'f8' })" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useModuleCon851, useModuleLoader } from "@/store";

const { CON851 } = useModuleCon851();
const { getLoader$ } = useModuleLoader();

const props = defineProps({
  modelValue: [String, Number, undefined],
  field: {
    f0: Array,
    id: String,
    rows: Number,
    tipo: String,
    label: String,
    disable: Boolean,
    counter: Boolean,
    required: Boolean,
    maxlength: String,
    placeholder: String,
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

const model_value_ = useField();
const my_textarea_ref = ref(null);
const textarea_element = ref(null);
const flag_foco = ref(false);
const color_foco = ref("white");

watch(props.field, (new_value) => {
  new_value.disable && (color_foco.value = "white");
});
watch(flag_foco, (new_value) => {
  if (props.field.campo_abierto) return;
  if (new_value && !props.field.disable) color_foco.value = "yellow-7";
  else if (!new_value && !props.field.disable) {
    color_foco.value = "white";
  } else color_foco.value = "white";
});

onMounted(() => {
  if (!my_textarea_ref.value) return;
  textarea_element.value = my_textarea_ref.value.$el.querySelector("textarea");
  if (textarea_element.value) {
    textarea_element.value.style.resize = "none";
    textarea_element.value.id = props.field.id;
  }
});

const update = (newValue) => {
  newValue = newValue.toUpperCase();
  emit("update:modelValue", newValue || null);
};
const nextValidate = () => {
  if (getLoader$) return;
  if (props.field.required && !model_value_.value?.trim() && model_value_.value?.endsWith("\n\n\n")) {
    !props.field.campo_abierto && (props.field.disable = true);
    return CON851("02", "info", props.field.label, focoField);
  }
  if (model_value_.value && model_value_.value.includes("\n\n\n")) {
    !props.field.campo_abierto && (props.field.disable = true);
    model_value_.value = model_value_.value.trim();
    emit("validate", "enter");
  }
};

const backValidate = () => {
  props.field.disable = true;
  emit("validate", "esc");
};
const executeEventos = ({ key }) => {
  event.preventDefault();
  if (/^F([1-9]|1[0-2])$/.test(key) && props.field.f0.includes(key?.toLowerCase())) {
    !props.field.campo_abierto && (props.field.disable = true);
    if ((props.field.required && !model_value_.value) || !model_value_.value.trim()) {
      return CON851("02", "info", props.field.label, focoField);
    }
    emit("validate", "enter");
    emit("validate", key?.toLowerCase());
  }
};

const blurCaja = () => {
  flag_foco.value = true;
};
const focusCaja = (e) => {
  if (!e.target) return;
  e.target.focus();
  flag_foco.value = false;
  scrollToFoco();
};
const focoField = () => {
  props.field.disable = false;
  const fields = document.querySelectorAll(`#${props.field.id}`);
  setTimeout(() => {
    fields.forEach((field) => !field.disable && field.select());
  }, 100);
};
const scrollToFoco = () => {
  const elementos = document.querySelectorAll(`#${props.field.id}`);
  setTimeout(() => {
    elementos.forEach((input) => {
      !input.disable &&
        input.addEventListener("focus", () => input.scrollIntoView({ behavior: "smooth", block: "center" }));
    });
  }, 100);
};
</script>
