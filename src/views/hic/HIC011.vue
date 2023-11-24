<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_hc011"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_hc011 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_hc011 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_hc011"
            >
              {{ reg.opcion_hc011 }}
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
        <div class="q-mt-lg row">
          <p>Yo,</p>
          <q-input v-model="getAcomp.descrip" type="text" class="col-4" disable dense />
          <p>, mayor de edad identificada(o) con el documento N°</p>
          <q-input v-model="getAcomp.cod" type="text" class="col-2" disable dense />
          <p>de</p>
          <q-input v-model="getAcomp.descrip_ciudad" type="text" class="col-2" disable dense />
          <p>
            , actuando en nombre propio en pleno uso de mis facultades, libre y consciente y como
            representante con el paren-
          </p>
          <p>tesco de</p>
          <q-input v-model="parentesco_acomp" type="text" class="col-2" disable dense />
          <p>del paciente</p>
          <q-input v-model="getPaci.descrip" type="text" class="col-4" disable dense />
          <p>identificado(a) con</p>
          <q-input v-model="getPaci.cod" type="text" class="col-2" disable dense />
          <p>declaro que:</p>
        </div>
        <div class="row">
          <p class="text-justify">
            He sido informado que la condicion del paciente y solicito al personal medico del
          </p>
          <q-input v-model="getEmpresa.nomusu" type="text" class="col-5" disable dense />
          <p class="text-justify" style="margin-top: -5px">
            para que suspenda las acciones de reanimacion (conjunto de medidas terapeuticas que se aplican
            para recuperar o mantener las constantes vitales del organismo) de mi familiar.
          </p>
          <p class="text-justify">
            En el caso y nivel de atencion del <span style="font-weight: bold">PENDIENTE</span>, las que
            corresponden a reanimacion cardiocerebro-pulmonar, las cuales estan destinadas a asegurar la
            oxigenacion de los organos vitales cuando la persona ha dejado de respirar o el corazon ha cesado
            de palpitar
          </p>
        </div>
        <div class="row" v-show="reg.opcion_hc011 == 'AUTORIZAR'">
          <p class="text-justify">
            Por lo anterior manifiesto que conozco que todas las decisiones medicas se asientan en dos
            factores, el primero de ellos es tecnico, se refiere al concepto medico deacuerdo a la lexartis y
            el segundo es la aceptacion del paciente o familiar, en este caso actuando como representante del
            paciente debido a la gravedad de su estado de salud.
          </p>
        </div>
        <div class="row" v-show="reg.opcion_hc011 == 'REVOCAR'">
          <p class="text-justify">
            Expreso mi voluntad de
            <ins class="text-bold">revocar</ins> revocar el consentimiento presentado y declaro por tanto que,
            tras la información recibida, no consiento la realizacion de la solicitud anteriormente mencionada
            por los siguientes motivos:
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
          :disable="reg.opcion_hc011 ? false : true"
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
let parentesco_acomp = ref(null);

const reg = ref({
  opcion_hc011: "",
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
  getSesion.paren_acomp != "" ? (parentesco_acomp = evaluarParentesco(getSesion.paren_acomp)) : "";
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
  data_firma && (firma_recibida_acomp.value = data_firma.slice(22));
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma.slice(22));
};
</script>
<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
