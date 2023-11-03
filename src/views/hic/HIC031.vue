<template>
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
    <q-card-section>
      <div class="row">
        <p>Historia clínica numero:</p>
        <q-input type="text" disable dense v-model="reg.hc" class="col-2" />
      </div>
      <div class="row">
        <p>Ciudad:</p>
        <q-input type="text" disable v-model="reg.ciudad" dense class="col-2 q-mr-md" />
        <p>Fecha:</p>
        <q-input v-model="reg.fecha" disable dense type="date" class="col-2" />
      </div>
    </q-card-section>
    <q-card-section>
      <h6 style="margin: 0">LA COLPOSCOPIA</h6>
      <div class="row">
        <p class="text-justify">
          Es un examen sencillo del cuello, vagina y vulva, similar a la toma de citología cervicouterina,
          donde se realiza observación con un microscopio especial que permite visualizar los cambios
          ocurridos en el cuello del útero. Para ayudarnos durante este examen se utilizan sustancias que
          facilitan el reconocimiento de estas lesiones. Cuando el ginecólogo visualiza las lesiones
          sospechosas procede a tomar una muestra pequeña (biopsia) para posteriormente ser analizado por un
          patólogo. Normalmente puede presentar sangrado y dolor durante el procedimiento
        </p>
      </div>
      <p style="margin: 0; font-weight: bold">Riesgos de la colposcopia:</p>
      <q-list bordered>
        <q-item>
          <q-item-section>
            <q-item-label>1. Molestias producidas por las soluciones aplicadas.</q-item-label>
            <q-item-label>2. Calambres, picadas o leve dolor.</q-item-label>
            <q-item-label
              >3. Sangrado mínimo durante varios días. Si es moderado se dejará una gasa para retirarla 6
              horas después</q-item-label
            >
            <q-item-label>4. Infección</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <div class="row">
        <p>Yo</p>
        <q-input v-model="reg.paciente" disable type="text" dense class="col-4" />
        <p>identificado (a) con cédula número</p>
        <q-input v-model="reg.cedula" disable type="text" dense class="col-2" />
        <p>de</p>
        <q-input v-model="reg.expedida" disable type="text" dense class="col-2" />
        <p class="text-justify">
          en forma voluntaria y en pleno uso de mis facultades mentales y psíquicas sin
        </p>
        <p class="text-justify"  style="margin-top: -5px;">
          presión o inducción alguna, doy el consentimiento para que el ginecólogo de la E.S.E salud Yopal
          -Hospital local de Yopal, realice el procedimiento de colposcopia y biopsia. Acepto sus riesgos e
          imprevistos. Entiendo lo que he leído, se me ha explicado verbalmente y por escrito acerca del
          procedimiento, los cuidados que debo tener antes y después de la colposcopia, los riesgos
          justificados y previsibles. También se me ha dado la oportunidad de preguntar y resolver dudas.
          Entiendo que este procedimiento puede traer efectos adversos, como infección y sangrado, propias del
          procedimiento que aquí autorizo, los cuales asumo bajo mi responsabilidad.
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
        <p style="margin: 0; font-weight: bold">FIRMA DE LA USUARIA:</p>
        <div class="q-ml-xs" style="border-bottom: 2px solid lightgray; width: 30%"></div>
      </div>

      <div class="row">
        <p style="font-weight: bold">NOMBRE Y FIRMA DEL GINECÓLOGO:</p>
        <q-input v-model="reg.nombre_doc" disable type="text" label="Nombre doctor" dense class="col-4" />
        <div
          class="q-ml-md q-mr-md"
          style="border-bottom: 2px solid lightgray; width: 18%; margin-bottom: 7px"
        ></div>
        <q-input
          v-model="reg.identificacion_doc"
          disable
          type="text"
          label="R.P.N°"
          dense
          class="col-2"
        />
      </div>

      <div class="row">
        <p>
          Expreso mi voluntad de <span style="font-weight: bold; text-decoration: underline">revocar</span> el
          consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento
          someterme al procedimiento de {{ reg.procedimiento }} por los siguientes motivos:
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
  <!-- Spacer final de hoja -->
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";

const titulo = ref("Consentimiento de PYP - Consentimiento informado para COLPOSCOPIA");

const ContFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));

function CallBackFirma(param, data) {
  console.log("🚀 ~ CallBackFirma ~ param:", param);

  console.log("🚀 ~ CallBackFirma ~ data:", data);
}

const disentir = ref(false);
const aceptar = ref(false);

const revocar_motivos = ref("") 

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
