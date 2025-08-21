<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_lab033"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_lab033 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_lab033 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_lab033">
              {{ opcion_lab033 }}
            </q-chip>
          </p>
        </div>

        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="text-center" style="font-weight: bold; margin-top: 10px; margin-left: 10px">CONSENTIMIENTO INFORMADO PARA PARTO VAGINAL</p>
          </div>
        </div>

        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; width: 100%; background-color: #4c7ca4">
            <p class="text-center" style="font-weight: bold; margin-top: 10px; margin-left: 10px; color: white">INTRODUCCIÓN</p>
          </div>
          <div style="border: 1px solid #ccc; width: 100%">
            <span class="text-bold q-pa-xs">Apreciado Usuario:</span>
            <p class="text-justify q-pa-xs">
              Usted va a ser sometido a un procedimiento quirúrgico, invasivo no quirúrgico o terapéutico de la clínica Sanar. En este documento se
              explican con claridad, profundidad y en un lenguaje comprensible las más importantes características de la intervención sugerida, su
              indicación, beneficios y potenciales riesgos. Lo invitamos a leerlo con atención y a discutirlo con su médico tratante quien
              gustosamente responderá sus preguntas.
            </p>
            <p class="text-justify q-pa-xs">
              En señal de conformidad con la información recibida y con la realización de la intervención quirúrgica, deberá usted firmar el formato
              correspondiente. Solo con su autorización podremos programarlo y realizarle la intervención descrita.
            </p>
          </div>
          <div style="border: 1px solid #ccc; width: 100%; background-color: #4c7ca4">
            <p class="text-center" style="font-weight: bold; margin-top: 10px; margin-left: 10px; color: white">INFORMACIÓN GENERAL</p>
          </div>
          <div style="border: 1px solid #ccc; width: 100%">
            <span class="text-bold q-pa-xs">¿QUÉ ES EL PARTO VAGINAL?</span>
            <p class="text-justify q-pa-xs">
              El parto, es el momento de la culminación del embarazo. El trabajo de parto es un proceso natural, inevitable y fisiológico, que tiene
              como finalidad modificar el cuello del útero y permitir la expulsión del feto y la placenta por vía vaginal.
            </p>
            <p class="text-justify q-pa-xs">
              Una mujer inicia el parto con la aparición de contracciones uterinas regulares que aumentan en intensidad y frecuencia acompañadas de
              cambios fisiológicos en el cuello uterino, consistentes en borramiento y dilatación. Simultáneamente, sucede el descenso y expulsión del
              feto seguido del alumbramiento de la placenta.
            </p>
            <p class="text-justify q-pa-xs">
              Para facilitar este proceso, puede ser necesario usar anestesia peridural y medicamentos inductores de la contractilidad del útero de la
              índole de uterotónicos, oxitocina o prostaglandínicos, siempre bajo estricto control especializado.
            </p>
            <p class="text-justify q-pa-xs">
              En el clinica San Ignacio como en la mayoría de los centros asistenciales el parto vaginal ocurre en una posición ginecológica, con la
              gestante acostada sobre su espalda y sus pies sostenidos a la altura de los glúteos.
            </p>
            <p class="text-justify q-pa-xs">
              Cuando el bebe está en una estación adecuada, se procede a la episiotomia (incisión quirúrgica de la zona perineal) según criterio
              médico.
            </p>
            <p class="text-justify q-pa-xs">
              En este momento el trabajo de parto se encuentra en el período expulsivo o período de pujar y culmina con la expulsión del feto.
            </p>
            <p class="text-justify q-pa-xs">
              Posterior al nacimiento, es siguiente paso corresponde a la expulsión de la placenta y las membranas, esto lleva entre 5 y 30 minutos.
              En algunas pacientes de acuerdo con el criterio médico puede ser necesario revisar el útero mediante la introducción de la mano del
              médico en la cavidad uterina para extraer restos placentarios o membranas que hayan podido quedar retenidas. Finalmente se procede al
              cierre de la episiotomía mediante suturas quirúrgicas.
            </p>
            <span class="text-bold q-pa-xs">BENEFICIOS</span>
            <p class="text-justify q-pa-xs">
              El mayor beneficio atribuible al parto vaginal es que evita una intervención quirúrgica (cesárea) y mejora el tiempo de recuperación.
              Con el nacimiento de un bebe sano este puede ser llevado inmediatamente a la habitación con la madre.
            </p>
            <span class="text-bold q-pa-xs">POSIBLES RIESGOS</span>
            <p class="text-justify q-pa-xs">
              Durante el trabajo de parto se pueden presentar complicaciones maternas que pueden comprometer el estado de salud que imponen la
              necesidad de recurrir a la instrumentación del parto (uso de espátulas o fórceps) o eventualmente a cesárea. Las complicaciones pueden
              ocurrir durante cualquiera de los periodos del parto y requieren de una intervención rápida y eficaz para evitar daños en la madre y el
              feto.
            </p>
            <p class="text-justify q-pa-xs">
              La falta de progresión del parto puede obedecer a contracciones uterinas muy débiles o irregulares que no producen la dilatación
              cervical necesaria; también puede corresponder a una desproporción del tamaño fetal con respecto a la pelvis materna debido a macrosomia
              fetal o a estrechez del canal pélvico.
            </p>
            <p class="text-justify q-pa-xs">
              El sufrimiento fetal es la aparición de signos que indican deterioro biofísico del feto. Para ello se monitoriza a la madre con un
              tococardiograma fetal que establece cierta relación entre las variables frecuencia cardíaca fetal y frecuencia e intensidad de las
              contracciones uterinas. A su vez, otro signo que hace pensar en la pérdida de bienestar fetal, es la aparición de líquido amniótico de
              color verde o teñido de meconio (heces fetales), que indica que el feto circunstancialmente o de forma crónica no tiene el aporte de
              oxígeno ideal. En la actualidad no se dispone de métodos infalibles para detectar de manera precoz y confiable todas las situaciones de
              riesgo fetal. Solamente la vigilancia constante del trabajo de parto minimiza las situaciones de riesgo fetal y sus posibles secuelas.
            </p>
            <p class="text-justify q-pa-xs">
              Tanto la no progresión del parto como el sufrimiento fetal se tratan acortando el periodo de dilatación, ya sea mediante el uso de
              fórceps o espátulas, o practicando una cesárea de emergencia.
            </p>
            <p class="text-justify q-pa-xs">
              El embolismo de líquido amniótico es una rara complicación que presenta un alto índice de mortalidad. Para que se dé esta complicación
              deben romperse las membranas fetales y los vasos uterinos, lo que provoca que el líquido amniótico se introduzca en el sistema
              circulatorio y viaje hasta los pulmones de la madre causando un colapso pulmonar y como consecuencia de ello falla cardíaca.
            </p>
            <p class="text-justify q-pa-xs">
              Existen condiciones maternas que aumentan el riesgo obstétrico, en quienes es más frecuente la aparición de complicaciones no
              previsibles; sin que esto excluya del riesgo a las mujeres sanas sin riesgo obstétrico identificable.
            </p>
            <p class="text-justify q-pa-xs">Son situaciones con alto riesgo obstétrico y perinatal:</p>
            <ol>
              <li>Primíparas y grandes multíparas.</li>
              <li>Obesidad y desnutrición.</li>
              <li>Fumadoras y fármaco-dependientes.</li>
              <li>Embarazos no deseados.</li>
              <li>Embarazos pocos o ningún control prenatal.</li>
              <li>Cesáreas anteriores u otra cirugía uterina anterior.</li>
              <li>Embarazos múltiples.</li>
              <li>Fetos macrosómicos (peso mayor de 4000 gr).</li>
              <li>Fetos con bajo peso.</li>
              <li>Fetos con malformaciones congénitas o hereditarias.</li>
              <li>Presentaciones o situaciones fetales anormales-podálica, cara, frente, oblicua.</li>
              <li>Hipertensión crónica, del embarazo o pre-eclampsia.</li>
              <li>Diabetes antes o durante el embarazo.</li>
              <li>Amenaza o trabajo de parto pre-término.</li>
              <li>Oligohidramnios ( disminución del líquido amniótico)</li>
              <li>Polihidramnios ( aumento del líquido amniótico).</li>
              <li>Ruptura prematura de membranas.</li>
              <li>Antecedente de abortos previos, esterilidad, anomalías congénitas de los genitales, miomas uterinos.</li>
              <li>Enfermedades generales. Cardiopulmonares, renales, infecciosas, inmunológicas, mentales.</li>
            </ol>
            <p class="text-justify q-pa-xs">
              Ningún procedimiento está exento de riesgos importantes, incluyendo la muerte, aunque esta posibilidad es infrecuente. En caso de
              ocurrir alguna complicación, el clinica procederá con los medios y recursos necesarios para su control.
            </p>
          </div>
          <div style="border: 1px solid #ccc; width: 100%; background-color: #4c7ca4">
            <p class="text-center" style="font-weight: bold; margin-top: 10px; margin-left: 10px; color: white">AUTORIZACIÓN</p>
          </div>
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="text-justify q-pa-xs">
              He comprendido las explicaciones que, en un lenguaje claro y sencillo, se me han brindado y el médico que me ha atendido me ha permitido
              expresar todas mis observaciones y me ha aclarado todas las dudas y preguntas que le he planteado respecto a los fines, alternativas,
              métodos, ventajas, inconvenientes y pronóstico de la intervención, así como de los riesgos y complicaciones que por mi situación actual
              pueden surgir, en especial las siguientes:
            </p>
            <TextArea_ v-model="LAB033.riesgos_complicac" :field="form.riesgos_complicac" />
            <p class="text-justify q-pa-xs">
              También he sido informado que durante el acto quirúrgico, procedimiento o tratamiento se pueden presentar imprevistos que hagan al
              equipo médico variar la técnica o plan de manejo programado.
            </p>
            <p class="text-justify q-pa-xs">
              Por ello, manifiesto que me considero satisfecho/a con la información recibida y que comprendo la indicación y los riesgos de este
              procedimiento/tratamiento. Ningún procedimiento está exento de riesgos importantes, incluyendo la muerte, aunque esta posibilidad es
              infrecuente.
            </p>
            <p class="text-justify q-pa-xs">
              En caso de ocurrir alguna complicación, la clinica procederá con los medios y recursos que se requieran para su control, intentando
              minimizar en lo posible sus consecuencias.
            </p>
            <p class="text-justify q-pa-xs">
              Yo, <span class="text-bold q-pa-xs">{{ getPaci.descrip.trim() }}.</span>
            </p>
            <p class="text-justify q-pa-xs">
              Fecha <span class="text-bold q-pa-xs">{{ LAB033.fecha }}.</span>
            </p>
            <div>
              <ul>
                <li>
                  <div class="row">
                    <p>He comprendido la naturaleza y propósitos de la intervención que me ha sido explicada satisfactoriamente por el médico:</p>
                    <Input_ v-model="LAB033.med_capacita" :field="form.med_capacita" :inputStyle="{ width: '460px' }" />
                    <p class="text-justify q-pa-xs">y he podido formular todas las preguntas que he considerado oportunas.</p>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <p>La cirugía descrita está aceptada por la especialidad:</p>
                    <Input_ v-model="LAB033.espec_cirugia" :field="form.espec_cirugia" :inputStyle="{ width: '460px' }" />
                    <p class="text-justify q-pa-xs">
                      como la mejor alternativa para solucionar mi problema y no existe una contraindicación especial para su realización.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <p>
                      He sido informado de los métodos alternativos de tratamiento, en caso de que los hubiese, al igual que las ventajas y
                      desventajas de cada uno de ellos.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <p>He informado al médico:</p>
                    <Input_ v-model="LAB033.med_valora" :field="form.med_valora" :inputStyle="{ width: '460px' }" />
                    <p class="text-justify q-pa-xs">de mis enfermedades generales para la valoración de las posibles contraindicaciones.</p>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <p>
                      Puedo retirar la autorización para la cirugía si lo estimo oportuno, sin que ello repercuta en los restantes cuidados médicos.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <p>
                      Soy consciente de los riesgos propios del tratamiento indicado, así como los derivados de la anestesia que en mi caso se
                      aplique.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <p>Soy consciente que no existen garantías absolutas de obtener resultados satisfactorios.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div style="border: 1px solid #ccc; width: 100%">
            <p class="text-center q-pa-xs">
              <span class="text-bold q-pa-xs">Información complementaria solicitada y/o circunstancia especial:</span>
            </p>
            <TextArea_ v-model="LAB033.info_complement" :field="form.info_complement" />

            <p class="text-center q-pa-xs">
              <span class="text-bold q-pa-xs">Así pues, de forma voluntaria, doy mi consentimiento:</span>
            </p>
            <div class="row">
              <div style="border: 1px solid #ccc; width: 80%">
                <p class="text-justify q-pa-xs">
                  Para que se me realice dicho(s) procedimiento(s) quirúrgico(s), así como las maniobras u operaciones que sean necesarias durante la
                  intervención y para que asista el personal autorizado.
                </p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 20%">
                <q-radio color="primary" v-model="LAB033.pre_1" val="S" label="SI" />
                <q-radio color="primary" v-model="LAB033.pre_1" val="N" label="NO" />
              </div>
              <div style="border: 1px solid #ccc; width: 80%">
                <p class="text-justify q-pa-xs">
                  Para que se me administre la anestesia que se considere adecuada para la operación, así como las medidas complementarias oportunas.
                </p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 20%">
                <q-radio color="primary" v-model="LAB033.pre_2" val="S" label="SI" />
                <q-radio color="primary" v-model="LAB033.pre_2" val="N" label="NO" />
              </div>
              <div style="border: 1px solid #ccc; width: 80%">
                <p class="text-justify q-pa-xs">
                  Para que se puedan realizar fotografías o/y grabar la intervención, así como su utilización con fines didácticos o científicos sin
                  que se divulgue el nombre del paciente o sus familiares.
                </p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 20%">
                <q-radio color="primary" v-model="LAB033.pre_3" val="S" label="SI" />
                <q-radio color="primary" v-model="LAB033.pre_3" val="N" label="NO" />
              </div>
              <div style="border: 1px solid #ccc; width: 80%">
                <p class="text-justify q-pa-xs">Para que, en caso de necesidad se me hagan transfusiones de sangre y/o hemoderivados.</p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 20%">
                <q-radio color="primary" v-model="LAB033.pre_4" val="S" label="SI" />
                <q-radio color="primary" v-model="LAB033.pre_4" val="N" label="NO" />
              </div>
            </div>
          </div>
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
        :disable="opcion_lab033 ? false : true"
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
import { impresionLAB033, impresion, generarArchivo } from "@/impresiones";
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

