<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc054"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc054 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc054 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc054">
              {{ opcion_hc054 }}
            </q-chip>
          </p>
        </div>

        <div class="row justify-between items-center">
          <p><span class="text-bold">Nombres y apellidos:</span> {{ getPaci.descrip }}&nbsp;</p>
          <p>
            <span class="text-bold">Fecha:</span>
            {{ dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD") }}
          </p>
        </div>

        <div>
          <p style="text-align: center">
            <span class="text-bold">DERECHOS Y DEBERES</span>
          </p>
          <p style="text-align: justify">
            IPS SALUD MENTAL MONTES SINAI, de acuerdo con la misión, la visión y los valores institucionales, los requerimientos de la Ley 100 de 1993
            y los códigos de ética médica y de las demás profesiones que interactúan en el Sistema General de Seguridad Social en Salud y de los
            principios propios han definido la siguiente carta de derechos y deberes de los pacientes, los cuales serán un referente para asegurar la
            atención humanizada y de calidad. Principio especial: Se debe evaluar la competencia de toma de decisiones en cada paciente, teniendo en
            cuenta que en algunas enfermedades mentales ésta se ve alterada transitoria o permanentemente. La evaluación de competencia se debe
            realizar para cada actuación y circunstancia específica.
          </p>
          <p style="text-align: center">
            <span class="text-bold">EN EL AMBITO DE LA SALUD MENTAL</span>
          </p>
          <ol>
            <li>Derecho a recibir atención integral e integrada y humanizada por el equipo humano y los servicios especializados en salud mental.</li>
            <li>
              Derecho a recibir información clara, oportuna, veraz y completa de las circunstancias relacionadas con su estado de salud, diagnóstico,
              tratamiento y pronostico, incluyendo el propósito, método, duración probable y beneficios que se esperan, así como sus riesgos y las
              secuelas, de los hechos o situaciones causantes de su deterioro y de las circunstancias relacionadas con su seguridad social.
            </li>
            <li>
              Derecho a recibir la atención especializada e interdisciplinaria y los tratamientos con la mejor evidencia científica de acuerdo con los
              avances científicos en salud mental.
            </li>
            <li>Derecho a que las intervenciones sean las menos restrictivas de las libertades individuales de acuerdo a la ley vigente.</li>
            <li>
              Derecho a tener un proceso psicoterapéutico con los tiempos y sesiones necesarias para asegurar un trato digno para obtener resultados
              en términos de cambio, bienestar y calidad de vida.
            </li>
            <li>Derecho a recibir psi coeducación a nivel individual y familar sobre su trastorno mental y las normas de autocuidado.</li>
            <li>
              Derecho a recibir incapacidad laboral, en los términos y condiciones dispuestas por el profesional de la salud tratante, garantizando la
              recuperación en la salud de la persona.
            </li>
            <li>
              Derecho a ejercer sus derechos civiles y en caso de incapacidad que su incapacidad para ejercer estos derechos sea determinada por un
              juez de conformidad con la ley 1306 de 2009 y demás legislación vigente.
            </li>
            <li>Derecho a no ser discriminado o estigmatizado, por su condición de persona sujeto de atención en salud mental.</li>
            <li>Derecho a recibir o rechazar ayuda espiritual religiosa de acuerdo con sus creencias.</li>
            <li>Derecho a acceder y mantener el vinculo con el sistema educativo y el empleo, y no ser excluido por causa de su trastoro mental.</li>
            <li>Derecho a recibir el medicamento que requiera siempre con fines terapéuticos o diagnósticos.</li>
            <li>Derecho a exigir que sea tenido en cuenta el consentimiento informado para recibir el tratamniento.</li>
            <li>Derecho a no ser sometido a ensayos clínicos ni tratamientos experimentales sin su consentimiento informado.</li>
            <li>Derecho a la confidencialidad de la información relacionada con su proceso de y respetar la intimidad de otros pacientes.</li>
            <li>Derecho al reintegro a su familia y comunidad.</li>
          </ol>
          <p style="text-align: center">
            <span class="text-bold">DECLARACIÓN DE DEBERES DE LOS PACIENTES</span>
          </p>
          <p style="text-align: justify">Cuando me encuentro recibiendo atención médica especializada en la Clínica, mis deberes son, entre otros:</p>
          <ol>
            <li>Información: Suministrar la información requerida sobre mi estado de salud, de manera clara, veraz, y completa.</li>
            <li>Autorización: Firmar el consentimiento informado y autorización de los procedimientos que lo requieran.</li>
            <li>Convivencia: Conocer y cumplir las normas de la Institución y del servicio en el cual me encuentro hospitalizado.</li>
            <li>Respeto: Brindar un trato amable y respetuoso al personal de la Clínica, a los demas pacientes, a los familiares y allegados.</li>
            <li>Cuidado de recursos: Cuidar y hacer uso racional de los recursos, dotación. servicios e instalaciones de la Clínica.</li>
            <li>Autocuidado: Cuidar mi salud e integridad física y tomar conciencia de la necesidad de mi tratamiento.</li>
            <li>Responsabilidad compartida: Exigir el cumplimiento de mis derechos y de los demás pacientes.</li>
            <li>
              Cumplimiento al tratamiento: Seguir las recomendaciones del equipo terapéutico durante la hospitalización y al egreso cumplir el
              tratamiento ordenado.
            </li>
          </ol>
          <p style="text-align: center">
            <span class="text-bold">DEBERES DE LOS USUARIOS</span>
          </p>
          <ol>
            <li>Respeto: Tratar con respeto y dignidad a las personas que lo atienden, a los otros pacientes y a sus familiares.</li>
            <li>
              Veracidad: Informara clara y verazmente las circunstancias relacionadas con su estado de salud y los hechos y situaciones causantes de
              su deterioro.
            </li>
            <li>
              Información: Dar a conocer las circunstancias administrativas relativas a la seguridad social y todas las necesarias para que la clínica
              pueda brindarle el cuidado idóneo, siendo responsable por los pagos no cubiertos por el sistema de salud.
            </li>
            <li>Cuidado de recursos: Cuidar y hacer uso racional de los recursos, instalación, dotación y servicios de la institución.</li>
            <li>
              Informar: Informar oportunamente los hechos que considere riesgosos para su salud y bienestar que perciba durante su permanencia en esta
              institución.
            </li>
            <li>Consentimiento informado: Expresar por escrito su voluntad de no aceptar algún tratamiento o procedimiento.</li>
            <li>
              Autorización: Designar a una tercera persona para proporcionar por usted el consentimiento informado cuando las condiciones lo ameriten.
            </li>
            <li>
              Cumplimiento: Colaborar con el cumplimiento de las normas, reglamentos, criterios de ingreso y egreso e instrucciones de la institución
              y el equipo tratante.
            </li>
            <li>Comunicación: Canalizar por el conducto regular sus quejas o sugerencias.</li>
            <li>
              Participación: participar activamente en el tratamiento y cuidados previstos por el equipo de salud procurando que usted y su familia
              sean parte activa del proceso de recuperación.
            </li>
          </ol>
          <p style="text-align: center">
            <span class="text-bold">DERECHOS DE LOS USUARIOS</span>
          </p>
          <ol>
            <li>
              Elegir Libremente: Derecho a elegir libremente al médico y en general a los profesionales de la salud, como también a las instituciones
              de salud. que le presten la atención requerida, dentro de los recursos disponibles del país.
            </li>
            <li>
              Comunicación clara: derecho a disfrutar de una comunicación clara con el médico apropiada a sus condiciones sicológicas y culturales,
              que le permita obtener toda la información necesaria respecto a la enfermedad que padece.
            </li>
            <li>Trato digno: derecho a recibir un trato digno respetando sus creencias y costumbres.</li>
            <li>
              Confidencialidad: derecho a que todos los informes de la historia clínica sean tratados de manera confidencial y secreta, y que solo con
              su autorización puedan ser conocidos.
            </li>
            <li>
              Mejor servicio: derecho a que se le preste durante todo el proceso de la enfermedad, la mejor asistencia médica disponible, pero
              respetando los deseos del paciente en el caso de enfermedad irreversible.
            </li>
            <li>
              Explicación de costos: derecho a revisar y recibir explicaciones acerca de los costos por los servicios obtenidos, tanto por parte de
              los profesionales de la salud como por las instituciones sanitarias.
            </li>
            <li>Apoyo espiritual: derecho a recibir o rehusar apoyo espiritual o moral cualquiera que sea el culto religioso que profesa.</li>
            <li>
              Consentimiento derecho a que se le respete la voluntad de rehusar o no en investigaciones realizadas por personal científicamente
              calificado.
            </li>
            <li>
              Donación: derecho a que se le respete la voluntad de rehusar o no a la donación de sus órganos para que estos sean trasplantados a otros
              enfermos.
            </li>
            <li>Dignidad:derecho a morir con dignidad.</li>
          </ol>
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
          quien_firma="FIRMA ACOMPAÑANTE"
          :registro_profe="getAcomp.cod"
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hc054 ? false : true"
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
import { impresionHIC054, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { calcularEdad, utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);

const HIC054 = reactive({
  fecha_act: "",
});

const opcion_hc054 = ref(null);

onMounted(() => {
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
  const requiere = "Complete el siguiente campo";
  if (!firma_recibida.value && !getAcomp.cod) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC054));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc054.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC054",
    disentimiento: "N",
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC054.fecha = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic054 = {
      autorizo: opcion_hc054.value == "AUTORIZAR" ? true : false,
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
      ...HIC054,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC054" },
      content: impresionHIC054({
        datos: datos_hic054,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC054" },
      content: impresionHIC054({
        datos: datos_hic054,
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
const callBackFirmaProf = (data_firma) => {
  data_firma && (firma_prof.value = data_firma);
};
</script>
