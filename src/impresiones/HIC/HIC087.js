import { useModuleFormatos, useApiContabilidad } from "@/store";
import { evaluarParentesco, evaluarClaseServ } from "@/formatos/utils";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC087 = ({ datos }) => {
  console.log("impresionHIC087 -> ", datos);

  var dd = {
    stack: [contenidoHIC087(), firmas()],
  };
  function contenidoHIC087() {
    return {
      stack: [
        {
          marginTop: 8,
          style: "bodyNoBold9",
          table: {
            widths: ["25%", "25%", "25%", "25%"],
            body: [
              [
                {
                  colSpan: 4,
                  bold: true,
                  alignment: "center",
                  text: "I. IDENTIFICACIÓN DEL PACIENTE",
                },
                {},
                {},
                {},
              ],
              [
                {
                  bold: true,
                  text: "Nombre del paciente",
                },
                {
                  colSpan: 3,
                  text: datos.paciente.descrip,
                },
                {},
                {},
              ],
              [
                {
                  bold: true,
                  text: "Tipo de documento",
                },
                {
                  text: datos.paciente.tipo_id,
                },
                {
                  bold: true,
                  text: "Número de documento",
                },
                {
                  text: datos.paciente.cod,
                },
              ],
              [
                {
                  bold: true,
                  text: "Fecha",
                },
                {
                  text: datos.fecha,
                },
                {
                  bold: true,
                  text: "Servicio",
                },
                {
                  text: evaluarClaseServ(datos.servicio),
                },
              ],
            ],
          },
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  bold: true,
                  alignment: "center",
                  text: "II. INFORMACIÓN GENERAL",
                },
              ],
              [
                {
                  alignment: "justify",
                  text: " Paciente ingresa al servicio quirúrgico, transfusional y suero terapia.",
                },
              ],
            ],
          },
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  bold: true,
                  alignment: "center",
                  text: "III. OBJETIVO Y BENEFICIOS",
                },
              ],
              [
                {
                  alignment: "justify",
                  ol: [
                    {
                      text: "CANALIZACIÓN DE UNA VIA VENOSA O CATETER DE INSERCIÓN PERIFÉRICA: Procedimiento por medio del cual, se introduce un catéter por la vena con el fin de administrar, líquidos, medicamentos, hemocomponentes, las complicaciones que se pueden derivar de este procedimiento son: repetición del procedimiento por dificultad en la canalización, dolor, infiltración, taponamiento y flebitis química o bacteriana.",
                    },
                    {
                      text: "PASO DE SONDAS: Procedimiento por medio del cual se introduce una sonda en el cuerpo, con fines terapéuticos, para la administración de medicamentos según la indicación terapéutica.",
                    },
                    {
                      text: "SONDAS NASOGASTRICAS Y/O OROGASTRICA: Procedimiento mediante el cual se introduce una sonda a través de la nariz (o boca : orogástrica) llegando al esófago, utilizada para la administración de medicamentos o alimentos, o drenar el contenido del estomago, La aspiración nasogástrica se utiliza principalmente para eliminar secreciones gástricas, las complicaciones que se pueden derivar de este procedimiento son: sangrados por la nariz y molestias en la deglución.",
                    },
                    {
                      text: "SONDAS VESICALES: Procedimiento mediante el cual se introduce una sonda a través del orificio uretral (hombre -mujer), para evacuación de contenido de la vejiga, las complicaciones que se pueden derivar de este procedimiento son: traumas, sangrado uretral, dolor.",
                    },
                    {
                      text: "ADMINISTRACIÓN DE MEDICAMENTOS: La administración de medicamentos es el procedimiento mediante el cual un fármaco es proporcionado por personal de salud idóneo al paciente por diferentes vías de administración: oral, intradérmica, subcutánea, intramuscular, endovenosa, rectal y tópica, según indicación médica escrita, debidamente informado y registrado. Existen medicamentos que pueden producir algunas molestias riesgos o reacciones tanto por su composición y efecto como por la vía de administración. Le sugerimos comentar al personal médico y de enfermería al respecto a fin de que se resuelvan las molestias o dudas que puedan surgir.",
                    },
                    {
                      text: "HIGIENE, ASEO Y CONFORT DEL PACIENTE: Es el conjunto de medidas de limpieza encaminadas a proporcionar apoyo, bienestar físico y conservar la salud del paciente.",
                    },
                    {
                      text: "VALORACION DE SIGNOS VITALES: Es la forma de determinar los valores normales o anormales del funcionamiento cardiaco. de respiratorio y termorregulación (temperatura) del organismo, esta actividad se realiza periódicamente para controlar su evolución por consiguiente los monitores poseen cables que se conectaran a las diferentes partes del cuerpo, con sensores para recoger señales y mostrar las constantes vitales.",
                    },
                    {
                      text: "CURACIONES: Es el procedimiento de limpieza de una herida y/o del área de inserción de catéteres, con adecuada técnica de asepsia, con técnica esteril según la necesidad favoreciendo al adecuado proceso de cicatrización de las heridas y disminuyendo la aparición de infecciones. En la realización de este procedimiento se puede presentar dolor.",
                    },
                    {
                      text: "RETIRO DE PUNTOS: procedimiento para quitar las suturas de la piel. Las suturas se usan para cerrar una herida. El retiro de suturas ayudan a prevenir la cicatrización y el daño al tejido. Las suturas se retiren normalmente de 7 a 10 días. Las suturas de su cara deben retirarse de 3 a 5 días. Las suturas en su cuero cabelludo deben retirarse de 7 y 14 días. Las suturas en abdomen, deben permanecer por 14 días porque las articulaciones se doblen y se mueven frecuentemente. El paciente tiene el derecho de participar en la planificación de su cuidado. Se le debe enseñar sobre su condición y como darle tratamiento.",
                    },
                    {
                      text: "DISMINUIR LESIONES DERIVADAS DE LAS CAÍDAS: Es la detección temprana de los pacientes con mayor riesgo de sufrir una caída. Existen pacientes que, por presentar factores predisponentes como edad, patologías medicamentos que toma, pueden en un momento dado ser susceptibles a calda, por esta razón se debe tomar medidas preventivas antes de que suceda.",
                    },
                    {
                      text: "INTUBACION OROTRAQUEAL: Procedimiento para asegurar la vía aérea en caso de falla ventilatoria o parada cardiaca.",
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  bold: true,
                  alignment: "center",
                  text: "IV. AUTORIZACIÓN Y FIRMAS",
                },
              ],
              [
                {
                  text: [
                    {
                      style: "bodyNoBold9",
                      alignment: "justify",
                      text: "Comprendo que, para la efectividad y logro de los objetivos buscados con el tratamiento propuesto por el equipo médico, es indispensable mi colaboración activa y el seguimiento a las indicaciones impartidas por el personal médico y de enfermería, por último, manifiesto que he sido informado por equipo de enfermería sobre alergias conocidas del tratamiento farmacológico ordenado. \n",
                    },
                    {
                      style: "bodyNoBold9",
                      alignment: "justify",
                      text: "Declaro que me han sido explicadas la naturaleza y razones de los actos de cuidado de enfermería, su importancia dentro de proceso de atención y sus posibles riesgos y complicaciones. Entiendo los beneficios que pretenden estas actividades y luego de comprender la información recibida, doy mi autorización libre y espontánea, en pleno uso de mis capacidades mentales, para que el equipo de enfermería profesional y auxiliar, adelanten los actos de cuidado que mi condición requiera (ley 911 de 2004, título I, Responsabilidad del profesional de enfermería en la práctica artículo 6, artículo 13, . Capitulo v artículo 35, articulo 36. \n",
                    },
                    {
                      style: "bodyNoBold9",
                      alignment: "justify",
                      text: "Declaro: Se me han explicado de forma clara y satisfactoria qué es, cómo se hace y para qué sirve este procedimiento. También se me ha explicado sus riesgos y complicaciones. He comprendido todo lo anterior. \n",
                    },
                    {
                      style: "bodyNoBold9",
                      alignment: "justify",
                      text: "Manifiesto y acepto ",
                    },
                    {
                      text: { bold: true, decoration: "underline", text: datos.autorizo ? " X " : "    " },
                    },
                    {
                      style: "bodyNoBold9",
                      alignment: "justify",
                      text: "rechazo ",
                    },
                    {
                      text: { bold: true, decoration: "underline", text: !datos.autorizo ? " X " : "    " },
                    },
                    {
                      style: "bodyNoBold9",
                      alignment: "justify",
                      text: ", que el profesional de la clínica Sanar, realice los procedimientos pertinentes en la atención en salud. ",
                    },
                  ],
                },
              ],
            ],
          },
        },
      ],
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
          image: getAcomp.cod ? getImgBs64 : "huella_paci",
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

  function firmaAcompanante(firma_acomp, cant_firmas) {
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
        firmaHuellaAcomp(firma_acomp, cant_firmas),
        // {
        //   marginTop: 8,
        //   alignment: "center",
        //   image: "firma_acomp",
        //   width: 125,
        //   height: 70,
        // },
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

  function firmaHuellaAcomp(huella_acomp, cant_firmas) {
    let tamano_firma = 0;

    if (cant_firmas == 2) {
      tamano_firma = 100;
    } else {
      tamano_firma = 125;
    }
    const conHuella = {
      marginLeft: 3,
      columns: [
        {
          marginTop: 8,
          alignment: "center",
          image: "firma_acomp",
          width: tamano_firma,
          height: 60,
        },
        // {
        //   marginTop: 9,
        //   marginLeft: 2,
        //   image: "huella_acomp",
        //   width: 50,
        //   height: 65,
        // },
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

    if (huella_acomp) return conHuella;
    else return sinHuella;
  }

  function firmaProfesional() {
    return {
      stack: [
        {
          text: "QUIEN BRINDA LA INFORMACIÓN",

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
  function firmaTestigo() {
    return {
      stack: [
        {
          text: "TESTIGO",

          alignment: "center",
          style: "tableNoBold",
          bold: true,
        },
        {
          marginTop: 8,
          alignment: "center",
          image: "firma_testigo",
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
              text: `${datos.testigo.descrip}`,
              style: "tableNoBold",
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
              text: `${datos.testigo.cod}`,
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
      firmasArray.push(firmaAcompanante(datos.firmas.huella_acomp, tamanoFirmasArray));
    }

    firmasArray.push(firmaTestigo());

    if (datos.firmas.firma_prof) {
      firmasArray.push(firmaProfesional());
    }

    tamanoFirmasArray = firmasArray.length;

    if (!datos.firmas.firma_acomp) {
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
  return dd;
};
