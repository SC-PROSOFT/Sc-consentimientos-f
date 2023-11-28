<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_hc010"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_hc010 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_hc010 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_hc010"
            >
              {{ reg.opcion_hc010 }}
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
        </div>
        <div class="q-mt-lg row">
          <p>Yo,</p>
          <q-input v-model="getPaci.descrip" type="text" class="col-5" disable dense />
          <p>, mayor de edad identificada con el documento N°:</p>
          <q-input v-model="getPaci.cod" type="text" class="col-2" disable dense />
          <p>de</p>
          <q-input v-model="getPaci.descrip_ciudad" type="text" class="col-2" disable dense />
          <p>, actuando en nombre propio en pleno uso de mis facultades, libre y consciente, declaro que:</p>
        </div>
        <div class="q-mt-lg row">
          <p>
            Otorgo mi consentimiento para que sea practicado el procedimiento de
            <span style="font-weight: bold">TOMA DE CITOLOGIA VAGINAL COMO TAMIZAJE</span> del cual se me
            brindo información y se me han explicado tanto la necesidad de hacerlo como los riesgos
          </p>
          <p>
            El procedimiento anteriormente descrito no requiere anestesia, Favorece el diagnóstico oportuno de
            cáncer de cuello uterino, ya que detecta a tiempo cambios celulares
          </p>
          <p>
            Se realiza con la ayuda de un espéculo, un cepillo pequeño con el que se toma la muestra en la
            parte interna y una espátula con la que se hace lo mismo pero en la parte externa; estas muestras
            de células se extienden sobre una lámina de vidrio para luego ser analizadas en el laboratorio.
          </p>
          <p>La toma de la citología no representa riesgo para la salud de la paciente</p>
          <p>
            NO es un examen doloroso pero puede considerarse un poco incómodo si la mujer está tensa en el
            momento de tomar la muestra
          </p>
        </div>
        <div style="border: 1px solid #ccc"></div>
        <div class="text-center" v-show="reg.opcion_hc010 == 'AUTORIZAR'">
          <p>Certifico que se me ha explicado el procedimiento y entiendo sus posibles riesgos</p>
          <p style="font-weight: bold">HE LEIDO Y ACEPTO REALIZARME EL PROCEDIMIENTO</p>
        </div>
        <div class="q-mt-lg" style="border: 1px solid #ccc" v-show="reg.opcion_hc010 == 'REVOCAR'">
          <div class="row justify-center">
            <p style="font-weight: bold">REVOCACIÓN</p>
          </div>
          <div class="q-mb-lg row">
            <p>
              Expreso mi voluntad de
              <ins class="text-bold">revocar</ins> revocar el consentimiento presentado y declaro por tanto
              que, tras la información recibida, no consiento someterme al procedimiento de TOMA DE CITOLOGIA
              VAGINAL COMO TAMIZAJE.
            </p>
            <p>por los siguientes motivos:</p>
            <Input_
              style="min-width: 100%; display: inline-block"
              v-model="reg.revocar_motivos"
              :field="form.revocar_motivos"
            />
          </div>
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
          :disable="reg.opcion_hc004 ? false : true"
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
import { utilsFormat } from "@/formatos/utils";
// import { impresionHIC004, impresion, generarArchivo } from "@/impresiones";
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
  opcion_hc010: "",
  fecha_act: "",
  revocar_motivos: "",
});

const form = ref({
  revocar_motivos: {
    id: "revocar_motivos",
    maxlength: "285",
    label: "",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
});
onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
