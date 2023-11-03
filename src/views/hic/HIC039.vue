<template>
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
    <q-card-section>
      <div class="row">
        <p>
          Yo,
          <q-input
            v-model="reg.paciente"
            disable
            type="text"
            dense
            class="col-4"
            style="width: 300px; display: inline-block"
          />
          identificado(a) con
          <q-input
            v-model="reg.tipo_id"
            disable
            type="text"
            dense
            class="col-2"
            style="width: 80px; display: inline-block"
          />
          N°
          <q-input
            v-model="reg.cedula"
            disable
            type="text"
            dense
            class="col-2"
            style="display: inline-block"
          />
          obrando en la calidad abajo indicada, hago la siguiente declaración: Por medio del presente
          documento, en forma libre, en pleno uso de mis facultades mentales y sin limitaciones o impedimentos
          de carácter médico o legal, habiendo recibido información por parte del médico tratante sobre las
          condiciones médicas, he decido solicitar MI ALTA VOLUNTARIA del servicio de
          <q-input
            v-model="servicio"
            type="text"
            dense
            class="col-2"
            style="width: 400px; display: inline-block"
          />
          DE LA ESE SALUD YOPAL, motivo por el cual eximo de toda responsabilidad al Hospital y asumo las
          consecuencias que se deriven de esta decisión.
        </p>
      </div>
      <div class="row">
        <p>CALIDAD EN LA QUE SE OTORGA ESTE CONSENTIMIENTO: Como paciente: SI</p>
        <div class="q-mb-md" style="border-bottom: 2px solid lightgray; width: 2.5%"></div>
        <p>NO</p>
        <div class="q-mb-md" style="border-bottom: 2px solid lightgray; width: 2.5%"></div>
        <p>Como responsable del paciente: (Padre o Madre si es</p>
      </div>
      <div class="row" style="margin-top: -15px">
        <p>
          menor; representante legal, familiar o representante u otras personas que figuren como tales en la
          H. C.) SI
        </p>
        <div class="q-mb-md" style="border-bottom: 2px solid lightgray; width: 2.5%"></div>
        <p>NO</p>
        <div class="q-mb-md" style="border-bottom: 2px solid lightgray; width: 2.5%"></div>
      </div>
      <div class="row">
        <p>Fecha de notificación: </p>
        <q-input v-model="reg.fecha_notificacion" disable dense type="date" class="col-2" />
      </div>
      <div class="row">
        <p>
          Certifico que he explicado los riesgos de alta voluntaria y he contestado todas las preguntas.
          Considero que el (la) paciente, pariente/representante comprenden completamente lo que he explicado.
        </p>
      </div>
      <div class="row">
        <p>OTRAS CONSIDERACIONES</p>
        <textarea class="col-12" v-model="otras_considera" style="resize: none; height: 130px"></textarea>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row justify-center">
        <q-space />
        <q-btn color="green" icon-right="check_circle" label="Aceptar" @click="btnAceptar" />
        <q-space />
      </div>
    </q-card-section>
    <q-card-actions v-if="aceptar" align="around" class="row" style="margin-top: 10px; margin-bottom: 15px">
      <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="PACIENTE" />
      <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="TUTOR" />
      <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="PROFESIONAL" />
    </q-card-actions>
    <div style="height: 5px"></div>
  </q-card>
</template>
<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";
const titulo = ref(
  "Consentimiento de PYP - Consentimiento informado ingreso a modalidad de Tratamiendo Directamente Observado TDO Virtual"
);
const ContFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));

function CallBackFirma(param, data) {
  console.log("🚀 ~ CallBackFirma ~ param:", param);

  console.log("🚀 ~ CallBackFirma ~ data:", data);
}

const aceptar = ref(false);

const servicio = ref("");
const otras_considera = ref("");

const reg = {
  paciente: null,
  tipo_id: null,
  cedula: null,
};

const btnAceptar = () => {
  aceptar.value = !aceptar.value;
};
</script>
<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
}
.custom-q-list .q-item {
  margin: 0;
}
</style>
