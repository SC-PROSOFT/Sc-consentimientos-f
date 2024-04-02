<template>
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
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

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="pagina1" class="q-pa-none">
          <q-form @submit="validarDatos">
            <div class="text-center">
              <q-toggle
                v-model="opcion_hc033"
                color="primary"
                keep-color
                false-value="REVOCAR"
                true-value="AUTORIZAR"
                unchecked-icon="block"
                checked-icon="check_circle"
                label="¿Autorizar o revocar este consentimiento?"
              />
              <p :class="opcion_hc033 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
                <q-chip
                  :color="opcion_hc033 == 'AUTORIZAR' ? 'green' : 'red'"
                  class="text-white"
                  v-if="opcion_hc033"
                >
                  {{ opcion_hc033 }}
                </q-chip>
              </p>
            </div>
            <h6 class=" text-bold" style="margin: 0; font-size: 16px">
              ASESORIA PRE TEST VIH (VIRUS DE INMUNODEFICIENCIA HUMANA)
            </h6>
            <div class="q-mt-md" style="max-width: 580px">
              <q-list>
                <q-item tag="label" style="margin-top: -10px" v-ripple>
                  <q-item-section>
                    <q-item-label>1. ¿Sabe que es el VIH/SIDA?</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-checkbox color="primary" keep-color v-model="HIC033.vih" />
                  </q-item-section>
                </q-item>
                <q-item tag="label" style="margin-top: -22px" v-ripple>
                  <q-item-section>
                    <q-item-label>2. ¿Ha tenido relaciones con personas portadoras de VIH/SIDA?</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-checkbox color="primary" keep-color v-model="HIC033.relaciones" />
                  </q-item-section>
                </q-item>
                <q-item tag="label" style="margin-top: -22px" v-ripple>
                  <q-item-section>
                    <q-item-label>3. ¿Se inyecta sustancias psicoactivas?</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-checkbox color="primary" keep-color v-model="HIC033.inyec_sust_psico" />
                  </q-item-section>
                </q-item>
                <q-item tag="label" style="margin-top: -22px" v-ripple>
                  <q-item-section>
                    <q-item-label
                      >4. ¿Usa algún método de protección cuando tiene relaciones sexuales?</q-item-label
                    >
                  </q-item-section>
                  <q-item-section side>
                    <q-checkbox color="primary" keep-color v-model="HIC033.proteccion_rel_sex" />
                  </q-item-section>
                </q-item>
                <q-item tag="label" style="margin-top: -22px" v-ripple>
                  <q-item-section>
                    <q-item-label>5. ¿Ha tenido los siguientes sintomas?</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item class="q-ml-xl" style="margin-top: -22px" tag="label" v-ripple>
                  <q-item-section>
                    <q-item-label>Pérdida de peso</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-checkbox color="primary" keep-color v-model="HIC033.perdida_peso" />
                  </q-item-section>
                </q-item>
                <q-item class="q-ml-xl" style="margin-top: -22px" tag="label" v-ripple>
                  <q-item-section>
                    <q-item-label>Fiebre frecuente</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-checkbox color="primary" keep-color v-model="HIC033.fiebre_frec" />
                  </q-item-section>
                </q-item>
                <q-item class="q-ml-xl" style="margin-top: -22px" tag="label" v-ripple>
                  <q-item-section>
                    <q-item-label>Diarrea permanente</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-checkbox color="primary" keep-color v-model="HIC033.diarrea_perm" />
                  </q-item-section>
                </q-item>
                <q-item class="q-ml-xl" style="margin-top: -22px" tag="label" v-ripple>
                  <q-item-section>
                    <q-item-label>Infección por hongos y herpes</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-checkbox color="primary" keep-color v-model="HIC033.infeccion_hon_her" />
                  </q-item-section>
                </q-item>
                <q-item tag="label" style="margin-top: -22px" v-ripple>
                  <q-item-section>
                    <q-item-label>6. ¿Ha sido transfundido en los últimos años?</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-checkbox color="primary" keep-color v-model="HIC033.tranfundido" />
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="q-mt-md row">
              <p>Observaciones:</p>
              <Input_
                class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10"
                v-model="HIC033.observaciones"
                :field="form.observaciones"
              />
            </div>
            <div class="row">
              <p>Nombre de quien hizo la asesoría:</p>
              <q-input
                v-model="getProf.descrip"
                disable
                type="text"
                label="Nombre doctor"
                dense
                class="col-4"
              />
            </div>
            <div class="q-mt-lg q-mb-lg row">
              <h6 class="text-center" style="margin: 0; font-size: 16px; font-weight: bold">
                CONSENTIMIENTO INFORMADO PARA REALIZAR LA PRUEBA PRESUNTIVA O DIAGNOSTICA DE VIH (VIRUS DE
                INMUNODEFICIENCIA HUMANA)
              </h6>
            </div>
            <div v-show="HIC033.anios_paciente <= 12">
              <div class="q-mt-md q-mb-xs row">
                <span style="font-weight: bold"
                  >Este espacio debe ser diligenciado para niños (as) menores de 12 años</span
                >
              </div>
              <div class="row" style="border: 1px solid #ccc; padding: 5px">
                <p>
                  Yo,
                  <span class="text-bold">
                    {{ HIC033.anios_paciente <= 12 ? getAcomp.descrip : "_____________" }} </span
                  >mayor de edad, identificado (a) con C.C. No.
                  <span class="text-bold"
                    >{{ HIC033.anios_paciente <= 12 ? getAcomp.cod : "_____________" }} </span
                  >expedida en
                  {{ HIC033.anios_paciente <= 12 ? getAcomp.descrip_ciudad : "_____________" }}
                  en condición de representante legal o acudiente del niño(a)
                  <span class="text-bold">{{
                    HIC033.anios_paciente <= 12 ? getPaci.descrip : "_____________"
                  }}</span>
                  de
                  {{
                    HIC033.anios_paciente <= 12 ? `${HIC033.anios_paciente} años de edad` : "_____________"
                  }}
                </p>
              </div>
            </div>
            <div class="q-mt-md q-mb-xs row">
              <span style="font-weight: bold">Este espacio diligenciado para mayores de 12 años</span>
            </div>
            <div class="border-format q-my-sm">
              <p>
                Yo, {{ HIC033.anios_paciente > 12 ? getAcomp.descrip : "_________" }}, identificado(a) con
                {{ HIC033.anios_paciente > 12 ? getAcomp.tipo_id : "___" }}. No.
                {{ HIC033.anios_paciente > 12 ? getAcomp.cod : "____________" }}, Certifico que: He leído (o
                que se me ha leído) el documento sobre consentimiento informado que contiene información sobre
                el propósito y beneficio de la prueba, su interpretación, sus limitaciones, y su riesgo, y que
                entiendo su contenido, incluyendo las limitaciones, beneficios y riegos de la prueba.
              </p>
              <p>
                He recibido consejería PRE-PRUEBA (actividad realizada por un profesional de la salud para
                prepararme y confrontarme en relación a mis conocimientos, prácticos, y conductas, antes de
                realizarme las pruebas diagnósticas).
              </p>
              <p>
                También certifico que dicha persona me brindo la asesoría y que según su compromiso, de ella
                también recibiré una asesoría Postprueba (procedimiento mediante el cual me entregaran mis
                resultados) y que estoy de acuerdo con el proceso.
              </p>
              <p>
                En el momento de la venopunción, sentirá un leve dolor tipo pinchazo. En casos esporádicos se
                podrían presentar complicaciones de este procedimiento, como hematoma y/o dolor leve, los
                cuales mejorarán espontáneamente o con medidas locales. El procedimiento de la venopunción
                otorga beneficios para diagnosticar, controlar o verificar la efectividad del tratamiento de
                una enfermedad.
              </p>
              <p>
                Entiendo que la toma de muestra es voluntaria y que no puedo retirar mi consentimiento en
                cualquier momento antes de que me sea tomada el examen
              </p>
              <p>
                Fui informada de las medidas que se tomara para proteger la confidencialidad de mis
                resultados.
              </p>
              <div v-if="opcion_hc033 == 'REVOCAR'" class="row">
                <p>
                  Expreso mi voluntad de <ins class="text-bold">Revocar</ins> el consentimiento presentado y
                  declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento
                  de toma de laboratorio VIH (VIRUS DE INMUNODEFICIENCIA HUMANA), por los siguientes motivos:
                </p>
                <Input_
                  class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                  v-model="HIC033.revocar_motivos"
                  :field="form.revocar"
                />
              </div>
              <p v-else>
                De lo anterior <ins class="text-bold">Autorizo</ins> a mi asesor para la realización de la
                prueba, procesamiento y reporte de la misma
              </p>
            </div>
          </q-form>
        </q-tab-panel>
        <q-tab-panel name="pagina2" class="q-pa-none">
          <div class="row">
            <div class="col-6">
              <p class="text-center"><span class="text-bold">CONSENTIMIENTO INFORMADO VIH</span></p>
              <p style="text-align: justify">
                Información para ser leída por el profesional de la salud al paciente antes de que su
                consentimiento informado para que se le realice las pruebas presuntivas y diagnosticas de la
                infección por VIH.
              </p>
              <p style="text-align: justify">
                EL CONSENTIMIENTO INFORMADO es la manifestación libre y voluntaria que da por escrito, una
                persona, luego de la consejería pre prueba, autorizada que se le realice el examen diagnóstico
                de laboratorio para detectar la infección por VIH, cuyo resultado deberá consignarse en la
                historia clínica.
              </p>
              <p class="text-left"><span class="text-bold">PROPÓSITO Y BENEFICIO DE LA PRUEBA</span></p>
              <p style="text-align: justify">
                La prueba que se le va a realizar, cuyo nombre es prueba de ELISA para VIH (Virus de la
                Inmunodeficiencia Humana) se utilizara para precisar si una persona está infectada o no con el
                VIH, mediante la determinación en sangre de anticuerpos contra este virus. Un anticuerpo es
                una proteína que los glóbulos blancos de la sangre fabrican en respuesta a cualquier tipo de
                infección que ataque al cuerpo.
              </p>
              <p style="text-align: justify">
                El propósito de realizarle esta prueba es ayudarle a usted a identificar si está infectada con
                el virus, ya sea porque tiene un antecedente de riesgo (compartir agujas de jeringas, recibir
                transfusiones de sangre, haber recibido un trasplante o fluidos corporales como semen en su
                cuerpo, en relaciones sexuales penetrativas o haber estado en contacto directo – sin condón o
                barreras orales – con secreciones vaginal, o a través del embarazo y/o el nacimiento) o porque
                hay condiciones clínicas que lo ameritan y a los médicos que la atienden a tratar de manera
                más eficaz los síntomas que pueden ser causados por el VIH.
              </p>
              <p class="text-left"><span class="text-bold">INTERPRETACIÓN DE LA PRUEBA</span></p>
              <p style="text-align: justify">
                El primer paso se llevará a cabo es examinar su sangre utilizando una prueba presuntiva ELISA
                (Examen de laboratorio que indica posible infección por el VIH en una persona, y cuyo
                resultado en caso de ser reactivo, requiere confirmación por otro procedimiento de mayor
                especificidad). Si ésta resulta REACTIVA (positiva), se le repetirá el procedimiento de
                laboratorio antes de entregarle el diagnóstico y será necesario realizarle otra prueba llamada
                suplementaria o confirmatoria (Examen de laboratorio de alta especificidad aceptado por la
                autoridad competente, mediante el cual se confirma la infección por el VIH, utilizando el
                procedimiento de laboratorio llamado Western Blot o el denominado de inmunofluorescencia). Si
                el resultado de ésta prueba es también REACTIVO, significaría que usted está infectado por el
                VIH, y que lo puede transmitir a otras personas (si no toma las medidas de precaución
                adecuadas). Si el resultado es NO REACTIVO (negativo) significa que no hay evidencia de
                laboratorio, hasta el momento, de que usted esté infectada.
              </p>
              <p class="text-left"><span class="text-bold">LIMITACIONES DE LA PRUEBA</span></p>
              <p style="text-align: justify">
                Las pruebas de laboratorio son bastante confiables. Sin embargo, como en otras pruebas
                realizadas en sangre, algunos resultados podrían ser FALSOS POSITIVOS. Falso positivo
                significa que la prueba presuntiva (ELISA) fue positivo pero que la prueba confirmatoria fue
                NEGATIVA. En este caso, la prueba presuntiva indicaba presencia de anticuerpos contra el VIH
                cuando en realidad no los había.
              </p>
            </div>
            <div class="col-6">
              <p style="text-align: justify">
                También se obtienen resultados FALSOS NEGATIVOS, en los cuales no se detectan anticuerpos
                contra el VIH en la prueba presuntiva, aun cuando en realidad el virus está presente, esto
                sucede cuando la prueba se realiza durante el PERIODO DE VENTANA INMUNOLOGICA, es decir cuando
                se hace la prueba y aún no ha pasado suficiente tiempo después de la situación considerada
                infectante (antes de cumplir tres meses) y por tanto no existe considerado volumen necesario
                de anticuerpos que pueden ser detectados por una prueba ELISA
              </p>
              <p style="text-align: justify">
                Es posible que en las pruebas presuntivas y confirmatorias se presenten resultados
                INDETERMINADOS, ello significa que no hay seguridad de que la persona esta realmente infectada
                y se hace necesario repetir la prueba seis (6) meses después.
              </p>
              <p style="text-align: justify">
                Tenga en cuenta que la prueba no puede predecir si usted permanecerá saludable, presentara
                síntomas o desarrollara el SIDA, es decir, el conjunto de síntomas y signos generados por el
                compromiso del sistema inmunitario, de una persona como consecuencia de la infección por el
                VIH.
              </p>
              <p style="text-align: justify">
                En caso de que el diagnostico sea reactivo requerirá de evaluaciones medicas periódicas y de
                exámenes adicionales para ayudar a determinar el riesgo que usted tiene de presentar problemas
                de salud como resultado de la infección por el VIH
              </p>
              <p class="text-left"><span class="text-bold">RIESGO DE LA PRUEBA </span></p>
              <p style="text-align: justify">
                A algunas personas cuando se le informa que tiene anticuerpos contra el VIH (resultado
                reactivo) puede llegar a presentar fuertes reacciones emocionales, incluyendo ansiedad y
                depresión. También puede ser objeto de discriminación o rechazo por otras personas e
                instituciones.
              </p>
              <p style="text-align: justify">
                En caso de que usted viva con el virus del VIH se le recomienda que además de la consejería
                post – prueba busque apoyo y asesoría para manejar en forma adecuada todas las situaciones que
                el diagnostico pueda llegar a generar. Todo profesional miembro del equipo de salud está en la
                obligación de mantener la confidencialidad sobre su diagnóstico y su estado de salud en
                general (reserva que deben mantener todas y cada una de las personas del equipo de salud
                frente a la comunidad, respecto a la información del estado de salud y a la condiciones misma
                de una persona, con el fin de garantizarle su derecho fundamental a la intimidad).
              </p>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card-section>
    <q-card-actions>
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          @reciFirma="callBackFirma"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
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
      <div class="col-12 row justify-center q-my-md">
        <q-btn
          :disable="opcion_hc033 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mr-lg"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card-actions>
    <div style="height: 5px"></div>
  </q-card>
  <div style="height: 1px"></div>
