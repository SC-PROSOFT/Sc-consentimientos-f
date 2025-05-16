<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic093"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic093 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic093 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic093">
              {{ opcion_hic093 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <div class="row">
            <p style="font-weight: bold">Fecha:</p>
            <p>&nbsp;{{ HIC093.fecha }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">Hora:</p>
            <p>&nbsp;{{ HIC093.hora }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">EPS:</p>
            <p>&nbsp;{{ getPaci.descrip_eps }}</p>
          </div>
        </div>

        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="q-pa-xs" style="text-align: justify">
              Yo <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }}</span
              >, Mayor de edad identificada con documento
              <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.tipo_id : getPaci.tipo_id }}</span>
              N°: <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.cod : getPaci.cod }}</span> de
              <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip_ciudad : getPaci.descrip_ciudad }}</span>
              actuando en nombre propio en pleno uso de mis facultades, libre y consciente, declaro que:
              <q-checkbox
                color="primary"
                keep-color
                left-label
                label="Otorgo mi consentimiento para que sea practicado el procedimiento de insercion"
                v-model="HIC093.insercion"
                true-value="S"
                false-value="N"
              />
              <q-checkbox
                color="primary"
                keep-color
                left-label
                label="Otorgo mi consentimiento para que sea practicado el procedimiento de retiro"
                v-model="HIC093.retiro"
                true-value="S"
                false-value="N"
              />
            </p>

            <p class="q-pa-xs" style="text-align: center; font-weight: bold">INSERCCION DE DISPOSITIVO INTRAUTERINO</p>

            <p class="q-pa-xs" style="text-align: justify">
              del cual se me brindo información y se me han explicado tanto la necesidad de hacerlo como los riesgos.
            </p>
          </div>

          <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
            <p class="q-pa-xs" style="text-align: center; font-weight: bold">DECLARO QUE:</p>
            <ol>
              <li>
                <p class="q-pa-xs" style="text-align: justify">
                  Me han explicado en un lenguaje claro y comprensible la naturaleza y propósito del procedimiento, también me han informado de las
                  ventajas, complicaciones, molestias y riesgos que pueden producirse, tales como dolor, abdominal, sangrado, ruptura uterina,
                  enfermedad pélvica inflamatoria, embarazo, cólicos menstruales más fuertes, desplazamientos o expulsión del DIU entre otros.
                </p>
              </li>
              <li>
                <p class="q-pa-xs" style="text-align: justify">
                  Se me ha dado la oportunidad de hacer preguntas y mis preguntas han sido contestadas satisfactoriamente.
                </p>
              </li>
              <li>
                <p class="q-pa-xs" style="text-align: justify">
                  Se me ha informado plenamente que retirado el DIU y al no iniciar inmediatamente otro método de planificación familiar tengo la
                  oportunidad de quedar embarazada.
                </p>
              </li>
              <li>
                <p class="q-pa-xs" style="text-align: justify">
                  Se me ha informado de todos los signos de alarma por los cuales debo consultar una vez se me haya realizado el procedimiento tales
                  como: sangrado abundante, dolor abdominal que no cede a analgésicos orales , distensión abdominal, fiebre, escalofríos, salida de
                  secreción vaginal mal oliente, entre otras. Y que debo acudir a la cita de control al mes y luego cada año.
                </p>
              </li>
              <li>
                <p class="q-pa-xs" style="text-align: justify">Tengo la opción de decidir en contra del procedimiento.</p>
              </li>
            </ol>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
            <p class="q-pa-xs" style="text-align: center">Certifico que se me ha explicado el procedimiento y entiendo sus posibles riesgos</p>
            <p class="q-pa-xs" style="font-weight: bold; text-align: center">HE LEIDO Y ACEPTO REALIZARME EL PROCEDIMIENTO</p>
          </div>
        </div>

        <div>
          <div class="row q-mt-md q-mb-md" style="width: 100%"></div>
        </div>
        <div>
          <div v-if="opcion_hic093 == 'REVOCAR'">
            <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
              <p style="text-align: center; font-weight: bold">DILIGENCIAR ESTE ESPACIO EN CASO DE REVOCACIÓN O DISENTIMIENTO</p>
              <p class="q-pa-xs" style="text-align: justify">
                Yo, <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }},</span> después de ser informado de la
                situación, manifiesto NO ESTAR DE ACUERDO y NO AUTORIZAR el traslado en ambulancia a otra institución a nivel nacional y asumo las
                consecuencias eximiendo con ello a la institución tratante.
              </p>
            </div>
          </div>
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
        :disable="opcion_hic093 ? false : true"
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
import { impresionHIC093, impresion, generarArchivo } from "@/impresiones";
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
const reg_acudiente = ref(getAcomp.cod ? getAcomp : {});
const HIC093 = reactive({
  fecha: "",
  hora: "",
  insercion: "N",
  retiro: "N",
});

const opcion_hic093 = ref(null);
onMounted(() => {
  HIC093.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC093.hora = dayjs().format("HH:mm");
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
  const datos_format = JSON.parse(JSON.stringify(HIC093));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic093.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC093",
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
    const datos_hic093 = {
      autorizo: opcion_hic093.value == "AUTORIZAR" ? true : false,
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
      ...HIC093,
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
      datos: { ...firmas, cod_consen: "HIC093" },
      content: impresionHIC093({
        datos: datos_hic093,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC093" },
      content: impresionHIC093({
        datos: datos_hic093,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-093` });
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
