<template>
  <q-dialog v-model="estado" persistent no-shake>
    <q-card class="my-card">
      <ToolBarTable_ :titulo="titulo" :name="name" @cerrar="exitF8" />
      <div class="row q-pa-sm">
        <Input_
          class="col-xs-12 col-sm-7 col-md-5 col-lg-4 col-xl-3"
          v-model="reg_filtro.filtro"
          :field="form_filtro.filtro"
          @validate="datoFiltro"
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
import { useModuleCon851, useApiContabilidad } from "@/store";

const { getDll$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();

const emit = defineEmits(["esc", "enter"]);

const estado = ref(true);
const name = ref("SER819");
const focus_table = ref(false);
const titulo = ref("VENTANA PROFESIONALES");

const reg_filtro = ref({ filtro: "" });
const pagina = ref(0);

const form_filtro = ref({
  filtro: {
    id: "filtro",
    label: "Descripcion",
    disable: true,
    maxlength: "50",
  },
});

const datos_tabla = ref({
  headers: [
    {
      label: "Código",
      value: "identificacion",
      tipo: "text",
      class: "col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4",
    },
    {
      label: "Nombre",
      value: "nombre",
      tipo: "text",
      class: "col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4",
    },
    {
      label: "Dealle",
      value: "detalle",
      tipo: "text",
      class: "col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4",
    },
  ],
  data: [],
  total_paginas: 0,
});

onMounted(() => {
  setTimeout(() => foco_(form_filtro, "filtro"), 200);
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
      pagina.value = 0;
      return getDatos();
  }
};

const nextData = (event) => {
  switch (event) {
    case "<":
      return pagina.value > 0 && getDatos(--pagina.value);
    case ">":
      if (datos_tabla.value.data.length == 15 && pagina.value >= 0) {
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
    getDll$({
      modulo: `get_prof_f8.dll`,
      data: {
        paginacion: pagina.value,
        inicial: reg_filtro.value.filtro,
        general: "",
      },
    })
      .then((response) => {
        resolve(response.REG_PROF);
      })
      .catch((error) => {
        console.error(error);
        reject("Error consultando registros");
      });
  });
};
const focoCampo = () => {
  focus_table.value = false;
  foco_(form_filtro, "filtro");
};

const exitF8 = () => emit("esc");
const selectData = (item) => emit("enter", item);
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1000px
</style>
