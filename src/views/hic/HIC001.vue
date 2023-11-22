<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <div class="text-center">
        <q-toggle
          v-model="reg.opcion_hic001"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="reg.opcion_hic001 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip
            :color="reg.opcion_hic001 == 'AUTORIZAR' ? 'green' : 'red'"
            class="text-white"
            v-if="reg.opcion_hic001"
          >
            {{ reg.opcion_hic001 }}
          </q-chip>
        </p>
      </div>
      <div>
        <p class="row" align="start">
          El presente documento tiene como objetivo que usted, luego de haber recibido información, manifieste
          de manera libre y voluntaria, a través de su firma, la autorización o rechazo a la realización del
          examen de detección del VIH, según se establece en la normatividad Decreto 1543 de 1997 del
          Ministerio de la Protección Social por el cual reglamenta los mecanismos de prevención, diagnóstico,
          manejo y reporte epidemiológico de la infección por VIH.
        </p>

        <p>
          Yo identificada con número {{ getPaci.descrip }}. Acepto y autorizo al laboratorio clínico del asad,
          para que me realice el exámen de detección de VIH.
        </p>

        <div class="text-bold q-mb-sm">MOTIVO PRUEBA</div>
        <div class="row">
          <div class="col-4 border-format">
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.sosp_cli"
              label="Sospecha clinica"
            />
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.contact_sex"
              label="Contacto sexual de riesgo"
            />
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.contact_vih"
              label="Contacto VIH"
            />
          </div>

          <div class="col-4 border-format">
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.trans_alt"
              label="Transfusion antes 1990"
            />
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.uso_frec_agu"
              label="Uso frecuente de agujas"
            />
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.resul_tam"
              label="Resultado prueba de tamizaje positivo"
            />
          </div>
          <div class="col-4 border-format">
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.pep_kit"
              label="PEP KIT"
            />
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.pep_control_mes"
              label="PEP control mes"
            />
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.pep_control_3_mes"
              label="PEP control 3 meses"
            />
          </div>
        </div>

        <div class="text-bold q-mb-sm q-mt-md">DEMANDA INDUCIDA</div>
        <div class="row justify-start border-format">
          <div class="col-4">
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.prog_prom"
              label="Programa de promocion y mantenimiento de la salud"
            />
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.cons_urg"
              label="Consulta urgencias"
            />
          </div>

          <div class="col-4">
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.cons_ext"
              label="Consulta externa"
            />
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.cons_esp"
              label="Consulta especializada"
            />
          </div>
          <div class="col-4">
            <q-checkbox
              true-value="S"
              false-value="N"
              style="width: 100%"
              left-label
              class="col-12 q-px-md"
              v-model="reg.med_legal"
              label="Medico legal"
            />
          </div>
          <Input_
            class="col-12"
            v-model="reg.cual_cons_esp"
            :field="((form.cual_cons_esp.disable = reg.cons_esp == 'S' ? false : true), form.cual_cons_esp)"
          />
        </div>
      </div>
      <div class="border-format q-mt-sm">
        <div class="text-bold q-mt-lg">INTRODUCCION:</div>
        <p>
          Este procedimiento se realiza con el fin de brindar consejería sobre la realización de la prueba
          para detectar el virus de la inmunodeficiencia humana (VIH) y dar así cumplimiento a la normatividad
        </p>
      </div>
      <div class="border-format q-mt-sm">
        <div class="text-bold q-mt-lg">¿QUE ES EL SINDROME DE INMUNODEFICIENCIA ADQUIRIDA (SIDA)?</div>
        <p>
          Es una enfermedad producida por un virus conocido como el VIH, el cual infecta y destruye las
          células encargadas de la defensa del organismo, originando una falla progresiva y grave de este
          sistema, quedando el cuerpo expuesto a las infecciones. No tiene cura, pero si tratamiento que puede
          mejorar la calidad de vida del paciente si se detecta a tiempo.
        </p>
      </div>
      <div class="border-format q-mt-sm">
        <div class="text-bold q-mt-lg">¿COMO SE ADQUIERE LA ENFERMEDAD?</div>
        <p>
          La enfermedad se adquiere principalmente por contacto sexual con personas infectadas con el VIH. Por
          exposición a la sangre y fluidos corporales, al compartir agujas para el suministro de ciertas
          drogas como la heroína (drogadictos). Además durante el embarazo las madres infectadas con el VIH
          pueden transmitir la enfermedad a su hijo a través de la placenta.
        </p>
      </div>
      <div class="border-format q-mt-sm">
        <div class="text-bold q-mt-lg">¿COMO SE HACE EL DIAGNOSTICO DE LA INFECCION?</div>
        <p>
          El diagnóstico se realiza examinando una muestra de sangre para detectar la presencia del Virus de
          Inmunodeficiencia Humana (VIH). Existen varias pruebas de laboratorio. El primer paso es examinar la
          sangre utilizando una prueba rápida; si esta resulta “POSITIVA”, se repite nuevamente y se debe
          realizar una prueba confirmatoria (Western Blot); si esta última se confirma como “POSITIVA”
          significa que la persona está infectada con el VIH y que la puede transmitir (si no se toma las
          medidas de protección adecuadas) el virus a otras personas. Si el resultado es NEGATIVO, significa
          que no hay evidencia de laboratorio, hasta ese momento, de que la persona esté infectada con el VIH
        </p>
      </div>
      <div class="border-format q-mt-sm">
        <div class="text-bold q-mt-lg">CONSENTIMIENTO</div>
        <p>
          Declaro haber comprendido este documento y haber recibido Consejería ASESORÍA PRE TEST y entiendo
          que la toma de la muestra es voluntaria Acepto la responsabilidad de retirar personalmente el
          resultado; en caso de no retirarlo en la fecha acordada, acepto que se me contacte
          confidencialmente, según los procedimientos que me han informado (llamado telefónico, visita
          domiciliaria, carta certificada, correo electrónico).
        </p>
      </div>
    </q-card-section>
    <q-separator />

    <q-card-actions>
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          :registro_profe="getPaci.cod"
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
          class="col-4"
        />

        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :registro_profe="getAcomp.cod"
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
        <ContainerFirma
          @reciFirma="callBackFirma"
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.registro_profe"
          quien_firma="FIRMA PROFESIONAL"
          class="col-4"
        />
      </div>
      <div class="col-12 row justify-center q-my-md">
        <q-btn
          :disable="reg.opcion_hic001 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mr-lg"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { impresionHC030, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat, calcEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);

const form = ref({
  cual_cons_esp: {
    id: "cual_cons_esp",
    label: "",
    maxlength: "95",
    required: true,
    campo_abierto: true,
  },
});

const reg = ref({
  sosp_cli: "N",
  trans_alt: "N",
  pep_kit: "N",
  contact_sex: "N",
  uso_frec_agu: "N",
  pep_control_mes: "N",
  contact_vih: "N",
  resul_tam: "N",
  pep_control_3_mes: "N",
  otro_motivo: "N",
  cual_otro_motivo: "N",
  prog_prom: "N",
  cual_prog_prom: "N",
  cons_ext: "N",
  cons_esp: "N",
  cual_cons_esp: "N",
  med_legal: "N",
  cons_urg: "N",

  // extras
  opcion_hic001: "",
});

const validarDatos = () => {};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma.slice(22));
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma.slice(22));
};
</script>
