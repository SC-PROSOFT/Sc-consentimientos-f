<template>
  <!-- <Header_ :titulo="titulo" /> -->
  <q-card class="q-mx-auto q-ma-xl justify-center format">
    <q-card-section>
      <div class="row">
        <p>Historia clínica numero:</p>
        <q-input type="text" disable dense v-model="reg.hc" class="col-2 input-p" />
      </div>
      <div class="row">
        <p>
          Ciudad:
          <q-input type="text" disable v-model="reg.ciudad" dense class="col-2 input-p" />
        </p>
        <p>
          Fecha:
          <q-input v-model="reg.fecha" disable dense type="date" class="col-2 input-p" />
        </p>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <p style="font-weight: bold">
          Es deber de todo de todo profesional advertir oportunamente los riesgos que pueden derivarse del
          tratamiento que será practicado y a los que se expone teniendo en cuenta la solicitud de su médico
          tratante, solicitando el consentimiento informado ley 23 del 1981 (art 15 y 16).
        </p>
      </div>
      <div class="row">
        <p style="font-weight: bold">INFORMACION</p>
        <p style="font-weight: bold; margin-top: -10px">
          A continuación, se explica el proceso del examen el cual le van a practicar teniendo en cuenta la
          solicitud del médico tratante, es una exploración radiológica, en forma de RX, con el fin de
          proporcionar información diagnostica y tratar su enfermedad.
        </p>
      </div>
      <div class="row">
        <p>
          Yo
          <q-input v-model="reg.paciente" disable type="text" dense class="col-4 input-p" />
        </p>
        <p>
          identificada con cédula de ciudadanía No.
          <q-input v-model="reg.cedula" disable type="text" dense class="col-2 input-p" />
        </p>
        <p>
            de
            <q-input v-model="reg.expedicion" disable type="text" dense class="col-2 input-p" />
        </p>
        <p style="margin-top: -5px">
            en forma voluntaria y en pleno uso de mis facultades mentales y psíquicas sin presión o inducción
            alguna, doy el consentimiento E.S.E salud Yopal -Hospital Central de Yopal, realice toma de RX.
            Acepto sus riesgos e imprevistos. Entiendo lo que he leído, se me ha explicado verbalmente y por
            escrito acerca del procedimiento, los cuidados que debo tener uso del chaleco plomado, los riesgos
            justificados y previsibles. También se me ha dado la oportunidad de preguntar y resolver dudas y
            recibí información del tecnólogo de radiología de nombre:
            <q-input v-model="reg.nombre_radiologo" disable type="text" dense class="col-2 input-p" />
        </p>
        <p>
          CC
          <q-input v-model="reg.cedula_radiologo" disable type="text" dense class="col-2 input-p" />
        </p>
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";

const ContFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));

const revocar_motivos = ref("");

const reg = {
  hc: null,
  paciente: null,
  cedula: null,
  expedida: null,
  identificacion_doc: null,
  nombre_doc: null,
  procedimiento: "COLPOSCOPIA",
  cup: "702203",
};

function CallBackFirma(param, data) {
  console.log("🚀 ~ CallBackFirma ~ param:", param);
  console.log("🚀 ~ CallBackFirma ~ data:", data);
}

const btnDisentir = () => {
  disentir.value = !disentir.value;
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
