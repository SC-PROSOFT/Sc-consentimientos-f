<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <div class="text-center">
        <q-toggle
          v-model="opcion_odo010"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="opcion_odo010 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip :color="opcion_odo010 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_odo010">
            {{ opcion_odo010 }}
          </q-chip>
        </p>
      </div>
      <q-form>
        <div>
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
          <p style="text-align: justify">
            Yo <span class="text-bold"> {{ getPaci.descrip }},</span> de <span class="text-bold"> {{ getPaci.descrip_ciudad }},</span> identificado
            con el documento de identidad
            <span class="text-bold">{{ getPaci.cod }}</span>
            por medio del presente documento hago constar lo siguiente.
          </p>
          <p style="text-align: justify">
            He sido informado/a que después de un diagnostico odontológico, necesito recibir atención clínica endodóntica.
          </p>
          <p style="text-align: justify">
            Se me ha explicado de forma clara, la naturaleza de la enfermedad oral que padezco, así como el daño que ha causado; las opciones de
            tratamiento, los posibles riesgos del tratamiento y su pronóstico.
          </p>
          <p style="text-align: justify">
            Acepto la realización de toma de radiografías que sean necesarios para fines de completar un tratamiento exitoso.
          </p>
          <p style="text-align: justify">
            Me fueron expuestos los riesgos del uso de la anestesia local (posibles alergias, anestesias prolongadas, daños tisulares por la punción,
            hematoma, trismus, paresia o parestesia, taquicardia, dolor isquemia en el sitio de la punción.
          </p>
          <p style="text-align: justify">
            Entiendo que posterior al tratamiento podría experimentar inflamación, dolor en el área, dificultad para masticar o abrir la boca, riesgo
            de infección.
          </p>
          <p style="text-align: justify">
            Estoy consciente que existe la posibilidad de que los instrumentos utilizados podrían tener fracturas debido a las pequeñas dimensiones de
            estos, o generar perforaciones dentales cortes, punciones, o lesiones; también se me ha explicado la toxicidad de algunos materiales que
            son necesarios para la desinfección de la zona.
          </p>
          <p style="text-align: justify">Por otra parte autorizo con mi firma al profesional para realizar los procedimientos endodonticos.</p>
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
          :disable="opcion_odo010 ? false : true"
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
import { impresionODO010, impresion, generarArchivo } from "@/impresiones";
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

const opcion_odo010 = ref(null);

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
      estado: opcion_odo010.value == "AUTORIZAR" ? "1" : "2",
      id_acomp: getAcomp.cod.padStart(15, "0"),
      paren_acomp: getSesion.paren_acomp,
      oper_consen: getSesion.oper,
      llave_consen: getHc.llave,
      cod_consen: "ODO010",
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
  const datos_ODO010 = {
    autorizo: opcion_odo010 == "AUTORIZAR" ? true : false,
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
    content: impresionODO010({
      datos: datos_ODO010,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionODO010({
      datos: datos_ODO010,
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
