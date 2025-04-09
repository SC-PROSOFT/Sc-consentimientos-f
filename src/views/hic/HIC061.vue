<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic061"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic061 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic061 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic061">
              {{ opcion_hic061 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p>Fecha:&nbsp;</p>
          <p>{{ HIC061.fecha }}</p>
        </div>
        <div v-if="!getAcomp.descrip">
          <p style="text-align: justify">
            Yo <span class="text-bold">{{ getPaci.descrip }}</span> identificado(a) con <span class="text-bold">{{ getPaci.tipo_id }}</span> N°.
            <span class="text-bold">{{ getPaci.cod }}</span
            >, con residencia en <span class="text-bold">{{ getPaci.direccion }}</span
            >, número de teléfono <span class="text-bold">{{ getPaci.telefono }}</span>
            , manifiesto a ustedes mi aceptación del proceso de consulta por psicología ofrecido por la E.S.E Primer Nivel Granada Salud, reconociendo
            que me han explicado y he comprendido las condiciones generales de la atención, por lo cual, pongo en conocimiento que mi asistencia es
            voluntaria y hace parte de mi proceso de recuperación y bienestar emocional.
          </p>

          <p style="text-align: justify">
            Entiendo que toda la información obtenida y resultados referentes a mi procedimiento, serán tratados bajo confidencialidad y anonimato,
            como lo dicta el código Deontológico y Bioético y otras disposiciones, no será divulgada ni entregada sin mi consentimiento expreso,
            excepto cuando la orden de entrega provenga de una autoridad judicial competente (conforme al artículo 25 de la Ley 1090 de 2006). También
            entiendo y por lo tanto estoy de acuerdo con la necesidad de quebrantar este principio de confidencialidad en caso de presentarse
            situaciones que pongan en grave peligro mi integridad física o mental o de algún miembro de la comunidad. (Ley 1090 de 2006).
          </p>

          <p style="text-align: justify">
            Autorizo al psicólogo profesional a cargo de mi proceso para que consulte mi situación con otros profesionales de la E.S.E Primer Nivel
            Granada o terceros expertos para brindar la mejor atención posible. Reconozco que la información que le brindo al profesional es verdadera
            y corresponde a mi realidad, ya que sobre dicha información se plantean las propuestas de la orientación. También reconozco que la
            decisión de continuar o suspender las consultas por psicología y las actividades programadas, son tomadas por mí. La orientación
            psicológica requiere mi compromiso, asistencia, puntualidad, participación, además de mi colaboración al diligenciar registros,
            documentos, pruebas con información personal que será utilizada por el profesional para el proceso de consulta por psicología.
          </p>
          <p style="text-align: justify">He leído, comprendido y accedido de manera voluntaria a lo anterior mencionado.</p>
        </div>
        <div v-if="getAcomp.descrip">
          <p style="text-align: justify">
            Yo <span class="text-bold">{{ getAcomp.descrip }}</span> identificado(a) con <span class="text-bold">{{ getAcomp.tipo_id }}</span> N°.
            <span class="text-bold">{{ getAcomp.cod }}</span
            >, con residencia en <span class="text-bold">{{ getAcomp.direccion }}</span
            >, número de teléfono <span class="text-bold">{{ getAcomp.telefono }}</span> , obrando en calidad de representante legal del (la) menor
            <span class="text-bold">{{ getPaci.descrip }}</span> Identificado(a) con <span class="text-bold">{{ getPaci.tipo_id }}</span> N°.
            <span class="text-bold">{{ getPaci.cod }}</span> expedida en <span class="text-bold">{{ getPaci.descrip_ciudad }}</span> manifiesto a
            ustedes que se me ha informado del proceso de consulta por psicología ofrecido por la E.S.E Primer Nivel Granada Salud, reconociendo que
            me han explicado y he comprendido las condiciones generales de la atención, por lo cual, pongo en conocimiento que la asistencia de mi
            hijo/hoja es voluntaria y hace parte de su proceso de recuperación y bienestar emocional.
          </p>
          <p style="text-align: justify">
            Entiendo que toda la información obtenida y resultados referentes al procedimiento, serán tratados bajo confidencialidad y anonimato, como
            lo dicta el código Deontológico y Bioético y otras disposiciones, no será divulgada ni entregada sin mi consentimiento expreso, excepto
            cuando la orden de entrega provenga de una autoridad judicial competente (conforme al artículo 25 de la Ley 1090 de 2006). También
            entiendo y por lo tanto estoy de acuerdo con la necesidad de quebrantar este principio de confidencialidad en caso de presentarse
            situaciones que pongan en grave peligro mi integridad física o mental o de algún miembro de la comunidad. (Ley 1090 de 2006).
          </p>
          <p style="text-align: justify">
            Autorizamos al psicólogo profesional a cargo del proceso para que consulte la situación con otros profesionales de la E.S.E Primer Nivel
            Granada o terceros expertos para brindar la mejor atención posible. Reconocemos que la información que se le brindo al profesional es
            verdadera y corresponde a mi realidad, ya que sobre dicha información se plantean las propuestas de la orientación. También reconocemos
            que la decisión de continuar o suspender las consultas por psicología y las actividades programadas, son tomadas por nosotros. La
            orientación psicológica requiere mi compromiso, asistencia, puntualidad, participación, además de mi colaboración al diligenciar
            registros, documentos, pruebas con información personal que será utilizada por el profesional para el proceso de consulta por psicología.
          </p>
          <p style="text-align: justify">
            Para conocer su respuesta ante esta consulta individual, es necesario que por favor conteste lo siguiente:
          </p>
          <div class="row">
            <div class="text-center row">
              <p style="text-align: justify">
                Autorizo
                <q-radio disabled color="primary" v-model="autoriza" val="S" label="SI" />
                <q-radio disabled color="primary" v-model="autoriza" val="N" label="NO" />
                para desarrollar la asesoría individual por psicología con mi hijo/hija, conozco y comprendo el propósito de esta.
              </p>
            </div>
          </div>
          <p style="text-align: justify">He leído, comprendido y accedido de manera voluntaria a lo anterior mencionado.</p>
        </div>
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
        :disable="opcion_hic061 ? false : true"
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
import { impresionHIC061, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive, computed } from "vue";
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

const HIC061 = reactive({
  fecha: "",
  hora_act: "",
  exam_fluj_vaginal: "N",
  citolog_vaginal: "N",
});

const opcion_hic061 = ref(null);
const autoriza = computed(() => {
  switch (opcion_hic061.value) {
    case "AUTORIZAR":
      return "S";
    case "REVOCAR":
      return "N";
    default:
      return "";
  }
});
onMounted(() => {
  HIC061.fecha = dayjs(getEmpresa.fecha).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC061));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic061.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC061",
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
    const datos_hic061 = {
      autorizo: opcion_hic061.value == "AUTORIZAR" ? true : false,
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
        firma_test: firma_recibida_test.value ? true : false,
      },
      ...HIC061,
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
      datos: { ...firmas, cod_consen: "HIC061" },
      content: impresionHIC061({
        datos: datos_hic061,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC061" },
      content: impresionHIC061({
        datos: datos_hic061,
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
