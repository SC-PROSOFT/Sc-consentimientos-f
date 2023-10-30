<template>
  <div class="background-container q-pa-md">
    <q-card class="row card-login fixed-center" style="height: 520px" bordered>
      <div class="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
        <q-card style="height: 520px; border-radius: 1.5rem">
          <q-img :src="image_source" spinner-color="white" style="height: 520px" />
        </q-card>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-6 col-lg-6 col-xl-6 text-center">
        <q-img spinner-color="white" style="height: 50px" :src="logo_empresa" class="q-mt-sm" fit="contain" />
        <div class="text-h5 text-bold q-my-md">Iniciar sesión</div>
        <div class="text-primary subtitle2">
          {{ modulo_descrip.toUpperCase() }}
        </div>
        <div class="row justify-center q-my-md">
          <Input_
            class="col-xs-10 col-sm-10 col-md-10 col-lg-5 col-xl-6"
            v-model="reg_ingreso.operador"
            :field="form_ingreso.operador"
            text_class="text-center"
            @validate="datoOperador"
          />
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"></div>
          <Input_
            class="col-xs-10 col-sm-10 col-md-10 col-lg-5 col-xl-6"
            v-model="reg_ingreso.clave"
            :field="form_ingreso.clave"
            text_class="text-center"
            @validate="datoClave"
          />
        </div>
        <div>
          <q-btn
            @click="validarIngreso"
            label="Iniciar sesión"
            style="width: 30%"
            color="primary"
            class="botone"
            push
          />
        </div>
        <div class="row justify-center q-py-md">
          <Select_
            class="col-xs-6 col-sm-6 col-md-5 col-lg-3 col-xl-3"
            v-model="reg_ingreso.contabilidad"
            :field="form_ingreso.contabilidad"
            :items="contabilidades"
          />
          <Select_
            class="col-xs-6 col-sm-6 col-md-5 col-lg-3 col-xl-3"
            v-model="reg_ingreso.mes"
            :field="form_ingreso.mes"
            :items="meses"
          />
        </div>
        <p class="text-secondary text-center q-py-auto">© 2023 PROSOFT Versión {{ version }}</p>
      </div>

      <div class="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
        <q-card bordered class="bg-primary" style="height: 520px; border-radius: 1.5rem">
          <LottieAnimation
            style="height: 520px; width: 250px"
            :animation-data="pensador"
            :loopDelayMin="2.5"
            :auto-play="true"
            :loopDelayMax="5"
            class="q-mx-auto"
            :loop="true"
            :speed="1"
            ref="anim"
          />
        </q-card>
      </div>
    </q-card>
    <ConfigLogin_
      @guardar="grabarConfiguracion"
      :configuracion="configuracion"
      @cerrar="cerrarConfiguracion"
      v-if="configuracion.estado"
    />
  </div>
</template>

<script setup>
import { useModuleCon851, useApiPredial, useApiContabilidad } from "@/store";
import { ref, onMounted, defineAsyncComponent, watch } from "vue";
import pensador from "@/assets/json/pensador.json";
import { LottieAnimation } from "lottie-web-vue";
import env_package from "./../../package.json";
import { foco_, ultimoFoco_ } from "@/setup";
import { useRoute } from "vue-router";
import days from "dayjs";

const ConfigLogin_ = defineAsyncComponent(() => import("@/components/contab/ConfigLogin.vue"));

const route = useRoute();

const { getMunic$ } = useApiPredial();
const { getDll$, _getLogo$, autorize$ } = useApiContabilidad();

const { CON851 } = useModuleCon851();

const modulo_descrip = ref("No hay modulo seleccionado");
const version = ref(env_package.version);
const logo_empresa = ref(null);
const image_source = ref(null);
const image = ref("pen");
const ip = ref(null);

const configuracion = ref({ estado: false, modulos: [] });

const form_ingreso = ref({
  operador: {
    id: "operador",
    label: "Operador",
    placeholder: "Ingresa el operador",
    maxlength: "4",
    required: true,
    disable: false,
    icon_before: "person_pin",
    campo_abierto: true,
    f0: ["f1"],
  },
  clave: {
    id: "clave",
    label: "Clave",
    maxlength: "8",
    required: false,
    disable: false,
    placeholder: "Ingresa la clave",
    icon_before: "lock",
    campo_abierto: true,
  },
  contabilidad: {
    id: "contabilidad",
    label: "Contabilidad",
    option_value: "cod",
    option_label: "cod",
    required: false,
    disable: false,
    campo_abierto: true,
  },
  mes: {
    id: "mes",
    label: "Mes",
    required: false,
    disable: false,
    campo_abierto: true,
  },
});
const reg_ingreso = ref({
  operador: null,
  clave: null,
  modulo: null,
  contabilidad: null,
  mes: null,
  nomina: null,
});

