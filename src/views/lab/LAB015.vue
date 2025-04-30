<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="LAB015.opcion_lab015"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="LAB015.opcion_lab015 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="LAB015.opcion_lab015 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="LAB015.opcion_lab015">
              {{ LAB015.opcion_lab015 }}
            </q-chip>
          </p>
        </div>

        <div class="row justify-start">
          <p align="justify">
            Yo, {{ reg_firmador.descrip.trim() }}, mayor de edad identificado con C.C. {{ reg_firmador.cod }} actuando en nombre propio o como
            representante legal {{ acudiente.descrip }} identificado con el numero de documento {{ acudiente.cod }}. Manifiesto que he acudido a una
            valoración con el Doctor (a) {{ getProf.descrip }}, habiendo sido atendido (a) e interrogado (a) sobre antecedentes, examinando (a),
            orientado (a) en diagnósticos y tratamientos.
          </p>
          <p align="justify">
            Por medio de la presente <strong>AUTORIZO</strong> al doctor (a) {{ getProf.descrip }} y a los asistentes de su elección a realizar en mi
            o en el (la) paciente al cual represento legalmente la realización de la siguiente intervención quirúrgica:
          </p>
          <div class="col-xs-12 q-my-sm">
            <TextArea_ v-model="LAB015.interv_quirurg" :field="form.interv_quirurg" />
          </div>
          <p align="justify">
            El Doctor(a) me ha explicado la naturaleza y propósito del acto quirúrgico, también me ha informado de los riegos y complicaciones
            previstas, tales como inflamación, infección, pequeñas deformidades, desviaciones, cicatrices, manchas, pigmentaciones de la cicatriz,
            colección de líquidos debajo de la piel, hematomas, asimetrías, alteraciones sensitivas y motoras por compromiso de ramas nerviosas en la
            zona intervenida, contractura capsular o rechazo por el uso de prótesis, dehiscencia de la herida quirúrgica o alteraciones de la
            cicatriz; hasta problemas mayores: sufrimiento de piel, cardiovasculares, pulmonares, embolismo graso, trombo embolismo, e imponderables,
            ósea de difícil o imposible predicción, por razón misma del procedimiento quirúrgico o anestésico, que pueden incluir la pérdida del
            órgano e incluso la muerte.
          </p>
          <p align="justify">
            Teniendo en cuenta lo arriba anotado se me ha explicado cada uno de los puntos y se me ha dado la oportunidad de hacer todas las preguntas
            necesarias y han sido contestadas satisfactoriamente mis dudas, procedo a otorgar autorización, para la realización de dicho procedimiento
            o procedimientos quirúrgicos al médico tratante así mismo asumo los riesgos adversos del mismo, generados por el cumplimiento de un riesgo
            o consecuencia prevista.
          </p>
          <p align="justify">
            Entiendo que en el curso de los procedimientos quirúrgicos puedan presentarse situaciones imprevistas que requieran procedimientos
            adicionales. Por lo tanto, autorizo la realización de estos procedimientos si el médico arriba mencionado o los asistentes los juzgan
            necesarios.
          </p>
          <p align="justify">
            Soy consciente que no se me ha garantizado los resultados que se esperan del procedimiento, advirtiendo que el cirujano realizará las
            intervenciones necesarias con la mayor diligencia, prudencia y pondrá a disposición toda su pericia y cuidado para el buen resultado de
            este, de la misma manera me comprometo a cumplir fielmente con todas sus recomendaciones, toma de medicamentos e instrucciones.
          </p>
          <p align="justify">
            Certifico que he leído y comprendido perfectamente lo anterior y todos los espacios en blanco han sido completados antes de mi firma y me
            encuentro en capacidad de expresar mi libre albedrio.
          </p>
          <p align="justify">
            Dado en Villavicencio, a los {{ LAB015.fecha_act.split("-")[2] }} días del mes de {{ LAB015.fecha_act.split("-")[1] }} del
            {{ LAB015.fecha_act.split("-")[0] }}.
          </p>
        </div>
        <p align="justify">QUIEN BRINDA LA INFORMACION.</p>
        <p align="justify">
          Certifica que ha explicado los posibles riesgos de anestesia y que el paciente, pariente o tutor han comprendido completamente lo que ha
          explicado.
        </p>
      </q-card-section>
    </q-form>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around q-mt-lg">
        <ContainerFirma
          :quien_firma="getAcomp.cod ? 'FIRMA ACOMPAÑANTE' : 'FIRMA PACIENTE'"
          :firmador="getAcomp.cod ? getAcomp.descrip : getPaci.descrip"
          :registro_profe="getAcomp.cod ? getAcomp.cod : getPaci.cod"
          @reciFirma="callBackFirma"
          :huella_="getAcomp.cod == '' ? huella_paci : ''"
          :tipo_doc="getAcomp.cod ? getAcomp.tipo_id : getPaci.tipo_id"
          class="col-4"
        />

        <ContainerFirma
          quien_firma="FIRMA TESTIGO"
          @reciFirma="callBackFirmaTest"
          :firmador="getTestigo.descrip"
          :descrip_prof="getTestigo.descrip_atiende"
          :registro_profe="getTestigo.cod"
          :codigo_firma="getTestigo.cod"
          :tipo_doc="getTestigo.tipo_id"
          class="col-4"
        />
        <ContainerFirma
          quien_firma="QUIEN BRINDA LA INFORMACIÓN"
          @reciFirma="callBackFirmaProf"
          :firma_="firma_prof"
          :codigo_firma="getProf.cod"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.registro_profe"
          class="col-4"
        />
      </div>
    </q-card-actions>
    <div class="row justify-center q-my-lg">
      <q-btn
        :disable="LAB015.opcion_lab015 ? false : true"
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
import { impresionLAB015, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/ContainerFirma.vue"));

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getProf, getEmpresa, getHc, getSesion, getTestigo } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const reg_firmador = ref(getAcomp.cod.trim() != "" ? getAcomp : getPaci);
const acudiente = ref(getAcomp.cod ? getPaci : "");
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const firma_recibida_acomp = ref("");
const firma_recibida_test = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const huella_acomp = ref(null);
const firma_prof = ref(null);
const LAB015 = reactive({
  //Extras
  opcion_lab015: "",
  interv_quirurg: "",
  fecha_act: "",
  llave: "",
});
const form = ref({
  interv_quirurg: {
    id: "interv_quirurg",
    maxlength: "500",
    label: "",
    rows: 3,
    campo_abierto: true,
  },
});

onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  LAB015.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  LAB015.hora_act = dayjs().format("HH:mm");
};

const getFirmaProf = async () => {
  try {
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
    huella_acomp.value = await _getHuella$({ codigo: getAcomp.cod });
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = async () => {
  const requiere = "Complete el siguiente campo";

  if (LAB015.opcion_lab015 == "AUTORIZAR") {
    if (!LAB015.interv_quirurg) return CON851("?", "info", requiere, () => foco_(form, "interv_quirurg"));
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(LAB015));
  let llave_paci;
  console.log("getPaci.cod ", getPaci.cod);

  if (/[A-Za-z]/.test(getPaci.cod)) {
    llave_paci = getPaci.cod.padStart(15, " ");
  } else {
    llave_paci = getPaci.cod + "00000000";
  }
  let datos = {
    nit_entid: nit_usu.value,
    estado: LAB015.opcion_lab015 == "AUTORIZAR" ? "1" : "2",
    llave_fact: getSesion.modulo == "HIC" ? "" : `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    disentimiento: "N",
    // llave_consen: llave_paci,
    llave_consen: getSesion.modulo == "HIC" ? getHc.llave : `${llave_paci}`,
    oper_consen: getSesion.oper,
    cod_consen: getSesion.modulo == "HIC" ? "HIC046" : "LAB015",
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

        LAB015.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
  const datos_lab015 = {
    autorizo: LAB015.opcion_lab015 == "AUTORIZAR" ? true : false,
    empresa: getEmpresa,
    testigo: getTestigo,
    paciente: getPaci,
    prof: getProf,
    acomp: getAcomp,
    cod_consen: "LAB015",
    fecha: LAB015.fecha_act,
    firmas: {
      firma_paci: firma_recibida.value ? true : false,
      huella_paci: huella_paci.value ? true : false,
      firma_acomp: firma_recibida_acomp.value ? true : false,
      firma_prof: firma_prof.value ? true : false,
      firma_test: firma_recibida_test.value ? true : false,
    },
    paren_acomp: getSesion.paren_acomp,
    ...LAB015,
  };

  const firmas = {
    img_firma_testigo: firma_recibida_test.value,
    img_firma_acomp: firma_recibida_acomp.value,
    img_firma_consen: firma_recibida.value,
    img_firma_paci: firma_recibida.value,
    img_huella_paci: huella_paci.value,
    firma_prof: firma_prof.value,
    img_huella_acomp: huella_acomp.value,
  };

  const docDefinitionPrint = await utilsFormat({
    datos: firmas,
    content: impresionLAB015({
      datos: datos_lab015,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionLAB015({
      datos: datos_lab015,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile });
  return response_impresion;
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
const callBackFirmaTest = (data_firma) => {
  data_firma && (firma_recibida_test.value = data_firma);
};
const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};
const callBackFirmaProf = (data_firma) => {
  data_firma && (firma_prof.value = data_firma);
};
</script>

<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
