<template>
  <q-card class="my-card">
    <!-- tabla para reimprimir los consentimientos -->
    <q-table
      :title="novedad == '2' ? 'Reimprimir consentimiento' : 'Disentir consentimiento'"
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
          <!-- highlight_off -->
          <q-th v-if="novedad == '2'" auto-width> Imprimir </q-th>
          <q-th v-if="novedad == '3'" auto-width> Disentir </q-th>
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props" @dblclick="validarAccion(props)" class="cursor">
          <q-td auto-width>
            <q-btn
              @click="validarAccion(props)"
              :icon="novedad == '2' ? 'local_printshop' : 'highlight_off'"
              class="botone"
              :color="novedad == '2' ? 'primary' : 'red-7'"
              size="sm"
            >
            </q-btn>
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <q-chip v-if="col.label == 'Estado'" class="text-white" :color="valueEstado(col.value)">{{
              col.value
            }}</q-chip>
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
            <q-btn @click="selectConsen(props.key)" icon="note_add" class="botone" color="primary" size="sm">
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
    <DisentirConsen_
      :consen="reg_consentimiento"
      v-if="reg_consentimiento.estado"
      @cerrar="reg_consentimiento.estado = false"
      @guardar="cerrarDisen"
    />
  </q-card>
</template>
<script setup>
import { useApiContabilidad, useModuleCon851, useModuleFormatos } from "@/store";
import { ref, onMounted, defineAsyncComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  impresionODO004,
  impresionLAB002,
  impresionLAB003,
  impresionLAB004,
  impresionLAB005,
  impresionLAB006,
  impresionLAB007,
  impresionLAB008,
  impresionLAB009,
  impresionLAB010,
  impresionHC030,
  impresionHC031,
  impresionHC032,
  impresionHC033,
  impresionHC034,
  impresionHC035,
  impresionHC036,
  impresionHC037,
  impresionHC038,
  impresionHC039,
  impresionHC040,
  impresionHC041,
  impresionHC042,
  impresionHC043,
  impresionHC044,
  impresion,
} from "@/impresiones";
import { utilsFormat } from "@/formatos/utils";
import days from "dayjs";

const DisentirConsen_ = defineAsyncComponent(() => import("@/components/consen/DisentirConsen.vue"));

const props = defineProps({ cargar: Function });
const { CON851 } = useModuleCon851();
const router = useRouter();
const route = useRoute();

const { getDll$, _getFirma$, _getImagen$, _getHuella$, setHeader$, logOut$ } = useApiContabilidad();
const { getEmpresa, getTestigo, setHc, setSession } = useModuleFormatos();

/* Novedad 1 elabora consentimientos 2 imprime  vienen de los querys 3 para disentir los autorizados */
const params_querys = ref(null);
const novedad = ref(null);

const mode_dev = process.env.NODE_ENV == "development" ? true : false;
const firma_disentimiento = ref(null);
const llave_odo_act = ref(null);
const firma_testigo = ref(null);
const firma_consen = ref(null);
const huella_paci = ref(null);
const firma_acomp = ref(null);
const firma_func = ref(null);
const firma_prof = ref(null);

const reg_consentimiento = ref({ estado: false });
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

    format: (val, row) => `${days(row.reg_coninf.llave.fecha + row.reg_coninf.llave.hora).format("HH:mm")}`,
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

onMounted(() => getParametros());

const valueEstado = (estado) => {
  if (estado == "AUTORIZADO") return "light-green-6";
  else if (estado == "REVOCADO") return "amber-7";
  return "red";
};

const getParametros = async () => {
  try {
    if (Object.keys(route.query).length) setSession(route.query);

    if (!Object.keys(route.query).length) params_querys.value = JSON.parse(sessionStorage.query);
    else params_querys.value = route.query;
    novedad.value = params_querys.value.novedad;

    params_querys.value.modulo == "HIC" && (await getHistoriaClinica());
    params_querys.value.modulo == "ODO" && (await getOdontologia());

    if (novedad.value == 2) await getConsentimientosRealizados();
    else await getMaestros();
  } catch (error) {
    CON851("?", "info", error, logOut$);
  }
};

