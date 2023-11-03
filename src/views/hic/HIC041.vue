<template>
  <q-card class="q-mx-auto format">
    <q-card-section>
      <div class="row">
        <p>Historia clínica numero:</p>
        <q-input readonly type="text" dense v-model="reg.hc" class="col-1" />
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
        <p>Yo</p>
        <q-input v-model="reg.paciente" disable type="text" dense class="col-3" style="width: 300px" />
        <p>identificado(a) con cédula numero.</p>
        <q-input v-model="reg.cedula" disable type="text" dense class="col-2" style="width: 150px" />
        <p>expedida en</p>
        <q-input v-model="reg.expedicion" disable type="text" dense class="col-2" />
        <p>actuando en nombre propio o como acudiente de</p>
        <q-input v-model="reg.nombre_acompnte" disable type="text" dense class="col-3" />
        <!-- <p style="margin-top: -5px"> -->
      </div>
      <div class="row">
        <p>
          Comprendo que durante el procedimiento pueden aparecer circunstancias imprevisibles o inesperadas,
          que pueden requerir una extensión de otro procedimiento; acepto que las ciencias de la salud no son
          una ciencia exacta, que se garantizan resultados en la atención, y que aunque son procedimientos
          seguros pueden presentarse complicaciones como:
        </p>
        <textarea class="col-12" v-model="complicaciones" style="resize: none; height: 100px"></textarea>
      </div>
      <div class="row">
        <p>
          Me han explicado también que de negarme a realizarme los exámenes diagnósticos, procedimientos y/o
          tratamientos ordenados, estoy asumiendo la responsabilidad por sus consecuencias, con lo que exonero
          de ellas el quipo asistencial tratante y la institución, sin embargo ello no significa que pierda
          mis derechos para una atención posterior.
        </p>
        <p>
          Se me ha informado que en la ESE salud Yopal, cuenta con personal idóneo, competente y capacitado
          para la determinación de conductas terapéuticas que contribuyan a mejorar mi calidad de vida y
          salud. Doy constancia de que se me ha explicado en lenguaje sencillo claro, y entendible para mí,
          los aspectos relacionados con mi condición actual, los riesgos y beneficios de los procedimientos;
          se me ha permitido hacer todas las preguntas necesarias, y han sido resueltas satisfactoriamente.
        </p>
      </div>
      <div class="row">
        <p>
          Por lo tanto, en forma consciente y voluntaria, sin haber sido objeto de coacción, persuasión, ni
          manipulación:
        </p>
      </div>
      <div class="q-ml-xl row">
        <p>
          <q-checkbox style="margin-top: -5px; margin-left: 20px" disable v-model="aceptar" />
          <ins>Autorizo</ins> al personal asistencial de la ESE Salud Yopal, para la realización de los
          procedimientos de salud:
        </p>
      </div>
      <div class="row" style="margin-left: 110px; margin-top: -20px">
        <q-input v-model="procedimiento" type="text" dense class="col-8" />
        <p>, cuyo objetivo es:</p>
        <q-input v-model="objetivo" type="text" dense class="col-8" />
        <p>, ante el diagnostico</p>
        <q-input v-model="diagnostico" type="text" dense class="col-4" />
      </div>
    </q-card-section>
    <q-card-section v-if="disentir">
      <div class="q-ml-xl row">
        <p>
          <q-checkbox style="margin-top: -5px; margin-left: 20px" disable v-model="disentir" />
          Expreso mi voluntad de <ins>revocar</ins>el consentimiento presentado y declaro por tanto que, tras
          la información recibida,
        </p>
      </div>
      <div class="row" style="margin-left: 110px; margin-top: -20px">
        <p>no consiento someterme al procedimiento de:</p>
      </div>
      <div class="row" style="margin-left: 110px; margin-top: -20px">
        <q-input v-model="revocar_procedim" type="text" dense class="col-8" />
        <p>, por los siguientes motivos:</p>
      </div>
      <div class="row" style="margin-left: 110px">
        <textarea
          class="q-mt-md col-12"
          v-model="revocar_motivos"
          style="resize: none; height: 100px; width: 770px"
        ></textarea>
      </div>
    </q-card-section>
    <q-card-actions align="around" class="row" style="margin-top: 10px; margin-bottom: 15px">
      <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="PACIENTE" />
      <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="TUTOR" />
      <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="PROFESIONAL" />
    </q-card-actions>
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
  </q-card>
  <div style="height: 50px"></div>
</template>
<script setup>
import { ref, reactive, defineAsyncComponent } from "vue";

const ContFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));

const complicaciones = ref("");
const procedimiento = ref("");
const objetivo = ref("");
const diagnostico = ref("");
const disentir = ref(false);
const aceptar = ref(false);

const reg = {
  hc: null,
  ciudad: null,
  fecha: null,
  paciente: null,
  cedula: null,
  expedicion: null,
  nombre_acompnte: null,
};

function btnDisentir() {
  disentir.value = !disentir.value;
  if (aceptar.value) aceptar.value = !aceptar.value;
}

function btnAceptar() {
  aceptar.value = !aceptar.value;
  if (disentir.value) disentir.value = !disentir.value;
}

function callBackFirma(dataF) {
  firma_recibida.value = dataF;
}
</script>

<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
