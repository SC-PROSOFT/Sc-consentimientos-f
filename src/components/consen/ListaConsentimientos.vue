<template>
  <q-card class="my-card">
    <!-- tabla para reimprimir los consentimientos -->
    <q-table
      title="Reimprimir consentimiento"
      v-if="['2', '3'].includes(novedad)"
      :rows-per-page-options="[10]"
      :columns="columns_consen"
      :rows="lista_consen"
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
            <q-chip
              v-if="col.label == 'Estado'"
              class="text-white"
              :color="valueEstado(col.value)"
              >{{ col.value }}</q-chip
            >
            <div v-else>{{ col.value }}</div>
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
      :rows="lista_maestros"
      v-if="novedad == 1"
      :columns="columns"
      row-key="cod_mae"
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
import { useApiContabilidad, useModuleCon851, useModuleFormatos } from "@/store";
import {
  impresionHC030,
  impresionHC031,
  impresionHC032,
  impresionHC033,
  impresionHC034,
  impresionHC035,
  impresionHC036,
  impresionHC037,
  impresionHC039,
  impresionHC040,
  impresion,
} from "@/impresiones";
import { utilsFormat } from "@/formatos/utils";
import days from "dayjs";

const props = defineProps({ cargar: Function });

const router = useRouter();
const route = useRoute();

const { CON851 } = useModuleCon851();
const { getDll$, _getFirma$, _getImagen$, _getHuella$, setHeader$, logOut$ } = useApiContabilidad();
const { getEmpresa, setHc } = useModuleFormatos();

/* Novedad 1 elabora consentimientos 2 imprime  vienen de los querys 3 para disentir los autorizados */
const novedad = ref(null);
const params_querys = ref(null);

const firma_prof = ref(null);
const huella_paci = ref(null);
const firma_consen = ref(null);
const firma_recibida_acomp = ref(null);

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

    format: (val, row) =>
      `${days(row.reg_coninf.llave.fecha + row.reg_coninf.llave.hora).format("HH:mm")}`,
    field: (row) => row.reg_coninf.llave.hora,
  },
  {
    name: "descripcion",
    label: "Descripción",
    align: "left",
    field: (row) => row.reg_coninf.datos_encab.descrip,
  },
  {
    name: "oper",
    label: "Operador",
    align: "left",
    field: (row) => row.reg_coninf.llave.oper_elab,
  },
  {
    name: "estado",
    label: "Estado",
    align: "left",
    field: (row) => row.reg_coninf.estado,
  },
];
const columns = [
  { name: "cod_mae", label: "Código", align: "left", field: "cod_mae" },
  { name: "descrip", label: "Nombre", align: "left", field: "descrip" },
];

onMounted(() => {
  getParametros();
});

const valueEstado = (estado) => {
  if (estado == "AUTORIZADO") return "light-green-6";
  else if (estado == "REVOCADO") return "amber-7";
  return "red";
};
const getParametros = async () => {
  if (Object.keys(route.query).length) {
    sessionStorage.setItem("query", JSON.stringify(route.query));
  }
  if (!Object.keys(route.query).length) params_querys.value = JSON.parse(sessionStorage.query);
  else params_querys.value = route.query;
  novedad.value = params_querys.value.novedad;

  await getHistoriaClinica();
  getMaestros();
};
const getHistoriaClinica = async () => {
  try {
    const response = await getDll$({
      modulo: `get_hc.dll`,
      data: { llave_hc: route.query.llave_hc },
    });
    setHc(response.reg_hc);

    if (response.reg_hc.cierre.estado == 2) return CON851("9Y", "info", "", logOut$);
    if (["2", "3"].includes(novedad.value)) getConsentimientosRealizados();
  } catch (error) {
    CON851("?", "info", error, logOut$);
  }
};
const getConsentimientosRealizados = async () => {
  try {
    const response = await getDll$({
      modulo: `get_consen.dll`,
      data: {
        llave_consen: params_querys.value.llave_hc,
        modulo: params_querys.value.modulo?.toUpperCase(),
        paso: novedad.value,
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
  const opciones = {
    HIC030: impresionHC030,
    HIC031: impresionHC031,
    HIC032: impresionHC032,
    HIC033: impresionHC033,
    HIC034: impresionHC034,
    HIC035: impresionHC035,
    HIC036: impresionHC036,
    HIC037: impresionHC037,
    HIC039: impresionHC039,
    HIC040: impresionHC040,
  };

  setHeader$({ encabezado: row.reg_coninf.datos_encab });
  await getFirmaProf(row.reg_prof.cod);
  await getHuella(row.reg_paci.cod);

  await consultarFirmaConsen(
    `${row.reg_coninf.llave.id}${row.reg_coninf.llave.folio}${row.reg_coninf.llave.fecha}${row.reg_coninf.llave.hora}${row.reg_coninf.llave.oper_elab}`
  );
  try {
    const docDefinition = utilsFormat({
      datos: {
        img_firma_consen: firma_consen.value,
        img_firma_acomp: firma_recibida_acomp.value,
        img_huella_paci: huella_paci.value,
        img_firma_paci: firma_consen.value,
        firma_prof: firma_prof.value,
      },
      content: opciones[row.reg_coninf.cod]({
        datos: {
          autorizo: row.reg_coninf.estado == "AUTORIZADO" ? true : false,
          llave: row.reg_coninf.llave.folio,
          firmas: {
            firma_paci: firma_consen.value ? true : false,
            firma_acomp: firma_recibida_acomp.value ? true : false,
            firma_prof: firma_prof.value ? true : false,
          },
          fecha: days(row.reg_coninf.llave.fecha).format("YYYY-MM-DD"),
          hora: `${days(row.reg_coninf.llave.fecha + row.reg_coninf.llave.hora).format("HH:mm")}`,
          empresa: getEmpresa,
          paciente: row.reg_paci,
          prof: row.reg_prof,
          acomp: row.reg_acomp,
          paren_acomp: row.reg_coninf.paren_acomp,
          ...row.reg_coninf.datos,
        },
      }),
    });

    await impresion({ docDefinition });
  } catch (error) {
    console.error("error-- >", error);
  }
};

const getFirmaProf = async (cod_prof) => {
  try {
    firma_prof.value = await _getFirma$({ codigo: cod_prof });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};
const getHuella = async (cod_paci) => {
  try {
    huella_paci.value = await _getHuella$({ codigo: Number(cod_paci) });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};
const consultarFirmaConsen = async (cod_consen) => {
  try {
    firma_consen.value = await _getImagen$({ codigo: `P${cod_consen}` });
    firma_recibida_acomp.value = await _getImagen$({ codigo: `A${cod_consen}` });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
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
  const consen_select = lista_maestros.value.find((e) => e.cod_mae == data);
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
