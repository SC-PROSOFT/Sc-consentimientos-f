<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic079"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic079 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic079 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic079">
              {{ opcion_hic079 }}
            </q-chip>
          </p>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Nombre del paciente</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">{{ getPaci.descrip }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Tipo y número de documento</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.tipo_id }}</p>
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.cod }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Dirección</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.direccion }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Teléfono</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.telefono }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Fecha</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ HIC079.fecha }}</p>
          </div>
        </div>
        <p style="text-align: justify">
          Yo <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }} </span> identificado con
          <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.tipo_id : getPaci.tipo_id }}</span> No.
          <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.cod : getPaci.cod }}</span> (Como paciente o acudiente de)
          <span class="text-bold">{{ reg_acudiente.cod ? getPaci.descrip : "N/A" }} </span> identificado con
          <span class="text-bold">{{ reg_acudiente.cod ? getPaci.tipo_id : "N/A" }}</span> No.
          <span class="text-bold">{{ reg_acudiente.cod ? getPaci.cod : "N/A." }}</span>
        </p>
        <p style="text-align: justify">
          DECLARO que la Odontóloga me ha explicado que el propósito de la intervención de cirugía oral menor es para resolver alguno de los
          siguientes problemas de la cavidad oral: extracción de piezas dentarias o restos apicales incluidos, fenestración o tracción de dientes
          retenido.
        </p>
        <p style="text-align: justify">
          Para llevar a cabo el procedimiento se aplicará anestesia, de cuyos posibles riesgos también he sido informado/a, es posible que los
          fármacos utilizados puedan producir determinadas alteraciones del nivel de conciencia por lo que se me ha informado que no podré realizar
          determinadas actividades inmediatamente.
        </p>
        <p style="text-align: justify">
          Igualmente, se me ha informado de que existen ciertos riesgos potenciales y complicaciones, algunas de ellas inevitables, concretamente:
        </p>
        <ol>
          <li>Alergia al anestésico u otro medicamento utilizado, antes o después de la cirugía.</li>
          <li>Hematoma y edema de la región.</li>
          <li>Hemorragia postoperatoria.</li>
          <li>Dehiscencia de la sutura.</li>
          <li>Daño de dientes adyacentes.</li>
          <li>Hipoestesia o anestesia del nervio dentario inferior, temporal o definitivo.</li>
          <li>Hipoestesia o anestesia del nervio lingual, temporal o definitivo.</li>
          <li>Hipoestesia o anestesia del nervio infraorbitario, temporal o definitivo.</li>
          <li>Infección postoperatoria.</li>
          <li>Osteítis.</li>
          <li>Sinusitis.</li>
          <li>Comunicación buconasal y/o bucosinual.</li>
          <li>Fracturas óseas.</li>
          <li>Rotura de instrumentos.</li>
        </ol>
        <p style="text-align: justify">
          Tras la información recibida, he comprendido la naturaleza y propósitos del tratamiento de cirugía que se me va a practicar. He comprendido
          lo que se me ha explicado de forma clara, con un lenguaje sencillo, habiendo resuelto todas las dudas que se me han planteado, y la
          información complementaria que le he solicitado. Me queda claro que en cualquier momento y sin necesidad de dar ninguna explicación, puedo
          revocar este consentimiento. Estoy satisfecho con la información recibida y comprendido el alcance y riesgos de este tratamiento, y en por
          ello, DOY MI CONSENTIMIENDO, para que se me practique el tratamiento de cirugía. En el Hospital Local de Guamal.
        </p>
        <p style="text-align: justify; font-weight: bold">DECLARACIÓN</p>
        <p style="text-align: justify">He informado al paciente del propósito y naturaleza del procedimiento descrito arriba.</p>

        <div v-if="getAcomp.cod.trim() != ''">
          <p style="text-align: center; font-weight: bold">ESPACIO PARA PACIENTES CON DISCAPACIDAD</p>
          <p style="text-align: justify">
            Sé que el paciente <span class="text-bold">{{ getPaci.descrip }},</span> ha sido considerado por ahora incapaz de tomar por sí mismo la
            decisión de aceptar o rechazar el procedimiento descrito arriba. La funcionaria me ha explicado los riesgos y complicaciones. He
            comprendido todo lo anterior perfectamente y por ello: YO, <span class="text-bold">{{ getAcomp.descrip }}</span
            >, con documento de identidad <span class="text-bold">{{ getAcomp.tipo_id }}</span> No. <span class="text-bold">{{ getAcomp.cod }}</span
            >, doy mi consentimiento para que la profesional, <span class="text-bold">{{ getProf.descrip }}</span> realice este procedimiento. Puedo
            revocar este consentimiento cuando en bien del paciente se presuma oportuno.
          </p>
          <p style="text-align: justify"><span class="text-bold">NOTA:</span> En caso de ser menor de 18 años, deben firmar ambos padres.</p>
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
        :disable="opcion_hic079 ? false : true"
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
import { impresionHIC079, impresion, generarArchivo } from "@/impresiones";
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

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const firma_recibida_test = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);

const reg_acudiente = ref(getAcomp.cod ? getAcomp : {});

const HIC079 = reactive({
  fecha: "",
});

const opcion_hic079 = ref(null);

onMounted(() => {
  HIC079.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC079));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic079.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC079",
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
    const datos_hic079 = {
      autorizo: opcion_hic079.value == "AUTORIZAR" ? true : false,
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
      ...HIC079,
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
      datos: { ...firmas, cod_consen: "HIC079" },
      content: impresionHIC079({
        datos: datos_hic079,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC079" },
      content: impresionHIC079({
        datos: datos_hic079,
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
