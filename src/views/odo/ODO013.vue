<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_odo013"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_odo013 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_odo013 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_odo013">
              {{ opcion_odo013 }}
            </q-chip>
          </p>
        </div>
        <p class="text-center" style="font-weight: bold">FORMULARIO DE CONSENTIMIENTO INFORMADO PARA LA APLICACIÓN DE ANESTESIA LOCAL</p>
        <div class="row">
          <p style="font-weight: bold">Fecha:&nbsp;</p>
          <p>&nbsp;{{ ODO013.fecha }}</p>
        </div>
        <div>
          <p style="text-align: justify">
            Yo. <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }}</span> identificado con
            <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.tipo_id : getPaci.tipo_id }}</span> N°.
            <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.cod : getPaci.cod }}</span> como paciente (padre/madre, tutor/tutora o
            representante legal) de <span class="text-bold">{{ reg_acudiente.cod ? getPaci.descrip : "N/A" }}</span> identificado con
            <span class="text-bold">{{ reg_acudiente.cod ? getPaci.tipo_id : "N/A" }}</span> N°.
            <span class="text-bold">{{ reg_acudiente.cod ? getPaci.cod : "N/A." }}</span> y en pleno uso de mis facultades, libre y voluntariamente
            DECLARO que: se me ha explicado que el procedimiento para la aplicación de la anestesia local consiste en administrar, por medio de una
            inyección, sustancias que provocan el bloqueo reversible de la sensación dolorosa, para efectuar el tratamiento sin dolor.
          </p>
          <p style="text-align: justify">
            La administración de anestesia local puede provocar entre otras, ulceración en la mucosa en la zona de inyección, dolor, limitación del
            movimiento de apertura bucal, parestesia prolongada, descenso de la tensión arterial, sincope, urticaria, asma, edema angioneurotico,
            crisis hipertensiva, hipoxia, taquicardia, arritmia cardiaca, hiperglicemia y en casos menos frecuentes fibrilación ventricular o incluso
            la muerte, que pueden requerir tratamiento urgente.
          </p>
          <p style="text-align: justify">
            Declaro que se me ha explicado en un vocabulario que me es comprensible, la magnitud, alcance y posibles consecuencias, secuelas o
            molestias derivadas del tratamiento antes indicado, que en caso de que se presenten las anteriores complicaciones, acepto las molestias y
            riesgos mencionados y los que se señalen como derivados del tratamiento realizado.
          </p>
          <p style="text-align: justify">
            Por ello manifiesto que estoy satisfecho con la información recibida y que comprendo el alcance y los riesgos del tratamiento y consiento
            que me realicen los siguientes tratamientos odontológicos:
          </p>
        </div>
        <TextArea_ v-model="ODO013.tratam_odontolog" :field="form.tratam_odontolog" />
        <p style="text-align: justify">y me responsabilizo de cualquier tipo de consecuencia por no seguir los cuidados que se indican.</p>

        <div v-if="opcion_odo013 == 'REVOCAR'">
          <p class="text-center" style="font-weight: bold">ANEXO CONSENTIMIENTO INFORMADO REVOCACIÓN DEL CONSENTIMIENTO</p>

          <p style="text-align: justify">
            Yo. <span class="text-bold">{{ getPaci.descrip }}</span> identificado con <span class="text-bold">{{ getPaci.tipo_id }}</span> N°.
            <span class="text-bold">{{ getPaci.cod }}</span> como paciente (padre/madre, tutor/tutora o representante legal) en uso de mis facultades,
            libre y voluntariamente REVOCO el consentimiento prestado con fecha <span class="text-bold">{{ ODO013.fecha }}</span> ante el Higienista
            Dental y/o Dra. Informante:
          </p>
          <Input_ v-model="ODO013.profes_infor_revoc" :field="form.profes_infor_revoc" />
          <p style="text-align: justify">no deseando proseguir en el tratamiento propuesto.</p>
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
        :disable="opcion_odo013 ? false : true"
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
import { impresionODO013, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive, computed } from "vue";
import { utilsFormat, evaluarClaseServ } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion, getTestigo } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const firma_recibida_test = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const reg_acudiente = ref(getAcomp.cod ? getAcomp : {});
const ODO013 = reactive({
  fecha: "",
  tratam_odontolog: "",
  profes_infor_revoc: "",
});
const form = ref({
  tratam_odontolog: {
    id: "tratam_odontolog",
    maxlength: "500",
    label: "",
    rows: 4,
    campo_abierto: true,
  },
  profes_infor_revoc: {
    id: "profes_infor_revoc",
    maxlength: "100",
    label: "",
    campo_abierto: true,
  },
});
const servicio = ref({
  select: evaluarClaseServ("3"),
  items: [
    { value: "DROGUERIA", label: "DROGUERIA" },
    { value: "CIRUGIAS", label: "CIRUGIAS" },
    { value: "LABORATORIOS Y OTROS DIAGNOSTICOS", label: "LABORATORIOS Y OTROS DIAGNOSTICOS" },
    { value: "RX - IMAGENOLOGIA", label: "RX - IMAGENOLOGIA" },
    { value: "OTROS SERVICIOS", label: "OTROS SERVICIOS" },
    { value: "CONSULTA Y TERAPIAS", label: "CONSULTA Y TERAPIAS" },
    { value: "PATOLOGIA", label: "PATOLOGIA" },
    { value: "PROMOCION Y PREVENCION", label: "PROMOCION Y PREVENCION" },
  ],
  serv_form: {
    label: "",
    required: true,
    id: "serv_form",
    campo_abierto: true,
  },
});
const opcion_odo013 = ref(null);
const autoriza = computed(() => {
  switch (opcion_odo013.value) {
    case "AUTORIZAR":
      return "S";
    case "REVOCAR":
      return "N";
    default:
      return "";
  }
});
onMounted(() => {
  ODO013.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(ODO013));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_odo013.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "ODO013",
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
    const datos_odo013 = {
      autorizo: opcion_odo013.value == "AUTORIZAR" ? true : false,
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
      ...ODO013,
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
      datos: { ...firmas, cod_consen: "ODO013" },
      content: impresionODO013({
        datos: datos_odo013,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "ODO013" },
      content: impresionODO013({
        datos: datos_odo013,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-ODO-013` });
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
