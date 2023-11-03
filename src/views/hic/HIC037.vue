<template>
  <!-- <Header_ :titulo="titulo" /> -->
  <q-card class="q-mx-auto q-ma-xl justify-center format">
    <q-card-section>
      <div class="row">
        <p>Historia clínica numero:</p>
        <q-input type="text" disable dense v-model="reg.hc" class="col-2" />
      </div>
      <div class="row">
        <p>Ciudad:</p>
        <q-input type="text" disable v-model="reg.ciudad" dense class="col-2" />
        <p>Fecha:</p>
        <q-input v-model="reg.fecha" disable dense type="date" class="col-1.5" />
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
        <p>Yo</p>
        <q-input v-model="reg.paciente" disable type="text" dense class="col-3" style="width: 300px;"/>
        <p>identificada con cédula de ciudadanía No.</p>
        <q-input v-model="reg.cedula" disable type="text" dense class="col-2" style="width: 150px;"/>
        <p>de</p>
        <q-input v-model="reg.expedicion" disable type="text" dense class="col-2" />
        <p style="margin-top: -5px">
          en forma voluntaria y en pleno uso de mis facultades mentales y psíquicas sin presión o inducción
          alguna, doy el consentimiento E.S.E salud Yopal -Hospital Central de Yopal, realice toma de RX.
          Acepto sus riesgos e imprevistos. Entiendo lo que he leído, se me ha explicado verbalmente y por
          escrito acerca del procedimiento, los cuidados que debo tener uso del chaleco plomado, los riesgos
          justificados y previsibles. También se me ha dado la oportunidad de preguntar y resolver dudas y
          recibí información del tecnólogo de radiología de nombre:
          <q-input v-model="reg.nombre_radiologo" disable type="text" dense class="col-2" style="width: 300px;display: inline-block;"/>
          CC
          <q-input v-model="reg.cedula_radiologo" disable type="text" dense class="col-2" style="display: inline-block;"/>
        </p>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row justify-center">
        <q-space />
        <q-btn color="green" icon-right="check_circle" label="Aceptar" @click="btnAceptar" />
        <q-space />
        <!-- <q-btn color="red" icon-right="cancel" label="Canecelar" /> -->
        <q-space />
        <q-btn color="amber" icon-right="block" label="Disentir" @click="btnDisentir" />
        <q-space />
      </div>
    </q-card-section>
    <q-card-section v-if="disentir">
      <div class="q-mt-md q-mb-md row justify-center">
        <span style="font-weight: bold">DISENTIMIENTO</span>
      </div>
      <div class="row">
        <p>
          Expreso mi voluntad de <span style="font-weight: bold; text-decoration: underline">revocar</span> el
          consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento
          someterme al procedimiento de pruebas radiologicas, por los siguientes motivos:
        </p>
        <textarea
          class="col-12"
          v-model="revocar_motivos"
          style="resize: none; height: 100px"
        ></textarea>
      </div>
    </q-card-section>
    <q-card-actions v-if="aceptar" align="around" class="row" style="margin-top: 10px; margin-bottom: 15px">
      <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="PACIENTE" />
      <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="TUTOR" />
      <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="PROFESIONAL" />
    </q-card-actions>
    <div style="height: 5px"></div>
  </q-card>
  <div style="height: 1px"></div>
</template>
<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";

const ContFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));

const revocar_motivos = ref("");

const disentir = ref(false);
const aceptar = ref(false);

const reg = {
  hc: null,
  ciudad: null,
  fecha: null,
  paciente: null,
  cedula: null,
  expedida: null,
  nombre_radiologo: null,
  cedula_radiologo: null,
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
