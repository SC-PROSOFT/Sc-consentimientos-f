import { evaluarParentesco } from "@/formatos/utils";
import { calcEdad } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHIC035 = ({ datos }) => {
  var dd = {
    stack: [contenidoEISP(), firmas()],
  };

  function llenarFirmador() {
    const guion = "_________________________";
    const acomp = datos.acomp.cod.length;

    return {
      ciudad: () => (acomp ? datos.acomp.descrip_ciudad : datos.paciente.descrip_ciudad),
      direccion: () => (acomp ? datos.acomp.direccion : datos.paciente.direccion),
      telefono: () => (acomp ? datos.acomp.telefono : datos.paciente.telefono),
      descrip: () => (acomp ? datos.acomp.descrip : datos.paciente.descrip),
      nacim: () => (acomp ? datos.acomp.nacim : datos.paciente.nacim),
      sexo: () => (acomp ? datos.acomp.sexo : datos.paciente.sexo),
      cod: () => (acomp ? datos.acomp.cod : datos.paciente.cod),
      acudiente: () => (acomp ? datos.paciente.descrip : guion),
    };
  }

  function contenidoEISP() {
    return {
      stack: [
        {
          marginTop: 10,
          columns: [
            {
              text: `Historia clínica número: ${datos.llave.slice(0, 2)}-${datos.llave.slice(2)}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
            {
              width: "auto",
              text: `Ciudad: ${datos.empresa.ciudad_usuar}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
            {
              marginLeft: 50,
              width: "auto",
              text: `Fecha: ${dayjs(datos.empresa.fecha_act).format("YYYY-MM-DD")}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
          ],
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Yo ${llenarFirmador().descrip()} de ${calcEdad(
            llenarFirmador().nacim()
          )} años de edad, de genero ${llenarFirmador().sexo()} identificado(a) con documento de identidad N°: ${llenarFirmador().cod()}, expedida en ${llenarFirmador().direccion()} con residencia en ${llenarFirmador().ciudad()}, teléfono número ${llenarFirmador().telefono()} actuando en nombre propio o como acudiente de ${llenarFirmador().acudiente()}.`,
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Comprendo que durante el procedimiento pueden aparecer circunstancias imprevisibles o inesperadas, que pueden requerir una extensión de otro procedimiento y/o tratamiento; acepto que las ciencias de la salud no son una ciencia exacta, que se garantizan resultados en la atención, y que aunque son procedimientos seguros pueden presentarse complicaciones como: \n ${datos.complicaciones}`,
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Dejo constancia que he sido informado(a) y he recibido información y asesoría sobre el evento: ${datos.evento} respecto del modo de contagio, estrategias y métodos de prevención, importancia de diagnostico y tratamiento de la pareja de ser necesario a quien le informaré mi estado actual para que reciba la asesoría, tratamiento y seguimientos que se requieran para evitar reinfecciones y/o transmisión de la enfermedad a otras personas con quien se tenga contacto. Fui informado(a) de las acciones que se seguirán: tratamiento y controles que debo realizar posterior al tratamiento médico, al cual debo ser adherente, y recibir oportunamente y de manera adecuada; Por lo anterior me comprometo a seguir las indicaciones dadas por el profesional de la salud respecto al evento presentado, de no seguir las indicaciones los principales riesgos que se pueden presentar: resistencia a medicamentos, náuseas, mareos, vomito, gastritis, reinfecciones.`,
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Me han explicado también que de negarme a realizarme los exámenes diagnósticos, procedimientos y/o tratamientos ordenados, estoy asumiendo la responsabilidad por sus consecuencias, con lo que exonero de ellas el quipo asistencial tratante y la institución, sin embargo ello no significa que pierda mis derechos para una atención posterior.`,
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Se me ha informado que en la ${datos.empresa.nomusu}, cuenta con personal idóneo, competente y capacitado para la determinación de conductas terapéuticas que contribuyan a mejorar mi calidad de vida y salud. Doy constancia de que se me ha explicado en lenguaje sencillo claro, y entendible para mí, los aspectos relacionados con mi condición actual, los riesgos y beneficios de los procedimientos; se me ha permitido hacer todas las preguntas necesarias, y han sido resueltas satisfactoriamente.`,
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Por lo tanto, en forma consciente y voluntaria, sin haber sido objeto de coacción, persuasión, ni manipulación: \n`,
        },
        textoAutoriza(datos.autorizo, datos.disentimiento),
      ],
    };
  }

  function revocar(condicion) {
    if (!condicion) {
      return {
        stack: [
          {
            text: "REVOCATORIA DE CONSENTIMIENTO",
            alignment: "center",
            marginTop: 10,
            bold: true,
          },
          {
            marginTop: 10,
            text: `Yo ${datos.paciente.descrip} paciente de la ${datos.empresa.nomusu}, con C.C ${
              datos.paciente.cod
            } Expreso mi voluntad de revocar el consentimiento prestado en fecha ${dayjs(datos.empresa.fecha_act).format(
              "YYYY-MM-DD"
            )} y declaro por tanto que, tras la información recibida, no consiento en someterme al procedimiento de: ${
              datos.revoca_procedi || "_______________________________________"
            } por los siguientes motivos. ${datos.revoca_motivos}`,
            style: "bodyNoBold",
          },
        ],
      };
    } else return {};
  }

  function firmaHuellaPaci(huella_paci, cant_firmas) {
    let tamano_firma = 0;

    if (cant_firmas == 2) {
      tamano_firma = 105;
    } else {
      tamano_firma = 130;
    }
    const conHuella = {
      marginLeft: 3,
      columns: [
        {
          marginTop: 9,
          alignment: "center",
          image: "firma_paci",
          width: tamano_firma,
          height: 70,
        },
        {
          marginTop: 9,
          marginLeft: 5,
          image: "huella_paci",
          width: 55,
          height: 70,
        },
      ],
    };

    const sinHuella = {
      marginLeft: 3,
      marginTop: 9,
      alignment: "center",
      image: "firma_paci",
      width: tamano_firma,
      height: 70,
    };

    if (huella_paci) return conHuella;
    else return sinHuella;
  }

  function firmaPaciente(huella_paci, cant_firmas) {
    return {
      stack: [
        {
          text: "PACIENTE (FIRMA / HUELLA)",
          bold: true,
          alignment: "center",
          style: "tableNoBold",
        },
        firmaHuellaPaci(huella_paci, cant_firmas),
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

  function textoAutoriza(autorizo, disentir) {
    const textoAutorizo = {
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
                      text: "Autorizo",
                      bold: true,
                      decoration: "underline",
                    },
                    {
                      text: ` al personal asistencial de la ${datos.empresa.nomusu}, para la realización de los procedimientos de salud: ${datos.auto_procedimiento} , cuyo
                      objetivo es: ${datos.auto_objetivo}, ante el diagnostico: ${datos.diagnostico}`,
                    },
                  ],
                  alignment: "justify",
                  style: "bodyNoBold",
                },
              ],
              [
                {
                  marginBottom: 10,
                  marginTop: -2,
                  colSpan: 2,
                  text: `TOMA DE CITOLOGIA CERVICOVAGINAL, cuyo objetivo es: DETECCION TEMPRANA DE CANCER DE CERVIX, ante el diagnostico: ${datos.diagnostico}`,
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
                      text: "Expreso mi voluntad de ",
                    },
                    {
                      text: "revocar",
                      bold: true,
                      decoration: "underline",
                    },
                    {
                      text: `el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento de: EVENTOS DE INTERES EN SALUD PUBLICA \npor los siguientes motivos: ${datos.revoca_motivos}`,
                    },
                  ],
                  alignment: "justify",
                  style: "bodyNoBold",
                },
              ],
              [
                {
                  marginTop: -2,
                  marginBottom: 10,
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

    const textoDisiente = {
      stack: [
        {
          marginTop: 10,
          text: "DISENTIMIENTO",
          alignment: "center",
          style: "bodyNoBold",
          bold: true,
        },
        {
          marginTop: 5,
          text: [
            {
              text: `Yo, ${datos.acomp.cod.trim() ? datos.acomp.descrip : datos.paciente.descrip} identificado (a) con la CC No ${
                datos.acomp.cod.trim() ? datos.acomp.cod : datos.paciente.cod
              }, en calidad de paciente y/o acudiente, disiento este consentimiento que he prestado sobre la realización de la toma de EVENTOS DE INTERES EN SALUD PUBLICA (EISP). \n`,
            },
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 5,
          marginBottom: 10,
          text: [
            {
              text: "OBSERVACIONES:\n",
              marginTop: 15,
              bold: true,
            },
            {
              text: `${datos?.reg_coninf2?.obser_disenti}`,
            },
          ],

          alignment: "justify",
          style: "bodyNoBold",
        },
      ],
    };

    if (disentir == "S") return textoDisiente;
    else {
      if (autorizo) return textoAutorizo;
      else return textoRevoca;
    }
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

  function firmas(condicion) {
    let firmasArray = [];
    let anchos = [];
    let tamanoFirmasArray = 0;

    if (datos.firmas.firma_acomp) {
      firmasArray.push(firmaAcompanante());
    }

    if (datos.firmas.firma_prof) {
      firmasArray.push(firmaProfesional());
    }

    tamanoFirmasArray = firmasArray.length;

    if (datos.firmas.firma_paci) {
      firmasArray.unshift(firmaPaciente(datos.firmas.huella_paci, tamanoFirmasArray));
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
