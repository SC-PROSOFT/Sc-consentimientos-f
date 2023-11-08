var dd = {
  pageSize: "LETTER",
  pageMargins: [35, 105, 35, 30],
  header: function (currentPage, pageCount) {
    return header(currentPage, pageCount);
  },
  content: [
    {
      stack: [contenidoConsenGeneral(), firmas()],
    },
  ],

  styles: {
    headerBold: {
      fontSize: 12,
      bold: true,
    },
    headerEnd: {
      fontSize: 8,
    },
    bodyNoBold: {
      fontSize: 11,
    },
    tableBold: {
      fontSize: 10,
      bold: true,
    },
    tableNoBold: {
      fontSize: 9,
    },
  },
};

function header(currentPage, pageCount) {
  return {
    margin: [35, 20, 35, 0], //Margenes deben ir en relacion a la pageMargin
    table: {
      widths: ["20%", "45%", "35%"],
      body: [
        [
          {
            image: "sampleImage.jpg",
            width: 90,
            height: 70,
            alignment: "center",
          },
          {
            text: "\n\nCONSENTIMIENTO INFORMADO GENERAL\n\n",
            style: "headerBold",
            alignment: "center",
          },
          {
            stack: [
              {
                text: [
                  {
                    text: `Código: `,
                    bold: true,
                  },
                  {
                    text: "M2-S5-F-17",
                  },
                ],
                style: "headerEnd",
              },
              {
                text: [
                  {
                    text: `Versión: `,
                    bold: true,
                  },
                  {
                    text: "01",
                  },
                ],
                style: "headerEnd",
              },
              {
                text: [
                  {
                    text: `Aprobado el: `,
                    bold: true,
                  },
                  {
                    text: "04/10/2023",
                  },
                ],
                style: "headerEnd",
              },
              {
                text: [
                  {
                    text: `Revisado por `,
                    bold: true,
                  },
                  {
                    text: "04/10/2023",
                  },
                ],
                style: "headerEnd",
              },
              {
                text: [
                  {
                    text: `Aprobado por `,
                    bold: true,
                  },
                  {
                    text: "04/10/2023",
                  },
                ],
                style: "headerEnd",
              },
              {
                text: [
                  {
                    text: `Fecha de actualización: `,
                    bold: true,
                  },
                  {
                    text: "04/10/2023",
                  },
                ],
                style: "headerEnd",
              },
              {
                text: "\nPágina " + currentPage.toString() + " de " + pageCount.toString(),
                style: "headerEnd",
              },
            ],
          },
        ],
      ],
    },
  };
}

function contenidoConsenGeneral() {
  return {
    stack: [
      {
        text: `Historia clínica número:`,
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        columns: [
          {
            width: "auto",
            text: `Ciudad: VILLAVICENCIO`,
            alignment: "justify",
            style: "bodyNoBold",
          },
          {
            marginLeft: 50,
            width: "auto",
            text: `Fecha: 02/11/2023`,
            alignment: "justify",
            style: "bodyNoBold",
          },
        ],
      },
      {
        marginTop: 5,
        text: `Yo, Pepito Perez Pepito Perez, identificado (a) con cédula número 1111111111 expedida en VILLAVICENCIO actuando en nombre propio o como acudiente de Pepito Perez Pepito Perez.`,
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 8,
        text: `Comprendo que durante el procedimiento pueden aparecer circunstancias imprevisibles o inesperadas, que pueden requerir una extensión de otro procedimiento; acepto que las ciencias de la salud no son una ciencia exacta, que se garantizan resultados en la atención, y que aunque son procedimientos seguros pueden presentarse complicaciones como:`,
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginLeft: 20,
        marginTop: 5,
        marginBottom: 5,
        text: `ACA IRIAN LAS COMPLICACIONES`,
        style: "bodyNoBold",
      },
      {
        marginTop: 3,
        text: "Me han explicado también que de negarme a realizarme los exámenes diagnósticos, procedimientos y/o tratamientos ordenados, estoy asumiendo la responsabilidad por sus consecuencias, con lo que exonero de ellas el quipo asistencial tratante y la institución, sin embargo ello no significa que pierda mis derechos para una atención posterior.",
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 10,
        text: "Se me ha informado que en la ESE salud Yopal, cuenta con personal idóneo, competente y capacitado para la determinación de conductas terapéuticas que contribuyan a mejorar mi calidad de vida y salud. Doy constancia de que se me ha explicado en lenguaje sencillo claro, y entendible para mí, los aspectos relacionados con mi condición actual, los riesgos y beneficios de los procedimientos; se me ha permitido hacer todas las preguntas necesarias, y han sido resueltas satisfactoriamente.",
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 10,
        text: "Por lo tanto, en forma consciente y voluntaria, sin haber sido objeto de coacción, persuasión, ni manipulación:",
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 10,
        layout: "noBorders",
        table: {
          widths: ["2%", "98%"],
          body: [
            [
              {
                stack: cuadro_canvas("S"),
              },
              {
                text: [
                  {
                    text: "Autorizo",
                    bold: true,
                    decoration: "underline",
                  },
                  {
                    text: " al personal asistencial de la ESE Salud Yopal, para la realización de los procedimientos de salud: {TOMA DE CITOLOGIA CERVICOVAGINAL}, cuyo objetivo es: {DETECCION TEMPRANA DE CANCER DE CERVIX}, ante el diagnostico {DIAG222}",
                  },
                ],
                alignment: "justify",
                style: "bodyNoBold",
              },
            ],
            [
              {},
              {},
            ],
          ],
        },
      },
      {
        layout: "noBorders",
        table: {
          widths: ["2%", "98%"],
          body: [
            [
              {
                stack: cuadro_canvas(""),
              },
              {
                text: [
                  {
                    text: "Expreso mi voluntad de ",
                  },
                  {
                    text: "revocar",
                    bold: true,
                    decoration: "underline",
                  },
                  {
                    text: " el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento de: {BLABLABLA} \npor los siguientes motivos: MOTIVOS",
                  },
                ],
                alignment: "justify",
                style: "bodyNoBold",
              },
            ],
            [
              {
                marginTop: -2,
                colSpan: 2,
                text: "",
                alignment: "justify",
                style: "bodyNoBold",
              },
              {},
            ],
          ],
        },
      },
    ],
  };
}

