<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc045"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc045 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc045 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc045">
              {{ opcion_hc045 }}
            </q-chip>
          </p>
        </div>
        <div>
          <p>
            <span class="text-bold">CIUDAD:</span> {{ getEmpresa.ciudad_usuar }}&nbsp;
            <span class="text-bold">FECHA ACTUAL:</span>
            {{ dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD") }}
            <span class="text-bold">HORA ACTUAL:</span> {{ dayjs().format("hh:mm A") }}&nbsp; <span class="text-bold">ENTIDAD:</span>
            {{ getEmpresa.nomusu }} &nbsp;
          </p>
          <p><span class="text-bold">NOMBRE:</span> {{ getPaci.descrip }}&nbsp;</p>
          <p><span class="text-bold">TIPO Y NUMERO DOCUMENTO DE INDENTIFICACIÓN:</span> {{ getPaci.tipo_id + " " + getPaci.cod }} &nbsp;</p>
          <p><span class="text-bold">EDAD:</span> {{ calcularEdad(getPaci.nacim) }} &nbsp;</p>

          <p align="justify" class="text-bold" style="margin-bottom: 1px">Procedimiento a realizar:</p>
          <div>
            <q-card-section>
              <Input_ style="min-width: 100%; display: inline-block" type="text" v-model="HIC045.procedimiento" :field="form.procedimiento" />
            </q-card-section>
          </div>
          <p align="justify" class="text-bold" style="padding-top: 16px">Beneficios esperados:</p>

          <p style="text-align: justify">
            Los pacientes pueden ser diagnosticados,lo que puede contrubuir a mejores resultados y tratamiento médico.
          </p>
          <p align="justify" class="text-bold" style="padding-top: 16px">Riesgos o posibles complicaciones derivadas:</p>

          <p style="text-align: justify">
            A pesar de los esfuerzos razonables de protección, la transmisión de la información médica, se pueden presentar las siguientes
            complicaciones. Infarto de Miocardio, Asistolia, Fibrilación Ventricular, Taquicardia Ventricular, Arritmias Supraventriculares, Espasmo
            Coronario, Hipotensión, Hipertensión, Hipersensibilidad a medicamentos (según estudio), Caidas desde su propia altura, trauma laringeo y
            esofagico (ETE).
          </p>
          <p style="text-align: justify">
            Manifiesto que me han explicado en términos comprensibles en que consiste el(os) procedimiento(s), cuales son sus beneficios, prosibles
            riesgos y complicaciones, que han sido aclaradas todas mis dudas e inquietudes sobre la atención, en palabras claras y fácilmente
            comprensibles y sé que en cualquier momento puedo negar o retirar mi consentimiento para la realización del procedimiento citado
            anteriormente . Luego de comprender y ponderar la información recibida, doy mi consentimiento libre y espontáneo, en pleno uso de mis
            capacidades mentales, para acceder a la prestación del servicio en esta Institución.
          </p>
          <span v-if="!getAcomp.descrip" class="text-bold text-subtitle1"
            >MANIFIESTO QUE HE LEÍDO EN SU INTEGRIDAD EL PRESENTE DOCUMENTO Y QUE TODOS LOS ESPACIOS EN BLANCO PRECEDENTES HAN SIDO DILIGENCIADOS
            ANTES DE MI FIRMA.
          </span>
        </div>
        <div v-if="getAcomp.descrip">
          <span class="text-bold text-subtitle1">EN CASO DE INCAPACIDAD DEL PACIENTE Y/O MENOR DE EDAD. </span>
          <p align="justify" style="margin-bottom: 1px">
            Motivo de la incapacidad: <strong class="text-bold">{{ discapacidad[getPaci.discap] }}</strong> Relación/Parentesco:
            <strong class="text-bold">{{ parentesco[getSesion.paren_acomp] }}.</strong> Yo
            <strong class="text-bold">{{ getAcomp.descrip }}</strong> identificado con <strong class="text-bold">{{ getAcomp.tipo_id }}.</strong> N°
            <strong class="text-bold">{{ getAcomp.cod }}</strong> en mi calidad de Representante Legal del paciente, manifiesto que he leído en su
            integridad el presente documento y que me han explicado claramente en qué consiste la modalidad de atención de telemedicina citada en este
            documento cuáles son sus beneficios, posibles riesgos y mis responsabilidades. Con base en lo anterior, de manera libre y espontánea,
            autorizo que se realice la teleconsulta, teniendo en cuenta que se ha acreditado previamente la incapacidad de mi representado para dar su
            consentimiento frente a la realización de esta modalidad de atención.
          </p>
        </div>
        <!-- <div class="row" v-show="opcion_hc045 == 'REVOCAR'" style="padding-top: 16px">
        <p align="justify">
          Expreso mi voluntad de <ins class="text-bold">revocar</ins> el consentimiento presentado y declaro por tanto que, tras la información
          recibida, no consiento someterme al procedimiento de:
          <strong class="text-bold">{{ HIC045.procedimiento }}</strong>
          por los siguientes motivos:
        </p>
        <Input_ style="min-width: 100%; display: inline-block" v-model="HIC045.revocar_motivos" :field="form.revocar_motivos" />
      </div> -->
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
        :disable="opcion_hc045 ? false : true"
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
import { impresionHIC045, impresion, generarArchivo } from "@/impresiones";
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
const form = ref({
  procedimiento: {
    id: "procedimiento",
    maxlength: "285",
    label: "",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
  revocar_motivos: {
    id: "revocar_motivos",
    maxlength: "285",
    label: "",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
});
const discapacidad = {
  1: "SIN DISCAPACIDAD",
  2: "DISCAPACIDAD FISICA",
  3: "DISCAPACIDAD AUDITIVA",
  4: "DISCAPACIDAD VISUAL",
  5: "DISCAPACIDAD MENTAL",
  6: "DISCAPACIDAD COGNITIVA",
};
const parentesco = {
  1: "MADRE",
  2: "PADRE",
  3: "HIJO(A)",
  4: "ESPOSO(A)",
  5: "HERMANO(A)",
  6: "TIO(A)",
  7: "SOBRINO(A)",
  8: "PRIMO(A)",
  9: "MADRASTRA",
  10: "PADRASTRO",
  11: "AMIGO(A)",
  12: "ABUELO(A)",
  13: "NIETO(A)",
  14: "TRABAJADOR SOCIAL",
  15: "OTRO",
};
const HIC045 = reactive({
  procedimiento: "",
  fecha_act: "",
  revocar_motivos: "",
});

const opcion_hc045 = ref(null);

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
  if (opcion_hc045.value == "AUTORIZAR") {
    if (!HIC045.procedimiento) return CON851("?", "info", "Complete el campo Procedimiento", () => foco_(form, "procedimiento"));
  }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC045));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc045.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC045",
    disentimiento: "N",
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC045.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic045 = {
      autorizo: opcion_hc045.value == "AUTORIZAR" ? true : false,
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
      ...HIC045,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC045" },
      content: impresionHIC045({
        datos: datos_hic045,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC045" },
      content: impresionHIC045({
        datos: datos_hic045,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-045` });
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
