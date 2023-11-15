<template>
  <q-form @submit="validarDatos">
    <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_hc034"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p
            :class="reg.opcion_hc034 == 'AUTORIZAR' ? 'text-green' : 'text-red'"
          >
            <q-chip
              :color="reg.opcion_hc034 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_hc034"
            >
              {{ reg.opcion_hc034 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p class="text-justify">
            La ley 23 de 1981 en su artículo 15 y 19, por la cual dictan las
            normas en materia de Ética médica, estableciendo que el médico no
            expondrá a su paciente a riesgos injustificados; pedirá su
            consentimiento para aplicar los tratamientos médicos y quirúrgicos
            que considere indispensables y que pueden afectarlo física o
            síquicamente, salvo en los casos en que ello no fuere posible, y le
            explicará al paciente o a sus responsables de tales consecuencias
            anticipadamente; igualmente en cumplimiento con lo establecido en la
            Ley Orgánica de Protección de Datos de carácter Personal (LOPD)15
            del 13 de Diciembre 1999 sobre protección de datos personales y de
            conformidad con lo previsto en la Ley Orgánica (LO) 2 del 3 de marzo
            del 2010, de Salud Sexual y Reproductiva y de Interrupción
            Voluntaria del Embarazo, sus datos personales serán tratados
            garantizando su derecho a la intimidad y confidencialidad.
          </p>
        </div>
        <div class="row">
          <p>Fecha:</p>
          <q-input
            v-model="reg.fecha_act"
            readonly
            dense
            class="q-mr-md col-2"
          />
          <p>Hora:</p>
          <q-input v-model="reg.hora_act" readonly dense />
          <q-space />
          <p>Historia clínica numero:</p>
          <q-input
            type="text"
            readonly
            dense
            v-model="reg.llave"
            class="col-2"
          />
          <q-space />
        </div>
        <div class="q-mt-md row">
          <span style="font-weight: bold">SERVICIO: CONSULTA EXTERNA</span>
          <q-space />
          <span style="margin-right: 230px; font-weight: bold">URGENCIAS</span>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row" style="border: 1px solid #ccc; width: 100%">
          <p>Nombres y apellidos del paciente y/o Tutor legal o Familiar:</p>
          <q-input
            type="text"
            readonly
            label="Nombre paciente"
            dense
            v-model="getPaci.descrip"
            class="col-4"
          />
        </div>
        <div class="row" style="width: 100%">
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p>Documento de identidad:</p>
            <Select_
              class="q-mt-xs"
              :field="form.tipo_id"
              v-model="reg.tipo_id_ti"
            />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <q-input
              type="text"
              readonly
              label="N."
              dense
              v-model="getPaci.cod"
              class="col-8 q-mx-auto"
            />
          </div>
        </div>
        <div class="row" style="width: 100%">
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p>Dirección:</p>
            <q-input
              type="text"
              readonly
              label="FALTA DIRECCION DIEGO!!!"
              dense
              v-model="reg.direccion"
              class="col-9 q-mx-auto"
            />
            <p>Acudiente/Responsable:</p>
            <q-input
              type="text"
              readonly
              label="Nombre responsable"
              dense
              v-model="getAcomp.descrip"
              class="q-ml-xs q-mr-xs q-mb-md col-12"
            />
          </div>
          <div class="row" style="border: 0px solid #ccc; width: 50%">
            <div class="row" style="border: 1px solid #ccc; width: 100%">
              <p>Telefono:</p>
              <q-input
                type="text"
                readonly
                label="Telefono"
                dense
                v-model="getPaci.telefono"
                class="col-7"
              />
            </div>
            <div class="row" style="border: 1px solid #ccc; width: 50%">
              <p>CC:</p>
              <q-input
                type="text"
                readonly
                label="Identificación"
                dense
                v-model="getAcomp.cod"
                class="q-ml-auto q-mr-md q-mb-md col-10"
              />
            </div>
            <div class="row" style="border: 1px solid #ccc; width: 50%">
              <p>Parentesco:</p>
              <q-input
                type="text"
                label="Parentesco"
                dense
                readonly
                v-model="reg.parentesco"
                class="q-ml-auto q-mr-md q-mb-md col-9"
              />
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-justify">
            Las Gestantes hacen parte de una población de alto riesgo por su
            condición de embarazo, por lo tanto, tendrán prioridad en su proceso
            de atención y apoyo en los diferentes niveles de complejidad y se
            activarán los protocolos de acuerdo a su condición de salud.
          </p>
          <p>
            Que la Institución para realizar la Interrupción Voluntaria del
            embarazo (IVE) que he solicitado según la legislación vigente, solo
            ofrece un (1) método y es el farmacológico (mediante tabletas)
            Mifepristona 200 microgramos via oral, dosis única y misoprostol vía
            vaginal o sublingual de 400 mcg cada 3 horas hasta 4 dosis iniciando
            a las 24-48 horas
          </p>
          <p>
            Que los efectos secundarios más frecuentes son Nausea, vomito,
            Fiebre, escalofrío y diarrea. Se me ha informado sobre las
            consecuencias psicológicas y sociales, que si bien estadísticamente
            son poco frecuentes se puede presentar depresiones post aborto,
            alteraciones del deseo sexual post aborto, baja autoestima y que
            para algunos sectores de la sociedad el Aborto está mal considerado.
          </p>
          <p>
            Que las complicaciones que se pueden presentar son las relacionadas
            a continuación y se tendrán como criterios de remisión a la mediana
            complejidad (marque con una X, el criterio de remisión) con el fin
            de evitar complicaciones que deriven una muerte materna.
          </p>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row" style="width: 100%">
          <div class="row" style="border: 1px solid #ccc; width: 10%">
            <q-space />
            <p>Item</p>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 40%">
            <q-space />
            <p>Criterio</p>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <q-space />
            <p>Observaciones</p>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 10%">
            <q-space />
            <p>1.</p>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 40%">
            <q-checkbox
              class="q-mx-md"
              style="margin-top: -5px"
              left-label
              v-model="reg.hemorragia"
              label="• Hemorragia"
            />
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <q-space />
            <textarea
              class="col-11"
              v-model="reg.obser_hemorragia"
              style="
                margin-top: 5px;
                margin-bottom: 5px;
                resize: none;
                height: 60px;
              "
            ></textarea>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 10%">
            <q-space />
            <p>2.</p>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 40%">
            <q-checkbox
              class="q-mx-md"
              left-label
              v-model="reg.retencion_ute"
              label="• Retención Uterina"
            />
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <q-space />
            <textarea
              class="col-11"
              v-model="reg.obser_retencion_ute"
              style="
                margin-top: 5px;
                margin-bottom: 5px;
                resize: none;
                height: 60px;
              "
            ></textarea>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 10%">
            <q-space />
            <p>3.</p>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 40%">
            <q-checkbox
              class="q-mx-md"
              left-label
              v-model="reg.ive_fallida"
              label="• IVE fallida"
            />
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <q-space />
            <textarea
              class="col-11"
              v-model="reg.obser_ive_fallida"
              style="
                margin-top: 5px;
                margin-bottom: 5px;
                resize: none;
                height: 60px;
              "
            ></textarea>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 10%">
            <q-space />
            <p>4.</p>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 40%">
            <q-checkbox
              class="q-mx-md"
              left-label
              v-model="reg.infecciones"
              label="• Infecciones"
            />
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <q-space />
            <textarea
              class="col-11"
              v-model="reg.obser_infecciones"
              style="
                margin-top: 5px;
                margin-bottom: 5px;
                resize: none;
                height: 60px;
              "
            ></textarea>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 10%">
            <q-space />
            <p>5.</p>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 40%">
            <p class="q-mx-md">
              • Entre otras
              <q-input
                v-model="reg.entre_otras"
                style="min-width: 100px; display: inline-block"
              />
            </p>
            <q-space />
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <q-space />
            <textarea
              class="col-11"
              v-model="reg.obser_entre_otras"
              style="
                margin-top: 5px;
                margin-bottom: 5px;
                resize: none;
                height: 60px;
              "
            ></textarea>
            <q-space />
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-justify">De acuerdo con lo anterior, Yo</p>
          <q-input
            v-model="reg_firmador.descrip"
            readonly
            type="text"
            dense
            class="col-4"
          />
          <p class="text-justify">identificada con C.C. Nº</p>
          <q-input
            v-model="reg_firmador.cod"
            readonly
            type="text"
            dense
            class="col-3"
          />
          <p class="text-justify">de</p>
          <q-input
            v-model="reg_firmador.descrip_ciudad"
            readonly
            type="text"
            dense
            class="col-2"
          />
          <p class="text-justify">
            en calidad de paciente o acudiente (persona responsable del
            paciente), por medio del presente documento, en
          </p>
          <p class="text-justify">
            forma libre en pleno uso de mis facultades mentales e intelectuales
            y sin limitaciones o impedimentos de carácter médico o legal,
            habiendo recibido información en un lenguaje claro, senillo y
            adecuado acerca de los riesgos y demás circunstancias que se
            originen del procedimiento
          </p>
        </div>
        <div class="row" style="margin-top: -17px">
          <p class="text-justify">
            , por parte del profesional en Medicina (Nombres y Apellidos
            completos) Dr
            <InputF_ v-model="getProf.descrip" width="300" /> Identificado con
            Cédula de ciudadanía y/o Registro médico Nº
            <InputF_ v-model="getProf.cod" />
          </p>
        </div>
        <div class="row">
          <p class="text-justify" style="margin-top: -2px">
            Autorizo ESE SALUD YOPAL, para que se me practique la Interrupción
            Voluntaria del Embarazo (IVE) con el método farmacológico que me
            ofrece la Institución.
          </p>
          <p class="text-bold">
            EN CUALQUIER MOMENTO PREVIO AL INICIO DE LA INTERVENCIÓN Y SIN
            NECESIDAD DE DAR NINGUNA EXPLICACION, PUEDO REVOCAR EL
            CONSENTIMIENTO QUE AHORA PRESTO.
          </p>
        </div>
      </q-card-section>
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
            :firmador="getAcomp.cod || 'NO HAY ACOMPAÑANTE'"
            :disable="!getAcomp.cod ? true : false"
            quien_firma="FIRMA TUTOR O FAMILIAR"
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
      <div class="row justify-center q-my-lg">
        <q-btn
          :disable="reg.opcion_hc034 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mr-lg"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card>
    <div style="height: 1px"></div>
  </q-form>
  <!-- Spacer final de hoja -->
</template>
<script setup>
import {
  useModuleFormatos,
  useApiContabilidad,
  useModuleCon851p,
  useModuleCon851,
} from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat, evaluarParentesco, calcEdad } from "@/formatos/utils";
import { impresionHC034, generarArchivo, impresion } from "@/impresiones";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() =>
  import("../../components/global/ContainerFirma.vue")
);

