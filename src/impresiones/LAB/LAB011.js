import { datosFormatUTM } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionLAB011 = ({ datos }) => {
  console.log(" impresionLAB011 ", datos);

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
          columns: [
            {
              marginTop: 5,
              table: {
                marginRigth: 1,
                widths: ["100%"],
                body: [
                  [{ style: "tableTitle", text: "ENCUESTA DE SEGURIDAD ", bold: true, alignment: "center" }],
                  [{ style: "tableTitle", text: "MEDIO DE CONTRASTE PREVIO ", bold: true }],
                  [
                    {
                      text: [
                        { style: "tableTitle", text: "ÚLTIMO EXAMEN REALIZADO: " },
                        { style: "bodyNoBold", text: datos.ult_examen },
                        { style: "tableTitle", text: " FECHA: " },
                        { style: "bodyNoBold", text: datos.fecha_ult_exam },
                      ],
                    },
                  ],
                  [
                    {
                      text: [
                        { style: "tableTitle", text: "MEDIO DE CONTRASTE: " },
                        { style: "tableTitle", text: " SI: " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.medio_contras == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " NO: " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.medio_contras == "N" ? " X " : "    " },
                        { style: "tableTitle", text: " NOMBRE: " },
                        { style: "bodyNoBold", text: datos.nomb_med_contr },
                        { style: "tableTitle", text: " DOSIS: " },
                        { style: "bodyNoBold", text: datos.dosis_med_contr },
                      ],
                    },
                  ],
                  [
                    {
                      text: [
                        { style: "tableTitle", text: "COMPLICACIONES: " },
                        { style: "tableTitle", text: " RASH CURANEO" },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.rash_curaneo == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " DIFICULTAD RESPIRATORIA " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.dificult_res == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " CRISIS ASMATICA " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.crisis_asma == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " EMESIS " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.emesis == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " SHOCK ANAFILACTICO: " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.shock_anafilac == "S" ? " X " : "    " },
                      ],
                    },
                  ],
                  [
                    {
                      text: [
                        { style: "tableTitle", text: " OTRO: " },
                        { style: "bodyNoBold", text: datos.otro_complic },
                      ],
                    },
                  ],
                  [
                    {
                      text: [
                        { style: "tableTitle", bold: true, text: "POSIBILIDAD DE EMBARAZO: " },
                        { style: "tableTitle", text: " NO APLICA " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.posib_embarazo == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " MEF " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.posib_embarazo == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " FECHA DE ULTIMA MENSTRUACIÓN " },
                        { style: "bodyNoBold", text: datos.fecha_ult_mestr },
                      ],
                    },
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
              fontSize: 8,
              table: {
                marginRigth: 1,
                widths: ["100%"],
                body: [
                  [{ style: "tableTitle", alignment: "center", bold: true, text: "ANTECEDENTES " }],
                  [
                    {
                      text: [
                        { style: "tableTitle", bold: true, text: "PATOLÓGICOS: " },
                        { style: "tableTitle", text: " ASMA ACTUAL EN TRATAMIENTO " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.asma_tratam == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " INSUFICIENCIA RENAL" },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.insuf_renal == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " DIABETES MELLITUS" },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.diabet_mellitus == "S" ? " X " : "    " },
                      ],
                    },
                  ],
                  [
                    {
                      text: [
                        { style: "tableTitle", text: "HIPERTENSIÓN ARTERIAL: " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.hipert_arterial == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " ENFERMEDADES DEL CORAZÓN " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.enfer_corazon == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " ENFERMEDADES DEL HIGADO " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.enfer_higado == "S" ? " X " : "    " },
                      ],
                    },
                  ],
                  [
                    {
                      text: [
                        { style: "tableTitle", text: "OTROS: " },
                        { style: "bodyNoBold", text: datos.otros_antec },
                      ],
                    },
                  ],
                  [
                    {
                      text: [
                        { style: "tableTitle", bold: true, text: "ALÉRGICOS: " },
                        { style: "tableTitle", text: " MEDICAMENTOS " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.alerg_medicamet == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " ALIMENTOS " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.alerg_aliment == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " OTRO: " },
                        { style: "bodyNoBold", text: datos.otros_alerg },
                      ],
                    },
                  ],
                  [
                    {
                      text: [
                        { style: "tableTitle", bold: true, text: "REACCIÓN ALERGICA: " },
                        { style: "tableTitle", text: " RASH CURANEO " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.alerg_rash_curan == "S" ? " X " : "    " },
                        { style: "tableTitle", text: " DIFICULTAD RESPIRATORIA " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.alerg_dific_res == "S" ? " X " : "    " },
                        { text: " SHOCK ANAFILACTICO " },
                        { style: "tableTitle", bold: true, decoration: "underline", text: datos.alerg_shock_anafi == "S" ? " X " : "    " },
                      ],
                    },
                  ],
                  [
                    {
                      text: [{ style: "tableTitle", text: "OTROS: " }, { text: datos.otros_reacc_alerg }],
                    },
                  ],
                  [
                    {
                      text: [
                        { style: "tableTitle", bold: true, text: "QUIRÚRGICOS: " },
                        { style: "bodyNoBold", text: datos.antec_quirur },
                      ],
                      lineHeight: 2,
                    },
                  ],
                  [
                    {
                      text: [
                        { style: "tableTitle", bold: true, text: "FAMILIARES: " },
                        { style: "bodyNoBold", text: datos.antec_familiar },
                      ],
                      lineHeight: 2,
                    },
                  ],
                  [
                    {
                      text: [
                        { style: "tableTitle", bold: true, text: "FARMACOLÓGICOS: " },
                        { style: "bodyNoBold", text: datos.antec_farmaco },
                      ],
                      lineHeight: 2,
                    },
                  ],
                ],
              },
              width: "100%",
            },
          ],
        },
        {
          pageBreak: "before",
          columns: [
            {
              marginTop: 5,

              table: {
                marginRigth: 1,
                widths: ["20%", "20%", "60%"],
                body: [
                  [{ style: "tableTitle", bold: true, text: "DATOS CLÍNICOS RELEVANTES ", alignment: "center", colSpan: 3 }, {}, {}],
                  [
                    {
                      text: [
                        { style: "tableTitle", text: "PESO: " },
                        { style: "bodyNoBold", text: datos.peso_kg },
                        { style: "tableTitle", text: " kg " },
                        { style: "tableTitle", text: " TALLA: " },
                        { style: "bodyNoBold", text: datos.talla_cm },
                        { style: "tableTitle", text: " cm " },
                      ],
                    },
                    {
                      text: [
                        { style: "tableTitle", text: "CREATININA: " },
                        { style: "bodyNoBold", text: datos.creatinina },
                        { style: "tableTitle", text: " mg/dl" },
                      ],
                    },
                    {
                      text: [
                        { style: "tableTitle", text: "OTRO: " },
                        { style: "bodyNoBold", text: datos.otro_dtos_clinic },
                      ],
                    },
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
                widths: ["16%", "16%", "16%", "16%", "16%", "20%"],
                body: [
                  [{ style: "tableTitle", bold: true, text: "SIGNOS VITALES ", alignment: "center", colSpan: 6 }, {}, {}, {}, {}, {}],
                  [
                    {
                      text: [
                        { style: "tableTitle", text: "TA: " },
                        { style: "bodyNoBold", text: datos.signo_ta_sistol },
                        { style: "tableTitle", text: " / " },
                        { style: "bodyNoBold", text: datos.signo_ta_diastol },
                        { style: "tableTitle", text: " mm Hg " },
                      ],
                    },
                    {
                      text: [
                        { style: "tableTitle", text: "FC: " },
                        { style: "bodyNoBold", text: datos.signo_frec_card },
                        { style: "tableTitle", text: " Ipm" },
                      ],
                    },
                    {
                      text: [
                        { style: "tableTitle", text: "FR: " },
                        { style: "bodyNoBold", text: datos.signo_frec_resp },
                        { style: "tableTitle", text: " rpm " },
                      ],
                    },
                    {
                      text: [
                        { style: "tableTitle", text: " SaO2: " },
                        { style: "bodyNoBold", text: datos.signo_sa_o2_porc },
                        { style: "tableTitle", text: " %" },
                      ],
                    },
                    {
                      text: [
                        { style: "tableTitle", text: "FiO2: " },
                        { style: "bodyNoBold", text: datos.signo_fi_o2_porc },
                        { style: "tableTitle", text: " %" },
                      ],
                    },
                    {
                      text: [
                        { style: "tableTitle", text: "Glasgow: " },
                        { style: "bodyNoBold", text: datos.signo_glasgow },
                        { style: "tableTitle", text: " /15" },
                      ],
                    },
                  ],
                ],
              },
              layout: {
                hLineWidth: function (i, node) {
                  return [0, 1, 2, 3].includes(i) ? 1 : 0;
                },
                vLineWidth: function (i) {
                  return [0, 1, 2, 3, 4, 5, 6].includes(i) ? 1 : 0;
                },
              },
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
                  text: "COMPLICACIONES O REACCIONES ADVESAS",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  border: [true, false, true, true],
                  text: datos.compl_reac_adver,
                  style: "tableTitle",
                  alignment: "justify",
                  lineHeight: 3,
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
      marginTop: 5,
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
              text: "AUXILIAR DE ENFERMERÍA",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "TECNÓLOGO DE RADIOLOGÍA",
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
      marginTop: 5,
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
      marginTop: 5,
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
