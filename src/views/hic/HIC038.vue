<template>
  <q-card class="q-mx-auto format">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc038"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc038 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="opcion_hc038 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="opcion_hc038"
            >
              {{ opcion_hc038 }}
            </q-chip>
          </p>
        </div>
        <div>
          <div class="row text-justify">
            <p>Historia clínica numero:</p>
            <q-input disable type="text" dense class="col-1 q-mr-xl" v-model="llave" />
            <p>Ciudad:</p>
            <q-input type="text" disable v-model="getEmpresa.ciudad_usuar" dense class="col-2 q-mr-md" />
            <p>Fecha:</p>
            <q-input v-model="HIC038.fecha_act" disable dense type="date" class="col-2" />
          </div>

          <div class="row text-justify">
            <p>
              Yo,
              <InputF_ v-model="getPaci.descrip" width="300" disable />
              identificado con documento numero
              <InputF_ v-model="getPaci.cod" disable /> expedida en
              <InputF_ v-model="getPaci.descrip_ciudad" disable /> teléfono numero
              <InputF_ v-model="getPaci.telefono" disable />. Actuando en nombre propio o como acudiente de
              <InputF_ v-model="getPaci.descrip" width="300" disable /> en mi calidad de paciente, de
              representante legal, familiar o allegado y en pleno uso de mis facultades mentales y de mis
              derechos de salud y habiendo solicitado por mi voluntad los servicios de salud a la empresa
              social del estado ESE salud Yopal, por medio del presente documento doy mi consentimiento
              informado para que se me brinden los cuidados correspondientes y se siga la conducta terapéutica
              según el criterio del médico tratante, se me ha informado que es necesario y conveniente por mi
              situación actual de salud, realizar remisión a una institución Prestadora de Servicios de Salud
              de mayor complejidad para la atención por el o los servicios de
              <InputF_ v-model="HIC038.servicios" width="300" /> en pro de mejorar mi condición clínica de
              salud y dar continuidad al plan terapéutico requerido.
            </p>
          </div>
        </div>
        <div>
          <p>Por lo anterior me ha brindado la siguiente información:</p>
          <ol>
            <li>
              <p>
                Se me ha informado que los trámites administrativos para la remisión estarán a cargo de mi EPS
                <InputF_ v-model="getPaci.descrip_eps" width="300" disable />, ellos serán los encargados de
                presentar mi caso antes las diferentes instituciones de salud, para disponibilidad de la cama
                de acuerdo con la Red que tengan contratada.
              </p>
            </li>
            <li>
              <p>
                El Periodo de tiempo para la aceptación de la remisión por parte de las IPS depende de varios
                factores como disponibilidad de la especialidad requerida, disponibilidad de cama,
                disponibilidad de convenio entre IPS y la EPS, entre otros, por lo tanto, no se puede
                determinar fecha ni hora exacta del proceso de remisión.
              </p>
            </li>
            <li>
              <p>
                El personal de la oficina de Referencia y Contra-referencia de la ESE Salud Yopal, realizara
                los trámites administrativos de informar a la EPS la necesidad de remisión y otorgo la
                autorización para que sean entregados todos los documentos de mi historia clínica requeridos
                para dichos tramites.
              </p>
            </li>
            <li>
              <p>
                En la Oficina de Referencia y Contra-referencia me entregaran información sobre los avances
                del proceso de remisión en los siguientes horarios:
                <InputF_ v-model="HIC038.horarios" width="300" />
              </p>
            </li>
            <li>
              <p>
                En consenso familiar hemos delegado al Señor/Señora
                <InputF_ v-model="HIC038.delegado_nombre" width="260" />identificado(a) con cedula de
                ciudadanía N°
                <InputF_ v-model="HIC038.delegado_cod" />
                expedida en la ciudad de
                <InputF_ v-model="HIC038.delegado_expedida" /> para que sea la única persona que reciba la
                información sobre los avances de la remisión en la oficina de Referencia y Contra-referencia y
                transmita esta información al resto de mis familiares.
              </p>
            </li>
            <li>
              <p>
                Se me informa que debo definir la persona que me acompañará durante el traslado y durante mi
                estadía en la institución de referencia, esa persona debe estar disponible para ser trasladado
                en el momento requerido.
              </p>
            </li>
            <li>
              <p>
                En caso de que el personal médico tratante de la ESE Salud Yopal suspenda la remisión por
                mejoría de mi estado de salud, se nos informara inmediatamente.
              </p>
            </li>
            <li>
              <p>
                Una vez entregado a la institución de salud remisoria para continuidad del tratamiento, mi
                cuidado y responsabilidad estará a cargo de la institución receptora.
              </p>
            </li>
            <li>
              <p>
                Me han informado que los riesgos durante el traslado en la ambulancia de la ESE Salud Yopal
                son: accidente vial, caída de la camilla, retrasos en la llegada al sitio de referencia por
                causas externas como factores climáticos, orden público, arreglos en la vía, entre otros.
              </p>
            </li>
          </ol>
        </div>
        <div class="row text-justify q-mt-xl q-mb-xl" style="width: 100%">
          <div class="row" style="border: 1px solid #ccc; width: 80%">
            <p>Marque con una equis “X” en los espacios en blanco de acuerdo con su respuesta</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 10%">
            <q-space />
            <p>SI</p>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 10%">
            <q-space />
            <p>NO</p>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 80%">
            <p>
              ¿Se me ha permitido realizar todas las observaciones y me han dado respuesta las inquietudes al
              respecto?
            </p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 10%">
            <q-space />
            <q-checkbox
              class="q-mx-md"
              style="margin-top: -5px"
              left-label
              v-model="reg_text.observaciones_s"
            />
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 10%">
            <q-space />
            <q-checkbox
              class="q-mx-md"
              style="margin-top: -5px"
              left-label
              v-model="reg_text.observaciones_n"
            />
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 80%">
            <p>¿El equipo de salud me ha explicado toda la información aquí descrita?</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 10%">
            <q-space />
            <q-checkbox
              class="q-mx-md"
              style="margin-top: -5px"
              left-label
              v-model="reg_text.explicacion_s"
            />
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 10%">
            <q-space />
            <q-checkbox
              class="q-mx-md"
              style="margin-top: -5px"
              left-label
              v-model="reg_text.explicacion_n"
            />
            <q-space />
          </div>
        </div>
        <div v-show="opcion_hc038 == 'AUTORIZAR'">
          <p>
            Para ello, manifiesto que estoy satisfecho/a con la información recibida y que comprendo el
            alcance y los riesgos explicados.
          </p>
        </div>
        <div v-if="opcion_hc038 == 'REVOCAR'" class="row">
          <p>
            Expreso mi voluntad de <ins class="text-bold">Revocar</ins> el consentimiento presentado y declaro
            por tanto que, tras la información recibida, no consiento someterme al procedimiento REFERENCIA Y
            CONTRA REFERENCIA DE PACIENTES, por los siguientes motivos:
          </p>
          <Input_
            class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
            v-model="HIC038.revocar_motivos"
            :field="form.revocar"
          />
        </div>
        <div v-show="texto_familiar">
          <div class="row q-mt-xl text-justify">
            <q-space />
            <p style="font-weight: bold">TUTOR LEGAL O FAMILIAR</p>
            <q-space />
          </div>
          <div class="row text-justify">
            <p>El (la) Señor(a)</p>
            <q-input v-model="getAcomp.descrip" disable type="text" dense class="col-6" />
            <p>identificado(a) con cédula de</p>
            <p>ciudadanía N°</p>
            <q-input v-model="getAcomp.cod" disable type="text" dense class="col-3" />
            <p>expedida en la ciudad de</p>
            <q-input v-model="getAcomp.descrip_ciudad" disable type="text" dense class="col-4" />
            <p>en calidad de</p>
            <q-input v-model="parentesco_acomp" disable type="text" dense class="col-3" />
            <p>
              , es consciente de que el paciente cuyos datos figuran en el encabezamiento, no es competente
              para
            </p>
            <p>
              decidir en este momento, por lo que asume la responsabilidad de la decisión, en los mismos
              términos que haría el propio paciente.
            </p>
          </div>
        </div>
      </q-form>
    </q-card-section>
    <q-separator />
    <q-card-actions>
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
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
          :disable="opcion_hc038 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mr-lg"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { ref, defineAsyncComponent, onMounted, watch, watchEffect, watchPostEffect } from "vue";
