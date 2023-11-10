import pdfMake from "pdfmake/build/pdfmake";
import { evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHC036 = ({ datos }) => {
  console.log("🚀 ~ impresionHC036 ~ datos:", datos)
  var dd = {
    stack: [contenidoTDO(), firmas()],
  };

  function contenidoTDO() {
    return {
      stack: [
        {
          marginTop: 5,
          marginBottom: 10,
          columns: [
            {
              text: `Historia clínica número: ${datos.llave.slice(0, 2)}-${datos.llave.slice(2)}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
            {
              width: "auto",
              text: `Ciudad: ${datos.empresa.CIUDAD_USUAR}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
            {
              marginLeft: 50,
              width: "auto",
              text: `Fecha: ${dayjs(datos.empresa.FECHA_ACT).format("YYYY-MM-DD")}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
          ],
        },
        {
          style: "bodyNoBold",
          alignment: "justify",
          text: `Yo ${datos.paciente.descrip} identificado(a) con CC N°  ${datos.paciente.cod}, mayor de edad o representante legal, autorizo y me comprometo a ingresar a la modalidad de tratamiento de tuberculosis denominada TDO Virtual, mediante el uso de tecnologías de la información y comunicaciones como soporte a la administración del tratamiento antituberculoso, para lo cual se me ha informado, los aspectos claves de adherencia al tratamiento, los derechos y deberes y he dado lectura cuidadosa a los siguientes aspectos:`,
        },
        {
          marginTop: 10,
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
          marginTop: 10,
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
          marginTop: 10,
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
          marginTop: 10,
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
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Se me ha informado que los datos de identificación, registros de videos, mensajes de texto serán almacenados para fines de soportar el cumplimiento a la toma de medicación hasta por dos años, para lo cual, se protegerán mis datos personales conforme a la política de protección de datos y seguridad en la información.",
        },
        {
          marginTop: 5,
          marginBottom: 3,
          style: "bodyNoBold",
          alignment: "justify",
          text: "En constancia firma",
        },
        textoAutoriza(datos.autorizo),
      ],
    };
  }

  function textoAutoriza(autorizo) {
    const textoRevoca = {
      stack: [
        {
          layout: "noBorders",
          table: {
            widths: ["2%", "98%"],
            body: [
              [
                {
                  stack: cuadro_canvas(true),
                },
                {
                  text: [
                    {
                      text: `Yo ${datos.paciente.descrip} , con documento de identidad CC N°. ${datos.paciente.cod} expreso mi voluntad de `,
                    },
                    {
                      text: "revocar",
                      bold: true,
                      decoration: "underline",
                    },
                    {
                      text: `el consentimiento y declaro por tanto que, tras la información recibida, no consiento en someterme al procedimiento TDO por los siguientes motivos: ${datos.revocar_motivos}`,
                    },
                  ],
                  alignment: "justify",
                  style: "bodyNoBold",
                },
              ],
              [
                {
                  marginTop: -2,
                  marginBottom: 2,
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

    if (autorizo) return null;
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
          marginTop: 9,
          alignment: "center",
          image: "firma_paci",
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
          marginTop: 2,
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

  function firmas(condicion) {
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
      marginTop: 10,
      table: {
        widths: anchos,
        body: [[...firmasArray]],
      },
    };
  }

  return dd;
};
