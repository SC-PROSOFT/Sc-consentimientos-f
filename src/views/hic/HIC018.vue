<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_hc018"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_hc018 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_hc018 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_hc018"
            >
              {{ reg.opcion_hc018 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p>Historia clínica numero:</p>
          <q-input v-model="llave" type="text" class="col-1" disable dense />
          <q-space />
          <p>Ciudad:</p>
          <q-input v-model="getEmpresa.ciudad_usuar" type="text" class="col-3" disable dense />
          <p>Fecha:</p>
          <q-input v-model="reg.fecha_act" type="text" class="col-1" disable dense />
          <p>Hora:</p>
          <q-input v-model="reg.hora_act" type="text" class="col-1" disable dense />
        </div>
        <div class="row">
          <p style="font-weight: bold; font-size: 17px">DESCRIPCIÓN MEDICAMENTO</p>
        </div>
        <div class="row text-justify">
          <p>
            La pilocarpina ® oftálmica se usa para tratar el glaucoma, es una clase de medicamentos llamados
            mióticos. Se utiliza dentro de la Cirugía Oftalmológica para la inducción de la Miosis o
            contracción pupilar, como preparación quirúrgica, dándole un buen todo al Iris previo al
            procedimiento de Iridotomía con Láser.
          </p>
          <p>
            Actúa en un subtipo de receptor muscarínico de la acetilcolina (M3), el cual se encuentra ubicado
            en el esfínter del iris, causando que el músculo se contraiga y provoque miosis. Ello causa que la
            red trabecular se abra y facilite la salida del humor acuoso del ojo y se reduzca la presión
            intraocular.
          </p>
          <p>
            El uso de la pilocarpina reduce el tamaño de las pupilas, aliviando los síntomas de fotofobia en
            estos casos postquirúrgicos.
          </p>
        </div>
        <div class="row">
          <p style="font-weight: bold; font-size: 17px">PRECAUCIONES PRE OPERATORIAS:</p>
        </div>
        <div class="row text-justify">
          <p>
            Informar si alérgico a la pilocarpina o a otros medicamentos. Embarazo, Lactancia Se debe informar
            al médico qué medicamentos con y sin prescripción está tomando, incluyendo vitaminas. Informar al
            médico si estoy sufriendo o he sufrido de asma, enfermedades intestinales, úlceras, hipertensión,
            enfermedades al corazón, glándula tiroides demasiado activa (hipertiroidismo), crisis convulsivas,
            enfermedad de Parkinson o una obstrucción en las vías urinarias.
          </p>
        </div>
        <div class="row">
          <p style="font-weight: bold; font-size: 17px">EFECTOS SECUNDARIOS:</p>
        </div>
        <div class="row text-justify">
          <p>
            Los efectos secundarios de este medicamento no son comunes, podrían llegar a presentarse. Por la
            acción del colirio se producirá miosis y espasmo ciliar. Es normal que se produzca una disminución
            de la agudeza visual, especialmente en condiciones de iluminación deficiente y en pacientes de
            edad avanzada, por lo que debe evitarse la conducción nocturna.
          </p>
        </div>
        <div style="margin-top: -15px">
          <ul>
            <li style="margin-top: -10px">
              <p>Hipersensibilidad local y dolor de cabeza temporal o supraorbital</p>
            </li>
            <li style="margin-top: -10px">
              <p>Visión empañada o tenue</p>
            </li>
            <li style="margin-top: -10px">
              <p>Picazón, ardor o dolor en los ojos</p>
            </li>
            <li style="margin-top: -10px">
              <p>Prurito o enrojecimiento de los ojos</p>
            </li>
            <li style="margin-top: -10px">
              <p>Lagrimeo o hinchazón (inflamación) de los ojos</p>
            </li>
            <li style="margin-top: -10px">
              <p>Enrojecimiento de los párpados</p>
            </li>
            <li style="margin-top: -10px">
              <p>Cefalea (dolor de cabeza)</p>
            </li>
          </ul>
        </div>
        <div v-show="reg.opcion_hc018 == 'AUTORIZAR'">
          <div class="row">
            <p style="font-weight: bold; font-size: 17px">
              DECLARACION DEL REPRESENTANTE LEGAL, FAMILIAR, TUTOR O ACUDIENTE DEL PACIENTE:
            </p>
          </div>
          <div class="row text-justify">
            <p>Se que el paciente por sus condiciones de</p>
            <q-input v-model="reg.condicion_paci" type="text" class="col-3" dense />
            <p>es considerado por ahora incapaz de tomar por sí mismo la</p>
            <p>
              decisión de aceptar o rechazar la anestesia antes indicada, por lo cual, YO identificado con
              documento de identidad Nº en calidad de (co
            </p>
            <p>locar parentesco o tipo de representatividad legal)</p>
            <q-input v-model="reg.parentesco" type="text" class="col-3" dense />
            <p>doy autorización para que el(los) Doctor(a)(es)</p>
            <q-input v-model="getProf.descrip" type="text" class="col-4" disable dense />
            <p>
              y el personal auxiliar que el precise, efectúen la anestesia antes descrita, y los procedimient-
            </p>
            <p>
              os complementarios que sean necesarios durante la realización de esta, a juicio de los
              profesionales que lo lleven a cabo. En cualquier caso, deseo respeten las siguientes
              condiciones:
            </p>
            <Input_
              style="min-width: 100%; display: inline-block"
              v-model="reg.condiciones"
              :field="form.condiciones"
            />
          </div>
        </div>
        <div class="row">
          <p style="font-weight: bold; font-size: 17px">DECLARACION DEL MEDICO TRATANTE:</p>
        </div>
        <div class="row text-justify">
          <p>Medico(s) responsable(s):</p>
          <q-input v-model="getProf.descrip" type="text" class="col-4" disable dense />
          <p>, he informado al Paciente del propósito y naturaleza del proce-</p>
          <p style="margin-top: -5px">
            dimiento descrito arriba, de sus alternativas, posibles riesgos y de los resultados que se
            esperan. Considero que el (la) paciente, comprende completamente lo explicado.
          </p>
        </div>
        <div class="row" v-show="reg.opcion_hc018 == 'REVOCAR'">
          <p style="font-weight: bold; font-size: 17px">DENEGACIÓN O REVOCACIÓN:</p>
          <p class="text-justify">
            Después de ser informado/a de la naturaleza y riesgos del procedimiento propuesto, manifiesto de
            forma libre y consciente mi <ins class="text-bold">denegación/revocación</ins> (táchese lo que no
            proceda) para su realización, haciéndome responsable de las consecuencias que puedan derivarse de
            esta decisión
          </p>
          <Input_
            style="min-width: 100%; display: inline-block"
            v-model="reg.revocar_motivos"
            :field="form.revocar_motivos"
          />
        </div>
      </q-form>
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
          :disable="reg.opcion_hc018 ? false : true"
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
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat, evaluarParentesco } from "@/formatos/utils";
// import { impresionHIC005, impresion, generarArchivo } from "@/impresiones";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const router = useRouter();
const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const CONSEN800 = defineAsyncComponent(() => import("@/components/consen/CONSEN800.vue"));

const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const llave = ref(null);
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const firma_prof = ref(null);
const huella_paci = ref(null);

const reg = ref({
  opcion_hc018: "",
  fecha_act: "",
  hora_act: "",
  condiciones: "",
  parentesco: "",
  revocar_motivos: "",
});

const form = ref({
  condiciones: {
    id: "condiciones",
    maxlength: "285",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
  revocar_motivos: {
    id: "revocar_motivos",
    maxlength: "285",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
});

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  reg.value.hora_act = dayjs().format("HH:mm");
  llave.value = getHc.llave.slice(15);
  getSesion.paren_acomp != "" ? (reg.value.parentesco = evaluarParentesco(getSesion.paren_acomp)) : "";
  getFirmaProf();
});

const validarDatos = () => {};

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};
</script>
<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
