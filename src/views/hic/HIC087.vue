<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic087"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic087 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic087 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic087">
              {{ opcion_hic087 }}
            </q-chip>
          </p>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="text-center" style="font-weight: bold; margin-top: 10px; margin-left: 10px">I. IDENTIFICACIÓN DEL PACIENTE</p>
          </div>
          <div style="border: 1px solid #ccc; width: 20%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Nombre del paciente</p>
          </div>
          <div style="border: 1px solid #ccc; width: 80%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">{{ getPaci.descrip }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 20%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Tipo de documento</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 20%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.tipo_id }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Número de documento</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.cod }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 20%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Fecha</p>
          </div>
          <div style="border: 1px solid #ccc; width: 20%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ HIC087.fecha }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 15%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Servicio</p>
          </div>
          <div style="border: 1px solid #ccc; width: 45%">
            <Select_ class="q-mt-lg q-mb-xs" v-model="servicio.select" :field="servicio.serv_form" :items="servicio.items" />
          </div>
        </div>

        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="text-center" style="font-weight: bold; margin-top: 10px; margin-left: 10px">II. INFORMACIÓN GENERAL</p>
          </div>
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">
              Paciente ingresa al servicio quirúrgico, transfusional y suero terapia.
            </p>
          </div>
        </div>

        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="text-center" style="font-weight: bold; margin-top: 10px; margin-left: 10px">III. OBJETIVO Y BENEFICIOS</p>
          </div>
          <div style="border: 1px solid #ccc; width: 100%">
            <ol>
              <li>
                <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
                  CANALIZACIÓN DE UNA VIA VENOSA O CATETER DE INSERCIÓN PERIFÉRICA: Procedimiento por medio del cual, se introduce un catéter por la
                  vena con el fin de administrar, líquidos, medicamentos, hemocomponentes, las complicaciones que se pueden derivar de este
                  procedimiento son: repetición del procedimiento por dificultad en la canalización, dolor, infiltración, taponamiento y flebitis
                  química o bacteriana.
                </p>
              </li>
              <li>
                <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
                  PASO DE SONDAS: Procedimiento por medio del cual se introduce una sonda en el cuerpo, con fines terapéuticos, para la administración
                  de medicamentos según la indicación terapéutica.
                </p>
              </li>
              <li>
                <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
                  SONDAS NASOGASTRICAS Y/O OROGASTRICA: Procedimiento mediante el cual se introduce una sonda a través de la nariz (o boca :
                  orogástrica) llegando al esófago, utilizada para la administración de medicamentos o alimentos, o drenar el contenido del estomago,
                  La aspiración nasogástrica se utiliza principalmente para eliminar secreciones gástricas, las complicaciones que se pueden derivar
                  de este procedimiento son: sangrados por la nariz y molestias en la deglución.
                </p>
              </li>
              <li>
                <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
                  SONDAS VESICALES: Procedimiento mediante el cual se introduce una sonda a través del orificio uretral (hombre -mujer), para
                  evacuación de contenido de la vejiga, las complicaciones que se pueden derivar de este procedimiento son: traumas, sangrado uretral,
                  dolor.
                </p>
              </li>
              <li>
                <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
                  ADMINISTRACIÓN DE MEDICAMENTOS: La administración de medicamentos es el procedimiento mediante el cual un fármaco es proporcionado
                  por personal de salud idóneo al paciente por diferentes vías de administración: oral, intradérmica, subcutánea, intramuscular,
                  endovenosa, rectal y tópica, según indicación médica escrita, debidamente informado y registrado. Existen medicamentos que pueden
                  producir algunas molestias riesgos o reacciones tanto por su composición y efecto como por la vía de administración. Le sugerimos
                  comentar al personal médico y de enfermería al respecto a fin de que se resuelvan las molestias o dudas que puedan surgir.
                </p>
              </li>
              <li>
                <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
                  HIGIENE, ASEO Y CONFORT DEL PACIENTE: Es el conjunto de medidas de limpieza encaminadas a proporcionar apoyo, bienestar físico y
                  conservar la salud del paciente.
                </p>
              </li>
              <li>
                <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
                  VALORACION DE SIGNOS VITALES: Es la forma de determinar los valores normales o anormales del funcionamiento cardiaco. de
                  respiratorio y termorregulación (temperatura) del organismo, esta actividad se realiza periódicamente para controlar su evolución
                  por consiguiente los monitores poseen cables que se conectaran a las diferentes partes del cuerpo, con sensores para recoger señales
                  y mostrar las constantes vitales.
                </p>
              </li>
              <li>
                <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
                  CURACIONES: Es el procedimiento de limpieza de una herida y/o del área de inserción de catéteres, con adecuada técnica de asepsia,
                  con técnica esteril según la necesidad favoreciendo al adecuado proceso de cicatrización de las heridas y disminuyendo la aparición
                  de infecciones. En la realización de este procedimiento se puede presentar dolor.
                </p>
              </li>
              <li>
                <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
                  RETIRO DE PUNTOS: procedimiento para quitar las suturas de la piel. Las suturas se usan para cerrar una herida. El retiro de suturas
                  ayudan a prevenir la cicatrización y el daño al tejido. Las suturas se retiren normalmente de 7 a 10 días. Las suturas de su cara
                  deben retirarse de 3 a 5 días. Las suturas en su cuero cabelludo deben retirarse de 7 y 14 días. Las suturas en abdomen, deben
                  permanecer por 14 días porque las articulaciones se doblen y se mueven frecuentemente. El paciente tiene el derecho de participar en
                  la planificación de su cuidado. Se le debe enseñar sobre su condición y como darle tratamiento.
                </p>
              </li>
              <li>
                <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
                  DISMINUIR LESIONES DERIVADAS DE LAS CAÍDAS: Es la detección temprana de los pacientes con mayor riesgo de sufrir una caída. Existen
                  pacientes que, por presentar factores predisponentes como edad, patologías medicamentos que toma, pueden en un momento dado ser
                  susceptibles a calda, por esta razón se debe tomar medidas preventivas antes de que suceda.
                </p>
              </li>
              <li>
                <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
                  INTUBACION OROTRAQUEAL: Procedimiento para asegurar la vía aérea en caso de falla ventilatoria o parada cardiaca.
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="text-center" style="font-weight: bold; margin-top: 10px; margin-left: 10px">IV. AUTORIZACIÓN Y FIRMAS</p>
          </div>
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
              Comprendo que, para la efectividad y logro de los objetivos buscados con el tratamiento propuesto por el equipo médico, es indispensable
              mi colaboración activa y el seguimiento a las indicaciones impartidas por el personal médico y de enfermería, por último, manifiesto que
              he sido informado por equipo de enfermería sobre alergias conocidas del tratamiento farmacológico ordenado.
            </p>
            <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
              Declaro que me han sido explicadas la naturaleza y razones de los actos de cuidado de enfermería, su importancia dentro de proceso de
              atención y sus posibles riesgos y complicaciones. Entiendo los beneficios que pretenden estas actividades y luego de comprender la
              información recibida, doy mi autorización libre y espontánea, en pleno uso de mis capacidades mentales, para que el equipo de enfermería
              profesional y auxiliar, adelanten los actos de cuidado que mi condición requiera (ley 911 de 2004, título I, Responsabilidad del
              profesional de enfermería en la práctica artículo 6, artículo 13, . Capitulo v artículo 35, articulo 36.
            </p>
            <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
              Declaro: Se me han explicado de forma clara y satisfactoria qué es, cómo se hace y para qué sirve este procedimiento. También se me ha
              explicado sus riesgos y complicaciones. He comprendido todo lo anterior.
            </p>
            <p class="text-justify" style="margin-top: 10px; margin-left: 10px; margin-right: 10px">
              Manifiesto y <q-radio color="primary" disabled v-model="autoriza" val="S" left-label label="Acepto" />
              <q-radio color="primary" disabled v-model="autoriza" val="N" left-label label="Rechazo" /> que el profesional de la clínica Sanar,
              realice los procedimientos pertinentes en la atención en salud.
            </p>
          </div>
        </div>
      </q-card-section>
    </div>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around">
        <ContainerFirma
          :quien_firma="getAcomp.cod ? 'FIRMA ACOMPAÑANTE' : 'FIRMA PACIENTE'"
          :firmador="getAcomp.cod ? getAcomp.descrip : getPaci.descrip"
          :registro_profe="getAcomp.cod ? getAcomp.cod : getPaci.cod"
          @reciFirma="callBackFirma"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getTestigo.descrip"
          :registro_profe="getTestigo.cod"
          @reciFirma="callBackFirmaTest"
          quien_firma="FIRMA TESTIGO"
          :codigo_firma="getTestigo.cod"
          class="col-4"
        />
        <ContainerFirma
          disable
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.cod"
          quien_firma="FIRMA PROFESIONAL"
          :codigo_firma="getProf.cod"
          class="col-4"
        />
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hic087 ? false : true"
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
import { impresionHIC087, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive, computed } from "vue";
import { utilsFormat, evaluarClaseServ } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion, getTestigo } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const firma_recibida_test = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);

