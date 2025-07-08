<template>
  <div>
    <ToolBar_ @validarAccion="validarAccion" />
    <ConfigUsunet_
      v-if="configuracion.estado"
      :configuracion="configuracion"
      @cerrar="configuracion.estado = false"
      @guardar="(configuracion.estado = false), verificarSesion()"
    />
    <ConfigMaestros_
      v-if="config_maestro.estado"
      :configuracion="config_maestro"
      @cerrar="cargarConsentimientosActivos"
      @guardar="config_maestro.estado = false"
    />
    <div class="q-ma-lg">
      <div class="row my-card justify-center q-mx-auto">
        <Input_ :inputStyle="{ width: '155px' }" v-model="getPaci.cod" :field="form_paci.codigo" />
        <Input_ :inputStyle="{ width: '360px' }" v-model="getPaci.descrip" :field="form_paci.descrip" />
        <Input_ :inputStyle="{ width: '155px' }" v-model="llave" :field="form_paci.folio" />
        <Input_ :inputStyle="{ width: '155px' }" v-model="nro_comp" :field="form_paci.comprob" />
      </div>
    </div>
    <div class="q-ma-lg">
      <ListaConsentimientos_ class="justify-center q-mx-auto" />
    </div>
    <Update_
      @cancelar="datos_actualizacion.estado = false"
      :mensaje="datos_actualizacion.mensaje"
      v-if="datos_actualizacion.estado"
      @aceptar="actualizarVersion"
    />
    <div class="text-center">
      <q-btn
        v-if="accesoMovil"
        size="sm"
        class="botone"
        color="orange"
        icon="undo"
        label="Regresar y elegir otro paciente"
        @click="regresarElaborarConsent"
      />
    </div>
  </div>
