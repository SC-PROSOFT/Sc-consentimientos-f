<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic136"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic136 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic136 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic136">
              {{ opcion_hic136 }}
            </q-chip>
          </p>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">INFORMACIÓN GENERAL</p>
            <p class="text-justify q-pa-xs">
              La colocación de tubos de ventilación a través del tímpano se realiza para favorecer la aireación del oído medio y está indicada en caso
              de otitis medias agudas de repetición, otitis seromucosas con pérdida auditiva y en casos de retracción del tímpano. Está intervención
              se lleva a cabo una vez comprobado que no se produce una reabsorción espontánea del moco del oído y que no responde a tratamientos
              habituales (medicación, inhaladores...). El tubo de ventilación se expulsa espontáneamente entre 3 meses y 1 año después de su inserción
              y, habitualmente, el tímpano se cierra completamente.
            </p>
            <p class="text-justify q-pa-xs">
              Las adenoides - cuyo término coloquial es vegetaciones - están constituidas por un tejido linfoide normal, similar al de las amígdalas,
              que está situado en la parte posterior de la nariz. El aumento del tamaño de los vegetaciones (hipertrofia de adenoides) o su infección
              crónica es frecuente en la edad infantil. La extirpación del adenoides (adenoidectomía) está justificada en caso de obstrucción nasal
              persistente y en caso de infecciones recidivantes del tejido adenoideo que provoca otitis de repetición o moco persistente en uno o
              ambos oídos.
            </p>
            <p class="text-justify q-pa-xs">
              El tipo de anestesia requerida será la indicada por el anestesiólogo. Es posible que, durante o después de la intervención, sea
              necesaria la utilización de sangre y/o hemoderivados. También es necesario que advierta de posibles alergias medicamentosas,
              alteraciones de la coagulación, enfermedades cardiopulmonares, existencia de prótesis, marcapasos, medicaciones actuales o cualquier
              otra circunstancia.
            </p>
          </div>

          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">
              EN QUE CONSISTE LA COLOCACIÓN DE TUBOS DE VENTILACIÓN
            </p>
            <p class="text-justify q-pa-xs">
              Para colocar los tubos de ventilación, primero se observa el tímpano y se realiza una apertura en el mismo, por la que habitualmente
              sale abundante moco, y que permite la colocación del dispositivo de ventilación.
            </p>
            <p class="text-justify q-pa-xs">
              También cabe lo posibilidad de que durante la cirugía haya que realizar modificaciones del procedimiento por los hallazgos
              intraoperartorios para proporcionar un tratamiento más adecuado.
            </p>
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RIESGOS DE LA COLOCACIÓN DE TUBOS DE VENTILACIÓN</p>
            <p class="text-justify q-pa-xs">
              A pesar de la adecuada elección de la técnica y de su correcta realización, pueden presentarse efectos indeseables, tanto los comunes
              derivados de toda intervención y que pueden afectar a todos los órganos y sistemas, como los debidos a la situación vital del paciente
              (peso, edad, diabetes, cardiopatía,...), y los específicos del procedimiento:
            </p>
            <p class="text-justify q-pa-xs">
              <span style="text-decoration: underline">Riesgos inmediatos:</span>
              Es habitual el sangrado del oído tras la colocación del tubo, con salida de material purulento o líquido que manche la almohada. La
              salida de este contenido del oído medio puede llevar consigo la expulsión espontánea del tubo de ventilación.
            </p>
            <p class="text-justify q-pa-xs">
              <span style="text-decoration: underline">Riesgos secundarios:</span>
              La aireación del oído medio puede comprometerse por obstrucción del tubo, por moco seco o cera, con lo que pueden volver a presentarse
              otitis. A veces, el tubo puede migrar hacia dentro del oído medio. En ocasiones y una vez fuera el tubo de ventilación (extrusión) se
              puede observar una perforación timpánica que no se cierre espontáneamente y que requiera una intervención quirúrgica y/o una
              modificación cicatricial del tímpano (atrofia, placa de esclerosis, granuloma).
            </p>
            <p class="text-justify q-pa-xs">
              <span style="text-decoration: underline">Complicaciones graves excepcionales:</span>
              Es excepcional la pérdida definitiva de audición, que puede ir acompañada de vértigo y la inclusión de tejido epidérmico por detrás de
              la membrana timpánica.
            </p>
            <p class="text-justify q-pa-xs">
              Estas complicaciones habitualmente se resuelven con tratamiento médico (medicamentos, sueros, etc.) pero pueden llegar a requerir una
              reintervención, en algunos casos de urgencia.
            </p>
            <p class="text-justify q-pa-xs">
              Ningún procedimiento invasivo está absolutamente exento de riesgos importantes, incluyendo el de mortalidad, si bien esta posibilidad es
              bastante infrecuente.
            </p>
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">EN QUE CONSISTE IA ADENOIDECTOMIA</p>
            <p class="text-justify q-pa-xs">
              La intervención sobre las adenoides se efectúa con la ayuda de un instrumento resector que se introduce por la boca y permite la
              extirpación de la mayor parte del tejido adenoideo. También cabe la posibilidad de que durante la cirugía haya que realizar
              modificaciones del procedimiento por los hallazgos intraoperatorios para proporcionar un tratamiento más adecuado.
            </p>
          </div>

          <!--  -->
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RIESGOS DE LA ADENOIDECTOMIA</p>
            <p class="text-justify q-pa-xs">
              A pesar de la adecuada elección de la técnica y de su correcta realización, pueden presentarse efectos indeseables, tanto los comunes
              derivados de toda intervención y que pueden afectar a todos los órganos y sistemas, como los debidos a la situación vital del paciente
              (peso, edad, diabetes, cardiopatía...) y los específicos del procedimiento:
            </p>
            <p class="text-justify q-pa-xs">
              <span style="text-decoration: underline">Riesgos inmediatos:</span>
              En ocasiones, se produce un sangrado persistente que requiere la revisión quirúrgico para controlarlo. Puede producirse un episodio
              infeccioso rinofaringeo o una otitis por infección del tejido operado. Debido a la utilización de los instrumentos a través de la boca,
              pueden producirse pequeñas heridas en labios o lengua e incluso la movilización de un diente.
            </p>
            <p class="text-justify q-pa-xs">
              <span style="text-decoration: underline">Riesgos secundarios:</span>
              Después de la cicatrización de la herida en la parte posterior de la nariz puede observarse una modificación de la voz debido al escape
              del aire a nivel del velo del paladar. Excepcionalmente, es necesaria una reeducación del lenguaje (logopedia).
            </p>
            <p class="text-justify q-pa-xs">
              No se puede descartar la posibilidad de presentar infecciones y otitis después de la intervención, aunque habitualmente la incidencia de
              infecciones se reduce ostensiblemente.
            </p>
            <p class="text-justify q-pa-xs">
              <span style="text-decoration: underline">Complicaciones graves excepcionales:</span>
              Una aspiración de sangre durante la intervención puede ser responsable de una infección pulmonar. La infección de los tejidos cervicales
              a través del tejido operado (flemón cervical) es rara.
            </p>
            <p class="text-justify q-pa-xs">
              Los síntomas más frecuentes asociados a la infección cervical son: fiebre alta, dolor de cuello y alteraciones en su movilización. En
              este caso, acuda al Área de Urgencias para valoración.
            </p>
            <p class="text-justify q-pa-xs">
              Estas complicaciones habitualmente se resuelven con tratamiento médico (medicamentos, sueros, etc.) pero pueden llegar a requerir una
              reintervención, en algunos casos de urgencia.
            </p>
            <p class="text-justify q-pa-xs">
              De cualquier forma, si ocurriera una complicación, debe saber que todos los medios técnicos de este Centro están disponibles para
              intentar solucionarla.
            </p>
            <!--  -->
          </div>
          <div class="col-12">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RIESGOS PERSONALIZADOS</p>
            <TextArea_ v-model="HIC136.riesgo_personaliz" :field="form.riesgo_personaliz" class="col-12" />
          </div>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">QUE OTRAS ALTERNATIVAS HAY</p>
            <p class="text-justify q-pa-xs">
              A pesar de las posibles complicaciones que puedan surgir, consideramos que el mejor tratqmiento, en su caso, es la cirugía y que no
              existe una alternativa mejor para usted.
            </p>
            <p class="text-justify q-pa-xs">
              Si después de leer detenidamente este documento desea más información, por favor, no dude en preguntar al especialista responsable, que
              le atenderá con mucho gusto.
            </p>
          </div>
        </div>
        <div v-if="opcion_hic136 == 'AUTORIZAR'">
          <p class="text-center" style="margin-top: 10px; font-weight: bold; margin-left: 10px; text-decoration: underline">Consentimiento</p>
          <div class="row">
            <p class="text-justify">
              <!-- Autoriza paciente -->
              <span v-if="!getAcomp.cod" class="text-justify q-pa-xs">
                Yo, <span class="text-bold">{{ getPaci.descrip }}</span>
              </span>

              <!-- Autoriza acompañante -->
              <span v-if="getAcomp.cod" class="text-justify q-pa-xs">
                Yo, <span class="text-bold">{{ getAcomp.descrip.trim() }}</span
                >, identifcado(a) con <span class="text-bold">{{ getAcomp.tipo_id }} </span>&nbsp;<span class="text-bold">{{ getAcomp.cod }}</span
                >, en calidad de familiar y/o acompañante responsable del paciente&nbsp;<span class="text-bold">{{ getPaci.descrip.trim() }},</span
                >&nbsp; identifcado(a) con&nbsp;<span class="text-bold">{{ getPaci.tipo_id }} </span>&nbsp;<span class="text-bold"
                  >{{ getPaci.cod.trim() }},</span
                >
              </span>

              <!-- Texto autoriza -->
              doy mi consentimiento para que sea realizada una
              <span class="text-bold">COLOCACIÓN DE TUBOS DE VENTILACIÓN BILATERAL + ADENOIDECTOMIA. </span>
              Se me ha facilitado esto hoja informativa, habiendo comprendido el significado del procedimiento y los riesgos inherentes al mismo, y
              declaro estar debidamente informado/a, habiendo tenido oportunidad de aclarar mis dudas en entrevista personal con el Dr:
            </p>
            <Input_ v-model="HIC136.med_explica" :field="form.med_explica" :inputStyle="{ width: '700px' }" />
            <p class="text-justify q-pa-xs">
              Asi mismo, he recibido respuesta o todas mis preguntas, habiendo tomado la decisión de manera libre y voluntaria.
            </p>
          </div>
        </div>

        <div v-if="opcion_hic136 == 'REVOCAR'">
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
        <span class="text-bold">Villavicencio, {{ HIC136.fecha }}. </span>
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
        :disable="opcion_hic136 ? false : true"
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
import { impresionHIC136, impresion, generarArchivo } from "@/impresiones";
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

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const firma_recibida_test = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);

