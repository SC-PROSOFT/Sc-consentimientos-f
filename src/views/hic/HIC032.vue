<template>
  <q-card class="q-mx-auto format">
    <q-card-section>
      <div class="row">
        <p>Historia clínica numero:</p>
        <q-input readonly type="text" dense v-model="hc" class="col-1" />
      </div>
      <div class="row">
        <p>Ciudad:</p>
        <q-input readonly type="text" dense class="col-1" />
        <p>fecha:</p>
        <q-input readonly type="text" dense class="col-1" v-model="datos.fecha_act" />
      </div>

      <div class="row">
        <p>Yo,</p>
        <q-input readonly v-model="reg_firmador.descrip" type="text" dense class="col-4" />
        <p>, identificado (a) con cedula numero</p>
        <q-input readonly type="text" dense class="col-2" v-model="reg_firmador.cod" />
        <p>expedida en</p>
        <q-input readonly type="text" dense class="col-2" v-model="reg_firmador.descrip_ciudad" />
        <p>actuando en nombre propio o como acudiente de</p>
        <q-input readonly type="text" dense class="col-1" v-model="acudiente" />
        <p>.</p>
        <p>
          Comprendo que durante el procedimiento pueden aparecer circunstancias imprevisibles o inesperadas,
          que pueden requerir una extensión de otro procedimiento; acepto que las ciencias de la salud no son
          una ciencia exacta, que se garantizan resultados en la atención, y que aunque son procedimientos
          seguros pueden presentarse complicaciones como:
        </p>
        <q-input
          placeholder="Ingrese complicaciones"
          maxlength="200"
          type="textarea"
          class="col-12"
          autogrow
          v-model="HIC032.complicaciones"
          dense
        />
      </div>
    </q-card-section>
    <q-card-section>
      <p>
        Me han explicado también que de negarme a realizarme los exámenes diagnósticos, procedimientos y/o
        tratamientos ordenados, estoy asumiendo la responsabilidad por sus consecuencias, con lo que exonero
        de ellas el quipo asistencial tratante y la institución, sin embargo ello no significa que pierda mis
        derechos para una atención posterior.
      </p>
      <p>
        Se me ha informado que en la ESE salud Yopal, cuenta con personal idóneo, competente y capacitado para
        la determinación de conductas terapéuticas que contribuyan a mejorar mi calidad de vida y salud. Doy
        constancia de que se me ha explicado en lenguaje sencillo claro, y entendible para mí, los aspectos
        relacionados con mi condición actual, los riesgos y beneficios de los procedimientos; se me ha
        permitido hacer todas las preguntas necesarias, y han sido resueltas satisfactoriamente.
      </p>
      <p>
        Por lo tanto, en forma consciente y voluntaria, sin haber sido objeto de coacción, persuasión, ni
        manipulación:
      </p>
      <div class="row">
        <p>
          <ins class="text-bold">Autorizo</ins> al personal asistencial de la ESE Salud Yopal, para la
          realización de los procedimientos de salud: <q-input type="text" dense class="input-p" v-model="HIC032.procedimiento"  />, cuyo
          objetivo es: <q-input type="text" dense class="input-p" /> ante el diagnostico
          <q-input type="text" dense class="input-p" v-model="HIC032.objetivo"/>
        </p>
      </div>
      <div class="row">
        <p>
          Expreso mi voluntad de <ins class="text-bold">revocar</ins> el consentimiento presentado y declaro
          por tanto que, tras la información recibida, no consiento someterme al procedimiento de:
          <q-input type="text" dense class="input-p" v-model="HIC032.revocar_procedim" /> por los siguientes motivos:
          <q-input type="text" dense class="col-8 input-p"  v-model="HIC032.revocar_motivos" />
        </p>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-actions align="around" class="row">
      <ContainerFirma
        @reciFirma="callBackFirma"
        firmador="Joan Sebastian Quintero Nieto"
        quien_firma="FIRMA TUTOR O FAMILIAR"
        class="col-3"
      />
      <ContainerFirma
        @reciFirma="callBackFirma"
        firmador="Fernanda Quintero"
        quien_firma="FIRMA PACIENTE"
        class="col-3"
      />
    </q-card-actions>
    <div class="row justify-center q-my-lg">
      <q-btn
        class="q-mx-md"
        :disable="firma_recibida"
        color="green"
        icon-right="check_circle"
        label="Aceptar"
        @click="btnAceptar"
      />
      <q-btn
        class="q-mx-md"
        :disable="firma_recibida"
        color="amber"
        icon-right="block"
        label="Disentir"
        @click="btnDisentir"
      />
    </div>
  </q-card>
</template>

<script setup>
import { ref, reactive, defineAsyncComponent } from "vue";
import { useModuleFormatos } from "@/store";

const ContainerFirma = defineAsyncComponent(() => import("../../components/global/containerFirma.vue"));

const { reg_paci, reg_acomp, reg_prof, datos } = useModuleFormatos();

const reg_firmador = ref(reg_acomp.cod ? reg_acomp : reg_paci);
const acudiente = ref(reg_acomp.cod ? reg_acomp.descrip : "");
const hc = ref("123456789");

const firma_recibida = ref("");

const HIC032 = reactive({
  autorizo: false,
  revocar: false,

  complicaciones: "",
  procedimiento: "",
  objetivo: "",
  diagnostico: "",
  revocar_procedim: "",
  revocar_motivos: "",
});

const disentir = ref(false);
const aceptar = ref(false);

function btnDisenti() {
  disentir.value = !disentir.value;
}

function btnAceptar() {
  aceptar.value = !aceptar.value;
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
