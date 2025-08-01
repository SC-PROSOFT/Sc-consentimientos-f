<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic071"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic071 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic071 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic071">
              {{ opcion_hic071 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <div class="row">
            <p style="font-weight: bold">Ciudad:</p>
            <p>&nbsp;Granada/Meta</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">Fecha:</p>
            <p>&nbsp;{{ HIC071.fecha }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">Hora:</p>
            <p>&nbsp;{{ HIC071.hora }}</p>
          </div>
        </div>

        <div class="row q-mt-md q-mb-md">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%; background-color: #e0e0e0">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">DATOS DE IDENTIFICACIÓN DE LA PERSONA</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Nombres y apellidos:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.descrip }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Tipo de identificación:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.tipo_id }}</p>
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Numero:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.cod }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Fecha de nacimiento:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ dayjs(getPaci.nacim).format("YYYY-MM-DD") }}</p>
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Edad:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ calcularEdad(getPaci.nacim) }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Nombre de la EAPB responsable:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getEmpresa.nomusu }}</p>
          </div>
        </div>

        <div class="row q-mt-md q-mb-md">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%; background-color: #e0e0e0">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">INFORMACIÓN PREVIA</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
            <p style="padding: 8px">
              La vacunación es una forma segura y eficaz de prevenir enfermedades y salvar muchas vidas. En la actualidad el país dispone de vacunas
              para proteger contra al menos 26 enfermedades, entre ellas, la difteria, el tétanos, la tos ferina, la poliomielitis, la hepatitis, el
              cáncer de útero y el sarampión. En conjunto, estas vacunas salvan cada año millones de vidas en el mundo. Con la aplicación de las
              vacunas las personas se protegen a sí mismas y a quienes las rodean.
            </p>
            <p style="padding: 8px">
              La vacunación contra el SARS- CoV-2/COVID-19 reducirá la posibilidad de presentar la enfermedad. En esta etapa de la emergencia, en la
              cual se inicia la aplicación de esta vacuna, se han reconocido beneficios y riesgos, que es importante que usted conozca antes de dar el
              consentimiento para su aplicación.
            </p>
            <p style="padding: 8px">
              Esta vacuna tiene aprobación de uso de emergencia y surtió los pasos para la validación científica y sanitaria que permite su aplicación
              segura en humanos.
            </p>
          </div>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%; background-color: #e0e0e0">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">
              DATOS IMPORTANTES DE LA VACUNA (Por favor, leer con detenimiento. Puede formular preguntas)
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">VACUNA Y DOSIS</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 80%">
            <div class="row q-mt-md">
              <p style="margin-top: 10px; margin-left: 10px">Nombre de la vacuna a aplicar:</p>
              <Input_ v-model="HIC071.nomb_vacuna" :field="form.nomb_vacuna" :inputStyle="{ width: '420px' }" />
            </div>
            <p style="margin-top: 10px; margin-left: 10px">
              Esquema que tiene esta vacuna:
              <q-checkbox color="primary" keep-color label="Dos Dosis" v-model="HIC071.dos_dosis" true-value="S" false-value="N" />
              <q-checkbox color="primary" keep-color label="o dosis única" v-model="HIC071.dosis_unica" true-value="S" false-value="N" />
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">COMO SE APLICA</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 80%">
            <p style="margin-top: 10px; margin-left: 10px">Administración vía intramuscular en el brazo (tercio medio del músculo deltoides).</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p style="margin-top: 10px; margin-left: 10px">BENEFICIOS</p>
          </div>
          <div class="text-justify" style="font-weight: bold; border: 1px solid #ccc; width: 80%">
            <ul>
              <li>Prevención de la enfermedad COVID-19, causada por el virus SARS-CoV-2.</li>
              <li>Reducción de la severidad de la enfermedad en caso de presentarse.</li>
              <li>Potencial protección del entorno familiar y los allegados.</li>
            </ul>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">RIESGOS</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 80%">
            <ul>
              <li>
                <p style="padding: 8px">
                  Presentación de efectos adversos a corto y mediano plazo posterior a su aplicación como: dolor en el sitio de inyección, dolor de
                  cabeza (cefalea, articulaciones (artralgia), muscular (mialgia); fatiga (cansancio); resfriado; fiebre (pirexias); enrojecimiento e
                  inflamación leve en el lugar de la inyección; inflamación de los ganglios (linfadenopatía); malestar general; sensación de
                  adormecimiento en las extremidades, reacciones alérgicas leves, moderadas o severas.
                </p>
              </li>
              <li>
                <p style="padding: 8px">Estos no se presentan en todas las personas.</p>
              </li>
            </ul>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">ALTERNATIVAS</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 80%">
            <p style="padding: 8px">
              A la fecha no se ha identificado otra medida farmacológica más eficaz que la vacunación para la prevención de la COVID-19.
            </p>
          </div>
        </div>

        <div class="row q-mt-md q-mb-md">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%; background-color: #e0e0e0">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">EXPRESIÓN DE LA VOLUNTAD</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
            <p style="padding: 8px">
              De manera voluntaria, después de haber recibido información por el personal de salud, de manera clara, concreta, sencilla y en términos
              acordes con mi condición, así como las explicaciones adecuadas, informo que comprendo los beneficios, riesgos, alternativas e
              implicaciones de la aplicación de la vacuna que se me ofrece. De la misma manera, se me han indicado las recomendaciones que debo
              seguir, de acuerdo con la información entregada por el laboratorio productor de la vacuna.
            </p>
            <p style="padding: 8px">
              Entiendo que la suscripción de este documento constituye una expresión autónoma de mi voluntad, y que NO tiene por objeto eximir de
              responsabilidad a las autoridades sanitarias o gubernamentales ni a las entidades que participaron en la aplicación de la vacuna contra
              el SARS-CoV-2/COVID-19 de brindar la atención en salud que sea necesaria por la aparición de posibles reacciones adversas no reportadas.
            </p>
            <p style="padding: 8px">
              En consecuencia, decido
              <q-radio color="primary" disabled v-model="autoriza" val="S" label="ACEPTAR:" />
              que se me aplique la vacuna.
              <q-radio color="primary" disabled v-model="autoriza" val="N" label="NO ACEPTAR:" />
              que se me aplique la vacuna.
            </p>
          </div>
        </div>

        <div class="row q-mt-md q-mb-md">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%; background-color: #e0e0e0">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">DATOS DE LA INSTITUCIÓN</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
            <p style="padding: 8px">
              INSTITUCIÓN PRESTADORA DE SERVICIOS SALUD (IPS):
              <span class="text-bold q-ml-xs" style="text-decoration: underline"> ESE PRIMER NIVEL GRANADA SALUD </span>
              DEPARTAMENTO/DISTRITO: <span class="text-bold q-ml-xs" style="text-decoration: underline"> META </span> MUNICIPIO:
              <span class="text-bold q-ml-xs"> GRANADA. </span>
            </p>
          </div>
        </div>
        <div class="text-justify">
          <span class="text-bold q-ml-xs"> Nota: </span> Cuanto se trate de menores de edad, deberá firmar el menor junto con la persona que tiene la
          patria potestad, la representación legal o la custodia. La persona que no pueda o no sepa firmar podrá acudir a la firma a ruego, en los
          términos de ley.
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
          :tipo_doc="getPaci.tipo_id"
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :registro_profe="getAcomp.cod"
          :tipo_doc="getAcomp.tipo_id"
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
        :disable="opcion_hic071 ? false : true"
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
import { impresionHIC071, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive, computed } from "vue";
import { calcularEdad, utilsFormat } from "@/formatos/utils";
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

const HIC071 = reactive({
  fecha: "",
  hora: "",
  nomb_vacuna: "",
  dos_dosis: "N",
  dosis_unica: "N",
});
const form = ref({
  nomb_vacuna: {
    id: "nomb_vacuna",
    maxlength: "150",
    label: "",
    rows: 5,
    campo_abierto: true,
  },
});

const opcion_hic071 = ref(null);
const autoriza = computed(() => {
  switch (opcion_hic071.value) {
    case "AUTORIZAR":
      return "S";
    case "REVOCAR":
      return "N";
    default:
      return "";
  }
});
onMounted(() => {
  HIC071.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC071.hora = dayjs().format("HH:mm");
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
  const datos_format = JSON.parse(JSON.stringify(HIC071));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic071.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC071",
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
    const datos_hic071 = {
      autorizo: opcion_hic071.value == "AUTORIZAR" ? true : false,
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
      ...HIC071,
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
      datos: { ...firmas, cod_consen: "HIC071" },
      content: impresionHIC071({
        datos: datos_hic071,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC071" },
      content: impresionHIC071({
        datos: datos_hic071,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-071` });
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
