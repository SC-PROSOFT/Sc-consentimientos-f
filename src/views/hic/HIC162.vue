<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic162"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic162 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic162 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic162">
              {{ opcion_hic162 }}
            </q-chip>
          </p>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">INFORMACIÓN GENERAL</p>
            <p class="text-justify q-pa-xs">
              El o los ganglios que presenta en la parte lateral del cuello son debidos a la existencia de una patología tumoral maligna cuyo origen
              puede estar a nivel de la vía aéreo – digestiva superior, de tejidos del cuero cabelludo o del cuello , de la glándula tiroidea o de las
              glándulas salivares. El propósito de la intervención es efectuar la extirpación de todos los ganglios situados en el territorio de
              drenaje linfático del órgano origen del tumor. Esta intervención es necesaria para conocer el grado de extensión de la enfermedad que,
              sin tratamiento, evolucionaría desfavorablemente.
            </p>
            <p class="text-justify q-pa-xs">
              El tipo de anestesia requerida será la indicada por el anestesiólogo. Es posible que, durante o después de la intervención, sea
              necesaria la utilización de sangre y/o hemoderivados. También es necesario que advierta de posibles alergias medicamentosas,
              alteraciones de la coagulación, enfermedades cardiopulmonares, existencia de prótesis, marcapasos. medicaciones actuales o cualquier
              otra circunstancia.
            </p>
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">EN QUE CONSISTE EL VACIAMIENTO CERVICAL</p>
            <p class="text-justify q-pa-xs">
              Si la lesión tumoral se conoce y es susceptible de intervención quirúrgica , el vaciamiento cervical se realizará en el mismo tiempo
              operatorio que la extirpación del tumor de origen, aprovechando la misma incisión cutánea uni o bilateral.
            </p>
            <p class="text-justify q-pa-xs">
              Si la lesión tumoral no se encuentra previamente (metástasis de origen desconocido) o la lesión tumoral ya ha sido tratada previamente
              mediante cirugía o radioterapia, a incisión cutánea se efectuará en un lado del cuello o en ambos, caso de presentar afectación
              ganglionar bilateral.
            </p>
            <p class="text-justify q-pa-xs">
              La extirpación ganglionar puede ser más o menos extensa dependiendo de los hallazgos quirúrgicos y del compromiso de músculos, vasos o
              nervios del cuello afectados.
            </p>
            <p class="text-justify q-pa-xs">Habitualmente se usa un drenaje a nivel de la región cervical que se mantendrá durante algunos días.</p>
            <p class="text-justify q-pa-xs">
              También cabe la posibilidad de que durante la cirugía hay que realizar modificaciones del procedimiento por los hallazgos
              intraoperatorios para proporcionar un tratamiento mas adecuado.
            </p>
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RIESGOS DEL VACIAMIENTO CERVICAL</p>
            <p class="text-justify q-pa-xs">
              A pesar de la adecuada elección de la técnica y de su correcta realización, pueden presentarse efectos indeseables, tanto los comunes
              derivados de toda intervención y que pueden afectar a todos los órganos y sistemas, como los debidos a la situación vital del paciente
              (diabetes, cardiopatía, hipertensión, edad avanzada, anemia, obesidad...), y los específicos del procedimiento:
            </p>
            <p class="text-justify q-pa-xs">
              <span style="text-decoration: underline">Riesgos inmediatos</span>
            </p>
            <ul class="text-justify">
              <li>
                <p class="text-justify q-pa-xs">La hemorragia o hematoma local.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">
                  Complicaciones a nivel de la herida quirúrgica : cicatrización anómala o sobreinfección , que requieran tratamiento médico o
                  quirúrgico asociado.
                </p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Fístula de conducto linfático que precise curas prolongadas o incluso reintervención quirúrgica.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Edema laringeo que obligue a realizar traqueotomia preventiva.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">
                  Estas complicaciones inmediatas son mas frecuentes en caso de que la cirugía se efectúe después de un tratamiento radioterápico.
                </p>
              </li>
            </ul>
            <p class="text-justify q-pa-xs">
              <span style="text-decoration: underline">Riesgos secundarios:</span>
            </p>
            <ul class="text-justify">
              <li>
                <p class="text-justify q-pa-xs">
                  La cicatriz cervical puede fibrosarse y hacerse dolorosa con zona de anestesia. Dolores cervicales o de espalda en relación con la
                  movilización del brazo. Existe también un riesgo de recidiva posterior del tumor a pesar de una extirpación completa.
                </p>
              </li>
            </ul>
            <p class="text-justify q-pa-xs">
              <span style="text-decoration: underline">Complicaciones graves y/o excepcionales:</span>
            </p>
            <ul class="text-justify">
              <li>
                <p class="text-justify q-pa-xs">Hemorragia importante que requiera revisión quirúrgica.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Dificultad severa de alimentación o modificación definitiva de la voz.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">
                  Parálisis de ramos del nervio facial comprometiendo el movimiento de los músculos faciales. Neumotórax.
                </p>
              </li>
            </ul>
            <p class="text-justify q-pa-xs">
              Estas complicaciones habitualmente se resuelven con tratamiento médico (medicamentos, sueros, etc.) pero pueden llegar a requerir una
              reintervención, en algunos casos de urgencia.
            </p>
            <p class="text-justify q-pa-xs">
              Ningún procedimiento invasivo está absolutamente exento de riesgos importantes, incluyendo el de mortalidad, si bien esta posibilidad es
              bastante infrecuente.
            </p>
            <p class="text-justify q-pa-xs">
              De cualquier forma, si ocurriera una complicación, debe saber que todos los medios técnicos de este Centro están disponibles para
              intentar solucionarla.
            </p>
          </div>
          <div class="col-12">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RIESGOS PERSONALIZADOS</p>
            <TextArea_ v-model="HIC162.riesgo_personaliz" :field="form.riesgo_personaliz" class="col-12" />
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">QUE OTRAS ALTERNATIVAS HAY</p>
            <p class="text-justify q-pa-xs">La única alternativa es la abstención terapéutica.</p>
            <p class="text-justify q-pa-xs">
              Si después de leer detenidamente este documento desea más información, por favor, no dude en preguntar al especialista responsable, que
              le atenderá con mucho gusto.
            </p>
          </div>
        </div>
        <div v-if="opcion_hic162 == 'AUTORIZAR'">
          <p class="text-center" style="margin-top: 10px; font-weight: bold; margin-left: 10px; text-decoration: underline">Consentimiento</p>
          <div>
            <p class="text-justify q-pa-xs">
              Yo, <span class="text-bold">{{ getPaci.descrip }}</span>
              doy mi consentimiento para que me sea realizada una
              <span class="text-bold">VACIAMIENTO GANGLIONAR CERVICAL.</span>
            </p>
            <p class="text-justify q-pa-xs">
              Se me ha facilitado esto hoja informativa, habiendo comprendido el significado del procedimiento y los riesgos inherentes al mismo, y
              declaro estar debidamente informado/a, habiendo tenido oportunidad de aclarar mis dudas en entrevista personal con el Dr:
            </p>
            <Input_ v-model="HIC162.med_explica" :field="form.med_explica" :inputStyle="{ width: '700px' }" />
            <p class="text-justify q-pa-xs">
              a si mismo, he recibido respuesta o todas mis preguntas, habiendo tomado la decisión de manera libre y voluntaria.
            </p>
          </div>
        </div>

        <div v-if="opcion_hic162 == 'REVOCAR'">
          <p class="text-center" style="margin-top: 10px; font-weight: bold; margin-left: 10px; text-decoration: underline">
            Denegación o Revocación
          </p>
          <div>
            <p class="text-justify q-pa-xs">
              Yo, <span class="text-bold">{{ getPaci.descrip }}</span> después de ser informado/a de la naturaleza y riesgos del procedimiento
              propuesto, manifiesto de forma libre y consciente mi denegación / revocación (táchese lo que no proceda) para su realización, haciéndome
              responsable de las consecuencias que puedan derivarse de esta decisión.
            </p>
          </div>
        </div>
        <span class="text-bold">Villavicencio, {{ HIC162.fecha }}. </span>
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
        :disable="opcion_hic162 ? false : true"
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
import { impresionHIC162, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat, calcularEdad } from "@/formatos/utils";
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

const HIC162 = reactive({
  fecha: "",
  med_explica: "",
  riesgo_personaliz: "",
});

const opcion_hic162 = ref(null);

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
});
onMounted(() => {
  HIC162.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC162));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic162.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC162",
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
    const datos_hic162 = {
      autorizo: opcion_hic162.value == "AUTORIZAR" ? true : false,
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
      ...HIC162,
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
      datos: { ...firmas, cod_consen: "HIC162" },
      content: impresionHIC162({
        datos: datos_hic162,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC162" },
      content: impresionHIC162({
        datos: datos_hic162,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-162` });
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
