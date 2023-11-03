import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const impresionHC031 = () => {
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
                stack: [contenidoColposcopia(), firmas()],
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
            pdfMake.createPdf(dd).download(`CONSENTIMIENTO INFORMATO HC031`);
            resolve();
          }, 600);
        } catch (error) {
          console.log(error);
        }
    });
};

function header(currentPage, pageCount) {
    return {
      margin: [35, 20, 35, 0],
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
              text: "\nCONSENTIMIENTO INFORMADO PARA LA TOMA DE COLPOSCOPIA\n\n",
              style: "headerBold",
              alignment: "center",
            },
            {
              stack: [
                {
                  text: [
                    {
                      text: "Código: ",
                      bold: true,
                    },
                    {
                      text: "M2-S3-F-02",
                    },
                  ],
                  style: "headerEnd",
                },
                {
                  text: [
                    {
                      text: "Versión: ",
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
                      text: "Aprobado el: ",
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
                      text: "Revisado por ",
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
                      text: "Aprobado por ",
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
                      text: "Fecha de actualización: ",
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
  
  function contenidoColposcopia(disiente) {
    disiente = "N";
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
          marginTop: 8,
          text: "LA COLPOSCOPIA",
          alignment: "justify",
          style: "bodyNoBold",
          bold: true,
        },
        {
          marginTop: 8,
          text: "Es un examen sencillo del cuello, vagina y vulva, similar a la toma de citología cervicouterina, donde se realiza observación con un microscopio especial que permite visualizar los cambios ocurridos en el cuello del útero. Para ayudarnos durante este examen se utilizan sustancias que facilitan el reconocimiento de estas lesiones. Cuando el ginecólogo visualiza las lesiones sospechosas procede a tomar una muestra pequeña (biopsia) para posteriormente ser analizado por un patólogo. Normalmente puede presentar sangrado y dolor durante el procedimiento.",
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: "Riesgos de la Colposcopia:",
          alignment: "justify",
          style: "bodyNoBold",
          bold: true,
        },
        {
          ol: [
            "Molestias producidas por las soluciones aplicadas.",
            "Calambres, picadas o leve dolor.",
            "Sangrado mínimo durante varios días. Si es moderado se dejará una gasa para retirarla 6 horas después.",
            "Infección.",
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: "Si sospecha que está embarazada avisar al ginecólogo.",
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: `Yo, {David Santiago Lozada Quintero}, identificada con cédula de ciudadanía No. {1111111111} de {VILLAVICENCIO} en forma voluntaria y en pleno uso de mis facultades mentales y psíquicas sin presión o inducción alguna, doy el consentimiento para que el ginecólogo de la E.S.E salud Yopal -Hospital local de Yopal, realice el procedimiento de colposcopia y biopsia. Acepto sus riesgos e imprevistos. Entiendo lo que he leído, se me ha explicado verbalmente y por escrito acerca del procedimiento, los cuidados que debo tener antes y después de la colposcopia, los riesgos justificados y previsibles. También se me ha dado la oportunidad de preguntar y resolver dudas. Entiendo que este procedimiento puede traer efectos adversos, como infección y sangrado, propias del procedimiento que aquí autorizo, los cuales asumo bajo mi responsabilidad.`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        disiente == "S"
          ? {
              marginTop: 8,
              text: "DESISTIMIENTO",
              alignment: "center",
              style: "bodyNoBold",
              bold: true,
            }
          : null,
        disiente == "S"
          ? {
              marginTop: 8,
              text: "Expreso mi voluntad de revocar el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento de {COLPOSCOPIA}, por los siguientes motivos: {LOS MOTIVOS}",
              alignment: "justify",
              style: "bodyNoBold",
            }
          : null,
      ],
    };
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
      stack: [
        {
          marginTop: 20,
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
      margin: [80, 10, 110, 0],
      stack: [
        {
          text: [
            {
              text: "MOTIVOS POR LOS QUE EL USUARIO NO FIRMA: 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 ",
              style: "tableNoBold",
              alignment: "justify",
              bold: true,
            },
          ],
        },
      ],
    };
  }
  