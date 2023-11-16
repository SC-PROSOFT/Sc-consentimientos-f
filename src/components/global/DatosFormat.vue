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
      <div class="row justify-center bold" style="width: 20%">
        <p>PPRIMER APELLIDO</p>
      </div>
      <div class="row justify-center bold" style="width: 20%">
        <p>SEGUNDO APELLIDO</p>
      </div>
      <div class="row justify-center bold" style="width: 30%">
        <p>PRIMER NOMBRE</p>
      </div>
      <div class="row justify-center bold" style="width: 30%">
        <p>SEGUNDO NOMBRE</p>
      </div>
    </div>
    <div class="row justify-center" style="width: 100%">
      <div class="row justify-center bold" style="width: 20%">
        <p>{{ datos_comp.primer_apellido }}</p>
      </div>
      <div class="row justify-center bold" style="width: 20%">
        <p>{{ datos_comp.segundo_apellido }}</p>
      </div>
      <div class="row justify-center bold" style="width: 30%">
        <p>{{ datos_comp.primer_nombre }}</p>
      </div>
      <div class="row justify-center bold" style="width: 30%">
        <p>{{ datos_comp.segundo_nombre }}</p>
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
          <p>11111111</p>
        </div>
        <div class="row justify-center bold" style="width: 62%">
          <p>ALARGAMIENTO DE MIEMBRO</p>
        </div>
      </div>
      <div class="row justify-center" style="width: 100%">
        <div class="row justify-center bold" style="width: 8%">
          <p>2</p>
        </div>
        <div class="row justify-center bold" style="width: 30%">
          <p>11111111</p>
        </div>
        <div class="row justify-center bold" style="width: 62%">
          <p>ALARGAMIENTO DE NALGAS</p>
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
            <p>2222222</p>
          </div>
          <div class="row justify-center bold" style="width: 62%">
            <p>POSITIVO</p>
          </div>
        </div>
        <div class="row justify-center" style="width: 100%">
          <div class="row justify-center bold" style="width: 8%">
            <p>2</p>
          </div>
          <div class="row justify-center bold" style="width: 30%">
            <p>2222222</p>
          </div>
          <div class="row justify-center bold" style="width: 62%">
            <p>NEGATIVO</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { separarNombre, calcEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store/module/formatos";
import { computed, onMounted, ref } from "vue";
import dayjs from "dayjs";

const { getPaci, getEmpresa } = useModuleFormatos();
const props = defineProps({
  datos: {
    active_cups: Boolean,
  },
});

const servicio = ref({
  select: "0",
  items: [
    { value: "0", label: "DROGUERIA" },
    { value: "1", label: "CIRUGIAS" },
    { value: "2", label: "LABORATORIOS Y OTROS DIAGNOSTICOS" },
    { value: "3", label: "RX - IMAGENOLOGIA" },
    { value: "4", label: "OTROS SERVICIOS" },
    { value: "5", label: "CONSULTA Y TERAPIAS" },
    { value: "6", label: "PATOLOGIA" },
    { value: "7", label: "PROMOCION Y PREVENCION" },
  ],
  serv_form: {
    label: "",
    required: true,
    id: "serv_form",
    campo_abierto: true
  },
});

const datos_comp = computed(() => {
  const name = separarNombre();
  const datos = {
    active_cups: props.datos?.active_cups ? props.datos?.active_cups : false,
    primer_apellido: name[0] ? name[0] : "",
    segundo_apellido: name[1] ? name[1] : "",
    primer_nombre: name[2] ? name[2] : "",
    segundo_nombre: name[3] ? name[3] : "",
    edad: calcEdad(getPaci.nacim),
    check_id: true,
  };

  return datos;
});
</script>

<style>
div.bold {
  font-weight: bold;
  border: 1px solid #ccc;
}
</style>
