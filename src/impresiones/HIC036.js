import pdfMake from "pdfmake/build/pdfmake";

export const impresionHC036 = () => {
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
            stack: [contenidoTDO(), firmas()],
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
        pdfMake.createPdf(dd).download(`CONSENTIMIENTO INFORMADO HC036`);
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
            text: "\nCONSENTIMIENTO INFORMADO PARA INGRESO A MODALIDAD DE TRATAMIENTO DIRECTAMENTE OBSERVADO TDO VIRTUAL\n",
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

function contenidoTDO() {
  return {
    stack: [
      {
        marginTop: 20,
        marginBottom: 15,
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
        text: `Yo {David Santiago Lozada Quintero} identificado(a) con {CC} N° {1193220992}, mayor de edad o representante legal, autorizo y me comprometo a ingresar a la modalidad de tratamiento de tuberculosis denominada TDO Virtual, mediante el uso de tecnologías de la información y comunicaciones como soporte a la administración del tratamiento antituberculoso, para lo cual se me ha informado, los aspectos claves de adherencia al tratamiento, los derechos y deberes y he dado lectura cuidadosa a los siguientes aspectos:`,
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: [
          {
            text: "¿Qué es la modalidad de tratamiento TDO virtual?\n\n",
            bold: true,
          },
          {
            text: "Acorde a la Resolución 227 de 2020, el TDO virtual es una modalidad utilizada para el tratamiento de la tuberculosis, la cual consiste en el monitoreo y seguimiento continuo de la administración del tratamiento mediante el uso de tecnologías de información y comunicaciones, tales como video llamadas, registro de video, mensajes de texto, previa evaluación realizada por parte del trabajador de la salud.",
          },
        ],
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: [
          {
            text: "¿Cuáles son los requisitos para acceso a esta modalidad?\n\n",
            bold: true,
          },
          {
            text: "Se me ha informado que para acceder a esta modalidad de tratamiento, debo contar con acceso a tecnologías de información y comunicaciones tales como internet, teléfono inteligente o computador, con acceso a internet video llamadas, videos cortos diferidos, y mensajería de texto SMS. Así mismo, hago constar que tengo disponibilidad de tiempo diario, para que el equipo de salud pueda constatar la toma de la medicación. La administración del tratamiento con supervisión virtual parte de los principios de autonomía, autocuidado, y responsabilidad en la toma sin interrupciones de los medicamentos, el cumplimiento a citas presenciales o virtuales de control y demás consideraciones brindadas por el equipo de salud tratante.",
          },
        ],
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: [
          {
            text: "¿Cuáles son los beneficios de acceso a esta modalidad?\n\n",
            bold: true,
          },
          {
            text: "Él acceso al TDO virtual trae beneficios relacionados con la disminución de tiempos de desplazamiento diarios a la toma de tratamiento en la IPS, reducción de costos económicos, facilidad y comodidad de toma en su lugar de trabajo, estudio, hogar.",
          },
        ],
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: [
          {
            text: "¿Cuáles son los riesgos o aspectos por los cuales debo consultar?\n\n",
            bold: true,
          },
          {
            text: "Para el ingreso a esta modalidad, el personal de salud le informara los aspectos relacionados a la toma de medicamentos, dosificación, reacciones adversas a fármacos y signos de peligro. La modalidad de TDO implica informar al trabajador de la salud cualquier signo de alarma tales como; rasquiña, picor en la piel, nauseas, vómito, mareo, coloración amarilla de la piel. No deberá suspender el medicamento bajo ninguna circunstancia sin indicación médica, no disminuir o a dosis de medicamento, dado a que puede ocasionar una resistencia de la bacteria a derivar en una complicación de su estado de salud.",
          },
        ],
      },
      {
        marginTop: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: "Se me ha informado que los datos de identificación, registros de videos, mensajes de texto serán almacenados para fines de soportar el cumplimiento a la toma de medicación hasta por dos años, para lo cual, se protegerán mis datos personales conforme a la política de protección de datos y seguridad en la información.",
      },
      {
        marginTop: 15,
        marginBottom: 15,
        style: "bodyNoBold",
        alignment: "justify",
        text: "En constancia firma",
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
      text: `Yo {David Santiago Lozada Quintero} , con documento de identidad {CC} N°. {1193220974} Expreso mi voluntad de revocar el consentimiento prestado en fecha {00/00/0000} y declaro por tanto que, tras la información recibida, no consiento en someterme al procedimiento TDO por los siguientes motivos: {LOS MOTIVOS DE REVOCACION}`,
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