</template>
<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { impresionHC033, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const router = useRouter();
const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));

const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { getDll$, _getFirma$, guardarFile$, _getHuella$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");

const llave = ref(null);
let tab = ref("pagina1");
const fecha_act = ref(null);
const firma_prof = ref(null);
const huella_paci = ref(null);
const opcion_hc033 = ref(null);

const HIC033 = ref({
  vih: false,
  relaciones: false,
  inyec_sust_psico: false,
  proteccion_rel_sex: false,
  perdida_peso: false,
  fiebre_frec: false,
  diarrea_perm: false,
  infeccion_hon_her: false,
  tranfundido: false,
  observaciones: "",
  nombre_asesoria: "",
  revocar_motivos: "",

  //Extras
  nombre_representante: "",
  cedula_representante: "",
  expedida_representante: "",
  nombre_paciente: "",
  anios_paciente: "",
  nombre_paciente: "",
  tipo_id: "",
  cedula: "",
  expedida: "",
  expreso: "",
  nombre_revoca: "",
  identificacion_revoca: "",
  fecha_revoca: "",
});

const form = ref({
  observaciones: {
    id: "observaciones",
    label: "",
    maxlength: "190",
    required: true,
    campo_abierto: true,
  },
  revocar: {
    id: "revocar",
    label: "",
    maxlength: "285",
    required: true,
    campo_abierto: true,
  },
});

watch(opcion_hc033, (val) => {
  if (val == "AUTORIZAR") {
    HIC033.value.revocar_motivos = "";
  } else {
    HIC033.value.diagnostico = "";
  }
});
onMounted(() => {
  const anioNacim = parseInt(getPaci.nacim.slice(0, 4));
  console.log("💠  anioNacim--> ", anioNacim)
  const anioActu = dayjs().year();
  console.log("💠  anioActu--> ", anioActu)
  HIC033.value.anios_paciente = anioActu - anioNacim;
  console.log("💠  Años actuales--> ", HIC033.value.anios_paciente)
  fecha_act.value = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  llave.value = getHc.llave.slice(15);
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

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};

const validarDatos = async () => {
  if (opcion_hc033.value == "REVOCAR" && HIC033.value.revocar_motivos == "") {
    return CON851("?", "info", "Debe ingresar motivos de revocación", () => foco_(form, "revocar"));
  }
  HIC033.value.nombre_asesoria = getProf.descrip ? getProf.descrip : "Sin nombre";
  //Cambia valores booleanos a S o N
  for (const key of Object.keys(HIC033.value)) {
    if (typeof HIC033.value[key] === "boolean") {
      HIC033.value[key] = HIC033.value[key] ? "S" : "N";
    }
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC033.value));
  let datos = {
    estado: opcion_hc033.value == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC033",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };
  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }
  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
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
    const datos_hic033 = {
      autorizo: opcion_hc033.value == "AUTORIZAR" ? true : false,
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
      fecha: fecha_act.value,
      llave: llave.value,
      ...HIC033.value,
    };
    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_firma_acomp: firma_recibida_acomp.value,
      img_huella_paci: huella_paci.value,
      firma_prof: firma_prof.value,
    };
    const docDefinitionPrint = await utilsFormat({
      datos: firmas,
      content: impresionHC033({
        datos: datos_hic033,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: firmas,
      content: impresionHC033({
        datos: datos_hic033,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({
      docDefinition: docDefinitionFile,
    });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
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
