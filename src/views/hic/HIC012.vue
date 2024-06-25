<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_lab012"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_lab012 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_lab012 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_lab012"
            >
              {{ reg.opcion_lab012 }}
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

        <div class="text-bold text-center">
          CONSENTIMIENTO INFORMADO INSERCIÓN Y/O RETIRO IMPLANTE SUBDÉRMICO JADELL
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
            Otorgo mi consentimiento para que sea practicado el procedimiento de
            <Select_
              style="min-width: 100px; display: inline-block"
              v-model="reg.tipo_proced"
              :field="form.tipo_proced"
              :items="[
                { value: 'I', label: 'Inserción' },
                { value: 'R', label: 'Retiro' },
              ]"
            />
            implante subdérmico del cual se me brindo iunformacón y se me han explicado tanto la necesidad de
            hacerlo como los riesgos
          </p>
        </div>
        <div class="text-bold">DECLARO QUE:</div>
        <div>
          <ol>
            <li>
              Me han explicado en un lenguaje claro y comprensible la naturaleza y propósito del
              procedimiento, también me han informado de las ventajas, complicaciones, molestias y riesgos que
              pueden producirse, tales como dolor, equimosis, edema, infeccione en el sitio de la incisión,
              entre otras.
            </li>
            <li>
              Se me ha dado la oportunidad de hacer preguntas y mis preguntas han sido contestadas
              satisfactoriamente.
            </li>
            <li>
              Se me ha informado plenamente que retirado el implante y al no iniciar inmediatamente otro
              método de planificación familiar tengo la oportunidad de quedar embarazada.
            </li>
            <li>
              Se me ha informado de todos los signos de alarma por los cuales debo consultar una vez se me
              haya realizado el procedimiento tales como: dolor, moderado a severo, fiebre, sangrado y salida
              de secreción por el sitio de incisión, escalofríos, entre otras
            </li>
            <li>Tengo la opción de decidir en contra del procedimiento.</li>
          </ol>
          Certifico que he leído y comprendido perfectamente lo anterior y que todos los espacios en blanco
          han sido completados antes de mi firma y por tanto
          <span class="text-bold">ACEPTO REALIZAR EL PROCEDIMIENTO</span>.
        </div>
      </q-form>
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
// import { impresionHC030, impresion, generarArchivo } from "@/impresiones";
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
  tipo_proced: "",

  //extras
  opcion_lab012: "",
  fecha_act: "",
  edad: "",
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
  reg.value.edad = calcEdad(getPaci.nacim);
  getFirmaProf();
});

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = () => {};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
</script>
