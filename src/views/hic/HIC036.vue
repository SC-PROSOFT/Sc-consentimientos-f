<template>
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc036"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc036 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="opcion_hc036 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="opcion_hc036"
            >
              {{ opcion_hc036 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p>Yo,</p>
          <q-input v-model="getPaci.descrip" disable type="text" dense class="col-4" />
          <p>identificado(a) con CC</p>
          <!-- <q-input v-model="getPaci.cod" disable type="text" dense class="col-2" /> -->
          <p>N°</p>
          <q-input v-model="getPaci.cod" disable type="text" dense class="col-2" />
          <p>, mayor de edad o representante</p>
          <p style="margin-top: -5px">
            legal, autorizo y me comprometo a ingresar a la modalidad de tratamiento de tuberculosis denominada TDO Virtual, mediante el uso de
            tecnologías de la información y comunicaciones como soporte a la administración del tratamiento
            antituberculoso, para lo cual se me ha informado, los aspectos claves de adherencia al
            tratamiento, los derechos y deberes y he dado lectura cuidadosa a los siguientes aspectos:
          </p>
        </div>
        <div class="q-mt-md row">
          <span style="font-weight: bold">¿Qué es la modalidad de tratamiento TDO virtual?</span>
        </div>
        <div class="row">
          Acorde a la Resolución 227 de 2020, el TDO virtual es una modalidad utilizada para el tratamiento de
          la tuberculosis, la cual consiste en el monitoreo y seguimiento continuo de la administración del
          tratamiento mediante el uso de tecnologías de información y comunicaciones, tales como video
          llamadas, registro de video, mensajes de texto, previa evaluación realizada por parte del trabajador
          de la salud.
        </div>
        <div class="q-mt-md row">
          <span style="font-weight: bold">¿Cuáles son los requisitos para acceso a esta modalidad?</span>
        </div>
        <div class="row">
          <p>
            Se me ha informado que para acceder a esta modalidad de tratamiento, debo contar con acceso a
            tecnologías de información y comunicaciones tales como internet, teléfono inteligente o
            computador, con acceso a internet video llamadas, videos cortos diferidos, y mensajería de texto
            SMS. Así mismo, hago constar que tengo disponibilidad de tiempo diario, para que el equipo de
            salud pueda constatar la toma de la medicación. La administración del tratamiento con supervisión
            virtual parte de los principios de autonomía, autocuidado, y responsabilidad en la toma sin
            interrupciones de los medicamentos, el cumplimiento a citas presenciales o virtuales de control y
            demás consideraciones brindadas por el equipo de salud tratante.
          </p>
        </div>
        <div class="q-mt-md row">
          <span style="font-weight: bold">¿Cuáles son los beneficios de acceso a esta modalidad?</span>
        </div>
        <div class="row">
          <p>
            Él acceso al TDO virtual trae beneficios relacionados con la disminución de tiempos de
            desplazamiento diarios a la toma de tratamiento en la IPS, reducción de costos económicos,
            facilidad y comodidad de toma en su lugar de trabajo, estudio, hogar.
          </p>
        </div>
        <div class="q-mt-md row">
          <span style="font-weight: bold"
            >¿Cuáles son los riesgos o aspectos por los cuales debo consultar?</span
          >
        </div>
        <div class="row">
          <p>
            Para el ingreso a esta modalidad, el personal de salud le informara los aspectos relacionados a la
            toma de medicamentos, dosificación, reacciones adversas a fármacos y signos de peligro. La
            modalidad de TDO implica informar al trabajador de la salud cualquier signo de alarma tales como;
            rasquiña, picor en la piel, nauseas, vómito, mareo, coloración amarilla de la piel. No deberá
            suspender el medicamento bajo ninguna circunstancia sin indicación médica, no disminuir o a dosis
            de medicamento, dado a que puede ocasionar una resistencia de la bacteria a derivar en una
            complicación de su estado de salud.
          </p>
        </div>
        <div class="row">
          <p>
            Se me ha informado que los datos de identificación, registros de videos, mensajes de texto serán
            almacenados para fines de soportar el cumplimiento a la toma de medicación hasta por dos años,
            para lo cual, se protegerán mis datos personales conforme a la política de protección de datos y
            seguridad en la información.
          </p>
        </div>
        <div class="row">
          <p>En constancia firma,</p>
        </div>
        <div class="row" v-show="opcion_hc036 == 'REVOCAR'">
          <p>
            Expreso mi voluntad de
            <span style="font-weight: bold; text-decoration: underline">revocar</span> el consentimiento
            presentado y declaro por tanto que, tras la información recibida, no consiento someterme al
            procedimiento de ingreso a la modalidad TDO por los siguientes motivos:
          </p>
          <Input_ class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" v-model="HIC036.revocar_motivos" :field="form.revocar" />
        </div>
      </q-form>
    </q-card-section>
    <q-separator />

    <q-card-actions>
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          :registro_profe="getPaci.cod"
          @reciFirma="callBackFirma"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :registro_profe="getAcomp.cod"
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
        <ContainerFirma
          @reciFirma="callBackFirma"
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.registro_profe"
          quien_firma="FIRMA PROFESIONAL"
          class="col-4"
        />
      </div>
      <div class="col-12 row justify-center q-my-md">
        <q-btn
          :disable="opcion_hc036 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mr-lg"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card-actions>
    <div style="height: 5px"></div>
  </q-card>
  <div style="height: 1px"></div>
</template>
<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { impresionHC036, impresion, generarArchivo } from "@/impresiones";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const router = useRouter();
const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));

const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { getDll$, _getFirma$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const firma_prof = ref(null);

const opcion_hc036 = ref(null);
const llave = ref(null);
const fecha_act = ref(null);

const HIC036 = ref({
  revocar_motivos: "",
});

const form = ref({
  revocar: {
    id: "revocar",
    label: "",
    maxlength: "285",
    required: true,
    campo_abierto: true,
  },
});

watch(opcion_hc036, (val) => {
  if (val == "AUTORIZAR") {
    HIC036.value.revocar_motivos = "";
  } else {
    HIC036.value.diagnostico = "";
  }
});
onMounted(() => {
  fecha_act.value = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  llave.value = getHc.llave.slice(15);
  getFirmaProf();
});

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma.slice(22));
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma.slice(22));
};

const validarDatos = async () => {
  if (opcion_hc036.value == "REVOCAR" && HIC036.value.revocar_motivos == "") {
    return CON851("?", "info", "Debe ingresar motivos de revocación", () => foco_(form, "revocar"));
  }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC036.value));
  let datos = {
    estado: opcion_hc036.value == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC036",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };
  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }
  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(24, 32);
        fecha_act.value = dayjs(fecha).format("YYYY-MM-DD");
        return grabarFirmaConsen(data?.llave_consen);
      }
      CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });

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
    const datos_hic036 = {
      autorizo: opcion_hc036.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      fecha: fecha_act.value,
      llave: llave.value,
      diagnostico: getHc.rips.diagn.length ? getHc.rips.diagn[0].cod : "",
      ...HIC036.value,
    };
    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };
    const docDefinitionPrint = utilsFormat({
      datos: firmas,
      content: impresionHC036({
        datos: datos_hic036,
      }),
    });
    const docDefinitionFile = utilsFormat({
      datos: firmas,
      content: impresionHC036({
        datos: datos_hic036,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

</script>
<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
}
.custom-q-list .q-item {
  margin: 0;
}
</style>
