<template>
  <q-dialog v-model="estado" persistent no-shake>
    <q-card class="my-card">
      <ToolBarTable_ :titulo="titulo" :name="name" @cerrar="exitF8" />
      <div class="row q-pa-sm">
        <Select_
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3"
          v-model="reg_filtro.filtro"
          :field="form_filtro.filtro"
          @validate="datoFiltro"
          :items="list_filtro"
        />
        <Input_
          class="col-xs-12 col-sm-7 col-md-5 col-lg-4 col-xl-3"
          v-model="reg_filtro.buscar"
          :field="form_filtro.buscar"
          @validate="datoBuscar"
        />
      </div>
      <DataTable_
        @cambioPagina="cambioPagina"
        :datos_tabla="datos_tabla"
        :focus_table="focus_table"
        @selectRow="selectData"
        @escTable="focoCampo"
        @nextData="nextData"
        :pagina="pagina"
      />
    </q-card>
  </q-dialog>
</template>
<script setup>
import ToolBarTable_ from "@/components/global/ToolBarTable.vue";
import { foco_, ultimoFoco_ } from "@/setup";
import { ref, onMounted, watch } from "vue";
import { useModuleCon851 } from "@/store";
import { apiAxios } from "@/api/apiAxios";

const { CON851 } = useModuleCon851();

const emit = defineEmits(["esc", "enter"]);

const estado = ref(true);
const name = ref("CON809");
const focus_table = ref(false);
const titulo = ref("VENTANA DE CIUDADES");

const reg_filtro = ref({ filtro: "", buscar: "" });
const pagina = ref(1);
const tipo = ref("");

const form_filtro = ref({
  filtro: { id: "filtro", label: "Filtro", disable: true },
  buscar: { id: "buscar", label: "Descripción", disable: true, maxlength: "50" },
});
const list_filtro = ref([
  { value: "ciu_ciu", label: "Código de ciudad", tipo: "number" },
  { value: "dpto_ciu", label: "Código de departamento", tipo: "number" },
  { value: "nombre_ciu", label: "Nombre de ciudad", tipo: "text" },
]);

const datos_tabla = ref({
  headers: [
    {
      label: "Código",
      value: "cod_ciu",
      tipo: "text",
      class: "col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3",
    },
    {
      label: "Nombre",
      value: "nombre_ciu",
      tipo: "text",
      class: "col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3",
    },
    {
      label: "Departamento",
      value: "nombre_dpto",
      class: "col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3",
    },
    {
      label: "Pais",
      value: "nombre_pais",
      class: "col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3",
    },
  ],
  data: [],
  total_paginas: 0,
});

watch(reg_filtro.value, () => {
  tipo.value = list_filtro.value.find((e) => e.value == reg_filtro.value.filtro).tipo;
});

onMounted(() => {
  reg_filtro.value.filtro = "nombre_ciu";
  setTimeout(() => foco_(form_filtro, "buscar"), 200);
});

const cambioPagina = (pagina_table) => {
  pagina.value = pagina_table;
  getDatos();
};

const datoFiltro = (event) => {
  switch (event) {
    case "esc":
      return exitF8();
    case "enter":
      return foco_(form_filtro, "buscar");
  }
};
const datoBuscar = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_filtro, "filtro");
    case "enter":
      pagina.value = 1;
      return getDatos();
  }
};
const nextData = (event) => {
  switch (event) {
    case "<":
      return pagina.value > 1 && getDatos(--pagina.value);
    case ">":
      if (datos_tabla.value.data.length == 15 && pagina.value >= 1) {
        getDatos(++pagina.value);
      } else {
        focus_table.value = false;
        return CON851("?", "info", "No existen mas registros", () => (focus_table.value = true));
      }
      break;
  }
};

const getDatos = async () => {
  try {
    const response = await validarBusqueda();
    if (!response.length) {
      datos_tabla.value.data = [];
      focus_table.value = false;
      return CON851("?", "info", "No existen mas registros", ultimoFoco_);
    }
    datos_tabla.value.data = response;
    focus_table.value = true;
  } catch (error) {
    pagina.value = 1;
    focus_table.value = false;
    CON851("?", "info", error, ultimoFoco_);
  }
};
const validarBusqueda = () => {
  return new Promise((resolve, reject) => {
    apiAxios({
      url: `contabilidad/CON809`,
      method: "GET",
      params: {
        filtro: reg_filtro.value.filtro,
        buscar: reg_filtro.value.buscar,
        pagina: pagina.value,
        type: tipo.value,
      },
      loader: false,
    })
      .then((response) => {
        if (pagina.value == 1) datos_tabla.value.total_paginas = response.totalData;
        if (response.success) resolve(response.data);
        reject(response.message);
      })
      .catch((error) => {
        console.error(error);
        reject("Error consultando registros");
      });
  });
};
const focoCampo = () => {
  focus_table.value = false;
  foco_(form_filtro, "buscar");
};

const exitF8 = () => emit("esc");
const selectData = (item) => emit("enter", item);
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1000px
</style>
