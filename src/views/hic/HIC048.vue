<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc048"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc048 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc048 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc048">
              {{ opcion_hc048 }}
            </q-chip>
          </p>
        </div>
        <div>
          <p>
            <span class="text-bold">Fecha:</span>
            {{ dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD") }}
          </p>

          <p style="text-align: justify">
            Yo <span class="text-bold"> {{ getPaci.descrip }},</span> he leído (o que se me ha leído) el documento sobre Consentimiento informado que
            contiene información sobre el propósito y beneficio de la prueba, su interpretación, sus limitaciones y riesgo, y que entiendo su
            contenido, incluyendo las limitaciones, beneficios y riesgos de la prueba.
          </p>

          <p style="text-align: justify">
            He recibido consejería PRE-TEST (actividad realizada por un profesional de salud para prepararme y confrontarme con relación a mis
            conocimientos, prácticas y conductas, antes de realizarme las pruebas diagnósticas).
          </p>
          <p style="text-align: justify">
            También certifico que dicha persona me brindo asesoría y según su compromiso, de ella también recibiré una asesoría posprueba
            (procedimiento mediante el cual me entregaran mis resultados) Y que estoy de acuerdo con el proceso.
          </p>
          <p style="text-align: justify">
            Entiendo que la toma de la muestra voluntaria y que puedo retirar mi consentimiento en cualquier momento antes de que sea tomado el
            examen.
          </p>
          <p style="text-align: justify">Fui informado de las medidas que se tomaran para proteger la confidencialidad de mis resultados.</p>
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
          @reciFirma="callBackFirma"
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.registro_profe"
          quien_firma="FIRMA PROFESIONAL"
          class="col-4"
        />
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hc048 ? false : true"
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
import { impresionHIC048, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { calcularEdad, utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
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

const opcion_hc048 = ref(null);
const HIC048 = reactive({
  fecha_act: "",
});
onMounted(() => {
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
  if (!firma_recibida.value && !getAcomp.cod) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc048.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC048",
    disentimiento: "N",
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC048.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
  try {
    const datos_hic048 = {
      autorizo: opcion_hc048.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
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
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC048" },
      content: impresionHIC048({
        datos: datos_hic048,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC048" },
      content: impresionHIC048({
        datos: datos_hic048,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile });
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
