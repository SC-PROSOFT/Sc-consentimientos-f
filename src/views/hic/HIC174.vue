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
              <span class="text-bold">{{ getPaci.tipo_id }} </span>&nbsp;<span class="text-bold">{{ getPaci.cod.trim() }}</span> expedido
              en&nbsp;<span class="text-bold">{{ getPaci.descrip_ciudad.trim() }},</span> domiciliado en
              <span class="text-bold">{{ getPaci.descrip_ciudad.trim() }}.</span>
            </span>

            <!-- Autoriza acompañante -->
            <span v-if="getAcomp.cod" class="text-justify q-pa-xs">
              Yo, <span class="text-bold">{{ getAcomp.descrip.trim() }}</span
              >, identifcado(a) con <span class="text-bold">{{ getAcomp.tipo_id }} </span>&nbsp;<span class="text-bold">{{ getAcomp.cod }}</span
              >, expedida en <span class="text-bold">{{ getAcomp.descrip_ciudad.trim() }},</span> en calidad de familiar y/o acompañante responsable
              del paciente&nbsp;<span class="text-bold">{{ getPaci.descrip.trim() }},</span>&nbsp; identifcado(a) con&nbsp;<span class="text-bold"
                >{{ getPaci.tipo_id }} </span
              >&nbsp;<span class="text-bold">{{ getPaci.cod.trim() }}.</span>
            </span>
          </p>

          <span class="text-bold">Autorizo la realización del procedimiento:</span>
          <div class="col-xs-12">
            <TextArea_ v-model="HIC174.procedimiento" :field="form.procedimiento" />
          </div>

          <div class="col-xs-12">
            <span class="text-bold">DECLARO:</span>
          </div>
          <div class="row">
            <div class="row">
              <p>Que el profesional de la salud:</p>
              <Input_ class="q-ma-xs" v-model="HIC174.nomb_prof" :field="form.nomb_prof" :inputStyle="{ width: '385px' }" />
            </div>
            <div class="row">
              <p>con documento N°:</p>
              <Input_ class="q-ma-xs" v-model="HIC174.nro_id_prof" :field="form.nro_id_prof" :inputStyle="{ width: '285px' }" />
            </div>
            <div class="row">
              <p>me explico en que consiste el procedimiento de:</p>
              <Input_ class="q-ma-xs" v-model="HIC174.procedimiento2" :field="form.procedimiento2" :inputStyle="{ width: '718px' }" />
            </div>
            <p>
              que se me va a realizar, como me voy a beneficiar con la realización del mismo, los riesgos de hacerme y de no hacerme el procedimiento,
              además de las posibles complicaciones:
            </p>
            <Input_ class="col-xs-12" v-model="HIC174.complicaciones" :field="form.complicaciones" />
            <p>Inherentes al procedimiento.</p>
          </div>

          <p class="text-justify">
            <span class="text-bold">Posibles complicaciones según algunos procedimientos:</span>
            En entubación orotraqueal (fallas en la entubación, neumotórax). Suturas (cicatrices, procesos infecciosos en el sitio, no cierre de la
            herida, sangrado, hematoma). En procedimientos menores o pequeñas cirugías (se puede presentar sangrado, infecciones, hematomas, cicatriz,
            complicaciones o eventos adversos ocasionados por anestésicos locales). Con el suministro de sueros antiofídicos y tetánicos puede
            ocasionar alergias. Además que existen otros riesgos y molestias del tratamiento muy poco frecuentes, pero que pueden ser graves e incluso
            fatales.
          </p>
          <p class="text-justify">
            En consecuencia, el equipo médico de la E.S.E hospital Loca de Tauramena, queda expresamente autorizado a desplegar las conductas
            requeridas en caso de presentarse una situación imprevista, que todos los espacios en blanco han sido completados antes de mi firma, con
            las respectiva explicación de riesgos y beneficios.
          </p>
          <p class="text-justify">
            También me han informado de mi derecho a rechazar el tratamiento o revocar este consentimiento. Autorizo la presencia de estudiantes de
            medicina o áreas de la salud y especialistas en formación.
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
  fecha: "",
  opcion_hic174: "",
  procedimiento: "",
  procedimiento2: "",
  complicaciones: "",
  nomb_prof: "",
  nro_id_prof: "",
});
const form = ref({
  complicaciones: {
    id: "complicaciones",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
  nro_id_prof: {
    id: "nro_id_prof",
    maxlength: "10",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  nomb_prof: {
    id: "nomb_prof",
    maxlength: "100",
    label: "",
    campo_abierto: true,
  },
  procedimiento: {
    id: "procedimiento",
    maxlength: "500",
    label: "",
    rows: 3,
    campo_abierto: true,
  },
  procedimiento2: {
    id: "procedimiento2",
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
