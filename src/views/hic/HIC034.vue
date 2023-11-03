<template>
  <!-- <Header_ :titulo="titulo" /> -->
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
    <q-card-section>
      <div class="row">
        <p class="text-justify">
          La ley 23 de 1981 en su artículo 15 y 19, por la cual dictan las normas en materia de Ética médica,
          estableciendo que el médico no expondrá a su paciente a riesgos injustificados; pedirá su
          consentimiento para aplicar los tratamientos médicos y quirúrgicos que considere indispensables y
          que pueden afectarlo física o síquicamente, salvo en los casos en que ello no fuere posible, y le
          explicará al paciente o a sus responsables de tales consecuencias anticipadamente; igualmente en
          cumplimiento con lo establecido en la Ley Orgánica de Protección de Datos de carácter Personal
          (LOPD)15 del 13 de Diciembre 1999 sobre protección de datos personales y de conformidad con lo
          previsto en la Ley Orgánica (LO) 2 del 3 de marzo del 2010, de Salud Sexual y Reproductiva y de
          Interrupción Voluntaria del Embarazo, sus datos personales serán tratados garantizando su derecho a
          la intimidad y confidencialidad.
        </p>
      </div>
      <div class="row">
        <p>Fecha:</p>
        <q-input v-model="date" disable type="date" dense class="q-mr-md col-2"/>
        <p>Hora:</p>
        <q-input v-model="hour" disable type="time" dense/>
        <q-space />
        <p>Historia clínica numero:</p>
        <q-input type="text" disable dense v-model="reg.hc" class="col-2" />
        <q-space />
      </div>
      <div class="q-mt-md row">
        <span style="font-weight: bold">SERVICIO: CONSULTA EXTERNA</span>
        <q-space />
        <span style="margin-right: 230px; font-weight: bold">URGENCIAS</span>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row" style="border: 1px solid #ccc; width: 100%">
        <p>Nombres y apellidos del paciente y/o Tutor legal o Familiar:</p>
        <q-input type="text" disable label="Nombre paciente" dense v-model="reg.nombre_paci" class="col-4" />
        <q-input type="text" disable label="Nombre tutor" dense v-model="reg.nombre_tutor" class="q-ml-auto q-mr-xl q-mb-md col-4" />
      </div>
      <div class="row" style="width: 100%">
        <div class="row" style="border: 1px solid #ccc; width: 50%">
          <p>Documento de identidad:</p>
          <q-checkbox
            style="margin-top: -5px; margin-left: 20px"
            left-label
            disable
            v-model="tipo_id_ti"
            label="T.I"
          />
          <q-checkbox
            style="margin-top: -5px; margin-left: 0px; margin-right: 20px"
            left-label
            disable
            v-model="tipo_id_cc"
            label="C.C"
          />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 50%">
          <q-input type="text" disable label="N." dense v-model="reg.identificacion" class="col-8 q-mx-auto" />
        </div>
      </div>
      <div class="row" style="width: 100%">
        <div class="row" style="border: 1px solid #ccc; width: 50%">
          <p>Dirección:</p>
          <q-input type="text" disable label="Dirección" dense v-model="reg.direccion" class="col-9 q-mx-auto" />
          <p>Acudiente/Responsable:</p>
          <q-input type="text" disable label="Nombre responsable" dense v-model="reg.acudiente" class="q-ml-auto q-mr-xl q-mb-md col-7" />
        </div>
        <div class="row" style="border: 0px solid #ccc; width: 50%">
          <div class="row" style="border: 1px solid #ccc; width: 100%">
            <p>Telefono:</p>
            <q-input type="text" disable label="Telefono" dense v-model="reg.telefono" class="col-7" />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p>CC:</p>
            <q-input type="text" disable label="Identificación" dense v-model="reg.identificacion_acompanante" class="q-ml-auto q-mr-md q-mb-md col-10" />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p>Parentesco:</p>
            <q-input type="text" label="Parentesco" dense v-model="reg.parentesco" class="q-ml-auto q-mr-md q-mb-md col-9" />
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <p class="text-justify">
          Las Gestantes hacen parte de una población de alto riesgo por su condición de embarazo, por lo
          tanto, tendrán prioridad en su proceso de atención y apoyo en los diferentes niveles de complejidad
          y se activarán los protocolos de acuerdo a su condición de salud.
        </p>
        <p>
          Que la Institución para realizar la Interrupción Voluntaria del embarazo (IVE) que he solicitado
          según la legislación vigente, solo ofrece un (1) método y es el farmacológico (mediante tabletas)
          Mifepristona 200 microgramos via oral, dosis única y misoprostol vía vaginal o sublingual de 400 mcg
          cada 3 horas hasta 4 dosis iniciando a las 24-48 horas
        </p>
        <p>
          Que los efectos secundarios más frecuentes son Nausea, vomito, Fiebre, escalofrío y diarrea. Se me
          ha informado sobre las consecuencias psicológicas y sociales, que si bien estadísticamente son poco
          frecuentes se puede presentar depresiones post aborto, alteraciones del deseo sexual post aborto,
          baja autoestima y que para algunos sectores de la sociedad el Aborto está mal considerado.
        </p>
        <p>
          Que las complicaciones que se pueden presentar son las relacionadas a continuación y se tendrán como
          criterios de remisión a la mediana complejidad (marque con una X, el criterio de remisión) con el
          fin de evitar complicaciones que deriven una muerte materna.
        </p>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row" style="width: 100%">
        <div class="row" style="border: 1px solid #ccc; width: 10%">
          <q-space />
          <p>Item</p>
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 40%">
          <q-space />
          <p>Criterio</p>
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 50%">
          <q-space />
          <p>Observaciones</p>
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 10%">
          <q-space />
          <p>1.</p>
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 40%">
          <q-space />
          <q-checkbox
            style="margin-top: -5px; margin-left: 20px"
            left-label
            v-model="hemorragia"
            label="• Hemorragia"
          />
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 50%">
          <q-space />
          <textarea
            class="col-11"
            v-model="obser_hemorragia"
            style="margin-top: 5px; margin-bottom: 5px; resize: none; height: 60px"
          ></textarea>
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 10%">
          <q-space />
          <p>2.</p>
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 40%">
          <q-space />
          <q-checkbox
            style="margin-top: -5px; margin-left: 20px"
            left-label
            v-model="retencion_ute"
            label="• Retención Uterina"
          />
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 50%">
          <q-space />
          <textarea
            class="col-11"
            v-model="obser_retencion_ute"
            style="margin-top: 5px; margin-bottom: 5px; resize: none; height: 60px"
          ></textarea>
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 10%">
          <q-space />
          <p>3.</p>
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 40%">
          <q-space />
          <q-checkbox
            style="margin-top: -5px; margin-left: 20px"
            left-label
            v-model="ive_fallida"
            label="• IVE fallida"
          />
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 50%">
          <q-space />
          <textarea
            class="col-11"
            v-model="obser_ive_fallida"
            style="margin-top: 5px; margin-bottom: 5px; resize: none; height: 60px"
          ></textarea>
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 10%">
          <q-space />
          <p>4.</p>
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 40%">
          <q-space />
          <q-checkbox
            style="margin-top: -5px; margin-left: 20px"
            left-label
            v-model="infecciones"
            label="• Infecciones"
          />
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 50%">
          <q-space />
          <textarea
            class="col-11"
            v-model="obser_infecciones"
            style="margin-top: 5px; margin-bottom: 5px; resize: none; height: 60px"
          ></textarea>
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 10%">
          <q-space />
          <p>5.</p>
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 40%">
          <q-space />
          <p>• Entre otras</p>
          <q-space />
        </div>
        <div class="row" style="border: 1px solid #ccc; width: 50%">
          <q-space />
          <textarea
            class="col-11"
            v-model="entre_otras"
            style="margin-top: 5px; margin-bottom: 5px; resize: none; height: 60px"
          ></textarea>
          <q-space />
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <p class="text-justify">De acuerdo con lo anterior, Yo</p>
        <q-input v-model="reg.nombre_yo" disable type="text" dense class="col-4" />
        <p class="text-justify">identificada con C.C. Nº</p>
        <q-input v-model="reg.identificacion" disable type="text" dense class="col-3" />
        <p class="text-justify">de</p>
        <q-input v-model="reg.expedido" disable type="text" dense class="col-2" />
        <p class="text-justify">
          en calidad de paciente o acudiente (persona responsable del paciente), por medio del presente
          documento, en
        </p>
        <p class="text-justify">
          forma libre en pleno uso de mis facultades mentales e intelectuales y sin limitaciones o
          impedimentos de carácter médico o legal, habiendo recibido información en un lenguaje claro, senillo
          y adecuado acerca de los riesgos y demás circunstancias que se originen del procedimiento
        </p>
      </div>
      <div class="row" style="margin-top: -17px">
        <p class="text-justify">, por parte del profesional en Medicina (Nombres y Apellidos completos) Dr</p>
        <q-input v-model="reg.nombre_doc" disable type="text" dense class="col-3" />
        <p class="text-justify">Identificado con Cédula de</p>
      </div>
      <div class="row">
        <p class="text-justify" style="margin-top: -2px">ciudadanía y/o Registro médico Nº</p>
        <q-input
          style="margin-top: -10px"
          v-model="reg.identificacion_doc"
          disable
          type="text"
          dense
          class="col-2"
        />
        <p class="text-justify" style="margin-top: -2px">
          Autorizo ESE SALUD YOPAL, para que se me practique la Interrupción Voluntaria del Embarazo (IVE) con
          el método farmacológico que me ofrece la Institución
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
  <!-- <div style="height: 1px"></div> -->
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
    <q-card-section v-if="aceptar">
      <div class="row">
        <span style="font-weight: bold"
          >EN CUALQUIER MOMENTO PREVIO AL INICIO DE LA INTERVENCIÓN Y SIN NECESIDAD DE DAR NINGUNA
          EXPLICACION, PUEDO REVOCAR EL CONSENTIMIENTO QUE AHORA PRESTO.</span
        >
      </div>
      <div class="q-mt-md q-mb-md row"> 
        <q-space />
        <ContFirma @reciFirma="CallBackFirma(1)" class="col-3" firmador="Santiago" quien_firma="PACIENTE"/>
        <div class="q-my-auto" style="border: 1px solid #ccc; width: 100px; height: 100px; border-radius: 10px; margin-left: 30px;"></div>
        <q-space />
        <ContFirma @reciFirma="CallBackFirma(2)" class="col-3" firmador="Santiago" quien_firma="ACOMPAÑANTE"/>
        <q-space />
      </div>
      <div class="row">
        <p>
          Certifico que he explicado la naturaleza, propósito, ventajas, riesgos y complicaciones del
          procedimiento y he contestado todas las preguntas. Considero que el (la) paciente comprende todo lo
          explicado.
        </p>
      </div>
      <div class="q-mt-md q-mb-md row"> 
        <q-space />
        <ContFirma @reciFirma="CallBackFirma(3)" class="col-3" firmador="Santiago" quien_firma="PROFESIONAL"/>
        <q-space />
        <q-space />
        <q-space />
        <q-space />
        <q-space />
      </div>
    </q-card-section>
    <q-card-section v-if="disentir">
      <div class="q-mt-md q-mb-md row justify-center">
        <span style="font-weight: bold">DISENTIMIENTO</span>
      </div>
      <div class="row">
        <p>Yo</p>
        <q-input type="text" disable label="Nombre paciente" dense class="col-4" />
        <p>identificado (a) con la CC No</p>
        <q-input v-model="reg.cedula" disable label="Cédula" type="text" dense class="col-2" />
        <p class="text-justify">en calidad de paciente y/o</p>
        <p class="text-justify" style="margin-top: -2px;">
          acudiente, revoco este consentimiento que he prestado sobre la realización de la Interrupción
          voluntaria del Embarazo (IVE).
        </p>
      </div>
      <div class="q-mt-md q-mb-md row"> 
        <q-space />
        <ContFirma @reciFirma="CallBackFirma(4)" class="col-3" firmador="Santiago" quien_firma="PACIENTE"/>
        <div class="q-my-auto" style="border: 1px solid #ccc; width: 100px; height: 100px; border-radius: 10px; margin-left: 30px;"></div>
        <q-space />
        <ContFirma @reciFirma="CallBackFirma(5)" class="col-3" firmador="Santiago" quien_firma="ACOMPAÑANTE"/>
        <q-space />
      </div>
      <div class="row">
        <p class="text-justify">
          <span style="font-weight: bold">NOTA:</span> El presente documento es un modelo de Consentimiento de
          IVE según el protocolo realizado por el Ministerio de Salud y Protección Social; “Prevención del
          Aborto Inseguro en Colombia. Protocolo para el sector salud”.
        </p>
      </div>
    </q-card-section>
  </q-card>
  <div style="height: 1px"></div>
  <!-- Spacer final de hoja -->
</template>
<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";

const ContFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));

const titulo = ref("Consentimiento de PYP - Consentimiento informado para interrupciòn voluntaria del emabarazo (IVE)");

const hour = ref("12:00");
const date = ref("");

const tipo_id_ti = ref(false);
const tipo_id_cc = ref(false);

const disentir = ref(false);
const aceptar = ref(false);

const hemorragia = ref(false);
const obser_hemorragia = ref("");
const retencion_ute = ref(false);
const obser_retencion_ute = ref("");
const ive_fallida = ref(false);
const obser_ive_fallida = ref("");
const infecciones = ref(false);
const obser_infecciones = ref("");
const entre_otras = ref("");

const reg = {
  hc: null,
  nombre_paci: null,
  nombre_tutor: null,
  identificacion: null,
  direccion: null,
  acudiente: null,
  telefono: null,
  identificacion_acompanante: null,
  parentesco: null,
  observacion_1: null,
  observacion_2: null,
  observacion_3: null,
  observacion_4: null,
  criterios: null,
  observacion_5: null,
  nombre_yo: null,
  expedido: null,
  nombre_doc: null,
  identificacion_doc: null,
};

function CallBackFirma(param, data) {
console.log("🚀 ~ CallBackFirma ~ param:", param)
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
