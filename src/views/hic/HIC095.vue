<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic095"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic095 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic095 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic095">
              {{ opcion_hic095 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <div class="row">
            <p style="font-weight: bold">Fecha:</p>
            <p>&nbsp;{{ HIC095.fecha }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">Hora:</p>
            <p>&nbsp;{{ HIC095.hora }}</p>
          </div>
        </div>

        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div style="width: 100%">
            <p class="q-pa-xs" style="text-align: justify">
              Yo <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }}</span
              >, identificado con documento
              <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.tipo_id : getPaci.tipo_id }}</span>
              N°: <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.cod : getPaci.cod }}</span> mayor de edad y / o responsable del
              paciente <span class="text-bold">{{ reg_acudiente.cod ? getPaci.descrip : "N/A" }} </span> identificado con
              <span class="text-bold">{{ reg_acudiente.cod ? getPaci.tipo_id : "N/A" }}</span> No.
              <span class="text-bold">{{ reg_acudiente.cod ? getPaci.cod : "N/A." }}</span> de
              <span class="text-bold">{{ reg_acudiente.cod ? getPaci.descrip_ciudad : "N/A." }}</span> actuando en nombre propio en pleno uso de mis
              facultades, libre y consciente declaro:
            </p>
            <p class="q-pa-xs" style="text-align: justify">
              Que por mi propia voluntad y pleno conocimiento de riesgos y complicaciones explicadas por el personal médico, he decidido solicitar el
              retiro voluntario, eximiendo de toda responsabilidad a esta institución y al personal que en ella labora, por las consecuencias que
              pudieran sobrevenir por mi determinación.
            </p>
            <div class="row justify-between items-center">
              <div class="row">
                <p class="text-left text-bold q-mt-xs">Fecha de ingreso a urgencias:</p>
                <Input_ v-model="HIC095.fecha_ingr_urg" :field="form.fecha_ingr_urg" style="margin-top: 3px" />
              </div>
              <div class="row">
                <p class="text-left text-bold q-mt-xs">Hora de ingreso a urgencias:</p>
                <Input_ v-model="HIC095.hora_ingr_urg" :field="form.hora_ingr_urg" style="margin-top: 3px" />
              </div>
            </div>
            <p class="q-mt-md" style="text-align: justify">
              <span class="text-bold">DIAGNOSTICO DE INGRESO </span>

              <Input_
                style="min-width: 100px; display: inline-block"
                @validate="datoCodigoEnfermedad"
                v-model="HIC095.diagnostico"
                :field="form.codigo"
              />
              <q-input dense disable type="text" maxlength="4" v-model="descrip_diagnostico" style="min-width: 300px; display: inline-block" />
            </p>
            <p class="q-mt-md" style="text-align: justify">Motivo del retiro</p>
            <TextArea_ v-model="HIC095.motiv_retiro" :field="form.motiv_retiro" />
            <p class="q-mt-md" style="text-align: justify">Observaciones</p>
            <TextArea_ v-model="HIC095.observac" :field="form.observac" />
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
        :disable="opcion_hic095 ? false : true"
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
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { impresionHIC095, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const CONSEN800 = defineAsyncComponent(() => import("@/components/consen/CONSEN800.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion, getTestigo } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const show_consen800 = ref(false);
const firma_recibida_test = ref("");
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const reg_acudiente = ref(getAcomp.cod ? getAcomp : {});
const descrip_diagnostico = ref("");
const HIC095 = reactive({
  fecha: "",
  hora: "",
  fecha_ingr_urg: "",
  hora_ingr_urg: "",
  diagnostico: "",
  motiv_retiro: "",
  observac: "",
});
const form = ref({
  fecha_ingr_urg: {
    id: "fecha_ingr_urg",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  hora_ingr_urg: {
    id: "hora_ingr_urg",
    maxlength: "10",
    label: "",
    tipo: "time",
    campo_abierto: true,
  },
  codigo: {
    id: "codigo",
    label: "",
    maxlength: "4",
    f0: ["f8"],
    standout: "N",
    outlined: "N",
    required: true,
    campo_abierto: true,
  },
  motiv_retiro: {
    id: "motiv_retiro",
    maxlength: "500",
    label: "",
    rows: 4,
    campo_abierto: true,
  },
  observac: {
    id: "observac",
    maxlength: "500",
    label: "",
    rows: 4,
    campo_abierto: true,
  },
});

const opcion_hic095 = ref(null);
onMounted(() => {
  HIC095.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC095.hora = dayjs().format("HH:mm");
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
const datoCodigoEnfermedad = async (event) => {
  switch (event) {
    case "f8":
      show_consen800.value = true;
      break;
    case "enter":
      consultarEnfermedad();
      break;
  }
};

const consultarEnfermedad = async () => {
  try {
    const response = await getDll$({
      modulo: `get_enf.dll`,
      data: { llave: "2" + HIC095.diagnostico },
    });
    if (response.llave) {
      descrip_diagnostico.value = response.nombre;
      return;
    }
    return CON851("?", "info", "No existe diagnostico");
  } catch (error) {
    CON851("?", "info", error);
  }
};
const validarDatos = () => {
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC095));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic095.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC095",
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
    const datos_hic095 = {
      autorizo: opcion_hic095.value == "AUTORIZAR" ? true : false,
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
      ...HIC095,
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
      datos: { ...firmas, cod_consen: "HIC095" },
      content: impresionHIC095({
        datos: datos_hic095,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC095" },
      content: impresionHIC095({
        datos: datos_hic095,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};
const callbackCONSEN800 = (data) => {
  if (data) {
    HIC095.diagnostico = data.cod;
    descrip_diagnostico.value = data.descrip;
  }
  show_consen800.value = false;
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
