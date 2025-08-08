<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic125"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic125 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic125 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic125">
              {{ opcion_hic125 }}
            </q-chip>
          </p>
        </div>

        <div class="row q-mt-md q-mb-md">
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">INFORMACIÓN GENERAL</p>
            <p class="text-justify q-pa-xs">
              La rinoplastia es una técnica quirúrgica que tiene como finalidad la corrección de la forma externa de la nariz. El tipo de anestesia
              requerida será la indicada por el anestesiólogo. Es posible que, durante o después de la intervención, sea necesaria la utilización de
              sangre y/o hemoderivados. También es necesario que advierta de posibles alergias medicamentosas, alteraciones de la coagulación,
              enfermedades cardiopulmonares, existencia de prótesis, marcapasos, medicaciones actuales o cualquier otra circunstancia.
            </p>
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">EN QUE CONSISTE LA RINOPLASTIA</p>
            <p class="text-justify q-pa-xs">
              La intervención se realiza a través de unas incisiones que se hacen en el interior de las ventanas de la nariz. Después, los tejidos
              blandos se separan cuidadosamente de los cartílagos y huesos adyacentes y se corrigen las estructuras no deseadas. Posteriormente, los
              huesos y los cartílagos se sitúan de tal manera que tomen la forma adecuada para la nariz. Ocasionalmente puede ser necesario el uso de
              injertos de hueso o de cartílago. En el mismo acto quirúrgico se puede realizar la reconstrucción del tabique nasal, si está desviado,
              para aliviar la dificultad respiratoria que dicha desviación pueda producir. La intervención se denomina entonces septorrinoplastía
              siendo manejado el septo (tabique) por el otorrinolaringólogo.
            </p>
            <p class="text-justify q-pa-xs">
              En ambas intervenciones se deja una pequeña férula de yeso u otros materiales sobre el dorso de la nariz y se coloca un taponamiento
              nasal o cánulas de silicona durante unas 72 horas. Por otra parte, como quiera que la valoración del resultado de la intervención por
              parte del paciente es subjetiva, cabe la posibilidad de no resultar satisfactoria. Todas estas circunstancias podrían justificar un
              segundo tiempo operatorio unos meses después asumido por el paciente.
            </p>
            <p class="text-justify q-pa-xs">
              También cabe la posibilidad de que durante la cirugía haya que realizar modificaciones del procedimiento por los hallazgos
              intraoperatorios para proporcionar un tratamiento más adecuado.
            </p>
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RIESGOS DE LA RINOPLASTIA</p>
            <p class="text-justify q-pa-xs">
              A pesar de la adecuada elección de la técnica y de su correcta realización, pueden presentarse efectos indeseables, tanto los comunes
              derivados de toda intervención y que pueden afectar a todos los órganos y sistemas, como los debidos a la situación vital del paciente
              (diabetes, cardiopatía, hipertensión, edad avanzada, anemia, obesidad...), y los específicos del procedimiento: Pequeña hemorragia,
              tanto por las fosas nasales como por la faringe, que suele ceder en unas horas o persistir requiriendo un nuevo taponamiento. Si el
              taponamiento es con gasa, ésta puede deslizarse por la parte posterior de la fosa nasal provocando una sensación de cuerpo extraño y
              náuseas, que se soluciona retirando el taponamiento y colocando otro si es preciso.
            </p>
            <ul class="text-justify">
              <li>
                <p class="text-justify q-pa-xs">Hematoma en la cara y los ojos en los primeros días.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">
                  Dolor en las fosas nasales, sobre todo si se ha tenido que actuar sobre el hueso, así como sensación de sequedad en garganta por
                  respirar continuamente por la boca.
                </p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Vómitos sanguinolentos durante las primeras horas por la sangre deglutida.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Pequeña hemorragia nasal o bucal que rara vez requiere lo colocación de un taponamiento nasal.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Infección local con la aparición de síntomas inflamatorios.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">
                  Dolor o adormecimiento en la mejilla e incluso la falta de sensibilidad en los dientes superiores por lesión accidental del nervio
                  infraorbitario.
                </p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Perforación del tabique nasal.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Sinequias -bridas entre ambas paredes de las fosas nasales.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Atrofia de la fosa nasal con la aparición de costras nasales y alteraciones del olfato.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Visión doble o inflamación de los párpados o del resto de la cara.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">
                  Movilización accidental de la pirámide nasal a lo largo del periodo de cicatrización, lo que produciría defectos estéticos en el
                  periodo postoperatorio.
                </p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">
                  Palpación de pequeñas excrecencias por implantación de fragmentos de hueso extirpado bajo la as complicaciones habitualmente se
                  resuelven con tratamiento médico (medicamentos, sueros, etc.) pero pueden llegar a requerir una reintervención, en algunos casos de
                  urgencia o posteriormente.
                </p>
              </li>
            </ul>
            <p class="text-justify q-pa-xs">
              También es posible la formación de fibrosis en el dorso, lo que se denomina “supratip”, la cual se puede resolver con infiltración de
              corticoide o con una re intervención. Generalmente es causado por edema (inflamación) residual o por el tipo de cicatrización del
              paciente.
            </p>
            <p class="text-justify q-pa-xs">
              Ningún procedimiento invasivo está absolutamente exento de riesgos importantes, incluyendo e! de mortalidad, si bien esta posibilidad es
              bastante infrecuente. De cualquier forma, si ocurriera una complicación, debe saber que todos los medios técnicos de este Centro están
              disponibles para intentar solucionarla.
            </p>
          </div>

          <div class="col-12">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RIESGOS PERSONALIZADOS</p>
            <TextArea_ v-model="HIC125.riesgo_personaliz" :field="form.riesgo_personaliz" class="col-12" />
          </div>
          <div class="col-12">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">QUE OTRAS ALTERNATIVAS HAY</p>
            <TextArea_ v-model="HIC125.otras_alternat" :field="form.otras_alternat" class="col-12" />
          </div>
        </div>
        <div v-if="opcion_hic125 == 'AUTORIZAR'">
          <p class="text-center" style="margin-top: 10px; font-weight: bold; margin-left: 10px; text-decoration: underline">Consentimiento</p>
          <div class="row">
            <p class="text-justify">
              <!-- Autoriza paciente -->
              <span v-if="!getAcomp.cod" class="text-justify q-pa-xs">
                Yo, <span class="text-bold">{{ getPaci.descrip }}</span
                >, edad <span class="text-bold">{{ calcularEdad(getPaci.nacim) }} </span>, identificad@ con Historia Clinica No.
                <span class="text-bold">{{ getHc.llave }} </span> doy mi consentimiento para que me sea realizada una
                <span class="text-bold">RINOPLASTIA. </span>
              </span>

              <!-- Autoriza acompañante -->
              <span v-if="getAcomp.cod" class="text-justify q-pa-xs">
                Yo, <span class="text-bold">{{ getAcomp.descrip.trim() }}</span
                >, identifcado(a) con <span class="text-bold">{{ getAcomp.tipo_id }} </span>&nbsp;<span class="text-bold">{{ getAcomp.cod }}</span
                >, en calidad de familiar y/o acompañante responsable del paciente&nbsp;<span class="text-bold">{{ getPaci.descrip.trim() }},</span
                >&nbsp; identifcado(a) con&nbsp;<span class="text-bold">{{ getPaci.tipo_id }} </span>&nbsp;<span class="text-bold"
                  >{{ getPaci.cod.trim() }},</span
                >
              </span>

              <!-- Texto autoriza -->
              Se me ha facilitado esto hoja informativa, habiendo comprendido el significado del procedimiento y los riesgos inherentes al mismo, y
              declaro estar debidamente informado/a, habiendo tenido oportunidad de aclarar mis dudas en entrevista personal con el Dr.:
            </p>
            <Input_ v-model="HIC125.med_explica" :field="form.med_explica" :inputStyle="{ width: '700px' }" />
            <p class="text-justify q-pa-xs">
              Asimismo, he recibido respuesta o todas mis preguntas, habiendo tomado la decisión de manera libre y voluntaria.
            </p>
          </div>
        </div>
        <div v-if="opcion_hic125 == 'REVOCAR'">
          <p class="text-center" style="margin-top: 10px; font-weight: bold; margin-left: 10px; text-decoration: underline">
            Denegación o Revocación
          </p>
          <p class="text-justify">
            <!-- Revoca paciente -->
            <span v-if="!getAcomp.cod" class="text-justify q-pa-xs">
              Yo, <span class="text-bold">{{ getPaci.descrip }}</span>
            </span>

            <!-- Revoca acompañante -->
            <span v-if="getAcomp.cod" class="text-justify q-pa-xs">
              Yo <span class="text-bold">{{ getAcomp.descrip.trim() }}</span
              >, identifcado(a) con <span class="text-bold">{{ getAcomp.tipo_id }} </span>&nbsp;<span class="text-bold">{{ getAcomp.cod }}</span
              >, en calidad de familiar y/o acompañante responsable del paciente&nbsp;<span class="text-bold">{{ getPaci.descrip.trim() }},</span
              >&nbsp; identifcado(a) con&nbsp;<span class="text-bold">{{ getPaci.tipo_id }} </span>&nbsp;<span class="text-bold">{{
                getPaci.cod
              }}</span>
            </span>

            <!-- Texto revoca -->
            después de ser informado/a de la naturaleza y riesgos del procedimiento propuesto, manifiesto de forma libre y consciente mi denegación /
            revocación (táchese lo que no proceda) para su realización, haciéndome responsable de las consecuencias que puedan derivarse de esta
            decisión.
          </p>
        </div>
        <span class="text-bold">Villavicencio, {{ HIC125.fecha }}. </span>
        <!-- <p class="text-justify q-pa-xs">La única alternativa es la abstención terapéutica.</p> -->
        <p class="text-justify q-pa-xs">
          Si después de leer detenidamente este documento desea más información, por favor, no dude en preguntar al especialista responsable, que le
          atenderá con mucho gusto.
        </p>
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px">
              NOTA IMPORTANTE ¡SI NO PRESENTA ESTE FORMATO DEBIDAMENTE DILIGENCIADO EN EL MOMENTO DE SU CITA PARA EL EXAMEN INDICADO SU CITA SERA
              CANCELADA
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
        :disable="opcion_hic125 ? false : true"
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
import { impresionHIC125, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat, calcularEdad, evaluarParentesco } from "@/formatos/utils";
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

const HIC125 = reactive({
  fecha: "",
  med_explica: "",
  riesgo_personaliz: "",
  otras_alternat: "",
});

const opcion_hic125 = ref(null);

const form = ref({
  med_explica: {
    id: "med_explica",
    maxlength: "150",
    label: "",
    placeholder: "Nombre del profesional",
    campo_abierto: true,
  },
  riesgo_personaliz: {
    id: "riesgo_personaliz",
    maxlength: "500",
    label: "",
    rows: 3,
    campo_abierto: true,
  },
  otras_alternat: {
    id: "otras_alternat",
    maxlength: "500",
    label: "",
    rows: 3,
    campo_abierto: true,
  },
});
onMounted(() => {
  HIC125.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC125));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic125.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC125",
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
    const datos_hic125 = {
      autorizo: opcion_hic125.value == "AUTORIZAR" ? true : false,
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
      ...HIC125,
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
      datos: { ...firmas, cod_consen: "HIC125" },
      content: impresionHIC125({
        datos: datos_hic125,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC125" },
      content: impresionHIC125({
        datos: datos_hic125,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-125` });
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
