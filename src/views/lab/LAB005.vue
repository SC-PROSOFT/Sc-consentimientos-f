<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_lab005"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_lab005 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_lab005 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_lab005"
            >
              {{ reg.opcion_lab005 }}
            </q-chip>
          </p>
        </div>
        <DatosFormat :datos="datos" @datos="(data) => (datos.servicio = data)" />
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">NORMATIVIDAD VIGENTE</div>
          <p class="row text-justify">
            La Ley 23 de 1981 al referirse a las relaciones médico – paciente, en los artículos 14, 15 y 18,
            advierte la necesidad del consentimiento para realizar los diferentes tratamientos medico
            quirúrgicos que se requieran. Para la resolución 3100 de 2019 el Consentimiento informado es la
            aceptación libre, voluntaria y consciente de un paciente o usuario, manifestada en el pleno uso de
            sus facultades, para que tenga a lugar un acto asistencial. Para que el consentimiento se
            considere informado, el paciente o usuario deberá entender la naturaleza de la decisión a
            consentir tras recibir información que le haga consciente de los beneficios, riesgos, alternativas
            e implicaciones del acto asistencia
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">INFORMACIÓN DEL PROCEDIMIENTO</div>
          <p class="row text-justify">
            Su médico tratante después de valorar su situación clínica, considera imprescindible la
            realización de unas imágenes diagnosticas con objeto de valorar más adecuadamente su estado
            actual. La toma de imágenes diagnosticas emitidas por equipos de radiación ionizante como las
            radiografías, tomografías, mamografías y densitometrías, la exponen a una dosis de radiación
            ionizante para producir imágenes del interior del cuerpo.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">BENEFICIOS</div>
          <p class="row text-justify">
            Los exámenes radiológicos son accesibles y brindan importante información anatómica (para
            estructuras óseas) para orientar y/o confirmar diagnósticos y tratamientos. A partir de las
            radiografías se han ido desarrollando nuevas técnicas y aplicaciones como las mamografías, el
            examen dental, la densitometría o la tomografía computarizada (TC), técnicas cada vez más
            avanzadas. Los beneficios por procedimiento están descritos en cada uno de los procedimientos.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">RIESGOS</div>
          <p class="row text-justify">
            Al realizarse la prueba, recibirá una dosis de radiación que conlleva un cierto riesgo. En
            general, las dosis de radiación recibidas en este tipo de pruebas no representan ningún peligro
            significativo para la salud del feto, siendo los riesgos asociados a la prueba mucho menores que
            el riesgo natural de que aparezca alguna alteración. Sin embargo, existe la posibilidad, aunque
            pequeña, de provocar mediante la radiación los siguientes daños: Aborto, malformaciones orgánicas
            y disminuciones del coeficiente intelectual o del crecimiento. Un incremento sobre la probabilidad
            natural de padecer cáncer en la infancia. Enfermedades genéticas hereditarias. Según los
            conocimientos actuales, y debido a que las dosis utilizadas en las pruebas radiológicas están muy
            por debajo del umbral peligroso, la probabilidad de que esto ocurra se considera prácticamente
            nula. No obstante, usted no va a recibir Rayos X directos en el abdomen y, por otro lado, le vamos
            a proteger de toda radiación que no esté dirigida a proporcionar una imagen diagnóstica,
            colocándole un delantal plomado expresamente concebido para evitar la llegada de radiaciones al
            abdomen
          </p>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab005 == 'AUTORIZAR'">
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
            procedimiento de exámenes de radiología en mujeres gestantes, los riesgos y beneficios, declaro
            que la información ha sido clara, que se me han respondido las inquietudes y que autorizo la toma
            del procedimiento teniendo en cuenta que esta autorización puede ser revocable en cualquier
            momento
          </p>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab005 == 'REVOCAR'">
          <div class="text-center text-subtitle1 text-bold q-py-xs">
            REVOCACIÓN DEL CONSENTIMIENTO INFORMADO
          </div>
          <p>
            Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificada (o) con el documento de
            identidad número <InputF_ v-model="getPaci.cod" />, después de haber sido informado (a) sobre el
            procedimiento de exámenes de radiología en mujeres gestantes sus riesgos y beneficios y
            adicionalmente, los riesgos de no realizármelo, declaro que la información ha sido clara, que se
            me han respondido las inquietudes y que autorizo de forma libre y consiente, revoco mi
            consentimiento para continuar con la toma del procedimiento en mención.
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
          :disable="reg.opcion_lab005 ? false : true"
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
import { impresionLAB005, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat, calcEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado, guardarArchivo$ } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion, getArtic, getDiag } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_test = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);

const datos = {
  tipo_id: getPaci.tipo_id,
  active_cups: true,
  servicio: "",
};

const reg = ref({
  opcion_lab005: "",
  fecha_act: "",
  edad: "",
  codigo_cie1: getDiag[0] ? getDiag[0].codigo : "",
  descrip_cie1: getDiag[0] ? getDiag[0].descripcion : "",
  codigo_cie2: getDiag[1] ? getDiag[1].codigo : "",
  descrip_cie2: getDiag[1] ? getDiag[1].descripcion : "",
  codigo_cups1: getArtic[0] ? getArtic[0].codigo : "",
  descrip_cups1: getArtic[0] ? getArtic[0].descripcion : "",
  codigo_cups2: getArtic[1] ? getArtic[1].codigo : "",
  descrip_cups2: getArtic[1] ? getArtic[1].descripcion : "",
  llave_consen: `${getPaci.cod}00000000`,
});

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  reg.value.edad = calcEdad(getPaci.nacim);
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
    estado: reg.value.opcion_lab005 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: `${getPaci.cod}00000000`,
    oper_consen: getSesion.oper,
    cod_consen: "LAB005",
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
          nombre: `${getSesion.suc}${getSesion.nro_comp}-${getSesion.oper}${dayjs().format('YYYYMMDDHHmm')}.pdf`,
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
          nombre: `${getSesion.suc}${getSesion.nro_comp}-${getSesion.oper}${dayjs().format('YYYYMMDDHHmm')}.pdf`,
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
    const datos_lab005 = {
      autorizo: reg.value.opcion_lab005 == "AUTORIZAR" ? true : false,
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
      content: impresionLAB005({
        datos: datos_lab005,
      }),
    });
    const docDefinitionFile = utilsFormat({
      datos: firmas,
      content: impresionLAB005({
        datos: datos_lab005,
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
