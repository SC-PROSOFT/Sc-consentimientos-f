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
      @cerrar="config_maestro.estado = false"
      @guardar="config_maestro.estado = false"
    />
    <div class="q-ma-lg">
      <ListaConsentimientos_ class="justify-center q-mx-auto" />
    </div>
  </div>
</template>
<script setup>
import { useApiContabilidad, useModuleCon851 } from "@/store";
import { defineAsyncComponent, onMounted, ref } from "vue";
import { empresas, regAcomp } from "@/fuentes";
import { useGlobal } from "@/setup/global";
import { useRoute } from "vue-router";

const ConfigMaestros_ = defineAsyncComponent(() => import("@/components/consen/ConfigMaestros.vue"));
const ConfigUsunet_ = defineAsyncComponent(() => import("@/components/consen/ConfigUsunet.vue"));
const ToolBar_ = defineAsyncComponent(() => import("@/components/global/ToolBar.vue"));
const ListaConsentimientos_ = defineAsyncComponent(() =>
  import("@/components/consen/ListaConsentimientos.vue")
);

const { getDll$, getNit, _getLogo$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const { datos_url } = useGlobal();

const configuracion = ref({ estado: false });
const config_maestro = ref({ estado: false });
const reg_acomp = regAcomp();
const route = useRoute();
const datos_session = {};

onMounted(() => verificarSesion());

const verificarSesion = async () => {
  try {
    sessionStorage.ip = empresas[getNit].ip_servicio;
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

async function getLogo() {
  try {
    const img = await _getLogo$({ nit: getNit });
    sessionStorage.setItem("Logo", img);
    validarUrl();
  } catch (error) {
    console.error("getLogo --> ", error);
  }
}

const validarUrl = () => {
  Object.assign(datos_session, route.query);
  getPaci();
  // TODO: QUEDARON PENDIENTES ALGUNA VALIDACIONES
};

async function getPaci() {
  const cod_paci = datos_session.llave_hc.slice(0, 15) || "";

  await getDll$({ modulo: `get_paci.dll`, data: { cod_paci } })
    .then((data) => {
      sessionStorage.setItem("reg_paci", JSON.stringify(data.reg_paci));
      getAcomp();
    })
    .catch((err) => {
      CON851("?", "error", "Error consultando datos paciente");
    });
}

async function getAcomp() {
  try {
    const cod_paci = datos_session.cod_acomp || "";
    if (!cod_paci.trim()) {
      sessionStorage.setItem("reg_acomp", JSON.stringify(reg_acomp));
    } else {
      const datos = await getDll$({ modulo: `get_paci.dll`, data: { cod_paci } });
      sessionStorage.setItem(
        "reg_acomp",
        JSON.stringify({
          ...datos.reg_paci,
          parentesco: datos_session.parentesco,
        })
      );
    }

    getMedico();
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
<style></style>
