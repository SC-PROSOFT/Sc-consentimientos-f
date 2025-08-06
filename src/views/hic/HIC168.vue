<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic168"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic168 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic168 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic168">
              {{ opcion_hic168 }}
            </q-chip>
          </p>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">INFORMACIÓN GENERAL</p>
            <p class="text-justify q-pa-xs">
              En algunos casos y dependiendo del tamaño de la ránula pueden precisar sutura y/o reconstrucción con procedimientos denominados Z
              plastia, usualmente la técnica quirúrgica consiste en marzupializar la ránula.
            </p>
            <p class="text-justify q-pa-xs">
              El tipo de anestesia requerida será la indicada por el anestesiólogo. Es necesario que advierta de posibles alergias medicamentosas,
              alteraciones de la coagulación, enfermedades cardiopulmonares, existencia de prótesis, marcapasos, medicaciones actuales o cualquier
              otra circunstancia.
            </p>
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">EN QUE CONSISTE LA RESECCION DE RANULA</p>
            <p class="text-justify q-pa-xs">
              La intervención se realiza sobre la lesión localizada en el pis anterior de la cavidad oral. La marzupializacion de la ránula permite
              drenar y mantener permeable el ducto salivar para controlar la acumulación de saliva.
            </p>
            <p class="text-justify q-pa-xs">
              También cabe la posibilidad de que durante la cirugía haya que realizar modificaciones del procedimiento por los hallazgos
              intraoperatorios para proporcionar un tratamiento más adecuado.
            </p>
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RIESGOS DE LA RESECCION DE LA RANULA</p>
            <p class="text-justify q-pa-xs">
              A pesar de la adecuada elección de la técnica y de su correcta realización, pueden presentarse efectos indeseables, tanto los comunes
              derivados de toda intervención y que pueden afectar a todos los órganos y sistemas, como los debidos a la situación vital del paciente
              (diabetes, cardiopatía, hipertensión, edad avanzada, anemia, obesidad...), y los específicos del procedimiento:
            </p>
            <ul class="text-justify">
              <li>
                <p class="text-justify q-pa-xs">Lesiones en boca, lengua y/o dientes por la utilización de instrumentos de apertura bucal.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Escaras hemorrágicas en la zona de la cirugía.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Dolor con la deglución que cede con analgesia.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Dehiscencia de suturas.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Sobreinfección local.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Resultados inestéticos.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Alteración de la deglución y/o el habla.</p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">Recidiva de la lesión.</p>
              </li>
            </ul>
            <p class="text-justify q-pa-xs">
              Estas complicaciones habitualmente se resuelven con tratamiento médico (medicamentos, sueros, etc.) pero pueden llegar a requerir una re
              intervención, en algunos casos de urgencia.
            </p>
            <p class="text-justify q-pa-xs">
              Ningún procedimiento quirúrgico está absolutamente exento de riesgos importantes, incluyendo el de mortalidad, si bien esta posibilidad
              es bastante infrecuente.
            </p>
            <p class="text-justify q-pa-xs">
              De cualquier forma, si ocurriera una complicación, debe saber que todos los medios técnicos de este Centro están disponibles para
              intentar solucionarla.
            </p>
          </div>
          <div class="col-12">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RIESGOS PERSONALIZADOS</p>
            <TextArea_ v-model="HIC168.riesgo_personaliz" :field="form.riesgo_personaliz" class="col-12" />
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">QUE OTRAS ALTERNATIVAS HAY</p>
            <p class="text-justify q-pa-xs">
              La única alternativa es la abstención terapéutica. Si después de leer detenidamente este documento desea más información, por favor, no
              dude en preguntar al especialista responsable, que le atenderá con mucho gusto.
            </p>
          </div>
        </div>
        <div v-if="opcion_hic168 == 'AUTORIZAR'">
          <p class="text-center" style="margin-top: 10px; font-weight: bold; margin-left: 10px; text-decoration: underline">Consentimiento</p>
          <div>
            <p class="text-justify q-pa-xs">
              Yo, <span class="text-bold">{{ getPaci.descrip }}</span
              >, identificad@ con numero de Historia Clínica No
              <span class="text-bold">{{ getHc.llave }}</span>

              doy mi consentimiento para que me sea realizada una
              <span class="text-bold">RESECCION DE RANULA. </span>
            </p>
            <p class="text-justify q-pa-xs">
              Se me ha facilitado esto hoja informativa, habiendo comprendido el significado del procedimiento y los riesgos inherentes al mismo, y
              declaro estar debidamente informado/a, habiendo tenido oportunidad de aclarar mis dudas en entrevista personal con el Dr:
            </p>
            <Input_ v-model="HIC168.med_explica" :field="form.med_explica" :inputStyle="{ width: '700px' }" />
            <p class="text-justify q-pa-xs">
              a si mismo, he recibido respuesta o todas mis preguntas, habiendo tomado la decisión de manera libre y voluntaria.
            </p>
          </div>
        </div>

        <div v-if="opcion_hic168 == 'REVOCAR'">
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
        <span class="text-bold">Villavicencio, {{ HIC168.fecha }}. </span>
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
        :disable="opcion_hic168 ? false : true"
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
import { impresionHIC168, impresion, generarArchivo } from "@/impresiones";
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

const HIC168 = reactive({
  fecha: "",
  med_explica: "",
  timpano: "",
  riesgo_personaliz: "",
});

const opcion_hic168 = ref(null);

const form = ref({
  med_explica: {
    id: "med_explica",
    maxlength: "150",
    label: "",
    placeholder: "Nombre del profesional",
    campo_abierto: true,
  },
  timpano: {
    id: "timpano",
    maxlength: "100",
    label: "",
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
  HIC168.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC168));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic168.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC168",
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
    const datos_hic168 = {
      autorizo: opcion_hic168.value == "AUTORIZAR" ? true : false,
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
      ...HIC168,
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
      datos: { ...firmas, cod_consen: "HIC168" },
      content: impresionHIC168({
        datos: datos_hic168,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC168" },
      content: impresionHIC168({
        datos: datos_hic168,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-168` });
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
