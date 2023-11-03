<template>
  <Header_ :titulo="titulo" />
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 60%">
    <q-card-section>
      <h6 class="text-center" style="margin: 0; font-size: 16px">
        ASESORIA PRE TEST VIH (VIRUS DE INMUNODEFICIENCIA HUMANA)
      </h6>
      <div class="q-mt-md" style="max-width: 580px">
        <q-list bordered>
          <q-item tag="label" style="margin-top: -10px" v-ripple>
            <q-item-section>
              <q-item-label>1. ¿Sabe que es el VIH/SIDA?</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="primary" keep-color v-model="vih" />
            </q-item-section>
          </q-item>
          <q-item tag="label" style="margin-top: -22px" v-ripple>
            <q-item-section>
              <q-item-label>2. ¿Ha tenido relaciones con personas portadoras de VIH/SIDA?</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="primary" keep-color v-model="relaciones" />
            </q-item-section>
          </q-item>
          <q-item tag="label" style="margin-top: -22px" v-ripple>
            <q-item-section>
              <q-item-label>3. ¿Se inyecta sustancias psicoactivas?</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="primary" keep-color v-model="inyec_sust_psico" />
            </q-item-section>
          </q-item>
          <q-item tag="label" style="margin-top: -22px" v-ripple>
            <q-item-section>
              <q-item-label
                >4. ¿Usa algún método de protección cuando tiene relaciones sexuales?</q-item-label
              >
            </q-item-section>
            <q-item-section side>
              <q-toggle color="primary" keep-color v-model="proteccion_rel_sex" />
            </q-item-section>
          </q-item>
          <q-item tag="label" style="margin-top: -22px" v-ripple>
            <q-item-section>
              <q-item-label>5. ¿Ha tenido los siguientes sintomas?</q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="q-ml-xl" style="margin-top: -22px" tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Pérdida de peso</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="primary" keep-color v-model="perdida_peso" />
            </q-item-section>
          </q-item>
          <q-item class="q-ml-xl" style="margin-top: -22px" tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Fiebre frecuente</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="primary" keep-color v-model="fiebre_frec" />
            </q-item-section>
          </q-item>
          <q-item class="q-ml-xl" style="margin-top: -22px" tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Diarrea permanente</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="primary" keep-color v-model="diarrea_perm" />
            </q-item-section>
          </q-item>
          <q-item class="q-ml-xl" style="margin-top: -22px" tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Infección por hongos y herpes</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="primary" keep-color v-model="infeccion_hon_her" />
            </q-item-section>
          </q-item>
          <q-item tag="label" style="margin-top: -22px" v-ripple>
            <q-item-section>
              <q-item-label>6. ¿Ha sido transfundido en los últimos años?</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle color="primary" keep-color v-model="tranfundido" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="q-mt-md row">
        <textarea
          class="col-12"
          v-model="observaciones"
          style="resize: none; height: 100px"
        ></textarea>
      </div>
      <div class="row">
        <p style="font-weight: bold">Nombre y firma de quien hizo la asesoría:</p>
        <q-input v-model="nombre_asesoria" disable type="text" label="Nombre doctor" dense class="col-4" />
        <div
          class="q-ml-md q-mr-md"
          style="border-bottom: 2px solid lightgray; width: 20%; margin-bottom: 7px"
        ></div>
      </div>
    </q-card-section>
    <q-card-section>
      <h6 class="text-center" style="margin: 0; font-size: 16px">
        CONSENTIMIENTO INFORMADO PARA REALIZAR LA PRUEBA PRESUNTIVA O DIAGNOSTICA DE VIH (VIRUS DE
        INMUNODEFICIENCIA HUMANA)
      </h6>
      <div class="q-mt-md q-mb-xs row">
        <span style="font-weight: bold"
          >Este espacio debe ser diligenciado para niños (as) menores de 12 años</span
        >
      </div>
      <div class="row" style="border: 1px solid #ccc; padding: 5px">
        <p>Yo</p>
        <q-input
          v-model="reg.nombre_representante"
          disable
          type="text"
          label="Nombre paciente"
          dense
          class="col-4"
        />
        <p>mayor de edad, identificado (a) con C.C. No.</p>
        <q-input v-model="reg.cedula_representante" disable label="Cédula" type="text" dense class="col-2" />
        <p>expedida en</p>
        <q-input
          v-model="reg.expedida_representante"
          disable
          label="Ciudad expedición"
          type="text"
          dense
          class="col-2"
        />
        <p>en condición de representante legal o acudiente del niño(a)</p>
        <q-input v-model="reg.nombre_paciente" disable label="Nombre paciente" type="text" dense class="col-4" />
        <p>de</p>
        <q-input v-model="reg.anios_paciente" disable label="Años paci" type="text" dense class="col-1" />
        <p>Años de edad</p>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <span style="font-weight: bold">Este espacio es diligenciado mayores de 12 años</span>
      </div>
      <div class="row" style="border: 1px solid #ccc; padding: 5px">
        <p>Yo</p>
        <q-input v-model="reg.nombre_paciente" disable type="text" label="Nombre paciente" dense class="col-4" />
        <p>, identificado (a) con</p>
        <q-input v-model="reg.tipo_id" disable label="Tipo id" type="text" dense class="col-2" />
        <p>No.</p>
        <q-input v-model="reg.cedula" disable label="Cédula" type="text" dense class="col-2" />
        <p>expedida en</p>
        <q-input v-model="reg.expedida" disable label="Ciudad expedición" type="text" dense class="col-2" />
        <p>Certifico que: He leído (o que se me ha leído) el documento sobre consentimiento</p>
        <p style="margin-top: -2px">
          informado que contiene información sobre el propósito y beneficio de la prueba, su interpretación,
          sus limitaciones, y su riesgo, y que entiendo su contenido, incluyendo las limitaciones, beneficios
          y riegos de la prueba.
        </p>
        <p>
          He recibido consejería PRE-PRUEBA (actividad realizada por un profesional de la salud para
          prepararme y confrontarme en relación a mis conocimientos, prácticos, y conductas, antes de
          realizarme las pruebas diagnósticas).
        </p>
        <p>
          También certifico que dicha persona me brindo la asesoría y que según su compromiso, de ella también
          recibiré una asesoría Post-prueba (procedimiento mediante el cual me entregaran mis resultados) y
          que estoy de acuerdo con el proceso.
        </p>
        <p>
          Entiendo que la toma de muestra es voluntaria y que no puedo retirar mi consentimiento en cualquier
          momento antes de que me sea tomada el examen.
        </p>
        <p>Fui informada de las medidas que se tomara para proteger la confidencialidad de mis resultados.</p>
      </div>
      <div class="row">
        <p>De lo anterior</p>
        <q-input v-model="reg.anterior" disable type="text" dense class="col-1" />
        <p>Autorizo a mi asesor para la realización de la prueba, procesamiento y reporte de la misma.</p>
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
        <span style="font-size: medium; font-weight: bold">DISENTIMIENTO</span>
      </div>
      <div class="row">
        <q-input v-model="reg.expreso" disable type="text" dense class="col-1" />
        <p>
          Expreso mi voluntad de <span style="font-weight: bold; text-decoration: underline">revocar</span> el
          consentimiento presentado y declaro por tanto
        </p>
        <p style="margin-top: -10px">que, tras la información recibida,</p>
        <p style="margin-top: -2px">
          no consiento someterme al procedimiento de
          <span style="font-weight: bold">VIH (VIRUS DE INMUNODEFICIENCIA HUMANA)</span> por los siguientes
          motivos:
        </p>
        <textarea
          class="col-12"
          v-model="revocar_motivos"
          style="resize: none; height: 100px"
        ></textarea>
      </div>
    <!-- </q-card-section>
    <q-card-section> -->
      <div class="row">
        <p style="font-weight: bold">Firma:</p>
        <div
          class="q-ml-md q-mr-md"
          style="border-bottom: 2px solid lightgray; width: 30%; margin-bottom: 7px"
        ></div>
      </div>
      <div class="row">
        <p style="font-weight: bold">Nombre:</p>
        <q-input v-model="reg.nombre_revoca" disable type="text" label="Nombre revoca" dense class="col-5" />
      </div>
      <div class="row">
        <p style="font-weight: bold">Identificación:</p>
        <q-input
          v-model="reg.identificacion_revoca"
          disable
          type="text"
          label="Identificación revoca"
          dense
          class="col-4"
        />
      </div>
      <div class="row">
        <p style="font-weight: bold">Fecha:</p>
        <q-input v-model="reg.fecha_revoca" disable type="text" label="Fecha revoca" dense class="col-2" />
      </div>
    </q-card-section>
    <q-card-actions v-if="aceptar" align="around" class="row" style="margin-top: 10px; margin-bottom: 15px">
      <ContFirma @reciFirma="CallBackFirma(1)" class="col-3" firmador="Santiago" quien_firma="PACIENTE" />
      <ContFirma @reciFirma="CallBackFirma(2)" class="col-3" firmador="Santiago" quien_firma="PROFESIONAL" />
    </q-card-actions>
    <div style="height: 5px"></div>
  </q-card>
  <div style="height: 1px"></div>
  <!-- Spacer final de hoja -->
</template>
<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";

const ContFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));

const titulo = ref("Consentimiento de PYP - Consentimiento informado prueba VIH");
const vih = ref("");
const relaciones = ref("");
const inyec_sust_psico = ref("");
const proteccion_rel_sex = ref("");
const perdida_peso = ref("");
const fiebre_frec = ref("");
const diarrea_perm = ref("");
const infeccion_hon_her = ref("");
const tranfundido = ref("");
const observaciones = ref("");
const nombre_asesoria = ref("");
const revocar_motivos = ref("");

const disentir = ref(false);
const aceptar = ref(false);

const reg = {
  nombre_asesoria: null,
  nombre_representante: null,
  cedula_representante: null,
  expedida_representante: null,
  nombre_paciente: null,
  anios_paciente: null,
  tipo_id: null,
  cedula: null,
  expedida: null,
  anterior: null,
  expreso: null,
  nombre_revoca: null,
  identificacion_revoca: null,
  fecha_revoca: null,

  procedimiento: "",
  cup: "",
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
