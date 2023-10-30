<template>
  <q-dialog v-model="configuracion.estado" persistent no-shake>
    <q-card class="my-card">
      <ToolBarTable_ titulo="Dirección IP y Módulo" name="Ingreso" @cerrar="cerrarConfiguracion" />
      <div class="row q-pa-sm">
        <Input_
          class="col-xs-6 col-sm-6col-md-6 col-lg-6 col-xl-6"
          v-model="reg_config.ip"
          :field="form_config.ip"
          @validate="datoIp"
        />
        <Select_
          v-if="modo_project == 'development'"
          class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          v-model="reg_config.modulo"
          :field="form_config.modulo"
          @validate="datoModulo"
          :items="modulos"
        />
        <Input_
          class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          v-model="reg_config.sucursal"
          :field="form_config.sucursal"
          @validate="datoSucursal"
        />
        <Input_
          class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
          v-model="reg_config.id_maquina"
          :field="form_config.id_maquina"
          @validate="datoMaquina"
        />
      </div>
      <q-card-actions align="center" class="text-primary text-center">
        <q-btn
          id="boton1"
          color="red-14"
          label="Cancelar"
          icon-right="cancel"
          class="botone q-mx-sm"
          @click="cerrarConfiguracion"
        />
        <q-btn
          id="boton2"
          color="green"
          label="Aceptar"
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
import { useModuleCon851 } from "@/store";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { foco_ } from "@/setup";

const { CON851 } = useModuleCon851();
const route = useRoute();

const props = defineProps({ configuracion: Object });
const emit = defineEmits(["cerrar", "guardar"]);

const modo_project = ref(null);
const modulos = ref([]);
const reg_config = ref({
  ip: null,
  modulo: null,
  sucursal: null,
  id_maquina: null,
});
const form_config = ref({
  ip: {
    id: "ip",
    label: "Ip servidor",
    maxlength: "15",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  modulo: {
    id: "modulo",
    label: "Modulos",
    option_value: "COD",
    option_label: "text",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  sucursal: {
    id: "sucursal",
    label: "Sucursal",
    maxlength: "2",
    placeholder: "01",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  id_maquina: {
    id: "id_maquina",
    label: "Id maquina",
    maxlength: "10",
    f0: ["f3"],
    campo_abierto: true,
  },
});

onMounted(() => {
  modo_project.value = process.env.NODE_ENV;

  modulos.value = props.configuracion.modulos;
  reg_config.value.ip = localStorage.ip || null;
  reg_config.value.sucursal = localStorage.sucursal || null;
  reg_config.value.id_maquina = localStorage.id_maquina || null;
  reg_config.value.modulo = route.query.modulo || sessionStorage.modulo || null;

  foco_(form_config, "ip");
});

const datoIp = (event) => {
  switch (event) {
    case "esc":
      return cerrarConfiguracion();
    case "enter":
      if (modo_project.value == "production") {
        return foco_(form_config, "sucursal");
      }
      return foco_(form_config, "modulo");

    case "f3":
      return validarConfiguracion();
  }
};
const datoModulo = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_config, "ip");
    case "enter":
      return foco_(form_config, "sucursal");
    case "f3":
      return validarConfiguracion();
  }
};
const datoSucursal = (event) => {
  switch (event) {
    case "esc":
      if (modo_project.value == "production") {
        return foco_(form_config, "ip");
      }
      return foco_(form_config, "modulo");
    case "enter":
      return foco_(form_config, "id_maquina");
    case "f3":
      return validarConfiguracion();
  }
};
const datoMaquina = (event) => {
  switch (event) {
    case "esc":
      return foco_(form_config, "sucursal");
    case "enter":
    case "f3":
      return validarConfiguracion();
  }
};
const validarConfiguracion = () => {
  Object.keys(reg_config.value).forEach((e) => {
    if (!reg_config.value[e] && e != "modulo") {
      return CON851("02", "info", e, () => foco_(form_config, e));
    }
    if (!Object.values(reg_config.value).includes(null) || !Object.values(reg_config.value)[2]) {
      guardarConfiguracion();
    }
  });
};

const cerrarConfiguracion = () => emit("cerrar");
const guardarConfiguracion = () => emit("guardar", reg_config.value);
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
  border-radius: 0.5rem
</style>