const {
  getDll$,
  _getFirma$,
  _getHuella$,
  guardarFile$,
  enviarCorreo$,
  getEncabezado,
} = useApiContabilidad();
const {
  getPaci,
  getAcomp,
  getHc,
  getProf,
  getEmpresa,
  getSesion,
} = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);
const firma_recibida_acomp = ref("");
const huella_paci = ref(null);
const firma_recibida = ref("");
const firma_prof = ref(null);

const form = ref({
  tipo_id: {
    id: "tipo_id",
    label: "",
    placeholder: "",
    required: true,
    campo_abierto: true,
    disable: true,
  },
});

const reg = reactive({
  direccion: "",
  parentesco: "",
  hemorragia: false,
  obser_hemorragia: "",
  retencion_ute: false,
  obser_retencion_ute: "",
  ive_fallida: false,
  obser_ive_fallida: "",
  infecciones: false,
  obser_infecciones: "",
  entre_otras: "",
  obser_entre_otras: "",

  // extras
  descrip_diagnostico: "",
  tipo_id_ti: "C.C",
  opcion_hc034: "",
  fecha_act: "",
  llave: "",
});

onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  reg.parentesco = evaluarParentesco(getSesion.paren_acomp || "");

  const edad = calcEdad(getPaci.nacim);
  reg.tipo_id_ti = edad >= 18 ? "C.C" : "T.I";

  reg.fecha_act = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  reg.hora_act = `${dayjs().hour()}:${dayjs().minute()}`;
  reg.llave = getHc.llave.slice(15);

  if (getHc.rips.diagn.length) {
    reg.diagnostico = getHc.rips.diagn[0].cod;
    reg.descrip_diagnostico = getHc.rips.diagn[0].descrip;
  }
};

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = async () => {
  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañate");
  }
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  for (const i in reg) {
    if (typeof reg[i] == "boolean") {
      reg[i] = reg[i] ? "S" : "N";
    }
  }

  const datos_format = JSON.parse(JSON.stringify(reg));

  let datos = {
    estado: reg.opcion_hc034 == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC034",
    disentimiento: "N",
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        return grabarFirmaConsen(data?.llave_consen);
      }
      CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    await guardarFile$({
      base64: firma_recibida_acomp.value,
      codigo: `A${llave}`,
    });

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
          return CON851("?", "info", "El correo no es valido", () =>
            router.back()
          );
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
  const datos_hic034 = {
    autorizo: reg.opcion_hc034 == "AUTORIZAR" ? true : false,
    empresa: { ...getEmpresa },
    paciente: { ...getPaci },
    prof: { ...getProf },
    acomp: { ...getAcomp },
    firmador: { ...reg_firmador.value },
    paren_acomp: getSesion.paren_acomp,
    firmas: {
      firma_paci: firma_recibida.value ? true : false,
      huella_paci: huella_paci.value ? true : false,
      firma_acomp: firma_recibida_acomp.value ? true : false,
      firma_prof: firma_prof.value ? true : false,
    },
    ...reg,
    fecha_act: reg.fecha_act.replaceAll("-", ""),
  };

  const firmas = {
    img_firma_acomp: firma_recibida_acomp.value,
    img_firma_consen: firma_recibida.value,
    img_firma_paci: firma_recibida.value,
    img_huella_paci: huella_paci.value,
    firma_prof: firma_prof.value,
  };

  const docDefinitionPrint = utilsFormat({
    datos: firmas,
    content: impresionHC034({
      datos: datos_hic034,
    }),
  });
  const docDefinitionFile = utilsFormat({
    datos: firmas,
    content: impresionHC034({
      datos: datos_hic034,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({
    docDefinition: docDefinitionFile,
  });
  return response_impresion;
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma.slice(22));
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma.slice(22));
};
</script>
<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
}
.custom-q-list .q-item {
  margin: 0;
}
</style>
