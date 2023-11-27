<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_lab008"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_lab008 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_lab008 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_lab008"
            >
              {{ reg.opcion_lab008 }}
            </q-chip>
          </p>
        </div>
        <DatosFormat :datos="datos" @datos="(data) => (datos.servicio = data)" />
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">NORMATIVIDAD VIGENTE</div>
          <p class="row text-justify">
            La Ley 23 de 1981 al referirse a las relaciones médico - paciente, en los artículos 14, 15 y 18,
            advierte la necesidad del consentimiento para realizar los diferentes tratamientos medico
            quirúrgicos que se requieran. Para la resolución 3100 de 2019 el Consentimiento informado es la
            aceptación libre, voluntaria y consciente de un paciente o usuario, manifestada en el pleno uso de
            sus facultades, para que tenga a lugar un acto asistencial. Para que el consentimiento se
            considere informado, el paciente o usuario deberá entender la naturaleza de la decisión a
            consentir tras recibir información que le haga consciente de los beneficios, riesgos, alternativas
            e implicaciones del acto asistencial.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">INFORMACIÓN DEL PROCEDIMIENTO</div>
          <p class="row text-justify">
            Una biopsia con aguja es un procedimiento que permite obtener una muestra de células del cuerpo
            para hacer análisis de laboratorio. Los procedimientos convencionales de biopsia por punción
            incluyen la aspiración con aguja fina y la biopsia con aguja gruesa. La biopsia con aguja se puede
            usar para tomar muestras de líquido o tejido de los músculos, huesos y otros órganos, como el
            hígado o los pulmones. Una biopsia con aguja guiada por ultrasonido utiliza ondas sonoras para
            ayudar a ubicar la aguja adentro del órgano del cuerpo a estudiar y así, extraer una muestra de
            tejido para su análisis bajo el microscopio. El procedimiento es menos invasivo que la biopsia
            quirúrgica, deja poco o nada de cicatriz, y no involucra la exposición a la radiación ionizante.
            Este procedimiento requiere de poco o nada de preparación.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">BENEFICIOS</div>
          <p class="row text-justify">
            La biopsia se usa para encontrar las causas de un nódulo o anormalidad de un órgano o tejido.
            Cuando su médico encuentra un nódulo, podría ordenar estudios por imágenes para ayudar a
            determinar si el mismo es benigno (no cancerígeno) o maligno (cancerígeno). En caso de que el
            diagnóstico por imágenes no pueda definir claramente la anormalidad, podría ser necesario hacer
            una biopsia. La biopsia sonodirigida previene procedimientos quirúrgicos innecesarios y optimiza
            con seguridad y con excelente calidad, la muestra tomada para el diagnóstico definitivo.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">RIESGOS</div>
          <p class="row text-justify">
            Los riesgos son: Sangrado en el sitio de la biopsia. Infección. Daño a las estructuras adyacentes
            al sitio de punción. Las complicaciones de la biopsia son poco comunes porque el procedimiento se
            realiza bajo guía directa por imágenes y con una aguja. En algunos casos, la muestra podría ser
            inadecuada y el procedimiento podría tener que repetirse para poder obtener resultados
            diagnósticos. Debe consultar con su médico si presenta: Fiebre, Dolor en el lugar de la biopsia
            que empeora y que no mejora con los medicamentos, Hinchazón o supuración en el lugar de la
            biopsia, Sangrado que no se detiene con la presión ni con un vendaje.
          </p>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab008 == 'AUTORIZAR'">
          <div class="text-center text-subtitle1 text-bold q-py-xs">
            DECLARACION DEL CONSENTIMIENTO INFORMADO
          </div>
          <p class="row text-justify">
            Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la
            realización del procedimiento en mención, proceda a firmar dejando su autorización por escrito
          </p>
          <p>
            Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificada (o) con el documento de
            identidad número <InputF_ v-model="getPaci.cod" />, después de haber sido informado (a) sobre el
            procedimiento de Biopsia, los riesgos y beneficios, declaro que la información ha sido clara, que
            se me han respondido las inquietudes y que autorizo la toma del procedimiento teniendo en cuenta
            que esta autorización puede ser revocable en cualquier momento.
          </p>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab008 == 'REVOCAR'">
          <div class="text-center text-subtitle1 text-bold q-py-xs">
            REVOCACIÓN DEL CONSENTIMIENTO INFORMADO
          </div>
          <p class="row text-justify">
            Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la
            realización del procedimiento en mención, proceda a firmar dejando su autorización por escrito
          </p>
          <p>
            Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificada (o) con el documento de
            identidad número <InputF_ v-model="getPaci.cod" />, después de haber sido informado (a) sobre el
            procedimiento de Biopsia, sus riesgos y beneficios y adicionalmente, los riesgos de no
            realizármelo, declaro que la información ha sido clara, que se me han respondido las inquietudes y
            que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con la toma del
            procedimiento en mención.
          </p>
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
          @reciFirma="callBackFirmaAcomp"
          :registro_profe="getAcomp.cod"
          quien_firma="TESTIGO"
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
          :disable="reg.opcion_lab008 ? false : true"
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
import { impresionLAB008, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion, getArtic, getDiag } = useModuleFormatos();
const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const firma_recibida_test = ref("");
const firma_recibida = ref("");
const firma_prof = ref(null);
const huella_paci = ref(null);

