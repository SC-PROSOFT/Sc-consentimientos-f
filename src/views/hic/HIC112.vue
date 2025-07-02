<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc112"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc112 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc112 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc112">
              {{ opcion_hc112 }}
            </q-chip>
          </p>
        </div>

        <div class="text-center text-subtitle1 text-bold q-ml-sm q-py-xs">
          (Resolución 3100 de 2019, Resolución 2654 de 2019 y Resolución 465 de 2025)
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-left text-subtitle1 text-bold q-ml-sm q-py-xs">I. DATOS DEL USUARIO</div>
        <ul>
          <li><span class="text-bold"> Nombre del paciente: </span> {{ getPaci.descrip }}</li>
          <li>
            <span class="text-bold">Tipo de documento: </span> {{ getPaci.tipo_id }} <span class="text-bold">No. </span>
            {{ getPaci.cod }}
          </li>
          <li>
            <span class="text-bold">Edad: </span> {{ calcularEdad(getPaci.nacim) }} <span class="text-bold">Sexo: </span>
            {{ getPaci.sexo }}
          </li>
          <li><span class="text-bold">EPS: </span> {{ getPaci.descrip_eps }}</li>
          <li><span class="text-bold">Nombre del acudiente: </span> {{ getAcomp.descrip }}</li>
          <li><span class="text-bold">Parentesco: </span> {{ evaluarParentesco(getSesion.paren_acomp) }}</li>
          <li>
            <span class="text-bold">Teléfono de contacto: </span> {{ getPaci.telefono }} <span class="text-bold">Correo de contacto: </span>
            {{ getPaci.email }}
          </li>
          <li><span class="text-bold">Fecha: </span> {{ HIC112.fecha }}</li>
        </ul>
        <div class="row">
          <div class="row">
            <p class="q-mt-md">La edad y estado de conciencia del paciente permiten firmar este documento:</p>
            <q-radio disable color="primary" v-model="HIC112.paci_firma" val="S" label="SI" />
            <q-radio disable color="primary" v-model="HIC112.paci_firma" val="N" label="NO" />
          </div>
        </div>
        <div class="text-left text-subtitle1 text-bold q-ml-sm q-py-xs">Diagnóstico principal:</div>
        <Input_ class="col-10 q-mt-xs" v-model="HIC112.diagnostico_princip" :field="form.diagnostico_princip" />

        <div class="text-left text-subtitle1 text-bold q-mt-xl q-ml-sm q-py-xs">II. INFORMACIÓN GENERAL DEL SERVICIO</div>
        <p class="text-justify">
          La hospitalización en salud mental y/o por consumo de sustancias psicoactivas tiene como objetivo brindar atención integral e
          interdisciplinaria al paciente, en un entorno seguro, estructurado y terapéutico.
        </p>
        <p class="text-justify">
          El servicio está orientado a la estabilización clínica, manejo terapéutico, desintoxicación (cuando aplique), intervención psicosocial y
          preparación para la reintegración social y familiar.
        </p>
        <div class="text-left text-subtitle1 text-bold q-mt-xl q-ml-sm q-py-xs">III. BENEFICIOS ESPERADOS DE LA INTERNACIÓN</div>
        <ul>
          <li>
            <p class="text-justify">Estabilización del estado de salud mental y/o manejo del síndrome de abstinencia.</p>
          </li>
          <li>
            <p class="text-justify">Reducción de riesgos para la vida o integridad del paciente y terceros.</p>
          </li>
          <li>
            <p class="text-justify">Acceso a intervención psicoterapéutica, farmacológica y ocupacional.</p>
          </li>
          <li>
            <p class="text-justify">Trabajo multidisciplinario (psiquiatría, psicología, enfermería, trabajo social, terapia ocupacional).</p>
          </li>
          <li>
            <p class="text-justify">Apoyo y orientación a la familia/acudiente.</p>
          </li>
          <li>
            <p class="text-justify">Plan de tratamiento estructurado y seguimiento individualizado.</p>
          </li>
        </ul>
        <div class="text-left text-subtitle1 text-bold q-mt-xl q-ml-sm q-py-xs">IV. RIESGOS POSIBLES DE LA INTERNACIÓN</div>
        <ul>
          <li>
            <p class="text-justify">Cambios emocionales y comportamentales como parte del proceso terapéutico.</p>
          </li>
          <li>
            <p class="text-justify">Reacciones adversas a medicamentos.</p>
          </li>
          <li>
            <p class="text-justify">Conflictos con otros pacientes u operadores.</p>
          </li>
          <li>
            <p class="text-justify">Riesgo de autolesión o intento de fuga (aunque se implementan medidas preventivas).</p>
          </li>
          <li>
            <p class="text-justify">Interrupción temporal de dinámicas familiares, sociales o académicas.</p>
          </li>
          <li>
            <p class="text-justify">Riesgo de recaída posterior si no se continúa el tratamiento ambulatorio.</p>
          </li>
        </ul>
        <div class="text-left text-subtitle1 text-bold q-mt-xl q-ml-sm q-py-xs">V. SISTEMA DE VIDEOVIGILANCIA</div>
        <p class="text-justify">
          Conforme a lo establecido en la Resolución 465 de 2025, informamos que esta IPS cuenta con un sistema de videovigilancia interna, instalado
          en zonas comunes (pasillos, áreas de recreación, comedores, etc.) con el único propósito de proteger la integridad, seguridad y bienestar de
          los pacientes, del personal y visitantes.
        </p>
        <ul>
          <li>
            <p class="text-justify">No se realizan grabaciones en zonas íntimas (baños, duchas, habitaciones cerradas).</p>
          </li>
          <li>
            <p class="text-justify">
              Las grabaciones se almacenan conforme a la normatividad vigente y solo podrán ser usadas con fines clínicos, legales o por solicitud de
              autoridad competente.
            </p>
          </li>
          <li>
            <p class="text-justify">El paciente y/o acudiente acepta el uso de este sistema en pro del bienestar general.</p>
          </li>
        </ul>
        <div class="text-left text-subtitle1 text-bold q-mt-xl q-ml-sm q-py-xs">VI. DESISTIMIENTO VOLUNTARIO DEL TRATAMIENTO</div>
        <p class="text-justify">
          Se informa que el paciente o su acudiente tienen derecho a retirar el consentimiento en cualquier momento. Sin embargo, en casos donde se
          determine que el retiro del paciente puede representar un riesgo inminente para sí mismo o para otros, y se cuenta con orden de
          hospitalización involuntaria (según lo dispuesto en la ley), se podrán aplicar las medidas contempladas en la legislación colombiana para
          proteger su vida e integridad.
        </p>
        <div class="text-left text-subtitle1 text-bold q-mt-xl q-ml-sm q-py-xs">VII. DECLARACIÓN DE CONSENTIMIENTO</div>
        <p class="text-justify">Declaro que he recibido una explicación clara y comprensible sobre:</p>
        <ul>
          <li>
            <p class="text-justify">El objetivo del servicio de hospitalización, sus beneficios y riesgos.</p>
          </li>
          <li>
            <p class="text-justify">El uso de cámaras de videovigilancia en áreas comunes.</p>
          </li>
          <li>
            <p class="text-justify">Mi derecho a recibir atención digna, segura y libre de tratos crueles o discriminatorios.</p>
          </li>
          <li>
            <p class="text-justify">La posibilidad de retirarme del tratamiento de forma voluntaria (cuando aplique legalmente).</p>
          </li>
        </ul>
        <p class="text-justify">
          Después de haber tenido la oportunidad de realizar preguntas, las cuales fueron resueltas satisfactoriamente, acepto voluntariamente el
          ingreso al servicio de hospitalización en salud mental y/o tratamiento por consumo de sustancias psicoactivas.
        </p>
      </q-card-section>
    </div>
    <q-separator />
    <q-card-actions align="around" class="row">
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

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hc112 ? false : true"
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
import { impresionHIC112, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat, calcularEdad, evaluarParentesco } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const HIC112 = reactive({
  fecha: "",
  paci_firma: "",
  diagnostico_princip: "",
});
const form = ref({
  diagnostico_princip: {
    id: "diagnostico_princip",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
});

const opcion_hc112 = ref(null);

onMounted(() => {
  HIC112.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC112.paci_firma = getSesion.paci_firma;
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
  const datos_format = JSON.parse(JSON.stringify(HIC112));

  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc112.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC112",
    disentimiento: "N",
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC112.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC112));
  try {
    const datos_hic112 = {
      autorizo: opcion_hc112.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      llave: getHc.llave.slice(15),
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      ...datos_format,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC112" },
      content: impresionHIC112({
        datos: datos_hic112,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC112" },
      content: impresionHIC112({
        datos: datos_hic112,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-112` });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
</script>

<style scoped>
.q-radio {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
</style>
