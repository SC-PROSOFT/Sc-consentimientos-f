<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <div class="text-center">
        <q-toggle
          v-model="opcion_odo004"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="opcion_odo004 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip :color="opcion_odo004 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_odo004">
            {{ opcion_odo004 }}
          </q-chip>
        </p>
      </div>
      <q-form>
        <div>
          <p>
            Yo <span class="text-bold"> {{ getPaci.descrip }},</span> identificado con documento No.
            <span class="text-bold">{{ getPaci.cod }}</span>
            en pleno uso de mis facultades mentales, libre y conscientemente declaro que doy mi consentimiento al Odontólogo(a) de la IPS, para
            formular y realizar el tratamiento requerido por mi o por mi hijo (a), intervención u otros procedimientos dentales Que considere
            necesarios o apropiados y en los cuales estemos mutuamente de acuerdo.
          </p>
          <p>
            Que considere necesarios o apropiados y en los cuales estemos mutuamente de acuerdo. Me han informado sobre los beneficios del tratamiento
            y los riesgos que pueden presentarse en el procedimiento, las opciones de tratamiento.los riesgos que se pueden presentar en los
            procedimientos clínicos a realizar y/o originados en la falta de colaboración mía o del niño. Siendo las más frecuentes: el trauma de
            tejidos blandos por el uso de elementos corto punzantes, la fractura radicular, la fractura coronal y la fractura alveolar. Igualmente, me
            ha sido explicado que ante la falta de colaboración del menor de edad, existe la Posibilidad de requerir durante su tratamiento, la
            utilización de las técnicas restrictivas, las cuales son utilizadas en odontopediatria y consisten en aplicar medidas tales como sujetar
            al niño (a), para controlar sus movimientos y así poder realizar el tratamiento. Así mismo, se me ha informado que puedo estar presente
            durante la atención del menor y apoyar o no en el momento De la aplicación de estas técnicas.
          </p>
          <p>
            También se me ha informado sobre la posibilidad de requerir la aplicación de anestesia local y sus posibles complicaciones, tales como:
            parestesia, hematoma, dolor, isquemia de la piel en el lugar de la infiltración, parálisis del velo del paladar, trismus, afectación
            muscular y auto mordeduras (frecuente en niños). He tenido la oportunidad de hacer las preguntas que he considerado necesarias y todas han
            sido Resueltas satisfactoriamente.
          </p>
          <p>
            Por otra parte autorizo al odontólogo de la IPS, aplique anestesia local en el momento en que el tratamiento odontológico lo requiera.
            Igualmente estoy enterado (a) que las coronas, prótesis total, prótesis removible, tratamientos de ortodoncia, periodontales y radiografía
            panorámica, no están cubiertos por el Plan Obligatorio de Salud.
          </p>
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
          :disable="opcion_odo004 ? false : true"
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
import { impresionODO004, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";

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

const opcion_odo004 = ref(null);

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
      estado: opcion_odo004.value == "AUTORIZAR" ? "1" : "2",
      id_acomp: getAcomp.cod.padStart(15, "0"),
      paren_acomp: getSesion.paren_acomp,
      oper_consen: getSesion.oper,
      llave_consen: getHc.llave,
      cod_consen: "ODO004",
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
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });
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
  const datos_ODO004 = {
    autorizo: opcion_odo004 == "AUTORIZAR" ? true : false,
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
    content: impresionODO004({
      datos: datos_ODO004,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionODO004({
      datos: datos_ODO004,
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
