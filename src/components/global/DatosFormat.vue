<template>
  <div class="row justify-center">
    <div class="row justify-center" style="width: 100%; display: flex; align-items: center">
      <div
        class="row justify-center bold"
        style="width: 20%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
      >
        <span style="color: white">FECHA</span>
      </div>
      <div
        class="row justify-center bold"
        style="width: 10%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
      >
        <span style="color: white">HORA</span>
      </div>
      <div
        class="row justify-center bold"
        style="width: 40%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
      >
        <span style="color: white">SERVICIO</span>
      </div>
      <div
        class="row justify-center bold"
        style="width: 30%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
      >
        <span style="color: white">SEDE</span>
      </div>
    </div>

    <div class="row justify-center" style="width: 100%">
      <div
        class="row justify-center"
        style="border: 1px solid #ccc; width: 6%; display: flex; justify-content: center; align-items: center; min-height: 35px"
      >
        <span>{{ dayjs().format("DD") }}</span>
      </div>
      <div
        class="row justify-center"
        style="border: 1px solid #ccc; width: 6%; display: flex; justify-content: center; align-items: center; min-height: 35px"
      >
        <span>{{ dayjs().format("MM") }}</span>
      </div>
      <div
        class="row justify-center"
        style="border: 1px solid #ccc; width: 8%; display: flex; justify-content: center; align-items: center; min-height: 35px"
      >
        <span>{{ dayjs().format("YYYY") }}</span>
      </div>
      <div
        class="row justify-center"
        style="border: 1px solid #ccc; width: 10%; display: flex; justify-content: center; align-items: center; min-height: 35px"
      >
        <span>{{ dayjs().format("HH: mm") }}</span>
      </div>
      <div
        class="row justify-center"
        style="border: 1px solid #ccc; width: 40%; display: flex; justify-content: center; align-items: center; min-height: 35px"
      >
        <div class="col-xs-12">
          <Select_ v-model="servicio.select" :field="servicio.serv_form" :items="servicio.items" />
        </div>
      </div>
      <div
        class="row justify-center"
        style="border: 1px solid #ccc; width: 30%; overflow: auto; display: flex; justify-content: center; align-items: center; min-height: 35px"
      >
        <span>{{ getEmpresa.nomusu }}</span>
      </div>
    </div>

    <div class="row justify-center" style="width: 100%">
      <div
        class="row justify-center bold"
        style="width: 100%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
      >
        <span style="color: white">NOMBRES Y APELLIDOS COMPLETOS</span>
      </div>
    </div>

    <div class="row justify-center" style="width: 100%">
      <div class="row justify-center bold" style="width: 100%; display: flex; justify-content: center; align-items: center; min-height: 35px">
        <span>{{ getPaci.descrip }}</span>
      </div>
    </div>

    <div class="row justify-center" style="width: 100%">
      <div
        class="row justify-center bold"
        style="width: 40%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
      >
        <span style="color: white">DOCUMENTO DE IDENTIFICACIÓN</span>
      </div>
      <div
        class="row justify-center bold"
        style="width: 40%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
      >
        <span style="color: white">NÚMERO DE IDENTIFICACIÓN</span>
      </div>
      <div
        class="row justify-center bold"
        style="width: 20%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
      >
        <span style="color: white">EDAD</span>
      </div>
    </div>

    <div class="row justify-center" style="width: 100%">
      <div class="row justify-center bold" style="width: 40%">
        <q-checkbox left-label v-model="datos_comp.check_id" :label="getPaci.tipo_id" disable />
      </div>
      <div class="row justify-center bold" style="width: 40%; display: flex; justify-content: center; align-items: center; min-height: 35px">
        <span>{{ getPaci.cod }}</span>
      </div>
      <div class="row justify-center bold" style="width: 20%; display: flex; justify-content: center; align-items: center; min-height: 35px">
        <span>{{ datos_comp.edad }}</span>
      </div>
    </div>

    <div
      v-if="datos_comp.active_encab_ampl"
      class="row"
      style="width: 100%; display: flex; justify-content: center; align-items: center; min-height: 35px"
    >
      <div class="row justify-center" style="width: 100%">
        <div
          class="row justify-center bold"
          style="width: 20%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
        >
          <span style="color: white">SEXO BIOLOGICO</span>
        </div>
        <div
          class="row justify-center bold"
          style="width: 40%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
        >
          <span style="color: white">IDENTIDAD DE GÉNERO</span>
        </div>
        <div
          class="row justify-center bold"
          style="width: 40%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
        >
          <span style="color: white">DISCAPACIDAD</span>
        </div>
      </div>

      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 20%; display: flex; justify-content: center; align-items: center; min-height: 35px">
          <q-checkbox left-label v-model="datos_comp.check_id" :label="getPaci.sexo" disable />
        </div>

        <div class="row justify-center" style="border: 1px solid #ccc; width: 40%">
          <div class="col-xs-12">
            <Select_ v-model="ident_genero.select" :field="ident_genero.ident_genero" :items="ident_genero.items" />
          </div>
        </div>

        <div class="row justify-center bold" style="width: 40%; display: flex; justify-content: center; align-items: center; min-height: 35px">
          <span>{{ evaluarDiscapacidad(getPaci.discap) }}</span>
        </div>
      </div>

      <div class="row justify-center" style="width: 100%">
        <div
          class="row justify-center bold"
          style="width: 60%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
        >
          <span style="color: white">ACOMPAÑANTE</span>
        </div>
        <div
          class="row justify-center bold"
          style="width: 40%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
        >
          <span style="color: white">PARENTESCO</span>
        </div>
      </div>

      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 60%; display: flex; justify-content: center; align-items: center; min-height: 35px">
          <span>{{ getAcomp.descrip }}</span>
        </div>

        <div class="row justify-center bold" style="width: 40%; display: flex; justify-content: center; align-items: center; min-height: 35px">
          <span>{{ evaluarParentesco(getSesion.paren_acomp) }}</span>
        </div>
      </div>

      <div class="row justify-center" style="width: 100%">
        <div
          class="row justify-center bold"
          style="width: 60%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
        >
          <span style="color: white">TELEFONO ACOMPAÑANTE</span>
        </div>
        <div
          class="row justify-center bold"
          style="width: 40%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
        >
          <span style="color: white">AMBITO DE ATENCIÓN</span>
        </div>
      </div>

      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 60%; display: flex; justify-content: center; align-items: center; min-height: 35px">
          <span>{{ getAcomp.telefono }}</span>
        </div>

        <div class="row justify-center" style="border: 1px solid #ccc; width: 40%">
          <div class="col-xs-12">
            <Select_ v-model="ambito_atenc.select" :field="ambito_atenc.ambito_atenc" :items="ambito_atenc.items" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="row justify-center bold"
      style="width: 100%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
    >
      <!-- <p style="margin-left: 20px; margin-top: 6px; margin-bottom: 6px">ENTIDAD RESPONSABLE PBS</p> -->
      <span style="color: white">ENTIDAD RESPONSABLE PBS</span>
    </div>
    <div class="row justify-start bold" style="width: 100%"></div>

    <!---------------------------------- TABLA CUPS ---------------------------------->
    <div class="q-mt-sm row" v-if="datos_comp.active_cups" style="width: 100%">
      <div class="row justify-center" style="width: 100%">
        <div
          class="row justify-center bold"
          style="width: 8%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
        >
          <span style="color: white">N°</span>
        </div>
        <div
          class="row justify-center bold"
          style="width: 30%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
        >
          <span style="color: white">CÓDIGO CUPS</span>
        </div>
        <div
          class="row justify-center bold"
          style="width: 62%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
        >
          <span style="color: white">EXAMEN A REALIZAR</span>
        </div>
      </div>
      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 8%; display: flex; justify-content: center; align-items: center; min-height: 35px">
          <span>1</span>
        </div>
        <div class="row justify-center bold" style="width: 30%; display: flex; justify-content: center; align-items: center; min-height: 35px">
          <span>{{ articulos[0] ? articulos[0].codigo : "" }}</span>
        </div>
        <div class="row justify-center bold" style="width: 62%; display: flex; justify-content: center; align-items: center; min-height: 35px">
          <span>{{ articulos[0] ? articulos[0].descripcion : "" }}</span>
        </div>
      </div>
      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 8%; display: flex; justify-content: center; align-items: center; min-height: 35px">
          <span>2</span>
        </div>
        <div class="row justify-center bold" style="width: 30%; display: flex; justify-content: center; align-items: center; min-height: 35px">
          <span>{{ articulos[1] ? articulos[1].codigo : "" }}</span>
        </div>
        <div class="row justify-center bold" style="width: 62%; display: flex; justify-content: center; align-items: center; min-height: 35px">
          <span>{{ articulos[1] ? articulos[1].descripcion : "" }}</span>
        </div>
      </div>
      <div class="q-mt-sm row" style="width: 100%">
        <div class="row justify-center" style="width: 100%">
          <div
            class="row justify-center bold"
            style="width: 8%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
          >
            <span style="color: white">N°</span>
          </div>
          <div
            class="row justify-center bold"
            style="width: 30%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
          >
            <span style="color: white">CÓDIGO CIE-10</span>
          </div>
          <div
            class="row justify-center bold"
            style="width: 62%; display: flex; justify-content: center; align-items: center; min-height: 35px; background-color: #476fad"
          >
            <span style="color: white">DIAGNÓSTICO MÉDICO</span>
          </div>
        </div>
        <div class="row justify-center" style="width: 100%">
          <div class="row justify-center bold" style="width: 8%; display: flex; justify-content: center; align-items: center; min-height: 35px">
            <span>1</span>
          </div>
          <div class="row justify-center bold" style="width: 30%; display: flex; justify-content: center; align-items: center; min-height: 35px">
            <span>{{ diagnosticos[0] ? diagnosticos[0].codigo : "" }}</span>
          </div>
          <div class="row justify-center bold" style="width: 62%; display: flex; justify-content: center; align-items: center; min-height: 35px">
            <span>{{ diagnosticos[0] ? diagnosticos[0].descripcion : "" }}</span>
          </div>
        </div>
        <div class="row justify-center" style="width: 100%">
          <div class="row justify-center bold" style="width: 8%; display: flex; justify-content: center; align-items: center; min-height: 35px">
            <span>2</span>
          </div>
          <div class="row justify-center bold" style="width: 30%; display: flex; justify-content: center; align-items: center; min-height: 35px">
            <span>{{ diagnosticos[1] ? diagnosticos[1].codigo : "" }}</span>
          </div>
          <div class="row justify-center bold" style="width: 62%; display: flex; justify-content: center; align-items: center; min-height: 35px">
            <span>{{ diagnosticos[1] ? diagnosticos[1].descripcion : "" }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModuleFormatos } from "@/store/module/formatos";
