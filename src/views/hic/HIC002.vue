<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <div class="text-center">
        <q-toggle
          v-model="reg.opcion_hic002"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="reg.opcion_hic002 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip :color="reg.opcion_hic002 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="reg.opcion_hic002">
            {{ reg.opcion_hic002 }}
          </q-chip>
        </p>
      </div>

      <div>
        <p>
          <InputF_ v-model="reg.fecha_act" disable width="100" />
          <InputF_ v-model="reg.hora_act" disable width="100" />
        </p>
      </div>

      <div>
        <p>
          Yo {{ reg_firmador.descrip }}, identificado con documento No.{{ reg_firmador.cod }} , mayor de edad y/o responsable del paciente
          {{ acudiente_de.descrip || "________________" }} identificado con No. {{ acudiente_de.cod || "________________" }}, actuando en nombre
          propio en pleno uso de mis facultades, libre y consciente declaro: Que por mi propia voluntad y pleno conocimiento de riesgos complicaciones
          explicadas por el personal médico, he decidido solicitar el retiro voluntario, eximiendo de toda responsabilidad a esta institución y al
          personal que en ella labora, por las consecuencias que puedan sobrevenir por mi determinación
        </p>
      </div>

      <div>
        <p>
          <InputF_ v-model="reg.fecha_act" disable width="100" />
          <InputF_ v-model="reg.hora_act" disable width="100" />
        </p>
      </div>

      <div class="text-bold q-mb-sm">DIAGNOSTICOS DE INGRESO</div>
      <span>- {{ reg.descrip_diagnostico || "Sin diagnosticos" }} </span>
      <div class="text-bold q-my-md">MOTIVO DEL RETIRO</div>
      <TextArea_ v-model="reg.motivo_retiro" :field="form.motivo_retiro" />
      <div class="text-bold q-my-md">OBSERVACIONES</div>
      <TextArea_ v-model="reg.observaciones" :field="form.observaciones" />
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
import { useModuleFormatos } from "@/store";
import { ref, defineAsyncComponent, onMounted } from "vue";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const { getPaci, getAcomp, getHc, getProf, getEmpresa } = useModuleFormatos();

const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);
const acudiente_de = ref(getAcomp.cod ? { descrip: getPaci.descrip, cod: getPaci.cod } : "");
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);

const form = ref({
  motivo_retiro: {
    id: "motivo_retiro",
    label: "",
    maxlength: "380",
    required: true,
    campo_abierto: true,
  },
  observaciones: {
    id: "observaciones",
    label: "",
    maxlength: "380",
    required: true,
    campo_abierto: true,
  },
});

const reg = ref({
  // extras
  descrip_diagnostico: "",
  opcion_hic002: "",
  diagnostico: "",
  fecha_act: "",
  hora_act: "",
  fecha_ing: "",
  hora_ing: "",
});

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  reg.value.fecha_ing = dayjs().format("YYYY-MM-DD");
  reg.value.hora_act = dayjs().format("HH:mm");
  reg.value.hora_ing = dayjs().format("HH:mm");

  if (getHc.rips.diagn.length) {
    reg.value.diagnostico = getHc.rips.diagn[0].cod;
    reg.value.descrip_diagnostico = getHc.rips.diagn[0].descrip;
  }
});

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
</script>
