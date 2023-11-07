import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export const impresionHC035 = () => {
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
            stack: [contenidoEISP(), firmas()],
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
          body: {
            fontSize: 10,
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
        pdfMake.createPdf(dd).download(`CONSENTIMIENTO INFORMADO HC035`);
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
            text: "\nCONSENTIMIENTO INFORMADO PARA EVENTOS DE INTERES EN SALUD PUBLICA (EISP)\n",
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

function contenidoEISP() {
  return {
    stack: [
      {
        marginTop: 10,
        columns: [
          {
            text: `Historia clínica número: {1193221112-1}`,
            alignment: "justify",
            style: "bodyNoBold",
          },
          {
            width: "auto",
            text: `Ciudad: {VILLAVICENCIO}`,
            alignment: "justify",
            style: "bodyNoBold",
          },
          {
            marginLeft: 50,
            width: "auto",
            text: `Fecha: {02/11/2023}`,
            alignment: "justify",
            style: "bodyNoBold",
          },
        ],
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: `Yo {David Santiago Lozada Quintero} de {20} años de edad, de genero {Masculino} identificado(a) con documento de identidad N°: {1193220992}, expedida en {Villavicencio} con residencia en {Villavicencio}, teléfono número {3223758923} actuando en nombre propio o como acudiente de {David Santiago Lozada Quintero} en mi calidad de paciente y en pleno uso de mis facultades mentales y de mis derechos de salud y habiendo solicitado por mi voluntad los servicios de salud a la empresa social del estado ESE salud Yopal, por medio del presente documento doy mi  consentimiento informado para que se me brinden los cuidados correspondientes y se siga la conducta terapéutica  según el criterio del profesional de salud tratante.`,
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: `Dejo constancia que he sido informado(a) y he recibido información y asesoría sobre el evento: {EL EVENTO DEL QUE SE RECIBIO ASESORIA} respecto del modo de contagio, estrategias y métodos de prevención, importancia de diagnostico y tratamiento de la pareja de ser necesario a quien le informaré mi estado actual para que reciba la asesoría, tratamiento y seguimientos que se requieran para evitar reinfecciones y/o transmisión de la enfermedad a otras personas con quien se tenga contacto. Fui informado(a) de las acciones que se seguirán: tratamiento y controles que debo realizar posterior al tratamiento médico, al cual debo ser adherente, y recibir oportunamente y de manera adecuada; Por lo anterior me comprometo a seguir las indicaciones dadas por el profesional de la salud respecto al evento presentado, de no seguir las indicaciones los principales riesgos que se pueden presentar: resistencia a medicamentos, náuseas, mareos, vomito, gastritis, reinfecciones.`,
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: `Me garantizan la confidencialidad de mis resultados y la información que he proporcionado. De lo anterior {SI O NO} acepto iniciar tratamiento y realizar los controles y seguimientos que se requieran de acuerdo a la patología en curso. Por lo tanto, en forma consciente y voluntaria, luego de haber escuchado la información y explicaciones, sin haber sido objeto de coacción, persuasión, ni manipulación manifiesto lo siguiente:`,
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: "Me considero SATISFECHO con la información recibida y COMPRENDO la indicación, los beneficios, además de los riesgos y posibles complicaciones que podrían desprenderse de dicho acto.",
      },
      {
        stack: revocar(false),
      },
    ],
  };
}

function revocar(revoca) {
  const revocacion = [
    {
      marginTop: 8,
      canvas: [{ type: "line", x1: 0, y1: 0, x2: 545, y2: 0, lineWidth: 1.2, lineColor: "gray" }],
    },
    {
      marginTop: 8,
      marginLeft: 20,
      style: "bodyNoBold",
      text: `Yo {David Santiago Lozada Quintero} paciente de la ESE SALUD YOPAL, con C.C {1193220974} Expreso mi voluntad de revocar el consentimiento prestado en fecha {00/00/0000} y declaro por tanto que, tras la información recibida, no consiento en someterme al procedimiento de: {EL PROCEDIMIENTO} por los siguientes motivos: {LOS MOTIVOS DE REVOCACION}`,
    },
    {
      marginTop: 8,
      marginBottom: 8,
      canvas: [{ type: "line", x1: 0, y1: 0, x2: 545, y2: 0, lineWidth: 1.2, lineColor: "gray" }],
    },
  ];
  if (revoca) return revocacion;
  else return [];
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
  paciente_firma = "S";
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
