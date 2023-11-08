import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useApiContabilidad, useModuleFormatos } from "../store";

const { getImgBs64 } = useApiContabilidad();
const { getProf, getPaci } = useModuleFormatos();

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const impresionHC030 = ({ datos }) => {
  var dd = {
    stack: [contenidoCitologia(), firmas()],
  };

  function contenidoCitologia() {
    return {
      stack: [
        {
          text: `Historia clínica número: ${datos.llave}`,
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
          text: `Yo, ${datos.descrip} numero ${datos.cod} expedida en ${datos.descrip_ciudad} actuando en nombre propio.`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: "Comprendo que durante el procedimiento pueden aparecer circunstancias imprevisibles o inesperadas, que pueden requerir una extensión de otro procedimiento; acepto que las ciencias de la salud no son una ciencia exacta, que se garantizan resultados en la atención, y que, aunque son procedimientos seguros pueden presentarse complicaciones como:",
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginLeft: 20,
          marginTop: 5,
          marginBottom: 10,
          ul: ["SANGRADO.", "DOLOR.", "PELLIZCOS."],
          style: "bodyNoBold",
        },
        {
          text: `${datos.complicaciones}`,
          // canvas: [{ type: "line", x1: 0, y1: 0, x2: 545, y2: 0, lineWidth: 1.2, lineColor: "gray" }],
        },
        {
          marginTop: 10,
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
          layout: "noBorders",
          table: {
            widths: ["2%", "98%"],
            body: [
              [
                {
                  stack: cuadro_canvas(datos.autorizo ? true : false),
                },
                {
                  text: [
                    {
                      text: "Autorizo",
                      bold: true,
                      decoration: "underline",
                    },
                    {
                      text: " al personal asistencial de la ESE Salud Yopal, para la realización de los procedimientos de salud:",
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
                  text: "TOMA DE CITOLOGIA CERVICOVAGINAL, cuyo objetivo es: DETECCION TEMPRANA DE CANCER DE CERVIX, ante el diagnostico",
                  alignment: "justify",
                  style: "bodyNoBold",
                },
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
                  stack: cuadro_canvas(datos.autorizo ? false : true),
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
                      text: " el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento de: BLABLABLA \npor los siguientes motivos: MOTIVOS",
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
        {
          style: "tableNoBold",
          alignment: "justify",
          table: {
            widths: ["50%", "50%"],
            body: [
              [
                {
                  text: [
                    {
                      text: "FECHA DE ULTIMA CITOLOGIA CEVIOVAGINAL: ",
                    },
                    {
                      text: `${datos.fecha_ult_cito}`,
                    },
                  ],
                },
                {
                  text: `ANTECEDENTES GINECOLOGICOS: ${datos.antec_gineco}`,
                },
              ],
              [
                {
                  colSpan: 2,
                  stack: [
                    {
                      text: `Telefono 1: ${datos.telefono1}`,
                    },
                    {
                      text: `Telefono 2: ${datos.telefono2}`,
                    },
                  ],
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

  return dd;
};

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
        image: "firma_consen",
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
        image: "firma_profesional",
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
        image: "firma_consen",
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
    margin: [30, 10, 30, 0],
    stack: [
      {
        text: [
          {
            text: "MOTIVOS POR LOS QUE EL USUARIO NO FIRMA: 222222222222222 2222222222222222 22222 222222222 22222222 222222222222222222222222222222222222222222222 ",
            alignment: "justify",
            style: "tableNoBold",
            bold: true,
          },
        ],
      },
    ],
  };
}

function firmas(paciente_firma) {
  paciente_firma = "N";
  let firmasArray = [];
  let motivosArray = [];
  let margin = 0;
  let anchos = [];

  if (paciente_firma == "S") {
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
