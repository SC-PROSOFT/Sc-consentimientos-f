<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_lab004"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_lab004 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="reg.opcion_lab004 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="reg.opcion_lab004">
              {{ reg.opcion_lab004 }}
            </q-chip>
          </p>
        </div>
        <DatosFormat :datos="datos" @datos="(data) => (reg.servicio = data)" />
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">NORMATIVIDAD VIGENTE</div>
          <p class="row text-justify">
            La Ley 23 de 1981 al referirse a las relaciones médico – paciente, en los artículos 14, 15 y 18, advierte la necesidad del consentimiento
            para realizar los diferentes tratamientos medico quirúrgicos que se requieran. Para la resolución 3100 de 2019 el Consentimiento informado
            es la aceptación libre, voluntaria y consciente de un paciente o usuario, manifestada en el pleno uso de sus facultades, para que tenga a
            lugar un acto asistencial. Para que el consentimiento se considere informado, el paciente o usuario deberá entender la naturaleza de la
            decisión a consentir tras recibir información que le haga consciente de los beneficios, riesgos, alternativas e implicaciones del acto
            asistencial
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">INFORMACIÓN DEL PROCEDIMIENTO</div>
          <p class="row text-justify">
            La Mamografía es un estudio radiológico con la particularidad de ser una proyección específica para la evaluación de las mamas y con un
            equipo de rayos X diferente al utilizado para radiología convencional. Para la adquisición de este estudio es necesario que las mamas se
            coloquen en una superficie y se compriman para que sea más fácil la identificación de tumores o calcificaciones. Es importante ese día no
            utilizar desodorante o cremas en el área del pecho pues estos productos pueden ser detectados por los RX y causar un mal diagnóstico
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">BENEFICIOS</div>
          <p class="row text-justify">
            La mamografía de exploración juega un papel central en la detección temprana del cáncer de mamas ya que puede mostrar los cambios en las
            mamas años antes de que el médico o el paciente los adviertan. La mamografía de diagnóstico se utiliza para evaluar a una paciente con
            resultados clínicos anormales, tales como nódulos en las mamas o descargas de los pezones, descubiertos por la mujer o su médico. La
            mamografía de diagnóstico también puede realizarse luego de un mamograma de exploración anormal, con el fin de evaluar el área conflictiva
            en el examen de exploración.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">RIESGOS</div>
          <p class="row text-justify">
            La comprensión utilizada para tomaar el examen puede causar una pequeña molestia pero sólo durará unos segundos. Todo el examen lo realiza
            un tecnólogo en imágenes altamente capacitado para este fin. Las Mamogramas con resultado falso positivo requieren de mayor evaluación,
            como por ejemplo la realización de mamogramas adicionales o ultrasonido. Si aparece un resultado anormal, se deberá realizar un
            seguimiento o biopsia, de acuerdo a la valoración del medico tratante
          </p>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab004 == 'AUTORIZAR'">
          <div class="text-center text-subtitle1 text-bold q-py-xs">DECLARACION DEL CONSENTIMIENTO INFORMADO</div>
          <p class="row text-justify">
            Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la realización del procedimiento en mención,
            proceda a firmar dejando su autorización por escrito
          </p>
          <p>
            Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificada (o) con el documento de identidad número
            <InputF_ v-model="getPaci.cod" />, después de haber sido informado (a) sobre el procedimiento de Mamografía, los riesgos y beneficios,
            declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo la toma del procedimiento teniendo en
            cuenta que esta autorización puede ser revocable en cualquier momento
          </p>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab004 == 'REVOCAR'">
          <div class="text-center text-subtitle1 text-bold q-py-xs">REVOCACIÓN DEL CONSENTIMIENTO INFORMADO</div>
          <p class="row text-justify">
            Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la realización del procedimiento en mención,
            proceda a firmar dejando su autorización por escrito
          </p>
          <p>
            Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificada (o) con el documento de identidad número
            <InputF_ v-model="getPaci.cod" />, después de haber sido informado (a) sobre el procedimiento de Mamografía sus riesgos y beneficios y
            adicionalmente, los riesgos de no realizármelo, declaro que la información ha sido clara, que se me han respondido las inquietudes y que
            autorizo de forma libre y consiente, revoco mi consentimiento para continuar con la toma del procedimiento en mención.
          </p>
        </div>
      </q-form>
    </q-card-section>
    <q-card-actions>
      <div class="col-12 row justify-around">
        <ContainerFirma
          :quien_firma="getAcomp.cod ? 'FIRMA ACOMPAÑANTE' : 'FIRMA PACIENTE'"
          :firmador="getAcomp.cod ? getAcomp.descrip : getPaci.descrip"
          :registro_profe="getAcomp.cod ? getAcomp.cod : getPaci.cod"
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getTestigo.descrip"
          :registro_profe="getTestigo.cod"
          @reciFirma="callBackFirmaTest"
          quien_firma="FIRMA TESTIGO"
          :codigo_firma="getTestigo.cod"
          class="col-4"
        />
        <ContainerFirma
          disable
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.cod"
          quien_firma="FIRMA PROFESIONAL"
          :codigo_firma="getProf.cod"
          class="col-4"
        />
      </div>
      <div class="col-12 row justify-center q-my-md">
        <q-btn
          :disable="reg.opcion_lab004 ? false : true"
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
import { impresionLAB004, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted } from "vue";
import { utilsFormat, calcEdad } from "@/formatos/utils";
import dayjs from "dayjs";
import { useRouter } from "vue-router";
const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado, guardarArchivo$ } = useApiContabilidad();
const { getPaci, getAcomp, getTestigo, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida_test = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const router = useRouter();
const datos = {
  tipo_id: getPaci.tipo_id,
  active_cups: true,
};

const reg = ref({
  opcion_lab004: "",
  fecha_act: "",
  edad: "",
  codigo_cie1: "",
  descrip_cie1: "",
  codigo_cie2: "",
  descrip_cie2: "",
  codigo_cups1: "",
  descrip_cups1: "",
  codigo_cups2: "",
  descrip_cups2: "",
  servicio: "",
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

const validarDatos = () => {
  if (!firma_recibida.value && !getAcomp.cod) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }
  if (!firma_recibida_test.value) {
    return CON851("?", "info", "No se ha realizado la firma del testigo");
  }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg.value));
  let datos = {
    llave_fact: `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    estado: reg.value.opcion_lab004 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: `${getPaci.cod}00000000`,
    oper_consen: getSesion.oper,
    cod_consen: "LAB004",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      console.log("⚡  file: LAB004.vue:238  data.llave_consen-->", data.llave_consen);
      return grabarFirmaConsen(data.llave_consen);
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });
    await guardarFile$({ base64: firma_recibida_test.value, codigo: `T${llave}` });
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });

    if (getEmpresa.envio_email == "N") {
      await imprimirConsen(llave);
      return router.back();
    }
    return CON851P(
      "?",
      "info",
      "¿Deseas enviar el correo del consentimientos?",
      async () => {
        const file = await imprimirConsen(llave);
        const response_guardar = await guardarArchivo$({
          nombre: `${getSesion.suc}${getSesion.nro_comp}-${getSesion.oper}${dayjs().format("YYYYMMDDHHmm")}.pdf`,
          ruta: "D:\\CONSENTIMIENTOS",
          file,
        });
        CON851("?", response_guardar.tipo, response_guardar.message, () => router.back());
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

        const response_guardar = await guardarArchivo$({
          nombre: `${getSesion.suc}${getSesion.nro_comp}-${getSesion.oper}${dayjs().format("YYYYMMDDHHmm")}.pdf`,
          ruta: "D:\\CONSENTIMIENTOS",
          file,
        });
        CON851("?", response_guardar.tipo, response_guardar.message, () => router.back());
      }
    );
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const imprimirConsen = async (llave) => {
  try {
    reg.codigo_cie1 = getSesion.diagnosticos[0] ? getSesion.diagnosticos[0].codigo : "";
    reg.descrip_cie1 = getSesion.diagnosticos[0] ? getSesion.diagnosticos[0].descripcion : "";
    reg.codigo_cie2 = getSesion.diagnosticos[1] ? getSesion.diagnosticos[1].codigo : "";
    reg.descrip_cie2 = getSesion.diagnosticos[1] ? getSesion.diagnosticos[1].descripcion : "";
    reg.codigo_cups1 = getSesion.articulos[0] ? getSesion.articulos[0].codigo : "";
    reg.descrip_cups1 = getSesion.articulos[0] ? getSesion.articulos[0].descripcion : "";
    reg.codigo_cups2 = getSesion.articulos[1] ? getSesion.articulos[1].codigo : "";
    reg.descrip_cups2 = getSesion.articulos[1] ? getSesion.articulos[1].descripcion : "";

    const datos_lab004 = {
      autorizo: reg.value.opcion_lab004 == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      testigo: getTestigo,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      cod_consen: "LAB004",
      firmas: {
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_test: firma_recibida_test.value ? true : false,
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      fecha: reg.value.fecha_act,
      llave: reg.value.llave_consen,
      hora: dayjs().format("hh:mm"),
      ...reg.value,
    };

    const firmas = {
      img_firma_testigo: firma_recibida_test.value,
      img_firma_acomp: firma_recibida_acomp.value,
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: firmas,
      content: impresionLAB004({
        datos: datos_lab004,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: firmas,
      content: impresionLAB004({
        datos: datos_lab004,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-LAB-004` });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

const callBackFirma = (data_firma) => {
  if (getAcomp.cod) firma_recibida_acomp.value = data_firma;
  else firma_recibida.value = data_firma;
};

const callBackFirmaTest = (data_firma) => {
  data_firma && (firma_recibida_test.value = data_firma);
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
