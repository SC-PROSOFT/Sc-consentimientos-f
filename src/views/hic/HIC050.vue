<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc050"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc050 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc050 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc050">
              {{ opcion_hc050 }}
            </q-chip>
          </p>
        </div>

        <div class="border-format">
          <p>
            <span class="text-bold">Fecha:</span>
            {{ dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD") }}
            <span class="text-bold">Hora:</span> {{ dayjs().format("hh:mm") }}&nbsp;
          </p>
          <p><span class="text-bold">Nombre:</span> {{ getPaci.descrip }}&nbsp;</p>
          <p><span class="text-bold">Tipo y numero documento de identificación:</span> {{ getPaci.tipo_id + " " + getPaci.cod }} &nbsp;</p>
        </div>
        <div>
          <p style="text-align: justify">
            Yo <span class="text-bold"> {{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }},</span> mayor de edad y/o responsable del
            paciente, identificado(a) como aparece al pie de la firma, actuando en nombre propio en pleno uso de mis facultades, libre y consiente,
            declaro:
          </p>
          <p style="text-align: justify">
            El propósito principal del procedimiento de toma y recepción de muestras de laboratorio consiste en: Recolectar sangre, orina o tejidos
            corporales para posteriormente procesarlos y determinar si los resultados obtenidos están dentro de los límites normales.
          </p>

          <p style="text-align: justify">
            Se me ha explicado que la toma de muestras de laboratorio mediante la venopunción es un procedimiento invasivo que consiste en la
            extracción de sangre de una vena, la cual será envasada en tubos de laboratorio para su posterior procesamiento y análisis.
          </p>

          <p style="text-align: justify">
            <span class="text-bold">El personal</span>
            que realiza el procesamiento es idóneo y cumple con todas las normas de bioseguridad vigentes.
          </p>
          <p style="text-align: justify">
            <span class="text-bold">Recomendaciones Generales:</span>
            que realiza el procesamiento es idóneo y cumple con todas las normas de bioseguridad vigentes.
          </p>
          <p style="text-align: justify">
            La forma de prepararse depende del examen de sangre específico que le vayan a hacer. Muchos exámenes no quieren de ninguna preparación
            especial y otras veces se le puede solicitar que evite alimentos o bebidas.
          </p>
          <p style="text-align: justify">
            <span class="text-bold">Riesgos:</span>
            En el momento de la toma de muestra de sangre por venopunción, sentirá un leve dolor tipo pinchazo. En casos esporádicos se podrían
            presentar complicaciones de este procedimiento, como hematoma y/o dolor leve, extravasaciones que pueden llegar a causar dolor e
            irritación, equimosis, flebitis mecánica, los cuales mejoraran espontáneamente o con medidas locales.
          </p>
          <p style="text-align: justify">
            <span class="text-bold">HE COMPRENDIDO CON CLARIDAD TODO LO ESCRITO ANTERIORMENTE.</span>
            Yo he tenido la oportunidad de preguntar y resolver todas mis dudas.
            <span class="text-bold"
              >ACEPTO LA TOMA O RECEPCIÓN DE LA MUESTRA - DECLARO QUE LA DECISION QUE TOMO ES LIBRE Y VOLUNTARIA DOY MI CONSENTIMIENTO</span
            >para que el profesional del Hospital Local Primer Nivel E.S.E FuentedeOro me realice el procedimiento diagnostico solicitado por mi
            médico tratante.
          </p>
          <p style="text-align: justify">
            Entiendo que me puedo retractar de este consentimiento cuando así lo desee, debiendo informar al equipo médico de diagnóstico del cambio
            de esta decisión.
          </p>
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
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :registro_profe="getAcomp.cod"
          :tipo_doc="getAcomp.tipo_id"
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
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hc050 ? false : true"
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
import { impresionHIC050, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const reg_acudiente = ref(getAcomp.cod ? getAcomp : {});
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);

const HIC050 = reactive({
  fecha: "",
  hora: "",
});

const opcion_hc050 = ref(null);

onMounted(() => {
  HIC050.hora = dayjs().format("hh:mm");
  HIC050.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  if (!firma_recibida.value && !getAcomp.cod) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  let llave_paci;
  if (/[A-Za-z]/.test(getPaci.cod)) {
    llave_paci = getPaci.cod.padStart(15, " ");
  } else {
    llave_paci = getPaci.cod + "00000000";
  }
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc050.value == "AUTORIZAR" ? "1" : "2",
    llave_fact: getSesion.modulo == "HIC" ? "" : `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getSesion.modulo == "HIC" ? getHc.llave : `${llave_paci}`,
    cod_med: getProf.cod,
    cod_consen: getSesion.modulo == "HIC" ? "HIC050" : "LAB019",
    disentimiento: "N",
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC050.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic050 = {
      autorizo: opcion_hc050.value == "AUTORIZAR" ? true : false,
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
      ...HIC050,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC050" },
      content: impresionHIC050({
        datos: datos_hic050,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC050" },
      content: impresionHIC050({
        datos: datos_hic050,
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
</script>
