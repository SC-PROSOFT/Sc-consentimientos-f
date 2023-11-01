<template>
  <q-dialog v-model="configuracion.estado" persistent no-shake>
    <q-card class="my-card">
      <ToolBarTable_
        titulo="Configuración de maestros"
        @cerrar="cerrarConfiguracion"
      />
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
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th auto-width> Modificar </q-th>
              <q-th v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props" @dblclick="selectConsen(props)" class="cursor">
              <q-td auto-width>
                <q-btn
                  @click="selectConsen(props)"
                  icon="edit_note"
                  class="botone"
                  color="primary"
                  size="sm"
                >
                </q-btn>
              </q-td>
              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.value }}
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
        <q-dialog v-model="flag" persistent class="row">
          <q-card
            style="
              border-radius: 0.5rem;
              width: 100%;
              max-width: 700px;
              min-width: 700px;
            "
          >
            <ToolBarTable_
              :titulo="reg_config.DESCRIP"
              @cerrar="flag = false"
            />
            <div class="row q-mx-md">
              <Input_
                class="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-xl-5"
                width_label="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                width_input="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                v-model="reg_config.CODIGO"
                :field="form_config.CODIGO"
              />
              <Input_
                class="col-xs-12 col-sm-7 col-md-7 col-lg-7 col-xl-7"
                width_label="col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                width_input="col-xs-6 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                v-model="reg_config.APROBO"
                :field="form_config.APROBO"
              />
              <Input_
                class="col-xs-12 col-sm-7 col-md-7 col-lg-7 col-xl-7"
                width_label="col-xs-6 col-sm-7 col-md-7 col-lg-7 col-xl-7"
                width_input="col-xs-6 col-sm-5 col-md-5 col-lg-5 col-xl-5"
                v-model="reg_config.FECHA_APROB"
                :field="form_config.FECHA_APROB"
              />
              <Input_
                class="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-xl-5"
                width_label="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                width_input="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                v-model="reg_config.VERSION"
                :field="form_config.VERSION"
              />
              <Input_
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                v-model="reg_config.REVISO"
                :field="form_config.REVISO"
              />
              <Toggle_
                class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                width_label="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9"
                width_input="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"
                v-model="reg_config.HABILITAR"
                :field="form_config.HABILITAR"
              />
              <Toggle_
                class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                width_label="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9"
                width_input="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"
                v-model="reg_config.RANGO_EDAD"
                :field="form_config.RANGO_EDAD"
              />
              <div
                class="row col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 q-mt-md"
                v-if="reg_config.RANGO_EDAD == 'S'"
              >
                <Select_
                  class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                  v-model="reg_config.UNIDAD_EDAD_DESDE"
                  :field="form_config.UNIDAD_EDAD_DESDE"
                  :items="unidad_edades"
                />
                <Input_
                  width_label="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                  width_input="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                  class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                  v-model="reg_config.VLR_EDAD_DESDE"
                  :field="form_config.VLR_EDAD"
                />
                <Select_
                  class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                  v-model="reg_config.UNIDAD_EDAD_HASTA"
                  :field="form_config.UNIDAD_EDAD_HASTA"
                  :items="unidad_edades"
                />
                <Input_
                  width_label="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                  width_input="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                  class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                  v-model="reg_config.VLR_EDAD_HASTA"
                  :field="form_config.VLR_EDAD"
                />
              </div>
              <Select_
                class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                v-model="reg_config.SEXO"
                :field="form_config.SEXO"
                :items="sexos"
              />
            </div>
            <q-card-actions align="center" class="text-primary text-center">
              <q-btn
                id="boton2"
                color="green"
                label="Guardar"
                class="botone q-mx-sm q-my-md"
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
import { ref, onMounted, watch } from "vue";
import days from "dayjs";

const { getDll$ } = useApiContabilidad();

const { CON851 } = useModuleCon851();

const props = defineProps({ configuracion: Object });
const emit = defineEmits(["cerrar", "guardar"]);

const maestro_consentimientos = ref([]);
const columns = [
  { name: "COD_MAE", label: "Código", align: "left", field: "COD_MAE" },
  { name: "name", label: "Nombre", align: "left", field: "DESCRIP" },
];

const flag = ref(false);
const index_item = ref(null);

const reg_config = ref({
  CODIGO: null,
  APROBO: null,
  COD_MAE: null,
  DESCRIP: null,
  FECHA_ACT: null,
  FECHA_APROB: null,
  REVISO: null,
  VERSION: null,
  HABILITAR: null,
  RANGO_EDAD: null,
  UNIDAD_EDAD_DESDE: null,
  VLR_EDAD_DESDE: null,
  UNIDAD_EDAD_HASTA: null,
  VLR_EDAD_HASTA: null,
  SEXO: null,
});
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
    label: "Aprobado por",
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
  HABILITAR: {
    id: "HABILITAR",
    label: "Activar consentimiento",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  RANGO_EDAD: {
    id: "RANGO_EDAD",
    label: "Activar por rango",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  UNIDAD_EDAD_DESDE: {
    id: "UNIDAD_EDAD_DESDE",
    label: "Edad desde",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  UNIDAD_EDAD_HASTA: {
    id: "UNIDAD_EDAD_HASTA",
    label: "Edad hasta",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  VLR_EDAD: {
    id: "VLR_EDAD",
    label: "Rango de edad",
    placeholder: "000",
    maxlength: "3",
    tipo: "number",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  SEXO: {
    id: "SEXO",
    label: "Sexo",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
});
const unidad_edades = ref([
  { value: "A", label: "AÑOS" },
  { value: "M", label: "MESES" },
  { value: "D", label: "DIAS" },
]);
const sexos = ref([
  { value: "M", label: "MASCULINO" },
  { value: "F", label: "FEMENINO" },
  { value: "A", label: "AMBOS SEXOS" },
]);

onMounted(() => {
  getMaestros();
});

const selectConsen = async ({ row }) => {
  const data = row;
  index_item.value = maestro_consentimientos.value.indexOf(data);

  Object.keys(reg_config.value).forEach((key) => {
    reg_config.value[key] = null;
  });

  setTimeout(() => {
    Object.keys(data).forEach((key) => {
      if (data[key]) {
        reg_config.value[key] = data[key].trim();
        if (key.startsWith("FECHA")) {
          reg_config.value[key] = days(data[key].trim()).format("YYYY-MM-DD");
        }
      }
    });
  }, 100);

  flag.value = true;
};

const actualizarMaestro = async () => {
  const data_envio = JSON.parse(JSON.stringify(reg_config.value));
  data_envio.FECHA_ACT = days().format("YYYY-MM-DD").split("-").join("");
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
      modulo: `get_maeconsen.dll`,
      data: { modulo: "HIC" },
    });
    maestro_consentimientos.value = response;
  } catch (error) {
    CON851("?", "info", error);
  }
};

const cerrarConfiguracion = () => emit("cerrar");
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 70%
  border-radius: 0.5rem
</style>
