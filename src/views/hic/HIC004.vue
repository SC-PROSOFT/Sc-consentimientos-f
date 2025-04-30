<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_hc004"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_hc004 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="reg.opcion_hc004 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="reg.opcion_hc004">
              {{ reg.opcion_hc004 }}
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
          <p>, identificado (a) con cedula numero</p>
          <q-input v-model="getPaci.cod" type="text" class="col-2" disable dense />
          <p>expedida en</p>
          <q-input v-model="getPaci.descrip_ciudad" type="text" class="col-2" disable dense />
          <p>actuando en nombre propio. Por medio de la presente, declaro que el doctor</p>
          <q-input v-model="getProf.descrip" type="text" class="col-3" disable dense />
          <p>, identificado (a) con cédula N°</p>
          <q-input v-model="getProf.cod" type="text" class="col-2" disable dense />
          <p>me ha informado sobre su intención de divulgar y hacer público el caso clínico correspondiente a:</p>
          <q-input
            placeholder="Ingrese nombre completo"
            v-model="reg.nombre_corrspndnte"
            type="textarea"
            maxlength="50"
            class="col-6"
            autogrow
            counter
            dense
          />
          <q-input
            placeholder="Ingrese número de identificación"
            v-model="reg.nombre_corrspndnte"
            class="q-ml-lg col-3"
            type="textarea"
            maxlength="15"
            autogrow
            counter
            dense
          />
          <p class="text-justify">
            Con propósitos puramente académicos y científicos, haciendo uso de la información que de forma verídica le he referido, exámenes de
            laboratorio y demás estudios que él ha considerado pertinentes. Del mismo modo solicita mi permiso para tomar fotografías clínicas que
            serán utilizadas de manera profesional. Manifiesto que he sido informado que esta información podrá ayudar a personas que padezcan la
            misma condición médica, que la identidad no será revelada y que siempre se velará por que la privacidad y anonimato se mantengan en todo
            momento, así mismo no recibiré una contribución económica por el uso de dicha información.
          </p>
        </div>
        <div class="row" v-show="reg.opcion_hc004 == 'AUTORIZAR'">
          <p class="text-justify">
            Basado en lo anterior, autorizo al doctor la reproducción de la información antes mencionada y el uso de las fotografías que ha tomado
            bajo mi autorización.
          </p>
        </div>
        <div class="row" v-show="reg.opcion_hc004 == 'REVOCAR'">
          <p class="text-justify">
            Expreso mi voluntad de
            <ins class="text-bold">revocar</ins> revocar el consentimiento presentado y declaro por tanto que, tras la información recibida, no
            consiento la divulgación del contenido anteriormente mencionado
          </p>
          <p>por los siguientes motivos:</p>
          <Input_ style="min-width: 100%; display: inline-block" v-model="reg.revocar_motivos" :field="form.revocar_motivos" />
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
  opcion_hc004: "",
  fecha_act: "",
  nombre_corrspndnte: "",
  id_corrspndnte: "",
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
