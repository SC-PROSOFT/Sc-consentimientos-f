import { datosFormatUTM } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionLAB014 = ({ datos }) => {
  console.log(" impresionLAB014 ", datos);
  const marcaCasilla = (condicion) => {
    return [
      {
        canvas: condicion
          ? [
              { type: "line", x1: 0, x2: 30, y1: -11, y2: 0, color: "#808080" },
              { type: "line", x1: 30, x2: 0, y1: -11, y2: 0, color: "#808080" },
            ]
          : [],
      },
    ];
  };

  var dd = {
    stack: [contenidoSedacion()],
  };

  function contenidoSedacion() {
    return {
      stack: [
        datosFormatUTM({ datos }),
        {
          columns: [
            {
              marginTop: 5,
              table: {
                widths: ["30%", "15%", "15%", "5%", "5%", "15%", "15%"],
                body: [
                  [{ style: "tableTitle", bold: true, text: "ANTECEDENTES GINECOLÓGICOS", alignment: "center", colSpan: 7 }, {}, {}, {}, {}, {}, {}],
                  [
                    { style: "tableTitle", bold: true, text: "Fecha ultima mestruación", alignment: "left" },
                    { style: "tableTitle", text: datos.fecha_ult_mestr, alignment: "center" },
                    { style: "tableTitle", bold: true, text: "Histerectomia", alignment: "left" },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.histerect.trim() == "S" ? true : false),
                        },
                      ],
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "NO",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.histerect.trim() == "N" ? true : false),
                        },
                      ],
                    },
                    { style: "tableTitle", bold: true, text: "Fecha realización", alignment: "left" },
                    { style: "tableTitle", text: datos.fecha_histerect, alignment: "center" },
                  ],
                  [
                    { style: "tableTitle", bold: true, text: "Fecha menarquia (1° mestruación)", alignment: "left" },
                    { style: "tableTitle", text: datos.fecha_menarq, alignment: "center" },
                    {
                      colSpan: 5,
                      text: [
                        { style: "tableTitle", bold: true, text: "Gestaciones:  " },
                        { style: "tableTitle", decoration: "underline", text: datos.cant_gestaci },
                        { style: "tableTitle", bold: true, text: " Partos: " },
                        { style: "tableTitle", decoration: "underline", text: datos.cant_partos },
                        { style: "tableTitle", bold: true, text: "  Cesáreas:  " },
                        { style: "tableTitle", decoration: "underline", text: datos.cant_cesareas },
                        { style: "tableTitle", bold: true, text: "  Abortos:  " },
                        { style: "tableTitle", decoration: "underline", text: datos.cant_abortos },
                        { style: "tableTitle", bold: true, text: "  Vivos:  " },
                        { style: "tableTitle", decoration: "underline", text: datos.cant_vivos },
                        { style: "tableTitle", bold: true, text: "  Muertos:  " },
                        { style: "tableTitle", decoration: "underline", text: datos.cant_muertos },
                      ],
                    },

                    {},
                    {},
                    {},
                    {},
                  ],
                ],
              },

              width: "100%",
            },
          ],
        },
        {
          columns: [
            {
              marginTop: 5,
              table: {
                marginRigth: 1,
                widths: ["45%", "5%", "5%", "45%"],
                body: [
                  [{ style: "tableTitle", bold: true, text: "ANTECEDENTES DE CÁNCER", alignment: "center", colSpan: 4 }, {}, {}, {}],
                  [
                    { style: "tableTitle", text: "¿Sufre o ha sufrido de cáncer de mama o útero? Especifique", alignment: "left" },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_1_ant_canc.trim() == "S" ? true : false),
                        },
                      ],
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "NO",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_1_ant_canc.trim() == "N" ? true : false),
                        },
                      ],
                    },
                    { style: "tableTitle", text: datos.espec_pre_1_ant_canc, alignment: "left" },
                  ],
                  [
                    { style: "tableTitle", text: "¿Sufre o ha sufrido de algún otro tipo de cáncer? Especifique", alignment: "left" },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_2_ant_canc.trim() == "S" ? true : false),
                        },
                      ],
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "NO",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_2_ant_canc.trim() == "N" ? true : false),
                        },
                      ],
                    },
                    { style: "tableTitle", text: datos.espec_pre_2_ant_canc, alignment: "left" },
                  ],
                  [
                    {
                      style: "tableTitle",
                      text: "¿Algún miembro de su familia materna ha sufrido cáncer mama o útero? Especifique",
                      alignment: "left",
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_3_ant_canc.trim() == "S" ? true : false),
                        },
                      ],
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "NO",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_3_ant_canc.trim() == "N" ? true : false),
                        },
                      ],
                    },
                    { style: "tableTitle", text: datos.espec_pre_3_ant_canc, alignment: "left" },
                  ],
                  [
                    {
                      style: "tableTitle",
                      text: "¿Algún miembro de su familia ha sufrido algún otro tipo cáncer? Especifique",
                      alignment: "left",
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_4_ant_canc.trim() == "S" ? true : false),
                        },
                      ],
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "NO",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_4_ant_canc.trim() == "N" ? true : false),
                        },
                      ],
                    },
                    { style: "tableTitle", text: datos.espec_pre_4_ant_canc, alignment: "left" },
                  ],
                  [
                    {
                      style: "tableTitle",
                      text: "¿Sufre de alguna enfermedad? Especifique",
                      alignment: "left",
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_5_ant_canc.trim() == "S" ? true : false),
                        },
                      ],
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "NO",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_5_ant_canc.trim() == "N" ? true : false),
                        },
                      ],
                    },
                    { style: "tableTitle", text: datos.espec_pre_5_ant_canc, alignment: "left" },
                  ],
                  [
                    {
                      style: "tableTitle",
                      text: "¿Actualmente toma algún medicamento? Especifique",
                      alignment: "left",
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_6_ant_canc.trim() == "S" ? true : false),
                        },
                      ],
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "NO",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_6_ant_canc.trim() == "N" ? true : false),
                        },
                      ],
                    },
                    { style: "tableTitle", text: datos.espec_pre_6_ant_canc, alignment: "left" },
                  ],
                ],
              },
            },
          ],
        },

        {
          columns: [
            {
              marginTop: 5,
              table: {
                marginRigth: 1,
                widths: ["45%", "5%", "5%", "45%"],
                body: [
                  [{ style: "tableTitle", bold: true, text: "AUTO EXAMEN DE MAMA", alignment: "center", colSpan: 4 }, {}, {}, {}],
                  [
                    { style: "tableTitle", text: "¿Le han realizado alguna cirugía en los senos? Especifique", alignment: "left" },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_1_aut_exam.trim() == "S" ? true : false),
                        },
                      ],
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "NO",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_1_aut_exam.trim() == "N" ? true : false),
                        },
                      ],
                    },
                    { style: "tableTitle", text: datos.espec_pre_1_aut_exam, alignment: "left" },
                  ],
                  [
                    { style: "tableTitle", text: "¿Se ha palpado masas en los senos? Especifique", alignment: "left" },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_2_aut_exam.trim() == "S" ? true : false),
                        },
                      ],
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "NO",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_2_aut_exam.trim() == "N" ? true : false),
                        },
                      ],
                    },
                    { style: "tableTitle", text: datos.espec_pre_2_aut_exam, alignment: "left" },
                  ],
                  [
                    { style: "tableTitle", text: "¿Ha tenido salida de secreción por el pezón? Especifique", alignment: "left" },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_3_aut_exam.trim() == "S" ? true : false),
                        },
                      ],
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "NO",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_3_aut_exam.trim() == "N" ? true : false),
                        },
                      ],
                    },
                    { style: "tableTitle", text: datos.espec_pre_3_aut_exam, alignment: "left" },
                  ],
                  [
                    { style: "tableTitle", text: "¿Ha notado cambios en la piel de los senos? Especifique", alignment: "left" },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_4_aut_exam.trim() == "S" ? true : false),
                        },
                      ],
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "NO",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_4_aut_exam.trim() == "N" ? true : false),
                        },
                      ],
                    },
                    { style: "tableTitle", text: datos.espec_pre_4_aut_exam, alignment: "left" },
                  ],
                  [
                    { style: "tableTitle", text: "¿Ha identificado algo más con respecto a sus senos? Especifique", alignment: "left" },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_5_aut_exam.trim() == "S" ? true : false),
                        },
                      ],
                    },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "NO",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pre_5_aut_exam.trim() == "N" ? true : false),
                        },
                      ],
                    },
                    { style: "tableTitle", text: datos.espec_pre_5_aut_exam, alignment: "left" },
                  ],
                ],
              },
            },
          ],
        },
        {
          pageBreak: "before", // Salto de página antes de este contenido
          marginTop: 5,
          alignment: "center",
          table: {
            widths: ["50%", "50%"],
            body: [
              [{ text: "REGISTRO DE INSPECCIÓN", bold: true, style: "tableTitle", alignment: "center", colSpan: 2 }, {}],
              [
                {
                  marginTop: 5,
                  alignment: "center",
                  image: "esquema_mamografia",
                  width: 240,
                  height: 100,
                },
                {
                  text: [
                    {
                      text: "OBSERVACIONES:  ",
                      bold: true,
                      style: "tableTitle",
                      alignment: "left",
                    },
                    {
                      text: datos.obser_regis_inspec,
                      style: "tableTitle",
                      alignment: "left",
                    },
                  ],
                },
              ],
            ],
          },
        },
        // {
        //   marginTop: 25,
        //   alignment: "center",
        //   table: {
        //     widths: ["50%", "50%"],
        //     body: [
        //       [{ text: "REGISTRO DE INSPECCIÓN", bold: true, style: "tableTitle", alignment: "center", colSpan: 2 }, {}],
        //       [
        //         {
        //           marginTop: 5,
        //           alignment: "center",
        //           image: "esquema_mamografia",
        //           width: 240,
        //           height: 100,
        //         },
        //         {
        //           text: [
        //             {
        //               text: "OBSERVACIONES:  ",
        //               bold: true,
        //               style: "tableTitle",
        //               alignment: "left",
        //             },
        //             {
        //               text: datos.obser_regis_inspec,
        //               style: "tableTitle",
        //               alignment: "left",
        //             },
        //           ],
        //         },
        //       ],
        //     ],
        //   },
        // },

        // {
        //   marginTop: 25,
        //   table: {
        //     widths: ["100%"],
        //     body: [
        //       [
        //         {
        //           text: "OBSERVACIONES",
        //           bold: true,
        //           style: "tableTitle",
        //           alignment: "center",
        //         },
        //       ],
        //       [
        //         {
        //           border: [true, false, true, true],
        //           text: datos.obser_regis_inspec,
        //           style: "tableTitle",
        //           alignment: "justify",
        //         },
        //       ],
        //     ],
        //   },
        // },
        textoAutoriza(datos.autorizo),
        {
          marginTop: 5,
          alignment: "center",
          table: {
            widths: ["33.33%", "33.33%", "33.33%"],
            body: [
              [
                {
                  style: "tableTitle",
                  text: {
                    bold: true,
                    text: "Elaborado por: Médico Especialista",
                  },
                },
                {
                  style: "tableTitle",
                  text: {
                    bold: true,
                    text: "Revisado por: Asesor de Calidad",
                  },
                },
                {
                  style: "tableTitle",
                  text: {
                    bold: true,
                    text: "Aprovado por: Representante Legal",
                  },
                },
              ],
            ],
          },
        },
        textoDisentimiento(datos.disentimiento, datos.acompa_disenti),
      ],
    };
  }

  function textoAutoriza(autorizo) {
    const textoAutoriza = {
      marginTop: 10,
      table: {
        heights: ["auto", "auto", "auto", "auto", "auto", "auto"],
        widths: [171, 172, 171],
        body: [
          //   [
          //     {
          //       colSpan: 3,
          //       text: "DECLARACIÓN DEL CONSENTIMIENTO INFORMADO",
          //       bold: true,
          //       style: "tableTitle",
          //       alignment: "center",
          //     },
          //     {},
          //     {},
          //   ],
          //   [
          //     {
          //       marginBottom: 5,
          //       colSpan: 3,
          //       text: `Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la realización del procedimiento en mención, proceda a firmar dejando su autorización por escrito.\n\n Yo ${datos.paciente.descrip}, identificada (o) con el documento de identidad número ${datos.paciente.cod}, después de haber sido informado (a) sobre el procedimiento de Sedación, los riesgos y beneficios, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo la toma del procedimiento teniendo en cuenta que esta autorización puede ser revocable en cualquier momento.`,
          //       style: "tableTitle",
          //       alignment: "justify",
          //     },
          //     {},
          //     {},
          //   ],
          [
            {
              text: `${datos.firmas.firma_acomp ? "ACOMPAÑANTE" : "PACIENTE"}`,
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "TESTIGO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "TECNOLOGO EN RADIOLOGÍA",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
          ],
          [
            {
              marginTop: 5,
              alignment: "center",
              image: `${datos.firmas.firma_acomp ? "firma_acomp" : "firma_paci"}`,
              width: 140,
              height: 70,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_testigo",
              width: 140,
              height: 70,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_profesional",
              width: 140,
              height: 70,
            },
          ],
          [
            {
              text: `NOMBRE: ${datos.firmas.firma_acomp ? datos.acomp.descrip : datos.paciente.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.testigo.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.prof.descrip}`,
              style: "tableTitle",
            },
          ],
          [
            {
              text: `DOC. IDENT: ${datos.firmas.firma_acomp ? datos.acomp.cod : datos.paciente.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.testigo.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.prof.cod}`,
              style: "tableTitle",
            },
          ],
        ],
      },
    };

    const textoRevoca = {
      marginTop: 15,
      table: {
        heights: ["auto", "auto", "auto", "auto", "auto", "auto"],
        widths: [171, 172, 171],
        body: [
          [
            {
              colSpan: 3,
              text: "REVOCACIÓN DEL CONSENTIMIENTO INFORMADO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {},
            {},
          ],
          [
            {
              marginBottom: 5,
              colSpan: 3,
              text: `Yo ${datos.paciente.descrip}, identificada (o) con el documento de identidad número ${datos.paciente.cod}, después de haber sido informado (a) sobre el procedimiento de Sedación, sus riesgos y beneficios y adicionalmente, los riesgos de no realizármelo, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con la toma del procedimiento en mención.`,
              style: "tableTitle",
              alignment: "justify",
            },
            {},
            {},
          ],
          [
            {
              text: `${datos.firmas.firma_acomp ? "ACOMPAÑANTE" : "PACIENTE"}`,
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "TESTIGO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "MÉDICO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
          ],
          [
            {
              marginTop: 5,
              alignment: "center",
              image: `${datos.firmas.firma_acomp ? "firma_acomp" : "firma_paci"}`,
              width: 140,
              height: 50,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_acomp",
              width: 140,
              height: 50,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_profesional",
              width: 140,
              height: 50,
            },
          ],
          [
            {
              text: `NOMBRE: ${datos.firmas.firma_acomp ? datos.acomp.descrip : datos.paciente.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.acomp.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.prof.descrip}`,
              style: "tableTitle",
            },
          ],
          [
            {
              text: `DOC. IDENT: ${datos.firmas.firma_acomp ? datos.acomp.cod : datos.paciente.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.acomp.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.prof.cod}`,
              style: "tableTitle",
            },
          ],
        ],
      },
    };
    if (autorizo !== false && autorizo !== true) {
      return {
        stack: [textoAutoriza, textoRevoca],
      };
    }
    if (autorizo) return textoAutoriza;
    else return textoRevoca;
  }

  function textoDisentimiento(disentimiento, acompa_disenti) {
    const textAcompa = `Yo ${datos.acomp.descrip}, identificada (o) con el documento de identidad número ${datos.acomp.cod}, en calidad de acudiente de ${datos.paciente.descrip} , identificada (o) con el documento de identidad número ${datos.paciente.cod}, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;
    const textPacient = `Yo ${datos.paciente.descrip}, identificada (o) con el documento de identidad número ${datos.paciente.cod}, en calidad de paciente, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;

    const textoDisentimiento = {
      marginTop: 15,
      table: {
        widths: ["auto", 180],
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
