import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionHIC054 = ({ datos }) => {
  console.log("impresionHIC054 ", datos);
  var dd = {
    stack: [contenidoHIC053(), firmas()],
  };

  function contenidoHIC053() {
    return {
      stack: [
        {
          marginTop: 8,
          table: {
            widths: ["50%", "50%"],
            body: [
              [
                {
                  alignment: "left",
                  text: [
                    { bold: true, style: "tableTitle", text: "Nombres y apellidos: " },
                    { style: "bodyNoBold9", text: datos.paciente.descrip },
                  ],
                },
                {
                  alignment: "right",
                  text: [
                    { bold: true, style: "tableTitle", text: "Fecha: " },
                    { style: "bodyNoBold9", text: datos.fecha },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 8,
          bold: true,
          alignment: "center",
          text: "DERECHOS Y DEBERES",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "  IPS SALUD MENTAL MONTES SINAI, de acuerdo con la misión, la visión y los valores institucionales, los requerimientos de la Ley 100 de 1993 y los códigos de ética médica y de las demás profesiones que interactúan en el Sistema General de Seguridad Social en Salud y de los principios propios han definido la siguiente carta de derechos y deberes de los pacientes, los cuales serán un referente para asegurar la atención humanizada y de calidad. Principio especial: Se debe evaluar la competencia de toma de decisiones en cada paciente, teniendo en cuenta que en algunas enfermedades mentales ésta se ve alterada transitoria o permanentemente. La evaluación de competencia se debe realizar para cada actuación y circunstancia específica.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          bold: true,
          alignment: "center",
          text: "EN EL AMBITO DE LA SALUD MENTAL",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          ol: [
            "Derecho a recibir atención integral e integrada y humanizada por el equipo humano y los servicios especializados en salud mental.",
            "Derecho a recibir información clara, oportuna, veraz y completa de las circunstancias relacionadas con su estado de salud, diagnóstico, tratamiento y pronostico, incluyendo el propósito, método, duración probable y beneficios que se esperan, así como sus riesgos y las secuelas, de los hechos o situaciones causantes de su deterioro y de las circunstancias relacionadas con su seguridad social.",
            "Derecho a recibir la atención especializada e interdisciplinaria y los tratamientos con la mejor evidencia científica de acuerdo con los avances científicos en salud mental.",
            "Derecho a que las intervenciones sean las menos restrictivas de las libertades individuales de acuerdo a la ley vigente.",
            "Derecho a tener un proceso psicoterapéutico con los tiempos y sesiones necesarias para asegurar un trato digno para obtener resultados en términos de cambio, bienestar y calidad de vida.",
            "Derecho a recibir psi coeducación a nivel individual y familar sobre su trastorno mental y las normas de autocuidado.",
            " Derecho a recibir incapacidad laboral, en los términos y condiciones dispuestas por el profesional de la salud tratante, garantizando la recuperación en la salud de la persona.",
            "Derecho a ejercer sus derechos civiles y en caso de incapacidad que su incapacidad para ejercer estos derechos sea determinada por un juez de conformidad con la ley 1306 de 2009 y demás legislación vigente.",
            "Derecho a no ser discriminado o estigmatizado, por su condición de persona sujeto de atención en salud mental.",
            "Derecho a recibir o rechazar ayuda espiritual religiosa de acuerdo con sus creencias.",
            "Derecho a acceder y mantener el vinculo con el sistema educativo y el empleo, y no ser excluido por causa de su trastoro mental.",
            "Derecho a recibir el medicamento que requiera siempre con fines terapéuticos o diagnósticos.",
            "Derecho a exigir que sea tenido en cuenta el consentimiento informado para recibir el tratamniento.",
            "Derecho a no ser sometido a ensayos clínicos ni tratamientos experimentales sin su consentimiento informado.",
            "Derecho a la confidencialidad de la información relacionada con su proceso de y respetar la intimidad de otros pacientes.",
            "Derecho al reintegro a su familia y comunidad.",
          ],
        },
        {
          marginTop: 8,
          bold: true,
          alignment: "center",
          text: "DECLARACIÓN DE DEBERES DE LOS PACIENTES",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "Cuando me encuentro recibiendo atención médica especializada en la Clínica, mis deberes son, entre otros:",
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          ol: [
            "Información: Suministrar la información requerida sobre mi estado de salud, de manera clara, veraz, y completa.",
            "Autorización: . Firmar el consentimiento informado y autorización de los procedimientos que lo requieran.",
            "Convivencia: Conocer y cumplir las normas de la Institución y del servicio en el cual me encuentro hospitalizado.",
            "Respeto: Brindar un trato amable y respetuoso al personal de la Clínica, a los demás pacientes, a los familiares y allegados.",
            "Cuidado de recursos: Cuidar y hacer uso racional de los recursos, dotación, servicios e instalaciones de la Clínica.",
            "Autocuidado: Cuidar mi salud e integridad física y tomar conciencia de la necesidad de mi tratamiento.",
            "Responsabilidad Compartida: Exigir el cumplimiento de mis derechos y de los demás pacientes",
            "Cumplimiento al Tratamiento: Seguir las recomendaciones del equipo terapéutico durante la hospitalización y al egreso cumplir el tratamiento ordenado",
          ],
        },
        {
          marginTop: 8,
          bold: true,
          alignment: "center",
          text: "DEBERES DE LOS USUARIOS",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          ol: [
            "Respeto: Tratar con respeto y dignidad a las personas que lo atienden, a los otros pacientes y a sus familiares.",
            "Veracidad: Informara clara y verazmente las circunstancias relacionadas con su estado de salud y los hechos y situaciones causantes de su deterioro.",
            "Información: Dar a conocer las circunstancias administrativas relativas a la seguridad social y todas las necesarias para que la clínica pueda brindarle el cuidado idóneo, siendo responsable por los pagos no cubiertos por el sistema de salud.",
            "Cuidado de recursos: Cuidar y hacer uso racional de los recursos, instalación, dotación y servicios de la institución.",
            "Informar: Informar oportunamente los hechos que considere riesgosos para su salud y bienestar que perciba durante su permanencia en esta institución.",
            "Consentimiento informado: Expresar por escrito su voluntad de no aceptar algún tratamiento o procedimiento.",
            "Autorización: Designar a una tercera persona para proporcionar por usted el consentimiento informado cuando las condiciones lo ameriten.",
            "Cumplimiento: Colaborar con el cumplimiento de las normas, reglamentos, criterios de ingreso y egreso e instrucciones de la institución y el equipo tratante.",
            "Comunicación: Canalizar por el conducto regular sus quejas o sugerencias.",
            "Participación: participar activamente en el tratamiento y cuidados previstos por el equipo de salud procurando que usted y su familia sean parte activa del proceso de recuperación.",
          ],
        },
        {
          marginTop: 8,
          bold: true,
          alignment: "center",
          text: "DERECHOS DE LOS USUARIOS",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          ol: [
            "Elegir Libremente: Derecho a elegir libremente al médico y en general a los profesionales de la salud, como también a las instituciones de salud que le presten la atención requerida, dentro de los recursos disponibles del país.",
            "Comunicación clara: derecho a disfrutar de una comunicación clara con el médico apropiada a sus condiciones sicológicas y culturales, que le permita obtener toda la información necesaria respecto a la enfermedad que padece.",
            "Trato digno: derecho a recibir un trato digno respetando sus creencias y costumbres.",
            "Confidencialidad: derecho a que todos los informes de la historia clínica sean tratados de manera confidencial y secreta, y que solo con su autorización puedan ser conocidos,",
            "Mejor servicio: derecho a que se le preste durante todo el proceso de la enfermedad, la mejor asistencia médica disponible, pero respetando los deseos del paciente en el caso de enfermedad irreversible.",
            "Explicación de costos: derecho a revisar y recibir explicaciones acerca de los costos por los servicios obtenidos, tanto por parte de los profesionales de la salud como por las instituciones sanitarias.",
            "Apoyo espiritual: derecho a recibir o rehusar apoyo espiritual o moral cualquiera que sea el culto religioso que profesa.",
            "Consentimiento derecho a que se le respete la voluntad de rehusar o no en investigaciones realizadas por personal científicamente calificado.",
            "Donación: derecho a que se le respete la voluntad de rehusar o no a la donación de sus órganos para que estos sean trasplantados a otros enfermos.",
            "Dignidad: derecho a morir con dignidad.",
          ],
        },
        textoDisentimiento(datos.disentimiento, datos.acompa_disenti),
      ],
      styles: {
        bodyContent: {
          fontSize: 11,
          alignment: "justify",
        },
      },
    };
  }

  function firmaHuellaPaci(huella_paci, cant_firmas) {
    let tamano_firma = 0;

    if (cant_firmas == 2) {
      tamano_firma = 105;
    } else {
      tamano_firma = 130;
    }
    const conHuella = {
      marginLeft: 3,
      columns: [
        {
          marginTop: 9,
          alignment: "center",
          image: "firma_paci",
          width: tamano_firma,
          height: 70,
        },
        {
          marginTop: 9,
          marginLeft: 5,
          image: "huella_paci",
          width: 55,
          height: 70,
        },
      ],
    };

    const sinHuella = {
      marginLeft: 3,
      marginTop: 9,
      alignment: "center",
      image: "firma_paci",
      width: tamano_firma,
      height: 70,
    };

    if (huella_paci) return conHuella;
    else return sinHuella;
  }

  function firmaPaciente(huella_paci, cant_firmas) {
    return {
      stack: [
        {
          text: "PACIENTE (FIRMA / HUELLA)",
          bold: true,
          alignment: "center",
          style: "tableNoBold",
        },
        firmaHuellaPaci(huella_paci, cant_firmas),
        {
          marginTop: 10,
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "NOMBRE: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.paciente.descrip}`,
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "DOCUMENTO: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.paciente.cod}`,
            },
          ],
        },
      ],
    };
  }

  function firmaAcompanante() {
    return {
      stack: [
        {
          text: "TUTOR O ACOMPAÑANTE (FIRMA / HUELLA)",

          alignment: "center",
          style: "tableNoBold",
          bold: true,
        },
        {
          text: "(EN CASO DE NO FIRMAR)",
          alignment: "center",
          style: "tableNoBold",
          fontSize: 6,
        },
        {
          marginTop: 2,
          alignment: "center",
          image: "firma_acomp",
          width: 130,
          height: 70,
        },
        {
          marginTop: 10,
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "NOMBRE: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.acomp.descrip}`,
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "DOCUMENTO: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.acomp.cod}`,
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "PARENTESCO: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${evaluarParentesco(datos.paren_acomp)}`,
            },
          ],
        },
      ],
    };
  }

  function firmaProfesional() {
    return {
      stack: [
        {
          text: "FIRMA PROFESIONAL",

          alignment: "center",
          style: "tableNoBold",
          bold: true,
        },
        {
          marginTop: 8,
          alignment: "center",
          image: "firma_profesional",
          width: 130,
          height: 70,
        },
        {
          marginTop: 8,
          text: [
            {
              text: "NOMBRE: ",
              style: "tableNoBold",
              bold: true,
            },
            {
              text: `${datos.prof.descrip}`,
              style: "tableNoBold",
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "PROFESIONAL AREA DE:",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.prof.descrip_atiende}`,
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "DOCUMENTO: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.prof.cod}`,
            },
          ],
        },
      ],
    };
  }

  function firmas() {
    let firmasArray = [];
    let anchos = ["40%"];
    let tamanoFirmasArray = 0;

    if (datos.firmas.firma_acomp) {
      firmasArray.push(firmaAcompanante());
    }

    if (datos.firmas.firma_prof) {
      firmasArray.push(firmaProfesional());
    }

    tamanoFirmasArray = firmasArray.length;

    if (datos.firmas.firma_paci) {
      firmasArray.unshift(firmaPaciente(datos.firmas.huella_paci, tamanoFirmasArray));
    }

    if (firmasArray.length == 2) {
      firmasArray.unshift({ border: [false, false, false, false], text: "" });
      anchos = ["10%", "40%", "40%"];
    } else if (firmasArray.length == 3) anchos = ["33%", "34%", "33%"];
    return {
      marginTop: 30,
      table: {
        widths: anchos,
        body: [[...firmasArray]],
      },
    };
  }
  function textoDisentimiento(disentimiento, acompa_disenti) {
    const textAcompa = `Yo ${datos.acomp.descrip}, identificado(a) con el documento de identidad número ${datos.acomp.cod}, en calidad de acudiente de ${datos.paciente.descrip} , identificada (o) con el documento de identidad número ${datos.paciente.cod}, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;
    const textPacient = `Yo ${datos.paciente.descrip}, identificado(a) con el documento de identidad número ${datos.paciente.cod}, en calidad de paciente, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;

    const textoDisentimiento = {
      marginTop: 5,
      table: {
        widths: ["auto", 170],
        body: [
          [
            {
              colSpan: 2,
              text: "DISENTIMIENTO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {},
          ],
          [
            {
              marginLeft: 3,
              marginTop: 5,
              marginRight: 3,
              stack: [
                {
                  text: acompa_disenti == "S" ? textAcompa : textPacient,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {
                  marginTop: 5,
                  text: [
                    {
                      text: "Observaciones:",
                      bold: true,
                    },
                    {
                      text: `${datos.obser_disenti}`,
                    },
                  ],
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            },
            {
              stack: [
                {
                  text: "RESPONSABLE DISENTIMIENTO",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
                {
                  marginTop: 5,
                  alignment: "center",
                  image: "firma_disentimiento",
                  width: 140,
                  height: 70,
                },
                {
                  marginTop: 5,
                  columns: [
                    {
                      width: 48,
                      text: "NOMBRE:",
                      bold: true,
                    },
                    {
                      width: "*",
                      text: `${acompa_disenti == "S" ? datos.acomp.descrip : datos.paciente.descrip}`,
                    },
                  ],
                  style: "tableTitle",
                },
                {
                  text: [
                    {
                      text: "DOC. IDENT: ",
                      bold: true,
                    },
                    {
                      text: `${acompa_disenti == "S" ? datos.acomp.cod : datos.paciente.cod}`,
                    },
                  ],
                  style: "tableTitle",
                },
              ],
            },
          ],
        ],
      },
    };

    if (disentimiento == "S") return textoDisentimiento;
    else return null;
  }
  return dd;
};