const getOdontologia = async () => {
  try {
    const response = await getDll$({
      modulo: `get_odo.dll`,
      data: { llave_od: route.query.llave_hc },
    });

    //El DLL puede traer una HC anteior en caso tal de no encontrar una actual, por eso se actualiza la llave.
    llave_odo_act.value =
      route.query.llave_hc != response.reg_od.llave ? response.reg_od.llave : route.query.llave_hc;
    setHc(response.reg_od);

    //TODO: Se omite por ahora
    // if (response.reg_hc.cierre.estado == 2) return CON851("9Y", "info", "", logOut$);
  } catch (error) {
    throw error;
  }
};

const getHistoriaClinica = async () => {
  try {
    const nit_usu = parseInt(getEmpresa.nitusu) || 0;
    const response = await getDll$({
      modulo: `get_hc.dll`,
      data: { llave_hc: route.query.llave_hc },
    });
    setHc(response.reg_hc);

    if (response.reg_hc.cierre.estado == 2 && !["0000000001"].includes(getEmpresa.nitusu)) {
      //Valida exepcion unidad de servicio (Yopal)
      const allow_serv = ["01", "02", "03", "04", "08", "63"];
      const unid = params_querys.value.serv_hc;
      if (nit_usu == 844003225 && allow_serv.includes(unid)) return;

      return CON851("9Y", "info", "", logOut$);
    }
  } catch (error) {
    throw error;
  }
};

const getConsentimientosRealizados = async () => {
  try {
    if (params_querys.value.modulo.toUpperCase() == "LAB") {
      params_querys.value.llave_hc = params_querys.value.llave_hc.slice(0, 15) + "00000000";
    }

    const llave_consen =
      params_querys.value.modulo == "ODO" ? llave_odo_act.value : params_querys.value.llave_hc;

    const { CONSENTIMIENTOS } = await getDll$({
      modulo: `get_consen.dll`,
      data: {
        modulo: params_querys.value.modulo?.toUpperCase(),
        paso: novedad.value == "1" ? "2" : novedad.value,
        llave_consen,
      },
    });

    let consen_filter;
    if (params_querys.value.modulo == "LAB") {
      const query = sessionStorage.query && JSON.parse(sessionStorage.query);
      const llave_fact = `${query.suc}${query.clase}${query.nro_comp}` || 0;
      consen_filter = CONSENTIMIENTOS?.filter(({ reg_coninf }) => reg_coninf.llave_fact === llave_fact);
    }

    lista_consen.value = consen_filter || CONSENTIMIENTOS || [];
    lista_consen.value.sort((a, b) => {
      return (
        parseInt(`${b.reg_coninf.llave.fecha}${b.reg_coninf.llave.hora}`) -
        parseInt(`${a.reg_coninf.llave.fecha}${a.reg_coninf.llave.hora}`)
      );
    });

    if (!mode_dev && window.location.hostname != "34.234.185.158") validarConsen();
  } catch (error) {
    throw error;
  }
};

const validarConsen = () => {
  //Verificamos si existe el consentimiento
  if (novedad.value != "1") return;

  const query = sessionStorage.query && JSON.parse(sessionStorage.query);
  const llave_fact = `${query.suc}${query.clase}${query.nro_comp}` || 0;
  const existe = lista_consen.value.find((el) => el.reg_coninf.llave_fact == llave_fact);
  existe &&
    CON851("52", "info", null, () => {
      lista_maestros.value = [];
      logOut$();
    });
};