const HIC136 = reactive({
  fecha: "",
  med_explica: "",
  riesgo_personaliz: "",
});

const opcion_hic136 = ref(null);

const form = ref({
  med_explica: {
    id: "med_explica",
    maxlength: "150",
    label: "",
    placeholder: "Nombre del profesional",
    campo_abierto: true,
  },
  riesgo_personaliz: {
    id: "riesgo_personaliz",
    maxlength: "500",
    label: "",
    rows: 3,
    campo_abierto: true,
  },
});
onMounted(() => {
  HIC136.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC136));
  let llave_paci;
  if (/[A-Za-z]/.test(getPaci.cod)) {
    llave_paci = getPaci.cod.padStart(15, " ");
  } else {
    llave_paci = getPaci.cod + "00000000";
  }
  const cod_hic = "HIC136";
  const cod_lab = "LAB056";
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic136.value == "AUTORIZAR" ? "1" : "2",
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
    const datos_hic136 = {
      autorizo: opcion_hic136.value == "AUTORIZAR" ? true : false,
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
      ...HIC136,
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
      datos: { ...firmas, cod_consen: "HIC136" },
      content: impresionHIC136({
        datos: datos_hic136,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC136" },
      content: impresionHIC136({
        datos: datos_hic136,
      }),
    });

  let nomb_consen = getSesion.modulo == "HIC" ? "HIC-136" : "LAB-056";
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
