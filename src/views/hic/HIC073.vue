<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic073"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic073 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic073 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic073">
              {{ opcion_hic073 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p style="font-weight: bold">Fecha de asesoria:&nbsp;</p>
          <p>{{ HIC073.fecha }}</p>
        </div>
        <div>
          <p style="text-align: justify">
            Yo <span class="text-bold">{{ getPaci.descrip }}</span>
            , certifico que: He leído (o que se me ha leído) el documento sobre Consentimiento Informado que contiene información sobre el propósito y
            beneficio de la prueba, su interpretación, sus limitaciones y su riesgo, y que entiendo su contenido, incluyendo las limitaciones,
            beneficios y riesgos de la prueba.
          </p>
          <p style="text-align: justify">
            He recibido consejería PRE-PRUEBA (actividad realizada por un profesional de la salud para prepararme y confrontarme con relación a mis
            conocimientos, prácticas y conductas, antes de realizarme las pruebas diagnósticas).
          </p>
          <p style="text-align: justify">
            También certifico que dicha persona me brindó la asesoría y que, según su compromiso, de ella también recibiré una asesoría post-prueba
            (procedimiento mediante el cual me entregarán mis resultados) y que estoy de acuerdo con el proceso.
          </p>
          <p style="text-align: justify">
            Entiendo que la toma de muestra es voluntaria y que puedo retirar mi consentimiento en cualquier momento antes de que me sea tomado el
            examen.
          </p>
          <p style="text-align: justify">Fui informado de las medidas que se tomarán para proteger la confidencialidad de mis resultados.</p>
          <p style="font-weight: bold; text-decoration: underline; margin-top: 10px; margin-left: 10px">
            GESTANTE:
            <q-radio color="primary" v-model="HIC073.gestante" val="S" label="SI" />
            <q-radio color="primary" v-model="HIC073.gestante" val="N" label="NO" />
          </p>
        </div>
        <div>
          <p style="text-align: justify">Nombre: {{ getPaci.descrip }}</p>
        </div>
        <div>
          <p style="text-align: justify">Tipo de identificación: {{ getPaci.tipo_id }}</p>
        </div>
        <div>
          <p style="text-align: justify">Telefono: {{ getPaci.telefono }}</p>
        </div>
        <div>
          <p style="text-align: justify">EPS: {{ getPaci.descrip_eps }}</p>
        </div>
        <div>
          <p style="text-align: justify">Dirección: {{ getPaci.direccion }}</p>
        </div>

        <div class="row q-mt-md">
          <p style="font-weight: bold">FECHA DE TOMA DE MUESTRA:</p>
          <Input_ v-model="HIC073.fecha_toma_muestra" :field="form.fecha_toma_muestra" />
        </div>
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
        :disable="opcion_hic073 ? false : true"
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
import { impresionHIC073, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
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

const HIC073 = reactive({
  fecha: "",
  gestante: "N",
  fecha_toma_muestra: "",
});
const form = ref({
  fecha_toma_muestra: {
    id: "fecha_toma_muestra",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
});

const opcion_hic073 = ref(null);

onMounted(() => {
  HIC073.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC073));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic073.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC073",
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
    const datos_hic072 = {
      autorizo: opcion_hic073.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      testigo: getTestigo,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      ...HIC073,
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
      datos: { ...firmas, cod_consen: "HIC073" },
      content: impresionHIC073({
        datos: datos_hic072,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC073" },
      content: impresionHIC073({
        datos: datos_hic072,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-073` });
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
