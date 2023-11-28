<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_hc009"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_hc009 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_hc009 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_hc009"
            >
              {{ reg.opcion_hc009 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p>Yo,</p>
          <q-input v-model="getPaci.descrip" type="text" class="col-5" disable dense />
          <p>, mayor de edad identificado con el documento N°</p>
          <q-input v-model="getPaci.cod" type="text" class="col-2" disable dense />
          <p>de</p>
          <q-input v-model="getPaci.descrip_ciudad" type="text" class="col-2" disable dense />
          <p>
            actuando en nombre propio en pleno uso de mis facultades, libre y consciente, o como responsable
            del menor
          </p>
          <p>declaro que:</p>
        </div>
        <div class="row" style="margin-top: -30px">
          <ol>
            <li>
              <p>
                Otorgo mi consentimiento para el ingreso al servicio de HOSPITALIZACION de acuerdo a los
                diagnósticos y plan de tratamiento, por orden del médico: {{ getProf.descrip }}
              </p>
            </li>
            <li>
              <p>
                Acepto los servicios adicionales que requiera dentro de la estancia hospitalaria como
                canalización, estudios de laboratorios, radiográficos, así como la administración de
                medicamentos.
              </p>
            </li>
            <li>
              <p>
                Certifico que me han explicado las NORMAS DE LA INSTITUCIÓN PARA PACIENTES HOSPITALIZADOS, los
                horarios de visita y las restricciones.
              </p>
            </li>
            <li>
              <p>
                Acepto el ingreso al servicio de hospitalización y entiendo que hay riesgos como las caídas,
                por lo cual se deben mantener arriba las barandas de las camas.
              </p>
            </li>
            <li>
              <p>
                Tengo derecho a determinar a quien se puede proporcionar información sobre mi estado de salud,
                incluido la ampliación de esta información, y las personas a quienes no se les puede
                proporcionarla esta, soy consciente de que, en caso de empeoramiento de mi estado de salud, se
                les informara a las personas designadas y fue informado sobre la posibilidad de determinación
                en la toma de decisión en mi lugar si no puedo pronunciar el consentimiento.
              </p>
            </li>
            <li>
              <p>
                Prohíbo la prestación de información sobre mi estado de salud a cualquiera de las siguientes
                personas:
              </p>
              <Input_
                style="min-width: 95%; display: inline-block"
                v-model="reg.personas_prohibidas"
                :field="form.personas_prohibidas"
              />
            </li>
            <li>
              <p>
                Fui informado, que está prohibido grabar videos, audios o hacer grabaciones audiovisuales
                durante el tiempo de estancia hospitalaria hacia el personal médico y asistencial.
              </p>
            </li>
            <li>
              <p>Fui informado sobre la prohibición de fumar en el área de hospitalización.</p>
            </li>
          </ol>
        </div>
        <div class="text-center" v-show="reg.opcion_hc009 == 'AUTORIZAR'">
          <div class="row justify-center">
            <p style="font-weight: bold">AUTORIZACIÓN</p>
          </div>
          <div class="q-mb-lg row">
            <p>Certifico y autorizo mi ingreso siendo consciente de las pautas establecidas anteriormente las cuales acepto</p>
          </div>
        </div>
        <div class="q-mt-lg" style="border: 1px solid #ccc" v-show="reg.opcion_hc009 == 'REVOCAR'">
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
          :disable="reg.opcion_hc009 ? false : true"
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
  opcion_hc009: "",
  fecha_act: "",
  personas_prohibidas: "",
  revocar_motivos: "",
});

const form = ref({
  personas_prohibidas: {
    id: "personas_prohibidas",
    maxlength: "100",
    label: "Nombres de las personas",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
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
