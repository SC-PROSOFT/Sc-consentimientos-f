<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic077"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic077 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic077 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic077">
              {{ opcion_hic077 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p class="q-mt-xs" style="font-weight: bold">Servicio:&nbsp;</p>
          <div class="col-xs-5">
            <Select_ v-model="servicio.select" :field="servicio.serv_form" :items="servicio.items" />
          </div>
          <p class="q-mt-xs" style="font-weight: bold">Lugar:&nbsp;</p>
          <p class="q-mt-xs">{{ getEmpresa.nomusu }}</p>
        </div>
        <div class="row q-mt-md">
          <p style="font-weight: bold">Nombre paciente:&nbsp;</p>
          <p>{{ getPaci.descrip }}</p>
        </div>
        <div class="row">
          <p style="font-weight: bold">Identificación:&nbsp;</p>
          <p>&nbsp;{{ getPaci.tipo_id }}</p>
          <p>&nbsp;{{ getPaci.cod }}</p>
        </div>
        <div class="row">
          <p style="font-weight: bold">Fecha:&nbsp;</p>
          <p>&nbsp;{{ HIC077.fecha }}</p>
        </div>
        <div>
          <p style="text-align: justify">
            Señor(a) usuario (a): Se le va a realizar una exploración imagenológica que utilizara radiación ionizante, en forma de rayos X, por lo
            anterior es necesario que usted informe si tiene sospechas de estado de embarazo para que el profesional tome consideraciones especiales
            en su caso y medidas protectoras para minimizar el riesgo de irradiación.
          </p>
          <p style="text-align: justify">
            Para proporcionar una información que nos ayuda a identificar y tratar mejor su enfermedad el tecnólogo en imágenes diagnosticas lo
            ubicara en el Equipo de Radiología Convencional, en el cual usted adoptara algunas posiciones sugeridas por el profesional tomándose una
            serie de protecciones que permitirán llevar a cabo el procedimiento solicitado.
          </p>
          <p style="text-align: justify">
            Beneficios del procedimiento: El estudio es necesario para su diagnostico y decide realizarse el RX propuesto debe saber que se efectúa
            con equipos calibrados y utilizados por personal calificado que minimizan la exposición a las radiaciones ionizantes protegiendo su cuerpo
            en la medida de lo posible. SOLO se le realizaran las radiografías indispensables.
          </p>
          <p style="font-weight: bold">RIESGO:</p>
          <p style="text-align: justify">
            La realización de los estudios radiológicos se justifica bajo análisis de la relación riesgo beneficio realizado tanto por el medico
            tratante como por el medico radiólogo con el fin de tomar decisiones acertadas para el diagnostico y tratamiento y seguimiento de la
            patología en estudio.
          </p>
          <p style="text-align: justify">
            El Riesgo Potencial a la exposición de la radiación es bajo comparado con los beneficios obtenidos del estudio de la imagen médica.
          </p>
          <p style="text-align: justify">
            Una ligera elevación del riesgo de padecer alguna neoplasia en el futuro. Este riesgo en menor al 0.5%, por lo que se puede considerar muy
            bajo en comparación con la incidencia normal de las neoplasias en la población, que es del 33% para las mujeres y 50% para los hombres de
            acuerdo con la Sociedad Americana de Oncología.
          </p>
          <p style="text-align: justify">
            <span class="text-bold">HE COMPRENDIDO CON CLARIDAD TODO LO ESCRITO ANTERIORMENTE </span> Yo he tenido la oportunidad de preguntar y
            resolver todas mis dudas. <q-radio color="primary" disabled v-model="autoriza" val="S" left-label label="ACEPTO SI" />
            <q-radio color="primary" disabled v-model="autoriza" val="N" left-label label="NO" />
            <span class="text-bold">LA REALIZACION DEL EXAMEN – DECLARO QUE LA DECISION QUE TOMO ES LIBRE Y VOLUNTARIA </span>
            <q-radio color="primary" disabled v-model="autoriza" val="S" left-label label="SI" />
            <q-radio color="primary" disabled v-model="autoriza" val="N" left-label label="NO" />
            <span class="text-bold">DOY MI CONSENTIMIENTO </span>para que el profesional Tecnólogo en imágenes Diagnosticas me realice el
            procedimiento diagnostico solicitado por el médico tratante <span class="text-bold">SI </span> he aceptado la toma del estudio, la entidad
            en mención y el tecnólogo en imágenes, quedan autorizados para llevar a cabo las conductas o procedimientos Imagenológicos necesarios
            tendientes a resolver las complicaciones imprevistas del procedimiento que mediante este documento autorizo.
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
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :registro_profe="getAcomp.cod"
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

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hic077 ? false : true"
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
import { impresionHIC077, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive, computed } from "vue";
import { utilsFormat, evaluarClaseServ } from "@/formatos/utils";
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

const HIC077 = reactive({
  fecha: "",
  servicio: "",
});
const array_servic = ref([
  { COD: "0", DESCRIP: "DROGUERIA" },
  { COD: "1", DESCRIP: "CIRUGIAS" },
  { COD: "2", DESCRIP: "LABORATORIOS Y OTROS DIAGNOSTICOS" },
  { COD: "3", DESCRIP: "RX - IMAGENOLOGIA" },
  { COD: "4", DESCRIP: "OTROS SERVICIOS" },
  { COD: "5", DESCRIP: "CONSULTAS Y TERAPIAS" },
  { COD: "6", DESCRIP: "PATOLOGIA" },
  { COD: "7", DESCRIP: "PROMOCION Y PREVENCION" },
]);
const servicio = ref({
  select: evaluarClaseServ("3"),
  items: [
    { value: "DROGUERIA", label: "DROGUERIA" },
    { value: "CIRUGIAS", label: "CIRUGIAS" },
    { value: "LABORATORIOS Y OTROS DIAGNOSTICOS", label: "LABORATORIOS Y OTROS DIAGNOSTICOS" },
    { value: "RX - IMAGENOLOGIA", label: "RX - IMAGENOLOGIA" },
    { value: "OTROS SERVICIOS", label: "OTROS SERVICIOS" },
    { value: "CONSULTAS Y TERAPIAS", label: "CONSULTAS Y TERAPIAS" },
    { value: "PATOLOGIA", label: "PATOLOGIA" },
    { value: "PROMOCION Y PREVENCION", label: "PROMOCION Y PREVENCION" },
  ],
  serv_form: {
    label: "",
    required: true,
    id: "serv_form",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
});
const opcion_hic077 = ref(null);
const autoriza = computed(() => {
  switch (opcion_hic077.value) {
    case "AUTORIZAR":
      return "S";
    case "REVOCAR":
      return "N";
    default:
      return "";
  }
});
onMounted(() => {
  HIC077.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  HIC077.servicio = array_servic.value.find((item) => item.DESCRIP == servicio.value.select).COD;
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC077));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic077.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC077",
    disentimiento: "N",
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
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
    const datos_hic077 = {
      autorizo: opcion_hic077.value == "AUTORIZAR" ? true : false,
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
      ...HIC077,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC077" },
      content: impresionHIC077({
        datos: datos_hic077,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC077" },
      content: impresionHIC077({
        datos: datos_hic077,
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
