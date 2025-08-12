<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="LAB036.opcion_lab036"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="LAB036.opcion_lab036 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="LAB036.opcion_lab036 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="LAB036.opcion_lab036">
              {{ LAB036.opcion_lab036 }}
            </q-chip>
          </p>
        </div>
        <p>
          <span class="text-bold">Fecha:&nbsp;</span>
          <span>{{ LAB036.fecha }}</span>
        </p>

        <ol>
          <li>Identifique el tipo de muestra que se le va a tomar al paciente.</li>
          <li>Lea al paciente o familiar el procedimiento y los riesgos.</li>
          <li>Registre al paciente en el formato de socialización y entendimiento de consentimiento para la toma de muestras de laboratorio.</li>
          <li>Asegúrese que el paciente o familiar firme el formato de socialización.</li>
        </ol>

        <div class="row q-mt-lg q-mb-md">
          <div class="text-center" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">PROCEDIMIENTO</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 65%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">RIESGO</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">TOMA DE MUESTRAS DE SANGRE</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 65%">
            <p style="margin-top: 10px; margin-left: 10px">En la extracción de sangre puede presentarse:</p>
            <ul>
              <li>Sensación de dolor moderado.</li>
              <li>Sensación pulsátil.</li>
              <li>Se pueden formar hematomas.</li>
              <li>Leve inflamación y/o sangrado temporal.</li>
            </ul>
            <p style="margin-top: 10px; margin-left: 10px">
              A causa de la ansiedad puede sentir malestar o sensación de náuseas y mareo. INFORME DE INMEDIATO A QUIEN LE ESTÁ TOMANDO LA MUESTRA
            </p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">TOMA DE MUESTRAS DE PIEL O MUCOSAS.</p>
            <span>KOH, Gram, Leishmania</span>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 65%">
            <p style="margin-top: 10px; margin-left: 10px">
              Al realizar toma de la muestra o raspado de piel se puede presentar dolor y sangrado temporal.
            </p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">TOMA DE MUESTRAS EN GENITALES O REGION PERIANAL.</p>
            <ul>
              <li>Frotis de Flujo vaginal.</li>
              <li>Examen de secreción uretral.</li>
              <li>Hisopado de tamizaje para control pre-natal.</li>
              <li>Frotis rectal.</li>
            </ul>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 65%">
            <p style="margin-top: 10px; margin-left: 10px">
              Puede presentarse una ligera molestia y ligero sangrado durante la toma de la muestra de flujo vaginal o de secreción uretral si hay
              lesiones.
            </p>
            <p style="margin-top: 10px; margin-left: 10px">
              En caso de piel intacta y sin lesiones, no hay riesgos al realizar la toma de las muestras.
            </p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">SUMINISTRO DE CARGA DE GLUCOSA.</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 65%">
            <p style="margin-top: 10px; margin-left: 10px">
              La ingestión de la carga de glucosa puede provocar: Náuseas, mareos, malestar general, vómito.
            </p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">SOLICITUD DE DATOS CLINICOS.</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 65%">
            <p style="margin-top: 10px; margin-left: 10px">
              El paciente podrá o no, informar sobre su estado de salud, las enfermedades preexistentes, o el motivo por el cual le ordenaron los
              exámenes.
            </p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">
              SOLICITUD DE CORREO ELECTRONICO O UN MEDIO DE COMUNICACIÓN PARA ENVIARLE LOS RESULTADOS.
            </p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 65%">
            <p style="margin-top: 10px; margin-left: 10px">
              El paciente podrá o no, informar su correo electrónico, o permitirá otro medio de comunicación para entregarle los resultados de
              laboratorio.
            </p>
          </div>
        </div>

        <div>
          <p class="text-bold" style="text-align: center; text-decoration: underline">
            DECLARO que entiendo la importancia de la toma de muestras y que me han informado los riesgos
          </p>
          <p class="text-bold" style="text-align: center; text-decoration: underline">
            DOY MI CONSENTIMIENTO Para la toma de la muestra y para la realización de las pruebas de laboratorio
          </p>
        </div>
        <div class="row justify-between items-center">
          <p style="margin-top: 10px; margin-left: 10px">
            Correo: <span class="text-bold"> {{ getPaci.email }}</span>
          </p>
          <p style="margin-top: 10px; margin-left: 10px">
            Nombre paciente: <span class="text-bold"> {{ getPaci.descrip }}</span>
          </p>
          <p>
            Tipo y numero documento de identificación: <span class="text-bold">{{ getPaci.tipo_id + " " + getPaci.cod }} </span>
          </p>
          <p style="margin-top: 10px; margin-left: 10px">
            Telefono: <span class="text-bold"> {{ getPaci.telefono }}</span>
          </p>
        </div>
        <!--  -->
      </q-card-section>
    </q-form>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around q-mt-lg">
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
    <div class="row justify-center q-my-lg">
      <q-btn
        :disable="LAB036.opcion_lab036 ? false : true"
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
import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted } from "vue";
import { impresionLAB036, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat, calcularEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/ContainerFirma.vue"));

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getProf, getEmpresa, getHc, getSesion, getTestigo } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const firma_recibida_acomp = ref("");
const firma_recibida_test = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const huella_testigo = ref(null);
const huella_acomp = ref(null);
const firma_prof = ref(null);
const LAB036 = reactive({
  opcion_lab036: "",
  remitente: "",
  telefono: getPaci.telefono || "",
  email: getPaci.email || "",
  result_prb: "",
  otr_result: "",
  motivo_prb: "",
  fecha: "",
});
const form = ref({
  email: {
    id: "email",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
  telefono: {
    id: "telefono",
    maxlength: "10",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  remitente: {
    id: "remitente",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
});
onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  LAB036.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
};

const getFirmaProf = async () => {
  try {
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
    huella_testigo.value = await _getHuella$({ codigo: getTestigo.cod });
    huella_acomp.value = await _getHuella$({ codigo: getAcomp.cod });
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = async () => {
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(LAB036));
  let llave_paci;
  if (/[A-Za-z]/.test(getPaci.cod)) {
    llave_paci = getPaci.cod.padStart(15, " ");
  } else {
    llave_paci = getPaci.cod + "00000000";
  }
  let datos = {
    nit_entid: nit_usu.value,
    estado: LAB036.opcion_lab036 == "AUTORIZAR" ? "1" : "2",
    llave_fact: `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    disentimiento: "N",
    llave_consen: `${llave_paci}`,
    oper_consen: getSesion.oper,
    cod_consen: "LAB036",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    id_testigo: getTestigo.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 32);
        LAB036.fecha = dayjs(fecha).format("YYYY-MM-DD");
        return grabarFirmaConsen(data?.llave_consen);
      } else CON851("?", "error", "Error al guardar el consentimiento");
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
  const datos_lab036 = {
    autorizo: LAB036.opcion_lab036 == "AUTORIZAR" ? true : false,
    empresa: getEmpresa,
    testigo: getTestigo,
    paciente: getPaci,
    prof: getProf,
    acomp: getAcomp,
    firmas: {
      firma_paci: firma_recibida.value ? true : false,
      huella_paci: huella_paci.value ? true : false,
      huella_testigo: huella_testigo.value ? true : false,
      firma_acomp: firma_recibida_acomp.value ? true : false,
      firma_prof: firma_prof.value ? true : false,
      firma_test: firma_recibida_test.value ? true : false,
    },
    paren_acomp: getSesion.paren_acomp,
    ...LAB036,
  };

  const firmas = {
    img_firma_testigo: firma_recibida_test.value,
    img_firma_acomp: firma_recibida_acomp.value,
    img_firma_consen: firma_recibida.value,
    img_firma_paci: firma_recibida.value,
    img_huella_paci: huella_paci.value,
    firma_prof: firma_prof.value,
    img_huella_acomp: huella_acomp.value,
    img_huella_testigo: huella_testigo.value,
  };

  const docDefinitionPrint = await utilsFormat({
    datos: firmas,
    content: impresionLAB036({
      datos: datos_lab036,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionLAB036({
      datos: datos_lab036,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-LAB-036` });
  return response_impresion;
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
</script>

<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
