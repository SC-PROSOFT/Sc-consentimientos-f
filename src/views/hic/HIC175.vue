<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="HIC175.opcion_hic175"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="HIC175.opcion_hic175 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="HIC175.opcion_hic175 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="HIC175.opcion_hic175">
              {{ HIC175.opcion_hic175 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <p>
            <span class="text-bold">Tauramena, fecha:&nbsp;</span>
            <span>{{ HIC175.fecha }}</span>
          </p>
          <p>
            <span class="text-bold">Hora:&nbsp;</span>
            <span>{{ HIC175.hora }}</span>
          </p>
          <p>
            <span class="text-bold">Nombre del paciente:&nbsp;</span>
            <span>{{ getPaci.descrip }}</span>
          </p>
        </div>
        <div class="row justify-between items-center">
          <p>
            <span class="text-bold">Nombre del paciente:&nbsp;</span>
            <span>{{ getPaci.descrip }}</span>
          </p>
          <p>
            <span class="text-bold">Edad:&nbsp;</span>
            <span>{{ calcularEdad(getPaci.nacim) }}</span>
          </p>
        </div>
        <div class="row justify-between items-center">
          <p>
            <span class="text-bold">Identificada con:&nbsp;</span>
            <span>{{ getPaci.tipo_id }}&nbsp;</span>
            <span class="text-bold">Numero:&nbsp;</span>
            <span>{{ getPaci.cod }}</span>
          </p>
          <p>
            <span class="text-bold">Telefono:&nbsp;</span>
            <span>{{ getPaci.telefono }}</span>
          </p>
        </div>
        <div class="row">
          <span class="text-bold"> diagnostico: </span>
          <Input_
            style="min-width: 100px; display: inline-block"
            @validate="datoCodigoEnfermedad"
            v-model="HIC175.diagnostico"
            :field="form.codigo"
          />
          <q-input dense disable type="text" maxlength="4" v-model="descrip_diagnostico" style="min-width: 300px; display: inline-block" />
        </div>

        <ul class="q-mt-lg">
          <li>
            <p class="text-justify">
              Por medio de la presente constancia, en pleno uso de mis facultades mentales, otorgo en forma libre mi consentimiento a la E.S.E
              HOSPITAL LOCAL DE TAURAMENA a que por medio de médico en ejercicio de su profesión, así como por los demás profesionales de la salud que
              se requieran y con el concurso del personal auxiliar de servicios asistenciales lo mismo que del personal en formación, se sirva
              realizarme el procedentico, denominado:
            </p>
          </li>
        </ul>

        <p class="text-justify text-bold">ATENCION HOSPITALARIA DEL TRABAJO DE PARTO Y POST PARTO.</p>
        <p class="text-justify text-bold">Durante la atención puede ser necesario:</p>

        <p class="text-justify">La aplicación de Oxitocina (Pitocín) para la inducción y el manejo activo del trabajo de parto.</p>
        <p class="text-justify">
          La aplicación de Analgesia Epidural para disminuir el dolor ocasionado por las contracciones uterinas La realización de Amniotomía (ruptura
          artificial de las membranas ovulares) como parte del manejo activo del trabajo de parto.
        </p>
        <p class="text-justify">La atención del parto por vía vaginal como primera opción.</p>
        <p class="text-justify">La atención del parto con instrumentos como Fórceps, cuando esté completamente justificada su aplicación.</p>
        <p class="text-justify">
          La aplicación de cualquier medicamento o la realización de los procedimientos que se requieran para tener el resultado deseado.
        </p>

        <ul class="q-mt-lg">
          <li>
            <p class="text-justify">
              La E.S.E HOSPITAL LOCAL DE TAURAMENA CASANARE queda autorizada para llevar a cabo igualmente la práctica de conductas o procedimientos
              médicos adicionales a los ya autorizados, si en el curso de la intervención quirúrgica o del procedimiento llegare a presentarse una
              imprevista que, a juicio del médico tratante, los haga aconsejables.
            </p>
          </li>
          <li>
            <p class="row text-justify">
              El consentimiento y autorización que anteceden, han sido otorgados previa evaluación que de mi estado de salud ha hecho, a nombre de la
              E.S.E HOSPITAL LOCAL DE TAURAMENA CASANARE, el doctor:
              <Input_ v-model="HIC175.nomb_medico" :field="form.nomb_medico" :inputStyle="{ width: '700px' }" />
              con el objeto de identificar mis condiciones clínico – patológicas previa advertencia que, dicho médico me ha hecho ser conocedora, con
              respecto a los riesgos previstos y consecuentes, en los términos en los cuales lo ha consignado en la historia clínica.
            </p>
          </li>
          <li>
            <p class="text-justify">
              Declaro que he sido advertida por la E.S.E HOSPITAL LOCAL DE TAURAMENA CASANARE, en sentido de que la práctica de la atención que
              requiero compromete una ACTIVIDAD MÉDICA DE MEDIOS, PERO NO DE RESULTADOS.
            </p>
          </li>
          <li>
            <p class="text-justify">
              Autorizo expresamente a las personas del equipo de salud hospitalario que tendrán a su cargo mi tratamiento para que me realicen
              terapias y procedimientos ordenados por mi médico tratante.
            </p>
          </li>
          <li>
            <p class="text-justify">
              He sido informada en forma clara acerca de la naturaleza y propósito del tratamiento y de las sustancias y medicamentos involucrados,
              beneficios, complicaciones, efectos secundarios, riesgos o consecuencias que pueden ocurrir por la instauración de dichos tratamientos.
            </p>
          </li>
          <li>
            <p class="text-justify">
              He comprendido el riesgo inherente a los tratamientos y procedimientos practicados por el personal de enfermería bajo las órdenes de mi
              médico tratante.
            </p>
          </li>
          <li>
            <p class="text-justify">Certifico que el presente documento lo he leído y atendido íntegramente.</p>
          </li>
        </ul>
      </q-card-section>
    </q-form>
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
        :disable="HIC175.opcion_hic175 ? false : true"
        @click="validarDatos"
        icon-right="check_circle"
        class="q-mr-lg"
        color="green"
        label="GRABAR"
        type="submit"
      />
    </div>
    <CONSEN800 v-if="show_consen800" @esc="callbackCONSEN800" @enter="callbackCONSEN800" />
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted } from "vue";
import { impresionHIC175, impresion, generarArchivo } from "@/impresiones";
import { calcularEdad, utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/ContainerFirma.vue"));
const CONSEN800 = defineAsyncComponent(() => import("@/components/consen/CONSEN800.vue"));
const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getProf, getEmpresa, getHc, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();
const show_consen800 = ref(false);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const huella_acomp = ref(null);
const firma_prof = ref(null);
const descrip_diagnostico = ref("");
const HIC175 = reactive({
  opcion_hic175: "",
  diagnostico: "",
  nomb_medico: "",
  fecha: "",
});
const form = ref({
  codigo: {
    id: "codigo",
    label: "",
    maxlength: "4",
    f0: ["f8"],
    standout: "N",
    outlined: "N",
    required: true,
    campo_abierto: true,
  },
  nomb_medico: {
    id: "nomb_medico",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
});
onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  HIC175.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC175.hora = dayjs().format("hh:mm");
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
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC175));

  let datos = {
    nit_entid: nit_usu.value,
    estado: HIC175.opcion_hic175 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC175",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 32);
        HIC175.fecha = dayjs(fecha).format("YYYY-MM-DD");
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
  const datos_hic175 = {
    autorizo: HIC175.opcion_hic175 == "AUTORIZAR" ? true : false,
    empresa: getEmpresa,
    paciente: getPaci,
    prof: getProf,
    acomp: getAcomp,
    firmas: {
      firma_paci: firma_recibida.value ? true : false,
      huella_paci: huella_paci.value ? true : false,
      firma_acomp: firma_recibida_acomp.value ? true : false,
      firma_prof: firma_prof.value ? true : false,
    },
    paren_acomp: getSesion.paren_acomp,
    descrip_enfer: descrip_diagnostico.value,
    ...HIC175,
  };

  const firmas = {
    img_firma_acomp: firma_recibida_acomp.value,
    img_firma_consen: firma_recibida.value,
    img_firma_paci: firma_recibida.value,
    img_huella_paci: huella_paci.value,
    firma_prof: firma_prof.value,
    img_huella_acomp: huella_acomp.value,
  };

  const docDefinitionPrint = await utilsFormat({
    datos: firmas,
    content: impresionHIC175({
      datos: datos_hic175,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionHIC175({
      datos: datos_hic175,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-175` });
  return response_impresion;
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
const datoCodigoEnfermedad = async (event) => {
  switch (event) {
    case "f8":
      show_consen800.value = true;
      break;
    case "enter":
      consultarEnfermedad();
      break;
  }
};

const consultarEnfermedad = async () => {
  try {
    const response = await getDll$({
      modulo: `get_enf.dll`,
      data: { llave: "2" + HIC175.diagnostico },
    });
    if (response.llave) {
      descrip_diagnostico.value = response.nombre;
      return;
    }
    return CON851("?", "info", "No existe diagnostico");
  } catch (error) {
    CON851("?", "info", error);
  }
};
const callbackCONSEN800 = (data) => {
  if (data) {
    HIC175.diagnostico = data.cod;
    descrip_diagnostico.value = data.descrip;
  }
  show_consen800.value = false;
};
</script>

<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
