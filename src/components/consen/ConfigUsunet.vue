<template>
  <q-dialog v-model="configuracion.estado" persistent no-shake>
    <q-card class="my-card">
      <ToolBarTable_ titulo="Configuración del servidor" @cerrar="cerrarConfiguracion" />
      <div class="row q-pa-sm">
        <Input_
          class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          v-model="reg_config.nomusu"
          :field="form_config.nomusu"
          @validate="datoEmpresa"
        />
        <Input_
          class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          v-model="reg_config.nitusu"
          :field="form_config.nitusu"
          @validate="datoNit"
        />
        <Input_
          class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          v-model="reg_config.dirusu"
          :field="form_config.dirusu"
          @validate="datoDireccion"
        />
        <Input_
          class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          v-model="reg_config.emailusu"
          :field="form_config.emailusu"
          @validate="datoEmail"
        />
        <Input_
          class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          v-model="reg_config.clave_email"
          :field="form_config.clave"
          @validate="datoClave"
        />
        <Input_
          class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          v-model="reg_config.ipusu"
          :field="form_config.ipusu"
          @validate="datoIp"
        />
        <Input_
          class="col-xs-6 col-sm-2 col-md-2 col-lg-2 col-xl-2"
          v-model="reg_config.uni_prog"
          :field="form_config.uni_prog"
          @validate="datoUnidadProg"
        />
        <Input_
          class="col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-4"
          v-model="reg_config.dircont"
          :field="form_config.dircont"
          @validate="datoContab"
        />
      </div>
      <q-card-actions align="center" class="text-primary text-center">
        <q-btn
          id="boton2"
          color="green"
          label="Guardar"
          class="botone q-mx-sm"
          icon-right="check_circle"
          @click="validarConfiguracion"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import ToolBarTable_ from "@/components/global/ToolBarTable.vue";
import { useModuleCon851, useApiContabilidad } from "@/store";
import { ref, onMounted } from "vue";
import { foco_ } from "@/setup";

const { getDll$ } = useApiContabilidad();

const { CON851 } = useModuleCon851();

const props = defineProps({ configuracion: Object });
const emit = defineEmits(["cerrar", "guardar"]);

const modo_project = ref(null);
const reg_config = ref({
  nomusu: null,
  nitusu: null,
  dirusu: null,
  emailusu: null,
  clave_email: null,
  ipusu: null,
  uni_prog: null,
  dircont: null,
});
const form_config = ref({
  nomusu: {
    id: "nomusu",
    label: "Nombre de empresa",
    placeholder: "Escribe el nombre de empresa",
    maxlength: "60",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  nitusu: {
    id: "nitusu",
    label: "Nit",
    placeholder: "Escribe el nit",
    tipo: "number",
    maxlength: "10",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  clave: {
    id: "clave",
    label: "Clave",
    placeholder: "Escribe la clave",
    maxlength: "50",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  dirusu: {
    id: "dirusu",
    label: "Dirección",
    placeholder: "Escribe la dirección",
    maxlength: "60",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  emailusu: {
    id: "emailusu",
    label: "Correo",
    placeholder: "Escribe el correo",
    maxlength: "60",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  ipusu: {
    id: "ipusu",
    label: "Ip servidor",
    placeholder: "Escribe la dirección ip",
    maxlength: "30",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  uni_prog: {
    id: "uni_prog",
    label: "Unidad",
    maxlength: "1",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  dircont: {
    id: "dircont",
    label: "Contabilidad",
    maxlength: "30",
    placeholder: "Escribe la contabilidad",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
});

onMounted(() => {
  modo_project.value = process.env.NODE_ENV;

  reg_config.value.nomusu = props.configuracion.nomusu?.trim();
  reg_config.value.nitusu = props.configuracion.nitusu?.trim();
  reg_config.value.dirusu = props.configuracion.dirusu?.trim();
  reg_config.value.emailusu = props.configuracion.emailusu?.trim();
  reg_config.value.clave_email = props.configuracion.clave_email?.trim();
  reg_config.value.ipusu = props.configuracion.ipusu?.trim();
  reg_config.value.uni_prog = props.configuracion.unid_prog?.trim();
  reg_config.value.dircont = props.configuracion.dircont?.trim();

  foco_(form_config, "nomusu");
});

const datoEmpresa = (event) => {
  switch (event) {
    case "esc":
      return cerrarConfiguracion();
    case "enter":
      return foco_(form_config, "nitusu");
    case "f3":
      return validarConfiguracion();
  }
};
const datoNit = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_config, "nomusu");
    case "enter":
      return foco_(form_config, "dirusu");
    case "f3":
      return validarConfiguracion();
  }
};
const datoDireccion = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_config, "nitusu");
    case "enter":
      return foco_(form_config, "emailusu");
    case "f3":
      return validarConfiguracion();
  }
};
const datoEmail = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_config, "dirusu");
    case "enter":
      return foco_(form_config, "clave");
    case "f3":
      return validarConfiguracion();
  }
};
const datoClave = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_config, "emailusu");
    case "enter":
      return foco_(form_config, "ipusu");
    case "f3":
      return validarConfiguracion();
  }
};
const datoIp = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_config, "clave");
    case "enter":
      return foco_(form_config, "uni_prog");
    case "f3":
      return validarConfiguracion();
  }
};
const datoUnidadProg = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_config, "ipusu");
    case "enter":
      return foco_(form_config, "dircont");
    case "f3":
      return validarConfiguracion();
  }
};
const datoContab = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_config, "uni_prog");
    case "enter":
    case "f3":
      return validarConfiguracion();
  }
};

const validarConfiguracion = () => {
  Object.keys(reg_config.value).forEach((e, index) => {
    if (!reg_config.value[e]) {
      return CON851("02", "info", e, () => foco_(form_config, e));
    }
  });
  guardarUsunet();
};

const cerrarConfiguracion = () => emit("cerrar");
const guardarUsunet = async () => {
  try {
    const response = await getDll$({ modulo: `set_usunet.dll`, data: { ...reg_config.value } });

    CON851("?", "success", response, () => emit("guardar"));
  } catch (error) {
    CON851("?", "info", error);
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
  border-radius: 0.5rem
</style>