const validarAccion = async ({ row }) => {
  novedad.value == "2" && reimprimirConsentimiento(row);
  novedad.value == "3" && disentirConsentimiento(row);
};
const disentirConsentimiento = async (row) => {
  Object.assign(reg_consentimiento.value, row);
  reg_consentimiento.value.estado = true;
};
const reimprimirConsentimiento = async (row) => {
  const opciones = {
    LAB002: impresionLAB002,
    LAB003: impresionLAB003,
    LAB004: impresionLAB004,
    LAB005: impresionLAB005,
    LAB006: impresionLAB006,
    LAB007: impresionLAB007,
    LAB008: impresionLAB008,
    LAB009: impresionLAB009,
    LAB010: impresionLAB010,
    HIC030: impresionHC030,
    HIC031: impresionHC031,
    HIC032: impresionHC032,
    HIC033: impresionHC033,
    HIC034: impresionHC034,
    HIC035: impresionHC035,
    HIC036: impresionHC036,
    HIC037: impresionHC037,
    HIC039: impresionHC039,
    HIC038: impresionHC038,
    HIC040: impresionHC040,
    HIC041: impresionHC041,
    HIC042: impresionHC042,
    HIC043: impresionHC043,
    HIC044: impresionHC044,
    ODO004: impresionODO004,
  };

  await setHeader$({ encabezado: row.reg_coninf.datos_encab });
  await getFirmaProf(row.reg_prof.cod);
  await getHuella(row.reg_paci.cod);
  await consultarFirmaConsen(row.reg_coninf);
  try {
    const docDefinition = await utilsFormat({
      datos: {
        firma_disentimiento: firma_disentimiento.value,
        img_firma_testigo: firma_testigo.value,
        img_firma_consen: firma_consen.value,
        img_firma_acomp: firma_acomp.value,
        img_firma_func: firma_func.value,
        img_huella_paci: huella_paci.value,
        img_firma_paci: firma_consen.value,
        cod_consen: row.reg_coninf?.cod,
        firma_prof: firma_prof.value,
      },
      content: opciones[row.reg_coninf?.cod]({
        datos: {
          autorizo:
            row.reg_coninf.estado == "AUTORIZADO" || row.reg_coninf.estado == "DISENTIDO " ? true : false,
          llave: row.reg_coninf.llave.folio,
          firmas: {
            firma_prof: firma_prof.value ? true : false,
            firma_acomp: row.reg_acomp?.cod.trim() ? true : false,
            firma_func: row.reg_func?.cod.trim() ? true : false,
            firma_paci: firma_consen.value ? true : false,
            huella_paci: huella_paci.value ? true : false,
            firma_testigo: firma_testigo.value ? true : false,
            firma_disentimiento: firma_disentimiento.value ? true : false,
          },
          fecha: days(row.reg_coninf.llave.fecha).format("YYYY-MM-DD"),
          hora: `${days(row.reg_coninf.llave.fecha + row.reg_coninf.llave.hora).format("HH:mm")}`,
          nombre_consenti: row.reg_coninf.datos_encab.descrip.trim() || "",
          disentimiento: row.reg_coninf.disentimiento.trim() || "",
          paren_acomp: row.reg_coninf.paren_acomp.trim() || "",
          paciente: row.reg_paci,
          acomp: row.reg_acomp,
          empresa: getEmpresa,
          testigo: getTestigo,
          prof: row.reg_prof,
          func: row.reg_func,
          ...row.reg_coninf.datos,
          ...row.reg_coninf.datos.reg_coninf2,
        },
      }),
    });
    await impresion({ docDefinition });
  } catch (error) {
    console.error("error-- >", error);
    CON851("?", "info", "Error al generar impresión");
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
    huella_paci.value = await _getHuella$({ codigo: cod_paci });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};
const consultarFirmaConsen = async (row) => {
  try {
    const codigo = `${row.llave.id}${row.llave.folio}${row.llave.fecha}${row.llave.hora}${row.llave.oper_elab}`;
    //Testigo UTM
    params_querys.value.modulo == "LAB" &&
      (firma_testigo.value = await _getImagen$({ codigo: `T${codigo}` }));

    //Paciente
    firma_consen.value = await _getImagen$({ codigo: `P${codigo}` });

    //Acompañante
    firma_acomp.value = await _getImagen$({
      codigo: `A${codigo}`,
    });

    //Funcionario (Casos especiales Yopal)
    firma_func.value = await _getImagen$({
      codigo: `FC${codigo}`,
    });

    //Disetio acomp. o Disentio paci.
    const firmador = row.datos.reg_coninf2.acompa_disenti == "S" ? "DA" : "DP";
    firma_disentimiento.value = await _getImagen$({ codigo: `${firmador}${codigo}` });
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
    throw error;
  }
};

const selectConsen = async (data) => {
  const consen_select = lista_maestros.value.find((e) => e.cod_mae == data);
  setHeader$({ encabezado: consen_select });
  try {
    if (params_querys.value.modulo != "LAB") return router.push({ name: data });
    return router.replace({ name: data });
  } catch (error) {
    CON851("?", "info", "El consentimiento no esta disponible");
  }
};

const cerrarDisen = () => location.reload();
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1200px
  border-radius: 0.5rem
</style>
