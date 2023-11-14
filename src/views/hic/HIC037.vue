<template>
  <q-card class="q-mx-auto q-ma-xl justify-center format">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc037"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc037 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="opcion_hc037 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="opcion_hc037"
            >
              {{ opcion_hc037 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p>Historia clínica numero:</p>
          <q-input type="text" disable dense v-model="llave" class="col-2" />
          <q-space />
          <p>Ciudad:</p>
          <q-input type="text" disable v-model="getEmpresa.ciudad_usuar" dense class="col-3" />
          <p>Fecha:</p>
          <q-input v-model="fecha_act" disable dense type="date" class="col-1.5" />
        </div>
        <div class="row">
          <p style="font-weight: bold">
            Es deber de todo de todo profesional advertir oportunamente los riesgos que pueden derivarse del
            tratamiento que será practicado y a los que se expone teniendo en cuenta la solicitud de su médico
            tratante, solicitando el consentimiento informado ley 23 del 1981 (art 15 y 16).
          </p>
        </div>
        <div class="row">
          <p style="font-weight: bold">INFORMACION</p>
          <p style="font-weight: bold; margin-top: -10px">
            A continuación, se explica el proceso del examen el cual le van a practicar teniendo en cuenta la
            solicitud del médico tratante, es una exploración radiológica, en forma de RX, con el fin de
            proporcionar información diagnostica y tratar su enfermedad.
          </p>
        </div>
        <div class="row" v-show="opcion_hc037 == 'AUTORIZAR'">
          <p>Yo</p>
          <q-input v-model="getPaci.descrip" disable type="text" dense class="col-3" style="width: 300px" />
          <p>identificada con cédula de ciudadanía No.</p>
          <q-input v-model="getPaci.cod" disable type="text" dense class="col-2" style="width: 150px" />
          <p>de</p>
          <q-input v-model="getPaci.descrip_ciudad" disable type="text" dense class="col-2" />
          <p style="margin-top: -5px">
            en forma voluntaria y en pleno uso de mis facultades mentales y psíquicas sin presión o inducción
            alguna, doy el consentimiento E.S.E salud Yopal -Hospital Central de Yopal, realice toma de RX.
            Acepto sus riesgos e imprevistos. Entiendo lo que he leído, se me ha explicado verbalmente y por
            escrito acerca del procedimiento, los cuidados que debo tener uso del chaleco plomado, los riesgos
            justificados y previsibles. También se me ha dado la oportunidad de preguntar y resolver dudas y
            recibí información del tecnólogo de radiología de nombre:
            <q-input
              v-model="HIC037.nombre_radiologo"
              type="text"
              dense
              class="col-2"
              style="width: 350px; display: inline-block"
            />
            CC
            <q-input
              v-model="HIC037.cedula_radiologo"
              type="text"
              dense
              class="col-2"
              style="display: inline-block"
            />
          </p>
        </div>
        <div class="q-mt-md q-mb-md" v-show="opcion_hc037 == 'REVOCAR'">
          <div style="text-align: center;">
            <span style="font-size: medium;font-weight: bold;">DISENTIMIENTO</span>
          </div>
          <div class="row text-justify">
            <p>
              Expreso mi voluntad de
              <span style="font-weight: bold; text-decoration: underline">revocar</span> el consentimiento
              presentado y declaro por tanto que, tras la información recibida, no consiento someterme al
              procedimiento de pruebas radiologicas, por los siguientes motivos:
            </p>
            <Input_
              class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
              v-model="HIC037.revocar_motivos"
              :field="form.revocar_motivos"
            />
          </div>
        </div>
      </q-form>
    </q-card-section>
    <q-card-actions>
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          :registro_profe="getPaci.cod"
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
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
          :disable="opcion_hc037 ? false : true"
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
import { impresionHC037, impresion, generarArchivo } from "@/impresiones";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const router = useRouter();
const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));

const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");

const opcion_hc037 = ref(null);
const llave = ref(null);
const fecha_act = ref(null);
const firma_prof = ref(null);
const huella_paci = ref(null);

const HIC037 = ref({
  revocar_motivos: "",

  //Extras
  nombre_radiologo: "",
  cedula_radiologo: "",
});

const form = ref({
  revocar_motivos: {
    id: "revocar_motivos",
    label: "",
    maxlength: "285",
    required: true,
    campo_abierto: true,
  },
});

watch(opcion_hc037, (val) => {
  if (val == "AUTORIZAR") {
    HIC037.value.revocar_motivos = "";
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
  if (opcion_hc037.value == "REVOCAR" && HIC037.value.revocar_motivos == "") {
    return CON851("?", "info", "Debe ingresar motivos de revocación", () => foco_(form, "revocar_motivos"));
  }
  if (opcion_hc037.value == "AUTORIZAR" && (HIC037.value.nombre_radiologo == "" || HIC037.value.cedula_radiologo == "")) {
    return CON851("?", "info", "Debe ingresar los datos requeridos");
  } else {
    HIC037.value.nombre_radiologo = HIC037.value.nombre_radiologo.toUpperCase();
  }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC037.value));
  datos_format.fecha_ult_cito = dayjs(datos_format.fecha_ult_cito).format("YYYYMMDD");
  let datos = {
    estado: opcion_hc037.value == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC030",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };
  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañate");
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

        if (!getPaci.email) return router.back();

        if (getPaci.email && !/.+@.+\..+/.test(getPaci.email.toLowerCase())) {
          return CON851("?", "info", "El correo no es valido", () => router.back());
        }

        const response = await enviarCorreo$({
          cuerpo: `SE ADJUNTA ${getEncabezado.descrip} PARA ${getPaci.descrip} IDENTIDICADO CON ${getPaci.cod}`,
          destino: "davidsantiagolozada@gmail.com",
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
    const datos_hic037 = {
      autorizo: opcion_hc037.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
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
      fecha: fecha_act.value,
      llave: llave.value,
      diagnostico: getHc.rips.diagn.length ? getHc.rips.diagn[0].cod : "",
      ...HIC037.value,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = utilsFormat({
      datos: firmas,
      content: impresionHC037({
        datos: datos_hic037,
      }),
    });
    const docDefinitionFile = utilsFormat({
      datos: firmas,
      content: impresionHC037({
        datos: datos_hic037,
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
