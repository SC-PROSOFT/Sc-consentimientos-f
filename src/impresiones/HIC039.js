import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export const impresionHC039 = () => {
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
            stack: [contenidoSalida(), firmas()],
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
        pdfMake.createPdf(dd).download(`CONSENTIMIENTO INFORMADO HC039`);
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
            text: "\nCONSENTIMIENTO INFORMADO PARA SALIDA VOLUNTARIA\n",
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

function contenidoSalida() {
  return {
    stack: [
      {
        marginTop: 20,
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
        marginTop: 10,
        style: "bodyNoBold",
        alignment: "justify",
        text: `Yo {David Santiago Lozada Quintero} identificado(a) con {CC} N° {1193220992}, obrando en la calidad abajo indicada, hago la siguiente declaración: Por medio del presente documento, en forma libre, en pleno uso de mis facultades mentales y sin limitaciones o impedimentos de carácter médico o legal, habiendo recibido información por parte del médico tratante sobre las condiciones médicas, he decido solicitar MI ALTA VOLUNTARIA del servicio de {EL SERVICIO} DE LA ESE SALUD  YOPAL, motivo por el cual eximo de toda responsabilidad al Hospital y asumo las consecuencias que se deriven de esta decisión.`,
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: "CALIDAD EN LA QUE SE OTORGA ESTE CONSENTIMIENTO:",
        bold: true,
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        columns: [
          {
            width: "auto",
            text: "Como paciente:",
          },
          {
            marginLeft: 10,
            width: "auto",
            text: "SI",
          },
          {
            marginLeft: 5,
            width: "auto",
            stack: cuadro_canvas(""),
          },
          {
            marginLeft: 15,
            width: "auto",
            text: "NO",
          },
          {
            marginLeft: 5,
            width: "auto",
            stack: cuadro_canvas(""),
          },
        ],
      },
      {
        marginTop: 8,
        style: "bodyNoBold",
        alignment: "justify",
        columns: [
          {
            width: "30%",
            text: "Como responsable del paciente:",
          },
          {
            marginLeft: 10,
            width: "auto",
            text: "SI",
          },
          {
            marginLeft: 5,
            width: "auto",
            stack: cuadro_canvas(""),
          },
          {
            marginLeft: 15,
            width: "auto",
            text: "NO",
          },
          {
            marginLeft: 5,
            width: "auto",
            stack: cuadro_canvas(""),
          },
          {
            marginLeft: 15,
            width: "auto",
            text: "(Padre o Madre si es menor; representante legal, familiar o representante u otras personas que figuren como tales en la H. C.):",
          },
        ],
      },
      {
        style: "bodyNoBold",
        text: [
          {
            text: "Fecha de notificación: ",
            bold: true,
          },
          {
            text: `{00/00/2023}`,
          },
        ],
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: "Certifico que he explicado los riesgos de alta voluntaria y he contestado todas las preguntas. Considero que el (la) paciente, pariente/representante comprenden completamente lo que he explicado.",
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: "OTRAS CONSIDERACIONES",
        bold: true,
      },
      {
        marginBottom: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: `{LAS OTRAS CONSIDERACIONES XD XD XD}`,
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
