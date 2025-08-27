<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="ODO015.opcion_odo015"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="ODO015.opcion_odo015 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="ODO015.opcion_odo015 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="ODO015.opcion_odo015">
              {{ ODO015.opcion_odo015 }}
            </q-chip>
          </p>
        </div>
        <p class="text-center text-bold">CONSENTIMIENTO INFORMADO EN PROCEDIMIENTOS ODONTOLOGICOS</p>
        <div class="row">
          <p class="text-justify">
            La Ley 35 de 1889 en su Articulo 5°, establece como buena práctica profesional por parte del Odontólogo, el deber de informar al paciente
            de los riesgos, incertidumbres y demás circunstancias que puedan comprometer el buen resultado del tratamiento que le sea practicado. Con
            el presente documento, se pretende informar acerca del procedimiento que se le practicara. Por lo tanto, solicitamos leer y diligenciar el
            documento para su <span class="text-bold">AUTORIZACION</span> y <span class="text-bold">APROBACION</span> del procedimiento a realizar.
          </p>
        </div>

        <div class="row justify-between items-center">
          <p>
            <span class="text-bold">Fecha:&nbsp;</span>
            <span>{{ ODO015.fecha }}</span>
          </p>
          <p>
            <span class="text-bold">Hora:&nbsp;</span>
            <span>{{ ODO015.hora }}</span>
          </p>
          <p class="row">
            <span class="text-bold q-mt-xs">Doctor:&nbsp;</span>
            <Input_ v-model="ODO015.doctor" :field="form.doctor" :inputStyle="{ width: '700px' }" />
          </p>
        </div>
        <div class="row justify-between items-center">
          <p>
            <span class="text-bold">Nombres y apellidos del paciente:&nbsp;</span>
            <span>{{ getPaci.descrip }}</span>
          </p>
          <p>
            <span class="text-bold">Documento de identidad:&nbsp;</span>
            <span>{{ getPaci.tipo_id }}&nbsp;</span>
            <span class="text-bold">Numero:&nbsp;</span>
            <span>{{ getPaci.cod }}</span>
          </p>
        </div>
        <div v-if="getAcomp.cod" class="row justify-between items-center">
          <p>
            <span class="text-bold">Acudiente responsable:&nbsp;</span>
            <span>{{ getAcomp.descrip }}</span>
          </p>
          <p>
            <span class="text-bold">Documento de identidad:&nbsp;</span>
            <span>{{ getAcomp.tipo_id }}&nbsp;</span>
            <span class="text-bold">Numero:&nbsp;</span>
            <span>{{ getAcomp.cod }}</span>
          </p>
        </div>

        <div class="row">
          <p class="col">
            <Input_ v-model="ODO015.dientes1" :field="form.dientes1" :inputStyle="{ width: '500px' }" />
          </p>
          <p class="col">
            <Input_ v-model="ODO015.procedimiento1" :field="form.procedimiento1" :inputStyle="{ width: '500px' }" />
          </p>
        </div>
        <div class="row">
          <p class="col">
            <Input_ v-model="ODO015.dientes2" :field="form.dientes2" :inputStyle="{ width: '500px' }" />
          </p>
          <p class="col">
            <Input_ v-model="ODO015.procedimiento2" :field="form.procedimiento2" :inputStyle="{ width: '500px' }" />
          </p>
        </div>
        <div class="row">
          <p class="col">
            <Input_ v-model="ODO015.dientes3" :field="form.dientes3" :inputStyle="{ width: '500px' }" />
          </p>
          <p class="col">
            <Input_ v-model="ODO015.procedimiento3" :field="form.procedimiento3" :inputStyle="{ width: '500px' }" />
          </p>
        </div>
        <p class="text-bold">Adicional se me ha informado, explicado los riesgos y beneficios del procedimiento:</p>

        <ul class="q-mt-lg">
          <li>
            <p class="text-justify">
              <span class="text-bold"> PROCEDIMIENTO PROMOCION Y PREVENCION</span>
              (EDUCACION, CONTROL DE PLACA, PROFILAXIS, DETARTRAJE, SELLANTES, APLICACIÓN DE BARNIRZ DE FLUOR).
            </p>
            <p class="text-justify">
              <span class="text-bold"> BENEFICIOS:</span>
              Procedimientos y acciones que nos ayudan a prevenir y tratar las enfermedades bucales.
            </p>
            <p class="text-justify">
              <span class="text-bold"> RIESGOS Y COMPLICACIONES:</span>
              Probabilidad de: Sangrado, Movilidad dental-Retracción gingival, sensibilidad.
            </p>
          </li>
        </ul>

        <ul class="q-mt-lg">
          <li>
            <p class="text-justify">
              <span class="text-bold"> PROCEDIMIENTO ANESTESIA:</span>
            </p>
            <p class="text-justify">
              <span class="text-bold"> BENEFICIOS:</span>
              Se ha explicado que el tratamiento que se va a realizar se efectuara sobre anestesia local. Su finalidad es bloquear, de forma
              reversible, la transmisión de los impulsos nerviosos, para poder realizar la intervención sin dolor, se ha informado que notará una
              sensación de endurecimiento del labio, lengua, o de la zona de la cara y que normalmente desaparecerá entre dos a cuatro horas.
            </p>
            <p class="text-justify">
              <span class="text-bold"> RIESGOS Y COMPLICACIONES:</span>
              - Infección. - Dolor posterior en el sitio de aplicación. - Laceración de un nervio. vaso sanguíneo, u otro tejido blando, - Efectos
              anestésicos en otros sitios. EJEMPLOS: Parpados, equimosis (morado), isquemia, necrosis de la membrana mucosa, parestesia temporal
              transitoria o definitiva, error en la técnica de aplicación, aumento de la presión arterial, arritmia y fractura de la aguja.
            </p>
          </li>
        </ul>

        <ul class="q-mt-lg">
          <li>
            <p class="text-justify">
              <span class="text-bold"> PROCEDIMIENTO OPERATORIA DENTAL:</span>
            </p>
            <p class="text-justify">
              <span class="text-bold"> BENEFICIOS:</span>
              Es la intervención sobre el diente en cualquiera de sus superficies, en ocasiones eliminando parte de la estructura dentaria con el fin
              de remover la caries o restauraciones (calzas) y prepararlo para la restauración definitiva. Para este procedimiento se utilizan en la
              mayoría de los casos instrumentos metálicos que son operados por la fuerza del odontólogo, electricidad o aire. Posterior a la
              instrumentación se dejan materiales para reemplazar las partes afectadas de los dientes (calza), estos materiales son compatibles con
              los tejidos de la boca y en algunas ocasiones su color no es igual al del diente natural.
            </p>
            <p class="text-justify">
              <span class="text-bold"> RIESGOS Y COMPLICACIONES:</span>
              Sangrado de la encía o del nervio si la caries compromete cámara pulpar, - Laceraciones involuntarias de los tejidos blandos con los
              instrumentos o quemaduras con materiales líquidos, -Fractura de la corona del diente (se parte las paredes del diente), - Cambio de
              color del diente, - Dolor transitorio, sensibilidad o dolor permanente si presenta restauración desalojada o desadaptada y hay
              filtración de bacterias al nervio dental .- Desalojo de la restauración, - Cambio de color de la restauración, - Necesidad posterior de
              tratamiento de conducto, - Molestia en la oclusión (mordida), - Ingestión de algún instrumento de trabajo.
            </p>
            <p class="text-justify">
              <span class="text-bold"> TRATAMIENTOS ALTERNOS: </span>
              Rehabilitación oral, Exodoncia. Estos se remitirán a especialidades odontológicas.
            </p>
          </li>
        </ul>

        <ul class="q-mt-lg">
          <li>
            <p class="text-justify">
              <span class="text-bold"> PROCEDIMIENTO ENDODONCIA:</span>
            </p>
            <p class="text-justify">
              <span class="text-bold"> BENEFICIOS:</span>
              consiste en la remoción del nervio del diente, preparación del conducto con diferentes instrumentos para ampliar la luz del conducto y
              posterior relleno con material que selle.
            </p>
            <p class="text-justify">
              <span class="text-bold"> RIESGOS Y COMPLICACIONES:</span>
              Endodoncia con la longitud alterada de acuerdo con condiciones específicas de cada diente (sobrepaso de material o longitud corta),
              Perdida del diente por comunicaciones involuntarias entre los conductos y el tejido de soporte, - Infección, - Edema (hinchazón), -
              Dolor temporal o prolongado. durante o después del procedimiento, - Debilitamiento de la estructura del diente por la apertura y la
              falta de hidratación, - Sangrado durante la instrumentación del conducto, - Laceraciones involuntarias con los instrumentos y fractura
              del diente al colocar la grapa (se parte) en ocasiones necesitando corona, - Cambio de color del diente, - Desalojo de la restauración
              temporal y contaminación del tratamiento que conlleva a cirugía apical posterior al tratamiento, - Ruptura del instrumento dentro del
              conducto, - ingestión de algún liquido o elemento del trabajo, - Repetición del procedimiento por lesión recurrente, los tratamientos
              son de medios y no de resultados - Quemaduras en los tejidos blandos con los instrumentos de recorte, - Accidente por hipoclorito, puede
              presentarse por el sobrepaso del irrigante a los tejidos periapicales ya sea durante la irrigación de los conductos radiculares o por
              medio de la inyección accidental en los tejidos blandos - Molestias, irritación o alergias en la mucosa, asociada a líquidos o
              materiales usados para el tratamiento, que a pesar de realizarse correctamente la técnica, cabe la posibilidad de que la infección o el
              proceso quístico o granulomatoso no se eliminen totalmente, por lo que puede ser necesario acudir a la cirugía periapical al cabo de
              algunas semanas, meses o incluso años que generaría costos que deben ser cubiertos por mi como paciente.
            </p>
            <p class="text-justify">
              <span class="text-bold"> TRATAMIENTOS ALTERNOS: </span>
              Exodoncia del diente.
            </p>
          </li>
        </ul>

        <ul class="q-mt-lg">
          <li>
            <p class="text-justify">
              <span class="text-bold"> PROCEDIMIENTO CIRUGIA ORAL (BASICA):</span>
            </p>
            <p class="text-justify">
              <span class="text-bold"> BENEFICIOS:</span>
              Extracción de las piezas dentarias con grado avanzado de caries o destrucción coronal que constituyen un foco de infección. En
              determinados casos la exodoncia previene mal-oclusiones, afectaciones en los dientes adyacentes y otros problemas de la cavidad oral.
              Nos permite erradicar el dolor dental y la posibilidad de rehabilitar.
            </p>
            <p class="text-justify">
              <span class="text-bold"> RIESGOS Y COMPLICACIONES:</span>
              Probabilidad de: Avulsiones - Luxaciones - Fractura radicular - Fractura dental - Hematomas -Dolor -Deglución de la pieza dental
              -Alveolitis o infección - Fractura de la obturación adyacente -Hemorragia -Fractura ósea -Comunicación Oroantral -Parestesia -Paresia
              -Trismus -Laceración de tejidos blandos Tratamientos alternos Endodoncia, Rehabilitación oral, Cirugía periodontal.
            </p>
            <p class="text-justify">
              <span class="text-bold"> DECLARACIÓN DEL PACIENTE: </span>
              La institución, a través de sus profesionales adscritos y demás personal vinculado, me ha explicado en forma clara, expresa y
              satisfactoria en qué consiste el procedimiento, como se hace, para que sirve, igualmente se me han explicado los riesgos,
              incertidumbres, complicaciones y molestias que puedan ser inherentes a las actividades programadas y realizadas y me han permitido
              realizar preguntas, las cuales, han sido respondidas de forma satisfactoria, entiendo por lo tanto que en el curso del tratamiento
              pueden presentarse situaciones especiales e imprevistas que requieran procedimientos adicionales y autorizo la relación de los mismos,
              cuando el profesional tratante considere necesario. Comprendo las implicaciones del presente consentimiento me encuentro en capacidad de
              expresarlo y dejo constancia de que los espacios en blanco han sido llenados ante mi firma. Me comprometo a seguir las indicaciones que
              al final del tratamiento me indique el profesional tratante. He comprendido todo lo anterior y por ello de manera libre y voluntaria
              firmo.
            </p>
          </li>
        </ul>
        <div class="row">
          <p class="text-justify">El suscrito(a):</p>
          <Input_ v-model="ODO015.suscrito" :field="form.suscrito" :inputStyle="{ width: '500px' }" />
          <p class="text-justify">
            deja constancia que ha explicado la naturaleza, propósito, ventajas y alternativas del tratamiento indicado y que ha respondido todas las
            preguntas formuladas por el paciente o la persona responsable de este.
          </p>
        </div>
        <div v-if="getAcomp.cod">
          <p class="text-justify">
            <span class="text-bold">CONSENTIMIENTO INFORMADO DIFERIDO:</span>

            (Para situación de discapacidad o menores de edad): En mi calidad de representante legal del paciente que no tiene la capacidad legal para
            otorgar la autorización (menor de edad, inconsciencia, alteración mental temporal o definitiva) me hago responsable y doy el
            consentimiento de manera libre y voluntaria para que le sean practicados los tratamientos que la institución ha descrito en la historia
            clínica.
          </p>
        </div>
        <div v-if="ODO015.opcion_odo015 == 'REVOCAR'">
          <p class="text-justify">
            <span class="text-bold">DESISTIMIENTO DEL PROCEDIMIENTO:</span>

            Después de haber escuchado al profesional sobre el procedimiento propuesto y los riesgos posibles NO ACEPTO que se realice dicho
            procedimiento.
          </p>
        </div>
        <p class="text-justify q-mt-lg">
          <span class="text-bold">POLITICA DE MANEJO DE DATOS PERSONALES</span>
        </p>
        <p class="text-justify">
          Autorizo que la E.S.E HOSPITAL LOCAL DE TAURAMENA use la información provista por mí con el fin de realizar todas las actividades de los
          servicios odontológicos que sean necesarios y se lleven a cabalidad.
        </p>
      </q-card-section>
    </q-form>
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around q-mt-lg">
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
    <div class="row justify-center q-my-lg">
      <q-btn
        :disable="ODO015.opcion_odo015 ? false : true"
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
import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted } from "vue";
import { impresionODO015, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/ContainerFirma.vue"));
const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getProf, getEmpresa, getHc, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const huella_acomp = ref(null);
const firma_prof = ref(null);
const descrip_diagnostico = ref("");
const ODO015 = reactive({
  opcion_odo015: "",
  doctor: "",
  suscrito: "",
  dientes1: "",
  dientes2: "",
  dientes3: "",
  procedimiento1: "",
  procedimiento2: "",
  procedimiento3: "",
  fecha: "",
});
const form = ref({
  doctor: {
    id: "doctor",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
  suscrito: {
    id: "suscrito",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
  dientes1: {
    id: "dientes1",
    maxlength: "300",
    label: "Diente(s) a tratar:",
    campo_abierto: true,
  },
  procedimiento1: {
    id: "procedimiento1",
    maxlength: "300",
    label: "Procedimiento a realizar:",
    campo_abierto: true,
  },
  dientes2: {
    id: "dientes2",
    maxlength: "300",
    label: "Diente(s) a tratar:",
    campo_abierto: true,
  },
  procedimiento2: {
    id: "procedimiento2",
    maxlength: "300",
    label: "Procedimiento a realizar:",
    campo_abierto: true,
  },
  dientes3: {
    id: "dientes3",
    maxlength: "300",
    label: "Diente(s) a tratar:",
    campo_abierto: true,
  },
  procedimiento3: {
    id: "procedimiento3",
    maxlength: "300",
    label: "Procedimiento a realizar:",
    campo_abierto: true,
  },
});
onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  ODO015.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  ODO015.hora = dayjs().format("hh:mm");
};

const getFirmaProf = async () => {
  try {
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
    huella_acomp.value = await _getHuella$({ codigo: getAcomp.cod });
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = async () => {
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(ODO015));

  let datos = {
    nit_entid: nit_usu.value,
    estado: ODO015.opcion_odo015 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "ODO015",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 32);
        ODO015.fecha = dayjs(fecha).format("YYYY-MM-DD");
        return grabarFirmaConsen(data?.llave_consen);
      } else CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });
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
  const datos_odo015 = {
    autorizo: ODO015.opcion_odo015 == "AUTORIZAR" ? true : false,
    empresa: getEmpresa,
    paciente: getPaci,
    prof: getProf,
    acomp: getAcomp,
    firmas: {
      firma_paci: firma_recibida.value ? true : false,
      huella_paci: huella_paci.value ? true : false,
      firma_acomp: firma_recibida_acomp.value ? true : false,
      firma_prof: firma_prof.value ? true : false,
    },
    paren_acomp: getSesion.paren_acomp,
    descrip_enfer: descrip_diagnostico.value,
    ...ODO015,
  };

  const firmas = {
    img_firma_acomp: firma_recibida_acomp.value,
    img_firma_consen: firma_recibida.value,
    img_firma_paci: firma_recibida.value,
    img_huella_paci: huella_paci.value,
    firma_prof: firma_prof.value,
    img_huella_acomp: huella_acomp.value,
  };

  const docDefinitionPrint = await utilsFormat({
    datos: firmas,
    content: impresionODO015({
      datos: datos_odo015,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionODO015({
      datos: datos_odo015,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-ODO-015` });
  return response_impresion;
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
</script>

<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