function cuadro_canvas(condicion) {
  return [
    { canvas: [{ type: "rect", x: 0, y: 0, h: 11, w: 12 }] },
    {
      canvas: condicion
        ? [
            { type: "line", x1: 0, x2: 12, y1: -11, y2: 0 },
            { type: "line", x1: 12, x2: 0, y1: -11, y2: 0 },
          ]
        : [],
    },
  ];
}

function firmas(paciente_firma) {
  paciente_firma = "N";
  let firmasArray = [];
  let motivosArray = [];
  let margin = 0;
  let anchos = [];

  if (paciente_firma !== "N") {
    firmasArray = [firmaPaciente(), firmaProfesional()];
    margin = 80;
    anchos = ["40%", "40%"];
  } else {
    firmasArray = [firmaAcompanante(), firmaProfesional()];
    motivosArray = [motivosNoFirma()];
    margin = 80;
    anchos = ["40%", "40%", "33%"];
  }

  return {
    marginTop: 8,
    stack: [
      {
        marginLeft: margin,
        layout: "noBorders",
        table: {
          widths: anchos,
          body: [[...firmasArray]],
        },
      },
      ...motivosArray,
    ],
  };
}

function firmaPaciente() {
  return {
    stack: [
      {
        text: "PACIENTE",
        alignment: "center",
        style: "tableBold",
      },
      {
        marginBottom: 2,
        text: [
          {
            text: "FIRMA / HUELLA ",
            alignment: "center",
            style: "tableBold",
          },
          {
            text: "(EN CASO DE NO FIRMAR)",
            alignment: "center",
            style: "tableNoBold",
            fontSize: 7,
          },
        ],
      },
      {
        alignment: "center",
        image: "sampleImage.jpg",
        width: 150,
        height: 80,
      },
      {
        marginTop: 2,
        text: [
          {
            text: "NOMBRE: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "David Santiago Lozada Quintero",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "DOCUMENTO: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "1111111111",
            style: "tableNoBold",
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
        style: "tableBold",
        marginBottom: 14,
      },
      {
        alignment: "center",
        image: "sampleImage.jpg",
        width: 150,
        height: 80,
      },
      {
        marginTop: 10,
        text: [
          {
            text: "NOMBRE: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "David Santiago Lozada Quintero",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "PROFESIONAL AREA DE: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "EXAMENES DOC.MANOTAS",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "R.P N°: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "1111111111",
            style: "tableNoBold",
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
        text: "TUTOR/ACOMPAÑANTE/REPR.LEGAL",
        alignment: "center",
        style: "tableBold",
      },
      {
        marginBottom: 2,
        text: [
          {
            text: "FIRMA / HUELLA ",
            alignment: "center",
            style: "tableBold",
          },
          {
            text: "(EN CASO DE NO FIRMAR)",
            alignment: "center",
            style: "tableNoBold",
            fontSize: 7,
          },
        ],
      },
      {
        alignment: "center",
        image: "sampleImage.jpg",
        width: 150,
        height: 80,
      },
      {
        marginTop: 2,
        text: [
          {
            text: "NOMBRE: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "David Santiago Lozada Quintero Quintero",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "DOCUMENTO: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "2222222222",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "PARENTESCO: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "HERMANO",
            style: "tableNoBold",
          },
        ],
      },
    ],
  };
}

function motivosNoFirma() {
  return {
    // margin: [30, 10, 30, 0],
    marginTop: 12,
    marginLeft: 30,
    marginRight: 30,
    stack: [
      {
        text: [
          {
            text: "MOTIVOS POR LOS QUE EL USUARIO NO FIRMA: 222222222222222 2222222222222222 22222 222222222 22222222 222222222222222 22222222 222222222222 2222222222 ",
            alignment: "justify",
            style: "tableNoBold",
            bold: true,
          },
        ],
      },
    ],
  };
}
