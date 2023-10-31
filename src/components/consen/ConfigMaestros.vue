<template>
  <q-dialog v-model="configuracion.estado" persistent no-shake>
    <q-card class="my-card">
      <ToolBarTable_ titulo="Configuración de maestros" @cerrar="cerrarConfiguracion" icon="newspaper" />
      <div class="q-pa-md">
        <q-table
          :rows="maestro_consentimientos"
          :rows-per-page-options="[10]"
          @row-dblclick="selectConsen"
          :columns="columns"
          row-key="COD_MAE"
          bordered
          dense
          flat
        >
          <template v-slot:no-data="{ icon, message, filter }">
            <div class="full-width row flex-center text-accent q-gutter-sm">
              <q-icon size="2em" name="sentiment_dissatisfied" />
              <span> No existen registros </span>
              <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
            </div>
          </template>
        </q-table>
        <q-dialog v-model="flag" persistent>
          <q-card style="width: 100%; max-width: 30%; border-radius: 0.5rem">
            <ToolBarTable_ :titulo="reg_config.COD_MAE" @cerrar="flag = false" icon="newspaper" />
            <div class="row q-mb-md">
              <Input_
                class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                v-model="reg_config.CODIGO"
                :field="form_config.CODIGO"
              />
              <Input_
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                v-model="reg_config.APROBO"
                :field="form_config.APROBO"
              />
              <Input_
                class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                v-model="reg_config.FECHA_APROB"
                :field="form_config.FECHA_APROB"
              />
              <Input_
                class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                v-model="reg_config.VERSION"
                :field="form_config.VERSION"
              />
              <Input_
                class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                v-model="reg_config.REVISO"
                :field="form_config.REVISO"
              />
              <Input_
                class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                v-model="reg_config.FECHA_ACT"
                :field="form_config.FECHA_ACT"
              />
            </div>
            <q-card-actions align="center" class="text-primary text-center">
              <q-btn
                id="boton2"
                color="green"
                label="Guardar"
                class="botone q-mx-sm"
                icon-right="check_circle"
                @click="actualizarMaestro"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import ToolBarTable_ from "@/components/global/ToolBarTable.vue";
import { useModuleCon851, useApiContabilidad } from "@/store";
import { ref, onMounted } from "vue";
import days from "dayjs";

const { getDll$ } = useApiContabilidad();

const { CON851 } = useModuleCon851();

const props = defineProps({ configuracion: Object });
const emit = defineEmits(["cerrar", "guardar"]);

const maestro_consentimientos = ref([]);
const columns = [
  { name: "CODIGO", label: "Identificado", align: "left", field: "CODIGO" },
  { name: "COD_MAE", label: "Codigo", align: "left", field: "COD_MAE" },
  { name: "name", label: "Nombre", align: "left", field: "DESCRIP" },
  { name: "version", label: "Versión", field: "VERSION" },
];

const flag = ref(false);
const index_item = ref(null);
const form_config = ref({
  CODIGO: {
    id: "CODIGO",
    label: "Codigo",
    placeholder: "Escribe cual es el codigo",
    maxlength: "15",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  APROBO: {
    id: "APROBO",
    label: "Aprobo",
    placeholder: "Escribe quien aprobo",
    maxlength: "25",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  FECHA_ACT: {
    id: "FECHA_ACT",
    label: "Fecha actual",
    tipo: "date",
    f0: ["f3"],
    maxlength: "10",
    required: true,
    campo_abierto: true,
  },
  FECHA_APROB: {
    id: "FECHA_APROB",
    label: "Fecha de aprobación",
    tipo: "date",
    f0: ["f3"],
    maxlength: "10",
    required: true,
    campo_abierto: true,
  },
  REVISO: {
    id: "REVISO",
    label: "Revisado por",
    maxlength: "25",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  VERSION: {
    id: "VERSION",
    label: "Versión",
    placeholder: "Versión",
    maxlength: "10",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
});

const reg_config = ref({
  CODIGO: null,
  APROBO: null,
  COD_MAE: null,
  DESCRIP: null,
  FECHA_ACT: null,
  FECHA_APROB: null,
  REVISO: null,
  VERSION: null,
});

onMounted(() => {
  getMaestros();
});

const selectConsen = async ({}, data) => {
  index_item.value = maestro_consentimientos.value.indexOf(data);
  reg_config.value.COD_MAE = data.COD_MAE.trim();
  reg_config.value.CODIGO = data.CODIGO.trim();
  reg_config.value.APROBO = data.APROBO.trim();
  reg_config.value.DESCRIP = data.DESCRIP.trim();
  reg_config.value.FECHA_ACT = days(data.FECHA_ACT.trim()).format("YYYY-MM-DD");
  reg_config.value.FECHA_APROB = days(data.FECHA_APROB.trim()).format("YYYY-MM-DD");
  reg_config.value.REVISO = data.REVISO.trim();
  reg_config.value.VERSION = data.VERSION.trim();

  flag.value = true;
};

const actualizarMaestro = async () => {
  const data_envio = JSON.parse(JSON.stringify(reg_config.value));
  data_envio.FECHA_ACT = data_envio.FECHA_ACT.split("-").join("");
  data_envio.FECHA_APROB = data_envio.FECHA_APROB.split("-").join("");
  Object.assign(maestro_consentimientos.value[index_item.value], data_envio);
  let datos = {
    cod_mae: data_envio.COD_MAE,
    codigo: data_envio.CODIGO,
    descrip: data_envio.DESCRIP,
    version: data_envio.VERSION,
    fecha_aprob: data_envio.FECHA_APROB,
    aprobo: data_envio.APROBO,
    reviso: data_envio.REVISO,
    fecha_act: data_envio.FECHA_ACT,
  };

  try {
    const response = await getDll$({
      ip: "34.234.185.158",
      modulo: `set_maeconsen.dll`,
      data: datos,
    });
    flag.value = false;
    CON851("?", "success", response);
  } catch (error) {
    CON851("?", "info", error);
  }
};
const getMaestros = async () => {
  try {
    const response = await getDll$({
      ip: "34.234.185.158",
      modulo: `get_maeconsen.dll`,
      data: { modulo: "HIC" },
    });
    maestro_consentimientos.value = response;
  } catch (error) {
    CON851("?", "info", error);
  }
};

const datoCodigo = (event) => {};
const cerrarConfiguracion = () => emit("cerrar");
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 70%
  border-radius: 0.5rem
</style>
