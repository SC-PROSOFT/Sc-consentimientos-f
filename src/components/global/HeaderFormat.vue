<template>
  <q-card class="q-mx-auto header">
    <div class="row" style="border: 1px solid #ccc">
      <!-- LOGO -->
      <div class="col-md-2 shadow-1"><q-img width="150px" /></div>

      <div class="col-md-10">
        <div class="row">
          <div class="col-5 text-subtitle2 q-pb-xs q-pt-xs shadow-1 text-center text-bold">
            {{ datos?.DESCRIP || "Falta nombre formato" }}
          </div>
          <div class="col-3 text-subtitle2 q-pb-xs q-pt-xs shadow-1 text-center text-bold">
            <strong>VERSION {{ datos?.VERSION }} </strong>
          </div>
          <div class="col-2 text-subtitle2 q-pb-xs q-pt-xs shadow-1 justify-center text-bold row">
            <strong class="col-12 text-center">CODIGO</strong>
            <strong class="col-12 text-center"> {{ datos?.CODIGO }} </strong>
          </div>
          <div class="col-2 text-subtitle2 q-pb-xs q-pt-xs shadow-1 justify-center text-bold row">
            <strong class="col-12 text-center">APROBADO </strong>
            <strong class="col-12 text-center"> {{ days(datos?.FECHA_APROB).format("YYYY-MM-DD") }} </strong>
          </div>
        </div>
        <div class="row">
          <div class="col-5 text-subtitle2 q-pb-xs q-pt-xs shadow-1 text-center text-bold">
            <strong> {{ empresa?.NOMUSU || "Nombre Empresa" }} </strong>
          </div>
          <div class="col-3 text-subtitle2 q-pb-xs q-pt-xs shadow-1 justify-center text-bold row">
            <strong class="col-12 text-center"> FECHA ACTUALIZACIÓN </strong>
            <strong class="col-12 text-center"> {{ days(datos?.FECHA_ACT).format("YYYY-MM-DD") }} </strong>
          </div>
          <div class="col-2 text-subtitle2 q-pb-xs q-pt-xs shadow-1 justify-center text-bold row">
            <strong class="col-12 text-center"> REVISADO POR</strong>
            <strong class="col-12 text-center"> {{ datos?.REVISO }} </strong>
          </div>
          <div class="col-2 text-subtitle2 q-pb-xs q-pt-xs shadow-1 justify-center text-bold row">
            <strong class="col-12 text-center"> APROBADO POR {{ datos?.aprobado_por }} </strong>
            <strong class="col-12 text-center"> {{ datos?.APROBO }} </strong>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { useApiContabilidad } from "@/store";
import { onMounted, ref } from "vue";
import days from "dayjs";

const use_contab = useApiContabilidad();

const datos = ref({});
const empresa = ref({});

onMounted(() => {
  if (Object.values(use_contab.encabezado).length) datos.value = use_contab.encabezado;
  else datos.value = sessionStorage.encabezado && JSON.parse(sessionStorage.encabezado);

  empresa.value = sessionStorage.Empresa && JSON.parse(sessionStorage.Empresa);
});
</script>

<style>
.header {
  width: 65%;
  margin-top: 20px;
  margin-bottom: 15px;
}
</style>
