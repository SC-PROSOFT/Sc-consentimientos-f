<template>
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
    <q-card-section>
      <div class="row">
        <p>Yo,</p>
        <q-input v-model="reg.paciente" disable type="text" dense class="col-4" />
        <p>identificado(a) con</p>
        <q-input v-model="reg.tipo_id" disable type="text" dense class="col-2" />
        <p>N°</p>
        <q-input v-model="reg.cedula" disable type="text" dense class="col-2" />
        <p style="margin-top: -5px;">
          , mayor de edad o representante legal, autorizo y me comprometo a ingresar a la modalidad de
          tratamiento de tuberculosis denominada TDO Virtual, mediante el uso de tecnologías de la información
          y comunicaciones como soporte a la administración del tratamiento antituberculoso, para lo cual se
          me ha informado, los aspectos claves de adherencia al tratamiento, los derechos y deberes y he dado
          lectura cuidadosa a los siguientes aspectos:
        </p>
      </div>
      <div class="q-mt-md row">
        <span style="font-weight: bold">¿Qué es la modalidad de tratamiento TDO virtual?</span>
      </div>
      <div class="row">
        Acorde a la Resolución 227 de 2020, el TDO virtual es una modalidad utilizada para el tratamiento de
        la tuberculosis, la cual consiste en el monitoreo y seguimiento continuo de la administración del
        tratamiento mediante el uso de tecnologías de información y comunicaciones, tales como video llamadas,
        registro de video, mensajes de texto, previa evaluación realizada por parte del trabajador de la
        salud.
      </div>
      <div class="q-mt-md row">
        <span style="font-weight: bold">¿Cuáles son los requisitos para acceso a esta modalidad?</span>
      </div>
      <div class="row">
        <p>
          Se me ha informado que para acceder a esta modalidad de tratamiento, debo contar con acceso a
          tecnologías de información y comunicaciones tales como internet, teléfono inteligente o computador,
          con acceso a internet video llamadas, videos cortos diferidos, y mensajería de texto SMS. Así mismo,
          hago constar que tengo disponibilidad de tiempo diario, para que el equipo de salud pueda constatar
          la toma de la medicación. La administración del tratamiento con supervisión virtual parte de los
          principios de autonomía, autocuidado, y responsabilidad en la toma sin interrupciones de los
          medicamentos, el cumplimiento a citas presenciales o virtuales de control y demás consideraciones
          brindadas por el equipo de salud tratante.
        </p>
      </div>
      <div class="q-mt-md row">
        <span style="font-weight: bold">¿Cuáles son los beneficios de acceso a esta modalidad?</span>
      </div>
      <div class="row">
        <p>
          Él acceso al TDO virtual trae beneficios relacionados con la disminución de tiempos de
          desplazamiento diarios a la toma de tratamiento en la IPS, reducción de costos económicos, facilidad
          y comodidad de toma en su lugar de trabajo, estudio, hogar.
        </p>
      </div>
      <div class="q-mt-md row">
        <span style="font-weight: bold"
          >¿Cuáles son los riesgos o aspectos por los cuales debo consultar?</span
        >
      </div>
      <div class="row">
        <p>
          Para el ingreso a esta modalidad, el personal de salud le informara los aspectos relacionados a la
          toma de medicamentos, dosificación, reacciones adversas a fármacos y signos de peligro. La modalidad
          de TDO implica informar al trabajador de la salud cualquier signo de alarma tales como; rasquiña,
          picor en la piel, nauseas, vómito, mareo, coloración amarilla de la piel. No deberá suspender el
          medicamento bajo ninguna circunstancia sin indicación médica, no disminuir o a dosis de medicamento,
          dado a que puede ocasionar una resistencia de la bacteria a derivar en una complicación de su estado
          de salud.
        </p>
      </div>
      <div class="row">
        <p>
          Se me ha informado que los datos de identificación, registros de videos, mensajes de texto serán
          almacenados para fines de soportar el cumplimiento a la toma de medicación hasta por dos años, para
          lo cual, se protegerán mis datos personales conforme a la política de protección de datos y
          seguridad en la información.
        </p>
      </div>
      <div class="row">
        <p>En constancia firma,</p>
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
          someterme al procedimiento de ingreso a la modalidad TDO por los siguientes motivos:
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
const titulo = ref("Consentimiento de PYP - Consentimiento informado ingreso a modalidad de Tratamiendo Directamente Observado TDO Virtual");
const ContFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));

function CallBackFirma(param, data) {
  console.log("🚀 ~ CallBackFirma ~ param:", param);

  console.log("🚀 ~ CallBackFirma ~ data:", data);
}

const disentir = ref(false);
const aceptar = ref(false);

const revocar_motivos = ref("");

const reg = {
  paciente: null,
  tipo_id: null,
  cedula: null,
};

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