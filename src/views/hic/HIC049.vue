<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc049"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc049 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc049 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc049">
              {{ opcion_hc049 }}
            </q-chip>
          </p>
        </div>

        <div class="border-format">
          <p>
            <span class="text-bold">Fecha:</span>
            {{ dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD") }}
            <span class="text-bold">Hora: </span> {{ HIC049.hora }}&nbsp;
          </p>
          <p><span class="text-bold">Nombre:</span> {{ getPaci.descrip }}&nbsp;</p>
          <p><span class="text-bold">Tipo y numero documento de identificación:</span> {{ getPaci.tipo_id + " " + getPaci.cod }} &nbsp;</p>
        </div>
        <div>
          <p align="justify" class="text-bold" style="padding-top: 16px">SEÑORA USUARIA</p>

          <p style="text-align: justify">
            Es muy importante para nosotros que usted reciba y entienda la información, acerca del examen que fue solicitado por su médico tratante,
            quien determino que este estudio es la alternativa más adecuada con la cual se puede beneficiar, obtener o confirmar el diagnóstico y que
            nosotros con gusto realizaremos, lea con atención y no tema solicitar explicación en caso de duda, para aclarar sus inquietudes y
            responder sus preguntas. A continuación, se mencionan los exámenes que se realizan a partir de muestras ginecológicas, marque con un (✓)
            el procedimiento a realizar.
          </p>

          <div class="row q-mt-md q-mb-md" style="width: 100%">
            <div class="text-center" style="border: 1px solid #ccc; width: 100%">
              <p style="font-weight: bold; margin-top: 10px">DESCRIPCION</p>
            </div>

            <div class="text-center" style="border: 1px solid #ccc; width: 10%">
              <q-checkbox color="primary" keep-color left-label v-model="HIC049.exam_fluj_vaginal" true-value="S" false-value="N" />
            </div>
            <div class="text-left" style="border: 1px solid #ccc; width: 90%">
              <p style="text-align: justify">
                <span class="text-bold">EXAMEN DE FLUJO VAGINAL:</span>
                Se tomará nuestra de la secreción vaginal para examen directo y/o cultivo, previa colocación o no de especulo vaginal (depende del
                caso), muestra se toma con ayuda de un aplicador.
              </p>
            </div>

            <div class="text-center" style="border: 1px solid #ccc; width: 10%">
              <q-checkbox color="primary" keep-color left-label v-model="HIC049.citolog_vaginal" true-value="S" false-value="N" />
            </div>
            <div class="text-left" style="border: 1px solid #ccc; width: 90%">
              <p style="text-align: justify">
                <span class="text-bold">CITOLOGIA VAGINAL:</span>
                Previa colocación del especulo vaginal, se frotará la mucosa del cuello uterino, con un cepillo y espátula especiales, para obtener
                muestras del tejido celular, el material se extiende sobre una lámina, que luego de un proceso de colaboración es analizada bajo el
                microscopio.
              </p>
            </div>
          </div>

          <p style="text-align: justify">
            <span class="text-bold">RIESGO:</span>
            No existe ningún riesgo identificado al tomar las muestras, incluso si usted se encuentra embarazada actualmente. Cuando el cuello del
            útero se encuentra muy inflamado, en ocasiones se presenta escaso sangrado vaginal (manchado). Que cede solo y no requiere tratamiento.
          </p>
          <p style="text-align: justify">
            <span class="text-bold">LIMITACION:</span>
            Pacientes con antecedentes de traumas o cirugía reciente en región genital y/o estructuras circundantes, que dificulten el examen.
          </p>
          <p style="text-align: justify">
            <span class="text-bold">USTED DEBE SABER QUE:</span>
            Para este examen se utilizan elementos nuevos y desechables. Son procedimientos seguros y muy rara vez presentan complicaciones durante la
            toma de las muestras se puede presentar alguna molestia como dolor leve que cederá rápidamente su colaboración es muy importante para
            realizarlo, en el tiempo indicado y con menor incomodidad.
          </p>
          <p style="text-align: justify">
            No existe pruebas exactas para establecer el grado de riesgo, sin embargo, el profesional asignado establecerá si se puede o no realizar
            la prueba solicitada y tomara las medidas especiales para garantizar de la mejor forma de su seguridad.
          </p>
          <p style="text-align: justify">
            <span class="text-bold">RECOMENDACIONES:</span>
            Si posteriormente el examen presenta algún síntoma como sangrado vaginal, dolor abdominal, ardor para orinar y/o fiebre, flujo vaginal de
            mal olor y no se encuentra en nuestras instalaciones, consulte a su médico tratante o asista al servicio de urgencias que le corresponde.
          </p>
          <p style="text-align: justify">
            <span class="text-bold">HE COMPRENDIDO CON CLARIDAD TODO LO ESCRITO ANTERIORMENTE.</span>
            Yo he tenido la oportunidad de preguntar y resolver todas mis dudas.<span class="text-bold"
              >ACEPTO LA REALIZACION DEL EXAMEN - DECLARO QUE LA DECISION QUE TOMO ES LIBRE Y VOLUNTARIA DOY MI CONSENTIMIENTO
            </span>
            para que el profesional del Hospital Local Primer Nivel E.S.E FuentedeOro me realice el procedimiento diagnostico solicitado por mi médico
            tratante. SI he aceptado la toma del estudio, la entidad en mención y el médico, quedan autorizados para llevar a cabo las conductas o
            procedimientos médicos necesarios tendientes a resolver las complicaciones imprevisibles del procedimiento que mediante este documento
            autorizo.
          </p>
          <p style="text-align: justify">
            Entiendo que me puedo retractar de este consentimiento cuando así lo desee, debiendo informal al equipo médico de diagnóstico del cambio
            de esta decisión.
          </p>
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
        :disable="opcion_hc049 ? false : true"
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
import { impresionHIC049, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat } from "@/formatos/utils";
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

const HIC049 = reactive({
  fecha: "",
  hora: "",
  exam_fluj_vaginal: "N",
  citolog_vaginal: "N",
});

const opcion_hc049 = ref(null);

onMounted(() => {
  HIC049.hora = dayjs().format("hh:mm");
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
  const datos_format = JSON.parse(JSON.stringify(HIC049));
  let llave_paci;
  if (/[A-Za-z]/.test(getPaci.cod)) {
    llave_paci = getPaci.cod.padStart(15, " ");
  } else {
    llave_paci = getPaci.cod + "00000000";
  }
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc049.value == "AUTORIZAR" ? "1" : "2",
    llave_fact: getSesion.modulo == "HIC" ? "" : `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getSesion.modulo == "HIC" ? getHc.llave : `${llave_paci}`,
    cod_med: getProf.cod,
    cod_consen: getSesion.modulo == "HIC" ? "HIC049" : "LAB018",
    disentimiento: "N",
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC049.fecha = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic049 = {
      autorizo: opcion_hc049.value == "AUTORIZAR" ? true : false,
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
      ...HIC049,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC049" },
      content: impresionHIC049({
        datos: datos_hic049,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC049" },
      content: impresionHIC049({
        datos: datos_hic049,
      }),
    });

    let nomb_consen = getSesion.modulo == "HIC" ? "HIC-049" : "LAB-018";
    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-${nomb_consen}` });
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
