<template>
  <div class="row justify-center">
    <div class="row justify-center" style="width: 100%">
      <div class="row justify-center bold" style="width: 20%">
        <p>FECHA</p>
      </div>
      <div class="row justify-center bold" style="width: 20%">
        <p>HORA</p>
      </div>
      <div class="row justify-center bold" style="width: 30%">
        <p>SERVICIO</p>
      </div>
      <div class="row justify-center bold" style="width: 30%">
        <p>SEDE</p>
      </div>
    </div>
    <div class="row justify-center" style="width: 100%">
      <div class="row justify-center" style="border: 1px solid #ccc; width: 6%">
        <p>{{ dayjs().format("DD") }}</p>
      </div>
      <div class="row justify-center" style="border: 1px solid #ccc; width: 6%">
        <p>{{ dayjs().format("MM") }}</p>
      </div>
      <div class="row justify-center" style="border: 1px solid #ccc; width: 8%">
        <p>{{ dayjs().format("YYYY") }}</p>
      </div>
      <div class="row justify-center" style="border: 1px solid #ccc; width: 20%">
        <p>{{ dayjs().format("HH: mm") }}</p>
      </div>
      <div class="row justify-center" style="border: 1px solid #ccc; width: 30%">
        <Select_ v-model="servicio.select" :field="servicio.serv_form" :items="servicio.items" />
      </div>
      <div class="row justify-center" style="border: 1px solid #ccc; width: 30%">
        <p>{{ getEmpresa.nomusu }}</p>
      </div>
    </div>
    <div class="row justify-center" style="width: 100%">
      <div class="row justify-center bold" style="width: 100%">
        <p>NOMBRES Y APELIIDOS COMPLETOS</p>
      </div>
    </div>
    <div class="row justify-center" style="width: 100%">
      <div class="row justify-center bold" style="width: 100%">
        <p>{{ getPaci.descrip }}</p>
      </div>
    </div>
    <div class="row justify-center" style="width: 100%">
      <div class="row justify-center bold" style="width: 40%">
        <p>DOCUMENTO DE IDENTIFICACIÓN</p>
      </div>
      <div class="row justify-center bold" style="width: 40%">
        <p>NÚMERO DE IDENTIFICACIÓN</p>
      </div>
      <div class="row justify-center bold" style="width: 20%">
        <p>EDAD</p>
      </div>
    </div>
    <div class="row justify-center" style="width: 100%">
      <div class="row justify-center bold" style="width: 40%">
        <q-checkbox left-label v-model="datos_comp.check_id" :label="getPaci.tipo_id" disable />
      </div>
      <div class="row justify-center bold" style="width: 40%">
        <p>{{ getPaci.cod }}</p>
      </div>
      <div class="row justify-center bold" style="width: 20%">
        <p>{{ datos_comp.edad }}</p>
      </div>
    </div>
    <div class="row justify-start bold" style="width: 100%">
      <p style="margin-left: 20px; margin-top: 6px; margin-bottom: 6px">ENTIDAD RESPONSABLE PBS:</p>
    </div>

    <!---------------------------------- TABLA CUPS ---------------------------------->
    <div class="q-mt-sm row" v-if="datos_comp.active_cups" style="width: 100%">
      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 8%">
          <p>N°</p>
        </div>
        <div class="row justify-center bold" style="width: 30%">
          <p>CÓDIGO CUPS</p>
        </div>
        <div class="row justify-center bold" style="width: 62%">
          <p>EXAMEN A REALIZAR</p>
        </div>
      </div>
      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 8%">
          <p>1</p>
        </div>
        <div class="row justify-center bold" style="width: 30%">
          <p>{{ articulos[0] ? articulos[0].codigo : "" }}</p>
        </div>
        <div class="row justify-center bold" style="width: 62%">
          <p>{{ articulos[0] ? articulos[0].descripcion : "" }}</p>
        </div>
      </div>
      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 8%">
          <p>2</p>
        </div>
        <div class="row justify-center bold" style="width: 30%">
          <p>{{ articulos[1] ? articulos[1].codigo : "" }}</p>
        </div>
        <div class="row justify-center bold" style="width: 62%">
          <p>{{ articulos[1] ? articulos[1].descripcion : "" }}</p>
        </div>
      </div>
      <div class="q-mt-sm row" style="width: 100%">
        <div class="row justify-center" style="width: 100%">
          <div class="row justify-center bold" style="width: 8%">
            <p>N°</p>
          </div>
          <div class="row justify-center bold" style="width: 30%">
            <p>CÓDIGO CIE-10</p>
          </div>
          <div class="row justify-center bold" style="width: 62%">
            <p>DIAGNÓSTICO MÉDICO</p>
          </div>
        </div>
        <div class="row justify-center" style="width: 100%">
          <div class="row justify-center bold" style="width: 8%">
            <p>1</p>
          </div>
          <div class="row justify-center bold" style="width: 30%">
            <p>{{ diagnosticos[0] ? diagnosticos[0].codigo : "" }}</p>
          </div>
          <div class="row justify-center bold" style="width: 62%">
            <p>{{ diagnosticos[0] ? diagnosticos[0].descripcion : "" }}</p>
          </div>
        </div>
        <div class="row justify-center" style="width: 100%">
          <div class="row justify-center bold" style="width: 8%">
            <p>2</p>
          </div>
          <div class="row justify-center bold" style="width: 30%">
            <p>{{ diagnosticos[1] ? diagnosticos[1].codigo : "" }}</p>
          </div>
          <div class="row justify-center bold" style="width: 62%">
            <p>{{ diagnosticos[1] ? diagnosticos[1].descripcion : "" }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModuleFormatos } from "@/store/module/formatos";
import { computed, ref, watchEffect, onMounted } from "vue";
import { calcEdad } from "@/formatos/utils";
import dayjs from "dayjs";

const { getPaci, getEmpresa, getSesion } = useModuleFormatos();
const props = defineProps({
  datos: {
    active_cups: Boolean,
  },
});

const servicio = ref({
  select: "RX - IMAGENOLOGIA",
  items: [
    { value: "DROGUERIA", label: "DROGUERIA" },
    { value: "CIRUGIAS", label: "CIRUGIAS" },
    { value: "LABORATORIOS Y OTROS DIAGNOSTICOS", label: "LABORATORIOS Y OTROS DIAGNOSTICOS" },
    { value: "RX - IMAGENOLOGIA", label: "RX - IMAGENOLOGIA" },
    { value: "OTROS SERVICIOS", label: "OTROS SERVICIOS" },
    { value: "CONSULTA Y TERAPIAS", label: "CONSULTA Y TERAPIAS" },
    { value: "PATOLOGIA", label: "PATOLOGIA" },
    { value: "PROMOCION Y PREVENCION", label: "PROMOCION Y PREVENCION" },
  ],
  serv_form: {
    label: "",
    required: true,
    id: "serv_form",
    campo_abierto: true,
  },
});

const articulos = ref([]);
const diagnosticos = ref([]);

onMounted(() => {
  articulos.value = getSesion.articulos;
  diagnosticos.value = getSesion.diagnosticos;
});
const emit = defineEmits(["datos"]);
watchEffect(() => emit("datos", servicio.value.select));

const datos_comp = computed(() => {
  return {
    active_cups: props.datos?.active_cups ? props.datos?.active_cups : false,
    edad: calcEdad(getPaci.nacim),
    check_id: true,
  };
});
</script>

<style>
div.bold {
  font-weight: bold;
  border: 1px solid #ccc;
}
</style>
