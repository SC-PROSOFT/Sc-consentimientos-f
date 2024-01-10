<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="pagina1" label="Pagina 1" />
        <q-tab name="pagina2" label="Pagina 2" />
      </q-tabs>
      <div class="text-center">
        <q-toggle
          v-model="opcion_hc043"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="opcion_hc043 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip
            :color="opcion_hc043 == 'AUTORIZAR' ? 'green' : 'red'"
            class="text-white"
            v-if="opcion_hc043"
          >
            {{ opcion_hc043 }}
          </q-chip>
        </p>
      </div>
      <div>
        <p>
          <span class="text-bold">CIUDAD:</span> {{ getEmpresa.ciudad_usuar }}&nbsp;
          <span class="text-bold">FECHA ACTUAL:</span>
          {{ dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD") }}
        </p>
      </div>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="pagina1" class="q-pa-none">
          <q-form>
            <div class="border-format">
              <div class="text-center text-subtitle1 text-bold q-py-xs">
                DATOS DE IDENTIFICACIÓN DE LA PERSONA
              </div>
              <div class="q-pa-md">
                <p>
                  <span class="text-bold">NOMBRE: &nbsp;</span> {{ getPaci.descrip }},
                  <span class="text-bold"> &nbsp; TIPO DE IDENTIFICACIÓN: &nbsp;</span> {{ getPaci.tipo_id }},
                  <span class="text-bold">&nbsp;NUMERO &nbsp;</span> {{ getPaci.cod }}
                </p>
                <p>
                  <span class="text-bold">FECHA DE NACIMIENTO: &nbsp;</span
                  >{{ dayjs(getPaci.nacim).format("YYYY-MM-DD") }}, {{ calcEdad(getPaci.nacim) }} años
                </p>
                <p>
                  <span class="text-bold"> NOMBRE DE LA EAPB RESPONSABLE:&nbsp;</span> {{ getEmpresa.nomusu }}
                </p>
                <p v-if="getPaci.sexo == 'F'">
                  <span class="text-bold">MUJER EN ESTADO DE EMBARAZO &nbsp;</span>
                  <Select_
                    style="min-width: 100px; display: inline-block"
                    v-model="reg.embarazada"
                    :field="form.embarazada"
                    :items="embarazada"
                  />
                </p>
              </div>
            </div>
            <div class="border-format q-mt-sm">
              <div class="text-center text-subtitle1 text-bold q-py-xs">INFORMACIÓN PREVIA</div>
              <p style="text-align: justify">
                La vacunación es una forma segura y eficaz de prevenir enfermedades y salvar muchas vidas. En
                la actualidad el país dispone de vacunas para proteger contra al menos 26 enfermedades, entre
                ellas, la difteria, el tétanos, la tos ferina, la poliomielitis, la hepatitis, el cáncer de
                útero y el sarampión. En conjunto, estas vacunas salvan cada año millones de vidas en el
                mundo. Con la aplicación de las vacunas las personas se protegen a sí mismas y a quienes las
                rodean.
              </p>
              <p style="text-align: justify">
                La vacunación contra el SARS- CoV-2/COVID-19 reducirá la posibilidad de presentar la
                enfermedad. En esta etapa de la emergencia, en la cual se inicia la aplicación de esta vacuna,
                se han reconocido beneficios y riesgos, que es importante que usted conozca antes de dar el
                consentimiento para su aplicación.
              </p>
              <p style="text-align: justify">
                Esta vacuna tiene aprobación de uso de emergencia y surtió los pasos para la validación
                científica y sanitaria que permite su aplicación segura en humanos.
              </p>
            </div>
            <div class="border-format q-mt-sm">
              <div class="text-center text-subtitle1 q-py-xs">
                <span class="text-bold">DATOS IMPORTANTES DE LA VACUNA </span> (Por favor, leer con
                detenimiento. Puede formular preguntas)
              </div>
              <div class="row">
                <div class="col-3" style="background-color: #b2ceeb">
                  <div class="border-a text-center text-bold" style="height: 72px">VACUNA Y DOSIS</div>
                  <div class="border-x text-center text-bold" style="height: 95px">BENEFICIOS</div>
                  <div class="border-a text-center text-bold" style="height: 150px">RIESGOS</div>
                  <div class="border-b-r-l text-center text-bold" style="height: 60px">ALTERNATIVAS</div>
                </div>
                <div class="col-9">
                  <div class="border-t-b-r row" style="height: 72px">
                    <Input_
                      class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
                      style="display: inline-block"
                      v-model="reg.nom_vacuna"
                      :field="form.nom_vacuna"
                    />
                    <Select_
                      class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                      style="display: inline-block"
                      v-model="reg.cant_dosis"
                      :field="form.cant_dosis"
                      :items="cant_dosis"
                    />
                  </div>
                  <div class="border-b-r row" style="height: 95px">
                    <p>
                      Prevención de la enfermedad COVID-19, causada por el virus SARS-CoV-2. Reducción de la
                      severidad de la enfermedad en caso de presentarse. Potencial protección del entorno
                      familiar y los allegados. RIESGOS Presentación de efectos adversos a corto y mediano
                      plazo
                    </p>
                  </div>
                  <div class="border-b-r row" style="height: 150px">
                    <p>
                      Presentación de efectos adversos a corto y mediano plazo posterior a su aplicación como:
                      dolor en el sitio de inyección, dolor de cabeza (cefalea, articulaciones (artralgia),
                      muscular (mialgia); fatiga (cansancio); resfriado; fiebre (pirexias); enrojecimiento e
                      inflamación leve en el lugar de la inyección; inflamación de los ganglios
                      (linfadenopatía); malestar general; sensación de adormecimiento en las extremidades,
                      reacciones alérgicas leves, moderadas o severas. Estos no se presentan en todas las
                      personas.
                    </p>
                  </div>
                  <div class="border-b-r row" style="height: 60px">
                    A la fecha no se ha identificado otra medida farmacológica más eficaz que la vacunación
                    para la prevención de la COVID-19.
                  </div>
                </div>
              </div>
            </div>
            <div class="border-format q-mt-sm">
              <div class="text-center text-subtitle1 q-py-xs text-bold">
                INFORMACION ESPECIFICA PARA GESTANTES
              </div>
              <p style="text-align: justify">
                La vacuna de Pfizer es la única que tiene aprobado el uso en mujeres gestantes desde la semana
                doce (12) y durante los 40 días postparto, siempre que los posibles beneficios superen los
                posibles riesgos con base en la evaluación clínica realizada en conjunto por el médico
                tratante y la gestante.
              </p>
              <p style="text-align: justify">
                La vacuna que s ele esta administrando es eficaz para evitar complicaciones severas y muerte
                por SARS CoV-2 COVID-19 en la gestante, en el feto o neonato. <br />
                A la fecha no hay pruebas que la vacuna cause efectos adversos diferentes a los observados en
                la población general importantes para la mujer embarazada, el feto o la placenta.
              </p>
            </div>
          </q-form>
        </q-tab-panel>
        <q-tab-panel name="pagina2" class="q-pa-none">
          <div class="border-format">
            <p style="text-align: justify">
              A nivel poblacional son muchos mayores los beneficios de administrar la vacuna, sobre los
              riesgos de llegar a padecer COVID-19 durante la gestación, por el impacto que sobre la salud
              materna y perinatal produce la infección por SARS-CoV2 y ante el alto riesgo de complicaciones
              severas, ingreso a UCI morbilidad y mortalidad materna y fetal asociada a esta enfermedad.
            </p>
            <p>
              Manifiesto que soy mujer con mas de 12 semanas de gestación o que me encuentro dentro de los 40
              días postparto y realicé previamente la evaluación riesgo-beneficio junto con mi médico.
            </p>
          </div>
          <div class="border-format q-mt-sm">
            <div class="text-center">
              <span class="text-bold">EXPRESIÓN DE LA VOLUNTAD </span>
              <p style="text-align: justify">
                De manera voluntaria, después de haber recibido información por el personal de salud, de
                manera clara, concreta, sencilla y en términos acordes con mi condición, así como las
                explicaciones adecuadas, informo que comprendo los beneficios, riesgos, alternativas e
                implicaciones de la aplicación de la vacuna que se me ofrece. De la misma manera, se me han
                indicado las recomendaciones que debo seguir, de acuerdo con la información entregada por el
                laboratorio productor de la vacuna.
              </p>
              <p style="text-align: justify">
                Entiendo que la suscripción de este documento constituye una expresión autónoma de mi
                voluntad, y que NO tiene por objeto eximir de responsabilidad a las autoridades sanitarias o
                gubernamentales ni a las entidades que participaron en la aplicación de la vacuna contra el
                SARS-CoV-2/COVID-19 de brindar la atención en salud que sea necesaria por la aparición de
                posibles reacciones adversas no reportadas.
              </p>
              <p style="text-align: left">
                En consecuencia, decido
                <ins
                  ><span class="text-bold">{{ opcion_hc043 || "_______" }}</span></ins
                >
                con el procedimiento informado.
              </p>
            </div>
          </div>
          <div class="q-mt-sm text-center">
            <p>
              <span class="text-bold">Nota:</span> Cuanto se trate de menores de edad, deberá firmar el menor
              junto con representación legal.
            </p>
            <p>
              <span class="text-bold">Tipos de documentos de identidad:</span> RC: Registro Civil, TI: Tarjeta
              de Identidad, CC: Cédula de ciudadanía, CE: Cédula de extranjería
            </p>
          </div>
        </q-tab-panel>
      </q-tab-panels>
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
      <div class="col-12 row justify-center q-my-md">
        <q-btn
          :disable="opcion_hc043 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mr-lg"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { impresionHC043, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted } from "vue";
import { calcEdad, utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const router = useRouter();
const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));

const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const fecha_act = ref(null);

const reg = ref({
  embarazada: null,
  nom_vacuna: null,
  cant_dosis: null,
});
const opcion_hc043 = ref(null);
const tab = ref("pagina1");

const embarazada = [
  { value: "S", label: "SI" },
  { value: "N", label: "NO" },
];

const cant_dosis = [
  { value: "1RA", label: "Primera dosis" },
  { value: "2DA", label: "Segunda dosis" },
  { value: "1RF", label: "Primer refuerzo" },
  { value: "2RF", label: "Segundo refuerzo" },
  { value: "ADC", label: "Dosis adicional" },
];

const form = ref({
  embarazada: {
    id: "embarazada",
    maxlength: "1",
    label: "",
    required: true,
    disable: false,
    campo_abierto: true,
  },
  cant_dosis: {
    id: "cant_dosis",
    maxlength: "1",
    label: "Dosis",
    required: true,
    disable: false,
    campo_abierto: true,
  },
  nom_vacuna: {
    id: "nom_vacuna",
    maxlength: "60",
    label: "Nombre de la vacuna a aplicar:",
    required: true,
    disable: false,
    nocounter: false,
    campo_abierto: true,
  },
});

onMounted(() => {
  console.log("getEmpresa-->", getEmpresa);
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
  if (getPaci.sexo == "F" && !reg.value.embarazada)
    return CON851("?", "info", "Ingrese estado de embarazo", () => foco_(form, "embarazada"));

  if (opcion_hc043.value == "AUTORIZAR") {
    if (!reg.value.nom_vacuna)
      return CON851("?", "info", "Ingrese nombre de la vacuna", () => foco_(form, "nom_vacuna"));
    if (!reg.value.cant_dosis)
      return CON851("?", "info", "Ingrese dosis vacuna", () => foco_(form, "cant_dosis"));
  }
  
  if (!firma_recibida.value && !getAcomp.cod) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg.value));
  datos_format.fecha_ult_cito = dayjs(datos_format.fecha_ult_cito).format("YYYYMMDD");
  let datos = {
    estado: opcion_hc043.value == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC043",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(24, 32);
        fecha_act.value = dayjs(fecha).format("YYYY-MM-DD");
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
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });

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
    const datos_hic043 = {
      autorizo: opcion_hc043.value == "AUTORIZAR" ? true : false,
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
      fecha: reg.value.fecha_act,
      llave: reg.value.llave,
      ...reg.value,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = utilsFormat({
      datos: firmas,
      content: impresionHC043({
        datos: datos_hic043,
      }),
    });
    const docDefinitionFile = utilsFormat({
      datos: firmas,
      content: impresionHC043({
        datos: datos_hic043,
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
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
</script>

<style>
.border-a {
  border: 1px solid #0f0f0f;
  padding: 5px;
}

.border-x {
  border-left: 1px solid #0f0f0f;
  border-right: 1px solid #0f0f0f;
  padding: 5px;
}

.border-b-r-l {
  border-bottom: 1px solid #0f0f0f;
  border-right: 1px solid #0f0f0f;
  border-left: 1px solid #0f0f0f;
  padding: 5px;
}

.border-t-b-r {
  border-top: 1px solid #0f0f0f;
  border-right: 1px solid #0f0f0f;
  border-bottom: 1px solid #0f0f0f;
  padding: 5px;
}
.border-b-r {
  border-right: 1px solid #0f0f0f;
  border-bottom: 1px solid #0f0f0f;
  padding: 5px;
}
</style>
