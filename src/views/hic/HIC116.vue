<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic116"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic116 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic116 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic116">
              {{ opcion_hic116 }}
            </q-chip>
          </p>
        </div>

        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; background-color: #123d7d; width: 100%">
            <p class="text-center" style="font-weight: bold; margin-top: 10px; margin-left: 10px; color: white">INTRODUCCIÓN</p>
          </div>
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">Apreciado Usuario:</p>
            <p class="text-justify q-pa-xs">
              Usted va a ser sometido a un procedimiento quirúrgico, invasivo no quirúrgico o terapéutico por el grupo de especialistas de Clínica
              Sanar. En este documento se explican con claridad, profundidad y en un lenguaje comprensible las más importantes características de la
              intervención sugerida, su indicación, beneficios y potenciales riesgos. Lo invitamos a leerlo con atención y a discutirlo con su médico
              tratante quien gustosamente responderá sus preguntas.
            </p>
            <p class="text-justify q-pa-xs">
              En señal de conformidad con la información recibida y con la realización de la intervención quirúrgica, deberá usted firmar el formato
              correspondiente. Solo con su autorización podremos programarlo y realizarle la intervención descrita.
            </p>
          </div>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; background-color: #123d7d; width: 100%">
            <p class="text-center" style="font-weight: bold; margin-top: 10px; margin-left: 10px; color: white">INFORMACIÓN GENERAL</p>
          </div>
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">¿QUÉ ES EL LEGRADO OBSTÉTRICO?</p>
            <p class="text-justify q-pa-xs">
              Es una intervención quirúrgica que consiste en la extracción por vía vaginal de los restos del embarazo.
            </p>
            <p class="text-justify q-pa-xs">
              El principal propósito del legrado es limpiar la cavidad endometrial (parte interna del útero) de restos ovulares y de coágulos
              sanguíneos.
            </p>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">¿CUÁNDO SE HACE?</p>
            <p class="text-justify q-pa-xs">
              En abortos (es decir pérdida del embarazo) que ocurren de forma incompleta o se encuentran retenidos. También es necesario hacerlo
              cuando hay retención de restos ovulares después del parto o cesárea.
            </p>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">¿CUÁLES ALTERNATIVAS DE TRATAMIENTO EXISTEN?</p>
            <p class="text-justify q-pa-xs">
              En algunos casos puede existir la alternativa de manejo farmacológico del aborto con medicamentos que facilitan la expulsión de los
              restos del embarazo como el misoprostol. Esta opción necesita seguimientos clínicos frecuentes puesto que puede ocurrir sangrado
              abundante y cuando falla se requiere de todas maneras un legrado obstétrico.
            </p>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">¿CÓMO SE HACE?</p>
            <p class="text-justify q-pa-xs">
              Bajo anestesia, por vía vaginal, previa asepsia y antisepsia, mediante la introducción de instrumentos quirúrgicos diseñados para
              limpiar la cavidad endometrial de los restos ovulares.
            </p>
            <p class="text-justify q-pa-xs">
              En algunos casos es necesario aplicar desde el día anterior medicaciones que ayuden en la maduración del cuello uterino, es decir que lo
              tornen más blando y lo dilaten para facilitar el procedimiento. De todas maneras, se necesita dilatar el cuello del útero dentro de la
              cirugía. Si la pérdida de la gestación ocurre en embarazos mayores a 10 semanas, se debe esperar la expulsión de parte de los restos,
              antes de recurrir al procedimiento, lo cual puede suceder en el término de horas o de días, en cuyo caso requiere sostener una
              vigilancia intrahospitalaria en sala de partos.
            </p>
            <p class="text-justify q-pa-xs">
              Muy ocasionalmente puede ser necesario un segundo legrado para completar la evacuación, sobre todo en casos de: úteros grandes con
              pérdidas de embarazos mayores a las 10 semanas, sacos anembrionados, embriones o fetos muertos y retenidos, embarazos molares,
              obliteraciones importantes del orificio cervical interno del útero o en patologías uterinas específicas.
            </p>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">¿CUÁLES SON LAS POSIBLES COMPLICACIONES?</p>
            <p class="text-justify q-pa-xs">
              Como en toda intervención médica existe riesgo de complicaciones que suceden durante o después de la operación, derivadas del acto
              quirúrgico o dependientes del compromiso del estado de salud particular de cada persona (hipertensión arterial, diabetes, asma,
              alergias, obesidad, malnutrición, anemia, enfermedades cardiacas, pulmonares, neurológicas, hematológicas o várices.) no todas
              previsibles ni prevenibles.
            </p>
            <p class="text-justify q-pa-xs">Dentro de las complicaciones específicas que podrían suceder en este procedimiento se encuentran:</p>
            <p class="text-justify q-pa-xs">
              Hemorragias intra o posoperatorias con la posible necesidad de transfusión o intervenciones quirúrgicas adicionales como laparotomía e
              histerectomía (extracción del útero).
            </p>
            <p class="text-justify q-pa-xs">
              Perforación uterina con la posible necesidad de hospitalización para vigilancia clínica o intervenciones quirúrgicas adicionales como
              laparotomías e histerectomía (extracción del útero).
            </p>
            <p class="text-justify q-pa-xs">
              Infecciones pélvicas o urinaria. A pesar de la asepsia y antisepsia estrictas previas a la cirugía, en muy raras ocasiones pueden
              derivarse infecciones mayores con compromiso del estado de salud, aunque con mínimo riesgo de mortalidad, que requieren tratamientos
              adicionales. Desgarros de cuello uterino.
            </p>
            <p class="text-justify q-pa-xs">Formación poslegrado de sinequias (adherencias entre las paredes del útero).</p>
            <p class="text-justify q-pa-xs">
              Si en el momento del acto quirúrgico surgiera alguna complicación imprevista Clínica Sanar procederá con los medios y recursos
              necesarios para su control.
            </p>
          </div>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; background-color: #123d7d; width: 100%">
            <p class="text-center" style="font-weight: bold; margin-top: 10px; margin-left: 10px; color: white">AUTORIZACIÓN</p>
          </div>
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="text-justify q-pa-xs">
              He comprendido las explicaciones que, en un lenguaje claro y sencillo, se me han brindado y el médico que me ha atendido me ha permitido
              expresar todas mis observaciones y me ha aclarado todas las dudas y preguntas que le he planteado respecto a los fines, alternativas,
              métodos, ventajas, inconvenientes y pronóstico de la intervención, así como de los riesgos y complicaciones que por mi situación actual
              pueden surgir, en especial las siguientes:
            </p>
            <TextArea_ v-model="HIC116.riesgo_compli" :field="form.riesgo_compli" class="col-12" />
            <p class="text-justify q-pa-xs">
              También he sido informado que, durante el acto quirúrgico, procedimiento o tratamiento se pueden presentar imprevistos que hagan al
              equipo médico variar la técnica o plan de manejo programado. Asimismo, he entendido y acepto que durante el procedimiento/tratamiento se
              podrán realizar fotografías o grabar imágenes que luego se conservarán y se podrán transmitir con fines científicos y/o de docencia y
              utilizar en sesiones clínicas, juntas facultativas, conferencias, congresos, publicaciones médicas y actos científicos, sin que en las
              mismas figure mi identidad.
            </p>
            <p class="text-justify q-pa-xs">
              Por ello, manifiesto que me considero satisfecho/a con la información recibida y que comprendo la indicación y los riesgos de este
              procedimiento/tratamiento.
            </p>
            <p class="text-justify q-pa-xs">
              Ningún procedimiento está exento de riesgos importantes, incluyendo la muerte, aunque esta posibilidad es infrecuente.
            </p>
            <p class="text-justify q-pa-xs">
              En caso de ocurrir alguna complicación, Clínica Sanar procederá con los medios y recursos que se requieran para su control, intentando
              minimizar en lo posible sus consecuencias.
            </p>
            <p class="text-justify q-pa-xs">
              Yo
              <span class="text-bold">{{ getPaci.descrip.trim() }},</span>
              identificada con documento
              <span class="text-bold">{{ getPaci.cod }}</span>
              de
              <span class="text-bold">{{ getPaci.descrip_ciudad.trim() }},</span>
              fecha
              <span class="text-bold">{{ HIC116.fecha }}</span>
            </p>
            <ul class="text-justify">
              <li>
                He comprendido la naturaleza y propósitos de la intervención que me ha sido explicada satisfactoriamente por el médico:
                <div>
                  <Input_ v-model="HIC116.med_explica" :field="form.med_explica" :inputStyle="{ width: '700px' }" />
                </div>
                y he podido formular todas las preguntas que he considerado oportunas.
              </li>
              <li>
                La cirugía descrita está aceptada por la especialidad:
                <div>
                  <Input_ v-model="HIC116.especiali" :field="form.especiali" :inputStyle="{ width: '700px' }" />
                </div>
                como la mejor alternativa para solucionar mi problema y no existe una contraindicación especial para su realización.
              </li>
              <li>
                He sido informado de los métodos alternativos de tratamiento, en caso de que los hubiese, al igual que las ventajas y desventajas de
                cada uno de ellos.
              </li>
              <li>
                He informado al médico:
                <div>
                  <Input_ v-model="HIC116.med_infor" :field="form.med_infor" :inputStyle="{ width: '700px' }" />
                </div>
                de mis enfermedades generales para la valoración de las posibles contraindicaciones.
              </li>
              <li>Puedo retirar la autorización para la cirugía si lo estimo oportuno, sin que ello repercuta en los restantes cuidados médicos.</li>
              <li>
                Soy consciente de los riesgos propios del tratamiento indicado, así como los derivados de la anestesia que en mi caso se aplique.
              </li>
              <li>Soy consciente que no existen garantías absolutas de obtener resultados satisfactorios.</li>
            </ul>
            <p class="text-justify q-pa-xs">Información complementaria solicitada y/o circunstancia especial:</p>
            <TextArea_ v-model="HIC116.info_complement" :field="form.info_complement" class="col-12" />
            <p class="text-justify q-pa-xs">Así pues, de forma voluntaria, doy mi consentimiento:</p>
            <ul>
              <li>
                Para que se me realice dicho(s) procedimiento(s) quirúrgico(s), así como las maniobras u operaciones que sean necesarias durante la
                intervención y para que asista el personal autorizado.
                <q-radio color="primary" v-model="HIC116.preg_1" val="S" label="SI" />
                <q-radio color="primary" v-model="HIC116.preg_1" val="N" label="NO" />
              </li>
              <li>
                Para que se me administre la anestesia que se considere adecuada para la operación, así como las medidas complementarias oportunas.
                <q-radio color="primary" v-model="HIC116.preg_2" val="S" label="SI" />
                <q-radio color="primary" v-model="HIC116.preg_2" val="N" label="NO" />
              </li>
              <li>
                Para que se puedan realizar fotografías o/y grabar la intervención, así como su utilización con fines didácticos o científicos sin que
                se divulgue el nombre del paciente o sus familiares.
                <q-radio color="primary" v-model="HIC116.preg_3" val="S" label="SI" />
                <q-radio color="primary" v-model="HIC116.preg_3" val="N" label="NO" />
              </li>
              <li>
                Para que, en caso de necesidad se me hagan transfusiones de sangre y/o hemoderivados.
                <q-radio color="primary" v-model="HIC116.preg_4" val="S" label="SI" />
                <q-radio color="primary" v-model="HIC116.preg_4" val="N" label="NO" />
              </li>
            </ul>
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
        :disable="opcion_hic116 ? false : true"
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
import { impresionHIC116, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat } from "@/formatos/utils";
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

