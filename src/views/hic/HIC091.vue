<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic091"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic091 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic091 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic091">
              {{ opcion_hic091 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <div class="row">
            <p class="text-bold q-mt-xs">Fecha solicitud prueba:</p>
            <Input_ v-model="HIC091.fecha_solic_prueb" :field="form.fecha_solic_prueb" style="margin-top: 3px" />
          </div>
          <div class="row">
            <p class="q-mt-xs">
              Nombre y apellido:<span class="text-bold"> {{ getPaci.descrip }}</span>
            </p>
          </div>
          <div class="row">
            <p class="q-mt-xs">
              Tipo de documento de identidad:<span class="text-bold"> {{ getPaci.tipo_id }}</span>
            </p>
          </div>
          <div class="row">
            <p class="q-mt-xs">
              Numero de documento de identidad:<span class="text-bold"> {{ getPaci.tipo_id }}</span>
            </p>
          </div>
          <div class="row">
            <p class="q-mt-xs">
              Edad: <span class="text-bold"> {{ calcularEdad(getPaci.nacim) }}</span>
            </p>
          </div>
          <div class="row">
            <p class="q-mt-xs">
              Sexo: <span class="text-bold"> {{ getPaci.sexo }}</span>
            </p>
          </div>
          <div class="row">
            <p class="q-mt-xs">
              Fecha de nacimiento: <span class="text-bold"> {{ dayjs(getPaci.nacim).format("YYYY-MM-DD") }}</span>
            </p>
          </div>
          <div class="row">
            <p class="q-mt-xs">
              Direccion de residencia: <span class="text-bold"> {{ getPaci.direccion }}</span>
            </p>
          </div>
          <div class="row">
            <p class="q-mt-xs">
              Ocupacion: <span class="text-bold"> {{ getPaci.descrip_ocup }}</span>
            </p>
          </div>
          <div class="row">
            <p class="q-mt-xs">
              Regimen: <span class="text-bold"> {{ getPaci.descrip_tipo_afil }}</span>
            </p>
          </div>
          <div class="row">
            <p class="q-mt-xs">
              EPS: <span class="text-bold"> {{ getPaci.descrip_eps }}</span>
            </p>
          </div>
        </div>

        <div class="row">
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="q-pa-xs" style="text-align: center; font-weight: bold">MOTIVO DE LA PRUEBA</p>
            <q-checkbox
              class="q-ml-xs"
              color="primary"
              keep-color
              left-label
              label="SOSPECHA CLINICA"
              v-model="HIC091.sospecha_clinic"
              true-value="S"
              false-value="N"
            />
            <q-checkbox
              class="q-ml-xs"
              color="primary"
              keep-color
              left-label
              label="CONTACTO ESTRECHO"
              v-model="HIC091.contacto_estrecho"
              true-value="S"
              false-value="N"
            />
          </div>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="q-pa-xs" style="text-align: center; font-weight: bold">DEMANDA INDUCIDA</p>
            <p class="q-pa-xs">Programa promocion y mantenimiento de la salud:</p>
            <Input_ v-model="HIC091.progr_prom_mant" :field="form.progr_prom_mant" />

            <q-checkbox
              class="q-ml-xs"
              color="primary"
              keep-color
              left-label
              label="CONSULTA EXTERNA"
              v-model="HIC091.consul_extern"
              true-value="S"
              false-value="N"
            />
            <q-checkbox
              class="q-ml-xs"
              color="primary"
              keep-color
              left-label
              label="CONSULTA ESPECIALIZADA"
              v-model="HIC091.consul_especial"
              true-value="S"
              false-value="N"
            />
            <p class="q-pa-xs">cual:</p>
            <Input_ v-model="HIC091.cual_consult" :field="form.cual_consult" />
            <q-checkbox
              class="q-ml-xs"
              color="primary"
              keep-color
              left-label
              label="MEDICO LEGAL"
              v-model="HIC091.medico_legal"
              true-value="S"
              false-value="N"
            />
            <q-checkbox
              class="q-ml-xs"
              color="primary"
              keep-color
              left-label
              label=" CONSULTA URGENCIAS"
              v-model="HIC091.consul_urgencias"
              true-value="S"
              false-value="N"
            />
          </div>
        </div>

        <div class="q-mt-md q-mb-md" style="border: 1px solid #ccc; width: 100%">
          <p class="q-mt-md q-pa-xs" style="text-align: center; font-weight: bold">CONSENTIMIENTO INFORMADO TOMA DE LA MUESTRA</p>
          <p class="q-pa-xs" style="text-align: justify">
            Certifico que me han dado información sobre los riesgos asociados al procedimiento, así: Ante la extracción de sangre puede presentarse
            los siguientes riesgos:
          </p>
          <ol class="q-mr-xs">
            <li>
              <p style="text-align: justify">
                Sensación de dolor moderado; Sensación pulsátil; Se pueden formar hematomas; Leve inflamación y/o sangrado temporal; A causa de la
                ansiedad que genera el pinchazo: Puede sentir malestar (náuseas, mareo). Entiendo la información y he dialogado con la persona que me
                brindo información (actividad realizada por un profesional de la salud para prepararme y confrontarme con relación a mis
                conocimientos, prácticas y conductas antes de realizarme las pruebas de diagnóstico en laboratorio),se me ha explicado el
                procedimiento mediante el cual recibire mis resultados y que estoy de acuerdo. Entiendo que la toma de muestra es voluntaria y que
                puedo retirar mi consentimiento en cualquier momento antes de que sea tomado el examen.
              </p>
            </li>
            <li>
              <p style="text-align: justify">
                Ante la toma de Hisopado nasofaríngeo o Aspirado naso faríngeo, se pueden presentar los siguientes riesgos: Molestias nasales,
                sensación de estornudo, ruptura de pequeños vasos lo que ocasionaría un pequeño sangrado.
              </p>
            </li>
          </ol>
        </div>

        <div class="row">
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="q-pa-xs" style="text-align: center; font-weight: bold">ACEPTO REALIZARME LA PRUEBA</p>
            <p class="q-pa-xs">
              Nombres y apellidos usuario: <span class="text-bold"> {{ getPaci.descrip }}</span
              >, nombre de quien toma la muestra: <span class="text-bold"> {{ getProf.descrip }}</span
              >, fecha: <span class="text-bold"> {{ HIC091.fecha }}</span> profesión: <span class="text-bold"> {{ getProf.descrip_atiende }}</span
              >.
            </p>
          </div>
        </div>

        <div class="row q-mt-md q-mb-md" v-if="opcion_hic091 == 'REVOCAR'">
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="q-pa-xs" style="text-align: center; font-weight: bold">DILIGENCIAR ESTE ESPACIO EN CASO DE REVOCACIÓN O DISENTIMIENTO</p>
            <p class="q-pa-xs" style="text-align: justify">
              Yo, <span class="text-bold">{{ reg_acudiente.cod ? reg_acudiente.descrip : getPaci.descrip }},</span> después de ser informado de la
              naturaleza y riesgos del procedimiento propuesto, manifiesto de forma libre y consciente mi negación/ revocación para su realización,
              haciéndome responsable de las consecuencias que se puedan derivar de ésta decisión.
            </p>
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
        :disable="opcion_hic091 ? false : true"
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
import { impresionHIC091, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat, calcularEdad } from "@/formatos/utils";
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

const HIC091 = reactive({
  fecha: "",
  hora: "",
  fecha_solic_prueb: "",
  progr_prom_mant: "",
  cual_consult: "",
  sospecha_clinic: "N",
  medico_legal: "N",
  consul_urgencias: "N",
  contacto_estrecho: "N",
  consul_extern: "N",
  consul_especial: "N",
});
const form = ref({
  fecha_solic_prueb: {
    id: "fecha_solic_prueb",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  progr_prom_mant: {
    id: "progr_prom_mant",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
  cual_consult: {
    id: "cual_consult",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
});

const opcion_hic091 = ref(null);
onMounted(() => {
  HIC091.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC091.hora = dayjs().format("HH:mm");
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
  const datos_format = JSON.parse(JSON.stringify(HIC091));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic091.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC091",
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
    const datos_hic091 = {
      autorizo: opcion_hic091.value == "AUTORIZAR" ? true : false,
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
      ...HIC091,
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
      datos: { ...firmas, cod_consen: "HIC091" },
      content: impresionHIC091({
        datos: datos_hic091,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC091" },
      content: impresionHIC091({
        datos: datos_hic091,
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
