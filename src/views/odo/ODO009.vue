<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <div class="text-center">
        <q-toggle
          v-model="opcion_odo009"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="opcion_odo009 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip :color="opcion_odo009 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_odo009">
            {{ opcion_odo009 }}
          </q-chip>
        </p>
      </div>
      <q-form>
        <div class="row justify-between items-center">
          <p class="text-left">
            <span class="text-bold">Fecha:</span>
            {{ dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD") }}
          </p>
          <p class="text-right">
            <span class="text-bold">N°. H.C.</span>
            {{ getHc.llave }}
          </p>
        </div>
        <div>
          <p style="text-align: justify">
            Yo <span class="text-bold"> {{ getPaci.descrip }},</span> mayor de edad y/o responsable del paciente, identificado(a) como aparece al pie
            de la firma, actuando en nombre propio en pleno uso de mis facultades, libre y consiente, declaro:
          </p>
          <p style="text-align: justify">Otorgo mi consentimiento para que sea practicado el proceso quirúrgico requerido denominado:</p>
          <Input_ style="min-width: 100%; display: inline-block" v-model="ODO009.proces_quirurg" :field="form.proces_quirurg" />
          <p style="text-align: justify">
            De acuerdo al diagnóstico y plan de tratamiento programado el cual fui informado. Otros estudios de diagnóstico y medicamentos.
          </p>
          <p style="text-align: justify">
            Acepto los servicios adicionales que juzguen razonables y necesarios como estudios de laboratorio, radiológicos, otros estudios de
            diagnóstico y medicamentos. Comprendo que en el área de cirugía bucal todos los procedimientos no están exentos de las complicaciones
            frecuentes como lo son:
          </p>

          <ul>
            <li>Riesgo de la técnica de anestesia que se utiliza.</li>
            <li>Posible inflamación y dolor del área afectada en la intervención.</li>
            <li>Dificultad para abrir la boca y masticar, después del procedimiento.</li>
            <li>Riesgo de hemorragia y aparición de hematomas en zonas adyacentes.</li>
            <li>Infección de las heridas quirúrgicas.</li>
            <li>Posibilidad de pérdida de sensibilidad temporal o no.</li>
            <li>Riesgo de fracturas óseas, sinusitis, dislocación mandibular, comunicación bucosinusal.</li>
          </ul>

          <p style="text-align: justify">
            Estoy enterado que se me darán indicaciones pre y post operatorias, según convenga a mi caso en particular, así como la indicación
            farmacológica que pueda requerir antes o después de la intervención.
          </p>
          <p style="text-align: justify">
            Por otra parte autorizo al profesional ya mencionado, aplique anestesia local en el momento que el tratamiento lo requiera.
          </p>
          <p style="text-align: justify">
            Doy mi consentimiento y autorización para la intervención descrita anteriormente, sin coacción ni manipulación de ningún tipo.
          </p>
          <div class="row">
            <p>Diente:</p>
            <Input_ v-model="ODO009.dientes" :field="form.dientes" :inputStyle="{ width: '90px' }" />
          </div>
        </div>
      </q-form>
    </q-card-section>
    <q-card-actions>
      <div class="col-12 row justify-around">
        <ContainerFirma quien_firma="FIRMA PACIENTE" :firmador="getPaci.descrip" @reciFirma="callBackFirma" :huella_="huella_paci" class="col-4" />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
        <ContainerFirma
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.registro_profe"
          quien_firma="FIRMA PROFESIONAL"
          class="col-4"
          disable
        />
      </div>
      <div class="col-12 row justify-center q-my-md">
        <q-btn
          :disable="opcion_odo009 ? false : true"
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
import { impresionODO009, impresion, generarArchivo } from "@/impresiones";
import { ref, reactive, defineAsyncComponent, onMounted } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const huella_paci = ref(null);
const firma_paci = ref("");
const firma_prof = ref(null);
const ODO009 = reactive({
  proces_quirurg: "",
  dientes: "",
});
const form = ref({
  proces_quirurg: {
    id: "proces_quirurg",
    maxlength: "300",
    label: "",
    required: true,
    campo_abierto: true,
  },
  dientes: {
    id: "dientes",
    maxlength: "2",
    label: "",
    tipo: "number",
    required: true,
    campo_abierto: true,
  },
});
const opcion_odo009 = ref(null);

const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);

onMounted(() => {
  getFirmaProf();
});

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
  } catch (error) {
    CON851("?", "info", error);
  }
};

const validarDatos = async () => {
  if (!firma_paci.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(ODO009));
  try {
    const data = {
      estado: opcion_odo009.value == "AUTORIZAR" ? "1" : "2",
      id_acomp: getAcomp.cod.padStart(15, "0"),
      paren_acomp: getSesion.paren_acomp,
      oper_consen: getSesion.oper,
      llave_consen: getHc.llave,
      cod_consen: "ODO009",
      cod_med: getProf.cod,
      disentimiento: "N",
      ...datos_format,
    };
    const result = await getDll$({ modulo: `save_consen.dll`, data });
    grabarFirmaConsen(result?.llave_consen);
  } catch (error) {
    CON851("?", "error", "Error al guardar el consentimiento");
  }
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_paci.value, codigo: `P${llave}` });
    getAcomp.cod && (await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` }));
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
  const datos_ODO009 = {
    autorizo: opcion_odo009 == "AUTORIZAR" ? true : false,
    empresa: { ...getEmpresa },
    paciente: { ...getPaci },
    prof: { ...getProf },
    acomp: { ...getAcomp },
    firmador: { ...reg_firmador.value },
    paren_acomp: getSesion.paren_acomp,
    firmas: {
      firma_paci: firma_paci.value ? true : false,
      huella_paci: huella_paci.value ? true : false,
      firma_acomp: firma_recibida_acomp.value ? true : false,
      firma_prof: firma_prof.value ? true : false,
    },
    ...ODO009,
  };

  const firmas = {
    img_firma_acomp: firma_recibida_acomp.value,
    img_firma_paci: firma_paci.value,
    img_firma_consen: firma_paci.value,
    img_huella_paci: huella_paci.value,
    firma_prof: firma_prof.value,
  };

  const docDefinitionPrint = await utilsFormat({
    datos: firmas,
    content: impresionODO009({
      datos: datos_ODO009,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionODO009({
      datos: datos_ODO009,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({
    docDefinition: docDefinitionFile,
  });
  return response_impresion;
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_paci.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
</script>
