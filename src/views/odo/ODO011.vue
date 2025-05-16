<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_odo011"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_odo011 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_odo011 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_odo011">
              {{ opcion_odo011 }}
            </q-chip>
          </p>
        </div>
        <div class="text-left row">
          <p style="margin-top: 1px; margin-left: 1px">Fecha:</p>
          <p style="font-weight: bold; margin-top: 1px; margin-left: 1px">{{ ODO011.fecha }}</p>
          <p style="margin-top: 1px; margin-left: 1px">Hora:</p>
          <p style="font-weight: bold; margin-top: 1px; margin-left: 1px">{{ ODO011.hora }}</p>
          <p style="margin-top: 1px; margin-left: 1px">Sede:</p>
          <p style="font-weight: bold; margin-top: 1px; margin-left: 1px">{{ getEmpresa.nomusu }}</p>
        </div>

        <div class="row">
          <p style="text-align: justify">
            Yo;
            <span class="text-bold"> {{ getPaci.descrip.trim() }} </span>
            identificado (a) con
            <span class="text-bold"> {{ getPaci.tipo_id.trim() }} </span>
            N°.:
            <span class="text-bold"> {{ getPaci.cod }} </span>. Declaro que comprendo que dentro de la atención programada para SALUD ORAL, se
            incluyen algunos de los siguientes procedimientos, que he sido informado de los riesgos relacionados, como paciente o como acudiente,
            entiendo la necesidad de realizar algunos exámenes complementarios e interconsultas con otras especialidades que se requieran, cumplir con
            los controles y cuidados, acepto que de ser necesario en algunos casos, se puede recurrir a técnicas de inmovilización física que puede
            derivar de forma involuntaria, rasguños, laceraciones o hematomas, entiendo de que no seguir las indicaciones del profesional, el plan de
            tratamiento descrito inicialmente, podría cambiar. Comprendo que puedo revocar mi decisión en cualquier momento.
          </p>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; width: 80%">
            <p style="margin-top: 10px; text-align: justify">
              <span class="text-bold"> APLICACIÓN DE ANESTESIA LOCAL: </span>
              Se me ha informado que notaré una sensación de entumecimiento del labio, lengua o de otras zonas de la cara que normalmente desaparecerá
              entre dos y cuatro horas. Aunque no tenga alergias o hipersensibilidad, en algunos casos se pueden originar leves alteraciones del
              pulso. También se me ha explicado que en el punto de inyección puede sentirse una cierta dificultad en los movimientos de apertura de
              boca, generalmente transitoria, que en casos menos frecuentes puede provocar sincope o fibrilación ventricular, que deben tratarse
              posteriormente.
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%; display: flex; justify-content: center">
            <q-radio color="primary" v-model="ODO011.aplica_anest_local" val="S" label="SI" />
            <q-radio color="primary" v-model="ODO011.aplica_anest_local" val="N" label="NO" />
          </div>
          <div style="border: 1px solid #ccc; width: 80%">
            <p style="margin-top: 10px; text-align: justify">
              <span class="text-bold"> EXTRACCION DE DIENTES: </span>
              Me han sido explicadas alternativas adicionales para no extraer los dientes (tratamiento de conductos, coronas) en dientes con
              pronóstico favorable. Sin embargo de lo anterior autorizo la extracción de los siguientes <span class="text-bold"> dientes: </span>
              <Input_ class="q-mb-xs" v-model="ODO011.nro_dient_extrac" :field="form.nro_dient_extrac" :inputStyle="{ width: '400px' }" />
              comprendo que es posible que el estado inflamatorio del diente que se me va a extraer pueda producir un proceso infeccioso, que puede
              requerir tratamiento con antibióticos y/o antiinflamatorios; que puede haber hemorragia, además existe el riesgo de fractura dental,
              heridas en la mucosa de la mejilla o en la lengua durante el procedimiento, en algunos casos puede presentar parestesia o parálisis,
              comunicación oroantral, posibilidad de requerir procedimientos adicionales o diferentes a lo previsto incluyendo la decisión de no
              continuar con el procedimiento, acepto los cuidados postquirúrgicos que me indique el profesional y lo eximo de cualquier eventualidad
              como consecuencia de mal autocuidado.
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%; display: flex; justify-content: center">
            <q-radio color="primary" v-model="ODO011.extrac_dient" val="S" label="SI" />
            <q-radio color="primary" v-model="ODO011.extrac_dient" val="N" label="NO" />
          </div>
          <div style="border: 1px solid #ccc; width: 80%">
            <p style="margin-top: 10px; text-align: justify">
              <span class="text-bold"> PULPOTOMIA O PULPECTOMIA: </span>
              Comprendo que la pulpotomía y pulpectomía es un procedimiento como alternativa para salvar mi diente, entiendo que es la preparación
              temporal para realizar posteriormente un tratamiento de conducto realizado por un especialista, existe el riesgo de necesitarse
              retratamiento o cirugía periapical posteriormente. Es posible que después del tratamiento, en algunos casos el diente cambie de color y
              se oscurezca ligeramente o que se debilite y tienda a fracturarse, por lo que puede ser necesario realizarle procedimientos adicionales
              a lo previsto, entiendo que durante la preparación exista perforaciones, fractura de instrumentos en el canal radicular y sobre paso de
              material en la zona peri radicular, dolor persistente lo cual requerirá re instrumentación, además entiendo que de no terminar por
              completo el tratamiento de conducto y la restauración del diente por completo, el diente requerirá extraerse. pronóstico favorable.
            </p>
            <div class="row">
              <span class="text-bold"> dientes: </span>
              <Input_ class="q-mb-xs" v-model="ODO011.nro_dient_pulpect" :field="form.nro_dient_pulpect" :inputStyle="{ width: '400px' }" />
            </div>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%; display: flex; justify-content: center">
            <q-radio color="primary" v-model="ODO011.pulpot_pulpect" val="S" label="SI" />
            <q-radio color="primary" v-model="ODO011.pulpot_pulpect" val="N" label="NO" />
          </div>
          <div style="border: 1px solid #ccc; width: 80%">
            <p style="margin-top: 10px; text-align: justify">
              <span class="text-bold"> OPERATORIA DENTAL: (RESINAS Y IONOMEROS): </span>
              Se me ha explicado que el tratamiento consiste en restaurar los dientes incompletos ya sea por fractura, caries, desgastes,
              malformaciones y proteger la pulpa dental o tratamiento de conducto. Se me ha explicado que es posible la aparición de una mayor
              sensibilidad, que normalmente desaparecerá de modo espontáneo y que puede cambiar un poco la forma y el color del diente, soy consiente
              de que durante el procedimiento podría presentar laceraciones en la encía, exposición pulpar, hipersensibilidad, daño de dientes
              adyacentes, fracturas, dolor a la masticación, entiendo que podría requerirse aplicación de anestesia local antes o durante el
              procedimiento acetando sus riesgos descritos en este documento.
            </p>
            <div class="row">
              <span class="text-bold"> dientes: </span>
              <Input_ class="q-mb-xs" v-model="ODO011.nro_opera_dental" :field="form.nro_opera_dental" :inputStyle="{ width: '400px' }" />
            </div>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%; display: flex; justify-content: center">
            <q-radio color="primary" v-model="ODO011.operat_dental" val="S" label="SI" />
            <q-radio color="primary" v-model="ODO011.operat_dental" val="N" label="NO" />
          </div>
          <div style="border: 1px solid #ccc; width: 80%">
            <p style="margin-top: 10px; text-align: justify">
              <span class="text-bold"> DETARTRAJE: </span>
              El detartraje tiene por objeto la eliminación de los cálculos. Comprendo que se puede producir inflamación, dolor o se pueden lacerar
              las mucosas. También se me ha explicado que es posible sentir temporalmente un aumento en la sensibilidad y en la movilidad de mis
              dientes, puede sentir se podrá sentir nauseas.
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%; display: flex; justify-content: center">
            <q-radio color="primary" v-model="ODO011.detartraje" val="S" label="SI" />
            <q-radio color="primary" v-model="ODO011.detartraje" val="N" label="NO" />
          </div>
          <div style="border: 1px solid #ccc; width: 80%">
            <p style="margin-top: 10px; text-align: justify">
              <span class="text-bold"> PROFILAXIS: </span>
              Para eliminar o remover película de placa bacteriana con ayuda del cepillo/copa de caucho, y/o pasta dental, diente por diente, donde el
              riesgo de un daño abrasivo que puede causar durante la limpieza dental es mínimo, acepto que puede lacerar las mucosas, sangrado,
              nauseas.
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%; display: flex; justify-content: center">
            <q-radio color="primary" v-model="ODO011.profilaxis" val="S" label="SI" />
            <q-radio color="primary" v-model="ODO011.profilaxis" val="N" label="NO" />
          </div>
          <div style="border: 1px solid #ccc; width: 80%">
            <p style="margin-top: 10px; text-align: justify">
              <span class="text-bold"> APLICACIÓN DEL BARNIZ DE FLUOR: </span>
              Es una barrera o película protectora en todas las superficies de los dientes con una sustancia llamada barniz de fluoruro, cuya
              aplicación es segura y sencilla, que no genera ningún tipo de lesión ni daño en los tejidos, nauseas.
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%; display: flex; justify-content: center">
            <q-radio color="primary" v-model="ODO011.aplic_barniz_fluor" val="S" label="SI" />
            <q-radio color="primary" v-model="ODO011.aplic_barniz_fluor" val="N" label="NO" />
          </div>
          <div style="border: 1px solid #ccc; width: 80%">
            <p style="margin-top: 10px; text-align: justify">
              <span class="text-bold"> APLICACIÓN DE SELLANTES: </span>
              Comprendo que el profesional aplicara una barrera o película protectora en las superficies de los dientes cuya aplicación es segura y
              sencilla, los cuales no generan ningún tipo de lesión ni daño en los tejidos, es posible sensación de nauseas.
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%; display: flex; justify-content: center">
            <q-radio color="primary" v-model="ODO011.aplic_sellante" val="S" label="SI" />
            <q-radio color="primary" v-model="ODO011.aplic_sellante" val="N" label="NO" />
          </div>
        </div>

        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; width: 100%">
            <p style="margin-top: 10px; text-align: justify">
              <span class="text-bold"> CONSENTIMIENTO / DISENTIMIENTO: </span>
              De forma libre e informada, <q-radio color="primary" disabled v-model="autoriza" val="S" label="AUTORIZO" />
              <q-radio color="primary" disabled v-model="autoriza" val="N" label="NO AUTORIZO" />
              al personal asistencial de la entidad, para que, en ejercicio legal de su profesión y de acuerdo con los procedimientos establecidos, se
              practique el procedimiento/s relacionado/s anteriormente.
            </p>
          </div>
        </div>
      </q-card-section>
    </q-form>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          :registro_profe="getPaci.cod"
          :tipo_doc="getPaci.tipo_id"
          @reciFirma="callBackFirma"
          :huella_="getAcomp.cod ? null : huella_paci"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.cod ? true : false"
          :registro_profe="getAcomp.cod"
          :tipo_doc="getAcomp.tipo_id"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :huella_="huella_acomp"
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
        <ContainerFirma
          @reciFirma="callBackFirmaProf"
          :firma_="firma_prof"
          :codigo_firma="getProf.cod"
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
        :disable="opcion_odo011 ? false : true"
        @click="validarDatos"
        icon-right="check_circle"
        class="q-mr-lg"
        color="green"
        label="GRABAR"
        type="submit"
      />
    </div>
    <CONSEN800 v-if="show_consen800" @esc="callbackCONSEN800" @enter="callbackCONSEN800" />
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted, watch, computed } from "vue";
import { impresionODO011, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/ContainerFirma.vue"));
const CONSEN800 = defineAsyncComponent(() => import("@/components/consen/CONSEN800.vue"));

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);
const acudiente = ref(getAcomp.cod ? getPaci.descrip : "");
const firma_recibida_acomp = ref("");
const descrip_diagnostico = ref("");
const show_consen800 = ref(false);
const firma_recibida = ref("");
const huella_paci = ref(null);
const huella_acomp = ref(null);
const firma_prof = ref(null);
const ODO011 = reactive({
  aplica_anest_local: "",
  extrac_dient: "",
  nro_dient_pulpect: "",
  nro_dient_extrac: "",
  pulpot_pulpect: "",
  operat_dental: "",
  nro_opera_dental: "",
  detartraje: "",
  profilaxis: "",
  aplic_barniz_fluor: "",
  aplic_sellante: "",
  //
  fecha: "",
  hora: "",
  llave: "",
});

