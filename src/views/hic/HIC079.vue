<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic079"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic079 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic079 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic079">
              {{ opcion_hic079 }}
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
          <p>&nbsp;{{ HIC079.fecha }}</p>
        </div>
        <div>
          <p style="text-align: justify">
            Señora usuaria: Existen exámenes Imagenológicos que utilizan radiaciones ionizantes para su realización. Algunos de estos exámenes son:
            Radiografías, Mamografías, Densitometrías, Estudios Digestivos, Procedimientos con Apoyo Fluoroscópico y Tomografías Computadas. Las
            radiaciones ionizantes pueden producir efectos en el embrión o feto que dependen del tiempo de gestación, y de la dosis de radiación
            recibida. Estos efectos pueden aparecer también de forma natural o inducidos por otros factores. En el procedimiento que se le realizará,
            la dosis recibida es muy baja y el riesgo de aparición de efectos radioinducidos es despreciable. Sin embargo, hay que tener en
            consideración que la probabilidad de daño es mayor sobre todo al inicio del embarazo (3 primeros meses). Este riesgo es variable y no
            predecible, y no se puede eliminar a pesar de las medidas de protección radiológicas disponibles (uso de delantal plomado). Tomando en
            consideración lo expuesto anteriormente, su médico ha justificado la realización del estudio basándose en que los beneficios que se
            obtienen superan ampliamente a los posibles efectos que le pueda ocasionar, y a que no hay técnicas alternativas igual de eficaces para un
            buen diagnóstico.
          </p>
          <p style="font-weight: bold">RIESGO:</p>
          <p style="text-align: justify">
            Para la mayoría de los procedimientos diagnósticos, impartiendo dosis fetales hasta aproximadamente 1 mGy,(miligray) los riesgos asociados
            de cáncer infantil son muy bajos (por debajo de 1 en 10000), comparado con el riesgo natural (alrededor de 1 en 500).
          </p>
          <p style="text-align: justify">
            Una radiografía de tórax simple expone al paciente a alrededor de 0.1 mSv (miliSievert). Esto es aproximadamente la misma cantidad de
            radiación a la que las personas están expuestas naturalmente durante unos 10 días.
          </p>
          <p style="text-align: justify">
            <span class="text-bold">HE COMPRENDIDO CON CLARIDAD TODO LO ESCRITO ANTERIORMENTE </span> Yo he tenido la oportunidad de preguntar y
            resolver todas mis dudas. <q-radio color="primary" disabled v-model="autoriza" val="S" left-label label="ACEPTO SI" />
            <q-radio color="primary" disabled v-model="autoriza" val="N" left-label label="NO" />
            <span class="text-bold">REALIZACION DEL EXAMEN – DECLARO QUE LA DECISION QUE TOMO ES LIBRE Y VOLUNTARIA </span>
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
        :disable="opcion_hic079 ? false : true"
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
import { impresionHIC063, impresion, generarArchivo } from "@/impresiones";
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

const HIC079 = reactive({
  fecha: "",
});
const servicio = ref({
  select: evaluarClaseServ("3"),
  items: [
    { value: "DROGUERIA", label: "DROGUERIA" },
    { value: "CIRUGIAS", label: "CIRUGIAS" },
    { value: "LABORATORIOS Y OTROS DIAGNOSTICOS", label: "LABORATORIOS Y OTROS DIAGNOSTICOS" },
    { value: "RX - IMAGENOLOGIA", label: "RX - IMAGENOLOGIA" },
    { value: "OTROS SERVICIOS", label: "OTROS SERVICIOS" },
    { value: "CONSULTA Y TERAPIAS", label: "CONSULTA Y TERAPIAS" },
    { value: "PATOLOGIA", label: "PATOLOGIA" },
    { value: "PROMOCION Y PREVENCION", label: "PROMOCION Y PREVENCION" },
  ],
  serv_form: {
    label: "",
    required: true,
    id: "serv_form",
    campo_abierto: true,
  },
});
const opcion_hic079 = ref(null);
const autoriza = computed(() => {
  switch (opcion_hic079.value) {
    case "AUTORIZAR":
      return "S";
    case "REVOCAR":
      return "N";
    default:
      return "";
  }
});
onMounted(() => {
  HIC079.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC079));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic079.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC079",
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
    const datos_hic063 = {
      autorizo: opcion_hic079.value == "AUTORIZAR" ? true : false,
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
      ...HIC079,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC079" },
      content: impresionHIC063({
        datos: datos_hic063,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC079" },
      content: impresionHIC063({
        datos: datos_hic063,
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
