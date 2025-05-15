<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <div class="text-center">
        <q-toggle
          v-model="opcion_odo008"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="opcion_odo008 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip :color="opcion_odo008 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_odo008">
            {{ opcion_odo008 }}
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
            {{ getHc.llave.slice(15) }}
          </p>
        </div>

        <div>
          <!-- <p style="text-align: justify">
            Yo <span class="text-bold"> {{ getPaci.descrip }},</span> identificado con el documento de identidad
            <span class="text-bold">{{ getPaci.cod }}</span>
            y por medio del presente documento hago constar lo siguiente.
          </p> -->
          <p style="text-align: justify">
            Yo <span class="text-bold"> {{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }},</span> mayor de edad y/o responsable del
            paciente, identificado(a) como aparece al pie de la firma, actuando en nombre propio en pleno uso de mis facultades, libre y consiente,
            declaro:
          </p>
          <p style="text-align: justify">
            Por medio de la presente doy mi consentimiento al odontólogo(a) para formular y realizar el tratamiento, intervención u otros
            procedimientos dentales que considere necesarios o apropiados para mí o mi hijo(a), en los cuales estaremos mutuamente de acuerdo.
          </p>
          <p style="text-align: justify">
            Certifico que se me ha sido informado de los riesgos inherentes a los procedimientos clínicos a realizar y originados en la falta de
            colaboración mía o del niño, siendo los más frecuentes: el trauma de los tejidos blandos por el uso de elementos corto punzantes, la
            fractura radicular coronal y fractura alveolar.
          </p>
          <p style="text-align: justify">
            Igualmente me ha sido explicado que ante la intranquilidad del menor, existe la posibilidad de requerir durante su tratamiento la
            utilización de las técnicas restrictivas las cuales son utilizadas en odontopediatria y consiste en sujetar al niño(a) para controlar sus
            movimientos y así poder realizar el tratamiento, así mismo se me ha informado que puedo estar presente durante la atención del menor y
            apoyar o no en el momento de la aplicación de estas técnicas.
          </p>
          <p style="text-align: justify">
            También se me ha informado sobre la posibilidad de requerir la aplicación de anestesia local y sus posibles complicaciones, tales como
            parestesia, hematoma, dolor, isquemia de la piel, parálisis, trismus y auto mordeduras.
          </p>
          <p style="text-align: justify">
            He tenido la oportunidad de realizar las preguntas que he considerado necesarias y todas han sido respondidas satisfactoriamente, por otra
            parte autorizo el uso de anestesia local en el momento que así lo requiera.
          </p>
        </div>
      </q-form>
    </q-card-section>
    <q-card-actions>
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
          :registro_profe="getPaci.cod"
          :tipo_doc="getPaci.tipo_id"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          :registro_profe="getAcomp.cod"
          :tipo_doc="getAcomp.tipo_id"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
        <ContainerFirma
          disable
          quien_firma="FIRMA PROFESIONAL"
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.cod"
          :codigo_firma="getProf.cod"
          class="col-4"
        />
      </div>
      <div class="col-12 row justify-center q-my-md">
        <q-btn
          :disable="opcion_odo008 ? false : true"
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
import { impresionODO008, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted } from "vue";
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
const reg_acudiente = ref(getAcomp.cod ? getAcomp : {});
const opcion_odo008 = ref(null);

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
  try {
    const data = {
      estado: opcion_odo008.value == "AUTORIZAR" ? "1" : "2",
      id_acomp: getAcomp.cod.padStart(15, "0"),
      paren_acomp: getSesion.paren_acomp,
      oper_consen: getSesion.oper,
      llave_consen: getHc.llave,
      cod_consen: "ODO008",
      cod_med: getProf.cod,
      disentimiento: "N",
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
  const datos_ODO008 = {
    autorizo: opcion_odo008 == "AUTORIZAR" ? true : false,
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
    llave: getHc.llave.slice(15),
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
    content: impresionODO008({
      datos: datos_ODO008,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionODO008({
      datos: datos_ODO008,
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
  if (getAcomp.cod) {
    data_firma && (firma_recibida_acomp.value = data_firma);
  } else {
    data_firma && (firma_recibida.value = data_firma);
  }
};
</script>
