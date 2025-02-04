import { datosFormatUTM } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionLAB013 = ({ datos }) => {
  console.log(" impresionLAB013 ", datos);
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
              fontSize: 8,
              marginTop: 5,
              table: {
                marginRigth: 1,
                widths: ["80%", "10%", "10%"],
                body: [
                  [{ text: "PREPARACIÓN (PREVIO A LA SEDACIÓN) ", bold: true, alignment: "center", colSpan: 3 }, {}, {}],
                  [
                    { text: "¿Paciente valorado por el médico anestesiólogo para este procedimiento?", bold: true, alignment: "left" },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pregunta_1.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_1.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Complejidad del procedimiento adecuado para realizar fuera de salas de cirugía (ASAI - ASAII)?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_2.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_2.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Nivel de sedación planeado y comentado al paciente o familiar?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_3.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_3.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Paciente que cumple ayuno recomendado?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_4.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_4.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    // {
                    //   text: "¿Tiene el paciente antecedente de alergias?",
                    //   bold: true,
                    //   alignment: "left",
                    // },
                    {
                      text: [
                        {
                          text: "¿Tiene el paciente antecedente de alergias?, ¿cuáles?:  ",
                          bold: true,
                          alignment: "left",
                        },
                        {
                          text: datos.espec_pregunta_5,
                        },
                      ],
                      style: "tableTitle",
                      alignment: "justify",
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
                          stack: marcaCasilla(datos.pregunta_5.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_5.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Se sospecha vía aérea difícil?/¿Se sospecha riesgo alto de broncoaspiración?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_6.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_6.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Acompañamiento de familiar del paciente y aréa de observación confirmada?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_7.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_7.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Equipo de vía aérea completo y disponible?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_8.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_8.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Desfibrilador descargando manualmente de forma adecuada?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_9.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_9.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Medicamentos de reanimación disponibles?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_10.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_10.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Identidad del paciente, procedimiento y consentimiento confirmado?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_11.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_11.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Monitoría del paciente colocada?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_12.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_12.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                ],
              },
              //   layout: {
              //     hLineWidth: function (i, node) {
              //       return [0, 1, 2, 3,4].includes(i) ? 1 : 0;
              //     },
              //     vLineWidth: function (i) {
              //       return [0, 1, 2, 3, 4, 5, 6].includes(i) ? 1 : 0;
              //     },
              //   },
              width: "100%",
            },
          ],
        },
        {
          columns: [
            {
              fontSize: 8,
              marginTop: 5,
              table: {
                marginRigth: 1,
                widths: ["80%", "10%", "10%"],
                body: [
                  [{ text: "RECUPERACIÓN EGRESO", bold: true, alignment: "center", colSpan: 3 }, {}, {}],
                  [
                    { text: "¿Se evalúa náusea / vómito? ¿Paciente presenta algún otro síntoma?", bold: true, alignment: "left" },
                    {
                      alignment: "center",
                      stack: [
                        {
                          text: "SI",
                          color: "#808080",
                          style: "tableTitle",
                        },
                        {
                          stack: marcaCasilla(datos.pregunta_13.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_13.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Se brinda acompañamiento en recuperación?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_14.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_14.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Se lograron criterios de egreso?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_15.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_15.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Se presento algún indicio de atención insegura durante el procedimiento o en el área de recuperación?¿Se reporto?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_16.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_16.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "¿Se proporsionó hoja de recomendaciones de alta?",
                      bold: true,
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
                          stack: marcaCasilla(datos.pregunta_17.trim() == "S" ? true : false),
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
                          stack: marcaCasilla(datos.pregunta_17.trim() == "N" ? true : false),
                        },
                      ],
                    },
                  ],
                ],
              },
              //   layout: {
              //     hLineWidth: function (i, node) {
              //       return [0, 1, 2, 3,4].includes(i) ? 1 : 0;
              //     },
              //     vLineWidth: function (i) {
              //       return [0, 1, 2, 3, 4, 5, 6].includes(i) ? 1 : 0;
              //     },
              //   },
              width: "100%",
            },
          ],
        },
        {
          marginTop: 5,
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  text: "OBSERVACIONES",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  border: [true, false, true, true],
                  text: datos.observac,
                  style: "tableTitle",
                  alignment: "justify",
                  lineHeight: 8,
                },
              ],
            ],
          },
        },
        {
          pageBreak: "before",
          text: "",
        },
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
                    text: "Elaborado por: Médico Enfermera",
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
                    text: "Aprobado por: Representante Legal",
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
      marginTop: 15,
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
              text: "AUXILIAR DE ENFERMERÍA",
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
