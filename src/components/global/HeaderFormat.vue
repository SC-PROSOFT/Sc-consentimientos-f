<template>
  <q-card class="q-mx-auto header">
    <div class="row" style="border: 1px solid #ccc">
      <div class="col-md-2 shadow-1">
        <q-img
          style="height: 105px; max-width: 205px"
          spinner-color="primary "
          :src="getLogo"
          fit="contain"
        />
      </div>

      <div class="col-md-10">
        <div class="row">
          <div class="col-5 text-subtitle2 q-pb-xs q-pt-xs shadow-1 text-center text-bold">
            {{ getEncabezado.descrip || "Falta nombre formato" }}
          </div>
          <div class="col-3 text-subtitle2 q-pb-xs q-pt-xs shadow-1 text-center text-bold">
            <strong>VERSION {{ getEncabezado.version }} </strong>
          </div>
          <div class="col-2 text-subtitle2 q-pb-xs q-pt-xs shadow-1 justify-center text-bold row">
            <strong class="col-12 text-center">CODIGO</strong>
            <strong class="col-12 text-center"> {{ getEncabezado.codigo }} </strong>
          </div>
          <div class="col-2 text-subtitle2 q-pb-xs q-pt-xs shadow-1 justify-center text-bold row">
            <strong class="col-12 text-center">APROBADO </strong>
            <strong class="col-12 text-center">
              {{ days(getEncabezado.fecha_aprob).format("YYYY-MM-DD") }}
            </strong>
          </div>
        </div>
        <div class="row">
          <div class="col-5 text-subtitle2 q-pb-xs q-pt-xs shadow-1 text-center text-bold">
            <strong class="col-12 text-center text-bold">EMPRESA </strong> <br />
            <strong class="col-12 text-center"> {{ getEmpresa.NOMUSU || "Nombre Empresa" }} </strong>
          </div>
          <div class="col-3 text-subtitle2 q-pb-xs q-pt-xs shadow-1 justify-center text-bold row">
            <strong class="col-12 text-center"> FECHA ACTUALIZACIÓN </strong>
            <strong class="col-12 text-center">
              {{ days(getEncabezado.fecha_act).format("YYYY-MM-DD") }}
            </strong>
          </div>
          <div class="col-2 text-subtitle2 q-pb-xs q-pt-xs shadow-1 justify-center text-bold row">
            <strong class="col-12 text-center"> REVISADO POR</strong>
            <strong class="col-12 text-center"> {{ getEncabezado.reviso }} </strong>
          </div>
          <div class="col-2 text-subtitle2 q-pb-xs q-pt-xs shadow-1 justify-center text-bold row">
            <strong class="col-12 text-center"> APROBADO POR {{ getEncabezado.aprobado_por }} </strong>
            <strong class="col-12 text-center"> {{ getEncabezado.aprobo }} </strong>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { useApiContabilidad, useModuleFormatos } from "@/store";
import { onMounted } from "vue";
import days from "dayjs";

const { getEncabezado } = useApiContabilidad();
const { getLogo, getEmpresa } = useModuleFormatos();

onMounted(() => {
  // empresa.value = sessionStorage.empresa && JSON.parse(sessionStorage.empresa);
});
</script>

<style>
.header {
  width: 65%;
  margin-top: 20px;
  margin-bottom: 15px;
}
</style>
