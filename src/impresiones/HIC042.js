import { evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHC042 = ({ datos }) => {
  var dd = {
    stack: [contenidoVPH(), firmas()],
  };

  function contenidoVPH() {
    return {
      stack: [
        {
          marginTop: 10,
          columns: [
            {
              width: "50%",
              text: `Historia clínica número:`,
              alignment: "justify",
              style: "bodyNoBold",
            },
            {
              width: "30%",
              text: `Ciudad: VILLAVICENCIO`,
              alignment: "justify",
              style: "bodyNoBold",
            },
            {
              width: "20%",
              text: `Fecha: 02/11/2023`,
              alignment: "justify",
              style: "bodyNoBold",
            },
          ],
        },
        {
          marginTop: 15,
          text: `Yo, {Pepito Perez Pepito Perez}, IDENTIFICACION {1111111111} HORA: {00:00} EDAD: 00`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: `NOMBRE DEL PADRE DE FAMILIA Y/O CUIDADOR {Pepito perez pepito perez} IDENTIFICACION {1111111111}`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 10,
          text: [
            {
              text: `DECLARAN:`,
              bold: true,
            },
            {
              text: ` el personal del área de la salud {PITOLOGIA} nos ha explicado y hemos entendido la siguiente información sobre la aplicación de la vacuna contra el Virus del Papiloma Humano.`
            }
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 10,
          text: `EN QUÉ LE BENEFICIARÁ:`,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 2,
          text: `Las vacunas tetravalente y bivalente son eficaces en la prevención de las lesiones cervicales precancerosas relacionadas con el VPH 16 y el VPH18 en mujeres. No ofrecen protección contra la evolución de la infección hacia la enfermedad a partir del VPH contraído antes de la vacunación.`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 10,
          text: `EN QUÉ CONSISTE Y PARA QUE SIRVE:`,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 2,
          text: `El procedimiento de vacunación consiste en la administración de un biológico para la prevención de cáncer cervical, vulvar y vaginal, lesiones precancerosas o displasias, verrugas genitales o infección persistente causada por el Virus de Papiloma Humano, serotipos 6, 11, 16 y 18.`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 10,
          text: [
            {
              text: "CÓMO SE REALIZA:",
              bold: true,
            },
            {
              text: ` Se administra la vacuna vía Intramuscular, en el tercio medio del músculo deltoides (brazo).`,
            }
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 10,
          text: [
            {
              text: "PRECAUCIÓN:",
              bold: true,
            },
            {
              text: ` La vacunación en adolescentes puede desencadenar síncope, algunas veces asociado con desmayo, por lo que se recomienda que después de la aplicación de la vacuna, la niña permanezca sentada por lo menos 15 minutos y sea observada.`,
            }
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 10,
          text: `EVENTOS ADVERSOS:`,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 10,
          marginLeft: 20,
          text: [
            {
              text: "En el sitio de la inyección (1 a 5 días postvacunación):",
              bold: true,
            },
            {
              text: "Dolor, hinchazón, eritema, hematoma y prurito."
            }
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 10,
          marginLeft: 20,
          text: [
            {
              text: "Sistémico (1 a 15 días postvacunación):",
              bold: true,
            },
            {
              text: "Pirexia (fiebre), diarrea, vómitos, mialgia (dolor muscular), tos, infección de vías respiratorias superiores, odontalgia (dolor dental), malestar general, artralgia (dolor en articulaciones e insomnio)."
            }
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 20,
          text: "NOTA: LA ORGANIZACIÓN MUNDIAL DE LA SALUD –OMS- Y LA ORGANIZACIÓN PANAMERICANA DE LA SALUD –OPS RECOMIENDAN EL USO DE LA VACUNA CONTRA EL VPH, DESPUÉS DE HABER REALIZADO UN AMPLIO ESTUDIO DEL PERFIL DE SEGURIDAD DE ÉSTA VACUNA, POR PARTE DEL COMITÉ CONSULTIVO MUNDIAL DE SEGURIDAD DE VACUNAS DE LA OMS.",
          bold: true,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 10,
          text: "NO OBLIGATORIEDAD DE LA VACUNA:",
          bold: true,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 10,
          text: [
            {
              text: "DECLARO",
              bold: true,
            },
            {
              text: " que he sido informado con anticipación y de forma satisfactoria he comprendido las explicaciones que se me han facilitado, y el personal del área de la salud que me ha atendido me ha permitido realizar todas las observaciones y me ha aclarado todas las dudas que le he planteado y con la información recibida, acepto la aplicación de la vacuna contra el VPH, en tales condiciones"
            }
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
        textoAutoriza(false),
      ],
    };
  }
  
  function textoAutoriza(autorizo) {
      const textoAutoriza = {
        marginTop: 10,
        alignment: "justify",
        style: "bodyNoBold",
        columns: [
          {
            width: "8%",
            text: "ACEPTO",
            bold: true,
          },
          {
            width: "4%",
            stack: cuadro_canvas(),
          },
          {
            width: "auto",
            text: "que se me aplique la vacuna.",
          }
        ],
      };
  
      const textoRevoca = {
        marginTop: 10,
        alignment: "justify",
        style: "bodyNoBold",
        columns: [
          {
            width: "10%",
            text: "NO ACEPTO",
            bold: true,
          },
          {
            width: "4%",
            stack: cuadro_canvas(),
          },
          {
            width: "auto",
            text: "que se me aplique la vacuna.",
          }
        ],
      };
  
      if (autorizo) return textoAutoriza;
      else return textoRevoca;
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

  function firmaPaciente() {
    return {
      stack: [
        {
          text: "PACIENTE (FIRMA / HUELLA)",
          bold: true,
          alignment: "center",
          style: "tableNoBold",
        },
        {
          columns: [
            {
              marginTop: 9,
              alignment: "center",
              image: "firma_paci",
              width: 105,
              height: 70,
            },
            {
              marginTop: 9,
              marginLeft: 8,
              image: "huella_paci",
              width: 55,
              height: 70,
            },
          ],
        },
        {
          marginTop: 10,
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "NOMBRE: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.paciente.descrip}`,
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "DOCUMENTO: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.paciente.cod}`,
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
          text: "TUTOR O ACOMPAÑANTE (FIRMA / HUELLA)",

          alignment: "center",
          style: "tableNoBold",
          bold: true,
        },
        {
          text: "(EN CASO DE NO FIRMAR)",
          alignment: "center",
          style: "tableNoBold",
          fontSize: 6,
        },
        {
          marginTop: 8,
          alignment: "center",
          image: "firma_acomp",
          width: 130,
          height: 70,
        },
        {
          marginTop: 10,
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "NOMBRE: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.acomp.descrip}`,
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "DOCUMENTO: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.acomp.cod}`,
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "PARENTESCO: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${evaluarParentesco(datos.paren_acomp)}`,
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
          style: "tableNoBold",
          bold: true,
        },
        {
          marginTop: 8,
          alignment: "center",
          image: "firma_profesional",
          width: 130,
          height: 70,
        },
        {
          marginTop: 8,
          text: [
            {
              text: "NOMBRE: ",
              style: "tableNoBold",
              bold: true,
            },
            {
              text: `${datos.prof.descrip}`,
              style: "tableNoBold",
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "PROFESIONAL AREA DE:",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.prof.descrip_atiende}`,
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "DOCUMENTO: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.prof.cod}`,
            },
          ],
        },
      ],
    };
  }

  function firmas() {
    let firmasArray = [];
    let anchos = [];

    if (datos.firmas.firma_paci) {
      firmasArray.push(firmaPaciente());
    }

    if (datos.firmas.firma_acomp) {
      firmasArray.push(firmaAcompanante());
    }

    if (datos.firmas.firma_prof) {
      firmasArray.push(firmaProfesional());
    }

    if (firmasArray.length == 2) {
      firmasArray.unshift({ border: [false, false, false, false], text: "" });
      anchos = ["10%", "40%", "40%"];
    } else if (firmasArray.length == 3) anchos = ["33%", "34%", "33%"];
    return {
      marginTop: 30,
      table: {
        widths: anchos,
        body: [[...firmasArray]],
      },
    };
  }

  return dd;
};
