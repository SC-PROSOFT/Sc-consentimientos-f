<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-form  @submit="grabarConsentimiento">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_hc040"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_hc040 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_hc040 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_hc040"
            >
              {{ reg.opcion_hc040 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <p>
            Historia clínica numero:
            <InputF_ disable v-model="reg.llave" />
          </p>
          <p>Ciudad: <InputF_ disable label="Ciudad elaboración" v-model="getEmpresa.ciudad_usuar" /></p>

          <p>Fecha: <InputF_ v-model="reg.fecha_empresa" disable /></p>
        </div>
        <div class="row">
          <p>
            Yo, <InputF_ v-model="getPaci.descrip" disable class="col-4" />, de
            <InputF_ v-model="reg.edad_paci" disable style="width: 50px; display: inline-block" />
            años de edad, identificada con
            <InputF_ v-model="getPaci.tipo_id" disable style="width: 50px; display: inline-block" /> N°
            <InputF_ v-model="getPaci.cod" disable class="col-2" />, expedida en
            <InputF_ v-model="getPaci.descrip_ciudad" disable class="col-2" />, con residencia en
            <InputF_ v-model="getPaci.direccion" disable class="col-2" />, telefono número
            <InputF_ v-model="getPaci.telefono" disable class="col-2" />, en calidad de paciente y mi
            acompañante <InputF_ v-model="getAcomp.descrip" disable class="col-2" />, de
            <InputF_ v-model="reg.edad_acomp" disable class="col-2" /> años de edad , identificado (a) con N°
            <InputF_ v-model="getAcomp.cod" disable class="col-2" /> , expedida en
            <InputF_ v-model="getAcomp.descrip_ciudad" disable class="col-2" />; en pleno uso de nuestras
            facultades mentales y
          </p>
        </div>
        <p align="justify">
          de nuestros derechos de salud y habiendo solicitado por nuestra voluntad los servicios de salud a la
          empresa social del estado ESE Salud Yopal, por medio del presente documento autorizamos al equipo de
          salud de la Institución, para atenderme y vigilarme durante la conducción del trabajo de parto y la
          atención del parto vaginal.
        </p>
        <p align="justify">
          Autorizo al personal médico de la ESE Salud Yopal que me atiende a solicitar y practicar las ayudas
          diagnósticas y terapéuticas, que consideren pertinentes durante la atención y proceso de parto, de
          mi salud previa información detallada de los posibles riesgos como son: estudio de imagenologia,
          monitoreo fetal, pruebas de laboratorio clínico, colocación de catéteres, toma de muestras de
          laboratorio y secreciones, actividades de higiene y confort, administración de medicamentos,
          administración de líquidos endovenosos.
        </p>
        <p align="justify">
          Me informan que Aunque son procedimientos seguros pueden presentarse complicaciones como: hematomas,
          inflamaciones, infecciones, alergias, dolores locales, sangrados, efectos adversos medicamentosos y
          otros impredecibles.
        </p>
        <p align="justify">
          Declaro que se me ha explicado sobre los riesgos y beneficios de los procedimientos durante mi
          estancia en los servicios de: urgencias e internación y que algunos de ellos pueden ser dados por mi
          edad, profesión, creencias, valores y actitudes propias de mi ser.
        </p>

        <p align="justify">
          Además se me ha informado que en la ESE salud Yopal, participa personal idóneo, competente y
          capacitado para la prescripción y determinación de conductas terapéuticas que contribuyan a mejorar
          mi calidad de vida y de mi hijo.
        </p>
        <div class="row">
          <p>
            El Dr.
            <InputF_
              v-model="getProf.descrip"
              disable
              class="col-2"
              style="width: 350px; display: inline-block"
            />
            me ha explicado en que consiste el trabajo de parto y el parto vaginal y me ha informado las
            complicaciones, molestias y posibles riesgos que se puedan presentar en particular los siguientes:
          </p>
        </div>
      </q-card-section>
      <q-card-section>
        <ol>
          <li>
            Que el trabajo de parto es un proceso fisiológico donde se dilata y borra el cuello del útero,
            permitiendo la expulsión del feto y de la placenta por vía vaginal.
          </li>
          <li>
            Que existen tres etapas en el trabajo de parto que son: la dilatación y borramiento del cuello
            uterino, el descenso y la expulsión del feto, y el alumbramiento de la placenta.
          </li>
          <li>
            Que durante cualquiera de las etapas del trabajo de parto se pueden presentar situaciones
            imprevistas o complicaciones que serán, en lo posible atendidas por el personal médico de la
            Institución.
          </li>
          <li>
            Que el trabajo de parto se adelantará dentro de la Institución con el fin de permitir la
            vigilancia y monitoreo constante por parte del equipo asistencial.
          </li>
          <li>
            Que en algunos casos se hace necesario inducir el proceso natural del parto con productos
            farmacológicos, tales como uterotónicos, oxitócicos o prostaglandínicos, que se aplican según
            criterio médico y bajo vigilancia, con monitoreo constante.
          </li>
          <li>
            Que en caso de distocia del parto (cuando el parto o expulsión procede de manera anormal o
            difícil), se hace necesario instrumentar el parto con el uso de instrumentos que facilitan la
            extracción del feto.
          </li>
        </ol>
        <div class="row">
          <p>
            Igualmente mi acompañante y yo hemos sido informados que se pueden presentar complicaciones
            maternas o fetales, que pueden comprometer mi salud, mi vida o la del feto. El profesional nos
            notifica que en la actualidad la Institución no dispone de métodos que nos permitan detectar de
            manera precoz y confiable, todas las situaciones de riesgo fetal, pero con la vigilancia constante
            del trabajo de parto y parto, se pretende minimizar su ocurrencia y prevenir sus posibles
            secuelas. Dentro de los riesgos materno y fetales frecuentes se encuentran:
          </p>
        </div>
        <ol type="a">
          <li>Sufrimiento fetal derivado de falta de oxígeno</li>
          <li>Síndrome de aspiración meconial</li>
          <li>Desprendimiento placentario</li>
          <li>Prolapso de cordón</li>
          <li>Acretismo placentario (invasión anormal de la placenta en la pared del útero)</li>
          <li>Nudos verdaderos de cordón</li>
          <li>Ruptura uterina</li>
          <li>Inversión uterina post parto</li>
          <li>Distocia de hombros</li>
          <li>
            Embolia de líquido amniótico (cuando el líquido amniótico o el material embrionario ingresa al
            torrente sanguíneo de la madre)
          </li>
          <span>Entre otros</span>
        </ol>
        <div class="row">
          <p>
            Que algunas de estas complicaciones presentan riesgo potencial para mí y/o para el feto y pueden
            generar secuelas neurológicas leves, moderadas o severas.
          </p>
        </div>
        <div class="row">
          <p>
            Comprendo y acepto que durante el procedimiento pueden aparecer circunstancias imprevisibles o
            inesperadas, que pueden requerir una extensión de otro procedimiento, acepto que las ciencias de
            la salud no son una ciencia exacta y que no se me garantizan resultados en la atención y que
            además al presentar factores de riesgo inherentes a mi persona y patologías previas o actuales, mi
            riesgo aumentara de manera general.
          </p>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p>
            Que si se hace necesario la episiotomía por mi condición clínica durante el expulsivo, deberá ser
            suturada y que sus posibles complicaciones pueden ser: desgarros perineales, que en casos extremos
            pueden incluir músculos perineales alrededor del ano (esfínter externo del ano y recto), dolor,
            formación de hematomas, infecciones de la herida, dehiscencia (abertura espontánea) de la sutura y
            a largo plazo fístulas (conducto anormal de un cavidad orgánica) recto vaginales e incontinencia
            fecal.
          </p>
        </div>
        <div class="row">
          <p>
            Que en caso de presentar alguna complicación que me pueda llevar a la necesidad de realización de
            una cesárea de urgencia y en algunos casos (hemorragias incontrolables) a una histerectomía total
            o subtotal en procura de preservar mi vida y/o la de mi hijo(a); se iniciará el proceso de
            remisión a un nivel de mayor complejidad, para realizar dicho procedimiento que no hace parte del
            portafolio de servicios de la Institución.
          </p>
        </div>
        <div class="row">
          <p>
            Se me ha dado la oportunidad de hacer preguntas y todas ellas han sido contestadas
            satisfactoriamente.
          </p>
        </div>
        <div class="row">
          <p>
            Me comprometo a seguir las indicaciones que me brindan los profesionales de LA ESE Salud Yopal
            para contribuir a una atención segura como son:
          </p>
          <ul>
            <li>Mantener puesta la manilla de identificación.</li>
            <li>Mantener elevadas las barandas de la cama.</li>
            <li>
              Pedir ayuda al personal de enfermería en los casos que los requiera. (aseo diario, ir al baño.
              etc).
            </li>
            <li>Permanecer acompañado o asistir con acompañante si hay indicación.</li>
            <li>Tomarme únicamente los medicamentos prescritos por los profesionales tratantes.</li>
            <li>
              Informar si soy alérgico a algún medicamento o procedimiento y si vengo tomando medicamentos de
              forma regular.
            </li>
            <li>
              No manipular las llaves que regulan el oxígeno, los goteos de sueros, los monitores, equipos
              terapéuticos o dispositivos biomédicos.
            </li>
            <li>Lavarme frecuentemente las manos para evitar infecciones.</li>
            <li>Seguir las recomendaciones de aislamiento si cumplo criterios.</li>
          </ul>
        </div>
        <div class="row">
          <p>
            Por lo tanto, en forma consciente y voluntaria, luego de haber escuchado la información y
            explicaciones, sin haber sido objeto de coacción, persuasión, ni manipulación manifiesto lo
            siguiente:
          </p>
        </div>
        <div class="row">
          <p>
            Mi acompañante y Yo que hemos recibido y comprendido toda la información, relacionada con el
            trabajo de parto y atención del mismo, que entendemos y autorizamos las decisiones médicas que
            durante su desarrollo se llegaren a presentar y que aceptamos los riesgos y limitaciones
            expuestas, en el entendido que se propenderá por minimizar su ocurrencia.
          </p>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p>
            Declaramos que nos encontramos en capacidad de entender y expresar nuestra voluntad y en
            consecuencia suscribimos el presente documento en señal de conformidad con su contenido.
          </p>
        </div>
      </q-card-section>
      <q-card-actions>
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
            :disable="reg.opcion_hc040 ? false : true"
            @click="grabarConsentimiento"
            icon-right="check_circle"
            class="q-mr-lg"
            color="green"
            label="GRABAR"
            type="submit"
          />
        </div>
      </q-card-actions>
    </q-form>
  </q-card>
  <div style="height: 5px"></div>
</template>
<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted, watch } from "vue";
import { impresionHC040, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat, calcEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/ContainerFirma.vue"));

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);

const reg = ref({
  fecha_empresa: "",
  opcion_hc040: "",
  edad_acomp: "",
  edad_paci: "",
  llave: "",
});

onMounted(() => {
  reg.value.llave = getHc.llave.slice(15);
  reg.value.edad_acomp = calcEdad(getAcomp.nacim);
  reg.value.edad_paci = calcEdad(getPaci.nacim);
  reg.value.fecha_empresa = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");

  getFirmaProf()
});

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
    huella_paci.value = await _getHuella$({ codigo: Number(getPaci.cod) });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const grabarConsentimiento = async () => {
  let datos = {
    estado: reg.value.opcion_hc040 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC040",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
  };

  if (!getAcomp.cod && !firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañate");
  }

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(24, 32);
        reg.value.fecha_empresa = dayjs(fecha).format("YYYY-MM-DD");
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
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });

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

        if (!getPaci.email) return router.back();

        if (getPaci.email && !/.+@.+\..+/.test(getPaci.email.toLowerCase())) {
          return CON851("?", "info", "El correo no es valido", () => router.back());
        }

        const response = await enviarCorreo$({
          cuerpo: `SE ADJUNTA ${getEncabezado.descrip} PARA ${getPaci.descrip} IDENTIDICADO CON ${getPaci.cod}`,
          destino: "jhoanquintero07@hotmail.com",
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
    const datos_hic030 = {
      autorizo: reg.value.opcion_hc040 == "AUTORIZAR" ? true : false,
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
      llave: reg.value.llave,
      fecha: reg.value.fecha_empresa,
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
      content: impresionHC040({
        datos: datos_hic030,
      }),
    });

    const docDefinitionFile = utilsFormat({
      datos: firmas,
      content: impresionHC040({
        datos: datos_hic030,
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
  data_firma && (firma_recibida.value = data_firma.slice(22));
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma.slice(22));
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
