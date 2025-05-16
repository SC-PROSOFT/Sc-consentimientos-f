<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <div class="text-center">
        <q-toggle
          v-model="opcion_odo006"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="opcion_odo006 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip :color="opcion_odo006 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_odo006">
            {{ opcion_odo006 }}
          </q-chip>
        </p>
      </div>
      <q-form>
        <div>
          <p style="text-align: justify">
            Yo <span class="text-bold"> {{ getPaci.descrip }},</span> identificado con documento No.
            <span class="text-bold">{{ getPaci.cod }}</span>
            en pleno uso de mis facultades mentales, libre y conscientemente declaro que Doy mi consentimiento al Odontólogo(a) de la IPS, para
            formular y realizar el tratamiento requerido.
          </p>
          <p style="text-align: justify">
            Autorizo al odontólogo(a) para proveer servicios adicionales que considere razonables y necesarios para la salud, incluyendo la
            administración de anestesia que sea necesaria, exámenes de laboratorio, y la preparación de servicios que incluyan estudios de patología,
            estudios de radiología.Se entiende como endodoncia el procedimiento odontológico por medio del cual se retira la pulpa o nervio dental y
            los conductos radiculares (raíz del diente) son sellados con un material específico para la conservación del diente, posterior a una
            enfermedad pulpar irreversible. Certifico que el odontólogo(a) de la IPS, me ha explicado el procedimiento a realizar, las causas por las
            cuales es necesario, el pronóstico del diente a tratar y las posibles complicaciones más frecuentes que pueden surgir durante el mismo,
            tales como : laceración de tejidos blandos, fractura del diente, perforaciones apical, escalones, fracturas de instrumentos en el canal
            radicular, sobrepaso de material sellador en zona apical en el momento de la obturación, accidente por hipoclorito, contaminación de
            conductos, perdida de obturación temporal,broncoaspiracion de instrumental, alergia a los guantes u otros materiales usados en la
            práctica. Igualmente certifico que me han explicado la importancia de realizar el tratamiento rehabilitador posterior al tratamiento
            endondontico, y asumo la responsabilidad de efectuarlo en un periodo no mayor a 2 meses. Leí cuidadosamente y antes de firmarlo he tenido
            la oportunidad de hacer las preguntas que he considerado necesarias y todas han sido contestadas satisfactoriamente; así como se me ha
            explicado que no es posible garantizar los resultados esperados con este procedimiento. De la misma manera manifiesto que se me ha
            informado sobre la posible necesidad de una cirugía Endodóntica, o técnica no convencionales, eventos no incluidos en el plan obligatorio
            de salud, en caso de no lograrse los resultados obtenidos con este tratamiento.Por otra parte autorizo a que el odontólogo(a) de la IPS
            aplique anestesia local en el momento en Que el tratamiento lo requiera y que conozco las posibles complicaciones más frecuentes, que
            pueden surgir durante dicha aplicación tales como parestesia, hematoma, dolor, isquemia de la piel en el lugar de la infiltración,
            parálisis del velo el paladar, trismus y afectación muscular. Igualmente estoy enterado (a) que las coronas, las prótesis totales, las
            prótesis removible, los tratamientos de ortodoncia, los tratamientos periodontales y las radiografías panorámicas, no están cubiertos por
            el Plan Obligatorio de Salud.
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
          :disable="opcion_odo006 ? false : true"
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
import { impresionODO006, impresion, generarArchivo } from "@/impresiones";
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

const opcion_odo006 = ref(null);

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
      estado: opcion_odo006.value == "AUTORIZAR" ? "1" : "2",
      id_acomp: getAcomp.cod.padStart(15, "0"),
      paren_acomp: getSesion.paren_acomp,
      oper_consen: getSesion.oper,
      llave_consen: getHc.llave,
      cod_consen: "ODO006",
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
      await imprimirConsen(llave);
      return router.back();
    }

    return CON851P(
      "?",
      "info",
      "¿Deseas enviar el correo del consentimientos?",
      async () => {
        await imprimirConsen(llave);
        router.back();
      },
      async () => {
        const file = await imprimirConsen(llave);
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

const imprimirConsen = async (llave) => {
  const datos_ODO006 = {
    autorizo: opcion_odo006 == "AUTORIZAR" ? true : false,
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
    content: impresionODO006({
      datos: datos_ODO006,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionODO006({
      datos: datos_ODO006,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({
    docDefinition: docDefinitionFile,
    nomb_archivo: `${llave}-ODO-006`,
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
