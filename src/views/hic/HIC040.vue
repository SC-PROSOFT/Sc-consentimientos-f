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
      <div class="row">
        <p>Yo,</p>
        <q-input v-model="reg.paciente" disable type="text" dense class="col-4" />
        <p>, de</p>
        <q-input v-model="reg.anios" disable type="text" dense style="width: 50px; display: inline-block" />
        <p>años de edad, identificada con</p>
        <q-input v-model="reg.tipo_id" disable type="text" dense style="width: 50px; display: inline-block" />
        <p>N°</p>
        <q-input v-model="reg.cedula" disable type="text" dense class="col-2" />
      </div>
      <div class="row" style="margin-top: -15px">
        <p>, expedida en</p>
        <q-input v-model="reg.expedida" disable type="text" dense class="col-2" />
        <p>, con residencia en</p>
        <q-input v-model="reg.residencia" disable type="text" dense class="col-2" />
        <p>, telefono número</p>
        <q-input v-model="reg.telefono" disable type="text" dense class="col-2" />
      </div>
      <div class="row" style="margin-top: -15px">
        <p>, en calidad de paciente y mi acompañante</p>
        <q-input v-model="reg.acompanante" disable type="text" dense class="col-2" />
        <p>, de</p>
        <q-input v-model="reg.anios_acompnte" disable type="text" dense class="col-2" />
        <p>años de edad , identificado (a) con</p>
      </div>
      <div class="row" style="margin-top: -15px">
        <q-input v-model="reg.tipo_id_acompnte" disable type="text" dense class="col-2" />
        <p>N°</p>
        <q-input v-model="reg.id_acompnte" disable type="text" dense class="col-2" />
        <p>, expedida en</p>
        <q-input v-model="reg.expedida_acompnte" disable type="text" dense class="col-2" />
        <p>; en pleno uso de nuestras facultades mentales y</p>
      </div>
      <div class="row" style="margin-top: -15px">
        <p>
          de nuestros derechos de salud y habiendo solicitado por nuestra voluntad los servicios de salud a la
          empresa social del estado ESE Salud Yopal, por medio del presente documento autorizamos al equipo de
          salud de la Institución, para atenderme y vigilarme durante la conducción del trabajo de parto y la
          atención del parto vaginal.
        </p>
      </div>
      <div class="row">
        <p>
          Autorizo al personal médico de la ESE Salud Yopal que me atiende a solicitar y practicar las ayudas
          diagnósticas y terapéuticas, que consideren pertinentes durante la atención y proceso de parto, de
          mi salud previa información detallada de los posibles riesgos como son: estudio de imagenologia,
          monitoreo fetal, pruebas de laboratorio clínico, colocación de catéteres, toma de muestras de
          laboratorio y secreciones, actividades de higiene y confort, administración de medicamentos,
          administración de líquidos endovenosos.
        </p>
      </div>
      <div class="row">
        <p>
          Me informan que Aunque son procedimientos seguros pueden presentarse complicaciones como: hematomas,
          inflamaciones, infecciones, alergias, dolores locales, sangrados, efectos adversos medicamentosos y
          otros impredecibles.
        </p>
      </div>
      <div class="row">
        <p>
          Declaro que se me ha explicado sobre los riesgos y beneficios de los procedimientos durante mi
          estancia en los servicios de: urgencias e internación y que algunos de ellos pueden ser dados por mi
          edad, profesión, creencias, valores y actitudes propias de mi ser.
        </p>
      </div>
      <div class="row">
        <p>
          Además se me ha informado que en la ESE salud Yopal, participa personal idóneo, competente y
          capacitado para la prescripción y determinación de conductas terapéuticas que contribuyan a mejorar
          mi calidad de vida y de mi hijo.
        </p>
      </div>
      <div class="row">
        <p>
          El Dr.
          <q-input
            v-model="reg.nombre_doc"
            disable
            type="text"
            dense
            class="col-2"
            style="width: 350px; display: inline-block"
          />
          me ha explicado en que consiste el trabajo de parto y el parto vaginal y me ha informado las
          complicaciones, molestias y posibles riesgos que se puedan presentar en particular los siguientes:
        </p>
      </div>
    </q-card-section>
  </q-card>
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
    <q-card-section>
      <ol>
        <li>
          Que el trabajo de parto es un proceso fisiológico donde se dilata y borra el cuello del útero,
          permitiendo la expulsión del feto y de la placenta por vía vaginal.
        </li>
        <li>
          Que existen tres etapas en el trabajo de parto que son: la dilatación y borramiento del cuello
          uterino, el descenso y la expulsión del feto, y el alumbramiento de la placenta.
        </li>
        <li>
          Que durante cualquiera de las etapas del trabajo de parto se pueden presentar situaciones
          imprevistas o complicaciones que serán, en lo posible atendidas por el personal médico de la
          Institución.
        </li>
        <li>
          Que el trabajo de parto se adelantará dentro de la Institución con el fin de permitir la vigilancia
          y monitoreo constante por parte del equipo asistencial.
        </li>
        <li>
          Que en algunos casos se hace necesario inducir el proceso natural del parto con productos
          farmacológicos, tales como uterotónicos, oxitócicos o prostaglandínicos, que se aplican según
          criterio médico y bajo vigilancia, con monitoreo constante.
        </li>
        <li>
          Que en caso de distocia del parto (cuando el parto o expulsión procede de manera anormal o difícil),
          se hace necesario instrumentar el parto con el uso de instrumentos que facilitan la extracción del
          feto.
        </li>
      </ol>
      <div class="row">
        <p>
          Igualmente mi acompañante y yo hemos sido informados que se pueden presentar complicaciones maternas
          o fetales, que pueden comprometer mi salud, mi vida o la del feto. El profesional nos notifica que
          en la actualidad la Institución no dispone de métodos que nos permitan detectar de manera precoz y
          confiable, todas las situaciones de riesgo fetal, pero con la vigilancia constante del trabajo de
          parto y parto, se pretende minimizar su ocurrencia y prevenir sus posibles secuelas. Dentro de los
          riesgos materno y fetales frecuentes se encuentran:
        </p>
      </div>
      <ol type="a">
        <li>Sufrimiento fetal derivado de falta de oxígeno</li>
        <li>Síndrome de aspiración meconial</li>
        <li>Desprendimiento placentario</li>
        <li>Prolapso de cordón</li>
        <li>Acretismo placentario (invasión anormal de la placenta en la pared del útero)</li>
        <li>Nudos verdaderos de cordón</li>
        <li>Ruptura uterina</li>
        <li>Inversión uterina post parto</li>
        <li>Distocia de hombros</li>
        <li>
          Embolia de líquido amniótico (cuando el líquido amniótico o el material embrionario ingresa al
          torrente sanguíneo de la madre)
        </li>
        <span>Entre otros</span>
      </ol>
      <div class="row">
        <p>
          Que algunas de estas complicaciones presentan riesgo potencial para mí y/o para el feto y pueden
          generar secuelas neurológicas leves, moderadas o severas.
        </p>
      </div>
      <div class="row">
        <p>
          Comprendo y acepto que durante el procedimiento pueden aparecer circunstancias imprevisibles o
          inesperadas, que pueden requerir una extensión de otro procedimiento, acepto que las ciencias de la
          salud no son una ciencia exacta y que no se me garantizan resultados en la atención y que además al
          presentar factores de riesgo inherentes a mi persona y patologías previas o actuales, mi riesgo
          aumentara de manera general.
        </p>
      </div>
    </q-card-section>
  </q-card>
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
    <q-card-section>
      <div class="row">
        <p>
          Que si se hace necesario la episiotomía por mi condición clínica durante el expulsivo, deberá ser
          suturada y que sus posibles complicaciones pueden ser: desgarros perineales, que en casos extremos
          pueden incluir músculos perineales alrededor del ano (esfínter externo del ano y recto), dolor,
          formación de hematomas, infecciones de la herida, dehiscencia (abertura espontánea) de la sutura y a
          largo plazo fístulas (conducto anormal de un cavidad orgánica) recto vaginales e incontinencia
          fecal.
        </p>
      </div>
      <div class="row">
        <p>
          Que en caso de presentar alguna complicación que me pueda llevar a la necesidad de realización de
          una cesárea de urgencia y en algunos casos (hemorragias incontrolables) a una histerectomía total o
          subtotal en procura de preservar mi vida y/o la de mi hijo(a); se iniciará el proceso de remisión a
          un nivel de mayor complejidad, para realizar dicho procedimiento que no hace parte del portafolio de
          servicios de la Institución.
        </p>
      </div>
      <div class="row">
        <p>
          Se me ha dado la oportunidad de hacer preguntas y todas ellas han sido contestadas
          satisfactoriamente.
        </p>
      </div>
      <div class="row">
        <p>
          Me comprometo a seguir las indicaciones que me brindan los profesionales de LA ESE Salud Yopal para
          contribuir a una atención segura como son:
        </p>
        <ul>
          <li>Mantener puesta la manilla de identificación.</li>
          <li>Mantener elevadas las barandas de la cama.</li>
          <li>
            Pedir ayuda al personal de enfermería en los casos que los requiera. (aseo diario, ir al baño.
            etc).
          </li>
          <li>Permanecer acompañado o asistir con acompañante si hay indicación.</li>
          <li>Tomarme únicamente los medicamentos prescritos por los profesionales tratantes.</li>
          <li>
            Informar si soy alérgico a algún medicamento o procedimiento y si vengo tomando medicamentos de
            forma regular.
          </li>
          <li>
            No manipular las llaves que regulan el oxígeno, los goteos de sueros, los monitores, equipos
            terapéuticos o dispositivos biomédicos.
          </li>
          <li>Lavarme frecuentemente las manos para evitar infecciones.</li>
          <li>Seguir las recomendaciones de aislamiento si cumplo criterios.</li>
        </ul>
      </div>
      <div class="row">
        <p>
          Por lo tanto, en forma consciente y voluntaria, luego de haber escuchado la información y
          explicaciones, sin haber sido objeto de coacción, persuasión, ni manipulación manifiesto lo
          siguiente:
        </p>
      </div>
      <div class="row">
        <p>
          Mi acompañante y Yo que hemos recibido y comprendido toda la información, relacionada con el trabajo
          de parto y atención del mismo, que entendemos y autorizamos las decisiones médicas que durante su
          desarrollo se llegaren a presentar y que aceptamos los riesgos y limitaciones expuestas, en el
          entendido que se propenderá por minimizar su ocurrencia.
        </p>
      </div>
    </q-card-section>
  </q-card>
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
    <q-card-section>
      <div class="row">
        <p>
          Declaramos que nos encontramos en capacidad de entender y expresar nuestra voluntad y en
          consecuencia suscribimos el presente documento en señal de conformidad con su contenido.
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
          someterme al procedimiento, por los siguientes motivos:
        </p>
        <textarea
          class="col-12"
          v-model="revocar_motivos"
          style="resize: none; height: 100px"
        ></textarea>
      </div>
    </q-card-section>
    <q-card-sections v-if="aceptar">
      <q-card-actions align="around" class="row" style="margin-top: 10px; margin-bottom: 15px">
        <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="PACIENTE" />
        <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="TUTOR" />
        <ContFirma @reciFirma="CallBackFirma" class="col-3" firmador="Santiago" quien_firma="PROFESIONAL" />
      </q-card-actions>
      <div class="row" style="border: 0px solid #ccc; padding: 0px">
        <q-space />
        <div class="col-3 q-my-auto" style="border: 1px solid #ccc; padding: 1px; height: 170px">
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
            <p>C.C:</p>
            <q-input
              v-model="reg.cedula"
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
        <div class="col-3 q-my-auto" style="border: 1px solid #ccc; padding: 1px; height: 170px">
          <div class="row">
            <p>Nombre Testigo (Acompañante):</p>
            <q-input
              v-model="reg.acompanante"
              disable
              type="text"
              dense
              class="col-11 q-mx-auto"
              style="margin-top: -15px"
            />
          </div>
          <div class="row">
            <p>C.C:</p>
            <q-input
              v-model="reg.id_acompnte"
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
        <div class="col-3 q-my-auto" style="border: 1px solid #ccc; padding: 1px; height: 170px">
          <div class="row">
            <p>Nombre del Médico:</p>
            <q-input
              v-model="reg.nombre_doc"
              disable
              type="text"
              dense
              class="col-11 q-mx-auto"
              style="margin-top: -15px"
            />
          </div>
          <div class="row">
            <p>CC No:</p>
            <q-input
              v-model="reg.cedula_doc"
              disable
              type="text"
              dense
              class="col-7 q-mx-auto"
              style="margin-top: -15px"
            />
          </div>
          <div class="row">
            <p>Registro N°:</p>
            <q-input
              v-model="reg.registro_doc"
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
      <div class="q-ml-lg q-mt-md row">
        <p style="font-weight: bold">
          Dejo constancia que he explicado los propósitos, ventajas, riesgos y alternativas de manejo del
          trabajo de parto y del parto vaginal.
        </p>
      </div>
    </q-card-sections>
</q-card>
<div style="height: 5px"></div>
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
  anios: null,
  tipo_id: null,
  cedula: null,
  expedida: null,
  residencia: null,
  telefono: null,
  acompanante: null,
  anios_acompnte: null,
  tipo_id_acompnte: null,
  id_acompnte: null,
  expedida_acompnte: null,
  nombre_doc: null,
  cedula_doc: null,
  registro_doc: null,
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
