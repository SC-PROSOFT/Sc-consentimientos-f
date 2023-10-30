<template>
  <Header_ :titulo="titulo" />
  <q-card class="q-ma-sm">
    <CON890P :modal_impresion="modal_impresion" @validar="selectCON890" :tipo_impresion="2" />
    <div class="q-pa-md">
      <div class="q-ml-sm text-h5 text-bold">Información requerida</div>
      <q-card class="row q-ma-sm" style="width: 500px">
        <Input_
          class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          width_label="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          width_input="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          v-model="reg.anio_desde"
          :field="form.anio_desde"
          text_class="text-center"
          @validate="datoAnioDesde"
        />
        <Input_
          class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          width_label="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          width_input="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          v-model="reg.anio_hasta"
          :field="form.anio_hasta"
          text_class="text-center"
          @validate="datoAnioHasta"
        />
      </q-card>
    </div>
  </q-card>
</template>

<script setup>
import { useModuleCon851, useModuleCon851p, useApiContabilidad } from "@/store";
import { ref, onMounted, defineAsyncComponent } from "vue";
import { generarImpresion } from "@/impresiones";
import { foco_, ultimoFoco_ } from "@/setup";
import { apiAxios } from "@/api/apiAxios";
import { useRouter } from "vue-router";

const CON890P = defineAsyncComponent(() => import("@/components/contab/CON890P.vue"));

const { _getLogo$ } = useApiContabilidad();

const router = useRouter();

const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const titulo = ref("5.1  Catalogo de tarifas");
const modal_impresion = ref(false);
const tipo_impresion = ref(null);

const reg = ref({ anio_desde: null, anio_hasta: null });

const form = ref({
  anio_desde: {
    id: "anio_desde",
    label: "Año desde",
    tipo: "number",
    maxlength: "4",
    disable: true,
    required: true,
  },
  anio_hasta: {
    id: "anio_hasta",
    label: "Año hasta",
    tipo: "number",
    maxlength: "4",
    disable: true,
    required: true,
  },
});
onMounted(() => {
  modal_impresion.value = true;
});

const selectCON890 = ({ value }) => {
  modal_impresion.value = false;
  tipo_impresion.value = value;
  tipo_impresion.value == "f" ? router.push({ name: "menu" }) : foco_(form, "anio_desde");
};
const datoAnioDesde = (event) => {
  switch (event) {
    case "esc":
      return CON851P("MENU", "warning", "", ultimoFoco_, () => router.push({ name: "menu" }));
    case "enter":
      return foco_(form, "anio_hasta");
  }
};
const datoAnioHasta = (event) => {
  switch (event) {
    case "esc":
      return foco_(form, "anio_desde");
    case "enter":
      return cargarDatos();
  }
};
const cargarDatos = async () => {
  try {
    const response = await consultarCAT501();
    if (response.length) cargarImpresion(response);
    else CON851("?", "info", "No existen registros", ultimoFoco_);
  } catch (error) {
    CON851("?", "info", error, ultimoFoco_);
  }
};

const consultarCAT501 = async () => {
  return new Promise((resolve, reject) => {
    apiAxios({
      url: `predial/CAT501`,
      method: "GET",
      params: { anio_desde: reg.value.anio_desde, anio_hasta: reg.value.anio_hasta },
      loader: true,
    })
      .then((response) => {
        if (response.success) resolve(response.data);
        reject(response.message);
      })
      .catch((error) => {
        CON851("?", "info", error, ultimoFoco_);
      });
  });
};

const cargarImpresion = async (datos) => {
  try {
    var logo = await _getLogo$({ nit: localStorage.nit });
    let columnas = [
      { title: "PERIODO", value: "ano_prtar" },
      { title: "TIPO", value: "descrip_prtipo" },
      { title: "CONCEPTO", value: "descrip_prconc" },
      { title: "FORMA DE LIQUIDAR", value: "form_liq_descript_prtar" },
      { title: "VALOR MINIMO", value: "vlr_min_prtar", format: "money" },
      { title: "LEY 44", value: "no_aplic_ley44_prtar" },
      { title: "EVALUO 1", value: "aval_prtar_1", format: "money" },
      { title: "TARIFA 1", value: "porc_prtar_1", format: "number" },
      { title: "EVALUO 2", value: "aval_prtar_2", format: "money" },
      { title: "TARIFA 2", value: "porc_prtar_2", format: "number" },
      { title: "EVALUO 3", value: "aval_prtar_3", format: "money" },
      { title: "TARIFA 3", value: "porc_prtar_3", format: "number" },
      { title: "EVALUO 4", value: "aval_prtar_4", format: "money" },
      { title: "TARIFA 4", value: "porc_prtar_4", format: "number" },
      { title: "EVALUO 5", value: "aval_prtar_5", format: "money" },
      { title: "TARIFA 5", value: "porc_prtar_5", format: "number" },
      { title: "EVALUO 6", value: "aval_prtar_6", format: "money" },
      { title: "TARIFA 6", value: "porc_prtar_6", format: "number" },
    ];

    let header = [
      { text: localStorage.empresa, bold: true, size: 16 },
      `IMPRESION CATALOGO DE TARIFAS: ${localStorage.nit}`,
      `DESDE  ${reg.value.anio_desde} - HASTA ${reg.value.anio_hasta}`,
    ];
    generarImpresion({ tipo: "excel", header, logo, tabla: { columnas, data: datos } })
      .then((data) => {
        CON851("?", "success", data, () => router.push({ name: "menu" }));
      })
      .catch((error) => CON851("?", "error", error, ultimoFoco_));
  } catch (error) {
    CON851("?", "info", error, ultimoFoco_);
  }
};
</script>

<style scoped></style>
