<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc052"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc052 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc052 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc052">
              {{ opcion_hc052 }}
            </q-chip>
          </p>
        </div>

        <div class="row justify-between items-center">
          <p><span class="text-bold">Nombre del paciente:</span> {{ getPaci.descrip }}&nbsp;</p>
          <p>
            <span class="text-bold">Edad: &nbsp;</span><span>{{ calcularEdad(getPaci.nacim) }}</span> &nbsp;
          </p>
          <p><span class="text-bold">Tipo y numero documento de identificación:</span> {{ getPaci.tipo_id + " " + getPaci.cod }} &nbsp;</p>
          <p><span class="text-bold">EPS:</span> {{ getPaci.descrip_eps }}&nbsp;</p>
          <p>
            <span class="text-bold">Fecha:</span>
            {{ dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD") }}
          </p>
        </div>

        <div>
          <div class="row q-mt-md">
            <p class="text-left">La edad y estado de conciencia del paciente permiten firmar este documento?:</p>
            <q-radio color="primary" v-model="HIC052.permite_firmar" val="S" label="SI" />
            <q-radio color="primary" v-model="HIC052.permite_firmar" val="N" label="NO" />
          </div>
          <div v-if="HIC052.permite_firmar == 'N'">
            <p class="text-left">Observación:</p>
            <TextArea_ v-model="HIC052.observ_no_firma" :field="form.observ_no_firma" class="col-12" />
          </div>
          <p class="text-left">Diagnostico principal:</p>
          <TextArea_ v-model="HIC052.diagn_princip" :field="form.diagn_princip" class="col-12" />
          <p class="text-justify">
            Procedimiento propuesto y explicación del mismo: TRATAMIENTO INTRAHOSPITALARIO INTEGRAL: FARMACOLÓGICO / PSICOLOGIA, TERAPIA OCUPACIONAL,
            ENFERMERÍA, MEDICINA GENERAL, TRABAJO SOCIAL Y NUTRICIÓN. Y EN CASO DE REQUERIRSE SE ACEPTA LA CONTENCIÓN MECÁNICA A FIN DE GARANTIZAR EL
            BIENESTAR PROPIO Y DE LOS DEMÁS.
          </p>
          <p style="text-align: justify">
            Beneficios:
            <span class="text-bold">REDUCCION DE RIESGO DE AUTO Y HETERO AGRESION, ENTRE OTROS.</span>
          </p>
          <p style="text-align: justify">
            Riesgos:
            <span class="text-bold">CAÍDAS, FUGAS, EFECTOS SECUNDARIOS MEDICAMENTOSOS, ENTRE OTROS.</span>
          </p>
          <p class="text-left">Alternativas de otros tratamientos:</p>
          <TextArea_ v-model="HIC052.alt_otr_tratamient" :field="form.alt_otr_tratamient" class="col-12" />
          <p class="text-justify">
            Por medio del presente documento, acepto recibir servicios y apoyos en salud requeridos, reconozco que se me explico y comprendí en su
            totalidad el procedimiento que se propone, estoy enterado de los beneficios; me dieron a conocer y comprendo de los riesgos y las
            probables complicaciones que se pueden presentar y se me han explicado las alternativas existentes. Soy consciente que con el tratamiento
            que me brindan se busca un beneficio, doy mi consentimiento sin obligación y por decisión propia para que estos se efectúen, así mismo
            para realizar la atención de contingencias y urgencias derivadas del acto autorizado, con base en el principio de libertad prescriptiva.
            Así mismo acepto el criterio médico de los profesionales de la IPS SALUD MENTAL MONTE SINAÍ.
          </p>
          <div class="row q-mt-md">
            <p class="text-left">Numero de celular de contacto:</p>
            <Input_ v-model="HIC052.telef_contact" :field="form.telef_contact" :inputStyle="{ width: '180px' }" />
          </div>
          <div class="row q-mt-md">
            <p class="text-left">Correo electrónico del contacto:</p>
            <Input_ v-model="HIC052.correo_elect_contact" :field="form.correo_elect_contact" :inputStyle="{ width: '460px' }" />
          </div>
        </div>
      </q-card-section>
    </div>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          :registro_profe="getPaci.cod"
          :tipo_doc="getPaci.tipo_id"
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA ACOMPAÑANTE"
          :registro_profe="getAcomp.cod"
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
        <ContainerFirma
          @reciFirma="callBackFirmaProf"
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :codigo_firma="getProf.cod"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.registro_profe"
          quien_firma="FIRMA PROFESIONAL"
          class="col-4"
        />
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hc052 ? false : true"
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
import { impresionHIC052, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { calcularEdad, utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);

const HIC052 = reactive({
  fecha_act: "",
  permite_firmar: "S",
  diagn_princip: "",
  alt_otr_tratamient: "",
  telef_contact: "",
  correo_elect_contact: "",
  observ_no_firma: "",
});
const form = ref({
  diagn_princip: {
    id: "diagn_princip",
    maxlength: "300",
    label: "",
    campo_abierto: true,
  },
  alt_otr_tratamient: {
    id: "alt_otr_tratamient",
    maxlength: "300",
    label: "",
    campo_abierto: true,
  },
  observ_no_firma: {
    id: "observ_no_firma",
    maxlength: "300",
    label: "",
    campo_abierto: true,
  },
  telef_contact: {
    id: "telef_contact",
    label: "",
    maxlength: "10",
    label: "",
    tipo: "number",
    campo_abierto: true,
    required: true,
  },
  correo_elect_contact: {
    id: "correo_elect_contact",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
});
const opcion_hc052 = ref(null);

onMounted(() => {
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

const validarDatos = () => {
  const requiere = "Complete el siguiente campo";
  if (!firma_recibida.value && !getAcomp.cod) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }
  if (opcion_hc052.value == "AUTORIZAR") {
    if (!HIC052.telef_contact) return CON851("?", "info", requiere, () => foco_(form, "telef_contact"));
    if (!HIC052.diagn_princip) return CON851("?", "info", requiere, () => foco_(form, "diagn_princip"));
    if (!HIC052.alt_otr_tratamient) return CON851("?", "info", requiere, () => foco_(form, "alt_otr_tratamient"));
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC052));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc052.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC052",
    disentimiento: "N",
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC052.fecha = dayjs(fecha).format("YYYY-MM-DD");
        return grabarFirmaConsen(data?.llave_consen);
      }
      CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", error);
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    getAcomp.cod.trim() && (await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` }));

    if (getEmpresa.envio_email == "N") {
      await imprimirConsen();
      return router.back();
    }
    return CON851P(
      "?",
      "info",
      "¿Deseas enviar el correo del consentimientos?",
      async () => {
        await imprimirConsen();
        router.back();
      },
      async () => {
        const file = await imprimirConsen();
        if (getPaci.email && !/.+@.+\..+/.test(getPaci.email.toLowerCase())) {
          return CON851("?", "info", "El correo no es valido", () => router.back());
        }

        const response = await enviarCorreo$({
          cuerpo: `SE ADJUNTA ${getEncabezado.descrip} PARA ${getPaci.descrip} IDENTIDICADO CON ${getPaci.cod}`,
          destino: getPaci.email.toLowerCase(),
          subject: getEncabezado.descrip,
          file,
        });
        CON851("?", response.tipo, response.message, () => router.back());
      }
    );
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const imprimirConsen = async () => {
  try {
    const datos_hic052 = {
      autorizo: opcion_hc052.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      ...HIC052,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC052" },
      content: impresionHIC052({
        datos: datos_hic052,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC052" },
      content: impresionHIC052({
        datos: datos_hic052,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
const callBackFirmaProf = (data_firma) => {
  data_firma && (firma_prof.value = data_firma);
};
</script>
