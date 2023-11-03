<template>
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
    <q-card-section>
      <div class="row">
        <p>Historia clínica numero:</p>
        <q-input type="text" disable dense v-model="reg.hc" class="col-2" />
        <p>Ciudad:</p>
        <q-input
          type="text"
          disable
          label="Ciudad elaboración"
          v-model="reg.ciudad"
          dense
          class="col-2 q-mr-md"
        />
        <p>Fecha:</p>
        <q-input v-model="reg.fecha" disable dense type="date" class="col-2" />
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <p class="text-justify">Yo</p>
        <q-input v-model="reg.paciente" disable type="text" label="Nombre paciente" dense class="col-4" />
        <p class="text-justify">de</p>
        <q-input v-model="reg.edad" disable type="text" label="Edad" dense class="col-1" />
        <p class="text-justify">años de edad, de genero</p>
        <q-input v-model="reg.genero" disable type="text" label="Genero" dense class="col-2" />
        <p class="text-justify">identificado(a) con</p>
        <!-- <div class="row" style="margin-top: -15px"> -->
        <p class="text-justify">documento de identidad N°</p>
        <q-input
          v-model="reg.identificacion"
          disable
          type="text"
          label="Número de identificación"
          dense
          class="col-2"
        />
        <p class="text-justify">expedida en</p>
        <q-input v-model="reg.expedida" disable type="text" label="Lugar de expedición" dense class="col-2" />
        <p class="text-justify">con residencia en</p>
        <q-input
          v-model="reg.residencia"
          disable
          type="text"
          label="Lugar de residencia"
          dense
          class="col-2"
        />
        <!-- </div> -->
        <!-- <div class="col-12 row" style="margin-top: 0px"> -->
        <p class="text-justify">teléfono número</p>
        <q-input v-model="reg.telefono" disable type="text" label="Teléfono" dense class="col-2" />
        <p class="text-justify">Actuando en nombre propio o como acudiente de</p>
        <q-input
          v-model="reg.paciente"
          disable
          type="text"
          label="Persona a cual representa"
          dense
          class="col-3"
        />
        <p>en mi calidad de paciente y en pleno uso de mis facultades mentales y de</p>
        <!-- </div> -->
        <div class="row" style="margin-top: -15px">
          <p class="text-justify">
            mis derechos de salud y habiendo solicitado por mi voluntad los servicios de salud a la empresa
            social del estado ESE salud Yopal, por medio del presente documento doy mi consentimiento
            informado para que se me brinden los cuidados correspondientes y se siga la conducta terapéutica
            según el criterio del profesional de salud tratante.
          </p>
        </div>
      </div>
      <!-- </q-card-section>
    <q-card-section> -->
      <div class="row">
        <p class="text-justify">
          Dejo constancia que he sido informado(a) y he recibido información y asesoría sobre el evento
        </p>
        <q-input v-model="evento" type="text" label="Evento" dense class="col-3" />
        <p class="text-justify">respecto del modo de contagio, estrategias y métodos de prevención,</p>
        <p class="text-justify" style="margin-top: -5px">
          importancia de diagnostico y tratamiento de la pareja de ser necesario a quien le informaré mi
          estado actual para que reciba la asesoría, tratamiento y seguimientos que se requieran para evitar
          reinfecciones y/o transmisión de la enfermedad a otras personas con quien se tenga contacto. Fui
          informado(a) de las acciones que se seguirán: tratamiento y controles que debo realizar posterior al
          tratamiento médico, al cual debo ser adherente, y recibir oportunamente y de manera adecuada; Por lo
          anterior me comprometo a seguir las indicaciones dadas por el profesional de la salud respecto al
          evento presentado, de no seguir las indicaciones los principales riesgos que se pueden presentar:
          resistencia a medicamentos, náuseas, mareos, vomito, gastritis, reinfecciones.
        </p>
      </div>
      <!-- </q-card-section>
    <q-card-section> -->
      <div class="row">
        <p class="text-justify">
          Me garantizan la confidencialidad de mis resultados y la información que he proporcionado. De lo
          anterior
        </p>
        <q-input v-model="iniciar_trata" type="text" label="Consentir" dense class="col-1" />
        <p class="text-justify">(SI, NO) acepto</p>
        <p class="text-justify" style="margin-top: -5px">
          iniciar tratamiento y realizar los controles y seguimientos que se requieran de acuerdo a la
          patología en curso. Por lo tanto, en forma consciente y voluntaria, luego de haber escuchado la
          información y explicaciones, sin haber sido objeto de coacción, persuasión, ni manipulación
          manifiesto lo siguiente
        </p>
      </div>
      <div class="row">
        <p>
          Me considero SATISFECHO con la información recibida y COMPRENDO la indicación, los beneficios,
          además de los riesgos y posibles complicaciones que podrían desprenderse de dicho acto.
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
  </q-card>
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
    <q-card-sections v-if="aceptar">
      <q-card-actions align="around" class="row" style="margin-top: 10px; margin-bottom: 15px">
        <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="PACIENTE" />
        <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="TUTOR" />
        <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="PROFESIONAL" />
      </q-card-actions>
      <div class="row" style="border: 0px solid #ccc; padding: 0px">
        <q-space />
        <div class="col-3 q-my-auto" style="border: 1px solid #ccc; padding: 1px; height: 200px">
          <div class="row">
            <p>Nombre del paciente:</p>
            <q-input
              v-model="reg.paciente"
              disable
              type="text"
              dense
              class="col-11 q-mx-auto"
              style="margin-top: -15px"
            />
          </div>
          <div class="row">
            <p>Documento del paciente:</p>
            <q-input
              v-model="reg.paciente"
              disable
              type="text"
              dense
              class="col-7 q-mx-auto"
              style="margin-top: -15px"
            />
          </div>
        </div>
        <q-space />
        <q-space />
        <div class="col-3 q-my-auto" style="border: 1px solid #ccc; padding: 1px; height: 200px">
          <div class="col-4 q-my-auto">
            <div class="row">
              <p>Nombre del tutor, representante o acompañante:</p>
              <q-input
                v-model="reg.nombre_tutor"
                disable
                type="text"
                dense
                class="col-11 q-mx-auto"
                style="margin-top: -15px"
              />
            </div>
            <div class="row">
              <p>Documento:</p>
              <q-input v-model="reg.documento_tutor" disable type="text" dense class="col-5" />
            </div>
            <div class="row">
              <p>Parentesco:</p>
              <q-input v-model="reg.parentesco" disable type="text" dense class="col-6" />
            </div>
            <!-- <div class="row"> -->
              <!-- <p>Motivos por los que el usuario no firma:</p>
              <textarea
                class="col-12 q-mx-auto"
                disable
                v-model="reg.motivos_no_firma"
                style="resize: none; height: 85px; width: 230px"
              ></textarea> -->
            <!-- </div> -->
          </div>
        </div>
        <q-space />
        <q-space />
        <div class="col-3 q-my-auto" style="border: 1px solid #ccc; padding: 1px; height: 200px">
          <div class="row">
            <p>Nombre del profesional de salud:</p>
            <q-input
              v-model="reg.nombre_profesional"
              disable
              type="text"
              dense
              class="col-11 q-mx-auto"
              style="margin-top: -15px"
            />
          </div>
          <div class="row">
            <p>R.P.N°</p>
            <q-input v-model="reg.rpn" disable type="text" dense class="col-6" />
          </div>
          <div class="row">
            <p>Profesional area de:</p>
            <q-input
              v-model="reg.area_profesional"
              disable
              type="text"
              dense
              class="col-11 q-mx-auto"
              style="margin-top: -15px"
            />
          </div>
        </div>
        <q-space />
      </div>
    </q-card-sections>
    <q-card-sections v-if="disentir">
      <div style="margin-top: 20px;" class="q-mb-md row justify-center">
        <span style="font-weight: bold">DISENTIMIENTO</span>
      </div>
      <div class="q-ml-md row" style="margin-top: 15px">
        <p class="text-justify">Yo</p>
        <q-input v-model="reg.paciente" disable type="text" label="Nombre paciente" dense class="col-4" />
        <p class="text-justify">paciente de la ESE SALUD YOPAL, con C.C</p>
        <q-input v-model="reg.cedula" disable type="text" label="Cédula paciente" dense class="col-2" />
        <p class="text-justify">Expreso mi voluntad de revocar el consentimiento prestado en fecha</p>
        <q-input v-model="reg.fecha_revocacion" disable dense label="Fecha revocación" type="date" class="col-2" />
        <p class="text-justify">y declaro por tanto que, tras la información</p>
        <p class="text-justify">recibida no consiento en someterme al procedimiento de</p>
        <q-input v-model="revoca_procedi" dense type="text" class="col-2" />
        <p class="text-justify">por los siguientes motivos</p>
        <textarea
          class="col-10 q-mx-auto"
          v-model="revoca_motivos"
          style="resize: none; height: 100px"
        ></textarea>
      </div>
      <div class="row" style="margin-top: 15px">
        <q-space />
        <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="PACIENTE" />
        <div
          class="col-4 q-my-auto q-ml-md"
          style="margin-top: auto; border: 1px solid #ccc; padding: 1px; height: 260px"
        >
          <div class="row">
            <p>Nombre del paciente:</p>
            <q-input
              v-model="reg.paciente"
              disable
              type="text"
              dense
              class="col-9 q-mx-auto"
              style="margin-top: -15px"
            />
          </div>
          <div class="row">
            <p>Documento del paciente:</p>
            <q-input
              v-model="reg.paciente"
              disable
              type="text"
              dense
              class="col-6 q-mx-auto"
              style="margin-top: -15px"
            />
          </div>
        </div>
        <q-space />
      </div>
    </q-card-sections>
    <div style="height: 20px"></div>
  </q-card>
  <div style="height: 5px"></div>
</template>
<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";

const titulo = ref(
  "Consentimiento de PYP - CONSENTIMIENTO INFORMADO EVENTOS DE INTERES EN SALUD PUBLICA (EISP)"
);

const ContFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));

const disentir = ref(false);
const aceptar = ref(false);

const evento = ref("");
const iniciar_trata = ref("");
const revoca_procedi = ref("");
const revoca_motivos = ref("");

const reg = {
  hc: null,
  ciudad: null,
  fecha: null,
  paciente: null,
  edad: null,
  genero: null,
  cedula: null,
  expedida: null,
  residencia: null,
  telefono: null,
  evento: null,
  confidencialidad: null,
  cedula_paci_firma: null,
  nombre_tutor: null,
  documento_tutor: null,
  parentesco: null,
  motivos_no_firma: null,
  nombre_profesional: null,
  rpn: null,
  area_profesional: null,
  fecha_revocacion: null,
  motivos_revoca: "Motivos",

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
