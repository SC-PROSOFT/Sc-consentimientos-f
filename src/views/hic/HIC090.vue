<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic090"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic090 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic090 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic090">
              {{ opcion_hic090 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <div class="row">
            <p style="font-weight: bold">Fecha:</p>
            <p>&nbsp;{{ HIC090.fecha }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">Hora:</p>
            <p>&nbsp;{{ HIC090.hora }}</p>
          </div>
        </div>

        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="q-pa-xs" style="text-align: justify">
              Yo <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }}</span
              >, Mayor de edad identificado con documento
              <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.tipo_id : getPaci.tipo_id }}</span>
              N°: <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.cod : getPaci.cod }}</span> de
              <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip_ciudad : getPaci.descrip_ciudad }}</span>
              actuando en nombre propio en pleno uso de mis facultades, libre y consciente, o como responsable del paciente
              <span class="text-bold">{{ reg_acudiente.cod ? getPaci.descrip : "N/A" }} </span> identificado con
              <span class="text-bold">{{ reg_acudiente.cod ? getPaci.tipo_id : "N/A" }}</span> No.
              <span class="text-bold">{{ reg_acudiente.cod ? getPaci.cod : "N/A." }}</span> declaro que:
            </p>
            <p class="q-pa-xs" style="text-align: justify">
              Se me ha explicado claramente el estado actual de salud como paciente y la necesidad de referirme a otra institución de mayor
              complejidad, donde se cuente con los recursos técnico-científicos y profesionales especializados para el manejo de mi condición.
            </p>
            <p class="q-pa-xs" style="text-align: justify">
              Me han informado que luego de realizar el trámite de la remisión por el conducto regular no ha sido posible la aceptación, por lo cual
              el médico:
            </p>
            <Input_ v-model="HIC090.medico_informa" :field="form.medico_informa" />
            <p class="q-pa-xs" style="text-align: justify">ha tomado la decisión de iniciar el traslado sin confirmar las indicaciones:</p>
            <TextArea_ v-model="HIC090.indicaciones" :field="form.indicaciones" />
            <p class="q-pa-xs" style="text-align: justify">También me han informado:</p>
            <ul>
              <li>
                <p class="q-pa-xs" style="text-align: justify">
                  Que la aceptación o negación de la remisión en otra Institución es decisión de la IPS de mayor complejidad, EPS del paciente y está
                  condicionada a la disponibilidad de recursos, especialistas o situaciones administrativas.
                </p>
              </li>
              <li>
                <p class="q-pa-xs" style="text-align: justify">
                  Que en todo traslado se pueden presentar complicaciones durante el recorrido ya sea por los riesgos que esto implica o por la
                  condición de salud del paciente que pueden terminar con la muerte del mismo.
                </p>
              </li>
              <li>
                <p class="q-pa-xs" style="text-align: justify">
                  Que la ambulancia en la que se realizará el traslado cuenta con el personal y los equipos necesarios para asegurar la atención
                  durante el mismo, pero se entiende que pueden existir eventualidades imposibles de atender dentro de un vehículo.
                </p>
              </li>
              <li>
                <p class="q-pa-xs" style="text-align: justify">
                  Que se llegara a la institución de mayor complejidad con el paciente, sujeto a ser o no aceptado en otras instituciones.
                </p>
              </li>
            </ul>
            <p class="q-pa-xs" style="text-align: justify">
              Manifiesto que entendí la información recibida y que comprendo los riesgos del traslado y en tales condiciones acepto que se realice el
              mismo a otra institución de mayor complejidad, con el fin de hacer lo posible por salvaguardar la vida, aunque no haya sido admitido
              durante el trámite realizado.
            </p>
          </div>
        </div>

        <div>
          <div class="row q-mt-md q-mb-md" style="width: 100%">
            <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
              <p class="q-pa-xs" style="font-weight: bold; margin-top: 10px">
                Entiendo que en cualquier momento y sin necesidad de dar explicaciones puedo revocar este consentimiento.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div v-if="opcion_hic090 == 'REVOCAR'">
            <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
              <p style="text-align: center; font-weight: bold">DILIGENCIAR ESTE ESPACIO EN CASO DE REVOCACIÓN O DISENTIMIENTO</p>
              <p class="q-pa-xs" style="text-align: justify">
                Yo, <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }},</span> después de ser informado de la
                situación, manifiesto NO ESTAR DE ACUERDO y NO AUTORIZAR el traslado en ambulancia a otra institución a nivel nacional y asumo las
                consecuencias eximiendo con ello a la institución tratante.
              </p>
            </div>
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
          :tipo_doc="getAcomp.cod ? getAcomp.tipo_id : getPaci.tipo_id"
          @reciFirma="callBackFirma"
          class="col-4"
        />
        <ContainerFirma
          quien_firma="FIRMA TESTIGO"
          :firmador="getTestigo.descrip"
          :registro_profe="getTestigo.cod"
          @reciFirma="callBackFirmaTest"
          :codigo_firma="getTestigo.cod"
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
        :disable="opcion_hic090 ? false : true"
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
import { impresionHIC090, impresion, generarArchivo } from "@/impresiones";
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
const firma_recibida_test = ref("");
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const reg_acudiente = ref(getAcomp.cod ? getAcomp : {});
const HIC090 = reactive({
  fecha: "",
  hora: "",
  anestesia_local: "",
  medico_informa: "",
  indicaciones: "",
  canaliz_inyect: "N",
  curacion: "N",
  sutura: "N",
  inserc_retiro: "N",
  administ_medicam: "N",
  intubac_orotraq: "N",
  extraer_cuerpo: "N",
  autor_anestes_local: "",
});
const form = ref({
  medico_informa: {
    id: "medico_informa",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
  indicaciones: {
    id: "indicaciones",
    maxlength: "300",
    label: "",
    rows: 3,
    campo_abierto: true,
  },
});
const opcion_hic090 = ref(null);
onMounted(() => {
  HIC090.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC090.hora = dayjs().format("HH:mm");
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
  const datos_format = JSON.parse(JSON.stringify(HIC090));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic090.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC090",
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
    const datos_hic090 = {
      autorizo: opcion_hic090.value == "AUTORIZAR" ? true : false,
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
      ...HIC090,
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
      datos: { ...firmas, cod_consen: "HIC090" },
      content: impresionHIC090({
        datos: datos_hic090,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC090" },
      content: impresionHIC090({
        datos: datos_hic090,
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
