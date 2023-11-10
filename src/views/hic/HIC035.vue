<template>
  <q-form @submit="validarDatos">
    <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_hc035"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_hc035 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_hc035 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_hc035"
            >
              {{ reg.opcion_hc035 }}
            </q-chip>
          </p>
        </div>

        <div class="row">
          <p>Historia clínica numero:</p>
          <q-input type="text" disable dense v-model="reg.llave" class="col-2" />
          <p>Ciudad:</p>
          <q-input v-model="reg_firmador.descrip_ciudad" class="col-2 q-mr-md" type="text" disable dense />
          <p>Fecha:</p>
          <q-input v-model="reg.fecha_act" disable dense class="col-2" />
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-justify">Yo</p>
          <q-input v-model="reg_firmador.descrip" disable type="text" dense class="col-4" />
          <p class="text-justify">de</p>
          <q-input v-model="reg.edad" disable type="text" dense class="col-1" />
          <p class="text-justify">años de edad, de genero</p>
          <q-input v-model="reg_firmador.sexo" disable type="text" dense class="col-1" />
          <p class="text-justify">identificado(a) con</p>
          <p class="text-justify">documento de identidad N°</p>
          <q-input v-model="reg_firmador.cod" disable type="text" dense class="col-2" />
          <p class="text-justify">expedida en</p>
          <q-input v-model="reg_firmador.descrip_ciudad" disable type="text" dense class="col-2" />
          <p class="text-justify">con residencia en</p>
          <q-input v-model="reg_firmador.descrip_ciudad" disable type="text" dense class="col-2" />
          <p class="text-justify">teléfono número</p>
          <q-input v-model="reg_firmador.telefono" disable type="text" dense class="col-2" />
          <p class="text-justify">Actuando en nombre propio o como acudiente de</p>
          <q-input v-model="acudiente" disable type="text" dense class="col-3" />
          <p>en mi calidad de paciente y en pleno uso de mis facultades mentales y de</p>
          <div class="row" style="margin-top: -15px">
            <p class="text-justify">
              mis derechos de salud y habiendo solicitado por mi voluntad los servicios de salud a la empresa
              social del estado ESE salud Yopal, por medio del presente documento doy mi consentimiento
              informado para que se me brinden los cuidados correspondientes y se siga la conducta terapéutica
              según el criterio del profesional de salud tratante.
            </p>
          </div>
        </div>
        <div class="row">
          <p class="text-justify">
            Dejo constancia que he sido informado(a) y he recibido información y asesoría sobre el evento
            <q-input v-model="reg.evento" type="text" dense style="min-width: 100px; display: inline-block" />
            respecto del modo de contagio, estrategias y métodos de prevención, importancia de diagnostico y
            tratamiento de la pareja de ser necesario a quien le informaré mi estado actual para que reciba la
            asesoría, tratamiento y seguimientos que se requieran para evitar reinfecciones y/o transmisión de
            la enfermedad a otras personas con quien se tenga contacto. Fui informado(a) de las acciones que
            se seguirán: tratamiento y controles que debo realizar posterior al tratamiento médico, al cual
            debo ser adherente, y recibir oportunamente y de manera adecuada; Por lo anterior me comprometo a
            seguir las indicaciones dadas por el profesional de la salud respecto al evento presentado, de no
            seguir las indicaciones los principales riesgos que se pueden presentar: resistencia a
            medicamentos, náuseas, mareos, vomito, gastritis, reinfecciones.
          </p>
        </div>
        <div class="row">
          <p class="text-justify">
            Me garantizan la confidencialidad de mis resultados y la información que he proporcionado. De lo
            anterior
            <q-input
              v-model="reg.iniciar_trata"
              type="text"
              dense
              style="min-width: 100px; display: inline-block"
            />
            (SI, NO) acepto iniciar tratamiento y realizar los controles y seguimientos que se requieran de
            acuerdo a la patología en curso. Por lo tanto, en forma consciente y voluntaria, luego de haber
            escuchado la información y explicaciones, sin haber sido objeto de coacción, persuasión, ni
            manipulación manifiesto lo siguiente:
          </p>
        </div>
        <div class="row">
          <p>
            Me considero SATISFECHO con la información recibida y COMPRENDO la indicación, los beneficios,
            además de los riesgos y posibles complicaciones que podrían desprenderse de dicho acto.
          </p>
        </div>
      </q-card-section>
      <q-card-sections>
        <q-card-actions align="around" class="row">
          <div class="col-12 row justify-around">
            <ContainerFirma
              quien_firma="FIRMA PACIENTE"
              :firmador="getPaci.descrip"
              @reciFirma="callBackFirma"
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
      </q-card-sections>
      <div class="row justify-center q-my-lg">
        <q-btn
          :disable="reg.opcion_hc035 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mb-md"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card>
  </q-form>

  <div style="height: 5px"></div>
</template>
<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat, evaluarParentesco, calcEdad } from "@/formatos/utils";
import { impresionHC034, impresion } from "@/impresiones";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));

const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { getDll$, _getFirma$, guardarFile$ } = useApiContabilidad();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);
const acudiente = ref(getAcomp.cod ? getPaci.descrip : "");
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const firma_prof = ref(null);

const reg = reactive({
  revoca_procedi: "",
  revoca_motivos: "",
  iniciar_trata: "",
  evento: "",


  // EXTRAS
  opcion_hc035: "",
  fecha_act: "",
  llave: "",
  edad: "",
});


onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  reg.fecha_act = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  reg.llave = getHc.llave.slice(15);
  reg.edad = calcEdad(getAcomp.nacim)
};

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = async () => {
  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañate");
  }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg));
  let datos = {
    estado: reg.opcion_hc035 == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC035",
    disentimiento: "N",
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        return grabarFirmaConsen(data?.llave_consen);
      }
      CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    firma_recibida.value.length &&
      (await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` }));
    firma_recibida_acomp.value.length &&
      (await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` }));

    return CON851P(
      "?",
      "info",
      "¿Deseas imprimir el consentimiento?",
      () => router.back(),
      () => {
        // imprimirConsen();
        setTimeout(() => router.back(), 500);
      }
    );
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
  margin-right: 5px;
}
.custom-q-list .q-item {
  margin: 0;
}
</style>
