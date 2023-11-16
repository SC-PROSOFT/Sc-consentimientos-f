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
        <p></p>
      </div>
      <div class="row justify-center" style="border: 1px solid #ccc; width: 30%">
        <p>{{ props.datos.servicio }}</p>
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
        <p>{{ props.datos.primer_apellido }}</p>
      </div>
      <div class="row justify-center bold" style="width: 20%">
        <p>{{ props.datos.segundo_apellido }}</p>
      </div>
      <div class="row justify-center bold" style="width: 30%">
        <p>{{ props.datos.primer_nombre }}</p>
      </div>
      <div class="row justify-center bold" style="width: 30%">
        <p>{{ props.datos.segundo_nombre }}</p>
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
        <q-checkbox left-label v-model="datos_comp.check_id" :label="props.datos.tipo_id" disable />
      </div>
      <div class="row justify-center bold" style="width: 40%">
        <p>{{ props.datos.cod }}</p>
      </div>
      <div class="row justify-center bold" style="width: 20%">
        <p>{{ props.datos.edad }}</p>
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
import { computed, onMounted, ref } from "vue";
import dayjs from "dayjs";

const props = defineProps({
  datos: {
    segundo_apellido: String,
    primer_apellido: String,
    segundo_nombre: String,
    primer_nombre: String,
    active_cups: Boolean,
    check_id: Boolean,
    servicio: String,
    tipo_id: String,
    edad: String,
  },
});

const datos_comp = computed(() => {
  return {
    active_cups: props.datos.active_cups ? props.datos.active_cups : false,
    check_id: props.datos.check_id || true,
  };
});

onMounted(() => console.log("props--> ", datos_comp.value));
</script>

<style>
div.bold {
  font-weight: bold;
  border: 1px solid #ccc;
}
</style>