const info_usunet = ref([]);
const contabilidades = ref([]);
const meses = ref([
  { value: "13", label: "CONTROL" },
  { value: "1", label: "ENERO" },
  { value: "2", label: "FEBRERO" },
  { value: "3", label: "MARZO" },
  { value: "4", label: "ABRIL" },
  { value: "5", label: "MAYO" },
  { value: "6", label: "JUNIO" },
  { value: "7", label: "JULIO" },
  { value: "8", label: "AGOSTO" },
  { value: "9", label: "SEPTIEMBRE" },
  { value: "10", label: "OCTUBRE" },
  { value: "11", label: "NOVIEMBRE" },
  { value: "12", label: "DICIEMBRE" },
  { value: "14", label: "CIERRE" },
]);

watch(image, (new_image) => loadImage(new_image));

onMounted(() => {
  infoServidor();
  loadImage();
});

const loadImage = async () => {
  try {
    const image_module = await import(`@/assets/image/cover-${image.value}.webp`);
    image_source.value = image_module.default;
  } catch (error) {
    console.error("Error al cargar la imagen", error);
  }
};
const infoServidor = async () => {
  try {
    const response = await getDll$({
      ip: localStorage.ip,
      directorio: "INDEX/SC-USUNET.DLL",
      data: { data: `GEBC|` },
    });
    const { CONTAB, NOMINA, ...usunet } = response.Usunet[0];
    CONTAB.pop();
    NOMINA.pop();
    response.MODULOS.pop();
    info_usunet.value = usunet;
    let modulos = response.MODULOS.map((e) => ({
      ...e,
      text: e.COD + " - " + e.DESCRIP?.trim(),
    })).filter((e) => e.ACT == "S");

    const modulo_select = modulos.find((e) => e.COD == route.query.modulo || e.COD == sessionStorage.modulo);
    reg_ingreso.value.nomina = NOMINA;
    if (modulo_select) {
      reg_ingreso.value.modulo = modulo_select.COD;
      modulo_descrip.value = modulo_select.DESCRIP;
    }

    CONTAB.reverse().forEach(({ DIR }) => contabilidades.value.push({ cod: DIR.trim() }));
    reg_ingreso.value.contabilidad = localStorage.contabilidad || contabilidades.value[0].cod;
    reg_ingreso.value.mes = days().format("M");
    configuracion.value.modulos = modulos;

    await _getLogo$({ nit: usunet.NITUSU.slice(2), disco: "D" }).then((response) => {
      logo_empresa.value = `data:image/png;base64,${response}`;
    });
    validarinformacion();
    return foco_(form_ingreso, "operador");
  } catch (error) {
    CON851("?", "info", "No se ha configurado", () => (configuracion.value.estado = true));
  }
};
const validarinformacion = () => {
  let modulo = route.query.modulo || sessionStorage.modulo;

  if (["HIC", "SAL"].includes(modulo.toUpperCase()) && localStorage.ip == "10.10.1.204") {
    image.value = `lavado-manos-2022`;
  } else {
    if (!["1", "null"].includes(modulo)) {
      image.value = modulo?.toLowerCase();
      if (!modulo) image.value = "pen";
    }
  }
  if (modulo == "bom") modulo = "eds";
};
const grabarConfiguracion = async (datos) => {
  try {
    configuracion.value.estado = false;
    ip.value = datos.ip;
    localStorage.ip = datos.ip;
    localStorage.puerto = datos.puerto;
    sessionStorage.modulo = datos.modulo;
    localStorage.sucursal = datos.sucursal;
    localStorage.id_maquina = datos.id_maquina;

    if (configuracion.value.modulos.length) {
      let modulo_encontrado = configuracion.value.modulos.find((e) => e.COD == sessionStorage.modulo);
      reg_ingreso.value.modulo = modulo_encontrado.COD;
      modulo_descrip.value = modulo_encontrado.DESCRIP;
    }

    await infoServidor();

    CON851("?", "success", "Configuración grabada correctamente", () => foco_(form_ingreso, "operador"));
  } catch (error) {
    CON851("?", "error", error, () => foco_(form_ingreso, "operador"));
  }
};
const cerrarConfiguracion = () => {
  configuracion.value.estado = false;
  foco_(form_ingreso, "operador");
};

const datoOperador = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_ingreso, "operador");
    case "enter":
      return foco_(form_ingreso, "clave");
    case "f1":
      configuracion.value.estado = true;
      break;
  }
};
const datoClave = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_ingreso, "operador");
    case "enter":
      validarIngreso();
      return foco_(form_ingreso, "clave");
  }
};

