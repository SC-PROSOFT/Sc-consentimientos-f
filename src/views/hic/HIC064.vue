<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic064"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic064 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic064 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic064">
              {{ opcion_hic064 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p>Granada,&nbsp;</p>
          <p>fecha: {{ HIC064.fecha }}</p>
        </div>
        <div class="row">
          <p class="text-left">Fecha de toma de muestra:</p>
          <Input_ v-model="HIC064.fecha_toma_muestra" :field="form.fecha_toma_muestra" />
        </div>
        <div class="text-center" style="width: 100%">
          <p style="font-weight: bold; margin-top: 10px">INFORMACIÓN PARA LA TOMA DE MUESTRA</p>
        </div>
        <div>
          <p style="text-align: justify">
            <span class="text-bold">Pruebas basadas en detección de anticuerpos:</span> Se trata de pruebas que detectan la presencia de Anticuerpos
            IgM, IgG específicos contra el SARS-CoV-2 como respuesta inmune durante las diferentes fases de la infección. Usando una muestra de
            sangre, se procesa mediante el uso de inmunocromatográfia (prueba de casette).
          </p>
          <p style="text-align: justify">
            <span class="text-bold">Prueba de antígeno:</span> Prueba diagnóstica para SARS-CoV-2, esta prueba detecta ciertas proteínas en el virus.
            Se usa un hisopo para tomar una muestra del fluido de la nariz o la garganta, se considera una prueba de rápido resultado.
          </p>
          <p style="text-align: justify">
            <span class="text-bold">Propósito de la prueba:</span> Detección del SARS-CoV-2, que es el virus que causa el COVID-19.
          </p>
          <p style="text-align: justify">
            <span class="text-bold">Beneficios:</span> Identificar a personas infectadas por SARS-CoV-2, para poder tomar medidas que desaceleren y
            detengan la propagación del virus. Detección temprana del virus en pacientes asintomáticos. Mayor sensibilidad y especificidad de
            detección (prueba de antígeno).
          </p>
          <p style="text-align: justify">
            <span class="text-bold">Riesgos:</span> <span class="text-bold" style="font-style: italic">Hisopado:</span> Sangrado nasal, dolor leve y
            molestia en nariz o garganta. Muestra de sangre: Dolor, equimosis (amoratamiento), sangrado leve en el lugar de la punción.
          </p>
          <p>
            Yo, <span class="text-bold">{{ getPaci.descrip }}</span> , identificado (a) con documento N°
            <span class="text-bold">{{ getPaci.cod }}</span>
            de
            <span class="text-bold">{{ getPaci.descrip_ciudad }}</span>
            , declaro que me presente por voluntad propia, para toma de prueba
            <span class="text-bold">DETECCIÓN DE ANTIGENO PARA SARS-CoV2 o DETECCION DE ANTICUERPOS PARA SARS-CoV2,</span> Confirmo que se me ha
            informado sobre el propósito y beneficio del procedimiento, su interpretación, y su riesgo y que entiendo su contenido, incluyendo sus
            limitaciones, beneficios y riesgos de la prueba.
          </p>
          <p>Por lo anterior, doy mi consentimiento para:</p>
          <ul>
            <li>
              <span>Toma de muestras biológicas de Hisopado nasofaríngeo?</span>
              <q-radio color="primary" v-model="HIC064.hisopa_nasof" val="S" label="SI" />
              <q-radio color="primary" v-model="HIC064.hisopa_nasof" val="N" label="NO" />
            </li>
            <li>
              <span>Toma de muestra en sangre para estudios de detección de Anticuerpos COVID-19?</span>
              <q-radio color="primary" v-model="HIC064.detec_anticuerp" val="S" label="SI" />
              <q-radio color="primary" v-model="HIC064.detec_anticuerp" val="N" label="NO" />
            </li>
          </ul>
          <p>
            Autorizo de manera voluntaria, previa y explicita a la institución para tratar mis datos personales de acuerdo con la política de
            tratamiento de datos personales de la empresa y para los fines relacionados con su objeto social.
          </p>
        </div>
        <div class="row">
          <p>Nombre paciente:&nbsp;</p>
          <p style="font-weight: bold">{{ getPaci.descrip }}</p>
        </div>
        <div class="row">
          <p>Documento:&nbsp;</p>
          <p style="font-weight: bold">{{ getPaci.tipo_id }}&nbsp;</p>
          <p>N°.</p>
          <p style="font-weight: bold">&nbsp;{{ getPaci.cod }}</p>
        </div>
        <div class="row">
          <p>E-mail:&nbsp;</p>
          <p style="font-weight: bold">{{ getPaci.email }}</p>
        </div>
        <div class="row">
          <p>Teléfono:&nbsp;</p>
          <p style="font-weight: bold">{{ getPaci.telefono }}</p>
        </div>
        <div class="row">
          <p>Dirección:&nbsp;</p>
          <p style="font-weight: bold">{{ getPaci.direccion }}</p>
        </div>
        <div class="row">
          <p>EPS:&nbsp;</p>
          <p style="font-weight: bold">{{ getPaci.descrip_eps }}</p>
        </div>
      </q-card-section>
    </div>
    <q-separator />
    <q-card-actions align="around" class="row">
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
        :disable="opcion_hic064 ? false : true"
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
import { impresionHIC064, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { calcularEdad, utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
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

const HIC064 = reactive({
  fecha: "",
  hisopa_nasof: "",
  detec_anticuerp: "",
  fecha_toma_muestra: "",
  fecha_act_obj: {
    dia: "",
    mes: "",
    anio: "",
  },
});

const form = ref({
  fecha_toma_muestra: {
    id: "fecha_toma_muestra",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
});

const opcion_hic064 = ref(null);

onMounted(() => {
  HIC064.fecha = dayjs(getEmpresa.fecha).format("YYYY-MM-DD");
  HIC064.fecha_toma_muestra = dayjs().format("YYYY-MM-DD");
  HIC064.fecha_act_obj.dia = dayjs().date();
  HIC064.fecha_act_obj.mes = dayjs().month() + 1;
  HIC064.fecha_act_obj.anio = dayjs().year();
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
  const datos_format = JSON.parse(JSON.stringify(HIC064));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic064.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC064",
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
    const datos_hic064 = {
      autorizo: opcion_hic064.value == "AUTORIZAR" ? true : false,
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
      ...HIC064,
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
      datos: { ...firmas, cod_consen: "HIC064" },
      content: impresionHIC064({
        datos: datos_hic064,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC064" },
      content: impresionHIC064({
        datos: datos_hic064,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-064` });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
</script>
