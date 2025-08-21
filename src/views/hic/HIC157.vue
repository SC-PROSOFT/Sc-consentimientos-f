<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic157"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic157 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic157 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic157">
              {{ opcion_hic157 }}
            </q-chip>
          </p>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">INFORMACIÓN GENERAL</p>
            <p class="text-justify q-pa-xs">
              Los senos maxilares son unas cavidades que se encuentran a ambos lados de la nariz, excavadas en el interior del hueso maxilar. La
              antrostomía maxilar sirve para diagnosticar y/o tratar una enfermedad localizada en el seno maxilar y, eventualmente, en otros senos.
            </p>
            <p class="text-justify q-pa-xs">
              El tipo de anestesia requerida será la indicada por el anestesiólogo. Es posible que, durante o después de la intervención, sea
              necesaria la utilización de sangre y/o hemoderivados. También es necesario que advierta de posibles alergias medicamentosas,
              alteraciones de la coagulación, enfermedades cardiopulmonares, existencia de prótesis, marcapasos, medicaciones actuales o cualquier
              otro circunstancia.
            </p>
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">
              EN QUE CONSISTE LA ANTROSTOMIA MAXILAR O CALDWELL-LUC
            </p>
            <p class="text-justify q-pa-xs">
              Consiste en la apertura de uno o ambos senos maxilares a través de una incisión bajo el labio superior, en la encía, llegando al seno a
              través de una pequeña ventana abierta en el propio hueso. Puede permanecer durante 48 horas con uno o ambos orificios de la nariz
              taponados e incluso un tubo de drenaje que comunique el seno maxilar intervenido con la fosa nasal correspondiente.
            </p>
            <p class="text-justify q-pa-xs">
              También cabe la posibilidad de que durante la cirugía haya que realizar modificaciones del procedimiento por los hallazgos
              intraoperatorios para proporcionar un tratamiento más adecuado.
            </p>
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RIESGOS DE LA ANTROSTOMIA MAXILAR O CALDWELL-LUC</p>
            <p class="text-justify q-pa-xs">
              A pesor de la adecuada elección de la técnica y de su correcta realización, pueden presentarse efectos indeseables, tanto los comunes
              derivados de toda intervención y que pueden afectar a todos los órganos y sistemas, como los debidos a la situación vital del paciente
              (diabetes, cardiopatía, hipertensión, edad avanzada, anemia, obesidad...), y tos específicos del procedimiento:
            </p>
            <p class="text-justify q-pa-xs">
              Pesadez, dolor de cabeza y/o una pequeña hemorragia que, rara vez, es de cierta intensidad y requiere un nuevo taponamiento nasal.
            </p>
            <p class="text-justify q-pa-xs">Es infrecuente la infección local con aparición de síntomas inflamatorios.</p>
            <p class="text-justify q-pa-xs">Molestias en la mejilla, sabor a sangre, mal aliento y sequedqd de boca.</p>
            <p class="text-justify q-pa-xs">
              Dolor o adormecimiento en la mejilla e incluso falta de sensibilidad en los dientes superiores por lesión accidental del nervio
              infraorbitario.
            </p>
            <p class="text-justify q-pa-xs">
              Retraso en la cicatrización de la herida en la encía superior o incluso fístula oro-antral (comunicación de la boca con el seno maxilar.
            </p>
            <p class="text-justify q-pa-xs">Perforación del tabique nasal.</p>
            <p class="text-justify q-pa-xs">Sinequias -bridas entre las paredes de las fosas nasales-.</p>
            <p class="text-justify q-pa-xs">Atrofia de la fosa nasal con la aparición de costras nasales y alteraciones del olfato.</p>
            <p class="text-justify q-pa-xs">
              Es infrecuente la aparición de visión doble, inflamación o aparición de pequeñas burbujas de aire - enfisema- en párpados o resto de la
              cara, la protrusión del globo ocular e incluso, con carácter excepcional, la ceguera. Fístula de líquido cefalorraquídeo -pequeña fuga
              del líquido de la cavidad craneal-, neumoencéfalo o paso de aire al cerebro y/o meningitis inflamación de las meninges o envolturas
              cerebrales-.
            </p>
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
              intentar solucionaría.
            </p>
          </div>
          <div class="col-12">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RIESGOS PERSONALIZADOS</p>
            <TextArea_ v-model="HIC157.riesgo_personaliz" :field="form.riesgo_personaliz" class="col-12" />
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">QUE OTRAS ALTERNATIVAS HAY</p>
            <p class="text-justify q-pa-xs">
              La indicación quirúrgica suele establecerse ante el fracaso de los tratamientos médicos, la cronificación del proceso o la aparición de
              complicaciones. La punción del seno maxilar, con fin diagnóstico puede ser un procedimiento alternativo.
            </p>
            <p class="text-justify q-pa-xs">
              Si después de leer detenidamente este documento desea más información, por favor, no dude en preguntar al especialista responsable, que
              le atenderá con mucho gusto.
            </p>
          </div>
        </div>
        <div v-if="opcion_hic157 == 'AUTORIZAR'">
          <p class="text-center" style="margin-top: 10px; font-weight: bold; margin-left: 10px; text-decoration: underline">Consentimiento</p>
          <div class="row">
            <p class="text-justify">
              <!-- Autoriza paciente -->
              <span v-if="!getAcomp.cod" class="text-justify q-pa-xs">
                Yo, <span class="text-bold">{{ getPaci.descrip }}</span>
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
              doy mi consentimiento para que me sea realizada una
              <span class="text-bold">ANTROSTOMIA MAXILAR O CALDWELL-LUC.</span>
              Se me ha facilitado esto hoja informativa, habiendo comprendido el significado del procedimiento y los riesgos inherentes al mismo, y
              declaro estar debidamente informado/a, habiendo tenido oportunidad de aclarar mis dudas en entrevista personal con el Dr:
            </p>
            <Input_ v-model="HIC157.med_explica" :field="form.med_explica" :inputStyle="{ width: '700px' }" />
            <p class="text-justify q-pa-xs">
              Asi mismo, he recibido respuesta o todas mis preguntas, habiendo tomado la decisión de manera libre y voluntaria.
            </p>
          </div>
        </div>

        <div v-if="opcion_hic157 == 'REVOCAR'">
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
        <span class="text-bold">Villavicencio, {{ HIC157.fecha }}. </span>
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
        :disable="opcion_hic157 ? false : true"
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
import { impresionHIC157, impresion, generarArchivo } from "@/impresiones";
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

const HIC157 = reactive({
  fecha: "",
  med_explica: "",
  riesgo_personaliz: "",
});

const opcion_hic157 = ref(null);

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
  HIC157.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC157));
  // Lógica dual HIC / LAB
  let llave_paci;
  if (/[A-Za-z]/.test(getPaci.cod)) {
    llave_paci = getPaci.cod.padStart(15, " ");
  } else {
    llave_paci = getPaci.cod + "00000000";
  }
  const cod_hic = "HIC157";
  const cod_lab = "LAB077";
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic157.value == "AUTORIZAR" ? "1" : "2",
    llave_fact: getSesion.modulo == "HIC" ? "" : `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    oper_consen: getSesion.oper,
    llave_consen: getSesion.modulo == "HIC" ? getHc.llave : `${llave_paci}`,
    cod_med: getProf.cod,
    cod_consen: getSesion.modulo == "HIC" ? cod_hic : cod_lab,
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
    const datos_hic157 = {
      autorizo: opcion_hic157.value == "AUTORIZAR" ? true : false,
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
      ...HIC157,
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
      datos: { ...firmas, cod_consen: "HIC157" },
      content: impresionHIC157({
        datos: datos_hic157,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC157" },
      content: impresionHIC157({
        datos: datos_hic157,
      }),
    });

  let nomb_consen = getSesion.modulo == "HIC" ? "HIC-157" : "LAB-077";
  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}${nomb_consen}` });
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
