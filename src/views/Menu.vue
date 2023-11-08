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
        <Input_
          class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
          width_label="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
          width_input="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
          v-model="getPaci.cod"
          :field="form_paci.codigo"
        />
        <Input_
          class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          width_label="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
          width_input="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
          v-model="getPaci.descrip"
          :field="form_paci.descrip"
        />
        <Input_
          class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"
          width_label="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
          width_input="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
          v-model="llave"
          :field="form_paci.folio"
        />
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

const form_paci = ref({
  codigo: { id: "codigo", label: "Codigo", disable: true },
  descrip: { id: "descrip", label: "Descripción", disable: true },
  folio: { id: "folio", label: "Folio", disable: true },
});

const { getPaci, getHc } = useModuleFormatos();
const { getDll$, getNit, _getLogo$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();

const configuracion = ref({ estado: false });
const config_maestro = ref({ estado: false });
const reg_acomp = regAcomp();
const route = useRoute();
const datos_session = {};
const llave = ref(null);

onMounted(async () => {
  verificarSesion();
  if (getHc?.llave) llave.value = getHc.llave.slice(15);
});

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
    .catch(() => {
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
    CON851("?", "error", "No existe acompañante en el archivo de pacientes");
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
