<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic063"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic063 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic063 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic063">
              {{ opcion_hic063 }}
            </q-chip>
          </p>
        </div>
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-left row" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Nombres y apellidos:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.descrip }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 60%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Documento de Identificación:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.cod }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">De:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.descrip_ciudad }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 60%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Edad:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ calcularEdad(getPaci.nacim) }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Teléfono:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.telefono }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Procedimiento:</p>
            <p style="margin-top: 10px; margin-left: 10px">Asesoría en Interrupción Voluntaria del Embarazo.</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 100%">
            <div>
              <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Metodología:</p>
            </div>
            <p style="margin-top: 10px; margin-left: 10px">Asesoría Individual</p>
            <div>
              <q-checkbox color="primary" keep-color left-label v-model="HIC063.asesoria_indiv" true-value="S" false-value="N" />
            </div>
            <p style="margin-top: 10px; margin-left: 10px">Asesoría Grupal</p>
            <div>
              <q-checkbox color="primary" keep-color left-label v-model="HIC063.asesoria_grupal" true-value="S" false-value="N" />
            </div>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Lugar:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getEmpresa.nomusu }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Fecha:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ HIC063.fecha_act }}</p>
          </div>
        </div>
        <div>
          <p style="text-align: justify">
            Se realiza a usuaria consejería sobre la interrupción voluntaria del embarazo (IVE) a la que tiene derecho según la
            <span class="text-bold"> resolución 051 de 2023</span>
            que adopta la regulación única para la atención integral en salud frente a la Interrupción Voluntaria del Embarazo (IVE), en las
            condiciones previstas por la Corte Constitucional en las Sentencias C-355 de 2006, SU-096 de 2018 y C-055 de 2022 y modificar el numeral
            4.2 del Lineamiento Técnico y Operativo de la Ruta Integral de Atención en Salud Materno Perinatal.
          </p>

          <p style="text-align: justify">
            Esta resolución establece el derecho de las mujeres y personas gestantes a decidir de manera libre y autónoma sobre la interrupción del
            embarazo. En consonancia con la decisión de la Corte Constitucional, contenida en la
            <span class="text-bold"> Sentencia C055 de 2022,</span> la atención en salud de la IVE no debe estar condicionada al cumplimiento de
            causales o requisitos y procede por la sola decisión de la mujer o persona gestante. Solo cuando se trate de embarazos después de la
            vigésimo cuarta (24) semana, la IVE procede ante la identificación de alguna de las tres causales ya definidas por la misma Corte
            Constitucional en <span class="text-bold"> Sentencia C - 355 de 2006,</span> esto es: "I) Cuando la continuación de/embarazo constituya
            peligro para la vida o la salud de la mujer, certificada por un médico; (II Cuando exista grave malformación del feto que haga inviable su
            vida, certificada por un médico; y, III) Cuando el embarazo sea el resultado de una conducta, debidamente denunciada, constitutiva de
            acceso carnal o acto sexual sin consentimiento, abusivo o de inseminación artificial o transferencia de óvulo fecundado no consentidas, o
            de incesto".
          </p>
          <p style="text-align: justify">
            Se explican claramente sus opciones para interrupción de la gestación: farmacológica con misoprostol ambulatorio (para gestaciones menores
            de 12 semanas) y métodos no farmacológicos, a realizarse de manera intrahospitalaria.
          </p>
          <p style="text-align: justify">Se explica claramente:</p>
          <ul>
            <li>
              Se debe administrar las tabletas de misoprostol de 200 mcg: 4 tabletas cada 3 horas vía sublingual o vaginal x 3 dosis o hasta expulsión
              de restos ovulares.
            </li>
            <li>Que el tratamiento es efectivo en un 85 % de los casos aproximadamente.</li>
            <li>Presentará sangrado vaginal en volumen similar a sangrado menstrual asociado a expulsión de restos ovulares, precedido de cólico.</li>
            <li>Puede presentar dolor pélvico/abdominal, náuseas, fiebre, escalofrío, diarrea, dolor de cabeza.</li>
            <li>
              Signos de alarma para consultar por urgencias: sangrado vaginal abundante (mayor a dos toallas higiénicas empapadas por hora durante más
              de dos horas seguidas), no expulsión de fruto de la gestación, dolor intenso que no mejore tras analgesia, fiebre.
            </li>
            <li>Debe administrarse el método de anticoncepción de su elección lo más pronto posible (idealmente el mismo día de la IVE).</li>
            <li>
              Su periodo menstrual reaparecerá en características usuales a los 30-40 días después del procedimiento, con su respectivo retorno a la
              fertilidad y riesgo de nueva gestación en caso de no adoptar un método de planificación confiable.
            </li>
          </ul>
          <p style="text-align: justify">Me ha quedado claro que de acuerdo a mi decisión tengo tres alternativas sobre mi embarazo actual:</p>

          <ol>
            <li class="border-format q-my-sm">
              <div class="text-justify">
                Quiero continuar mi embarazo e iniciar controles prenatales?
                <q-radio color="primary" v-model="HIC063.ini_ctl_prenatal" val="S" label="SI" />
                <q-radio color="primary" v-model="HIC063.ini_ctl_prenatal" val="N" label="NO" />
              </div>
            </li>
            <li class="border-format q-my-sm">
              <div class="text-justify">
                Quiero continuar mi embarazo y darlo en adopción?
                <q-radio color="primary" v-model="HIC063.dar_adopcion" val="S" label="SI" />
                <q-radio color="primary" v-model="HIC063.dar_adopcion" val="N" label="NO" />
              </div>
            </li>
            <li class="border-format q-my-sm">
              <div class="text-justify">
                Quiero la interrupción voluntaria de mi embarazo?
                <q-radio color="primary" v-model="HIC063.inter_voluntaria" val="S" label="SI" />
                <q-radio color="primary" v-model="HIC063.inter_voluntaria" val="N" label="NO" />
              </div>
            </li>
          </ol>

          <p style="text-align: justify">
            Me ha quedado claro que de acuerdo a mi decisión tengo las siguientes alternativas para la interrupción voluntaria de mi gestación:
          </p>

          <ol>
            <li class="border-format q-my-sm">
              <div class="text-justify">
                <span>Interrupción farmacológica ambulatoria (gestación 12 semanas)? </span>
                <q-radio color="primary" v-model="HIC063.inter_farm_ambul" val="S" label="SI" />
                <q-radio color="primary" v-model="HIC063.inter_farm_ambul" val="N" label="NO" />
              </div>
            </li>
            <li class="border-format q-my-sm">
              <div class="text-justify">
                <span> Interrupción farmacológica supervisada por medico de manera intrahospitalaria (gestación menor 12 semanas)? </span>
                <q-radio color="primary" v-model="HIC063.inter_farm_super" val="S" label="SI" />
                <q-radio color="primary" v-model="HIC063.inter_farm_super" val="N" label="NO" />
              </div>
            </li>
            <li class="border-format q-my-sm">
              <div class="text-justify">
                <span>
                  Interrupción por métodos no farmacológicos supervisada por medico de manera intrahospitalaria (gestación mayor 12 semanas)?</span
                >
                <q-radio color="primary" v-model="HIC063.inter_no_farmac" val="S" label="SI" />
                <q-radio color="primary" v-model="HIC063.inter_no_farmac" val="N" label="NO" />
              </div>
            </li>
          </ol>
          <p>
            Quien ha informado y asesorado a la paciente sobre la sentencia C-355/06 y su procedimiento. Nombres y apellidos del profesional:
            <span class="text-bold">{{ getProf.descrip }} </span> Documento de identidad: <span class="text-bold">{{ getProf.cod }}.</span>
          </p>
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
        :disable="opcion_hic063 ? false : true"
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
import { impresionHIC063, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { calcularEdad, utilsFormat } from "@/formatos/utils";
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

const HIC063 = reactive({
  fecha_act: "",
  asesoria_indiv: "N",
  asesoria_grupal: "N",
  dar_adopcion: "",
  ini_ctl_prenatal: "",
  inter_voluntaria: "",
  inter_farm_ambul: "",
  inter_farm_super: "",
  inter_no_farmac: "",
});

const opcion_hic063 = ref(null);

onMounted(() => {
  HIC063.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC063));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic063.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC063",
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
    const datos_hic063 = {
      autorizo: opcion_hic063.value == "AUTORIZAR" ? true : false,
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
      ...HIC063,
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
      datos: { ...firmas, cod_consen: "HIC063" },
      content: impresionHIC063({
        datos: datos_hic063,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC063" },
      content: impresionHIC063({
        datos: datos_hic063,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-063` });
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
