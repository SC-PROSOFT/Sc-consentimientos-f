<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="LAB016.opcion_lab016"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="LAB016.opcion_lab016 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="LAB016.opcion_lab016 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="LAB016.opcion_lab016">
              {{ LAB016.opcion_lab016 }}
            </q-chip>
          </p>
        </div>

        <div class="row justify-start">
          <p align="justify">
            Yo, {{ reg_firmador.descrip.trim() }}, mayor de edad identificado(a) con {{ reg_firmador.tipo_id }} No. {{ reg_firmador.cod }} actuando en
            nombre propio o como representante legal de {{ acudiente.descrip }} identificado con el numero de documento {{ acudiente.cod }}.
          </p>
          <p align="justify">Manifiesto que he acudido a una valoración preanestésico en la fecha</p>
          <Input_ v-model="LAB016.fecha_vlrac_preanes" :field="form.fecha_vlrac_preanes" style="margin-top: 3px" />

          <div class="row justify-start">
            <p align="justify">con el Doctor (a)</p>
            <Input_ v-model="LAB016.prof_vlrac_preanes" :field="form.prof_vlrac_preanes" style="margin-top: 3px" :inputStyle="{ width: '697px' }" />
          </div>
          <p align="justify">Habiendo sido atendido(a), interrogado(a) sobre antecedentes y examinado(a).</p>
          <p align="justify">
            Por medio de la presente <strong>AUTORIZO</strong> al doctor (a) {{ getProf.descrip }} y a los asistentes de su elección a realizar en mi
            o en el (la) paciente al cual represento legalmente la realización de la siguiente intervención quirúrgica:
          </p>
          <div class="col-xs-12 q-my-sm">
            <TextArea_ v-model="LAB016.interv_quirurg" :field="form.interv_quirurg" />
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
            Dado en Villavicencio, a los {{ LAB016.fecha_act.split("-")[2] }} días del mes de {{ LAB016.fecha_act.split("-")[1] }} del
            {{ LAB016.fecha_act.split("-")[0] }}
          </p>
        </div>
        <p align="justify">QUIEN BRINDA LA INFORMACIÓN.</p>
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
          :huella_="huella_testigo"
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
        :disable="LAB016.opcion_lab016 ? false : true"
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
import { impresionLAB016, impresion, generarArchivo } from "@/impresiones";
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
const huella_testigo = ref(null);
const huella_acomp = ref(null);
const firma_prof = ref(null);
const LAB016 = reactive({
  //Extras
  opcion_lab016: "",
  fecha_act: "",
  fecha_vlrac_preanes: "",
  prof_vlrac_preanes: "",
  interv_quirurg: "",
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
  fecha_vlrac_preanes: {
    id: "fecha_vlrac_preanes",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  prof_vlrac_preanes: {
    id: "prof_vlrac_preanes",
    maxlength: "50",
    label: "",
    campo_abierto: true,
  },
});

onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  LAB016.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  LAB016.hora_act = dayjs().format("HH:mm");
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
  const requiere = "Complete el siguiente campo";

  if (LAB016.opcion_lab016 == "AUTORIZAR") {
    if (!LAB016.interv_quirurg) return CON851("?", "info", requiere, () => foco_(form, "interv_quirurg"));
  }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(LAB016));
  let llave_paci;
  if (/[A-Za-z]/.test(getPaci.cod)) {
    llave_paci = getPaci.cod.padStart(15, " ");
  } else {
    llave_paci = getPaci.cod + "00000000";
  }
  let datos = {
    nit_entid: nit_usu.value,
    estado: LAB016.opcion_lab016 == "AUTORIZAR" ? "1" : "2",
    llave_fact: getSesion.modulo == "HIC" ? "" : `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    disentimiento: "N",
    llave_consen: getSesion.modulo == "HIC" ? getHc.llave : `${llave_paci}`,
    oper_consen: getSesion.oper,
    cod_consen: getSesion.modulo == "HIC" ? "HIC047" : "LAB016",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 32);
        LAB016.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
  const datos_lab016 = {
    autorizo: LAB016.opcion_lab016 == "AUTORIZAR" ? true : false,
    empresa: getEmpresa,
    testigo: getTestigo,
    paciente: getPaci,
    prof: getProf,
    acomp: getAcomp,
    cod_consen: "LAB016",
    fecha: LAB016.fecha_act,
    firmas: {
      firma_paci: firma_recibida.value ? true : false,
      huella_paci: huella_paci.value ? true : false,
      huella_testigo: huella_testigo.value ? true : false,
      firma_acomp: firma_recibida_acomp.value ? true : false,
      firma_prof: firma_prof.value ? true : false,
      firma_test: firma_recibida_test.value ? true : false,
    },
    paren_acomp: getSesion.paren_acomp,
    ...LAB016,
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
    content: impresionLAB016({
      datos: datos_lab016,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionLAB016({
      datos: datos_lab016,
    }),
  });
  let nomb_consen = getSesion.modulo == "HIC" ? "HIC-047" : "LAB-016";
  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-${nomb_consen}` });
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