const form = ref({
  nro_dient_extrac: {
    id: "nro_dient_extrac",
    maxlength: "100",
    label: "",
    campo_abierto: true,
  },
  nro_dient_pulpect: {
    id: "nro_dient_pulpect",
    maxlength: "100",
    label: "",
    campo_abierto: true,
  },
  nro_opera_dental: {
    id: "nro_opera_dental",
    maxlength: "100",
    label: "",
    campo_abierto: true,
  },
});
const opcion_odo011 = ref(null);
const autoriza = computed(() => {
  switch (opcion_odo011.value) {
    case "AUTORIZAR":
      return "S";
    case "REVOCAR":
      return "N";
    default:
      return "";
  }
});
onMounted(() => {
  setTimeout(() => {
    datosInit();
    getFirmaProf();
  }, 400);
});

watch(
  () => opcion_odo011.value,
  (val) => {
    if (val == "AUTORIZAR") {
      ODO011.revocar_motivos = "";
    } else {
      ODO011.diagnostico = "";
    }
  }
);

const datosInit = () => {
  ODO011.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  ODO011.hora = dayjs().format("hh:mm");
  ODO011.llave = getHc.llave.slice(15);

  if (getHc.rips?.diagn && getHc.rips?.diagn.length) {
    ODO011.diagnostico = getHc.rips?.diagn[0].cod;
    descrip_diagnostico.value = getHc.rips?.diagn[0].descrip;
  }
};