const HIC087 = reactive({
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
  select: evaluarClaseServ("1"),
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
const opcion_hic087 = ref(null);
const autoriza = computed(() => {
  switch (opcion_hic087.value) {
    case "AUTORIZAR":
      return "S";
    case "REVOCAR":
      return "N";
    default:
      return "";
  }
});
onMounted(() => {
  HIC087.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  HIC087.servicio = array_servic.value.find((item) => item.DESCRIP == servicio.value.select).COD;
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC087));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic087.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC087",
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
    getAcomp.cod.trim() && (await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` }));
    await guardarFile$({ base64: firma_recibida_test.value, codigo: `T${llave}` });
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });

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
    const datos_hic087 = {
      autorizo: opcion_hic087.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      testigo: getTestigo,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
        firma_test: firma_recibida_test.value ? true : false,
      },
      ...HIC087,
    };

    const firmas = {
      img_firma_testigo: firma_recibida_test.value,
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC087" },
      content: impresionHIC087({
        datos: datos_hic087,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC087" },
      content: impresionHIC087({
        datos: datos_hic087,
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
  if (getAcomp.cod) {
    data_firma && (firma_recibida_acomp.value = data_firma);
  } else {
    data_firma && (firma_recibida.value = data_firma);
  }
};

const callBackFirmaTest = (data_firma) => {
  data_firma && (firma_recibida_test.value = data_firma);
};
</script>
