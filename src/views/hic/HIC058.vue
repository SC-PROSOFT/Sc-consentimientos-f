<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic058"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic058 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic058 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic058">
              {{ opcion_hic058 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p>Fecha:&nbsp;</p>
          <p>{{ HIC058.fecha }}</p>
        </div>
        <div class="row">
          <p style="text-align: justify">
            Dentro de las normas éticas exigidas por la Ley 23 de 1981, se encuentra el deber de informar adecuada y oportunamente a todos sus
            pacientes los riesgos que puedan derivarse del tratamiento que le será practicado, solicitando su consentimiento anticipadamente e
            igualmente lo exige la guía para la atención en planificación familiar a hombres y mujeres.
          </p>

          <p style="text-align: justify">
            El procedimiento consiste en: Previo asepsia con un antiséptico adecuado, se inserta debajo de la piel, dos barras que contienen hormona
            anticonceptiva (levonorgestrel X 75 mg) a través de una pequeña inserción no mayor a dos milímetros (no requiere sutura); realizada en una
            zona de la piel sana de la cara interna del brazo izquierdo o derecho según sea la mujer diestra o zurda, en donde ha sido aplicada
            anestésico local previamente. Una vez insertadas las barras se procede a colocar un vendaje, el cual debe ser removido solo por un
            profesional de la salud al tercer o cuarto día posterior a la consulta de inserción. Algunas de las reacciones adversas se pueden
            presentar en alrededor del 10% de las usuarias.
          </p>
          <p>
            Yo &nbsp;<span class="text-bold">{{ getPaci.descrip }}</span> identificada con <span class="text-bold">{{ getPaci.tipo_id }} </span>&nbsp;
            <span class="text-bold">{{ getPaci.cod }}</span
            >, expedida en <span class="text-bold">{{ getPaci.descrip_ciudad }},</span>
          </p>
          <p>declaro que he sido suficientemente informada en términos claros y comprensibles por:</p>
          <Input_ v-model="HIC058.prof_informa" :field="form.prof_informa" :inputStyle="{ width: '400px' }" />
          <p>identificado(a) con C.C No.:</p>
          <Input_ v-model="HIC058.cod_prof_informa" :field="form.cod_prof_informa" :inputStyle="{ width: '150px' }" />
          <p>acerca del procedimiento inserción de implante subdérmico hormonal.</p>
        </div>
        <div class="text-center" style="width: 100%">
          <p style="font-weight: bold; margin-top: 10px">DECLARO:</p>
        </div>
        <div>
          <p style="text-align: justify">
            1- Me han explicado en un lenguaje claro y comprensible la naturaleza y propósito del procedimiento, también me han informado de las
            ventajas, complicaciones, molestias y riesgos que pueden producirse, tales como aumento de peso, acné, nauseas pasajeras, leve dolor
            mamario o pélvico, cervicitis, secreción genital o prurito, irregularidades menstruales (hemorragia, ausencia de menstruación por periodos
            largos o manchados intermitentes) y cefalea, que disminuyen en la medida que el organismo se adapte al implante.
          </p>
          <p style="text-align: justify">
            2- Se me ha dado la oportunidad de hacer preguntas y mis preguntas han sido contestadas satisfactoriamente.
          </p>
          <p style="text-align: justify">
            3- Se me ha informado plenamente que retirado el implante y al no iniciar inmediatamente otro método de planificación familiar tengo la
            oportunidad de quedar embarazada.
          </p>
          <p style="text-align: justify">
            4- Se me ha informado de todos los signos de alarma por los cuales debo consultar una vez se me haya realizado el procedimiento tales
            como: fiebre, enrojecimiento, sangrado y salida de secreción por el sitio de incisión, dolor de cabeza intenso que no cede a la toma de
            analgésicos, dolor intenso del brazo en el cual fue insertado el implante subdermico.
          </p>
          <p style="text-align: justify">
            5- Tengo la opción de decidir en contra del procedimiento (sin sacrificar mis derechos a servicios o beneficios médicos, de salud y otros
            dentro de la eps).
          </p>
          <p style="text-align: justify">
            6- Se me explico que el embarazo con este método de planificación familiar ocurre en una proporción de de menos de 1 en 100 mujeres al
            año.
          </p>
          <p style="text-align: justify">
            7- Se me explico que las contraindicaciones son: enfermedad trombo embolica venosa activa, presencia o antecedentes de enfermedad hepática
            severa, presencia o antecedentes de tumores hepáticos malignos o benignos, sospecha o certeza de neoplasias malignas dependientes de
            hormonas sexuales, hemorragia vaginal sin diagnosticar; para lo cual existe registro en la historia clínica.
          </p>
        </div>
        <div>
          <p style="font-weight: bold; margin-top: 10px">
            CERTIFICO QUE HE LEIDO Y COMPRENDIDO PERFECTAMENTE LO ANTERIOR Y QUE TODOS LOS ESPACIOS EN BLANCO HAN SIDO COMPLETADOS ENTES DE MI FIRMA Y
            QUE ME ENCUENTRO EN LIBERTAD DE EXPRESAR MI VOLUNTAD Y POR LO TANTO AUTORIZO ME SEA REALIZADO EL PRECEDIMIENTO.
          </p>
        </div>
        <!-- <div class="row">
          <p>Fecha:&nbsp;</p>
          <p>{{ HIC058.fecha_act }}</p>
        </div>
        <div class="row">
          <p>Nombre del paciente:&nbsp;</p>
          <p>{{ getPaci.descrip }}</p>
        </div>
        <div class="row">
          <p>Tipo de identificación:&nbsp;</p>
          <p>{{ getPaci.tipo_id }}</p>
        </div> -->
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
        :disable="opcion_hic058 ? false : true"
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
import { impresionHIC058, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat } from "@/formatos/utils";
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

const HIC058 = reactive({
  fecha: "",
  prof_informa: "",
  cod_prof_informa: "",
});

const form = ref({
  prof_informa: {
    id: "prof_informa",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
  cod_prof_informa: {
    id: "cod_prof_informa",
    maxlength: "15",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
});
const opcion_hic058 = ref(null);

onMounted(() => {
  HIC058.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC058));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic058.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC058",
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
    const datos_hic058 = {
      autorizo: opcion_hic058.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      testigo: getTestigo,
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
      ...HIC058,
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
      datos: { ...firmas, cod_consen: "HIC058" },
      content: impresionHIC058({
        datos: datos_hic058,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC058" },
      content: impresionHIC058({
        datos: datos_hic058,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-058` });
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