const getFirmaProf = async () => {
  try {
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
    huella_acomp.value = await _getHuella$({ codigo: getAcomp.cod });
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = async () => {
  const requiere = "Complete el siguiente campo";

  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }

  if (getAcomp.cod && !huella_acomp.value && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma o huella del acompañate");
  }
  if (opcion_odo011.value == "AUTORIZAR") {
  }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(ODO011));
  let datos = {
    estado: opcion_odo011.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "ODO011",
    disentimiento: "N",
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 32);
        ODO011.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
        return grabarFirmaConsen(data?.llave_consen);
      } else CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });

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
        const response = await enviarCorreo$({
          cuerpo: `SE ADJUNTA ${getEncabezado.descrip} PARA ${getPaci.descrip} IDENTIDICADO CON ${getPaci.cod}`,
          destino: getPaci.email,
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
  const datos_odo011 = {
    autorizo: opcion_odo011.value == "AUTORIZAR" ? true : false,
    empresa: getEmpresa,
    paciente: getPaci,
    prof: getProf,
    acomp: getAcomp,
    firmador: reg_firmador.value,
    paren_acomp: getSesion.paren_acomp,
    acudiente: acudiente.value,
    firmas: {
      firma_paci: firma_recibida.value ? true : false,
      huella_paci: huella_paci.value ? true : false,
      huella_acomp: huella_acomp.value ? true : false,
      firma_acomp: firma_recibida_acomp.value ? true : false,
      firma_prof: firma_prof.value ? true : false,
    },
    ...ODO011,
    diagnostico: getHc.rips?.diagn.length ? getHc.rips?.diagn[0]?.cod : "",
    descrip_enfer: descrip_diagnostico.value || "",
  };

  const firmas = {
    img_firma_acomp: firma_recibida_acomp.value,
    img_firma_consen: firma_recibida.value,
    img_firma_paci: firma_recibida.value,
    img_huella_paci: huella_paci.value,
    img_huella_acomp: huella_acomp.value,
    firma_prof: firma_prof.value,
  };

  const docDefinitionPrint = await utilsFormat({
    datos: firmas,
    content: impresionODO011({
      datos: datos_odo011,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionODO011({
      datos: datos_odo011,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-ODO-011` });
  return response_impresion;
};
const callbackCONSEN800 = (data) => {
  if (data) {
    ODO011.diagnostico = data.cod;
    descrip_diagnostico.value = data.descrip;
  }
  show_consen800.value = false;
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};
const callBackFirmaProf = (data_firma) => {
  data_firma && (firma_prof.value = data_firma);
};
</script>

<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
