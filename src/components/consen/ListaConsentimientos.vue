<template>
  <div class="my-card">
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
          <q-th v-if="novedad == '2'" auto-width class="bg-primary text-white"> Imprimir </q-th>
          <q-th v-if="novedad == '3'" auto-width class="bg-primary text-white"> Disentir </q-th>
          <q-th v-for="col in props.cols" :key="col.name" :props="props" class="bg-primary text-white">
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
              class="q-ma-xs botone"
              :color="novedad == '2' ? 'primary' : 'red-7'"
              size="sm"
            >
            </q-btn>
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <q-chip v-if="col.label == 'Estado'" class="text-white" :color="valueEstado(col.value)">{{ col.value }}</q-chip>
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
          <q-th auto-width class="bg-primary text-white"> Elaborar </q-th>
          <q-th v-for="col in props.cols" :key="col.name" :props="props" class="bg-primary text-white">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props" @dblclick="selectConsen(props.key)" class="cursor">
          <q-td auto-width>
            <q-btn @click="selectConsen(props.key)" icon="note_add" class="q-ma-xs botone" color="primary" size="sm"> </q-btn>
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
    <!-- añadir informacion a consentimientos realizados -->
    <q-card class="my-card q-mt-md">
      <q-table
        title="Añadir información al consentimiento"
        v-if="novedad == 4"
        :rows-per-page-options="[10]"
        :columns="columns_consen"
        :rows="lista_consen_elab"
        row-key="COD_MAE"
        bordered
        dense
        flat
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width class="bg-primary text-white"> Añadir </q-th>
            <q-th v-for="col in props.cols" :key="col.name" :props="props" class="bg-primary text-white">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props" @dblclick="agregarInfConse(props)" class="cursor">
            <q-td auto-width>
              <q-btn @click="agregarInfConse(props)" class="q-ma-xs botone" icon="edit_note" color="primary" size="sm"> </q-btn>
            </q-td>
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <q-chip v-if="col.label == 'Estado'" class="text-white" :color="valueEstado(col.value)">{{ col.value }}</q-chip>
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
    </q-card>
    <DisentirConsen_
      :consen="reg_consentimiento"
      v-if="reg_consentimiento.estado"
      @cerrar="reg_consentimiento.estado = false"
      @guardar="cerrarDisen"
    />
  </div>
  <!-- tabla para elaborar los consentimientos 2 -->
</template>
<script setup>
import { useApiContabilidad, useModuleCon851, useModuleFormatos } from "@/store";
import { ref, onMounted, defineAsyncComponent, watch, computed } from "vue";
import formatos from "../../impresiones/importarModulos";
import { useRouter, useRoute } from "vue-router";
import { utilsFormat, validarCodPaci } from "@/formatos/utils";
import days from "dayjs";

const DisentirConsen_ = defineAsyncComponent(() => import("@/components/consen/DisentirConsen.vue"));

// const props = defineProps({ cargar: Function });
const { CON851 } = useModuleCon851();
const router = useRouter();
const route = useRoute();

const formatosStore = useModuleFormatos();
const { getDll$, _getFirma$, _getImagen$, _getEsquema$, _getHuella$, setHeader$, logOut$ } = useApiContabilidad();
const { getEmpresa, getTestigo, setHc, setSession, setProf, setTestigo, setAcomp, getAcomp } = formatosStore;

/* Novedad 1 elabora consentimientos 2 imprime  vienen de los querys 3 para disentir los autorizados */
const params_querys = ref(null);
const novedad = ref(null);

const mode_dev = process.env.NODE_ENV == "development" ? true : false;
const firma_disentimiento = ref(null);
const llave_odo_act = ref(null);
const firma_testigo = ref(null);
const firma_consen = ref(null);
const huella_paci = ref(null);
const huella_acomp = ref(null);
const huella_testigo = ref(null);
const firma_acomp = ref(null);
const firma_func = ref(null);
const esquema_mamografia = ref(null);
const tabla_sedacion = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(0);

