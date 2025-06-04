<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic076"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic076 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic076 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic076">
              {{ opcion_hic076 }}
            </q-chip>
          </p>
        </div>
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">A. Datos Generales</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 50%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Servicio:</p>
            <Select_ class="col-10 q-mt-xs" v-model="servicio.select" :field="servicio.serv_form" :items="servicio.items" />
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Fecha:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ HIC076.fecha }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Hora:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ HIC076.hora }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 60%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Nombre de usuario:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.descrip }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Documento:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.tipo_id }}</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.cod }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Teléfono:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.telefono }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 70%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Dirección:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.direccion }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Tutor o familiar:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getAcomp.descrip }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Profesional:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getProf.descrip }}</p>
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Nombre del procedimiento:</p>
            <TextArea_ v-model="HIC076.nomb_procedim" :field="form.nomb_procedim" />
          </div>
        </div>
        <div>
          <div class="row q-mt-md q-mb-md" style="width: 100%">
            <div class="text-center" style="border: 1px solid #ccc; width: 100%">
              <p style="font-weight: bold; margin-top: 10px">B. Declaración del usuario:</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 100%">
              <ol class="q-pa-md">
                <li>
                  <p style="text-align: justify">
                    En pleno uso de mis facultades mentales, autorizo al profesional mencionado y a los asistentes de su elección, para realizar en mi
                    o en el(la) paciente el procedimiento.
                  </p>
                </li>
                <li>
                  <p style="text-align: justify">
                    <span style="text-decoration: underline"> Además de los exámenes pertinentes</span>, se me ha explicado la naturaleza y el
                    propósito de la intervención o procedimiento especial por realizar, así como las complicaciones y riesgos que puedan producirse,
                    en particular los siguientes:

                    <span class="text-bold">
                      reacciones adversas a medicamentos (incluyendo reacciones alérgicas), infecciones intrahospitalarias, sangrado, requerimiento de
                      reintervención, caídas, deterioro clínico, requerimiento de reanimación básica y avanzada, requerimiento de traslado como
                      urgencia vital a institución de mayor nivel de complejidad, muerte.
                    </span>
                  </p>
                </li>
                <li>
                  <p style="text-align: justify">
                    Se me han expuesto todas las posibles alternativas al tratamiento propuesto y se me ha dado la oportunidad de formular preguntas y
                    las mismas han sido resueltas satisfactoriamente.
                  </p>
                </li>
                <li>
                  <p style="text-align: justify">
                    Autorizo al <span class="text-bold">HOSPITAL LOCAL DE GUAMAL PRIMER NIVEL DE ATENCIÓN E.S.E</span> y a sus especialistas, médicos,
                    odontólogos, enfermeras y demás profesionales, para utilizar en el curso de la intervención o procedimiento y postoperatorio, los
                    medicamentos, anestésicos o medios de contraste necesarios.
                  </p>
                </li>
                <li>
                  <p style="text-align: justify">
                    Reconozco que hay riesgos para la vida y la salud asociados con estos procedimientos o intervenciones, medicamentos o sustancias.
                    Tales riesgos me han sido explicados por el médico que realizará la intervención o procedimiento.
                  </p>
                </li>
                <li>
                  <p style="text-align: justify">
                    Comprendo que en el curso de la intervención o procedimiento, pueden presentarse situaciones imprevistas que requieran
                    procedimientos adicionales, los cuales autorizo si el médico o sus asistentes consideran necesarios.
                  </p>
                </li>
                <li>
                  <p style="text-align: justify">
                    Autorizo al <span class="text-bold"> HOSPITAL LOCAL DE GUAMAL EN PRIMER NIVEL DE ATENCIÓN E.S.E</span>, para tomar muestras de
                    tejidos o fluidos orgánicos, con destino a exámenes de laboratorio clínico o histo-patológicos.
                  </p>
                </li>
                <li>
                  <p style="text-align: justify">
                    Acepto que no se me ha garantizado el resultado de la intervención o procedimiento, porque entiendo que la actividad médica es de
                    medio y no de resultado, tal como me lo han explicado, independientemente de que se haga uso de todos los elementos
                    técnico-científicos disponibles por la institución, cumpliendo con los parámetros de calidad para su ejecución, tal como lo
                    dispone la ley 23 de 1981, la Resolución 1995 de 1999 y demás normas pertinentes.
                  </p>
                </li>
                <li>
                  <p style="text-align: justify">
                    Certifico que he leído y comprendido el contenido de este documento, que los espacios en blanco han sido llenados antes de mi
                    firma y me encuentro en capacidad total de expresar mi libre decisión.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Declaración profesional responsable</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
            <p class="q-pa-xs" style="margin-top: 10px; margin-left: 10px">
              He informado al paciente del propósito y naturaleza del procedimiento descrito arriba, de sus alternativas, posibles riesgos y de los
              resultados que se esperan.
            </p>
          </div>
        </div>
        <div v-if="getAcomp.cod" class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Declaración Tutor Legal o Familiar</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
            <p class="q-pa-xs" style="margin-top: 10px; margin-left: 5px">
              Sé que el paciente ha sido considerado por ahora incapaz de tomar por sí mismo la decisión de aceptar o rechazar el procedimiento
              descrito arriba. El médico me ha explicado de forma satisfactoria qué es, cómo se hace y para qué sirve este procedimiento o
              intervención. También se me han explicado sus riesgos y complicaciones. He comprendido todo lo anterior perfectamente y por ello doy mi
              consentimiento para que se realice el ingreso hospitalario.
            </p>
            <p class="q-pa-xs" style="margin-left: 5px">El paciente no puede firmar por:</p>

            <q-checkbox
              class="q-pa-xs"
              color="primary"
              keep-color
              left-label
              v-model="HIC076.no_firm_menor_edad"
              label="Menor de edad"
              true-value="S"
              false-value="N"
            />
            <q-checkbox
              color="primary"
              keep-color
              left-label
              v-model="HIC076.no_firm_discap_cognit"
              label="Discapacidad cognitiva"
              true-value="S"
              false-value="N"
            />
            <q-checkbox
              color="primary"
              keep-color
              left-label
              v-model="HIC076.no_firm_discap_ment"
              label="Estado neurológico o mental alterado"
              true-value="S"
              false-value="N"
            />
            <div class="row q-mt-xs">
              <p class="q-pl-xs">Otro:</p>
              <Input_ class="col-12 q-mb-lg" v-model="HIC076.otr_discap" :field="form.otr_discap" />
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
        :disable="opcion_hic076 ? false : true"
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
import { impresionHIC076, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { calcularEdad, utilsFormat, evaluarClaseServ } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
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

const HIC076 = reactive({
  fecha: "",
  hora: "",
  servicio: "",
  nomb_procedim: "",
  no_firm_menor_edad: "N",
  no_firm_discap_cognit: "N",
  no_firm_discap_ment: "N",
  otr_discap: "",
});
const form = ref({
  nomb_procedim: {
    id: "nomb_procedim",
    maxlength: "250",
    label: "",
    rows: 5,
    campo_abierto: true,
  },
  otr_discap: {
    id: "otr_discap",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
});
const array_servic = ref([
  { COD: "0", DESCRIP: "DROGUERIA" },
  { COD: "1", DESCRIP: "CIRUGIAS" },
  { COD: "2", DESCRIP: "LABORATORIOS Y OTROS DIAGNOSTICOS" },
  { COD: "3", DESCRIP: "RX - IMAGENOLOGIA" },
  { COD: "4", DESCRIP: "OTROS SERVICIOS" },
  { COD: "5", DESCRIP: "CONSULTAS Y TERAPIAS" },
  { COD: "6", DESCRIP: "PATOLOGIA" },
  { COD: "7", DESCRIP: "PROMOCION Y PREVENCION" },
]);
const servicio = ref({
  select: evaluarClaseServ("3"),
  items: [
    { value: "DROGUERIA", label: "DROGUERIA" },
    { value: "CIRUGIAS", label: "CIRUGIAS" },
    { value: "LABORATORIOS Y OTROS DIAGNOSTICOS", label: "LABORATORIOS Y OTROS DIAGNOSTICOS" },
    { value: "RX - IMAGENOLOGIA", label: "RX - IMAGENOLOGIA" },
    { value: "OTROS SERVICIOS", label: "OTROS SERVICIOS" },
    { value: "CONSULTAS Y TERAPIAS", label: "CONSULTAS Y TERAPIAS" },
    { value: "PATOLOGIA", label: "PATOLOGIA" },
    { value: "PROMOCION Y PREVENCION", label: "PROMOCION Y PREVENCION" },
  ],
  serv_form: {
    label: "",
    required: true,
    id: "serv_form",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
});
const opcion_hic076 = ref(null);
onMounted(() => {
  HIC076.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC076.hora = dayjs().format("HH:mm");
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
  HIC076.servicio = array_servic.value.find((item) => item.DESCRIP == servicio.value.select).COD;
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC076));
  let llave_paci;
  if (/[A-Za-z]/.test(getPaci.cod)) {
    llave_paci = getPaci.cod.padStart(15, " ");
  } else {
    llave_paci = getPaci.cod + "00000000";
  }
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic076.value == "AUTORIZAR" ? "1" : "2",
    llave_fact: getSesion.modulo == "HIC" ? "" : `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getSesion.modulo == "HIC" ? getHc.llave : `${llave_paci}`,
    cod_med: getProf.cod,
    cod_consen: getSesion.modulo == "HIC" ? "HIC076" : "LAB022",
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
    const datos_hic076 = {
      autorizo: opcion_hic076.value == "AUTORIZAR" ? true : false,
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
      ...HIC076,
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
      datos: { ...firmas, cod_consen: "HIC076" },
      content: impresionHIC076({
        datos: datos_hic076,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC076" },
      content: impresionHIC076({
        datos: datos_hic076,
      }),
    });
    let nomb_consen = getSesion.modulo == "HIC" ? "HIC-076" : "LAB-022";
    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-${nomb_consen}` });
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
