<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic081"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic081 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic081 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic081">
              {{ opcion_hic081 }}
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
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ HIC081.fecha }}</p>
          </div>
        </div>
        <p style="text-align: justify">
          El implante subdérmico es un método hormonal temporal de planificación familiar de uso a un tiempo de 4 a 5 años, puede y debe ser retirado
          al terminar el periodo del uso del mismo o por causas médicas que afecten la salud de la paciente.
        </p>
        <p style="text-align: left; font-weight: bold">DECLARACIÓN DEL PACIENTE</p>

        <p style="text-align: justify">
          <i style="font-weight: bold">
            Me ha explicado claramente todo lo relacionado con los métodos anticonceptivos a los que puedo acceder, incluido el implante Subdérmico
            Levonorgestrel, este consiste en la colocación de 2 implantes debajo de la piel en la cara interna del brazo no dominante, mediante
            anestesia local, la cual puede ser dolorosa. La eficacia anticonceptiva de los implantes es muy alta (99,95%) y su duración es de 5 años,
            tiempo durante el cual no será removido. Las complicaciones que pueden aparecer en la zona de los implantes en el momento de la inserción
            o extracción de los mismos son:
          </i>
        </p>

        <ul>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Hematoma y/o hemorragia </i>
            </p>
          </li>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Dolor intenso en el brazo </i>
            </p>
          </li>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Infección </i>
            </p>
          </li>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Alergias al anestésico local </i>
            </p>
          </li>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Fibrosis </i>
            </p>
          </li>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Pequeña cicatriz </i>
            </p>
          </li>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Cicatriz queloide </i>
            </p>
          </li>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Difícil extracción </i>
            </p>
          </li>
        </ul>

        <p style="text-align: justify">
          <i style="font-weight: bold"> Los efectos secundarios de los implantes pueden ser: </i>
        </p>
        <ul>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Irregularidad del sangrado menstrual </i>
            </p>
          </li>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Cambios en el peso </i>
            </p>
          </li>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Cambios en el estado de animo </i>
            </p>
          </li>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Aparición de acné </i>
            </p>
          </li>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Aumento de flujo vaginal </i>
            </p>
          </li>
          <li>
            <p style="text-align: justify">
              <i style="font-weight: bold"> Dolor de cabeza</i>
            </p>
          </li>
        </ul>
        <p style="text-align: justify">Doy mi consentimiento para que se me realice Inserción o Extracción de:</p>
        <p style="text-align: justify; font-weight: bold; text-decoration: underline">IMPLANTE SUBDERMICO.</p>
        <p style="text-align: justify">
          Me comprometo a seguir las indicaciones del profesional después de la inserción o extracción de los implantes como: cuidados de la herida,
          no realización de labores que impliquen uso de la fuerza en el brazo correspondiente, asistir a control al mes y asistir a consulta
          preconcepcional o continuar controles de Planificación Familiar.
        </p>
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
        :disable="opcion_hic081 ? false : true"
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
import { impresionHIC081, impresion, generarArchivo } from "@/impresiones";
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

const HIC081 = reactive({
  fecha: "",
});

const opcion_hic081 = ref(null);

onMounted(() => {
  HIC081.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC081));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic081.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC081",
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
    const datos_hic081 = {
      autorizo: opcion_hic081.value == "AUTORIZAR" ? true : false,
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
      },
      ...HIC081,
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
      datos: { ...firmas, cod_consen: "HIC081" },
      content: impresionHIC081({
        datos: datos_hic081,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC081" },
      content: impresionHIC081({
        datos: datos_hic081,
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
