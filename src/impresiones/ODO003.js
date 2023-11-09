import pdfMake from "pdfmake/build/pdfmake";

export const impresionODO003 = () => {
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
            stack: [contenidoConsenGeneral()],
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
        pdfMake.createPdf(dd).download(`CONSENTIMIENTO INFORMADO ODO003`);
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
        text: `NOMBRE DE LA INSTITUCIÓN PRESTADORA DE SERVICIOS SALUD –IPS-:`,
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        text: `________________________________________________________________________`,
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        columns: [
          {
            width: "auto",
            text: `MUNICIPIO: __________________________________`,
            alignment: "justify",
            style: "bodyNoBold",
          },
          {
            marginLeft: 50,
            width: "auto",
            text: `DEPARTAMENTO__________________________________`,
            alignment: "justify",
            style: "bodyNoBold",
          },
        ],
        marginTop: 12,
      },
      {
        marginTop: 30,
        text: `MODELO DE CONSENTIMIENTO INFORMADO PARA LA APLICACIÓN DE LA VACUNA CONTRA EL VIRUS DEL PAPILOMA HUMANO – VPH`,
        alignment: "center",
        bold: true,
      },
      {
        marginTop: 12,
        text: `Yo _________________________________________IDENTIFICACION____________________ FECHA: ____________`,
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 12,
        text: `IDENTIFICACION___________________________`,
        style: "bodyNoBold",
      },
      {
        marginTop: 12,
        text: [
          {
            text: "DECLARAN:",
            style: "bodyNoBold",
            bold: true,
          },
          {
            marginTop: 30,
            text: " el personal del área de la salud _____________________________________nos ha explicado y hemos entendido la siguiente información sobre la aplicación de la vacuna contra el Virus del Papiloma Humano.",
            style: "bodyNoBold",
          },
        ],
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 12,
        text: [
          {
            text: "EN QUÉ LE BENEFICIARÁ:",
            style: "bodyNoBold",
            bold: true,
          },
          {
            marginTop: 30,
            text: " Las vacunas tetravalente y bivalente son eficaces en la prevención de las lesiones cervicales precancerosas relacionadas con el VPH 16 y el VPH18 en mujeres. No ofrecen protección contra la evolución de la infección hacia la enfermedad a partir del VPH contraído antes de la vacunación",
            style: "bodyNoBold",
          },
        ],
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 12,
        text: [
          {
            text: "EN QUÉ CONSISTE Y PARA QUE SIRVE:",
            style: "bodyNoBold",
            bold: true,
          },
          {
            marginTop: 30,
            text: " El procedimiento de vacunación consiste en la administración de un biológico para la prevención de cáncer cervical, vulvar y vaginal, lesiones precancerosas o displasias, verrugas genitales o infección persistente causada por el Virus de Papiloma Humano, serotipos 6, 11, 16 y 18.",
            style: "bodyNoBold",
          },
        ],
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 12,
        text: [
          {
            text: "CÓMO SE REALIZA:",
            style: "bodyNoBold",
            bold: true,
          },
          {
            marginTop: 30,
            text: " Se administra la vacuna vía Intramuscular, en el tercio medio del músculo deltoides (brazo).",
            style: "bodyNoBold",
          },
        ],
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 12,
        text: [
          {
            text: "PRECAUCIÓN:",
            style: "bodyNoBold",
            bold: true,
          },
          {
            marginTop: 30,
            text: " La vacunación en adolescentes puede desencadenar síncope, algunas veces asociado con desmayo, por lo que se recomienda que después de la aplicación de la vacuna, la niña permanezca sentada por lo menos 15 minutos y sea observada.",
            style: "bodyNoBold",
          },
        ],
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 30,
        text: "EVENTOS ADVERSOS:",
        alignment: "justify",
        bold: true,
        style: "body",
      },
      {
        marginTop: 12,
        text: [
          {
            text: "En el sitio de la inyección (1 a 5 días postvacunación):",
            style: "bodyNoBold",
            bold: true,
          },
          {
            marginTop: 30,
            text: " Dolor, hinchazón, eritema, hematoma y prurito.",
            style: "bodyNoBold",
          },
        ],
        marginLeft: 30,
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 12,
        text: [
          {
            text: "Sistémico (1 a 15 días postvacunación):",
            style: "bodyNoBold",
            bold: true,
          },
          {
            marginTop: 30,
            text: " Pirexia (fiebre), diarrea, vómitos, mialgia (dolor muscular), tos, infección de vías respiratorias superiores, odontalgia (dolor dental), malestar general, artralgia (dolor en articulaciones e insomnio)",
            style: "bodyNoBold",
          },
        ],
        marginLeft: 30,
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 30,
        text: "NOTA: LA ORGANIZACIÓN MUNDIAL DE LA SALUD –OMS- Y LA ORGANIZACIÓN PANAMERICANA DE LA SALUD –OPSRECOMIENDAN EL USO DE LA VACUNA CONTRA EL VPH, DESPUÉS DE HABER REALIZADO UN AMPLIO ESTUDIO DEL PERFIL DE SEGURIDAD DE ÉSTA VACUNA, POR PARTE DEL COMITÉ CONSULTIVO MUNDIAL DE SEGURIDAD DE VACUNAS DE LA OMS.",
        alignment: "justify",
        bold: true,
        style: "body",
      },
      {
        marginTop: 51,
        text: "NO OBLIGATORIEDAD DE LA VACUNA: ",
        alignment: "justify",
        bold: true,
        style: "body",
      },
      {
        marginTop: 12,
        text: [
          {
            text: "DECLARO",
            style: "bodyNoBold",
            bold: true,
          },
          {
            marginTop: 30,
            text: " que he sido informado con anticipación y de forma satisfactoria he comprendido las explicaciones que se me han facilitado, y el personal del área de la salud que me ha atendido me ha permitido realizar todas las observaciones y me ha aclarado todas las dudas que le he planteado y con la información recibida, acepto la aplicación de la vacuna contra el VPH, en tales condiciones",
            style: "bodyNoBold",
          },
        ],

        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 20,
        text: [
          {
            text: "ACEPTO _________NO ACEPTO_______",
            style: "bodyNoBold",
            bold: true,
          },
          {
            marginTop: 30,
            text: " que se me aplique la vacuna.",
            style: "bodyNoBold",
          },
        ],
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 50,
        text: "Nombre del Cuidador________________________________ Firma: ____________________ C.C. _____________________",
        alignment: "justify",
        style: "bodyNoBold",
      },
      {
        marginTop: 20,
        text: "Nombre del Vacunador______________________________ Firma_____________________ C.C. ______________________ ",
        alignment: "justify",
        style: "bodyNoBold",
      },
    ],
  };
}
