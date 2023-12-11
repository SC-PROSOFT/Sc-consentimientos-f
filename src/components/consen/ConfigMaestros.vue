<template>
  <q-dialog v-model="configuracion.estado" persistent no-shake>
    <q-card class="my-card">
      <ToolBarTable_ titulo="Configuración de maestros" @cerrar="cerrarConfiguracion" />
      <div class="q-pa-md">
        <q-table
          :rows="maestro_consentimientos"
          :rows-per-page-options="[10]"
          @row-dblclick="selectConsen"
          :columns="columns"
          row-key="cod_mae"
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
                <q-btn @click="selectConsen(props)" icon="edit_note" class="botone" color="primary" size="sm">
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
          <q-card style="border-radius: 0.5rem; width: 100%; max-width: 700px; min-width: 700px">
            <ToolBarTable_ :titulo="reg_config.descrip" @cerrar="flag = false" />
            <div class="row q-mt-md q-mx-md">
              <Toggle_
                :class="
                  reg_config.iso == 'S'
                    ? 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 q-mb-md'
                    : 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 q-mb-lg'
                "
                width_label="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9"
                width_input="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"
                v-model="reg_config.iso"
                :field="form_config.iso"
              />
              <div class="row no-padding no-margin" v-if="reg_config.iso == 'S'">
                <Input_
                  class="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-xl-5"
                  width_label="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                  width_input="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                  v-model="reg_config.codigo"
                  :field="form_config.codigo"
                />
                <Input_
                  class="col-xs-12 col-sm-7 col-md-7 col-lg-7 col-xl-7"
                  width_label="col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                  width_input="col-xs-6 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                  v-model="reg_config.aprobo"
                  :field="form_config.aprobo"
                />
                <Input_
                  class="col-xs-12 col-sm-7 col-md-7 col-lg-6 col-xl-7"
                  width_label="col-xs-6 col-sm-7 col-md-7 col-lg-6 col-xl-7"
                  width_input="col-xs-6 col-sm-5 col-md-5 col-lg-6 col-xl-5"
                  v-model="reg_config.fecha_aprob"
                  :field="form_config.fecha_aprob"
                />
                <Input_
                  class="col-xs-12 col-sm-7 col-md-7 col-lg-6 col-xl-7"
                  width_label="col-xs-6 col-sm-7 col-md-7 col-lg-6 col-xl-7"
                  width_input="col-xs-6 col-sm-5 col-md-5 col-lg-6 col-xl-5"
                  v-model="reg_config.fecha_act"
                  :field="form_config.fecha_act"
                />
                <Input_
                  class="col-xs-12 col-sm-5 col-md-5 col-lg-5 col-xl-5"
                  width_label="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                  width_input="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                  v-model="reg_config.version"
                  :field="form_config.version"
                />
                <Input_
                  v-if="reg_config.iso == 'S'"
                  class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                  width_label="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                  width_input="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                  v-model="reg_config.reviso"
                  :field="form_config.reviso"
                />
              </div>

              <Toggle_
                class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                width_label="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9"
                width_input="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"
                v-model="reg_config.habilitar"
                :field="form_config.habilitar"
              />

              <Toggle_
                class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                width_label="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9"
                width_input="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"
                v-model="reg_config.rango_edad"
                :field="form_config.rango_edad"
              />
              <div
                class="row col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 q-mt-md"
                v-if="reg_config.rango_edad == 'S'"
              >
                <Input_
                  width_label="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                  width_input="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                  class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                  v-model="reg_config.edad_desde"
                  :field="form_config.edad_desde"
                />
                <Input_
                  width_label="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                  width_input="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                  class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
                  v-model="reg_config.edad_hasta"
                  :field="form_config.edad_hasta"
                />
              </div>
              <Select_
                width_label="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5"
                width_input="col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7"
                class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-my-md"
                v-model="reg_config.sexo"
                :field="form_config.sexo"
                :items="sexos"
              />
            </div>
            <q-card-actions align="center" class="text-primary text-center">
              <q-btn
                id="boton2"
                color="green"
                label="Guardar"
                icon-right="check_circle"
                @click="actualizarMaestro"
                class="botone q-mx-sm q-my-md"
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
import { useModuleCon851, useApiContabilidad, useModuleFormatos } from "@/store";
import { ref, onMounted, watch, watchEffect } from "vue";
import { foco_ } from "@/setup";
import days from "dayjs";