const SANAR = ref(false);
const BERNAL = ref(false);
const SOCIEDAD_CARDIOLOG = ref(false);
const ESE_YOPAL = ref(false);
const SAN_MARTIN = ref(false);
const IUTM = ref(false);
const FUENTEDEORO = ref(false);
const MONTE_SINAI = ref(false);
const GUAMAL = ref(false);
const ESE_GRANADA = ref(false);
const EBENEZER = ref(false);
const EMPERATRIZ = ref(false);

const reg_consentimiento = ref({ estado: false });
const lista_consen = ref([]);

// const concen_sanar = ref([
//   {
//     LAB015: { grupo_cups: ["XX", "10", "12"] },
//     LAB016: { grupo_cups: ["XX", "10", "12"] },
//     HIC045: { grupo_cups: ["X3", "11", "12"] },
//     HIC046: { grupo_cups: ["X4", "11", "12"] },
//   },
// ]);
const lista_maestros = ref([]);
const lista_consen_elab = ref([]);
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

const empresa_cargada = computed(() => formatosStore.empresa_cargada);

watch(empresa_cargada, (newVal) => {
  if (newVal) {
    // Los datos de la sessionStorage están cargados
    nit_usu.value = parseInt(formatosStore.getEmpresa.nitusu) || 0;
    validacionesNitHc();
  }
});

onMounted(() => {
  // verifica que ya esten cargados los datos en la Si sessionStorage
  if (empresa_cargada.value) {
    nit_usu.value = parseInt(formatosStore.getEmpresa.nitusu) || 0;
    validacionesNitHc();
  }
});
// esta logica es de prueba, para ligar los codigos cups al consentimiento
// const pruebasCupsNit = () => {
//   let grp_cups = "XX";
//   let nit = "123";
//   switch (nit) {
//     case "123":
//       // SANAR
//       console.log("filtrarConcenCups ", filtrarConcenCups(concen_sanar.value, grp_cups));
//       break;
//     default:
//       break;
//   }
// };

// const filtrarConcenCups = (lista, grupo) => {
//   let filtro_conse = [];
//   lista.forEach((item) => {
//     Object.keys(item).forEach((key) => {
//       if (item[key].grupo_cups.includes(grupo)) {
//         filtro_conse.push(key);
//       }
//     });
//   });
//   return filtro_conse;
// };

const valueEstado = (estado) => {
  if (estado == "AUTORIZADO") return "light-green-6";
  else if (estado == "REVOCADO") return "amber-7";
  return "red";
};

