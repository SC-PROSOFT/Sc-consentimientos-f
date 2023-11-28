<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_hc019"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_hc019 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_hc019 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_hc019"
            >
              {{ reg.opcion_hc019 }}
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
          <p>
            En pleno uso de mis facultades mentales, libre y conscientemente declaro que doy mi consentimiento
            al Odontólogo(a) de la IPS, para formular y realizar el tratamiento requerido.
          </p>
          <p>
            Autorizo al odontólogo(a) para proveer servicios adicionales que considere razonables y necesarios
            para la salud, incluyendo la administración de anestesia que sea necesaria, exámenes de
            laboratorio, y la preparación de servicios que incluyan estudios de patología, estudios de
            radiología.
          </p>
          <p>
            Autorizo al odontólogo(a) para proveer servicios adicionales que considere razonables y necesarios
            para la salud, incluyendo la administración de anestesia que sea necesaria, administración de
            sangre y productos sanguíneos, hospitalización, profilaxis antibiótica, exámenes de laboratorio, y
            la preparación de servicios que incluyan estudios de patología, estudios de radiología.
          </p>
          <p>
            Me han informado sobre los beneficios y posibles riesgos del procedimiento, y resultados
            desfavorables; como pueden ser fracturas coronal, fractura radicular, laceración de los tejidos
            blandos, necrosis ,celulitis, fractura de la tabla ósea, fractura de instrumental, comunicación
            oroantral, transportación de nervios, fractura de tuberosidad, fractura de restauraciones
            adyacentes, deglución de diente, luxación de diente adyacente, crisis
            hipertensiva,hematoma,alveolitis post exodoncia, hemorragia post exodoncia, alergia a los guantes
            u otros materiales usados en la práctica, trismus, fractura alveolar,parestesia,isquemia en la
            zona de la infiltración, parálisis del velo del paladar. Leí cuidadosamente y antes de firmarlo he
            tenido la oportunidad de aclarar las dudas del procedimiento, Igualmente estoy enterado (a) que
            las coronas, las prótesis total, las prótesis removible, los tratamientos de ortodoncia, los
            tratamientos periodontales y las radiografías panorámicas, no están cubiertos por el Plan
            Obligatorio de Salud.
          </p>
          <p>
            Se entiende por procedimiento quirúrgico todo procedimiento en la consulta odontológica en el cual
            los tejidos orales entran en contacto con el medio ambiente oral, tales como: exodoncia simple,
            exodoncia método abierto de dientes temporales y/o permanentes, biopsias, frenillectomias, cirugía
            de tejidos blandos, remodelado óseo.
          </p>
          <p>
            Certifico que el odontólogo(a) de la IPS, me ha explicado el procedimiento a realizar, las causas
            por las cuales es necesario, el pronóstico del diente a tratar y las posibles complicaciones más
            frecuentes que pueden surgir durante el mismo.
          </p>
          <p>
            He tenido la oportunidad de hacer las preguntas que he considerado necesarias y todas han sido
            contestadas satisfactoriamente.
          </p>
          <p>
            Me comprometo, por otra parte a asistir a los debidos controles que el odontólogo(a) de la IPS
            considere pertinentes después del procedimiento realizado. Igualmente estoy enterado (a) que las
            coronas, prótesis totales, prótesis removible, tratamientos de ortodoncia, tratamientos
            periodontales y radiografía panorámica, no están cubiertos por el plan obligatorio de salud.
          </p>
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
          :disable="reg.opcion_hc019 ? false : true"
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
  opcion_hc019: "",
  fecha_act: "",
  hora_act: "",
  revocar_motivos: "",
});

const form = ref({
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
