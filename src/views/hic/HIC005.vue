<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_hc005"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_hc005 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="reg.opcion_hc005 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="reg.opcion_hc005">
              {{ reg.opcion_hc005 }}
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
          <q-input v-model="getPaci.descrip" type="text" class="col-5" disable dense />
          <p>, mayor de edad identificado con el documento N°</p>
          <q-input v-model="getPaci.cod" type="text" class="col-2" disable dense />
          <p>de</p>
          <q-input v-model="getPaci.descrip_ciudad" type="text" class="col-2" disable dense />
          <p>actuando en nombre propio en pleno uso de mis facultades, libre y consciente, o como responsable del menor,</p>
          <p>declaro que:</p>
          <Input_ style="min-width: 100%; display: inline-block" v-model="reg.rechazo_remitido" :field="form.rechazo_remitido" />
          <p>El doctor (a) / o responsable,</p>
          <q-input v-model="getProf.descrip" type="text" class="col-4" disable dense />
          <p>me ha explicado claramente la necesidad de ser trasladado a</p>
          <p style="margin-top: -5px">
            centro de mayor complejidad a razón de mis condiciones clínicas. Igualmente me han explicado de los riesgos y consecuencias al rechazar
            esta remisión, declaro la decisión de permanecer en esta institución por:
          </p>
          <Input_ style="min-width: 100%; display: inline-block" v-model="reg.motivo_rechazo" :field="form.motivo_rechazo" />
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
          :disable="reg.opcion_hc005 ? false : true"
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
import { useModuleFormatos, useApiContabilidad, useModuleCon851 } from "@/store";
import { ref, defineAsyncComponent, onMounted } from "vue";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const { getPaci, getAcomp, getHc, getProf, getEmpresa } = useModuleFormatos();
const { _getFirma$, _getHuella$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();

const llave = ref(null);
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const firma_prof = ref(null);
const huella_paci = ref(null);

const reg = ref({
  opcion_hc005: "",
  fecha_act: "",
  hora_act: "",
  nombre_corrspndnte: "",
  id_corrspndnte: "",
  rechazo_remitido: "Rechazo ser remitido a",
  motivo_rechazo: "",
});

const form = ref({
  rechazo_remitido: {
    id: "rechazo_remitido",
    maxlength: "100",
    label: "",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
  motivo_rechazo: {
    id: "motivo_rechazo",
    maxlength: "285",
    label: "Motivo rechazo",
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
