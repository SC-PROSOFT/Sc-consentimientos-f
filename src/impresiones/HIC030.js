import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useApiContabilidad, useModuleFormatos } from "../store";
import { firmas } from "../formatos/utils";

const { getImgBs64 } = useApiContabilidad();
const { getProf } = useModuleFormatos();

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const impresionHC030 = ({ datos }) => {
  var dd = {
    stack: [contenidoCitologia(), firmas(datos)],
  };

  function contenidoCitologia() {
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
          text: "Yo, David Santiago Lozada Quintero, identificado (a) con cedula numero 1111111111 expedida en VILLAVICENCIO actuando en nombre propio.",
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
          canvas: [{ type: "line", x1: 0, y1: 0, x2: 545, y2: 0, lineWidth: 1.2, lineColor: "gray" }],
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
                  stack: cuadro_canvas("S"),
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
                  stack: cuadro_canvas("S"),
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
                      text: "02/11/2023",
                    },
                  ],
                },
                {
                  columns: [
                    {
                      width: 145,
                      text: "ANTECEDENTES GINECOLOGICOS: ",
                    },
                    {
                      width: 20,
                      text: "G: ",
                    },
                    {
                      width: 20,
                      text: "P: ",
                    },
                    {
                      width: 20,
                      text: "C: ",
                    },
                    {
                      width: 20,
                      text: "V: ",
                    },
                    {
                      width: 20,
                      text: "A: ",
                    },
                  ],
                },
              ],
              [
                {
                  colSpan: 2,
                  stack: [
                    {
                      text: "Telefono 1:",
                    },
                    {
                      text: "Telefono 2:",
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

