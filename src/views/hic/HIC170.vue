<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic170"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic170 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic170 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic170">
              {{ opcion_hic170 }}
            </q-chip>
          </p>
        </div>

        <div class="row q-mt-md q-mb-md">
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">IDENTIFICACIÓN Y DESCRIPCIÓN DEL PROCEDIMIENTO</p>
            <p class="text-justify q-pa-xs">
              Llamamos sinequias nasales a las adherencias entre ambas paredes de la fosa nasal, la llamada pared lateral y la llamada medial o
              septal. Su origen puede ser muy diverso: infecciones sufridas con anterioridad, intervenciones quirúrgicas, taponamientos nasales,
              colocaciones de sondas de alimentación o aspiración, cauterizaciones nasales, etc., entre las más habituales. En muchos casos pasan
              desapercibidas pero, en otras ocasiones, pueden producir síntomas, como obstrucción nasal o la formación de costras.
            </p>
            <p class="text-justify q-pa-xs">
              La intervención se puede realizar bajo anestesia local o bajo anestesia general, en función de la magnitud y localización de la lesión.
              En ocasiones, a criterio del cirujano, puede resultar necesaria la colocación de una o varias láminas de material sintético abrazando el
              tabique nasal, sujetas mediante una sutura, durante un tiempo variable.
            </p>
            <p class="text-justify q-pa-xs">
              Al finalizar la intervención, según el criterio del cirujano, la extensión y la zona específica tratada, se puede colocar un
              taponamiento nasal, que se mantendrá durante un tiempo variable. Este taponamiento ocasionará molestias, como dolor o pesadez de cabeza,
              sensación de taponamiento de oídos, molestias al masticar y sequedad de garganta, que se atenúan con tratamiento sintomático. Los
              taponamientos nasales se asocian con antibioticoterapia oral para evitar infecciones de la propia nariz o de los senos.
            </p>
            <p class="text-justify q-pa-xs">
              Durante las primeras horas tras la intervención, incluso a través del taponamiento, suele drenar a través de la nariz un líquido
              sanguinolento, que se considera normal. Incluso a través del propio taponamiento, puede aparecer una hemorragia nasal. Ello obliga a
              revisar ese taponamiento previamente colocado. A veces requiere sustituirlo por otro que garantice algo más de presión.
              Excepcionalmente, puede requerir la revisión de la zona quirúrgica bajo anestesia general. En raras ocasiones, el taponamiento se puede
              desplazar por la parte posterior de la fosa nasal, hacia la garganta, provocando una sensación de molestias y náuseas, que se solucionan
              retirándolo y colocando otro, si es preciso. El mencionado taponamiento justifica que respire a través de la boca, por lo que pueden
              aparecer diversas molestias en la garganta.
            </p>
          </div>
          <div class="col-12">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">OBJETIVOS DEL PROCEDIMIENTO Y BENEFICIOS</p>
            <p class="text-justify q-pa-xs">
              Mejoría en la permeabilidad nasal y desaparición de los síntomas producidos por la dificultad respiratoria nasal.
            </p>
          </div>
          <div class="col-12">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">OTRAS ALTERNATIVAS</p>
            <p class="text-justify q-pa-xs">
              No se conocen otros métodos de eficacia contrastada para el tratamiento de la sinequia de las fosas nasales.
            </p>
          </div>

          <div class="col-12">
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">CONSECUENCIAS O POSIBLES RIESGOS</p>
            <ol class="text-justify">
              <li>
                <p class="text-justify q-pa-xs">
                  Después de la intervención, suele existir dolor en la fosa nasal, pudiendo irradiarse a la cara y a la cabeza.
                </p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">
                  Vómitos sanguinolentos con coágulos que, durante las primeras horas, se consideran normales. Estos coágulos son la manifestación de
                  la sangre deglutida y no precisan tratamiento. Deben desaparecer tras las primeras 24 horas de postoperatorio.
                </p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">
                  Retirado el taponamiento nasal, en el período postoperatorio es recomendable la realización de lavados de la fosa nasal mediante
                  suero fisiológico o soluciones similares, para favorecer la eliminación de costras que pueden dificultar la respiración nasal.
                </p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">
                  Posibilidad de que persistan o se reproduzcan las sinequias: las sinequias que afectan el techo nasal o el suelo de la fosa nasal en
                  su porción más anterior, obtienen siempre peor resultado quirúrgico y recidivan más frecuentemente.
                </p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">
                  Con frecuencia, durante el acto quirúrgico, el cirujano utiliza el llamado bisturí eléctrico. Con él realiza incisiones o cauteriza
                  pequeños vasos que están sangrando. Si bien se tiene un esmerado cuidado con este tipo de instrumental, cabe la posibilidad de que
                  se produzcan quemaduras, generalmente leves, en las proximidades de la zona a intervenir.
                </p>
              </li>
              <li>
                <p class="text-justify q-pa-xs">
                  Es posible que, aun solucionada la sinequia, persista la insuficiencia respiratoria nasal o que pueda aparecer cierta sequedad nasal
                  o sufrir la formación de costras, durante un periodo de tiempo relativamente largo e, incluso, con carácter permanente.
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div v-if="opcion_hic170 == 'AUTORIZAR'">
          <p class="text-center" style="margin-top: 10px; font-weight: bold; margin-left: 10px; text-decoration: underline">Consentimiento</p>
          <div>
            <p class="text-justify q-pa-xs">
              Yo, <span class="text-bold">{{ getPaci.descrip }}</span
              >, <span class="text-bold">{{ getPaci.tipo_id }}</span> - <span class="text-bold">{{ getPaci.cod }}</span
              >, edad <span class="text-bold">{{ calcularEdad(getPaci.nacim) }} </span>, doy mi consentimiento para que me sea realizada una
              <span class="text-bold">RESECCION DE SINEQUIA NASAL. </span>
            </p>
            <p class="text-justify q-pa-xs">
              Se me ha facilitado esto hoja informativa, habiendo comprendido el significado del procedimiento y los riesgos inherentes al mismo, y
              declaro estar debidamente informado/a, habiendo tenido oportunidad de aclarar mis dudas en entrevista personal con el Dr.:
            </p>
            <Input_ v-model="HIC170.med_explica" :field="form.med_explica" :inputStyle="{ width: '700px' }" />
            <p class="text-justify q-pa-xs">
              Asimismo, he recibido respuesta o todas mis preguntas, habiendo tomado la decisión de manera libre y voluntaria.
            </p>
          </div>
        </div>

        <div v-if="opcion_hic170 == 'REVOCAR'">
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
        <span class="text-bold">Villavicencio, {{ HIC170.fecha }}. </span>
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
        :disable="opcion_hic170 ? false : true"
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
import { impresionHIC170, impresion, generarArchivo } from "@/impresiones";
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

const HIC170 = reactive({
  fecha: "",
  med_explica: "",
});

const opcion_hic170 = ref(null);

const form = ref({
  med_explica: {
    id: "med_explica",
    maxlength: "150",
    label: "",
    placeholder: "Nombre del profesional",
    campo_abierto: true,
  },
});
onMounted(() => {
  HIC170.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC170));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic170.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC170",
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
    const datos_hic170 = {
      autorizo: opcion_hic170.value == "AUTORIZAR" ? true : false,
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
      ...HIC170,
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
      datos: { ...firmas, cod_consen: "HIC170" },
      content: impresionHIC170({
        datos: datos_hic170,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC170" },
      content: impresionHIC170({
        datos: datos_hic170,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-170` });
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
