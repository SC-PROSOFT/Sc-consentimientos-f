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
        <q-input readonly type="text" dense class="col-2" v-model="acudiente" />
        <p>.</p>
        <p>
          Comprendo que durante el procedimiento pueden aparecer circunstancias imprevisibles o inesperadas,
          que pueden requerir una extensión de otro procedimiento; acepto que las ciencias de la salud no son
          una ciencia exacta, que se garantizan resultados en la atención, y que aunque son procedimientos
          seguros pueden presentarse complicaciones como:
        </p>
        <q-input
          placeholder="Ingrese complicaciones"
          v-model="HIC032.complicaciones"
          maxlength="380"
          type="textarea"
          class="col-12"
          autogrow
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
          realización de los procedimientos de salud:
          <q-input type="text" dense class="input-p" v-model="HIC032.procedimiento" />, cuyo objetivo es:
          <q-input type="text" dense class="input-p" v-model="HIC032.objetivo" maxlength="285" /> ante el
          diagnostico
          <q-input type="text" dense class="input-p" v-model="HIC032.diagnostico" maxlength="4" />
        </p>
      </div>
      <div class="row" v-if="HIC032.revocar">
        <p>
          Expreso mi voluntad de <ins class="text-bold">revocar</ins> el consentimiento presentado y declaro
          por tanto que, tras la información recibida, no consiento someterme al procedimiento de:
          <q-input
            type="text"
            dense
            class="input-p"
            v-model="HIC032.revocar_procedim"
            maxlength="285"
            ref="revocar"
          />
          por los siguientes motivos:
          <q-input type="text" dense class="col-8 input-p" v-model="HIC032.revocar_motivos" maxlength="285" />
        </p>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-actions align="around" class="row">
      <ContainerFirma
        :disable="getAcomp?.cod ? true : false"
        quien_firma="FIRMA PACIENTE"
        :firmador="getPaci.descrip"
        @reciFirma="callBackFirma"
        class="col-4"
      />
      <ContainerFirma
        :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
        :disable="getAcomp?.cod ? false : true"
        quien_firma="FIRMA TUTOR O FAMILIAR"
        @reciFirma="callBackFirma"
        class="col-4"
      />
    </q-card-actions>
    <div class="row justify-center q-my-lg">
      <q-btn
        class="q-mx-md"
        color="green-10"
        icon-right="check_circle"
        label="Autorizo"
        @click="btnAceptar"
      />
      <q-btn @click="btnRevocar" icon-right="block" label="Revocar" class="q-mx-md" color="red-10" />
    </div>
  </q-card>
</template>

<script setup>
import { ref, reactive, defineAsyncComponent } from "vue";
import { useModuleFormatos } from "@/store";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/ContainerFirma.vue"));

const { getPaci, getAcomp, getHc, getProf, getEmpresa, datos } = useModuleFormatos();
const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);
const acudiente = ref(getAcomp.cod ? getAcomp.descrip : "");
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

const revocar = ref(null);

function btnRevocar() {
  HIC032.revocar = true;
  setTimeout(() => revocar.value.focus(), 100);
}

function btnAceptar() {}

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
