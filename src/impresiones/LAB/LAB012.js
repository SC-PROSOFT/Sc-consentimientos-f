import { datosFormatUTM } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionLAB012 = ({ datos }) => {
  console.log(" impresionLAB012 ", datos);
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
          marginTop: 15,
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  text: "ANTECENTES",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  border: [true, true, true, false],
                  text: "PATOLÓGICOS:",
                  bold: true,
                  style: "tableTitle",
                  alignment: "left",
                },
              ],
              [
                {
                  border: [true, false, true, true],
                  text: datos.antec_patolog,
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  border: [true, true, true, false],
                  text: "ALÉRGICOS:",
                  bold: true,
                  style: "tableTitle",
                  alignment: "left",
                },
              ],
              [
                {
                  border: [true, false, true, true],
                  text: datos.antec_alergicos,
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  border: [true, true, true, false],
                  text: "QUIRÚRGICOS:",
                  bold: true,
                  style: "tableTitle",
                  alignment: "left",
                },
              ],
              [
                {
                  border: [true, false, true, true],
                  text: datos.antec_quirur,
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  border: [true, true, true, false],
                  text: "FARMACOLÓGICOS:",
                  bold: true,
                  style: "tableTitle",
                  alignment: "left",
                },
              ],
              [
                {
                  border: [true, false, true, true],
                  text: datos.antec_farmaco,
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  border: [true, true, true, false],
                  text: "FAMILIARES:",
                  bold: true,
                  style: "tableTitle",
                  alignment: "left",
                },
              ],
              [
                {
                  border: [true, false, true, true],
                  text: datos.antec_familiar,
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            ],
          },
        },
        // EXAMEN FISICO
        {
          marginTop: 15,
          alignment: "center",
          table: {
            widths: ["25%", "25%", "25%", "25%"],
            body: [
              [{ text: "EXAMEN FÍSICO ", bold: true, alignment: "center", colSpan: 4 }, { text: "" }, { text: "" }, { text: "" }],
              [
                { text: [{ text: "TA: " }, { text: datos.signo_ta_sistol }, { text: " / " }, { text: datos.signo_ta_diastol }, { text: " mm Hg" }] },
                { text: [{ text: "FC: " }, { text: datos.signo_frec_card }, { text: " rpm" }] },
                { text: [{ text: "FR: " }, { text: datos.signo_frec_resp }, { text: " lpm" }] },
                { text: [{ text: "Sa02: " }, { text: datos.signo_sa_o2_porc }, { text: " %" }] },
              ],
              [
                { text: [{ text: "Fi02" }, { text: datos.signo_fi_o2_porc }, , { text: " %" }] },
                { text: [{ text: "PESO: " }, { text: datos.peso_kg }, { text: " Kg" }] },
                { text: [{ text: "TALLA: " }, { text: datos.talla_cm }, { text: " cm" }], colSpan: 2 },
                {},
              ],
            ],
          },
        },
        {
          marginTop: 8,
          alignment: "center",
          table: {
            widths: ["20%", "20%", "20%", "20%", "20%"],
            body: [
              [{ text: "CLASIFICACIÓN ASA ", alignment: "left", colSpan: 5 }, {}, {}, {}, {}],
              [
                {
                  stack: [
                    {
                      text: "I",
                      style: "tableTitle",
                    },
                    {
                      stack: marcaCasilla(datos.clasif_asa.trim() == "1" ? true : false),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "II",
                      style: "tableTitle",
                    },
                    {
                      stack: marcaCasilla(datos.clasif_asa.trim() == "2" ? true : false),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "III",
                      style: "tableTitle",
                    },
                    {
                      stack: marcaCasilla(datos.clasif_asa.trim() == "3" ? true : false),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "IV",
                      style: "tableTitle",
                    },
                    {
                      stack: marcaCasilla(datos.clasif_asa.trim() == "4" ? true : false),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "V",
                      style: "tableTitle",
                    },
                    {
                      stack: marcaCasilla(datos.clasif_asa.trim() == "5" ? true : false),
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 15,
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  text: "OBSERVACIÓN EXAMEN FÍSICO",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  border: [true, false, true, true],
                  text: datos.observ_exam_fisic,
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            ],
          },
        },
        {
          marginTop: 15,
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  text: "PLAN DE MANEJO",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  border: [true, false, true, true],
                  text: datos.plan_manejo,
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            ],
          },
        },
        {
          marginTop: 15,
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  text: "EDUCACIÓN",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  border: [true, false, true, true],
                  text: datos.educacion,
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            ],
          },
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
              text: "MÉDICO ANESTESIOLOGO",
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
