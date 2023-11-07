<template>
  <div>
    <ToolBar_ @validarAccion="validarAccion" />
    <ConfigUsunet_
      v-if="configuracion.estado"
      :configuracion="configuracion"
      @cerrar="configuracion.estado = false"
      @guardar="configuracion.estado = false"
    />
    <ConfigMaestros_
      v-if="config_maestro.estado"
      :configuracion="config_maestro"
      @cerrar="cargarConsentimientosActivos"
      @guardar="config_maestro.estado = false"
    />
    <div class="q-ma-lg">
      <div class="row my-card justify-center q-mx-auto">
        <q-card class="col-3 justify-center q-mx-auto">
          <div class="subtitle2 q-px-sm q-py-xs">{{ `Código: ${getPaci.cod}` }}</div>
        </q-card>
        <q-card class="col-3 justify-center q-mx-auto">
          <div class="subtitle2 q-px-sm q-py-xs">{{ `Nombre: ${getPaci.descrip} ` }}</div>
        </q-card>
        <q-card class="col-3 justify-center q-mx-auto">
          <div class="subtitle2 q-px-sm q-py-xs">{{ `Folio: ${getHc.llave?.slice(15)} ` }}</div>
        </q-card>
      </div>
    </div>
    <div class="q-ma-lg">
      <ListaConsentimientos_ class="justify-center q-mx-auto" />
    </div>
  </div>
</template>
<script setup>
import { useApiContabilidad, useModuleCon851, useModuleFormatos } from "@/store";
import { defineAsyncComponent, onMounted, ref } from "vue";
import { empresas, regAcomp } from "@/fuentes";
import { useRoute } from "vue-router";

const ConfigMaestros_ = defineAsyncComponent(() => import("@/components/consen/ConfigMaestros.vue"));
const ConfigUsunet_ = defineAsyncComponent(() => import("@/components/consen/ConfigUsunet.vue"));
const ToolBar_ = defineAsyncComponent(() => import("@/components/global/ToolBar.vue"));
const ListaConsentimientos_ = defineAsyncComponent(() =>
  import("@/components/consen/ListaConsentimientos.vue")
);

const { getPaci, getHc } = useModuleFormatos();
const { getDll$, getNit, _getLogo$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();

const configuracion = ref({ estado: false });
const config_maestro = ref({ estado: false });
const reg_acomp = regAcomp();
const route = useRoute();
const datos_session = {};

onMounted(() => verificarSesion());

const verificarSesion = async () => {
  try {
    sessionStorage.ip = empresas[getNit].ip_servicio;
    // sessionStorage.ip = "192.168.0.193";

    sessionStorage.nit = getNit;
    const response = await getDll$({ modulo: `get_usunet.dll` });
    configuracion.value.estado = false;
    sessionStorage.setItem("empresa", JSON.stringify(response));

    getLogo();
    return response;
  } catch (error) {
    CON851("?", "info", error, () => {
      configuracion.value.estado = true;
    });
  }
};

const getLogo = async () => {
  try {
    const img = await _getLogo$({ nit: getNit });
    sessionStorage.setItem("logo", img);
    validarUrl();
  } catch (error) {
    console.error("getLogo", error);
  }
};

const validarUrl = () => {
  if (Object.keys(route.query).length) {
    Object.assign(datos_session, route.query);
  } else {
    Object.assign(datos_session, JSON.parse(sessionStorage.query));
  }
  getPaciente();
  // TODO: QUEDARON PENDIENTES ALGUNA VALIDACIONES
};

async function getPaciente() {
  const cod_paci = datos_session.llave_hc.slice(0, 15) || "";

  await getDll$({ modulo: `get_paci.dll`, data: { cod_paci } })
    .then((data) => {
      sessionStorage.setItem("reg_paci", JSON.stringify(data.reg_paci));
      datos_session.novedad == "1" && getMedico();
      datos_session.id_acompa && getAcomp();
    })
    .catch((err) => {
      CON851("?", "error", "Error consultando datos paciente");
    });
}

async function getAcomp() {
  try {
    // const cod_paci = datos_session.id_acompa;
    if (!datos_session.id_acompa.trim()) {
      sessionStorage.setItem("reg_acomp", JSON.stringify(reg_acomp));
    } else {
      const datos = await getDll$({
        modulo: `get_paci.dll`,
        data: { cod_paci: datos_session.id_acompa },
      });
      sessionStorage.setItem(
        "reg_acomp",
        JSON.stringify({
          ...datos.reg_paci,
          parentesco: datos_session.parentesco,
        })
      );
    }

    datos_session.cod_aux && getAux();
  } catch (error) {
    CON851("?", "error", "Error consultando datos acompañante");
  }
}

async function getMedico() {
  try {
    const cod_prof = datos_session.cod_prof || "";
    const datos = await getDll$({ modulo: `get_prof.dll`, data: { cod_prof } });

    sessionStorage.setItem("reg_prof", JSON.stringify(datos.reg_prof));
  } catch (error) {
    CON851("?", "error", "Error consultando datos medico");
  }
}

const validarAccion = (event) => {
  switch (event) {
    case 0: // configuracion de servidor
      abrirConfiguracion();
      break;
    case 1: // configuracion de maestros
      config_maestro.value.estado = true;
      break;
    case 2: // impresiones
      break;
  }
};

const cargarConsentimientosActivos = async () => {
  config_maestro.estado = false;
  location.reload();
};

const abrirConfiguracion = async () => {
  try {
    const response = await verificarSesion();
    Object.assign(configuracion.value, response);
    configuracion.value.estado = true;
  } catch (error) {
    CON851("?", "info", error, () => {
      configuracion.value.estado = true;
    });
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1200px
  border-radius: 0.5rem
</style>
