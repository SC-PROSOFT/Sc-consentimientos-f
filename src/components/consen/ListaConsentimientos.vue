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
              class="botone"
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
            <q-btn @click="selectConsen(props.key)" icon="note_add" class="botone" color="primary" size="sm"> </q-btn>
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
              <q-btn @click="agregarInfConse(props)" class="botone" icon="edit_note" color="primary" size="sm"> </q-btn>
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
import { ref, onMounted, defineAsyncComponent } from "vue";
import formatos from "../../impresiones/importarModulos";
import { useRouter, useRoute } from "vue-router";
import { utilsFormat } from "@/formatos/utils";
import days from "dayjs";

const DisentirConsen_ = defineAsyncComponent(() => import("@/components/consen/DisentirConsen.vue"));

// const props = defineProps({ cargar: Function });
const { CON851 } = useModuleCon851();
const router = useRouter();
const route = useRoute();

const formatosStore = useModuleFormatos();
const { getDll$, _getFirma$, _getImagen$, _getEsquema$, _getHuella$, setHeader$, logOut$ } = useApiContabilidad();
const { getEmpresa, getTestigo, setHc, getHc, setSession } = formatosStore;

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
const firma_acomp = ref(null);
const firma_func = ref(null);
const esquema_mamografia = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(0);

const reg_consentimiento = ref({ estado: false });
const lista_consen = ref([]);

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

onMounted(() => {
  setTimeout(() => {
    const isFirstLoad = sessionStorage.getItem("isFirstLoad");
    console.log("isFirstLoad ", isFirstLoad);

    if (!isFirstLoad) {
      console.log("entre refrest");

      sessionStorage.setItem("isFirstLoad", "true");
      window.location.reload();
    } else {
      const empresaData = sessionStorage.getItem("empresa");
      const empresa = JSON.parse(empresaData);
      nit_usu.value = parseInt(empresa.nitusu) || 0;
      validacionesNitHc();
    }
  }, 600);
});

const valueEstado = (estado) => {
  if (estado == "AUTORIZADO") return "light-green-6";
  else if (estado == "REVOCADO") return "amber-7";
  return "red";
};

const validacionesNitHc = async () => {
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

    console.log("nit_usu ", nit_usu.value);
    if (nit_usu.value == 900161116) {
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
    setHc(response.reg_od);

    //TODO: Se omite por ahora
    // if (response.reg_hc.cierre.estado == 2) return CON851("9Y", "info", "", logOut$);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getHistoriaClinica = async () => {
  try {
    // if (nit_usu.value == 0) return setTimeout(validacionesNitHc, 100);

    const response = await getDll$({
      modulo: `get_hc.dll`,
      data: { llave_hc: route.query.llave_hc },
    });
    setHc(response.reg_hc);

    if (response.reg_hc.cierre.estado == 2 && !["0000000001"].includes(getEmpresa.nitusu)) {
      //(Yopal) y (SOCIEDAD CARDIOLOGICA COLOMBIA) asi la HC este cerrada deja seguir

      if (nit_usu.value == 844003225 || nit_usu.value == 900161116) return;

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
        nit_entid: nit_usu.value,
        modulo: params_querys.value.modulo?.toUpperCase(),
        paso: novedad.value == "1" || novedad.value == "4" ? "2" : novedad.value,
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
      return parseInt(`${b.reg_coninf.llave.fecha}${b.reg_coninf.llave.hora}`) - parseInt(`${a.reg_coninf.llave.fecha}${a.reg_coninf.llave.hora}`);
    });

    // solo se va a permitir editar los siguientes consentimientos:
    let consen_editar = ["LAB011"];

    lista_consen_elab.value = lista_consen.value.filter(
      (item) =>
        consen_editar.includes(item.reg_coninf.cod) &&
        item.reg_coninf.estado == "AUTORIZADO" &&
        item.reg_coninf.llave.fecha == days().format("YYYYMMDD")
    );

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
  await setHeader$({ encabezado: row.reg_coninf.datos_encab });
  await getFirmaProf(row.reg_prof.cod);
  huella_paci.value = await getHuella(row.reg_paci.cod);
  huella_acomp.value = await getHuella(row.reg_acomp.cod);
  await getHuella(row.reg_paci.cod);
  await consultarFirmaConsen(row.reg_coninf);
  console.log("cod_consen --> ", row.reg_coninf?.cod);

  try {
    const docDefinition = await utilsFormat({
      datos: {
        firma_disentimiento: firma_disentimiento.value,
        img_firma_testigo: firma_testigo.value,
        img_firma_consen: firma_consen.value,
        img_firma_acomp: firma_acomp.value,
        img_firma_func: firma_func.value,
        img_esquema_mamografia: esquema_mamografia.value,
        img_huella_paci: huella_paci.value,
        img_huella_acomp: huella_acomp.value,
        img_firma_paci: firma_consen.value,
        cod_consen: row.reg_coninf?.cod,
        firma_prof: firma_prof.value,
      },

      content: formatos[`impresion${row.reg_coninf?.cod}`]({
        datos: {
          cod_consen: row.reg_coninf?.cod,
          autorizo: row.reg_coninf.estado == "AUTORIZADO" || row.reg_coninf.estado == "DISENTIDO " ? true : false,
          llave: row.reg_coninf.llave.folio,
          firmas: {
            firma_prof: firma_prof.value ? true : false,
            firma_acomp: row.reg_acomp?.cod.trim() ? true : false,
            firma_func: row.reg_func?.cod.trim() ? true : false,
            firma_paci: firma_consen.value ? true : false,
            huella_paci: huella_paci.value ? true : false,
            huella_acomp: huella_acomp.value ? true : false,
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
    await formatos.impresion({ docDefinition });
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
    const codigo = `${row.llave.id}${row.llave.folio}${row.llave.fecha}${row.llave.hora}${row.llave.oper_elab}`;
    //Testigo UTM
    params_querys.value.modulo == "LAB" && (firma_testigo.value = await _getImagen$({ codigo: `T${codigo}` }));

    //Paciente
    firma_consen.value = await _getImagen$({ codigo: `P${codigo}` });

    //Acompañante
    firma_acomp.value = await _getImagen$({
      codigo: `A${codigo}`,
    });
    //esquema mamografia
    esquema_mamografia.value = await _getEsquema$({
      codigo: `${codigo}`,
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
    if (params_querys.value.modulo != "LAB") {
      return router.push({ name: data });
    } else {
      return router.replace({ name: data });
    }
  } catch (error) {
    CON851("?", "info", "El consentimiento no esta disponible");
  }
};
const agregarInfConse = async (data) => {
  console.log("agregarInfConse ", data.row.reg_coninf.cod);
  console.log("lista_maestros ", lista_consen);

  const consen_select = lista_consen.value.find((e) => e.reg_coninf.cod == data.row.reg_coninf.cod);
  console.log("consen_select ", consen_select);
  sessionStorage.setItem("reg_conse_edit", JSON.stringify(consen_select));
  setHeader$({ encabezado: consen_select.reg_coninf.datos_encab });
  try {
    if (params_querys.value.modulo != "LAB") {
      return router.push({ name: data.row.reg_coninf.cod });
    } else {
      return router.replace({ name: data.row.reg_coninf.cod });
    }
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