const datos = {
  active_cups: true,
  servicio: "",
};

const reg = ref({
  codigo_cie1: getDiag[0] ? getDiag[0].codigo : "",
  descrip_cie1: getDiag[0] ? getDiag[0].descripcion : "",
  codigo_cie2: getDiag[1] ? getDiag[1].codigo : "",
  descrip_cie2: getDiag[1] ? getDiag[1].descripcion : "",
  codigo_cups1: getArtic[0] ? getArtic[0].codigo : "",
  descrip_cups1: getArtic[0] ? getArtic[0].descripcion : "",
  codigo_cups2: getArtic[1] ? getArtic[1].codigo : "",
  descrip_cups2: getArtic[1] ? getArtic[1].descripcion : "",
  llave_consen: `${getPaci.cod}00000000`,

  // Extras
  opcion_lab008: "",
});

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
const validarDatos = async () => {
  if (!firma_recibida.value && !getAcomp.cod) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_test.value) {
    return CON851("?", "info", "No se ha realizado la firma del testigo");
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg.value));
  let datos = {
    estado: reg.value.opcion_lab008 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: `${getPaci.cod}00000000`,
    oper_consen: getSesion.oper,
    cod_consen: "LAB008",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    id_testigo: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      return grabarFirmaConsen(data.llave_consen);
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    await guardarFile$({ base64: firma_recibida_test.value, codigo: `A${llave}` });

    if (getEmpresa.envio_email == "N") {
      await imprimirConsen();
      return router.back();
    }

    return CON851P(
      "?",
      "info",
      "¿Deseas enviar el correo del consentimientos?",
      async () => {
        const file = await imprimirConsen();
        const response_guardar = await guardarArchivo$({
          nombre: `${getSesion.suc}${getSesion.nro_comp}.pdf`,
          ruta: "D:\\CONSENTIMIENTOS",
          file
        });
        CON851("?", response_guardar.tipo, response_guardar.message, () => router.back());
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

        const response_guardar = await guardarArchivo$({
          nombre: `${getSesion.suc}${getSesion.nro_comp}.pdf`,
          ruta: "D:\\CONSENTIMIENTOS",
          file
        });
        CON851("?", response_guardar.tipo, response_guardar.message, () => router.back());
      }
    );
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const imprimirConsen = async () => {
  try {
    const datos_lab008 = {
      autorizo: reg.value.opcion_lab008 == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_test.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      fecha: reg.value.fecha_act,
      llave: reg.value.llave_consen,
      ...reg.value,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_test.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = utilsFormat({
      datos: firmas,
      content: impresionLAB008({
        datos: datos_lab008,
      }),
    });
    const docDefinitionFile = utilsFormat({
      datos: firmas,
      content: impresionLAB008({
        datos: datos_lab008,
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
  data_firma && (firma_recibida.value = data_firma.slice(22));
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_test.value = data_firma.slice(22));
};
</script>
<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
