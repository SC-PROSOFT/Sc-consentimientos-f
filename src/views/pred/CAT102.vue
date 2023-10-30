<template>
  <Header_ :titulo="titulo" />
  <q-card class="q-ma-sm">
    <CON850 :modal_novedad="modal_novedad" @validar="selectCON850" />
    <div class="row q-pa-md">
      <Input_
        class="col-xs-12 col-sm-4 col-md-3 col-lg-2 col-xl-1"
        width_label="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
        width_input="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
        v-model="reg_prtip.cod_prtipo"
        :field="form_prtip.cod_prtipo"
        @validate="datoCodPrtip"
      />
      <Input_
        class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-2"
        width_label="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
        width_input="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
        v-model="reg_prtip.descrip_prtipo"
        :field="form_prtip.descrip_prtipo"
        @validate="datoDescriptPrtip"
      />
    </div>
  </q-card>
  <CAT802 v-if="show_cat802" @esc="callbackCAT802" @enter="callbackCAT802" />
</template>

<script setup>
import { useModuleCon851, useModuleCon851p, useApiPredial } from "@/store";
import { ref, onMounted, defineAsyncComponent } from "vue";
import { reg_prtip_, form_prtip_ } from "@/fuentes";
import { foco_, ultimoFoco_ } from "@/setup";
import { useRouter } from "vue-router";

const CON850 = defineAsyncComponent(() => import("@/components/contab/CON850.vue"));
const CAT802 = defineAsyncComponent(() => import("@/components/pred/CAT802.vue"));

const router = useRouter();

const { getTiposPredio$, CAT102Post$, getTipoPredio$, CAT102Delete$, CAT102Put$ } = useApiPredial();

const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const titulo = ref("1.2  Actualizar tipos de predio");
const novedad = ref(null);
const modal_novedad = ref(false);

const show_cat802 = ref(false);
const sw_invalid = ref(null);

const form_prtip = ref(form_prtip_());
const reg_prtip = ref(reg_prtip_());

onMounted(() => consulatarTiposPredio());

const abrirCON850 = () => {
  modal_novedad.value = true;
  reg_prtip.value = reg_prtip_();
};
const selectCON850 = ({ value }) => {
  modal_novedad.value = false;
  novedad.value = value;
  novedad.value == "f" ? router.push({ name: "menu" }) : foco_(form_prtip, "cod_prtipo");
};
const consulatarTiposPredio = async () => {
  try {
    const response = await getTiposPredio$({});
    if (!response.length) return cargarTiposPredio();
    abrirCON850();
  } catch (error) {
    CON851("?", "info", error, () => router.push({ name: "menu" }));
  }
};
const cargarTiposPredio = async () => {
  const tipos_predial_default = [
    { cod_prtipo: "E", descrip_prtipo: "EXENTO" },
    { cod_prtipo: "L", descrip_prtipo: "LOTE" },
    { cod_prtipo: "R", descrip_prtipo: "PREDIO RURAL" },
    { cod_prtipo: "U", descrip_prtipo: "PREDIO URBANO" },
    { cod_prtipo: "I", descrip_prtipo: "INACTIVO" },
  ];
  try {
    const promesas = tipos_predial_default.map(async (element) => {
      return await CAT102Post$({ data: element });
    });
    await Promise.all(promesas);
    abrirCON850();
  } catch (error) {
    CON851("?", "info", error, () => router.push({ name: "menu" }));
  }
};
const datoCodPrtip = (event) => {
  switch (event) {
    case "esc":
      return abrirCON850();
    case "enter":
      if (/^[1-9A-Z]$/.test(reg_prtip.value.cod_prtipo)) {
        return validarTipoPredio();
      } else {
        return CON851("03", "info", null, ultimoFoco_);
      }
    case "f8":
      show_cat802.value = true;
      break;
  }
};
const validarTipoPredio = async () => {
  let validar_error;
  try {
    const response = await getTipoPredio$({ cod_prtipo: reg_prtip.value.cod_prtipo });
    Object.assign(reg_prtip.value, response);
    sw_invalid.value = "00";
  } catch (error) {
    validar_error = error;
    sw_invalid.value = "01";
  }
  switch (true) {
    case novedad.value == "7" && sw_invalid.value == "01":
      return dato3();
    case novedad.value == "7" && sw_invalid.value == "00":
      return validarError(`Ya existe el tipo de predio ${reg_prtip.value.cod_prtipo}`);
    case novedad.value == "8" && sw_invalid.value == "00":
      return dato3();
    case novedad.value == "8" && sw_invalid.value == "01":
      return validarError(validar_error);
    case novedad.value == "9" && sw_invalid.value == "00":
      return validarNovedad();
    case novedad.value == "9" && sw_invalid.value == "01":
      return validarError(validar_error);
  }
};
const dato3 = () => {
  if (reg_prtip.value.cod_prtipo == "E") {
    reg_prtip.value.descrip_prtipo = "EXENTO";
    return validarNovedad();
  } else return foco_(form_prtip, "descrip_prtipo");
};
const validarError = (error) => {
  CON851("?", "info", error, ultimoFoco_);
};
const datoDescriptPrtip = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_prtip, "cod_prtipo");
    case "enter":
      return validarNovedad();
  }
};
const validarNovedad = () => {
  const opciones = {
    7: { text: "crear", method: grabarDatos },
    8: { text: "actualizar", method: modifcarDatos },
    9: { text: "retirar", method: retirarDatos },
  };
  CON851P(
    "?",
    "info",
    `¿Estas seguro de ${opciones[novedad.value].text} tipo de predio?`,
    ultimoFoco_,
    opciones[novedad.value].method
  );
};
const grabarDatos = async () => {
  try {
    const datos_envio = JSON.parse(JSON.stringify(reg_prtip.value));
    const response = await CAT102Post$({ data: datos_envio });
    CON851("?", "success", response, abrirCON850);
  } catch (error) {
    CON851("?", "info", error, ultimoFoco_);
  }
};
const modifcarDatos = async () => {
  try {
    const datos_envio = JSON.parse(JSON.stringify(reg_prtip.value));
    const response = await CAT102Put$({ data: datos_envio });
    CON851("?", "success", response, abrirCON850);
  } catch (error) {
    CON851("?", "info", error, ultimoFoco_);
  }
};
const retirarDatos = async () => {
  try {
    const response = await CAT102Delete$({ cod_prtipo: reg_prtip.value.cod_prtipo });
    CON851("?", "success", response, abrirCON850);
  } catch (error) {
    CON851("?", "info", error, ultimoFoco_);
  }
};
const callbackCAT802 = (item) => {
  show_cat802.value = false;
  if (item) {
    Object.assign(reg_prtip.value, item);
    return validarTipoPredio();
  }
  foco_(form_prtip, "cod_prtipo");
};
</script>