</template>
<script setup>
import { useApiContabilidad, useModuleCon851, useModuleFormatos } from "@/store";
import { defineAsyncComponent, onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { validarCodPaci } from "@/formatos/utils";

const ListaConsentimientos_ = defineAsyncComponent(() => import("@/components/consen/ListaConsentimientos.vue"));
const ConfigMaestros_ = defineAsyncComponent(() => import("@/components/consen/ConfigMaestros.vue"));
const ConfigUsunet_ = defineAsyncComponent(() => import("@/components/consen/ConfigUsunet.vue"));
const ToolBar_ = defineAsyncComponent(() => import("@/components/global/ToolBar.vue"));
const Update_ = defineAsyncComponent(() => import("@/components/global/Update.vue"));

const form_paci = ref({
  descrip: { id: "descrip", label: "Descripción", disable: true },
  codigo: { id: "codigo", label: "Codigo", disable: true },
  folio: { id: "folio", label: "Folio", disable: true },
  comprob: { id: "comprob", label: "Comprob", disable: true },
});

const { getPaci, setTestigo, setPaci, setEmpresa, setProf, setAcomp, setSession, accesoMovil } = useModuleFormatos();
const { getDll$, _getLogo$, getVersionBuild$, actualizarVersion$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const router = useRouter();
const route = useRoute();

const configuracion = ref({ estado: false });
const config_maestro = ref({ estado: false });

const mode_dev = process.env.NODE_ENV == "development" ? true : false;
const datos_session = {};
const llave = ref(null);
const nro_comp = ref(null);

const datos_actualizacion = ref({ estado: false, mensaje: "" });

onBeforeMount(() => validIsConfig());
// onMounted(() => validIsConfig());

const verificarSesion = async () => {
  try {
    if (mode_dev) localStorage.setItem("ip", "34.234.185.158");
    else localStorage.setItem("ip", window.location.hostname);

    const response = await getDll$({
      modulo: `get_usunet.dll`,
      data: {
        carpta: "CONTROL",
        directorio: route.query.contab,
        nit: route.query.nit,
      },
    });
    configuracion.value.estado = false;
    setEmpresa(response);
    await getLogo();
    return response;
  } catch (error) {
    return CON851("?", "info", error, () => {
      configuracion.value.estado = true;
    });
  }
};

const getLogo = async () => {
  try {
    const img = await _getLogo$({});
    sessionStorage.setItem("logo", img);
    await validarUrl();
  } catch (error) {
    console.error("getLogo", error);
    throw error;
  }
};

const regresarElaborarConsent = () => {
  const removeSessionStorage = ["query", "reg_paci", "reg_testigo"];
  removeSessionStorage.forEach((key) => {
    sessionStorage.removeItem(key);
  });
  router.back();
};

const validIsConfig = () => {
  if (route.query?.config == "S" && ["ADMI", "GEBC"].includes(route.query?.oper)) {
    setSession(route.query);
    return router.replace({ name: "configUsunet", query: { ...route.query } });
  }

  verificarSesion();
};

const validarUrl = async () => {
  if (Object.keys(route.query).length) {
    Object.assign(datos_session, route.query);
  } else {
    Object.assign(datos_session, JSON.parse(sessionStorage.query));
  }
  if (datos_session.llave_hc) llave.value = datos_session.llave_hc.slice(15);
  if (datos_session.nro_comp) nro_comp.value = datos_session.nro_comp;

  if (datos_session.id_testigo) {
    await getTestigo();
  }
  // if ([900273700, 79635522, 800037202].includes(Number(route.query.nit))) {
  //   await getTestigo();
  //   // if (datos_session.id_acompa) {
  //   //   await getAcomp();
  //   // }
  // } else {
  //   datos_session.modulo == "LAB" && getTestigo();
  // }
  if (datos_session.novedad == "1" && datos_session.cod_prof) {
    await getMedico();
  }
  await getPaciente();

  // if (["HIC", "ODO"].includes(datos_session.modulo) && datos_session.id_acompa) {
  //   if (datos_session?.id_acompa?.trim() != "" && ![900772776, 900161116].includes(Number(route.query.nit))) {
  //     await getAcomp();
  //   }
  // }
  if (!mode_dev) getVersionBuild();
};

async function getPaciente() {
  let cod_paci = datos_session.llave_hc.slice(0, 15) || "";
  cod_paci = validarCodPaci(cod_paci);
  await getDll$({ modulo: `get_paci.dll`, data: { cod_paci } })
    .then((data) => {
      /* Se hizo de esta manera por problemas con el back, quitaba espacios entre nombres */
      data.reg_paci.descrip = `${data.reg_paci?.er_apel?.trim()} ${data.reg_paci?.do_apel?.trim()} ${data.reg_paci?.er_nom?.trim()} ${data.reg_paci?.do_nom?.trim()}`;
      setPaci(data.reg_paci);

      // if (datos_session.novedad == "1") {
      //   getMedico();
      // }
      if (datos_session.id_acompa && datos_session.paci_firma == "N") {
        data.reg_acomp.descrip = `${data.reg_acomp?.er_apel?.trim()} ${data.reg_acomp?.do_apel?.trim()} ${data.reg_acomp?.er_nom?.trim()} ${data.reg_acomp?.do_nom?.trim()}`;
        setAcomp({ ...data.reg_acomp });
      }
      // if (datos_session.id_acompa && datos_session.modulo != "HIC") {
      //   data.reg_acomp.descrip = `${data.reg_acomp?.er_apel?.trim()} ${data.reg_acomp?.do_apel?.trim()} ${data.reg_acomp?.er_nom?.trim()} ${data.reg_acomp?.do_nom?.trim()}`;
      //   if (![900273700, 79635522].includes(Number(route.query.nit))) {
      //     setAcomp({ ...data.reg_acomp });
      //   }
      // }
      // if (datos_session.id_acompa && datos_session.modulo == "HIC") {
      //   data.reg_acomp.descrip = `${data.reg_acomp?.er_apel?.trim()} ${data.reg_acomp?.do_apel?.trim()} ${data.reg_acomp?.er_nom?.trim()} ${data.reg_acomp?.do_nom?.trim()}`;
      //   if ([900772776, 900161116].includes(Number(route.query.nit))) {
      //     setAcomp({ ...data.reg_acomp });
      //   }
      // }
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error consultando datos paciente");
    });
}

async function getAcomp() {
  try {
    datos_session.id_acompa = validarCodPaci(datos_session.id_acompa);
    const response = await getDll$({
      modulo: `get_paci.dll`,
      data: { cod_paci: datos_session.id_acompa },
    });
    response.reg_paci.descrip = `${response.reg_paci?.er_apel?.trim()} ${response.reg_paci?.do_apel?.trim()} ${response.reg_paci?.er_nom?.trim()} ${response.reg_paci?.do_nom?.trim()}`;
    setAcomp({ ...response.reg_paci });
  } catch (error) {
    console.error(error);
    CON851("?", "error", "No existe acompañante en el archivo de pacientes");
  }
}

async function getMedico() {
  try {
    const cod_prof = datos_session.cod_prof || "";
    const datos = await getDll$({
      modulo: `get_prof.dll`,
      data: { cod_prof, carpta: "CONTROL", directorio: route.query.contab, nit: route.query.nit },
    });
    setProf(datos.reg_prof);
  } catch (error) {
    CON851("?", "error", "Error consultando datos medico");
  }
}

async function getTestigo() {
  try {
    const tipo_testigo = datos_session.tipo_testigo || "";
    const cod_test = datos_session.id_testigo || "";
    if (!cod_test) return;

    let datos;
    if (tipo_testigo == "1" || tipo_testigo == "3") {
      datos = await getDll$({ modulo: `get_paci.dll`, data: { cod_paci: cod_test.padStart(15, "0") } });
      datos.reg_paci.descrip = `${datos.reg_paci?.er_apel?.trim()} ${datos.reg_paci?.do_apel?.trim()} ${datos.reg_paci?.er_nom?.trim()} ${datos.reg_paci?.do_nom?.trim()}`;
    } else if (tipo_testigo == "2") {
      datos = await getDll$({
        modulo: `get_prof.dll`,
        data: {
          cod_prof: cod_test,
          carpta: "CONTROL",
          directorio: route.query.contab,
          nit: route.query.nit,
        },
      });
    }
    setTestigo(tipo_testigo == "1" || tipo_testigo == "3" ? datos.reg_paci : datos.reg_prof);
  } catch (error) {
    CON851("?", "error", "Error consultando datos testigo");
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
    if (response.nomusu) configuracion.value.estado = true;
  } catch (error) {
    CON851("?", "info", error, () => {
      configuracion.value.estado = true;
    });
  }
};

const getVersionBuild = async () => {
  if (!["ADMI", "GEBC"].includes(datos_session?.oper)) return;
  try {
    const response = await getVersionBuild$({});
    datos_actualizacion.value.estado = true;
    datos_actualizacion.value.mensaje = `La nueva versión ${response} de consentimientos ya esta disponible.
    ¿Desea actualizarla?`;
  } catch (error) {
    CON851("?", "info", error);
  }
};

const actualizarVersion = async () => {
  try {
    const reponse = await actualizarVersion$({});
    datos_actualizacion.value.mensaje = "";
    CON851("?", "success", reponse);
  } catch (error) {
    CON851("?", "info", error);
  } finally {
    datos_actualizacion.value.estado = false;
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1200px
  border-radius: 0.5rem
</style>
