<template>
  <q-card class="my-card">
    <!-- tabla para reimprimir los consentimientos -->
    <q-table
      title="Reimprimir consentimiento"
      :rows-per-page-options="[10]"
      :columns="columns_consen"
      :rows="lista_consen"
      v-if="novedad == 2"
      row-key="COD_MAE"
      bordered
      dense
      flat
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width> Imprimir </q-th>
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props" @dblclick="imprimirConsen(props)" class="cursor">
          <q-td auto-width>
            <q-btn
              @click="imprimirConsen(props)"
              icon="local_printshop"
              class="botone"
              color="primary"
              size="sm"
            >
            </q-btn>
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
      </template>

      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span> No existen registros </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>
    </q-table>
    <!-- tabla para elaborar los consentimientos -->
    <q-table
      title="Generar consentimiento"
      :rows-per-page-options="[10]"
      @row-dblclick="selectConsen"
      :rows="lista_maestros"
      v-if="novedad == 1"
      :columns="columns"
      row-key="COD_MAE"
      bordered
      dense
      flat
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width> Elaborar </q-th>
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props" @dblclick="selectConsen(props.key)" class="cursor">
          <q-td auto-width>
            <q-btn
              @click="selectConsen(props.key)"
              icon="note_add"
              class="botone"
              color="primary"
              size="sm"
            >
            </q-btn>
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value?.toUpperCase() }}
          </q-td>
        </q-tr>
      </template>

      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span> No existen registros </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>
    </q-table>
  </q-card>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useApiContabilidad, useModuleCon851 } from "@/store";
import days from "dayjs";

const props = defineProps({
  cargar: Function,
});
const router = useRouter();
const route = useRoute();

const { CON851 } = useModuleCon851();
const { getDll$, setHeader$ } = useApiContabilidad();

/* Novedad 1 elabora consentimientos 2 imprime  vienen de los querys */
const novedad = ref(null);
const params_querys = ref(null);

const lista_consen = ref([]);

const lista_maestros = ref([]);
const columns_consen = [
  {
    name: "reg_coninf.llave.fecha",
    label: "Código",
    align: "left",
    field: (row) => row.reg_coninf.cod,
  },
  {
    name: "llave",
    label: "Fecha",
    align: "left",
    format: (val, row) => ` ${days(val).format("YYYY-MM-DD")}`,
    field: (row) => row.reg_coninf.llave.fecha,
  },
  {
    name: "hora",
    label: "Hora",
    align: "left",
    format: (val, row) => ` ${days(val).format("hh:mm")}`,
    field: (row) => row.reg_coninf.llave.hora,
  },
  {
    name: "descripcion",
    label: "Descripción",
    align: "left",
    field: (row) => row.reg_coninf.datos_encab.descrip,
  },
];
const columns = [
  { name: "cod_mae", label: "Código", align: "left", field: "cod_mae" },
  { name: "descrip", label: "Nombre", align: "left", field: "descrip" },
];

onMounted(() => {
  getParametros();
});

const getParametros = async () => {
  if (Object.keys(route.query).length) {
    sessionStorage.setItem("query", JSON.stringify(route.query));
  }
  if (!Object.keys(route.query).length) {
    params_querys.value = JSON.parse(sessionStorage.query);
  } else {
    params_querys.value = route.query;
  }
  novedad.value = params_querys.value.novedad;
  if (novedad.value == 2) getHistoriaClinica();
  else getMaestros();
};
const getHistoriaClinica = async () => {
  try {
    const response = await getDll$({
      modulo: `get_hc.dll`,
      data: { llave_hc: route.query.llave_hc },
    });
    getConsentimientosRealizados();
  } catch (error) {
    CON851("?", "info", error);
  }
};
const getConsentimientosRealizados = async () => {
  try {
    const response = await getDll$({
      modulo: `get_consen.dll`,
      data: {
        llave_consen: params_querys.value.llave_hc,
        modulo: params_querys.value.modulo?.toUpperCase(),
        paso: "2",
      },
    });

    lista_consen.value = response.CONSENTIMIENTOS;
    lista_consen.value.sort((a, b) => {
      return (
        parseInt(`${b.reg_coninf.llave.fecha}${b.reg_coninf.llave.hora}`) -
        parseInt(`${a.reg_coninf.llave.fecha}${a.reg_coninf.llave.hora}`)
      );
    });
  } catch (error) {
    console.error(error);
    CON851("?", "info", "Error consultado consentimientos");
  }
};

const imprimirConsen = async ({ row }) => {
  console.log("data", row);
};
const getMaestros = async () => {
  try {
    const response = await getDll$({
      modulo: `get_maeconsen.dll`,
      data: {
        modulo: params_querys.value.modulo?.toUpperCase(),
        id_paci: params_querys.value.llave_hc.slice(0, 15),
        listar_todos: "0",
      },
    });
    lista_maestros.value = response;
  } catch (error) {
    CON851("?", "info", error);
  }
};
const selectConsen = async (data) => {
  const consen_select = lista_maestros.value.find((e) => (e.COD_MAE = data));
  setHeader$({ encabezado: consen_select });
  router.push({ name: data });
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1200px
  border-radius: 0.5rem
</style>
