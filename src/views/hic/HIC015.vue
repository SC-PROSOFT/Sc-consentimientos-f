<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <div class="text-center">
        <q-toggle
          v-model="reg.opcion_hc015"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="reg.opcion_hc015 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip
            :color="reg.opcion_hc015 == 'AUTORIZAR' ? 'green' : 'red'"
            class="text-white"
            v-if="reg.opcion_hc015"
          >
            {{ reg.opcion_hc015 }}
          </q-chip>
        </p>
      </div>
      <div class="row q-mb-md">
        <Input_
          :modelValue="dayjs(getEmpresa.fecha_act).format('YYYY-MM-DD') + ' ' + dayjs().format('HH:mm')"
          :field="form.fecha_act"
          style="padding-left: 0"
        />
      </div>

      <div>
        <p>
          Yo <InputF_ v-model="reg_firmador.descrip" width="300" />, identificado con documento No.
          <InputF_ v-model="reg_firmador.cod" />, mayor de edad y/o responsable del paciente
          <InputF_ v-model="acudiente_de.descrip" />, identificado con No.
          <InputF_ v-model="acudiente_de.cod" /> de <InputF_ v-model="acudiente_de.descrip_ciudad" />,
          actuando en nombre propio en pleno uso de mis facultades, libre y consciente declaro que:
        </p>
        <p>
          Otorgo mi consentimiento para que sea practicado el procedimiento: (marque con una x el/los
          procedimiento(s) que le van a realizar mencionados en el cuadro 1.) del cual se me brinda
          información y se me han explicado tanto la necesidad de hacerlo como los riesgos del mismo
        </p>
      </div>
      <div class="row">
        <div class="col-5 border-format">Procedimientos</div>
        <div class="col-2 border-format">Seleccion</div>
        <div class="col-5 border-format">Riesgos</div>
      </div>
      <div class="row">
        <div class="col-5 border-format">Cardioversión (Por medio de descarga eléctrica o medicamentos)</div>
        <div class="col-2 border-format">
          <q-checkbox left-label class="col-12" v-model="reg.cardioversion" true-value="S" false-value="N" />
        </div>
        <div class="col-5 border-format">
          Arritmias, quemaduras, lesiones de estructuras, parada cardiaca, muerte.
        </div>
      </div>
      <div class="row">
        <div class="col-5 border-format">Reducción de luxaciones o fracturas.</div>
        <div class="col-2 border-format">
          <q-checkbox
            left-label
            class="col-12"
            v-model="reg.redu_luxa_fract"
            true-value="S"
            false-value="N"
          />
        </div>
        <div class="col-5 border-format">
          Lesión de estructuras, fracturas Oseas, dolor, requerimiento de reintervención.
        </div>
      </div>
      <div class="row">
        <div class="col-5 border-format">Toracostomia cerrada</div>
        <div class="col-2 border-format">
          <q-checkbox left-label class="col-12" v-model="reg.toracostomia" true-value="S" false-value="N" />
        </div>
        <div class="col-5 border-format">
          Lesión de estructuras, neumotórax, hemotórax, insuficiencia respiratoria, parada cardiaca, muerte.
        </div>
      </div>
      <div class="row">
        <div class="col-5 border-format">Atención del parto</div>
        <div class="col-2 border-format">
          <q-checkbox left-label class="col-12" v-model="reg.aten_parto" true-value="S" false-value="N" />
        </div>
        <div class="col-5 border-format">
          Hemorragia, lesiones de estructuras, infecciones, muerte materna o fetal.
        </div>
      </div>
      <div>
        <p>
          Maniobras de reanimación avanzada (compresiones torácicas, desfibrilación, intubación orotraqueal y
          ventilación mecánica):
          <Select_
            style="min-width: 100px; display: inline-block"
            v-model="reg.maniobra_reani"
            :field="form.tipo_proced"
            :items="[
              { value: 'S', label: 'Si' },
              { value: 'N', label: 'No' },
            ]"
          />
        </p>
        <p>
          Certifico que se me ha explicado el procedimiento y entiendo los posibles riesgos y complicaciones,
          también he sido explicado de los cuidados que debo tener posterior al egreso, Así mismo he sido
          explicado de los riesgos y posibles complicaciones de no aceptar la realización de los
          procedimientos indicados por el profesional, por lo cual tomo la decisión con la suficiente
          información, de manera libre y consiente, bajo mi responsabilidad.
        </p>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-actions align="around" class="row">
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
          :firmador="getAcomp.cod || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.cod ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
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
    </q-card-actions>
    <div class="row justify-center q-my-lg">
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
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { impresionHC030, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat, calcEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);
const acudiente_de = ref(getAcomp.cod ? getPaci.descrip : "");
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);

const reg = ref({
  cardioversion: "N",
  redu_luxa_fract: "N",
  toracostomia: "N",
  aten_parto: "N",
  maniobra_reani: "",

  //   extras
  opcion_hc015: "",
  hora_act: "",
  fecha_act: "",
});

const form = ref({
  fecha_act: {
    id: "fecha_act",
    label: "Fecha y hora",
    maxlength: "95",
    required: true,
    campo_abierto: false,
    disable: true,
  },
  tipo_proced: {
    id: "tipo_proced",
    required: true,
    campo_abierto: true,
  },
});

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  reg.value.hora_act = dayjs().format("HH:mm");
});

const validarDatos = () => {};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma.slice(22));
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma.slice(22));
};
</script>
