import { datosFormatUTM } from "@/formatos/utils";

export const impresionLAB021 = ({ datos }) => {
  console.log(" impresionLAB021 ", datos);
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
  const tablaNotasAtenc = () => {
    return datos.tabla_notas_aten
      .filter((item) => item.indice_i != " " && item.indice_i != null && item.indice_i != "")
      .map((item) => [
        {
          text: item.indice_i,
        },
        {
          text: item.fecha,
        },
        {
          text: item.hora,
        },
        {
          text: item.notas_atencion,
        },
      ]);
  };

  var dd = {
    stack: [contenidoSedacion()],
  };

  function contenidoSedacion() {
    return {
      stack: [
        datosFormatUTM({ datos }),

        {
          pageBreak: "before",
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
        {
          columns: [
            {
              fontSize: 8,
              marginTop: 5,
              //   alignment: "center",
              table: {
                marginRigth: 1,
                widths: ["6%", "8%", "6%", "80%"],
                body: [
                  [
                    { text: "INDICE ", bold: true, alignment: "center" },
                    { text: "FECHA ", bold: true, alignment: "center" },
                    { text: "HORA", bold: true, alignment: "center" },
                    { text: "NOTAS DE ATENCIÓN", bold: true, alignment: "center" },
                  ],
                  ...tablaNotasAtenc(),
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
      marginTop: 10,
      table: {
        heights: ["auto", "auto", "auto", "auto", "auto", "auto"],
        widths: [171, 172, 171],
        body: [
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
