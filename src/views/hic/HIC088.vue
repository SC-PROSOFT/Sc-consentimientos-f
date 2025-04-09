<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic088"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic088 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic088 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic088">
              {{ opcion_hic088 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <div class="row">
            <p style="font-weight: bold">Fecha:</p>
            <p>&nbsp;{{ HIC088.fecha }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">Hora:</p>
            <p>&nbsp;{{ HIC088.hora }}</p>
          </div>
        </div>

        <div>
          <p style="text-align: justify">
            Yo <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }}</span
            >, Mayor de edad identificado con documento
            <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.tipo_id : getPaci.tipo_id }}</span>
            N°: <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.cod : getPaci.cod }}</span> de
            <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip_ciudad : getPaci.descrip_ciudad }}</span>
            actuando en nombre propio en pleno uso de mis facultades, libre y consciente, o como responsable del menor
            <span class="text-bold">{{ reg_acudiente.cod ? getPaci.descrip : "N/A" }} </span> identificado con
            <span class="text-bold">{{ reg_acudiente.cod ? getPaci.tipo_id : "N/A" }}</span> No.
            <span class="text-bold">{{ reg_acudiente.cod ? getPaci.cod : "N/A." }}</span> declaro que:
          </p>
          <ol>
            <li>
              <p style="text-align: justify">
                Otorgo mi consentimiento para el ingreso al servicio de hospitalización de acuerdo a los diagnósticos y plan de tratamiento, por orden
                del médico:
              </p>
              <Input_ v-model="HIC088.medic_orden" :field="form.medic_orden" />
            </li>
            <li>
              <p style="text-align: justify">
                Acepto los servicios adicionales que requiera dentro de la estancia hospitalaria como canalización, estudios de laboratorios,
                radiográficos, así como la administración de medicamentos.
              </p>
            </li>
            <li>
              <p style="text-align: justify">
                Certifico que me han explicado las NORMAS DE LA INSTUCION PARA PACIENTES HOSPITALIZADOS, los horarios de visita y las restricciones.
              </p>
            </li>
            <li>
              <p style="text-align: justify">
                Acepto el ingreso al servicio de hospitalización y entiendo que hay riesgos como las caídas, por lo cual se deben mantener arriba las
                barandas de las camas.
              </p>
            </li>
          </ol>
        </div>

        <div v-if="opcion_hic088 == 'REVOCAR'">
          <p style="text-align: center; font-weight: bold">DILIGENCIAR EN CASO DE REVOCACIÓN O DISENTIMIENTO</p>
          <p style="text-align: justify">
            Yo, <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }},</span> después de ser informado de la
            necesidad de hospitalización, manifiesto de forma libre y consciente mi negación/ revocación para su realización, haciéndome responsable
            de las consecuencias que se puedan derivar de ésta decisión.
          </p>
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
        :disable="opcion_hic088 ? false : true"
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
import { impresionHIC088, impresion, generarArchivo } from "@/impresiones";
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
const HIC088 = reactive({
  fecha: "",
  hora: "",
  medic_orden: "",
});
const form = ref({
  medic_orden: {
    id: "medic_orden",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
});

const opcion_hic088 = ref(null);

onMounted(() => {
  HIC088.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC088.hora = dayjs().format("HH:mm");
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
  const datos_format = JSON.parse(JSON.stringify(HIC088));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic088.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC088",
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
    const datos_hic069 = {
      autorizo: opcion_hic088.value == "AUTORIZAR" ? true : false,
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
      ...HIC088,
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
      datos: { ...firmas, cod_consen: "HIC088" },
      content: impresionHIC088({
        datos: datos_hic069,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC088" },
      content: impresionHIC088({
        datos: datos_hic069,
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
