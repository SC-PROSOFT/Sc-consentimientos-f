<template>
  <q-card class="q-mx-auto format q-mt-lg q-mb-lg">
    <q-card-section>
      <h6 class="text-center" style="margin: 0; font-size: 16px">
        CONSENTIMIENTO PARA LA APLICACIÓN DE LA VACUNA CONTA EL VIRUS DEL PAPILOMA HUMANO - VPH
      </h6>
      <div style="border-bottom: 2px solid lightgray; width: 100%; margin-top: 7px; margin-bottom: 7px"></div>
      <div class="row">
        <p>Historia clínica numero:</p>
        <q-input readonly type="text" dense v-model="reg.hc" class="col-1" />
      </div>
      <div class="row">
        <p>Ciudad:</p>
        <q-input readonly type="text" v-model="reg.ciudad" dense class="col-2" />
        <p>Fecha:</p>
        <q-input readonly v-model="reg.fecha" dense type="date" class="col-1.5" />
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <p class="text-justify">Yo</p>
        <q-input readonly v-model="reg.paciente" type="text" dense class="col-3" style="width: 350px" />
        <p class="text-justify">identificado(a) con</p>
        <q-input
          readonly
          v-model="reg.tipo_id_paciente"
          type="text"
          dense
          class="col-2"
          style="width: 60px"
        />
        <p class="text-justify">N°.</p>
        <q-input readonly v-model="reg.id_paciente" type="text" dense class="col-1" style="width: 150px" />
        <p class="text-justify">de</p>
        <q-input readonly v-model="reg.anios" type="text" dense class="col-2" style="width: 60px" />
        <p>años de edad, en</p>
        <p>calidad de paciente y mi acompañante</p>
        <q-input
          readonly
          v-model="reg.nombre_acompnte"
          type="text"
          dense
          class="col-3"
          style="width: 310px"
        />
        <p class="text-justify">identificado (a) con</p>
        <q-input
          readonly
          v-model="reg.tipo_id_acompnte"
          type="text"
          dense
          class="col-3"
          style="width: 60px"
        />
        <p class="text-justify">N°.</p>
        <q-input readonly v-model="reg.id_acompnte" type="text" dense class="col-3" style="width: 150px" />
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <p class="text-justify">
          <span style="font-weight: bold">DECLARAN:</span> El personal del área de la salud nos ha explicado y
          hemos entendido la siguiente información sobre la aplicación de la vacuna contra el Virus del
          Papiloma Humano.
        </p>
      </div>
      <div class="row">
        <p class="text-justify">
          <span style="font-weight: bold">EN QUÉ LE BENEFICIARÁ:</span> Las vacunas tetravalente y bivalente
          son eficaces en la prevención de las lesiones cervicales precancerosas relacionadas con el VPH 16 y
          el VPH18 en mujeres. No ofrecen protección contra la evolución de la infección hacia la enfermedad a
          partir del VPH contraído antes de la vacunación.
        </p>
      </div>
      <div class="row">
        <p class="text-justify">
          <span style="font-weight: bold">EN QUÉ CONSISTE Y PARA QUE SIRVE:</span> El procedimiento de
          vacunación consiste en la administración de un biológico para la prevención de cáncer cervical,
          vulvar y vaginal, lesiones precancerosas o displasias, verrugas genitales o infección persistente
          causada por el Virus de Papiloma Humano, serotipos 6, 11, 16 y 18.
        </p>
      </div>
      <div class="row">
        <p class="text-justify">
          <span style="font-weight: bold">CÓMO SE REALIZA:</span> Se administra la vacuna vía Intramuscular,
          en el tercio medio del músculo deltoides (brazo).
        </p>
      </div>
      <div class="row">
        <p class="text-justify">
          <span style="font-weight: bold">PRECACUCIÓN:</span> La vacunación en adolescentes puede desencadenar
          síncope, algunas veces asociado con desmayo, por lo que se recomienda que después de la aplicación
          de la vacuna, la niña permanezca sentada por lo menos 15 minutos y sea observada.
        </p>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <span style="font-weight: bold; margin-bottom: 8px">EVENTOS ADVERSOS:</span>
      </div>
      <div class="row">
        <p class="q-ml-xl text-justify">
          <span style="font-weight: bold">En el sitio de la inyección (1 a 5 días postvacunación):</span>
          Dolor, hinchazón, eritema, hematoma y prurito.
        </p>
      </div>
      <div class="row">
        <p class="q-ml-xl text-justify">
          <span style="font-weight: bold">Sistémico (1 a 15 días postvacunación):</span> Pirexia (fiebre),
          diarrea, vómitos, mialgia (dolor muscular), tos, infección de vías respiratorias superiores,
          odontalgia (dolor dental), malestar general, artralgia (dolor en articulaciones e insomnio).
        </p>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <p class="text-justify" style="font-weight: bold">
          NOTA: LA ORGANIZACIÓN MUNDIAL DE LA SALUD -OMS- Y LA ORGANIZACIÓN PANAMERICANA DE LA SALUD
          -OPS-RECOMIENDAN EL USO DE LA VACUNA CONTRA EL VPH, DESPUÉS DE HABER REALIZADO UN AMPLIO ESTUDIO DEL
          PERFIL DE SEGURIDAD DE ÉSTA VACUNA, POR PARTE DEL COMITÉ CONSULTIVO MUNDIAL DE SEGURIDAD DE VACUNAS
          DE LA OMS.
        </p>
      </div>
    </q-card-section>
  </q-card>
  <q-card class="q-mx-auto q-ma-xl" style="width: 65%">
    <q-card-section>
      <div class="row">
        <p class="text-justify" style="font-weight: bold">NO OBLIGATORIEDAD DE LA VACUNA:</p>
      </div>
      <div class="row">
        <p class="text-justify">
          <span style="font-weight: bold">DECLARO</span> que he sido informado con anticipación y de forma
          satisfactoria he comprendido las explicaciones que se me han facilitado, y el personal del área de
          la salud que me ha atendido me ha permitido realizar todas las observaciones y me ha aclarado todas
          las dudas que le he planteado y con la información recibida, acepto la aplicación de la vacuna
          contra el VPH, en tales condiciones.
        </p>
      </div>
      <div class="row">
        <p class="text-justify">
          <span style="font-weight: bold;">ACEPTO:</span>
          <q-checkbox style="margin-top: -5px" disable v-model="aceptar" />
          <span style="font-weight: bold;">NO ACPETO:</span>
          <q-checkbox style="margin-top: -5px" disable v-model="disentir" />
          que se me aplique la vacuna.
        </p>
      </div>
    </q-card-section>
    <q-card-section v-if="disentir">
      <div class="row">
        <p class="text-justify">Expresando mi voluntad de no acpetar la vacuna por los siguientes motivos:</p>
      </div>
      <div class="justify-center row">
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
</template>
<script setup>
import { ref, reactive, defineAsyncComponent } from "vue";

const ContFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));

const revocar_motivos = ref("");

const disentir = ref(false);
const aceptar = ref(false);

const reg = {
  hc: null,
  ciudad: null,
  fecha: null,
  paciente: null,
  tipo_id_paciente: null,
  id_paciente: null,
  anios: null,
  nombre_acompnte: null,
  tipo_id_acompnte: null,
  id_acompnte: null,
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
