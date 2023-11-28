<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_hc013"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_hc013 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_hc013 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_hc013"
            >
              {{ reg.opcion_hc013 }}
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
          <p>, identificada(o) con el documento N°</p>
          <q-input v-model="getAcomp.cod" type="text" class="col-2" disable dense />
          <p>, mayor de edad y/o</p>
          <p>responsable del paciente</p>
          <q-input v-model="getPaci.descrip" type="text" class="col-4" disable dense />
          <p>, identificada(o) con</p>
          <q-input v-model="getPaci.tipo_id" type="text" class="col-1" disable dense />
          <p>No.</p>
          <q-input v-model="getPaci.cod" type="text" class="col-2" disable dense />
          <p>de</p>
          <q-input v-model="getPaci.descrip_ciudad" type="text" class="col-1" disable dense />
          <p>, actuando en nombre propio en pleno uso de mis facultades, libre y consciente declaro que:</p>
        </div>
        <div class="row" style="margin-top: -10px">
          <ol>
            <li>
              <p>
                Me han explicado en un lenguaje claro y comprensible la naturaleza y propósito del
                procedimiento, también me han informado de las ventajas, complicaciones, molestias y riesgos
                que pueden producirse, tales como dolor, infección, reactivación de enfermedad pélvica,
                desgarro cervical, entre otras.
              </p>
            </li>
            <li>
              <p>Se ha verificado que actualmente no me encuentro embarazada.</p>
            </li>
            <li>
              <p>
                Se me ha dado la oportunidad de hacer preguntas y mis preguntas han sido contestadas
                satisfactoriamente.
              </p>
            </li>
          </ol>
        </div>
        <div class="row" v-show="reg.opcion_hc013 == 'AUTORIZAR'">
          <p class="text-justify">
            He leído (o se me ha leído) el documento sobre el consentimiento informado que contiene
            información sobre todos los métodos existentes de planificación familiar. Ventajas, desventajas,
            contraindicaciones, signos de alarma, consecuencias del uso de cada uno, molestias posteriores, y
            además comprendo las complicaciones de este procedimiento. Por lo tanto, la paciente realiza la
            elección de este método, comprometiéndose a acudir a sus controles periódicos.
          </p>
          <p class="text-justify">
            He recibido consejería previa a la decisión de elección de este método en forma voluntaria, y sin
            presiones, he expresado todas mis dudas y que me hayan sido resueltas todas las preguntas, por lo
            tanto, firmo la presente autorización escrita.
          </p>
        </div>
        <div class="row" v-show="reg.opcion_hc013 == 'REVOCAR'">
          <p class="text-justify">
            Expreso mi voluntad de
            <ins class="text-bold">revocar</ins> revocar el consentimiento presentado y declaro por tanto que,
            tras la información recibida, no consiento la realizacion del procedimiento anteriormente
            mencionada por los siguientes motivos:
          </p>
          <Input_
            style="min-width: 100%; display: inline-block"
            v-model="reg.revocar_motivos"
            :field="form.revocar_motivos"
          />
        </div>
        <div class="row">
          <Input_ style="min-width: 20%; display: inline-block" v-model="edad_paci" :field="form.edad" />
          <Input_
            style="min-width: 20%; display: inline-block"
            v-model="getPaci.telefono"
            :field="form.telefono"
          />
          <Input_
            style="min-width: 58%; display: inline-block"
            v-model="getPaci.direccion"
            :field="form.direccion"
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
          :disable="reg.opcion_hc013 ? false : true"
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
import { utilsFormat, calcEdad } from "@/formatos/utils";
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
const edad_paci = ref(null);

const reg = ref({
  opcion_hc013: "",
  fecha_act: "",
  hora_act: "",
  revocar_motivos: "",
});

const form = ref({
  edad: {
    id: "edad",
    maxlength: "3",
    label: "Edad",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
  telefono: {
    id: "telefono",
    maxlength: "10",
    label: "Telefono",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
  direccion: {
    id: "direccion",
    maxlength: "100",
    label: "Dirección",
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
  edad_paci.value = `${calcEdad(getPaci.nacim)} Años`;
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
