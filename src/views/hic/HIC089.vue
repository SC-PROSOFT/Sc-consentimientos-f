<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic089"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic089 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic089 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic089">
              {{ opcion_hic089 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <div class="row">
            <p style="font-weight: bold">Fecha:</p>
            <p>&nbsp;{{ HIC089.fecha }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">Hora:</p>
            <p>&nbsp;{{ HIC089.hora }}</p>
          </div>
        </div>

        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
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
              Otorgo mi consentimiento para que sea practicado el procedimiento: (marque con un ✓ el/los procedimiento(s) que le van a realizar
              mencionados en el cuadro 1.) del cual se me brinda información y se me han explicado tanto la necesidad de hacerlo como los riesgos del
              mismo.
            </p>
          </div>
        </div>

        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p class="q-pa-xs" style="text-align: justify">
              El procedimiento anteriormente descrito requiere anestesia local?
              <q-radio color="primary" v-model="HIC089.anestesia_local" val="S" label="SI" />
              <q-radio color="primary" v-model="HIC089.anestesia_local" val="N" label="NO" />
            </p>
            <p class="q-pa-xs" style="text-align: justify">
              Autorizo la aplicación de anestesia local, en el momento que se requiera?
              <q-radio color="primary" v-model="HIC089.autor_anestes_local" val="S" label="SI" />
              <q-radio color="primary" v-model="HIC089.autor_anestes_local" val="N" label="NO" />
            </p>
          </div>
        </div>
        <p style="font-weight: bold">Cuadro 1.</p>
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p class="q-pa-xs" style="text-align: center; font-weight: bold">PROCEDIMIENTO</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p class="q-pa-xs" style="text-align: center; font-weight: bold">Maque con un ✓ el procedimiento</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 60%">
            <p class="q-pa-xs" style="text-align: center; font-weight: bold">RIESGOS:</p>
          </div>

          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p class="q-pa-xs" style="text-align: justify; font-weight: bold">Canalización o Inyectología</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-checkbox class="q-pa-xs" color="primary" keep-color left-label v-model="HIC089.canaliz_inyect" true-value="S" false-value="N" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 60%">
            <p class="q-pa-xs" style="text-align: justify">Dolor, infiltración por extravasación en la piel, hematomas, flebitis, Infección.</p>
          </div>
          <!--  -->
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p class="q-pa-xs" style="text-align: justify; font-weight: bold">Curaciones</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-checkbox class="q-pa-xs" color="primary" keep-color left-label v-model="HIC089.curacion" true-value="S" false-value="N" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 60%">
            <p class="q-pa-xs" style="text-align: justify">
              Dolor, Hemorragia, Pérdida de tejido, Infección, Apertura de herida, Hipersensibilidad del área, cicatrices.
            </p>
          </div>
          <!--  -->
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p class="q-pa-xs" style="text-align: justify; font-weight: bold">Suturas</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-checkbox class="q-pa-xs" color="primary" keep-color left-label v-model="HIC089.sutura" true-value="S" false-value="N" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 60%">
            <p class="q-pa-xs" style="text-align: justify">Dolor, inflamación, infección.</p>
          </div>
          <!--  -->
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p class="q-pa-xs" style="text-align: justify; font-weight: bold">Inserción y retiro de sondas vesical, orogástrica, nasogástrica</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-checkbox class="q-pa-xs" color="primary" keep-color left-label v-model="HIC089.inserc_retiro" true-value="S" false-value="N" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 60%">
            <p class="q-pa-xs" style="text-align: justify">Desgarro y/o ruptura de órgano implicado, hemorragia, edema o inflamación, dolor.</p>
          </div>
          <!--  -->
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p class="q-pa-xs" style="text-align: justify; font-weight: bold">Administración de medicamentos</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-checkbox class="q-pa-xs" color="primary" keep-color left-label v-model="HIC089.administ_medicam" true-value="S" false-value="N" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 60%">
            <p class="q-pa-xs" style="text-align: justify">Reacciones adversas.</p>
          </div>
          <!--  -->
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p class="q-pa-xs" style="text-align: justify; font-weight: bold">Intubación orotraqueal</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-checkbox class="q-pa-xs" color="primary" keep-color left-label v-model="HIC089.intubac_orotraq" true-value="S" false-value="N" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 60%">
            <p class="q-pa-xs" style="text-align: justify">Hemorragia, aerofagia, broncoaspiración, muerte.</p>
          </div>
          <!--  -->
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p class="q-pa-xs" style="text-align: justify; font-weight: bold">Extracción de cuerpo extraño</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-checkbox class="q-pa-xs" color="primary" keep-color left-label v-model="HIC089.extraer_cuerpo" true-value="S" false-value="N" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 60%">
            <p class="q-pa-xs" style="text-align: justify">Lesiones del tejido en el lugar de ubicación del cuerpo extraño, sangrado.</p>
          </div>
        </div>

        <div>
          <div class="row q-mt-md q-mb-md" style="width: 100%">
            <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
              <p class="q-pa-xs" style="font-weight: bold; margin-top: 10px">
                Certifico que se me ha explicado el procedimiento y entiendo sus posibles riesgos y complicaciones También me han explicado los
                cuidados que debo tener posteriormente al egreso.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div v-if="opcion_hic089 == 'REVOCAR'">
            <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
              <p style="text-align: center; font-weight: bold">DILIGENCIAR ESTE ESPACIO EN CASO DE REVOCACIÓN O DISENTIMIENTO</p>
              <p class="q-pa-xs" style="text-align: justify">
                Yo, <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }},</span> después de ser informado de la
                naturaleza y riesgos del procedimiento propuesto, manifiesto de forma libre y consciente mi negación/ revocación para su realización,
                haciéndome responsable de las consecuencias que se puedan derivar de ésta decisión.
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
        :disable="opcion_hic089 ? false : true"
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
import { impresionHIC089, impresion, generarArchivo } from "@/impresiones";
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
const HIC089 = reactive({
  fecha: "",
  hora: "",
  anestesia_local: "",
  autor_anestes_local: "",
  canaliz_inyect: "N",
  curacion: "N",
  sutura: "N",
  inserc_retiro: "N",
  administ_medicam: "N",
  intubac_orotraq: "N",
  extraer_cuerpo: "N",
});

const opcion_hic089 = ref(null);
onMounted(() => {
  HIC089.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC089.hora = dayjs().format("HH:mm");
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
  const datos_format = JSON.parse(JSON.stringify(HIC089));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic089.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC089",
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
    const datos_hic089 = {
      autorizo: opcion_hic089.value == "AUTORIZAR" ? true : false,
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
      ...HIC089,
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
      datos: { ...firmas, cod_consen: "HIC089" },
      content: impresionHIC089({
        datos: datos_hic089,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC089" },
      content: impresionHIC089({
        datos: datos_hic089,
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
