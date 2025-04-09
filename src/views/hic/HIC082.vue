<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic082"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic082 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic082 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic082">
              {{ opcion_hic082 }}
            </q-chip>
          </p>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Nombre del paciente</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">{{ getPaci.descrip }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Tipo y número de documento</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.tipo_id }}</p>
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.cod }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Dirección</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.direccion }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Teléfono</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.telefono }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Fecha</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ HIC082.fecha }}</p>
          </div>
        </div>
        <p style="text-align: justify">
          El DUI es un pequeño elemento que se coloca en el útero de la mujer y actúa creando condiciones que le impiden a los espermatozoides
          fecundar el óvulo. La T de cobre o dispositivo intrauterino DIU, tiene una duración de hasta 12 años y un 98 % de eficacia.
        </p>
        <p style="text-align: left; font-weight: bold">DECLARACIÓN DEL PACIENTE</p>
        <p style="text-align: justify">
          Me han explicado los pasos del procedimiento de inserción de retiro, así como las posibles complicaciones del mismo dadas por difícil
          extracción, sangrado, infección de la herida, así como los posibles cambios físicos, después del procedimiento dado por hematoma,
          perilesional y pequeña cicatriz.
        </p>
        <p style="text-align: justify">Doy mi consentimiento para que se me realice el procedimiento descrito arriba.</p>
        <p style="text-align: left; font-weight: bold">DECLARACIONES</p>
        <p style="text-align: justify">
          Funcionario responsable: <span class="text-bold">{{ getProf.descrip }}</span>
          He informado al paciente del propósito y naturaleza del procedimiento descrito arriba.
        </p>
        <div v-if="getAcomp.cod.trim() != ''">
          <p style="text-align: center; font-weight: bold">ESPACIO PARA PACIENTES CON DISCAPACIDAD</p>
          <p style="text-align: justify">
            Sé que el paciente <span class="text-bold">{{ getPaci.descrip }},</span> ha sido considerado por ahora incapaz de tomar por sí mismo la
            decisión de aceptar o rechazar el procedimiento descrito arriba. La funcionaria me ha explicado los riesgos y complicaciones. He
            comprendido todo lo anterior perfectamente y por ello: YO, <span class="text-bold">{{ getAcomp.descrip }}</span
            >, con documento de identidad <span class="text-bold">{{ getAcomp.tipo_id }}</span> No. <span class="text-bold">{{ getAcomp.cod }}</span
            >, doy mi consentimiento para que la profesional, <span class="text-bold">{{ getProf.descrip }}</span> realice este procedimiento. Puedo
            revocar este consentimiento cuando en bien del paciente se presuma oportuno.
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
        :disable="opcion_hic082 ? false : true"
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
import { impresionHIC082, impresion, generarArchivo } from "@/impresiones";
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

const HIC082 = reactive({
  fecha: "",
});

const opcion_hic082 = ref(null);

onMounted(() => {
  HIC082.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC082));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic082.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC082",
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
    const datos_hic082 = {
      autorizo: opcion_hic082.value == "AUTORIZAR" ? true : false,
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
      ...HIC082,
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
      datos: { ...firmas, cod_consen: "HIC082" },
      content: impresionHIC082({
        datos: datos_hic082,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC082" },
      content: impresionHIC082({
        datos: datos_hic082,
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
