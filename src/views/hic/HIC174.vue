<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="HIC174.opcion_hic174"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="HIC174.opcion_hic174 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="HIC174.opcion_hic174 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="HIC174.opcion_hic174">
              {{ HIC174.opcion_hic174 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <p>
            <span class="text-bold">Tauramena, fecha:&nbsp;</span>
            <span>{{ HIC174.fecha }}</span>
          </p>
          <p>
            <span class="text-bold">Hora:&nbsp;</span>
            <span>{{ HIC174.hora }}</span>
          </p>
        </div>
        <div class="row">
          <p class="text-justify">
            <!-- Autoriza paciente -->
            <span v-if="!getAcomp.cod" class="text-justify q-pa-xs">
              Yo, <span class="text-bold">{{ getPaci.descrip }}</span> identificado(a) con
              <span class="text-bold">{{ getPaci.tipo_id }} </span>&nbsp;<span class="text-bold">{{ getPaci.cod.trim() }}</span> expedida
              en&nbsp;<span class="text-bold">{{ getPaci.descrip_ciudad.trim() }}</span> actuando en nombre propio,
            </span>

            <!-- Autoriza acompañante -->
            <span v-if="getAcomp.cod" class="text-justify q-pa-xs">
              Yo, <span class="text-bold">{{ getAcomp.descrip.trim() }}</span
              >, identifcado(a) con <span class="text-bold">{{ getAcomp.tipo_id }} </span>&nbsp;<span class="text-bold">{{ getAcomp.cod }}</span
              >, expedida en <span class="text-bold">{{ getAcomp.descrip_ciudad }}</span> actuando como acudiente del paciente&nbsp;<span
                class="text-bold"
                >{{ getPaci.descrip.trim() }},</span
              >&nbsp; identifcado(a) con&nbsp;<span class="text-bold">{{ getPaci.tipo_id }} </span>&nbsp;<span class="text-bold"
                >{{ getPaci.cod.trim() }},</span
              >
            </span>

            <!-- Texto autoriza -->
            por medio de la presente y en pleno y normal uso de mis facultades físicas y mentales, otorgo de forma libre y autónoma mi consentimiento
            al Equipo Interdisciplinario, quienes obran como evaluadores para que se lleve a cabo el procedimiento de certificación y registro de
            caracterización de personas con discapacidad, del mismo modo se me ha informado que este equipo cuenta con personal idóneo, competente y
            capacitado para realizar la valoración clínica multidisciplinario simultánea, fundamentado en la clasificación internacional del
            funcionamiento de la discapacidad y de la salud (CIF), que permite establecer la existencia de discapacidad a partir de la identificación
            de las deficiencias en funciones y estructuras corporales incluyendo las psicológicas, las limitaciones en la actividad y las
            restricciones en la participación que presenta una persona. Doy constancia de que se me ha explicado en lenguaje sencillo y claro,
            teniendo en cuenta los ajustes razonables para llevar a cabo el consentimiento informado (barreras comunicacionales, actitudinales o
            físicas), entendible para mí, los aspectos relacionados con mi condición actual, los riesgos y beneficios, se me ha permitido hacer todas
            las preguntas necesarias y han sido resueltas satisfactoriamente.
          </p>
          <p class="text-justify">
            Me han explicado la naturaleza y el propósito de esta certificación, donde la información que de este se derive y sus resultados se
            registraran en el “Registro de Localización y caracterización de personas con Discapacidad” y que será utilizada para apoyar la
            formulación, implementación y seguimiento de políticas públicas, planes, programas, y proyectos, orientados a la garantía de los derechos
            de las personas con discapacidad, como medio de verificación de la existencia de discapacidad o priorización para programas sociales y
            para el re direccionamiento a la oferta programática institucional.
          </p>
          <p class="text-justify">
            Me han explicado que de no estar de acuerdo con el resultado del procedimiento obtenido de la certificación de discapacidad, se podrá
            solicitar una segunda opinión por una (1) única vez en cualquier tiempo, solicitando a la secretaria de salud municipal para que genere la
            orden para realizar el nuevo procedimiento de certificación de discapacidad con un equipo interdisciplinario diferente y la IPS asignara
            la cita.
          </p>
          <p class="text-justify">
            Me han explicado que la actualización del certificado según el artículo 12 de la resolución 1239 del 21 de julio de 2022 se podrá realizar
            cuando:
          </p>
        </div>
        <ul>
          <li>Cuando el menor de edad cumpla seis (6) años.</li>
          <li>Cuando el menor de edad cumpla dieciocho (18) años.</li>
          <li>
            Cuando el criterio médico tratante se modifiquen las deficiencias corporales, limitaciones en las actividades o restricciones en la
            participación, por efecto de la evolución positiva o negativa de la condición de salud.
          </li>
        </ul>
        <p class="text-justify">
          Se me ha explicado que la ruta mediante la cual se puede acceder al certificado de discapacidad es ingresando al Sistema integrado de
          información de la protección social SISPRO.
        </p>
        <p class="text-justify">
          Me han explicado también que, de negarme a realizarme la valoración y el procedimiento de certificación, estoy asumiendo la responsabilidad
          por sus consecuencias como de no hacer parte de la localización y caracterización de las personas con discapacidad sin contar con los
          beneficios que de ello se deriven, con lo que exonero de ellas al equipo interdisciplinario y a la institución (IPS), sin embargo, ello no
          significa que pierda mis derechos para una atención posterior. Por lo tanto, en forma consciente y voluntaria, sin haber sido objeto de
          coacción, persuasión, ni manipulación:
        </p>

        <div v-if="HIC174.opcion_hic174 == 'AUTORIZAR'" class="row">
          <p class="text-justify">
            <span class="text-bold" style="text-decoration: underline">AUTORIZO</span> al equipo interdisciplinario de la IPS ESE HOSPITAL LOCAL DE
            TAURAMENA, para realizar la valoración para la certificación y el procedimiento que requiere la caracterización y localización de la
            persona con discapacidad.
          </p>
        </div>
        <div v-if="HIC174.opcion_hic174 == 'REVOCAR'">
          <p class="text-justify">
            Expreso mi voluntad de <span class="text-bold" style="text-decoration: underline">REVOCAR</span> el consentimiento presentado y declaro
            por tanto que, tras la información recibida, no consiento someterme a la valoración para la certificación, localización y caracterización
            de personas con discapacidad por los siguientes motivos:
          </p>
          <TextArea_ v-model="HIC174.motivo_revoca" :field="form.motivo_revoca" />
        </div>
        <div class="row">
          <p class="text-justify">
            Este consentimiento informado es asistido <q-radio color="primary" left-label v-model="HIC174.conse_asist" val="S" label="SI" />donde se
            utilizaron acciones como:
          </p>
          <Input_ class="col-xs-12" v-model="HIC174.acciones" :field="form.acciones" />
          <p class="text-justify">
            con el fin de proteger la expresión de la voluntad de la persona con discapacidad. Este consentimiento informado
            <q-radio color="primary" left-label v-model="HIC174.conse_asist" val="N" label="NO" />es asistido.
          </p>
        </div>
        <p><span class="text-bold">RECIBI CERTIFICADO DE DISCAPACIDAD EN FISICO A CONFORMIDAD.</span></p>
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
        :disable="HIC174.opcion_hic174 ? false : true"
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
import { impresionHIC174, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/ContainerFirma.vue"));

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getProf, getEmpresa, getHc, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const huella_acomp = ref(null);
const firma_prof = ref(null);
const HIC174 = reactive({
  opcion_hic174: "",
  motivo_revoca: "",
  conse_asist: "",
  acciones: "",
  fecha: "",
});
const form = ref({
  acciones: {
    id: "acciones",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
  motivo_revoca: {
    id: "motivo_revoca",
    maxlength: "500",
    label: "",
    rows: 5,
    campo_abierto: true,
  },
});
onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  HIC174.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC174.hora = dayjs().format("hh:mm");
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
  const datos_format = JSON.parse(JSON.stringify(HIC174));

  let datos = {
    nit_entid: nit_usu.value,
    estado: HIC174.opcion_hic174 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC174",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 32);
        HIC174.fecha = dayjs(fecha).format("YYYY-MM-DD");
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
  const datos_hic174 = {
    autorizo: HIC174.opcion_hic174 == "AUTORIZAR" ? true : false,
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
    ...HIC174,
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
    content: impresionHIC174({
      datos: datos_hic174,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionHIC174({
      datos: datos_hic174,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-174` });
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