import { computed, ref, watchEffect, onMounted } from "vue";
import { calcEdad, evaluarDiscapacidad, evaluarParentesco, evaluarClaseServ } from "@/formatos/utils";
import dayjs from "dayjs";

const { getPaci, getEmpresa, getSesion, getAcomp } = useModuleFormatos();
const props = defineProps({
  datos: {
    active_cups: Boolean,
    active_encab_ampl: Boolean,
  },
});

const ambito_atenc = ref({
  select: "AMBULATORIO",
  items: [
    { value: "AMBULATORIO", label: "AMBULATORIO" },
    { value: "HOSPITALIZADO", label: "HOSPITALIZADO" },
  ],
  ambito_atenc: {
    label: "",
    required: true,
    id: "ambito_atenc",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
});
const ident_genero = ref({
  select: "NO DECLARA",
  items: [
    { value: "MASCULINO", label: "MASCULINO" },
    { value: "FEMENINO", label: "FEMENINO" },
    { value: "TRANS", label: "TRANS" },
    { value: "NEUTRO", label: "NEUTRO" },
    { value: "NO DECLARA", label: "NO DECLARA" },
  ],
  ident_genero: {
    label: "",
    required: true,
    id: "ident_genero",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
});
const servicio = ref({
  select: evaluarClaseServ(getSesion.clase),
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
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
});

const articulos = ref([]);
const diagnosticos = ref([]);

onMounted(() => {
  articulos.value = getSesion.articulos;
  diagnosticos.value = getSesion.diagnosticos;
});
const emit = defineEmits(["datos", "ident_genero", "ambito_ante"]);
// watchEffect(() => emit("datos", servicio.value.select));

watchEffect(() => {
  emit("datos", servicio.value.select);
  emit("ident_genero", ident_genero.value.select);
  emit("ambito_ante", ambito_atenc.value.select);
});
const datos_comp = computed(() => {
  return {
    active_cups: props.datos?.active_cups ? props.datos?.active_cups : false,
    active_encab_ampl: props.datos?.active_encab_ampl ? props.datos?.active_encab_ampl : false,
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

<!-- const emit = defineEmits(["datos"]);
const emit1 = defineEmits(["datos_encab"]);
watchEffect(() => emit("datos", servicio.value.select));
watchEffect(() => emit1("datos_encab", { ident_genero: ident_genero.value.select })); -->
