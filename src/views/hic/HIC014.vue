<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_hc014"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_hc014 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_hc014 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_hc014"
            >
              {{ reg.opcion_hc014 }}
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
        <div class="q-mt-lg row" v-if="getAcomp.cod.length == 0">
          <p>Yo,</p>
          <q-input v-model="getPaci.descrip" type="text" class="col-4" disable dense />
          <p>, identificada(o) con el documento N°</p>
          <q-input v-model="getPaci.cod" type="text" class="col-2" disable dense />
          <p>, actuando en nombre</p>
          <p>propio en pleno uso de mis facultades, libre y consciente declaro que:</p>
        </div>
        <div class="q-mt-lg row" v-else>
          <p>Yo,</p>
          <q-input v-model="getAcomp.descrip" type="text" class="col-4" disable dense />
          <p>, mayor de edad identificada(o) con documento N°</p>
          <q-input v-model="getAcomp.cod" type="text" class="col-2" disable dense />
          <p>de</p>
          <q-input v-model="getAcomp.descrip_ciudad" type="text" class="col-2" disable dense />
          <p>
            , actuando en nombre propio en pleno uso de mis facultades, libre y consciente, o como responsable
            del menor
          </p>
          <q-input v-model="getPaci.descrip" type="text" class="col-4" disable dense />
          <p>No.</p>
          <q-input v-model="getPaci.cod" type="text" class="col-2" disable dense />
          <p>, declaro que:</p>
        </div>
        <div class="row" v-show="reg.opcion_hc014 == 'AUTORIZAR'">
          <p>
            Otorgo mi consentimiento para que sea practicado el procedimiento
            <span style="font-weight: bold"
              >(marque con una x el/los procedimiento(s) que le van a realizar mencionados en el cuadro
              1)</span
            >
            del cual se me brinda información y se me han explicado tanto la necesidad de hacerlo como los
            riesgos del mismo
          </p>
        </div>
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="font-weight: bold; margin-top: 10px">Procedimientos</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 10%">
            <p style="font-weight: bold; margin-top: 10px">Selección</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="font-weight: bold; margin-top: 10px">Riesgos</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">Hospitalización (área general o aislamiento respiratorio)</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 10%">
            <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg.hospit"
              :label="reg.hospit == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">Infecciones nosocomiales, caídas, deterioro clínico, muerte.</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">
              Canalización, inyectología, administración de medicamentos y toma de muestras.
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 10%">
            <q-checkbox
              class="q-pt-md"
              style="margin-top: -5px"
              left-label
              v-model="reg.cana_inye_adm_med"
              :label="reg.cana_inye_adm_med == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">
              Dolor, infiltración, infección, cicatrices, flebitis, reacciones adversas, anafilaxia, muerte.
            </p>
          </div>
          <div class="q-pt-sm text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">Sutura de heridas bajo anestesia local</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 10%">
            <q-checkbox
              class="q-pt-md"
              style="margin-top: -5px"
              left-label
              v-model="reg.sutura_anes_loc"
              :label="reg.sutura_anes_loc == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">
              Infección, dolor, requerimiento de reintervención, sangrado, resultados estéticos desfavorables,
              alergias.
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">Inserción y retiro de sondas (vesical, orogástrica, nasogástrica)</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 10%">
            <q-checkbox
              class="q-pt-md"
              style="margin-top: -5px"
              left-label
              v-model="reg.i_r_sondas"
              :label="reg.i_r_sondas == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">
              Desgarro y/o ruptura de las estructuras, hemorragia, infección, edema, dolor.
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">Lavado ótico/ocular/curación de heridas</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 10%">
            <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg.lav_otic_ocular"
              :label="reg.lav_otic_ocular == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">Lesión de estructuras, dolor, infecciones.</p>
          </div>
          <div class="q-pt-md text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">Sedación</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 10%">
            <q-checkbox
              class="q-pt-md"
              style="margin-top: -5px"
              left-label
              v-model="reg.sedacion"
              :label="reg.sedacion == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">
              Insuficiencia respiratoria, lesiones cerebrales, arritmias cardiacas, parada cardiaca, muerte.
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">Inmovilización física</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 10%">
            <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg.inmov_fisica"
              :label="reg.inmov_fisica == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">Lesión de estructuras, ansiedad, agitación psicomotora.</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">Traslado en ambulancia a otra institución</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 10%">
            <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg.trasl_ambul"
              :label="reg.trasl_ambul == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 45%">
            <p style="margin-top: 10px">Lesiones, traumatismos, muerte.</p>
          </div>
        </div>
        <div class="row">
          <p>
            Maniobras de reanimación avanzada (compresiones torácicas, desfibrilación, intubación orotraqueal
            y ventilación mecánica):
          </p>
          <q-checkbox
            class="q-pt-sm q-ml-md"
            style="margin-top: -15px"
            left-label
            v-model="reg.maniobra_reani"
            :label="reg.maniobra_reani == false ? 'NO' : 'SI'"
          />
        </div>
        <div class="row" v-show="reg.opcion_hc014 == 'AUTORIZAR'">
          <p class="text-justify">
            Certifico que se me ha explicado el procedimiento y entiendo los posibles riesgos y
            complicaciones, también he sido explicado de los cuidados que debo tener posterior al egreso, Así
            mismo he sido explicado de los riesgos y posibles complicaciones de no aceptar la realización de
            los procedimientos indicados por el profesional, por lo cual tomo la decisión con la suficiente
            información, de manera libre y consiente, bajo mi responsabilidad.
          </p>
        </div>
        <div class="row" v-show="reg.opcion_hc014 == 'REVOCAR'">
          <p class="text-justify">
            Expreso mi voluntad de
            <ins class="text-bold">revocar</ins> revocar el consentimiento presentado y declaro por tanto que,
            tras la información recibida, no consiento la realizacion de los procedimientos anteriormente
            mencionados por los siguientes motivos:
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
          :disable="reg.opcion_hc014 ? false : true"
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
  opcion_hc014: "",
  fecha_act: "",
  hora_act: "",
  revocar_motivos: "",
  hospit: false,
  cana_inye_adm_med: false,
  sutura_anes_loc: false,
  i_r_sondas: false,
  lav_otic_ocular: false,
  sedacion: false,
  inmov_fisica: false,
  trasl_ambul: false,
  maniobra_reani: false,
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
