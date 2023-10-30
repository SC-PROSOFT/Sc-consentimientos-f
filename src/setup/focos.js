import { ref } from "vue";
const field_obj = ref({});
const id_foco = ref("");
const campo_abierto = ref("");

export const foco_ = ({ value }, id) => {
  field_obj.value = value || field_obj.value;
  id_foco.value = id || id_foco.value;
  value[id_foco.value].disable = false;
  campo_abierto.value = value[id_foco.value].campo_abierto || campo_abierto.value;
  const fields = document.querySelectorAll(`#${id}`);
  setTimeout(() => {
    value[id_foco.value].campo_abierto && document.getElementById(id).focus();
    fields.forEach((field) => !field.disable && field.focus());
  }, 100);
};

export const ultimoFoco_ = () => {
  field_obj.value[id_foco.value].disable = false;
  if (!id_foco.value) return;
  setTimeout(() => {
    campo_abierto.value && document.getElementById(id_foco.value)?.focus();
    document.getElementById(id_foco.value).focus();
  }, 10);
};