const validarIngreso = () => {
  Object.keys(reg_ingreso.value).forEach((e) => {
    if (!reg_ingreso.value[e] && e != "clave") {
      return CON851("02", "info", e, () => foco_(form_ingreso, e));
    }
    if (!Object.values(reg_ingreso.value).includes(null)) iniciarIngreso();
  });
  iniciarIngreso();
};

const iniciarIngreso = async () => {
  if (!localStorage.ip)
    return CON851("?", "info", "No se ha configurado la ip", () => (configuracion.value.estado = true));

  const { operador, clave, modulo } = reg_ingreso.value;
  try {
    const response = await getDll$({
      ip: localStorage.ip,
      directorio: "INDEX/INDEX.dll",
      data: { datosh: `${operador}|${clave || ""}|${modulo}` },
    });
    if (response.Usunet) recibirIngreso(response.Usunet[0]);
  } catch (error) {
    return CON851("?", "info", error, ultimoFoco_);
  }
};

const recibirIngreso = async (operador) => {
  const { clave, contabilidad, nomina, mes } = reg_ingreso.value;

  !sessionStorage.modulo && (sessionStorage.modulo = route.query.modulo);
  !route.query.modulo && (route.query.modulo = sessionStorage.modulo);
  let modulo = route.query.modulo || sessionStorage.modulo;
  let consulta = configuracion.value.modulos.find((e) => e.COD == modulo);

  if (operador.EST != "01") return;
  if (!consulta) CON851("?", "info", "No se encontraron modulos");
  if (consulta.ACT != "S") CON851("?", "info", "Modulo no se encuentra activo");

  localStorage.clave = clave || "";
  sessionStorage.operador = operador.OPER.trim();
  localStorage.idusu = operador.IDUSU.trim();
  localStorage.nombre = operador.NOMUSU.trim();
  localStorage.sesion = operador.SESSIOUSU.trim();
  localStorage.vendedor = operador.VENDEDOR.trim();
  localStorage.idusunet = operador.NITUSUNET.trim();
  localStorage.contabilidad = contabilidad;
  localStorage.nomina = nomina;
  localStorage.mes = mes;

  const my_config = JSON.stringify(configuracion.value);
  const buffer = new TextEncoder().encode(my_config);
  const base64_url = btoa(String.fromCharCode.apply(null, buffer))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
  sessionStorage.configuracion = base64_url;
  localStorage.unidad = info_usunet.value["UNID-PROG"].toUpperCase();

  if (["DOM", "PRY"].includes(modulo)) {
    localStorage.contabilidad = "";
    localStorage.carpeta_modulo = contabilidad;
  }
  let option = "C";
  var url_dll = null;
  if (sessionStorage.modulo.trim() == "HIC") option = "ISH";
  if (localStorage.unidad == "S") url_dll = "RM/CONTAB/CON904.DLL";
  else url_dll = "CONTAB/CON904.DLL";

  await getDll$({
    ip: localStorage.ip,
    directorio: url_dll,
    data: { datosh: "|" + contabilidad + "||" + operador.OPER + "|" + option + "|" },
  }).then(async () => {
    modulo == "PRD" ? await consultarMunicipio() : await consultarUsuario();
    await autorize$({ operador });
  });
};

const consultarUsuario = async () => {
  let meses = ["", "ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGT", "SEP", "OCT", "NOV", "DIC"];
  let fecha = meses[localStorage.mes];
  try {
    const response = await getDll$({
      ip: localStorage.ip,
      directorio: "CONTAB/CONUSUA.DLL",
      data: {
        datosh: `${localStorage.sesion}|${localStorage.contabilidad}|/${fecha}/|`,
        modulo: sessionStorage.Modulo,
      },
    });
    localStorage.empresa = response.DATOSUSUA[0].NOMBRE;
    localStorage.nit = parseInt(response.DATOSUSUA[0].NIT);
    localStorage.datos_usuario = JSON.stringify(response.DATOSUSUA[0]);
  } catch (error) {
    CON851("?", "error", error, ultimoFoco_);
  }
};
const consultarMunicipio = async () => {
  try {
    const response = await getMunic$({});
    localStorage.empresa = response.nombre_munic;
    localStorage.nit = response.nit_munic;
    localStorage.datos_usuario = JSON.stringify(response);
  } catch (error) {
    CON851("?", "error", error, ultimoFoco_);
  }
};
</script>
<style>
.background-container {
  background-size: cover;
  background-position: center center;
  height: 100vh;
  background-image: url("@/assets/image/cover-b.png");
}
.card-login {
  width: 100%;
  max-width: 85%;
  border-radius: 1.5rem;
}
</style>