import { utilsFormat, evaluarParentesco } from "@/formatos/utils";
import { impresionHC038, impresion, generarArchivo } from "@/impresiones";
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

const opcion_hc038 = ref(null);
let texto_familiar = ref(false);
const llave = ref(null);
const fecha_act = ref(null);
const firma_prof = ref(null);
const huella_paci = ref(null);
let parentesco_acomp = ref(null);

const HIC038 = ref({
  servicios: "",
  horarios: "",
  observaciones: false,
  explicacion: false,
  revocar_motivos: "",

  //Extras
  fecha_act: dayjs().format("YYYY-MM-DD"),
});

const reg_text = ref({
  observaciones_n: false,
  observaciones_s: false,
  explicacion_n: false,
  explicacion_s: false,
});

const form = ref({
  explicacion: {
    id: "explicacion",
    label: "",
    maxlength: "285",
    required: true,
    campo_abierto: true,
  },
  revocar: {
    id: "revocar",
    label: "",
    maxlength: "285",
    required: true,
    campo_abierto: true,
  },
});

watch(opcion_hc038, (val) => {
  if (val == "AUTORIZAR") {
    HIC038.value.revocar_motivos = "";
  } else {
    HIC038.value.diagnostico = "";
  }
});

watch(
  () => [reg_text.value.explicacion_s, reg_text.value.explicacion_n],
  (newVal) => {
    const [first, second] = newVal;

    first && (reg_text.value.explicacion_n = false);
    second && (reg_text.value.explicacion_s = false);
  }
);

