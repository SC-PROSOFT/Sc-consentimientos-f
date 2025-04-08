import { evaluarParentesco, calcularEdad, evaluarClaseServ } from "@/formatos/utils";
import { useModuleFormatos, useApiContabilidad } from "@/store";

const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();

export const impresionHIC076 = ({ datos }) => {
  console.log("datos ", datos);
  var dd = {
    stack: [contenidoHIC076(), firmas()],
  };
  function contenidoHIC076() {
    return {
      stack: [
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["60%", "20%", "20%"],
            body: [
              [{ bold: true, alignment: "center", colSpan: 3, text: "A.	Datos Generales" }, {}, {}],
              [
                { text: [{ bold: true, text: "Servicio: " }, { text: evaluarClaseServ(datos.servicio) }] },
                { text: [{ bold: true, text: " Fecha: " }, { text: datos.fecha }] },
                { text: [{ bold: true, text: " Hora: " }, { text: datos.hora }] },
              ],
              [
                { text: [{ bold: true, text: "Nombre usuario: " }, { text: datos.paciente.descrip }] },
                {
                  colSpan: 2,
                  text: [{ bold: true, text: "Documento: " }, { text: datos.paciente.tipo_id + " " }, { text: datos.paciente.cod }],
                },
                {},
              ],
              [
                {
                  text: [{ bold: true, text: "Dirección: " }, { text: datos.paciente.direccion }],
                },
                { colSpan: 2, text: [{ bold: true, text: "Teléfono: " }, { text: datos.paciente.telefono }] },

                {},
              ],
              [{ colSpan: 3, text: [{ bold: true, text: "Tutor o familiar: " }, { text: datos.acomp.descrip }] }, {}, {}],
              [{ colSpan: 3, text: [{ bold: true, text: "Profesional: " }, { text: datos.prof.descrip }] }, {}, {}],
              [{ colSpan: 3, text: [{ bold: true, text: "Nombre del procedimiento: " }, { text: datos.nomb_procedim }] }, {}, {}],
            ],
          },
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["100%"],
            body: [
              [
                {
                  style: "bodyNoBold9",
                  bold: true,
                  alignment: "center",
                  text: "B.	Declaración del usuario",
                },
              ],
              [
                {
                  alignment: "justify",
                  ol: [
                    {
                      style: "bodyNoBold9",
                      text: "En pleno uso de mis facultades mentales, autorizo al profesional mencionado y a los asistentes de su elección, para realizar en mi o en el(la) paciente el procedimiento.",
                    },
                    {
                      marginTop: 5,
                      text: [
                        { bold: true, decoration: "underline", text: "Además de los exámenes pertinentes" },
                        {
                          text: ", se me ha explicado la naturaleza y el propósito de la intervención o procedimiento especial por realizar, así como las complicaciones y riesgos que puedan producirse, en particular los siguientes: ",
                        },
                        {
                          bold: true,
                          text: "reacciones adversas a medicamentos (incluyendo reacciones alérgicas), infecciones intrahospitalarias, sangrado, requerimiento de reintervención, caídas, deterioro clínico, requerimiento de reanimación básica y avanzada, requerimiento de traslado como urgencia vital a institución de mayor nivel de complejidad, muerte.",
                        },
                      ],
                    },
                    {
                      marginTop: 5,
                      style: "bodyNoBold9",
                      text: "Se me han expuesto todas las posibles alternativas al tratamiento propuesto y se me ha dado la oportunidad de formular preguntas y las mismas han sido resueltas satisfactoriamente.",
                    },
                    {
                      marginTop: 5,
                      text: [
                        { text: "Autorizo al " },
                        {
                          bold: true,
                          text: "HOSPITAL LOCAL DE GUAMAL PRIMER NIVEL DE ATENCIÓN E.S.E ",
                        },
                        {
                          text: "y a sus especialistas, médicos, odontólogos, enfermeras y demás profesionales, para utilizar en el curso de la intervención o procedimiento y postoperatorio, los medicamentos, anestésicos o medios de contraste necesarios.",
                        },
                      ],
                    },
                    {
                      marginTop: 5,
                      style: "bodyNoBold9",
                      text: "Reconozco que hay riesgos para la vida y la salud asociados con estos procedimientos o intervenciones, medicamentos o sustancias.  Tales riesgos me han sido explicados por el médico que realizará la intervención o procedimiento.",
                    },
                    {
                      marginTop: 5,
                      style: "bodyNoBold9",
                      text: "Comprendo que en el curso de la intervención o procedimiento, pueden presentarse situaciones imprevistas que requieran procedimientos adicionales, los cuales autorizo si el médico o sus asistentes consideran necesarios.",
                    },
                    {
                      marginTop: 5,
                      text: [
                        { text: "Autorizo al " },
                        {
                          bold: true,
                          text: "HOSPITAL LOCAL DE GUAMAL PRIMER NIVEL DE ATENCIÓN E.S.E",
                        },
                        {
                          text: ", para tomar muestras de tejidos o fluidos orgánicos, con destino a exámenes de laboratorio clínico o histo-patológicos.",
                        },
                      ],
                    },
                    {
                      marginTop: 5,
                      style: "bodyNoBold9",
                      text: "Acepto que no se me ha garantizado el resultado de la intervención o procedimiento, porque entiendo que la actividad médica es de medio y no de resultado, tal como me lo han explicado, independientemente de que se haga uso de todos los elementos técnico-científicos disponibles por la institución, cumpliendo con los parámetros de calidad para su ejecución, tal como lo dispone la ley 23 de 1981, la Resolución 1995 de 1999 y demás normas pertinentes.",
                    },
                    {
                      marginTop: 5,
                      style: "bodyNoBold9",
                      text: " Certifico que he leído y comprendido el contenido de este documento, que los espacios en blanco han sido llenados antes de mi firma y me encuentro en capacidad total de expresar mi libre decisión.",
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          pageBreak: "before",
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["100%"],
            body: [
              [
                {
                  style: "bodyNoBold9",
                  bold: true,
                  alignment: "center",
                  text: "Declaración profesional responsable",
                },
              ],
              [
                {
                  alignment: "justify",
                  text: [
                    {
                      text: "He informado al paciente del propósito y naturaleza del procedimiento descrito arriba, de sus alternativas, posibles riesgos y de los resultados que se esperan.",
                    },
                  ],
                },
              ],
            ],
          },
        },
        declaracTutor(),
        {
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Este documento responde a lo dispuesto en La Ley 23 de 1981, Decreto 3380 de 1981 y Sentencia T 401 de 1994",
        },
      ],
    };
  }
  function declaracTutor() {
    if (datos.acomp.cod.trim() != "") {
      return {
        stack: [
          {
            marginTop: 10,
            style: "bodyNoBold9",
            table: {
              headerRows: 1,
              widths: ["100%"],
              body: [
                [
                  {
                    style: "bodyNoBold9",
                    bold: true,
                    alignment: "center",
                    text: "Declaración Tutor Legal o Familiar",
                  },
                ],
                [
                  {
                    text: [
                      {
                        style: "bodyNoBold9",
                        alignment: "justify",
                        text: "Sé que el paciente ha sido considerado por ahora incapaz de tomar por sí mismo la decisión de aceptar o rechazar el procedimiento descrito arriba. El médico me ha explicado de forma satisfactoria qué es, cómo se hace y para qué sirve este procedimiento o intervención. También se me han explicado sus riesgos y complicaciones. He comprendido todo lo anterior perfectamente y por ello doy mi consentimiento para que se realice el ingreso hospitalario. \n",
                      },
                      { text: "\n" },
                      { text: "El paciente no puede firmar por: \n" },
                      { text: " Menor de edad: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.no_firm_menor_edad == "S" ? " X " : "    " },
                      },
                      {
                        text: " Discapacidad cognitiva: ",
                      },
                      {
                        text: { bold: true, decoration: "underline", text: datos.no_firm_discap_cognit == "S" ? " X " : "    " },
                      },
                      {
                        text: " Estado neurológico o mental alterado: ",
                      },
                      {
                        text: { bold: true, decoration: "underline", text: datos.no_firm_discap_ment == "S" ? " X \n" : "    \n" },
                      },
                      { bold: true, text: "Otro: " },
                      {
                        text: datos.otr_discap,
                      },
                    ],
                  },
                ],
              ],
            },
          },
        ],
      };
    } else {
      return {
        text: "",
      };
    }
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
      image: "firma_acomp",
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
  // function firmaHuellaPaci(huella_paci, cant_firmas) {
  //   let tamano_firma = 0;

  //   if (cant_firmas == 2) {
  //     tamano_firma = 105;
  //   } else {
  //     tamano_firma = 130;
  //   }
  //   const conHuella = {
  //     marginLeft: 3,
  //     columns: [
  //       {
  //         marginTop: 9,
  //         alignment: "center",
  //         image: "firma_paci",
  //         width: tamano_firma,
  //         height: 70,
  //       },
  //       {
  //         marginTop: 9,
  //         marginLeft: 5,
  //         image: "huella_paci",
  //         width: 55,
  //         height: 70,
  //       },
  //     ],
  //   };
  //   const sinHuella = {
  //     marginLeft: 3,
  //     marginTop: 9,
  //     alignment: "center",
  //     image: "firma_paci",
  //     width: tamano_firma,
  //     height: 70,
  //   };

  //   if (huella_paci) return conHuella;
  //   else return sinHuella;
  // }

  // function firmaPaciente(huella_paci, cant_firmas) {
  //   return {
  //     stack: [
  //       {
  //         text: "PACIENTE (FIRMA / HUELLA)",
  //         bold: true,
  //         alignment: "center",
  //         style: "tableNoBold",
  //       },
  //       firmaHuellaPaci(huella_paci, cant_firmas),
  //       {
  //         marginTop: 10,
  //         columns: [
  //           {
  //             width: "auto",
  //             style: "tableNoBold",
  //             text: "NOMBRE: ",
  //             bold: true,
  //           },
  //           {
  //             marginLeft: 5,
  //             style: "tableNoBold",
  //             text: `${datos.paciente.descrip}`,
  //           },
  //         ],
  //       },
  //       {
  //         columns: [
  //           {
  //             width: "auto",
  //             style: "tableNoBold",
  //             text: "DOCUMENTO: ",
  //             bold: true,
  //           },
  //           {
  //             marginLeft: 5,
  //             style: "tableNoBold",
  //             text: `${datos.paciente.cod}`,
  //           },
  //         ],
  //       },
  //     ],
  //   };
  // }
  // function firmaAcompanante() {
  //   return {
  //     stack: [
  //       {
  //         text: "TUTOR O ACOMPAÑANTE (FIRMA / HUELLA)",

  //         alignment: "center",
  //         style: "tableNoBold",
  //         bold: true,
  //       },
  //       {
  //         text: "(EN CASO DE NO FIRMAR)",
  //         alignment: "center",
  //         style: "tableNoBold",
  //         fontSize: 6,
  //       },
  //       {
  //         marginTop: 2,
  //         alignment: "center",
  //         image: "firma_acomp",
  //         width: 130,
  //         height: 70,
  //       },
  //       {
  //         marginTop: 10,
  //         columns: [
  //           {
  //             width: "auto",
  //             style: "tableNoBold",
  //             text: "NOMBRE: ",
  //             bold: true,
  //           },
  //           {
  //             marginLeft: 5,
  //             style: "tableNoBold",
  //             text: `${datos.acomp.descrip}`,
  //           },
  //         ],
  //       },
  //       {
  //         columns: [
  //           {
  //             width: "auto",
  //             style: "tableNoBold",
  //             text: "DOCUMENTO: ",
  //             bold: true,
  //           },
  //           {
  //             marginLeft: 5,
  //             style: "tableNoBold",
  //             text: `${datos.acomp.cod}`,
  //           },
  //         ],
  //       },
  //       {
  //         columns: [
  //           {
  //             width: "auto",
  //             style: "tableNoBold",
  //             text: "PARENTESCO: ",
  //             bold: true,
  //           },
  //           {
  //             marginLeft: 5,
  //             style: "tableNoBold",
  //             text: `${evaluarParentesco(datos.paren_acomp)}`,
  //           },
  //         ],
  //       },
  //     ],
  //   };
  // }

  // function firmaProfesional() {
  //   return {
  //     stack: [
  //       {
  //         text: "FIRMA PROFESIONAL",

  //         alignment: "center",
  //         style: "tableNoBold",
  //         bold: true,
  //       },
  //       {
  //         marginTop: 8,
  //         alignment: "center",
  //         image: "firma_profesional",
  //         width: 130,
  //         height: 70,
  //       },
  //       {
  //         marginTop: 8,
  //         text: [
  //           {
  //             text: "NOMBRE: ",
  //             style: "tableNoBold",
  //             bold: true,
  //           },
  //           {
  //             text: `${datos.prof.descrip}`,
  //             style: "tableNoBold",
  //           },
  //         ],
  //       },
  //       {
  //         columns: [
  //           {
  //             width: "auto",
  //             style: "tableNoBold",
  //             text: "PROFESIONAL AREA DE:",
  //             bold: true,
  //           },
  //           {
  //             marginLeft: 5,
  //             style: "tableNoBold",
  //             text: `${datos.prof.descrip_atiende}`,
  //           },
  //         ],
  //       },
  //       {
  //         columns: [
  //           {
  //             width: "auto",
  //             style: "tableNoBold",
  //             text: "DOCUMENTO: ",
  //             bold: true,
  //           },
  //           {
  //             marginLeft: 5,
  //             style: "tableNoBold",
  //             text: `${datos.prof.cod}`,
  //           },
  //         ],
  //       },
  //     ],
  //   };
  // }

  // function firmas() {
  //   let firmasArray = [];
  //   let anchos = ["40%"];
  //   let tamanoFirmasArray = 0;

  //   if (datos.firmas.firma_acomp) {
  //     firmasArray.push(firmaAcompanante());
  //   }

  //   if (datos.firmas.firma_prof) {
  //     firmasArray.push(firmaProfesional());
  //   }

  //   tamanoFirmasArray = firmasArray.length;

  //   if (datos.firmas.firma_paci) {
  //     firmasArray.unshift(firmaPaciente(datos.firmas.huella_paci, tamanoFirmasArray));
  //   }

  //   if (firmasArray.length == 2) {
  //     firmasArray.unshift({ border: [false, false, false, false], text: "" });
  //     anchos = ["10%", "40%", "40%"];
  //   } else if (firmasArray.length == 3) anchos = ["33%", "34%", "33%"];
  //   return {
  //     marginTop: 30,
  //     table: {
  //       widths: anchos,
  //       body: [[...firmasArray]],
  //     },
  //   };
  // }

  return dd;
};
