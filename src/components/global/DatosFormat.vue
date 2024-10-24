<template>
  <div class="row justify-center">
    <div class="row justify-center" style="width: 100%">
      <div class="row justify-center bold" style="width: 20%">
        <p>FECHA</p>
      </div>
      <div class="row justify-center bold" style="width: 10%">
        <p>HORA</p>
      </div>
      <div class="row justify-center bold" style="width: 40%">
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
      <div class="row justify-center" style="border: 1px solid #ccc; width: 10%">
        <p>{{ dayjs().format("HH: mm") }}</p>
      </div>
      <div class="row justify-center" style="border: 1px solid #ccc; width: 40%">
        <div class="col-xs-12">
          <Select_ v-model="servicio.select" :field="servicio.serv_form" :items="servicio.items" />
        </div>
      </div>
      <div class="row justify-center" style="border: 1px solid #ccc; width: 30%; overflow: auto">
        <p>{{ getEmpresa.nomusu }}</p>
      </div>
    </div>

    <div class="row justify-center" style="width: 100%">
      <div class="row justify-center bold" style="width: 100%">
        <p>NOMBRES Y APELLIDOS COMPLETOS</p>
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

    <div v-if="datos_comp.active_encab_ampl" class="row" style="width: 100%">
      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 20%">
          <p>SEXO BIOLOGICO</p>
        </div>
        <div class="row justify-center bold" style="width: 40%">
          <p>IDENTIDAD DE GÉNERO</p>
        </div>
        <div class="row justify-center bold" style="width: 40%">
          <p>DISCAPACIDAD</p>
        </div>
      </div>

      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 20%">
          <q-checkbox left-label v-model="datos_comp.check_id" :label="getPaci.sexo" disable />
        </div>

        <div class="row justify-center" style="border: 1px solid #ccc; width: 40%">
          <div class="col-xs-12">
            <Select_ v-model="ident_genero.select" :field="ident_genero.ident_genero" :items="ident_genero.items" />
          </div>
        </div>

        <div class="row justify-center bold" style="width: 40%">
          <p>{{ evaluarDiscapacidad(getPaci.discap) }}</p>
        </div>
      </div>

      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 60%">
          <p>ACOMPAÑANTE</p>
        </div>
        <div class="row justify-center bold" style="width: 40%">
          <p>PARENTESCO</p>
        </div>
      </div>

      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 60%">
          <p>{{ getPaci.er_nom_acomp + " " + getPaci.do_nom_acomp + " " + getPaci.er_apel_acomp + " " + getPaci.do_apel_acomp }}</p>
        </div>

        <div class="row justify-center bold" style="width: 40%">
          <p>{{ evaluarParentesco(getSesion.paren_acomp) }}</p>
        </div>
      </div>

      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 60%">
          <p>TELEFONO ACOMPAÑANTE</p>
        </div>
        <div class="row justify-center bold" style="width: 40%">
          <p>AMBITO DE ATENCIÓN</p>
        </div>
      </div>

      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 60%">
          <p>{{ getPaci.telef_acomp }}</p>
        </div>

        <div class="row justify-center" style="border: 1px solid #ccc; width: 40%">
          <div class="col-xs-12">
            <Select_ v-model="ambito_atenc.select" :field="ambito_atenc.ambito_atenc" :items="ambito_atenc.items" />
          </div>
        </div>
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
