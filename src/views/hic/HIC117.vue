<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic117"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic117 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic117 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic117">
              {{ opcion_hic117 }}
            </q-chip>
          </p>
        </div>

        <div class="row q-mt-md q-mb-md">
          <p class="text-justify q-pa-xs">
            La anestesia es el procedimiento médico que permite realizar uno operación quirúrgica sin dolor. La anestesia puede realizarse durmiendo
            al paciente (anestesia general) o haciendo insensible la parte del cuerpo en la que se va a realizar la operación (anestesio local o
            regional). En algunas ocasiones después de practicar una anestesia local o regional se tiene que pasar a la anestesia general por resultar
            la primera insuficiente.
          </p>
          <p class="text-justify q-pa-xs">
            El médico anestesiólogo es el encargado de indicar el tipo de anestesio adecuada para cada caso dependiendo de la operación que se va a
            realizar y del estado del paciente. Además, cuida del estado general del paciente durante la operación y trata las complicaciones que
            pudieran surgir.
          </p>
          <p class="text-justify q-pa-xs">
            Todo acto anestésico conlleva siempre un riesgo menor asumido que justifica su uso generalizado pero también es evidente que es un
            procedimiento capaz de originar lesiones agudas, secuelas crónicas, complicaciones anestésicas graves e incluso lo muerte; toda ellas en
            relación con el estado de salud previo; edad; tipo, complejidad y duración de lo intervención quirúrgica, así como consecuencia de
            reacciones alérgicos u otros posibles factores imprevisibles. Cada tipo de anestesia tiene sus propios riesgos. Los riesgos no pueden
            suprimirse por completo.
          </p>
          <p class="text-justify q-pa-xs">
            También es necesario que advierta de posibles alergias medicamentosas, alteración es de la coagulación, enfermedades cardiopulmonares,
            existencia de prótesis, marcapasos, medicaciones actuales o cualquier otra circunstancia.
          </p>
          <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">EN QUE CONSISTE LA ANESTESIA GENERAL</p>
          <p class="text-justify q-pa-xs">
            Para anestesiarle es preciso canalizar una vena por la que se le administrarán los sueros y medicamentos necesarios según su situación y
            el tipo de cirugía prevista. Debido al efecto de los fármacos estará dormido y relajado durante la cirugía.
          </p>
          <p class="text-justify q-pa-xs">
            Durante la anestesia es preciso colocarte un tubo, a través de la boca o de la nariz, que llega hasta la tráquea (conducto que comunica la
            garganta con los pulmones). Este tubo se conecto a un respirador cuya función es mantener la respiración. Unos electrodos adhesivos
            colocados en el pecho permitirán el control de su latido cardiaco.
          </p>
          <p class="text-justify q-pa-xs">
            También se le colocará un aparato que medirá su tensión arterial y un dispositivo en el dedo (pulso-oxímetro) para conocer la cantidad de
            oxígeno en su sangre.
          </p>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RIESGOS DE LA ANESTESIA GENERAL</p>
            <p class="text-justify q-pa-xs">
              Excepcionalmente, la introducción del tubo hasta la tráquea puede entrañar alguna dificultad y, a pesar de hacerlo con cuidado, dañar
              algún diente.
            </p>
          </div>
          <p class="text-justify q-pa-xs">
            Durante la colocación del tubo pueda pasar al pulmón parte del contenido del estómago y ocasionar alteraciones respiratorios. Esta
            complicación es seria, pero muy poco frecuente.
          </p>
          <p class="text-justify q-pa-xs">
            La administración de sueros y los medicamentos que son imprescindibles durante la anestesia pueden producir, excepcionalmente, reacciones
            alérgicas. Estas reacciones pueden llegar a ser graves pero tienen carácter extraordinario. Los expertos desaconsejan la práctica
            sistemática de pruebas de alergia a los medicamentos anestésicos, por considerar que no es adecuado hacerlo en pacientes sin historia
            previa de reacciones adversas a los mismos. Además, estas pruebas no están libres de riesgos y, aún siendo su resultado negativo, los
            anestésicos probados pueden producir reacciones adversas durante el acto anestésico.
          </p>
          <p class="text-justify q-pa-xs">
            Otros posibles complicaciones son las siguientes: laringoespasmo y/o broncoespasmo (debido a la manipulación de la vía aérea), ronquera en
            el postoperatorio, náuseas y vómitos, dolores musculares, flebitis en el lugar de la venopunción... De cualquier forma, si ocurriera uno
            complicación, debe saber que todos los medios técnicos de este Centro están disponibles para intentar solucionarla.
          </p>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">RECOMENDACIONES ANTES DE LA ANESTESIA GENERAL</p>
            <p class="text-justify q-pa-xs">
              Debe guardar un ayuno absoluto desde ocho horas antes de la cirugía. Incumplimiento de esta norma supone la suspensión de la cirugía.
            </p>
          </div>
          <p class="text-justify q-pa-xs">
            Debe mantener cualquier medicación que esté tomando de manera habitual (por ejemplo sus pastillas para la hipertensión) salvo que su
            médico se lo indique expresamente. El día de la cirugía puede tomarlas con un sorbo de agua sin romper la norma anterior. Solamente bajo
            estricta prescripción médico, debe usted suspender, una semana antes de la operación, los medicamentos que afectan a la coagulación de la
            sangre (por ejemplo, Aspirina'1', Adiro'8', AsantantínB, TromalyttJ Tikiidt', PersontírTE', DisgrerP', etc). Si es usted fumador debe
            intentar interrumpir su hábito cuanto más tiempo mejor previo a la cirugía.
          </p>
          <div>
            <p class="text-left" style="margin-top: 10px; font-weight: bold; margin-left: 10px">QUE OTRAS ALTERNATIVAS HAY</p>
            <p class="text-justify q-pa-xs">
              Si después de leer detenidamente este documento desea más información, por favor, no dude en preguntar al especialista responsable, que
              le atenderá con mucho gusto.
            </p>
          </div>
        </div>

        <div v-if="opcion_hic117 == 'AUTORIZAR'">
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
                >&nbsp; identifcado(a) con&nbsp;<span class="text-bold">{{ getPaci.tipo_id }} </span>&nbsp;<span class="text-bold">{{
                  getPaci.cod
                }}</span>
              </span>
              <!-- Texto autoriza -->
              doy mi consentimiento para que sea realizada una
              <span class="text-bold">ANESTESIA GENERAL </span> Se me ha facilitado esto hoja informativa, habiendo comprendido el significado del
              procedimiento y los riesgos inherentes al mismo, y declaro estar debidamente informado/a, habiendo tenido oportunidad de aclarar mis
              dudas en entrevista personal con el Dr.:
            </p>
            <Input_ v-model="HIC117.med_explica" :field="form.med_explica" :inputStyle="{ width: '700px' }" />
            <p class="text-justify q-pa-xs">
              Asimismo, he recibido respuesta o todas mis preguntas, habiendo tomado la decisión de manera libre y voluntaria.
            </p>
          </div>
        </div>

        <div v-if="opcion_hic117 == 'REVOCAR'">
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
        :disable="opcion_hic117 ? false : true"
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
import { impresionHIC117, impresion, generarArchivo } from "@/impresiones";
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

const HIC117 = reactive({
  fecha: "",
  med_explica: "",
});

const opcion_hic117 = ref(null);

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
  HIC117.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC117));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic117.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC117",
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
    const datos_hic117 = {
      autorizo: opcion_hic117.value == "AUTORIZAR" ? true : false,
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
      ...HIC117,
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
      datos: { ...firmas, cod_consen: "HIC117" },
      content: impresionHIC117({
        datos: datos_hic117,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC117" },
      content: impresionHIC117({
        datos: datos_hic117,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-117` });
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
