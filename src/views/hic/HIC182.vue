<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="HIC182.opcion_hic182"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="HIC182.opcion_hic182 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="HIC182.opcion_hic182 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="HIC182.opcion_hic182">
              {{ HIC182.opcion_hic182 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <p>
            <span class="text-bold">Fecha:&nbsp;</span>
            <span>{{ HIC182.fecha }}</span>
          </p>
          <p>
            <span class="text-bold">Hora:&nbsp;</span>
            <span>{{ HIC182.hora }}</span>
          </p>
        </div>
        <div class="row">
          <p class="text-justify">
            <!-- Autoriza paciente -->
            <span v-if="!getAcomp.cod" class="text-justify q-pa-xs">
              Yo, <span class="text-bold">{{ getPaci.descrip }}</span> con identificación&nbsp;
              <span class="text-bold">{{ getPaci.tipo_id }} </span>&nbsp;<span class="text-bold">{{ getPaci.cod.trim() }}</span> de&nbsp;<span
                class="text-bold"
                >{{ getPaci.descrip_ciudad.trim() }},
              </span>
            </span>

            <!-- Autoriza acompañante -->
            <span v-if="getAcomp.cod" class="text-justify q-pa-xs">
              Yo, <span class="text-bold">{{ getAcomp.descrip.trim() }}</span
              >, con identificación&nbsp;<span class="text-bold">{{ getAcomp.tipo_id }} </span>&nbsp;<span class="text-bold">{{ getAcomp.cod }}</span
              >, de <span class="text-bold">{{ getAcomp.descrip_ciudad.trim() }},</span>
            </span>
            <!--  -->
            actuando en calidad abajo indicada, por medio del presente documento manifiesto:
          </p>
          <p class="text-justify">
            Que de manera detallada el profesional de la salud me ha explicado con lenguaje sencillo, claro, completo y suficiente sobre la naturaleza
            de la enfermedad, acerca del significado de caso sospechoso o confirmado del coronavirus COVID-19 en cuanto a su presentación clínica,
            modo de contagio, medidas para contenerla, posibilidad de sufrir la enfermedad, complicaciones o muerte y se me ha suministrado
            información completa sobre el procedimiento que se va a realizar para la toma de muestra, el riesgo y el beneficio de la prueba.
          </p>
          <p class="text-justify">
            Entiendo que para el diagnóstico de Covid - 19 se realizan pruebas moleculares como RT - PCR y Pruebas de detección de Antígeno que es una
            prueba diagnóstica alternativa para la infección por SARS-CoV-2.
          </p>
          <p class="text-justify">
            He podido hacer las preguntas relacionadas con dicha enfermedad y me han respondido en forma satisfactoria. Certifico que este
            consentimiento me ha sido explicado en su totalidad, que lo he leído o me lo han leído y que entiendo perfectamente su contenido.
          </p>
          <p class="text-justify">
            Tras haberse cumplido lo anterior, atendiendo el estricto cumplimiento de las normas de la entidad, doy mi consentimiento para realizar la
            toma de muestra.
          </p>
        </div>
        <p><span class="text-bold">CALIDAD EN LA QUE SE OTORGA ESTE CONSENTIMIENTO:</span></p>
        <div class="col">
          <div class="row">
            <q-radio color="primary" v-model="HIC182.calidad_consent" val="A" label="Prueba RT-PCR de SARS CoV-2 de hisopado nasofaríngeo." />
          </div>
          <div class="row">
            <q-radio color="primary" v-model="HIC182.calidad_consent" val="B" label="Prueba Rápida para detección de Antígenos de SARS-CoV-2." />
          </div>
        </div>

        <div class="col q-mt-lg">
          <div class="row">
            <q-radio color="primary" v-model="HIC182.otorga_consent" val="PAC" left-label label="Como paciente:" disable />
          </div>
          <div class="row">
            <q-radio
              color="primary"
              v-model="HIC182.otorga_consent"
              val="RESP"
              left-label
              label="Como responsable del paciente (representante legal, familiar o responsable):"
              disable
            />
          </div>
          <p>
            Nombre responsable del paciente:
            <span class="text-bold">{{ getAcomp.descrip }} </span>
          </p>
          <p>
            Nº de Documento:
            <span class="text-bold">{{ getAcomp.tipo_id }} &nbsp; {{ getAcomp.cod }} </span>
          </p>
        </div>
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
        :disable="HIC182.opcion_hic182 ? false : true"
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
import { impresionHIC182, impresion, generarArchivo } from "@/impresiones";
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
const HIC182 = reactive({
  opcion_hic182: "",
  calidad_consent: "",
  otorga_consent: "",
  fecha: "",
});

onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  HIC182.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC182.hora = dayjs().format("hh:mm");
  HIC182.otorga_consent = getAcomp.cod ? "RESP" : "PAC";
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
  const datos_format = JSON.parse(JSON.stringify(HIC182));

  let datos = {
    nit_entid: nit_usu.value,
    estado: HIC182.opcion_hic182 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC182",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 32);
        HIC182.fecha = dayjs(fecha).format("YYYY-MM-DD");
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
  const datos_hic182 = {
    autorizo: HIC182.opcion_hic182 == "AUTORIZAR" ? true : false,
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
    ...HIC182,
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
    content: impresionHIC182({
      datos: datos_hic182,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionHIC182({
      datos: datos_hic182,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-182` });
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
