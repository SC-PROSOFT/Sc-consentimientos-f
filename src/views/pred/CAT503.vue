<template>
  <Header_ :titulo="titulo" />
  <q-card class="q-ma-sm">
    <CON890P :modal_impresion="modal_impresion" @validar="selectCON890" :tipo_impresion="2" />
    <div class="q-pa-md">
      <div class="q-ml-sm text-h5 text-bold">Información requerida</div>
      <q-card class="row q-ma-sm">
        <Input_
          class="col-xs-12 col-sm-2 col-md-2 col-lg-2 col-xl-2"
          width_label="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          width_input="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          v-model="reg.fecha_corte"
          :field="form.fecha_corte"
          text_class="text-center"
          @validate="datoFechaCorte"
        />
        <Select_
          class="col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-2"
          v-model="reg.concepto"
          :field="form.concepto"
          :items="lista_conceptos"
          @validate="datoConcepto"
        />
        <Input_
          class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-2"
          width_label="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          width_input="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          v-model="reg.mayor"
          :field="form.mayor"
          text_class="text-center"
          @validate="datoMayor"
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
import days from "dayjs";

const CON890P = defineAsyncComponent(() => import("@/components/contab/CON890P.vue"));

const { _getLogo$ } = useApiContabilidad();

const router = useRouter();

const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const titulo = ref("5.1  Informe de saldos de cartera");
const modal_impresion = ref(false);
const tipo_impresion = ref(null);

const fecha_actual = ref(days().format("YYYY-MM-DD"));
const reg = ref({ fecha_corte: null, concepto: null, mayor: null });

const form = ref({
  fecha_corte: {
    id: "fecha_corte",
    label: "Año desde",
    tipo: "date",
    maxlength: "10",
    disable: true,
    required: true,
  },
  concepto: {
    id: "concepto",
    label: "Concepto",
    tipo: "number",
    maxlength: "4",
    disable: true,
    required: true,
  },
  mayor: {
    id: "mayor",
    label: "Listar solo los saldos mayores",
    tipo: "number",
    maxlength: "10",
    disable: true,
  },
});
const lista_conceptos = ref([
  { value: "1", label: "SOLO IMPUESTO PREDIAL" },
  { value: "2", label: "SOLO S/TASA AMBIENTAL" },
  { value: "3", label: "TODOS LOS CONCEPTOS" },
]);
onMounted(() => {
  modal_impresion.value = true;
  reg.value.fecha_corte = fecha_actual.value;
});

const selectCON890 = ({ value }) => {
  modal_impresion.value = false;
  tipo_impresion.value = value;
  tipo_impresion.value == "f" ? router.push({ name: "menu" }) : foco_(form, "fecha_corte");
};
const datoFechaCorte = (event) => {
  switch (event) {
    case "esc":
      return CON851P("MENU", "warning", "", ultimoFoco_, () => router.push({ name: "menu" }));
    case "enter":
      return validarFechaCorte();
  }
};
const validarFechaCorte = () => {
  if (
    reg.value.fecha_corte.slice(0, 4) < 1980 ||
    reg.value.fecha_corte.slice(0, 4) > fecha_actual.value.slice(0, 4)
  ) {
    return CON851("03", "info", "", ultimoFoco_);
  }
  foco_(form, "concepto");
};
const datoConcepto = (event) => {
  switch (event) {
    case "esc":
      return foco_(form, "fecha_corte");
    case "enter":
      return foco_(form, "mayor");
  }
};

const datoMayor = (event) => {
  switch (event) {
    case "esc":
      return foco_(form, "concepto");
    case "enter":
      return CON851P("00", "info", "de facturación", ultimoFoco_, cargarDatos);
  }
};
const cargarDatos = async () => {
  try {
    const response = await consultarCAT503();
    if (response.length) cargarImpresion(response);
    else CON851("?", "info", "No existen registros", ultimoFoco_);
  } catch (error) {
    CON851("?", "info", error, ultimoFoco_);
  }
};

const consultarCAT503 = async () => {
  return new Promise((resolve, reject) => {
    apiAxios({
      url: `predial/CAT503`,
      method: "GET",
      params: {
        ano_per_fact: reg.value.fecha_corte.slice(0, 4),
        concepto_w: Number(reg.value.concepto),
        monto_min_w: Number(reg.value.mayor),
        fecha_corte: reg.value.fecha_corte,
      },
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
    const header_periodos = datos.find((e) => e.header).header;
    const logo = await _getLogo$({ nit: localStorage.nit });

    let columnas = [
      { title: "CODIGO CATASTRAL", value: "cod_catastral_pred" },
      { title: "DIRECCION", value: "direcc_pred" },
      { title: "ID PROPIETARs", value: "nro_id_prop_pred" },
      { title: "NOMBRE DEL PROPIETARIO", value: "nom_prop_pred" },
      ...header_periodos,
      { title: "DEUDA ANTERIOR", value: "deuda_ant", format: "money" },
      { title: "ACUMULADO", value: "deuda", format: "money" },
      { title: "ULTIMA FACTURA", value: "nro_fac", format: "number" },
    ];
    let header = [
      { text: localStorage.empresa, bold: true, size: 16 },
      `IMPRESION INFORME DE CARTERA: ${localStorage.nit}`,
      `DESDE  ${reg.value.fecha_corte} - HASTA ${reg.value.concepto}`,
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
