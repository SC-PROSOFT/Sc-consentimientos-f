<template>
  <div
    :class="[
      field?.capitalize ? 'text-capitalize' : '',
      width_label ? 'row flex-center margin-input-label' : 'q-px-sm',
      text_class ? `${text_class} ` : 'text-left ',
    ]"
  >
    <label :class="`${width_label ? `${width_label}   with-background` : ''} `">{{
      field?.label || ""
    }}</label>
    <div :class="`${width_input} q-gutter-md`">
      <q-input
        dense
        standout
        outlined
        focusable
        :id="field.id"
        @blur="blurCaja"
        ref="my_input_ref"
        @focus="focusCaja"
        :mask="field.mask"
        autocomplete="none"
        :bg-color="color_foco"
        v-model="model_value_"
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
        :unmasked-value="field.mask ? true : false"
        :placeholder="`${props.field.placeholder || ``}`"
        :counter="!field.nocounter ? false : field.nocounter"
        :input-class="field.tipo == 'codigo' || text_class ? 'text-center' : ''"
        :type="field.id == 'clave' ? (field.show_clave ? 'text' : 'password') : field.tipo"
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        ><template v-slot:append v-if="field.f0 && field.f0.includes('f8')">
          <q-icon
            size="1.2em"
            name="pageview"
            color="primary"
            class="cursor-pointer"
            @click="executeEventos({ key: 'f8' })"
          />
        </template>
        <template v-if="field.id == 'clave'" v-slot:append>
          <q-icon
            :name="field.show_clave ? 'remove_red_eye' : 'visibility_off'"
            @click.stop.prevent="field.show_clave = !field.show_clave"
            class="cursor-pointer"
          />
        </template>
        <template v-if="field.icon_before" v-slot:before>
          <q-icon :name="field.icon_before" :color="!flag_foco ? 'primary' : ''" />
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
  width: Number,
  text_class: String,
  width_label: String,
  width_input: String,
  field: {
    f0: Array,
    id: String,
    mask: String,
    tipo: String,
    label: String,
    disable: Boolean,
    required: Boolean,
    maxlength: String,
    nocounter: Boolean,
    show_clave: Boolean,
    placeholder: String,
    icon_before: String,
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
const my_input_ref = ref(null);
const input_element = ref(null);
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
  if (!my_input_ref.value) return;
  input_element.value = my_input_ref.value.$el.querySelector("input");
  if (input_element.value) input_element.value.id = props.field.id;
});

const update = (new_value) => {
  if (props.field.tipo == "number") new_value = parseFloat(new_value);
  else new_value = new_value.toUpperCase();
  setTimeout(() => {
    if (new_value.toString().length == props.field.maxlength) nextValidate();
  }, 100);
  emit("update:modelValue", new_value || null);
};
const nextValidate = () => {
  if (getLoader$) return;
  !props.field.campo_abierto && (props.field.disable = true);
  if (props.field.required && !model_value_.value) {
    return CON851("02", "info", props.field.label, focoField);
  } else if (props.field.tipo == "email" && model_value_.value && !/.+@.+\..+/.test(model_value_.value)) {
    return CON851("?", "info", `¡Correo ${model_value_.value} es inválido!`, focoField);
  }
  emit("validate", "enter");
};

const backValidate = () => {
  !props.field.campo_abierto && (props.field.disable = true);
  setTimeout(() => emit("validate", "esc"), 50);
};
const executeEventos = ({ key }) => {
  event.preventDefault();
  if (props.field.f0.includes(key.toLowerCase())) {
    !props.field.campo_abierto && (props.field.disable = true);
    emit("validate", key?.toLowerCase());
  }
};

const blurCaja = () => {
  flag_foco.value = true;
};
const focusCaja = (e) => {
  if (!e.target) return;
  try {
    e.target.select();
    flag_foco.value = false;
    scrollToFoco();
  } catch (error) {}
};
const focoField = () => {
  props.field.disable = false;
  const fields = document.querySelectorAll(`#${props.field.id}`);
  setTimeout(() => {
    fields.forEach((field) => !field.disable && field?.select());
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

const quitarTildes = (str) => {
  str = str.toUpperCase();
  const acentos = { Á: "A", É: "E", Í: "I", Ó: "O", Ú: "U" };
  return str
    .split("")
    .map((letra) => acentos[letra] || letra)
    .join("")
    .toString();
};
</script>
<style scoped>
.margin-input-label {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
