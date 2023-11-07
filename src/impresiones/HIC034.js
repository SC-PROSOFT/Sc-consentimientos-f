import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export const impresionHC034 = () => {
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
            stack: [contenidoIVE(), firmas()],
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
        pdfMake.createPdf(dd).download(`CONSENTIMIENTO INFORMADO HC034`);
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
            text: "\nCONSENTIMIENTO INFORMADO INTERRUPCIÓN VOLUNTARIA DEL EMBARAZO\n\n",
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

function contenidoIVE() {
  return {
    stack: [
      {
        alignment: "justify",
        marginTop: 14,
        style: "body",
        text: "La ley 23 de 1981 en su artículo 15 y 19, por la cual dictan las normas en materia de Ética médica, estableciendo que el médico no expondrá a su paciente a riesgos injustificados; pedirá su consentimiento para aplicar los tratamientos médicos y quirúrgicos que considere indispensables y que pueden afectarlo física o síquicamente, salvo en los casos en que ello no fuere posible, y le explicará al paciente o a sus responsables de tales consecuencias anticipadamente; igualmente en cumplimiento con lo establecido en la Ley Orgánica de Protección de Datos de carácter Personal (LOPD)15 del 13 de Diciembre 1999 sobre protección de datos personales y de conformidad con lo previsto en la Ley Orgánica (LO)  2 del 3 de marzo del 2010, de Salud Sexual y Reproductiva y de Interrupción Voluntaria del Embarazo, sus datos personales serán tratados garantizando su derecho a la intimidad y confidencialidad.",
      },
      {
        marginTop: 8,
        style: "bodyNoBold",
        columns: [
          {
            width: "10%",
            text: [
              {
                text: "Día:",
                bold: true,
              },
              {
                text: `{00}`,
              },
            ],
          },
          {
            width: "10%",
            text: [
              {
                text: "Mes:",
                bold: true,
              },
              {
                text: `{00}`,
              },
            ],
          },
          {
            width: "10%",
            text: [
              {
                text: "Año:",
                bold: true,
              },
              {
                text: `{00}`,
              },
            ],
          },
          {
            width: "35%",
            text: [
              {
                text: "Hora:",
                bold: true,
              },
              {
                text: `{00}`,
              },
            ],
          },
          {
            width: "35%",
            text: [
              {
                text: "Historia Clínica N°.",
                bold: true,
              },
              {
                text: `{00}`,
              },
            ],
          },
        ],
      },
      {
        marginTop: 8,
        columns: [
          {
            width: "65%",
            style: "bodyNoBold",
            text: "SERVICIO: CONSULTA EXTERNA",
            bold: true,
          },
          {
            width: "35%",
            style: "bodyNoBold",
            text: "URGENCIAS",
            bold: true,
          },
        ],
      },
      {
        marginTop: 8,
        style: "bodyNoBold",
        table: {
          widths: [170, 35, 35, 100, 150],
          body: [
            [
              {
                colSpan: 5,
                text: `Nombres y appellidos del paciente y/o Tutor legal o Familiar`,
                bold: true,
              },
              {},
              {},
              {},
              {},
            ],
            [
              {
                text: "Documento de identidad",
              },
              {
                columns: [
                  {
                    text: "T.I.",
                  },
                  {
                    marginLeft: 5,
                    stack: cuadro_canvas(""),
                  },
                ],
              },
              {
                columns: [
                  {
                    text: "C.C.",
                  },
                  {
                    marginLeft: 5,
                    stack: cuadro_canvas(""),
                  },
                ],
              },
              {
                colSpan: 2,
                text: `N°. {1111111111}`,
              },
              {},
            ],
            [
              {
                colSpan: 3,
                text: `Dirección: {Amarilo Araunco Diag 26 #6-90}`,
              },
              {},
              {},
              {
                colSpan: 2,
                text: `Teléfono: {3333548956}`,
              },
              {},
            ],
            [
              {
                colSpan: 3,
                text: `Acudiente/responsable: {Pepitico perecito Pepitico Perecito}`,
              },
              {},
              {},
              {
                text: `C.C.: {20201568}`,
              },
              {
                text: `Parentesco: {MADRE}`,
              },
            ],
          ],
        },
      },
      {
        marginTop: 8,
        style: "bodyNoBold",
        alignment: "justify",
        text: "Las Gestantes hacen parte de una población de alto riesgo por su condición de embarazo, por lo tanto, tendrán prioridad en su proceso de atención y apoyo en los diferentes niveles de complejidad y se activarán los protocolos de acuerdo a su condición de salud.",
      },
      {
        marginTop: 8,
        style: "bodyNoBold",
        alignment: "justify",
        text: "Que la Institución para realizar la Interrupción Voluntaria del embarazo (IVE) que he solicitado según la legislación vigente, solo ofrece un (1) método y es el farmacológico (mediante tabletas) Mifepristona 200 microgramos via oral , dosis única y misoprostol vía vaginal o sublingual de 400 mcg cada 3 horas hasta 4 dosis iniciando a las 24-48 horas.",
      },
      {
        marginTop: 8,
        style: "bodyNoBold",
        alignment: "justify",
        text: "Que los efectos secundarios más frecuentes son Nausea, vomito, Fiebre, escalofrío y diarrea. Se me ha informado sobre las consecuencias psicológicas y sociales, que si bien estadísticamente son poco frecuentes se puede presentar depresiones post aborto, alteraciones del deseo sexual post aborto, baja autoestima y que para algunos sectores de la sociedad el Aborto está mal considerado.",
      },
      {
        marginTop: 8,
        style: "bodyNoBold",
        alignment: "justify",
        text: "Que las complicaciones que se pueden presentar son las relacionadas a continuación y se tendrán como criterios de remisión a la mediana complejidad (marque con una X, el criterio de remisión) con el fin de evitar complicaciones que deriven una muerte materna.",
      },
      {
        marginTop: 8,
        style: "bodyNoBold",
        table: {
          widths: [40, 240, 220],
          body: [
            [
              {
                alignment: "center",
                text: "Item",
                bold: true,
              },
              {
                alignment: "center",
                text: "Criterio",
                bold: true,
              },
              {
                alignment: "center",
                text: "Observaciones",
                bold: true,
              },
            ],
            [
              {
                alignment: "center",
                text: "1",
              },
              {
                text: "• Hemorragia",
              },
              {
                text: `{observaciones hemorragia}` || "",
              },
            ],
            [
              {
                alignment: "center",
                text: "2",
              },
              {
                text: "• Retención Uterina",
              },
              {
                text: `{observaciones retencion}` || "",
              },
            ],
            [
              {
                alignment: "center",
                text: "3",
              },
              {
                text: "• IVE fallida",
              },
              {
                text: `{observaciones IVE}` || "",
              },
            ],
            [
              {
                alignment: "center",
                text: "4",
              },
              {
                text: "• Infecciones",
              },
              {
                text: `{observaciones infecciones}` || "",
              },
            ],
            [
              {
                alignment: "center",
                text: "5",
              },
              {
                text: `• Entre otras: {OTROS CRITERIOS}`,
              },
              {
                text: `{observaciones otros}` || "",
              },
            ],
          ],
        },
      },
      {
        marginTop: 8,
        style: "bodyNoBold",
        alignment: "justify",
        text: `De acuerdo con lo anterior, Yo {David Pepito Perez Perecito}  con C.C. N° {1111111111} de {VILLAVICENCIO} en calidad de paciente o acudiente (persona responsable del paciente), por medio del presente documento, en forma libre en pleno uso de mis facultades mentales e intelectuales y sin limitaciones o impedimentos de carácter médico o legal, habiendo recibido información en un lenguaje claro, senillo y adecuado acerca de los riesgos y demás circunstancias que se originen del procedimiento, por parte del profesional en Medicina (Nombres y Apellidos completos) Dr. {Manotas Perez Perecito} identificado con Cédula de ciudadanía y/o Registro médico N° {12121212121} Autorizo ESE SALUD YOPAL, para que se me practique la Interrupción Voluntaria del Embarazo (IVE) con el método farmacológico que me ofrece la Institución.`,
      },
      {
        marginTop: 8,
        style: "bodyNoBold",
        alignment: "justify",
        text: "EN CUALQUIER MOMENTO PREVIO AL INICIO DE LA INTERVENCIÓN Y SIN NECESIDAD DE DAR NINGUNA EXPLICACION, PUEDO REVOCAR EL CONSENTIMIENTO QUE AHORA PRESTO.",
        bold: true,
      },
      {
        marginTop: 8,
        style: "bodyNoBold",
        alignment: "justify",
        text: "Certifico que he explicado la naturaleza, propósito, ventajas, riesgos y complicaciones del procedimiento y he contestado todas las preguntas. Considero que el (la) paciente comprende todo lo explicado.",
      },
      {
        stack: disentimiento(false),
      },
    ],
  };
}

function nota() {
  return {
    stack: [
      {
        marginTop: 8,
        style: "bodyNoBold",
        alignment: "justify",
        text: [
          {
            text: "NOTA:",
            bold: true,
          },
          {
            text: " Certifico que he explicado la naturaleza, propósito, ventajas, riesgos y complicaciones del procedimiento y he contestado todas las preguntas. Considero que el (la) paciente comprende todo lo explicado.",
          },
        ],
      },
    ],
  };
}

function disentimiento(disiente) {
  // disiente = false;
  const disentir = [
    {
      marginTop: 8,
      alignment: "center",
      style: "bodyNoBold",
      text: "DISENTIMIENTO",
      bold: true,
    },
    {
      marginTop: 8,
      style: "bodyNoBold",
      text: `Yo {David Pepito Perez Perecito} identificada con la CC No {1111111111}, en calidad de paciente y/o acudienteee, revoco este consentimiento que he prestado sobre la realización de la Interrupción voluntaria del Embarazo (IVE).`,
    },
  ];
  if (disiente) {
    return disentir;
  } else return [];
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