const LAB033 = reactive({
  fecha: "",
  riesgos_complicac: "",
  med_capacita: "",
  espec_cirugia: "",
  info_complement: "",
  med_valora: "",
  pre_1: "",
  pre_2: "",
  pre_3: "",
  pre_4: "",
});
const form = ref({
  riesgos_complicac: {
    id: "riesgos_complicac",
    maxlength: "500",
    label: "",
    rows: 3,
    campo_abierto: true,
  },
  med_capacita: {
    id: "med_capacita",
    maxlength: "150",
    label: "",
    placeholder: "Nombre del médico que capacita al paciente",
    campo_abierto: true,
  },
  espec_cirugia: {
    id: "espec_cirugia",
    maxlength: "150",
    label: "",
    placeholder: "Especialidad de la cirugía",
    campo_abierto: true,
  },
  info_complement: {
    id: "info_complement",
    maxlength: "500",
    label: "",
    rows: 3,
    campo_abierto: true,
  },
  med_valora: {
    id: "med_valora",
    maxlength: "150",
    label: "",
    placeholder: "Nombre del médico que valora al paciente",
    campo_abierto: true,
  },
});

const opcion_lab033 = ref(null);

onMounted(() => {
  LAB033.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(LAB033));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_lab033.value == "AUTORIZAR" ? "1" : "2",
    llave_fact: `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: `${getPaci.cod}00000000`,
    cod_med: getProf.cod,
    cod_consen: "LAB033",
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
    const datos_lab033 = {
      autorizo: opcion_lab033.value == "AUTORIZAR" ? true : false,
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
      ...LAB033,
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
      datos: { ...firmas, cod_consen: "LAB033" },
      content: impresionLAB033({
        datos: datos_lab033,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "LAB033" },
      content: impresionLAB033({
        datos: datos_lab033,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-LAB-033` });
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
