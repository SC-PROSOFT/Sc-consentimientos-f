import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export const impresionHC033 = () => {
  return new Promise(async (resolve) => {
    try {
      var dd = {
        pageSize: "LETTER",
        pageMargins: [35, 105, 35, 30],
        header: function (currentPage, pageCount) {
          return header(currentPage, pageCount);
        },
        content: [
          {
            stack: [contenidoPruebaVIH(), firmas()],
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

      setTimeout(() => {
        pdfMake.createPdf(dd).download(`CONSENTIMIENTO INFORMADO HC032`);
        resolve();
      }, 600);
    } catch (error) {
      console.log(error);
    }
  });
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
            text: "\n\nCONSENTIMIENTO INFORMADO PRUEBA VIH\n\n",
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

function contenidoPruebaVIH() {
  return {
    stack: [
      {
        marginLeft: 20,
        marginTop: 5,
        marginBottom: 3,
        style: "bodyNoBold",
        ol: [
          {
            columns: [
              {
                width: "65%",
                marginRight: 20,
                text: "¿Sabe que es el VIH/SIDA?",
              },
              {
                width: "4%",
                text: "SI",
              },
              {
                width: "6%",
                stack: cuadro_canvas(),
              },
              {
                width: "4%",
                text: "NO",
              },
              {
                width: "6%",
                stack: cuadro_canvas(),
              },
            ],
          },
          {
            marginTop: 5,
            columns: [
              {
                width: "65%",
                marginRight: 20,
                text: "¿Ha tenido relaciones con personas portadoras de VIH/SIDA?",
              },
              {
                width: "4%",
                text: "SI",
              },
              {
                width: "6%",
                stack: cuadro_canvas(),
              },
              {
                width: "4%",
                text: "NO",
              },
              {
                width: "6%",
                stack: cuadro_canvas(),
              },
            ],
          },
          {
            marginTop: 5,
            columns: [
              {
                width: "65%",
                marginRight: 20,
                text: "¿Se inyecta sustancias psicoactivas?",
              },
              {
                width: "4%",
                text: "SI",
              },
              {
                width: "6%",
                stack: cuadro_canvas(),
              },
              {
                width: "4%",
                text: "NO",
              },
              {
                width: "6%",
                stack: cuadro_canvas(),
              },
            ],
          },
          {
            marginTop: 5,
            columns: [
              {
                width: "65%",
                marginRight: 20,
                text: "¿Usa algún método de protección cuando tiene relaciones sexuales?",
              },
              {
                width: "4%",
                text: "SI",
              },
              {
                width: "6%",
                stack: cuadro_canvas(),
              },
              {
                width: "4%",
                text: "NO",
              },
              {
                width: "6%",
                stack: cuadro_canvas(),
              },
            ],
          },
          {
            marginTop: 5,
            text: "Ha tenido los siguientes síntomas:",
          },
          {
            marginLeft: 10,
            ul: [
              {
                marginTop: 5,
                columns: [
                  {
                    width: "35%",
                    marginRight: 20,
                    text: "Pérdida de peso",
                  },
                  {
                    width: "4%",
                    text: "SI",
                  },
                  {
                    width: "6%",
                    stack: cuadro_canvas(),
                  },
                  {
                    width: "4%",
                    text: "NO",
                  },
                  {
                    width: "6%",
                    stack: cuadro_canvas(),
                  },
                ],
              },
              {
                marginTop: 5,
                columns: [
                  {
                    width: "35%",
                    marginRight: 20,
                    text: "Fiebre frecuente",
                  },
                  {
                    width: "4%",
                    text: "SI",
                  },
                  {
                    width: "6%",
                    stack: cuadro_canvas(),
                  },
                  {
                    width: "4%",
                    text: "NO",
                  },
                  {
                    width: "6%",
                    stack: cuadro_canvas(),
                  },
                ],
              },
              {
                marginTop: 5,
                columns: [
                  {
                    width: "35%",
                    marginRight: 20,
                    text: "Diarrea permanente",
                  },
                  {
                    width: "4%",
                    text: "SI",
                  },
                  {
                    width: "6%",
                    stack: cuadro_canvas(),
                  },
                  {
                    width: "4%",
                    text: "NO",
                  },
                  {
                    width: "6%",
                    stack: cuadro_canvas(),
                  },
                ],
              },
              {
                marginTop: 5,
                columns: [
                  {
                    width: "35%",
                    marginRight: 20,
                    text: "Infección por hongos y herpes",
                  },
                  {
                    width: "4%",
                    text: "SI",
                  },
                  {
                    width: "6%",
                    stack: cuadro_canvas(),
                  },
                  {
                    width: "4%",
                    text: "NO",
                  },
                  {
                    width: "6%",
                    stack: cuadro_canvas(),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        marginTop: 5,
        marginLeft: 20,
        marginBottom: 5,
        style: "bodyNoBold",
        columns: [
          {
            width: "65%",
            marginRight: 20,
            text: "6. ¿Ha sido transfundido en los últimos años?",
          },
          {
            width: "4%",
            text: "SI",
          },
          {
            width: "6%",
            stack: cuadro_canvas(),
          },
          {
            width: "4%",
            text: "NO",
          },
          {
            width: "6%",
            stack: cuadro_canvas(),
          },
        ],
      },
      {
        marginTop: 7,
        style: "bodyNoBold",
        text: [
          {
            text: "OBSERVACIONES: ",
            bold: true,
          },
          {
            text: `ACA IRIAN LAS OBSERVACIONES`,
          },
        ],
      },
      {
        marginTop: 14,
        style: "bodyNoBold",
        alignment: "center",
        text: "CONSENTIMIENTO INFORMADO PARA REALIZAR LA PRUEBA PRESUNTIVA O DIAGNOSTICA DE VIH (VIRUS DE INMUNODEFICIENCIA HUMANA)",
        bold: true,
      },
      {
        marginTop: 16,
        style: "bodyNoBold",
        text: "Este espacio debe ser diligenciado para niños (as) menores de 12 años.",
        bold: true,
      },
      {
        marginTop: 7,
        style: "bodyNoBold",
        alignment: "justify",
        text: `Yo {Pepito Perez Pepito Perez} mayor de edad, identificado(a) con C.C. No. {1111111111} expedida en {VILLAVICENCIO} en condición de representante legal o acudiente del niño(a) {Pepi Pere Pepi Pere} de {00} años de edad`,
      },
      {
        marginTop: 7,
        style: "bodyNoBold",
        alignment: "justify",
        text: "Este espacio es diligenciado para mayores de 12 años.",
        bold: true,
      },
      {
        marginTop: 7,
        style: "bodyNoBold",
        alignment: "justify",
        text: `Yo {Pepito Perez Pepito Perez} identificado(a) con {CC}. No. {1111111111} expedida en {VILLAVICENCIO}, Certifico que: He leído (o que se me ha leído) el documento sobre consentimiento informado que contiene información sobre el propósito y beneficio de la prueba, su interpretación, sus limitaciones, y su riesgo, y que entiendo su contenido, incluyendo las limitaciones, beneficios y riegos de la prueba.`,
      },
      {
        marginTop: 7,
        style: "bodyNoBold",
        alignment: "justify",
        text: "He recibido consejería PRE-PRUEBA (actividad realizada por un profesional de la salud para prepararme y confrontarme en relación a mis conocimientos, prácticos, y conductas, antes de realizarme las pruebas diagnósticas).",
      },
      {
        marginTop: 7,
        style: "bodyNoBold",
        alignment: "justify",
        text: "También certifico que dicha persona me brindo la asesoría y que según su compromiso, de ella también recibiré una asesoría Post-prueba (procedimiento mediante el cual me entregaran mis resultados) y que estoy de acuerdo con el proceso.",
      },
      {
        marginTop: 7,
        style: "bodyNoBold",
        alignment: "justify",
        text: "Entiendo que la toma de muestra es voluntaria y que no puedo retirar mi consentimiento en cualquier momento antes de que me sea tomada el examen.",
      },
      {
        marginTop: 7,
        style: "bodyNoBold",
        alignment: "justify",
        text: "Fui informada de las medidas que se tomara para proteger la confidencialidad de mis resultados.",
      },
      {
        marginTop: 7,
        style: "bodyNoBold",
        columns: [
          {
            width: "13%",
            text: "De lo anterior",
          },
          {
            width: "auto",
            stack: cuadro_canvas(),
          },
          {
            marginLeft: 4,
            width: "84%",
            text: [
              {
                text: "Autorizo",
                bold: true,
              },
              {
                text: " a mi asesor para la realización de la prueba, procesamiento y reporte de la misma.",
              },
            ],
          },
        ],
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        columns: [
          {
            width: "4%",
            stack: cuadro_canvas(),
          },
          {
            marginLeft: 4,
            width: "96%",
            text: [
              {
                text: "Expreso mi voluntad de ",
              },
              {
                text: "revocar",
                bold: true,
              },
              {
                text: " el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento de toma de laboratorio VIH",
              },
              {
                text: "(VIRUS DE INMUNODEFICIENCIA HUMANA),",
                bold: true,
              },
              {
                text: `por los siguientes motivos: {ACA IRIAN LOS MOTIVOS REVOCACION}`,
              },
            ],
          },
        ],
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
    marginTop: 15,
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
        marginBottom: 10,
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
        marginTop: 10,
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
    // margin: [30, 10, 100, 0],
    marginTop: 12,
    marginLeft: 30,
    marginRight: 30,
    stack: [
      {
        text: [
          {
            text: "MOTIVOS POR LOS QUE EL USUARIO NO FIRMA: 222222222222222 2222222222222222 22222 222222222 2222 2222 222222 222 222222222222222222222222222222222222 ",
            alignment: "justify",
            style: "tableNoBold",
            bold: true,
          },
        ],
      },
    ],
  };
}