const validacionesNitHc = async () => {
  switch (nit_usu.value) {
    case 900273700:
      SANAR.value = true;
      break;
    case 79635522:
      BERNAL.value = true;
      break;
    case 900161116:
      SOCIEDAD_CARDIOLOG.value = true;
      break;
    case 844003225:
      ESE_YOPAL.value = true;
      break;
    case 892000458:
      SAN_MARTIN.value = true;
      break;
    case 900193162:
      IUTM.value = true;
      break;
    case 822001570:
      FUENTEDEORO.value = true;
      break;
    case 900772776:
      MONTE_SINAI.value = true;
      break;
    case 800037202:
      GUAMAL.value = true;
      break;
    case 900005594:
      ESE_GRANADA.value = true;
      break;
    case 900305723:
      EBENEZER.value = true;
      break;
    case 800175901:
      EMPERATRIZ.value = true;
      break;
  }
  // pruebasCupsNit();
  try {
    if (Object.keys(route.query).length) {
      formatosStore.setSession(route.query);
    }
    if (!Object.keys(route.query).length) {
      params_querys.value = JSON.parse(sessionStorage.query);
    } else {
      params_querys.value = route.query;
    }

    novedad.value = params_querys.value.novedad;

    if (params_querys.value.modulo == "HIC") {
      await getHistoriaClinica();
    }

    getParametros();
  } catch (error) {
    console.error(error);

    if (
      ESE_YOPAL.value ||
      SOCIEDAD_CARDIOLOG.value ||
      SANAR.value ||
      BERNAL.value ||
      FUENTEDEORO.value ||
      SAN_MARTIN.value ||
      MONTE_SINAI.value ||
      ESE_GRANADA.value
    ) {
      formatosStore.setHc({
        llave: route.query.llave_hc,
        descrip: "",
        descrip_atiende: "",
        registro_profe: "",
        diagn: "",
      });

      getParametros();
    } else {
      return CON851("?", "info", error, logOut$);
    }
  }
};
const getParametros = async () => {
  try {
    params_querys.value.modulo == "ODO" && (await getOdontologia());

    if ([2, 3, 4].includes(Number(novedad.value))) await getConsentimientosRealizados();
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
    llave_odo_act.value = route.query.llave_hc != response.reg_od.llave ? response.reg_od.llave : route.query.llave_hc;
    response.reg_od.llave.trim() == "" ? route.query.llave_hc : response.reg_od.llave;

    setHc(response.reg_od);

    //TODO: Se omite por ahora
    // if (response.reg_hc.cierre.estado == 2) return CON851("9Y", "info", "", logOut$);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getHistoriaClinica = async () => {
  try {
    const response = await getDll$({
      modulo: `get_hc.dll`,
      data: { llave_hc: route.query.llave_hc, carpta: "CONTROL", directorio: route.query.contab, nit: route.query.nit },
    });
    setHc(response.reg_hc);

    if (response.reg_hc.cierre.estado == 2 && !["0000000001"].includes(route.query.nit)) {
      //asi la HC este cerrada deja seguir
      if (
        ESE_YOPAL.value ||
        SOCIEDAD_CARDIOLOG.value ||
        SANAR.value ||
        BERNAL.value ||
        FUENTEDEORO.value ||
        SAN_MARTIN.value ||
        MONTE_SINAI.value ||
        ESE_GRANADA.value
      )
        return;
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

    const llave_consen = params_querys.value.modulo == "ODO" ? llave_odo_act.value : params_querys.value.llave_hc;

    const { CONSENTIMIENTOS } = await getDll$({
      modulo: `get_consen.dll`,
      data: {
        nit_entid: route.query.nit,
        modulo: params_querys.value.modulo?.toUpperCase(),
        paso: novedad.value == "1" || novedad.value == "4" ? "2" : novedad.value,
        llave_consen,
      },
    });

    let consen_filter;
    if (params_querys.value.modulo == "LAB") {
      const query = sessionStorage.query && JSON.parse(sessionStorage.query);
      const llave_fact = `${query.suc}${query.clase}${query.nro_comp}` || "0";
      // if ([ 5464558, 1121252].includes(!parseInt(route.query.nit))) {
      if (!SANAR.value || !BERNAL.value) {
        consen_filter = CONSENTIMIENTOS?.filter(({ reg_coninf }) => reg_coninf.llave_fact === llave_fact.slice(0, 9));
      }
    }

    lista_consen.value = consen_filter || CONSENTIMIENTOS || [];
    lista_consen.value.sort((a, b) => {
      return parseInt(`${b.reg_coninf.llave.fecha}${b.reg_coninf.llave.hora}`) - parseInt(`${a.reg_coninf.llave.fecha}${a.reg_coninf.llave.hora}`);
    });

    // solo se va a permitir editar los siguientes consentimientos:
    let consen_editar = ["LAB011", "HIC114", "HIC115"];

    if (consen_editar.includes("HIC114") || consen_editar.includes("HIC115")) {
      lista_consen_elab.value = lista_consen.value.filter(
        (item) =>
          consen_editar.includes(item.reg_coninf.cod) &&
          item.reg_coninf.estado == "AUTORIZADO" &&
          item.reg_coninf.llave.folio == params_querys.value.llave_hc.slice(15)
      );
    } else {
      lista_consen_elab.value = lista_consen.value.filter(
        (item) =>
          consen_editar.includes(item.reg_coninf.cod) &&
          item.reg_coninf.estado == "AUTORIZADO" &&
          item.reg_coninf.llave.fecha == days().format("YYYYMMDD")
      );
    }
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
  let reg_acomp = {};

  // consultar testigo. El testigo se debe consultar respecto al formato elegido puesto que el testigo puede variar
  if (params_querys.value.modulo == "LAB") {
    let testigo;
    if (row.reg_coninf.datos.reg_coninf2.tipo_testigo == "1" || row.reg_coninf.datos.reg_coninf2.tipo_testigo == "3") {
      testigo = await getDll$({ modulo: `get_paci.dll`, data: { cod_paci: row.reg_coninf.datos.reg_coninf2.id_testigo.padStart(15, "0") } });
    } else if (row.reg_coninf.datos.reg_coninf2.tipo_testigo == 2) {
      testigo = await getDll$({
        modulo: `get_prof.dll`,
        data: {
          cod_prof: Number(row.reg_coninf.datos.reg_coninf2.id_testigo) || 0,
          carpta: "CONTROL",
          directorio: route.query.contab,
          nit: route.query.nit,
        },
      });
    }
    if (testigo) {
      setTestigo(
        row.reg_coninf.datos.reg_coninf2.tipo_testigo == "1" || row.reg_coninf.datos.reg_coninf2.tipo_testigo == "3"
          ? testigo.reg_paci
          : testigo?.reg_prof
      );
    }
  }
  // if (params_querys.value.modulo == "LAB") {
  // if (SANAR.value || BERNAL.value) {
  // if (Number(row.reg_coninf.id_acomp) != 0) {

  //   const response = await getDll$({ modulo: `get_paci.dll`, data: { cod_paci: row.reg_coninf.id_acomp.padStart(15, "0") } });
  //   reg_acomp = { ...response.reg_paci };
  //   setAcomp({ ...response.reg_paci, paren_acomp: row.reg_coninf.paren_acomp });
  // }
  // } else {
  const response = await getDll$({ modulo: `get_paci.dll`, data: { cod_paci: row.reg_paci.cod.padStart(15, "0") } });
  response.reg_acomp.descrip = `${response.reg_acomp?.er_apel?.trim()} ${response.reg_acomp?.do_apel?.trim()} ${response.reg_acomp?.er_nom?.trim()} ${response.reg_acomp?.do_nom?.trim()}`;
  reg_acomp = { ...response.reg_acomp };
  setAcomp({ ...response.reg_acomp, paren_acomp: row.reg_coninf.paren_acomp });
  // }
  // } else {
  //   setAcomp({ ...row.reg_acomp, paren_acomp: row.reg_coninf.paren_acomp });
  //   reg_acomp = { ...row.reg_acomp };
  // }
  let cod_consenti = row.reg_coninf?.cod;
  // esto es porque se usan los mismos formatos en los dos modulos (salud, historia clinica)
  switch (row.reg_coninf?.cod) {
    case "HIC046":
      cod_consenti = "LAB015";
      break;
    case "HIC047":
      cod_consenti = "LAB016";
      break;
    case "LAB017":
      cod_consenti = "HIC048";
      break;
    case "LAB018":
      cod_consenti = "HIC049";
      break;
    case "LAB019":
      cod_consenti = "HIC050";
      break;
    case "LAB020":
      cod_consenti = "HIC051";
      break;
    default:
      cod_consenti = row.reg_coninf?.cod;
      break;
  }

  await setHeader$({ encabezado: row.reg_coninf.datos_encab });
  await getFirmaProf(row.reg_prof.cod);
  huella_paci.value = await getHuella(row.reg_paci.cod);
  huella_acomp.value = await getHuella(row.reg_acomp.cod);
  huella_testigo.value = await getHuella(row.reg_coninf.datos.reg_coninf2.id_testigo);

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
        img_esquema_mamografia: esquema_mamografia.value,
        img_tabla_sedacion: tabla_sedacion.value,
        img_huella_paci: huella_paci.value,
        img_huella_acomp: huella_acomp.value,
        img_huella_testigo: huella_testigo.value,
        img_firma_paci: firma_consen.value,
        cod_consen: cod_consenti,
        firma_prof: firma_prof.value,
      },

      content: formatos[`impresion${cod_consenti}`]({
        datos: {
          cod_consen: cod_consenti,
          autorizo: row.reg_coninf.estado == "AUTORIZADO" || row.reg_coninf.estado == "DISENTIDO " ? true : false,
          llave: row.reg_coninf.llave.folio,
          firmas: {
            firma_prof: firma_prof.value ? true : false,
            firma_acomp: reg_acomp?.cod?.trim() ? true : false,
            firma_func: row.reg_func?.cod.trim() ? true : false,
            firma_paci: firma_consen.value ? true : false,
            huella_paci: huella_paci.value ? true : false,
            huella_acomp: huella_acomp.value ? true : false,
            huella_testigo: huella_testigo.value ? true : false,
            firma_testigo: firma_testigo.value ? true : false,
            firma_disentimiento: firma_disentimiento.value ? true : false,
          },
          fecha: days(row.reg_coninf.llave.fecha).format("YYYY-MM-DD"),
          hora: `${days(row.reg_coninf.llave.fecha + row.reg_coninf.llave.hora).format("HH:mm")}`,
          nombre_consenti: row.reg_coninf.datos_encab.descrip.trim() || "",
          disentimiento: row.reg_coninf.disentimiento.trim() || "",
          paren_acomp: row.reg_coninf.paren_acomp.trim() || "",
          paciente: row.reg_paci,
          acomp: getAcomp,
          empresa: getEmpresa,
          testigo: getTestigo,
          prof: row.reg_prof,
          func: row.reg_func,
          ...row.reg_coninf.datos,
          ...row.reg_coninf.datos.reg_coninf2,
        },
      }),
    });
    await formatos.impresion({ docDefinition });
  } catch (error) {
    console.error("error", error);
    CON851("?", "info", "Error al generar impresión");
  }
};
const getFirmaProf = async (cod_prof) => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(cod_prof) || 0 });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const getHuella = async (cod) => {
  try {
    return await _getHuella$({ codigo: cod });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};
const consultarFirmaConsen = async (row) => {
  try {
    if (params_querys.value.modulo == "HIC" && Number(row.datos.reg_coninf2.id_testigo) != 0) {
      // consultar testigo
      if (route.query.tipo_testigo == "1" || route.query.tipo_testigo == "3") {
        const response = await getDll$({
          modulo: `get_paci.dll`,
          data: { cod_paci: row.datos.reg_coninf2.id_testigo.trim() },
        });
        setTestigo(response.reg_paci);
      } else {
        const response = await getDll$({
          modulo: `get_prof.dll`,
          data: { cod_prof: Number(row.datos.reg_coninf2.id_testigo) || 0, carpta: "CONTROL", directorio: route.query.contab, nit: route.query.nit },
        });
        if (response?.reg_prof) {
          setTestigo(response.reg_prof);
        }
      }
    }

    const codigo = `${row.llave.id}${row.llave.folio}${row.llave.fecha}${row.llave.hora}${row.llave.oper_elab}`;

    if (SANAR.value || BERNAL.value || MONTE_SINAI.value || FUENTEDEORO.value || GUAMAL.value || ESE_GRANADA.value) {
      //Testigo
      firma_testigo.value = await _getImagen$({ codigo: `${row.datos.reg_coninf2.id_testigo}`, tipo_test: route.query.tipo_testigo || "1" });
    } else {
      //Testigo UTM
      params_querys.value.modulo == "LAB" && (firma_testigo.value = await _getImagen$({ codigo: `T${codigo}` }));
    }
    if (
      SANAR.value ||
      BERNAL.value ||
      MONTE_SINAI.value ||
      FUENTEDEORO.value ||
      GUAMAL.value ||
      EBENEZER.value ||
      EMPERATRIZ.value ||
      ESE_GRANADA.value
    ) {
      //Paciente
      firma_consen.value = await _getImagen$({ codigo: `${row.llave.id}`, tipo_test: "1" });
    } else {
      //Paciente UTM
      firma_consen.value = await _getImagen$({ codigo: `P${codigo}` });
    }

    if (
      SANAR.value ||
      BERNAL.value ||
      MONTE_SINAI.value ||
      FUENTEDEORO.value ||
      GUAMAL.value ||
      EBENEZER.value ||
      EMPERATRIZ.value ||
      ESE_GRANADA.value
    ) {
      //Acompañante
      firma_acomp.value = await _getImagen$({ codigo: `${row.id_acomp}`, tipo_test: "1" });
    } else {
      //Acompañante UTM
      firma_acomp.value = await _getImagen$({
        codigo: `A${codigo}`,
      });
    }
    //esquema mamografia
    esquema_mamografia.value = await _getEsquema$({
      codigo: `${codigo}`,
    });
    //tabla sedacion
    tabla_sedacion.value = await _getEsquema$({
      codigo: `${row.cod}${codigo}`,
    });

    //Funcionario (Casos especiales Yopal)
    firma_func.value = await _getImagen$({
      codigo: `FC${codigo}`,
    });

    //Disetio acomp. o Disentio paci.
    const firmador = row.datos.reg_coninf2.acompa_disenti == "S" ? "DA" : "DP";
    // sanar, monte sinai, HOSPITAL LOCAL ESE FUENTEDEORO
    if (
      SANAR.value ||
      BERNAL.value ||
      MONTE_SINAI.value ||
      FUENTEDEORO.value ||
      GUAMAL.value ||
      EBENEZER.value ||
      EMPERATRIZ.value ||
      ESE_GRANADA.value
    ) {
      firma_disentimiento.value = await _getImagen$({ codigo: row.llave.id, tipo_test: "1" });
    } else {
      firma_disentimiento.value = await _getImagen$({ codigo: `${firmador}${codigo}` });
    }
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const getMaestros = async () => {
  params_querys.value.llave_hc = validarCodPaci(params_querys.value.llave_hc.slice(0, 15));
  try {
    const response = await getDll$({
      modulo: `get_maeconsen.dll`,
      data: {
        modulo: params_querys.value.modulo?.toUpperCase(),
        id_paci: params_querys.value.llave_hc,
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
    if (params_querys.value.modulo != "LAB") {
      return router.push({ name: data });
    } else {
      return router.push({ name: data });
    }
  } catch (error) {
    CON851("?", "info", "El consentimiento no esta disponible");
  }
};
const agregarInfConse = async (data) => {
  setProf(data.row.reg_prof);
  const consen_select = lista_consen.value.find((e) => e.reg_coninf.cod == data.row.reg_coninf.cod);
  sessionStorage.setItem("reg_conse_edit", JSON.stringify(consen_select));
  setHeader$({ encabezado: consen_select.reg_coninf.datos_encab });

  try {
    await getFirmaProf(data.row.reg_prof.cod);
    huella_paci.value = await getHuella(data.row.reg_paci.cod);
    huella_acomp.value = await getHuella(data.row.reg_acomp.cod);
    await getHuella(data.row.reg_paci.cod);
    await consultarFirmaConsen(data.row.reg_coninf);

    const response = await getDll$({ modulo: `get_paci.dll`, data: { cod_paci: data.row.reg_paci.cod.padStart(15, "0") } });
    setAcomp({ ...response.reg_acomp, paren_acomp: data.row.reg_coninf.paren_acomp });

    if (params_querys.value.modulo != "LAB") {
      return router.push({ name: data.row.reg_coninf?.cod });
    } else {
      return router.push({ name: data.row.reg_coninf?.cod });
    }
  } catch (error) {
    console.error(error);
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
