<template>
  <Header_ :titulo="titulo" />

  <q-card class="q-ma-sm">
    <div class="row q-pa-md">
      <Input_
        class="col-xs-12 col-sm-2 col-md-2 col-lg-1 col-xl-1"
        v-model="reg_munic.cod_ciu"
        :field="form_munic.cod_ciu"
        @validate="datoCiuda"
      />
      <TextCard_
        class="col-xs-12 col-sm-4 col-md-2 col-lg-2 col-xl-1"
        v-model="reg_ciuda.nombre_ciu"
        :field="form_ciuda.nombre_ciu"
      />
      <Input_
        class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-2"
        v-model="reg_munic.nombre_munic"
        :field="form_munic.nombre_munic"
        @validate="datoMunicipio"
      />
      <Input_
        class="col-xs-12 col-sm-5 col-md-3 col-lg-2 col-xl-2"
        v-model="reg_munic.direcc_munic"
        :field="form_munic.direcc_munic"
        @validate="datoDirecc"
      />
      <Input_
        class="col-xs-12 col-sm-2 col-md-2 col-lg-1 col-xl-1"
        v-model="reg_munic.tel_munic"
        :field="form_munic.tel_munic"
        @validate="datoTelef"
      />
      <Input_
        class="col-xs-12 col-sm-2 col-md-2 col-lg-1 col-xl-1"
        v-model="reg_munic.nit_munic"
        :field="form_munic.nit_munic"
        @validate="datoNit"
      />
      <TextCard_
        class="col-xs-12 col-sm-4 col-md-3 col-lg-2 col-xl-2"
        width_label="col-xs-6 col-sm-8 col-md-8 col-lg-8 col-xl-8"
        width_input="col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-4"
        v-model="reg_munic.dv_munic"
        :field="form_munic.dv_munic"
      />
      <TextCard_
        class="col-xs-12 col-sm-2 col-md-2 col-lg-1 col-xl-1"
        v-model="reg_munic.ult_fact_munic"
        :field="form_munic.ult_fact_munic"
      />
      <Input_
        class="col-xs-12 col-sm-5 col-md-5 col-lg-3 col-xl-1"
        v-model="reg_munic.encab_munic"
        :field="form_munic.encab_munic"
        @validate="datoEncabeza"
      />
      <Input_
        class="col-xs-12 col-sm-5 col-md-4 col-lg-3 col-xl-2"
        v-model="reg_munic.funcionario_munic"
        :field="form_munic.funcionario_munic"
        @validate="datoFuncionario"
      />
      <Input_
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
        v-model="reg_munic.cargo_munic"
        :field="form_munic.cargo_munic"
        @validate="datoCargo"
      />
      <Toggle_
        class="col-xs-12 col-sm-6 col-md-4 col-lg-2 col-xl-2"
        width_label="col-xs-6 col-sm-8 col-md-8 col-lg-9 col-xl-9"
        width_input="col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3"
        v-model="reg_munic.barras_munic"
        :field="form_munic.barras_munic"
        @validate="datoLectorBarras"
      />
      <Input_
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
        width_label="col-xs-6 col-sm-8 col-md-8 col-lg-9 col-xl-9"
        width_input="col-xs-6 col-sm-4 col-md-4 col-lg-3 col-xl-3"
        v-model="reg_munic.int_cor_munic"
        :field="form_munic.int_cor_munic"
        @validate="datoInteresCorr"
      />
      <Select_
        class="col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-2"
        :items="valor_item"
        v-model="reg_munic.aprox_munic"
        :field="form_munic.aprox_munic"
        @validate="datoFormAprox"
      />
      <Input_
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
        width_label="col-xs-6 col-sm-8 col-md-8 col-lg-10 col-xl-10"
        width_input="col-xs-6 col-sm-4 col-md-4 col-lg-2 col-xl-2"
        v-model="reg_munic.copias_pys_munic"
        :field="form_munic.copias_pys_munic"
        @validate="datoNroCopias"
      />
      <TextArea_
        class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
        v-model="reg_munic.mens_munic"
        :field="form_munic.mens_munic"
        @validate="datoMensMunic"
      />
      <Toggle_
        class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
        width_label="col-xs-6 col-sm-8 col-md-8 col-lg-8 col-xl-8"
        width_input="col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-4"
        v-model="reg_munic.impedir_pres_munic"
        :field="form_munic.impedir_pres_munic"
        @validate="datoImpedir"
      />
      <Input_
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"
        width_label="col-xs-6 col-sm-8 col-md-8 col-lg-8 col-xl-8"
        width_input="col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-4"
        v-model="reg_munic.convenio_munic"
        :field="form_munic.convenio_munic"
        @validate="datoConvBarras"
      />
    </div>
  </q-card>
  <CON809 v-if="show_con809" @esc="callbackCON809" @enter="callbackCON809" />