const { getDll$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const { getEmpresa } = useModuleFormatos();


const props = defineProps({ configuracion: Object });
const emit = defineEmits(["cerrar", "guardar"]);

const maestro_consentimientos = ref([]);
const columns = [
  { name: "cod_mae", label: "Código", align: "left", field: "cod_mae" },
  { name: "name", label: "Nombre", align: "left", field: "descrip" },
];

const flag = ref(false);
const index_item = ref(null);

const reg_config_copy = ref({
  codigo: null,
  aprobo: null,
  cod_mae: null,
  descrip: null,
  fecha_act: null,
  fecha_aprob: null,
  reviso: null,
  version: null,
  habilitar: null,
  iso: null,
  rango_edad: null,
  edad_desde: null,
  edad_hasta: null,
  sexo: null,
});
const reg_config = ref(Object.assign({}, reg_config_copy.value));

const form_config = ref({
  codigo: {
    id: "codigo",
    label: "Codigo",
    placeholder: "Escribe cual es el codigo",
    maxlength: "15",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  aprobo: {
    id: "aprobo",
    label: "Aprobado por",
    placeholder: "Escribe quien aprobo",
    maxlength: "25",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  fecha_act: {
    id: "fecha_act",
    label: "Fecha actualización",
    tipo: "date",
    f0: ["f3"],
    maxlength: "10",
    required: true,
    campo_abierto: true,
  },
  fecha_aprob: {
    id: "fecha_aprob",
    label: "Fecha de aprobación",
    tipo: "date",
    f0: ["f3"],
    maxlength: "10",
    required: true,
    campo_abierto: true,
  },
  reviso: {
    id: "reviso",
    label: "Revisado por",
    maxlength: "25",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  version: {
    id: "version",
    label: "Versión",
    placeholder: "Versión",
    maxlength: "10",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  habilitar: {
    id: "habilitar",
    label: "Activar consentimiento",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  iso: {
    id: "iso",
    label: "Activar ISO",
    required: true,
    campo_abierto: true,
  },
  rango_edad: {
    id: "rango_edad",
    label: "Activar por edad",
    f0: ["f3"],
    mask: "###",
    required: true,
    campo_abierto: true,
  },
  edad_desde: {
    id: "edad_desde",
    label: "Edad desde",
    placeholder: "000",
    mask: "###",
    maxlength: "3",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  edad_hasta: {
    id: "edad_hasta",
    label: "Edad hasta",
    placeholder: "000",
    maxlength: "3",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  sexo: {
    id: "sexo",
    label: "Sexo",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
});

watchEffect(() => {
  if (reg_config.value.iso == "N") resetValues();
});

const resetValues = () => {
  Object.assign(reg_config.value, {
    codigo: null,
    aprobo: null,
    fecha_aprob: null,
    version: null,
  });
};

const sexos = ref([
  { value: "M", label: "MASCULINO" },
  { value: "F", label: "FEMENINO" },
  { value: "A", label: "AMBOS SEXOS" },
]);

watch(reg_config.value, (val) => {
  if (val.edad_desde && val.edad_desde > 120) {
    return (
      CON851("?", "info", `El año desde ${val.edad_desde} no esta en el rango de 0 - 120`),
      () => (reg_config.value.edad_desde = null)
    );
  }

  if (val.edad_hasta && val.edad_hasta > 120) {
    return (
      CON851("?", "info", `El año hasta ${val.edad_hasta} no esta en el rango de 0 - 120`),
      () => (reg_config.value.edad_hasta = null)
    );
  }
});

onMounted(() => {
  getMaestros();
});

const selectConsen = async ({ row }) => {
  const data = row;
  index_item.value = maestro_consentimientos.value.indexOf(data);

  Object.keys(reg_config.value).forEach((key) => (reg_config.value[key] = null));

  setTimeout(() => {
    Object.keys(data).forEach((key) => {
      if (data[key]) {
        reg_config.value[key] = data[key];
        if (key.startsWith("fecha")) {
          reg_config.value[key] = days(data[key].trim()).format("YYYY-MM-DD");
        }
      }
    });
  }, 100);
  flag.value = true;
};

const actualizarMaestro = async () => {
  try {
    const data_envio = JSON.parse(JSON.stringify(reg_config.value));
    data_envio.fecha_act = data_envio.fecha_act ? data_envio.fecha_act.split("-").join("") : days().format("YYYY-MM-DD").split("-").join("");
    data_envio.fecha_aprob = data_envio.fecha_aprob?.split("-").join("");

    const camposo_bligatorios = [
      { nombre: "activar por rango de edad", campo: "rango_edad" },
      { nombre: "habilitar consen", campo: "habilitar" },
      { nombre: "activar por sexo", campo: "sexo" },
      { nombre: "nit", campo: "iso" },
    ];

    if (data_envio.rango_edad == "S") {
      camposo_bligatorios.push(
        { nombre: "edad desde", campo: "edad_desde" },
        { nombre: "edad hasta", campo: "edad_hasta" }
      );
    }
    if (data_envio.iso == "S") {
      camposo_bligatorios.push({ nombre: "codigo", campo: "codigo" });

      if(getEmpresa.nitusu != 844003225) camposo_bligatorios.push( { nombre: "aprobo", campo: "aprobo" })
    }

    for (const campo_info of camposo_bligatorios) {
      const valor_campo = data_envio[campo_info.campo] ? data_envio[campo_info.campo] : "";
      if (["", null].includes(valor_campo?.trim())) {
        console.log(valor_campo);
        console.log(campo_info.campo);
        return CON851("02", "info", campo_info.nombre, () => foco_(form_config, campo_info.campo));
      }
    }

    Object.assign(maestro_consentimientos.value[index_item.value], data_envio);
    let datos = {
      ...data_envio,
      cod_mae: data_envio.cod_mae,
      codigo: data_envio.codigo,
      descrip: data_envio.descrip,
      version: data_envio.version,
      fecha_aprob: data_envio.fecha_aprob,
      aprobo: data_envio.aprobo,
      reviso: data_envio.reviso,
      fecha_act: data_envio.fecha_act,
    };
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
  const query = sessionStorage.getItem("query") && JSON.parse(sessionStorage.getItem("query"));
  try {
    const response = await getDll$({
      modulo: `get_maeconsen.dll`,
      data: {
        modulo: query.modulo,
        id_paci: query.llave_hc.slice(0, 15),
        listar_todos: "1",
      },
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
