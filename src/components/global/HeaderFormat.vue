<template>
  <div class="row" style="border: 1px solid">
    <!-- LOGO -->
    <div class="col-md-2 shadow-1"><v-img width="150px" /></div>

    <div class="col-md-10">
      <div class="row">
        <div class="col-5 text-subtitle1 q-pb-lg q-pt-lg shadow-1 text-center text-bold">
          {{ datos?.DESCRIP || "Falta nombre formato" }}
        </div>
        <div class="col-3 text-subtitle1 q-pb-sm q-pt-sm shadow-1 text-center text-bold">
          <strong>VERSION {{ datos?.version }} </strong>
        </div>
        <div class="col-2 text-subtitle1 q-pb-sm q-pt-sm shadow-1 justify-center text-bold row">
          <strong class="col-12 text-center">CODIGO</strong>
          <strong class="col-12 text-center"> {{ datos?.CODIGO }} </strong>
        </div>
        <div class="col-2 text-subtitle1 q-pb-sm q-pt-sm shadow-1 justify-center text-bold row">
          <strong class="col-12 text-center">APROBADO </strong>
          <strong class="col-12 text-center"> {{ moment(datos.FECHA_APROB).format("YYYY/MM/DD") }} </strong>
        </div>
      </div>
      <div class="row">
        <div class="col-5 text-subtitle1 q-pb-sm q-pt-sm shadow-1 text-center text-bold">
          <strong> {{ datos?.nom_empresa || "Nombre Empresa" }} </strong>
        </div>
        <div class="col-3 text-subtitle1 q-pb-sm q-pt-sm shadow-1 justify-center text-bold row">
          <strong class="col-12 text-center"> FECHA ACTUALIZACIÓN </strong>
          <strong class="col-12 text-center"> {{ moment(datos.FECHA_ACT).format("YYYY/MM/DD") }} </strong>
        </div>
        <div class="col-2 text-subtitle1 q-pb-sm q-pt-sm shadow-1 justify-center text-bold row">
          <strong class="col-12 text-center"> REVISADO POR</strong>
          <strong class="col-12 text-center"> {{ datos?.REVISO }} </strong>
        </div>
        <div class="col-2 text-subtitle1 q-pb-sm q-pt-sm shadow-1 justify-center text-bold row">
          <strong class="col-12 text-center"> APROBADO POR {{ datos?.aprobado_por }} </strong>
          <strong class="col-12 text-center"> {{ datos?.APROBO }} </strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import moment from "moment";

const datos = ref(sessionStorage.encabezado && JSON.parse(sessionStorage.encabezado));
onMounted(() => console.log("datos--> ", datos.value));
</script>