</template>

<script setup>
import { useModuleCon851, useModuleCon851p, useApiPredial, useApiContabilidad } from "@/store";
import { reg_munic_, form_munic_, reg_ciuda_, form_ciuda_ } from "@/fuentes";
import { ref, onMounted, defineAsyncComponent } from "vue";
import { foco_, ultimoFoco_ } from "@/setup";
import { useRouter } from "vue-router";

const CON809 = defineAsyncComponent(() => import("@/components/contab/CON809.vue"));

const router = useRouter();

const { getMunic$, CAT101Put$, CAT101Post$ } = useApiPredial();
const { getCiuda$, CON008$ } = useApiContabilidad();

const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const titulo = ref("1.1  Actualización datos del municipio");
const novedad = ref(null);
const show_con809 = ref(false);

const form_munic = ref(form_munic_());
const form_ciuda = ref(form_ciuda_());
const reg_munic = ref(reg_munic_());
const reg_ciuda = ref(reg_ciuda_());

const valor_item = ref([
  { value: "1", label: "APROXIMAR A 1000" },
  { value: "2", label: "APROXIMAR A 100" },
  { value: "3", label: "APROXIMAR A 10" },
]);

onMounted(() => leerMunicipio());

const leerMunicipio = async () => {
  try {
    const response = await getMunic$({ cod_munic: 1 });
    Object.assign(reg_munic.value, response);
    reg_munic.value.cod_ciu = `${response.dpto_ciu_munic.toString().padStart(2, "0")}${response.ciu_ciu_munic
      .toString()
      .padStart(3, "0")}`;

    const response_ciudad = await getCiuda$({
      dpto_ciu: reg_munic.value.dpto_ciu_munic,
      ciu_ciu: reg_munic.value.ciu_ciu_munic,
    });
    Object.assign(reg_ciuda.value, response_ciudad);
    novedad.value = 8;
    setTimeout(() => foco_(form_munic, "cod_ciu"), 100);
  } catch (error) {
    setTimeout(() => foco_(form_munic, "cod_ciu"), 100);
    novedad.value = 7;
    reg_munic.value.nombre_munic && (reg_munic.value.nombre_munic = "MUNICIPIO DE *");
  }
};
const datoCiuda = (event) => {
  switch (event) {
    case "esc":
      return CON851P("MENU", "warning", "", ultimoFoco_, () => router.push({ name: "menu" }));
    case "enter":
      return validarCiudad();
    case "f8":
      return (show_con809.value = true);
  }
};
const validarCiudad = async () => {
  try {
    const response = await getCiuda$({
      dpto_ciu: Number(reg_munic.value.cod_ciu.toString().slice(0, 2)),
      ciu_ciu: Number(reg_munic.value.cod_ciu.toString().slice(2)),
    });
    Object.assign(reg_ciuda.value, response);
    if (novedad.value != 7) return validarMunicipio();
    return foco_(form_munic, "nombre_munic");
  } catch (error) {
    CON851("?", "info", error, ultimoFoco_);
  }
};
const validarMunicipio = async () => {
  try {
    await getMunic$({ cod_munic: 1 });
    return foco_(form_munic, "nombre_munic");
  } catch (error) {
    CON851("?", "info", error, ultimoFoco_);
  }
};
const datoMunicipio = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "cod_ciu");
    case "enter":
      return foco_(form_munic, "direcc_munic");
  }
};
const datoDirecc = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "nombre_munic");
    case "enter":
      return foco_(form_munic, "tel_munic");
  }
};
const datoTelef = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "direcc_munic");
    case "enter":
      return foco_(form_munic, "nit_munic");
  }
};
const datoNit = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "tel_munic");
    case "enter":
      return validarNit();
  }
};
const validarNit = async () => {
  try {
    const response = await CON008$({ nit: reg_munic.value.nit_munic });
    reg_munic.value.dv_munic = response;
    return foco_(form_munic, "encab_munic");
  } catch (error) {
    CON851("?", "info", error, ultimoFoco_);
  }
};
const datoEncabeza = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "nit_munic");
    case "enter":
      return foco_(form_munic, "funcionario_munic");
  }
};
const datoFuncionario = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "encab_munic");
    case "enter":
      return foco_(form_munic, "cargo_munic");
  }
};
const datoCargo = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "funcionario_munic");
    case "enter":
      return foco_(form_munic, "barras_munic");
  }
};
const datoLectorBarras = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "cargo_munic");
    case "enter":
      if (!reg_munic.value.barras_munic) return CON851("02", "info", "", ultimoFoco_);
      if (reg_munic.value.barras_munic == "S") {
        return foco_(form_munic, "aprox_munic");
      }
      return foco_(form_munic, "int_cor_munic");
  }
};
const datoInteresCorr = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "barras_munic");
    case "enter":
      return foco_(form_munic, "aprox_munic");
  }
};
const datoFormAprox = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "barras_munic");
    case "enter":
      if (reg_munic.value.copias_pys_munic == 0) {
        reg_munic.value.copias_pys_munic = 2;
      }
      return foco_(form_munic, "copias_pys_munic");
  }
};
const datoNroCopias = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "aprox_munic");
    case "enter":
      return validarNroCopias();
  }
};
const validarNroCopias = () => {
  if ([1, 2, 3].includes(reg_munic.value.copias_pys_munic)) {
    if (!reg_munic.value.mens_munic) {
      reg_munic.value.mens_munic = `ESTA  LIQUIDACION OFICIAL DE IMPUESTO PREDIAL UNIFICADO ES CLARA,
      EXPRESA Y ACTUALMENTE EXIGIBLE; POR LO TANTO PRESTA MERITO EJECUTIVO DEL QUE TRATA EL ARTICULO
      828 DEL ESTATUTO TRIBUTARIO NACIONAL Y SE PODRA EJECUTAR POR MEDIO DE UN PROCESO DE COBRO
      ADMINISTRATIVO COACTIVO. CONTRA ESTA LIQUIDACION OFICIAL PROCEDE RECURSO DE RECONSIDERACIÓN.`;
    }
    return foco_(form_munic, "mens_munic");
  } else {
    return CON851("03", "info", "", ultimoFoco_);
  }
};
const datoMensMunic = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "copias_pys_munic");
    case "enter":
      return foco_(form_munic, "impedir_pres_munic");
  }
};
const datoImpedir = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "mens_munic");
    case "enter":
      return foco_(form_munic, "convenio_munic");
  }
};
const datoConvBarras = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_munic, "impedir_pres_munic");
    case "enter":
      if (!reg_munic.value.convenio_munic) reg_munic.value.convenio_munic = "0";
      return validarNovedad();
  }
};
const validarNovedad = () => {
  const opciones = {
    7: { text: "crear", method: grabarDatos },
    8: { text: "actualizar", method: modifcarDatos },
  };
  CON851P(
    "?",
    "info",
    `¿Estas seguro de ${opciones[novedad.value].text} municipio?`,
    ultimoFoco_,
    opciones[novedad.value].method
  );
};
const grabarDatos = async () => {
  try {
    const datos_envio = JSON.parse(JSON.stringify(reg_munic.value));
    datos_envio.cod_munic = 1;
    datos_envio.dpto_ciu_munic = Number(datos_envio.cod_ciu.toString().slice(0, 2));
    datos_envio.ciu_ciu_munic = Number(datos_envio.cod_ciu.toString().slice(2));

    const response = await CAT101Post$({ data: datos_envio });
    CON851("?", "success", response, () => foco_(form_munic, "cod_ciu"));
  } catch (error) {
    CON851("?", "info", error, ultimoFoco_);
  }
};
const modifcarDatos = async () => {
  try {
    const datos_envio = JSON.parse(JSON.stringify(reg_munic.value));

    datos_envio.dpto_ciu_munic = Number(reg_munic.value.cod_ciu.toString().slice(0, 2));
    datos_envio.ciu_ciu_munic = Number(reg_munic.value.cod_ciu.toString().slice(2));
    datos_envio.ult_fact_munic = datos_envio.ult_fact_munic.replace(/,/g, "");

    const response = await CAT101Put$({ data: datos_envio });

    CON851("?", "success", response, () => foco_(form_munic, "cod_ciu"));
  } catch (error) {
    CON851("?", "info", error, ultimoFoco_);
  }
};
const callbackCON809 = (item) => {
  show_con809.value = false;
  if (item) {
    reg_munic.value.id_ciu = item.id_ciu;
    reg_munic.value.cod_ciu = item.cod_ciu;
    Object.assign(reg_ciuda.value, item);
    return foco_(form_munic, "nombre_munic");
  }
  return foco_(form_munic, "cod_ciu");
};
</script>