const HIC116 = reactive({
  fecha: "",
  riesgo_compli: "",
  med_explica: "",
  especiali: "",
  med_infor: "",
  info_complement: "",
  preg_1: "",
  preg_2: "",
  preg_3: "",
  preg_4: "",
});

const opcion_hic116 = ref(null);

const form = ref({
  riesgo_compli: {
    id: "riesgo_compli",
    maxlength: "650",
    label: "",
    rows: 4,
    campo_abierto: true,
  },
  med_explica: {
    id: "med_explica",
    maxlength: "150",
    label: "",
    placeholder: "Nombre del profesional",
    campo_abierto: true,
  },
  especiali: {
    id: "especiali",
    maxlength: "150",
    label: "",
    placeholder: "Especialidad",
    campo_abierto: true,
  },
  med_infor: {
    id: "med_infor",
    maxlength: "150",
    label: "",
    placeholder: "Nombre del profesional",
    campo_abierto: true,
  },
  info_complement: {
    id: "info_complement",
    maxlength: "650",
    label: "",
    rows: 4,
    campo_abierto: true,
  },
});
onMounted(() => {
  HIC116.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC116));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic116.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC116",
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
  try {
    const datos_hic116 = {
      autorizo: opcion_hic116.value == "AUTORIZAR" ? true : false,
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
      ...HIC116,
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
      datos: { ...firmas, cod_consen: "HIC116" },
      content: impresionHIC116({
        datos: datos_hic116,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC116" },
      content: impresionHIC116({
        datos: datos_hic116,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-116` });
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