watch(
  () => [reg_text.value.observaciones_s, reg_text.value.observaciones_n],
  (newVal) => {
    const [first, second] = newVal;

    first && (reg_text.value.observaciones_n = false);
    second && (reg_text.value.observaciones_s = false);
  }
);

onMounted(() => {
  texto_familiar = getAcomp.cod.length ? true : false;
  getSesion.paren_acomp != "" ? (parentesco_acomp = evaluarParentesco(getSesion.paren_acomp)) : "";
  fecha_act.value = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  llave.value = getHc.llave.slice(15);
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

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};

const validarDatos = async () => {
  if (opcion_hc038.value == "AUTORIZAR" && (HIC038.value.servicios == "" || HIC038.value.horarios == "")) {
    return CON851("?", "info", "Debe ingresar los datos requeridos");
  }

  //Cambia valores booleanos a S o N
  for (const key of Object.keys(HIC038.value)) {
    if (typeof HIC038.value[key] === "boolean") {
      HIC038.value[key] = HIC038.value[key] ? "S" : "N";
    }
  }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC038.value));
  let datos = {
    estado: opcion_hc038.value == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC038",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
    observaciones: reg_text.value.observaciones_n ? reg_text.value.observaciones_n : reg_text.value.observaciones_s,
    explicacion: reg_text.value.explicacion_n ? reg_text.value.explicacion_n : reg_text.value.explicacion_s
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
    await guardarFile$({
      base64: firma_recibida_acomp.value,
      codigo: `A${llave}`,
    });

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
    const datos_hic038 = {
      autorizo: opcion_hc038.value == "AUTORIZAR" ? true : false,
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
      ...HIC038.value,
    };
    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_firma_acomp: firma_recibida_acomp.value,
      img_huella_paci: huella_paci.value,
      firma_prof: firma_prof.value,
    };
    const docDefinitionPrint = await utilsFormat({
      datos: firmas,
      content: impresionHC038({
        datos: datos_hic038,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: firmas,
      content: impresionHC038({
        datos: datos_hic038,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({
      docDefinition: docDefinitionFile,
    });
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
  margin-right: 8px;
}
</style>
