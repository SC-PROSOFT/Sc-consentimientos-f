<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic171"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic171 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic171 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic171">
              {{ opcion_hic171 }}
            </q-chip>
          </p>
        </div>

        <div class="row q-mt-md q-mb-md">
          <div class="col-12">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">DATOS DE IDENTIFICACIÓN</p>
            <p class="text-justify q-pa-xs">
              Nombre del paciente: <span class="text-bold">{{ getPaci.descrip }} </span>
            </p>
            <p class="text-justify q-pa-xs">
              Historia Clínica No. <span class="text-bold">{{ getHc.llave }} </span>
            </p>
          </div>

          <div class="col-12">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">INFORMACION GENERAL</p>
            <p class="text-justify q-pa-xs">
              Durante el curso de la hospitalización se hace necesaria la transfusión de glóbulos rojos y otros hemocomponentes, como plaquetas,
              plasma o crioprecipitados, bien porque se precise durante una intervención quirúrgica, o bien porque tenga una enfermedad en la que se
              necesiten transfusiones.
            </p>
            <p class="text-justify q-pa-xs">
              Cuando su médico ha decidido ponerle sangre u otro producto sanguíneo es porque ha sopesado el beneficio de hacerlo frente a los riesgos
              que conlleva la transfusión, considerando, en ese caso, que si no se administrara la sangre, los problemas que podrían sucederle son muy
              superiores a los riesgos que en teoría pueden aparecer con la transfusión. No obstante, usted como paciente, tiene derecho a conocer
              esos riesgos y a decidir por sí mismo si acepta la administración de sangre o no, o si hay alguna otra alternativa.
            </p>
            <div class="row">
              <p class="text-justify q-pa-xs">El Doctor</p>
              <Input_ v-model="HIC171.med_orden" :field="form.med_orden" :inputStyle="{ width: '500px' }" />
              <p class="text-justify q-pa-xs">le ha ordenado un procedimiento de transfusión de</p>
              <Input_ v-model="HIC171.transfusion" :field="form.transfusion" :inputStyle="{ width: '500px' }" />
              <p class="text-justify q-pa-xs">
                La transfusión consiste en administrar sangre humana o algunos de sus componentes a través de una vena del paciente como si fuera
                suero.
              </p>
            </div>
          </div>
          <div class="col-12">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RIESGOS DE LA TRANSFUSION SANGUINEA</p>
            <p class="text-justify q-pa-xs">
              A pesar de la adecuada elección del procedimiento y de su correcta realización, pueden presentarse efectos indeseables, tanto los
              comunes derivados del mismo y que pueden afectar a todos los órganos y sistemas como los debidos a la situación vital del paciente
              (diabetes, cardiopatía, hipertensión, edad avanzada, anemia, obesidad) y los específicos del procedimiento.
            </p>
            <p class="text-justify q-pa-xs">
              La sangre y sus derivados proceden de personas que gozan de buena salud. Son personas que, por donar no reciben compensación económica
              alguna. Todos los donantes son seleccionados con criterios médicos y la sangre se estudia cuidadosamente con los análisis que exigen las
              leyes (Decreto 1571 de 1993, Resolución 001738 de 1995, Resolución 901 de 1996, Resolución 437 de 2014. A todas las unidades de sangre o
              hemocomponentes que vaya usted a recibir se les habrá realizado previamente las pruebas de rastreo de anticuerpos irregulares, prueba
              para detección de SIDA (antígeno p-24 y anticuerpos anti HIV1-HIV-2), prueba para la detección de hepatitis (Antígeno de superficie para
              el virus de la Hepatitis B y Anticuerpos contra el antígeno core del virus de la hepatitis B y Anticuerpos contra el virus de la
              Hepatitis C), prueba para detección de la enfermedad de Chagas (Anticuerpos contra el tripanosoma cruzi), prueba para el paludismo
              (detección de los HEMOPARASITOS), para el HTLV I-II y para la SIFILIS (anticuerpos contra el treponema pallidum ) , todas con resultados
              no reactivos o negativos por lo cuál llevan adheridos nuestro sello de calidad. Pese a ello existe una posibilidad de que los donantes
              se encuentren en período de ventana inmunológica o sea que el contagio sea reciente y sea imperceptible para las pruebas diagnósticas,
              por tanto la probabilidad de contagio se estima es de 1 de cada 20.000 transfusiones para el SIDA, y de 1 de cada 80.000 para la
              HEPATITIS B, y 1 de cada 35.000 para la HEPATITIS C, éstas cifras indican que aún con la tecnología de hoy en día es posible
              contagiarse1.
            </p>
            <p class="text-justify q-pa-xs">
              Su sangre se ha analizado previamente para hemoclasificación y se le han hecho las pruebas de compatibilidad correspondientes a los
              glóbulos rojos con resultado COMPATIBLE, sin embargo debe saber que hay posibilidad de reacciones adversas las cuales se pueden
              manifestar por: fiebre, escalofrío, brote, prurito (picazón), enrojecimiento, cansancio, dolor torácico/espalda/lumbar, calor o dolor en
              el sitio de la infusión, sudoración, nauseas/vomito, mareo o tos, hipotensión, taquicardia, ansiedad, palpitaciones, cefalea (dolor de
              cabeza), disnea (respiración con dificultad), dolor lumbar, sangrado incontrolable. Por favor si siente alguna de las anteriores
              comuníqueselo a la enfermera o al médico responsables de la transfusión. Ningún procedimiento invasivo está absolutamente exento de
              riesgos importantes, incluyendo el de mortalidad, si bien esta posibilidad es bastante infrecuente. De cualquier forma, si ocurriera una
              complicación, debe saber que todos los medios técnicos y científicos del Hospital Departamental de Villavicencio están disponibles para
              intentar solucionarla.
            </p>
          </div>
          <div class="col-12">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">QUE OTRAS ALTERNATIVAS HAY</p>
            <p class="text-justify q-pa-xs">
              <span class="text-bold" style="text-decoration: underline">LA AUTOTRANSFUSION:</span>
              Si va a someterse a una cirugía programada en la que pueda necesitarse sangre, se encuentra bien de salud y lo hace con suficiente
              anticipación, es posible que pueda donar su propia sangre en un procedimiento que se denomina autotransfusión. Así dispondría de sus
              propias bolsas de sangre por si fueran necesarias durante la intervención. Actualmente, no existen otras alternativas a las
              transfusiones de sangre exceptuando el empleo de la eritropoyetina en los enfermos renales.
            </p>
            <p class="text-justify q-pa-xs">
              Si después de leer detenidamente éste documento desea más información, por favor no dude en preguntarle al médico responsable, que le
              atenderá con mucho gusto.
            </p>
          </div>
        </div>
        <div v-if="opcion_hic171 == 'AUTORIZAR'">
          <p class="text-center" style="margin-top: 10px; font-weight: bold; margin-left: 10px; text-decoration: underline">Consentimiento</p>
          <div>
            <p class="text-bold text-justify q-pa-xs">Fecha: {{ HIC171.fecha }}</p>
            <p class="text-bold text-justify q-pa-xs">1. Declaración del Paciente:</p>

            <p class="text-justify q-pa-xs">
              Yo, <span class="text-bold">{{ getPaci.descrip }}</span> doy mi consentimiento para que me sea realizada la
              <span class="text-bold">TRANSFUSIÓN DE COMPONENTES DE LA SANGRE </span> y los procedimientos complementarios que sean necesarios o
              convenientes durante la realización de este a juicio de los profesionales que lo lleven a cabo.
            </p>
            <p class="text-justify q-pa-xs">
              Me han explicado y he comprendido satisfactoriamente la naturaleza y propósito de este procedimiento, también me han aclarado todas las
              dudas y me han dicho los posibles riesgos y complicaciones, así como las otras alternativas de tratamiento. Soy consciente que no
              existen garantías absolutas del resultado del procedimiento.
            </p>
            <p class="text-bold text-justify q-pa-xs">2. Declaraciones:</p>
            <div class="row">
              <p class="text-bold text-justify q-pa-xs">A. NOMBRE MEDICO(S) RESPONSABLE(S)</p>
              <Input_ v-model="HIC171.med_explica" :field="form.med_explica" :inputStyle="{ width: '700px' }" />
              <p class="text-justify q-pa-xs">
                He informado al paciente del propósito y naturaleza del procedimiento descrito arriba, de sus alternativas, posibles riesgos y de los
                resultados que se esperan.
              </p>
            </div>
            <div class="row" v-if="getAcomp.cod">
              <p class="text-bold text-justify q-pa-xs">B. TUTOR LEGAL O FAMILIAR.</p>
              <p class="text-justify q-pa-xs">
                Sé que el paciente
                <span class="text-bold">{{ getPaci.descrip }}</span> ha sido considerado por ahora incapaz de tomar por si mismo la decisión de
                aceptar o rechazar el procedimiento descrito arriba. El médico me ha explicado de forma satisfactoria que es, como se hace y para que
                sirve este procedimiento. También se me ha explicado sus riesgos y complicaciones. He comprendido todo lo anterior perfectamente y por
                ello yo, <span class="text-bold">{{ getAcomp.descrip }}</span
                >, con documento de identidad <span class="text-bold">{{ getAcomp.tipo_id }}</span> - <span class="text-bold">{{ getAcomp.cod }}</span
                >, parentesco <span class="text-bold">{{ evaluarParentesco(getPaci.paren_acomp) }}</span
                >, doy mi consentimiento para que el (los) doctor(a)(es):
              </p>
              <Input_ v-model="HIC171.med_procedim" :field="form.med_procedim" :inputStyle="{ width: '1000px' }" />
              <p class="text-justify q-pa-xs">
                y el personal auxiliar que el/ella(os) precise(n) le realicen este procedimiento. Puedo revocar este consentimiento cuando en bien del
                paciente se presuma oportuno.
              </p>
            </div>
          </div>
        </div>

        <div v-if="opcion_hic171 == 'REVOCAR'">
          <p class="text-center" style="margin-top: 10px; font-weight: bold; margin-left: 10px; text-decoration: underline">
            Denegación o Revocación
          </p>
          <p class="text-justify">
            <!-- Revoca paciente -->
            <span v-if="!getAcomp.cod" class="text-justify q-pa-xs">
              Yo, <span class="text-bold">{{ getPaci.descrip }}</span>
            </span>

            <!-- Revoca acompañante -->
            <span v-if="getAcomp.cod" class="text-justify q-pa-xs">
              Yo <span class="text-bold">{{ getAcomp.descrip.trim() }}</span
              >, identifcado(a) con <span class="text-bold">{{ getAcomp.tipo_id }} </span>&nbsp;<span class="text-bold">{{ getAcomp.cod }}</span
              >, en calidad de familiar y/o acompañante responsable del paciente&nbsp;<span class="text-bold">{{ getPaci.descrip.trim() }},</span
              >&nbsp; identifcado(a) con&nbsp;<span class="text-bold">{{ getPaci.tipo_id }} </span>&nbsp;<span class="text-bold">{{
                getPaci.cod
              }}</span>
            </span>

            <!-- Texto revoca -->
            después de ser informado/a de la naturaleza y riesgos del procedimiento propuesto, manifiesto de forma libre y consciente mi denegación /
            revocación (táchese lo que no proceda) para su realización, haciéndome responsable de las consecuencias que puedan derivarse de esta
            decisión.
          </p>
        </div>
        <span class="text-bold">Villavicencio, {{ HIC171.fecha }}. </span>
      </q-card-section>
    </div>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around">
        <ContainerFirma
          :quien_firma="getAcomp.cod ? 'FIRMA ACOMPAÑANTE' : 'FIRMA PACIENTE'"
          :firmador="getAcomp.cod ? getAcomp.descrip : getPaci.descrip"
          :registro_profe="getAcomp.cod ? getAcomp.cod : getPaci.cod"
          @reciFirma="callBackFirma"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getTestigo.descrip"
          :registro_profe="getTestigo.cod"
          @reciFirma="callBackFirmaTest"
          quien_firma="FIRMA TESTIGO"
          :codigo_firma="getTestigo.cod"
          class="col-4"
        />
        <ContainerFirma
          disable
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.cod"
          quien_firma="FIRMA PROFESIONAL"
          :codigo_firma="getProf.cod"
          class="col-4"
        />
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hic171 ? false : true"
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
import { impresionHIC171, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat, evaluarParentesco } from "@/formatos/utils";
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

const HIC171 = reactive({
  fecha: "",
  med_explica: "",
  med_orden: "",
  transfusion: "",
  med_procedim: "",
});

const opcion_hic171 = ref(null);

const form = ref({
  med_explica: {
    id: "med_explica",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
  med_orden: {
    id: "med_orden",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
  transfusion: {
    id: "transfusion",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
  med_procedim: {
    id: "med_procedim",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
});
onMounted(() => {
  HIC171.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC171));
  // Lógica dual HIC / LAB
  let llave_paci;
  if (/[A-Za-z]/.test(getPaci.cod)) {
    llave_paci = getPaci.cod.padStart(15, " ");
  } else {
    llave_paci = getPaci.cod + "00000000";
  }
  const cod_hic = "HIC171";
  const cod_lab = "LAB091";
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic171.value == "AUTORIZAR" ? "1" : "2",
    llave_fact: getSesion.modulo == "HIC" ? "" : `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    oper_consen: getSesion.oper,
    llave_consen: getSesion.modulo == "HIC" ? getHc.llave : `${llave_paci}`,
    cod_med: getProf.cod,
    cod_consen: getSesion.modulo == "HIC" ? cod_hic : cod_lab,
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
    getAcomp.cod.trim() && (await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` }));
    await guardarFile$({ base64: firma_recibida_test.value, codigo: `T${llave}` });
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });

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
    const datos_hic171 = {
      autorizo: opcion_hic171.value == "AUTORIZAR" ? true : false,
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
      ...HIC171,
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
      datos: { ...firmas, cod_consen: "HIC171" },
      content: impresionHIC171({
        datos: datos_hic171,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC171" },
      content: impresionHIC171({
        datos: datos_hic171,
      }),
    });
  let nomb_consen = getSesion.modulo == "HIC" ? "HIC-171" : "LAB-091";
  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}${nomb_consen}` });
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
