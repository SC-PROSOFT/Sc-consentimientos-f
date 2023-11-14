import pdfMake from "pdfmake/build/pdfmake";
import { evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHC037 = ({ datos }) => {
  console.log("🚀 ~ impresionHC037 ~ datos:", datos);
  var dd = {
    stack: [contenidoRX(), firmas()],
  };

  function contenidoRX() {
    return {
      stack: [
        {
          marginTop: 8,
          text: `Historia clínica número: ${datos.llave.slice(0, 2)}-${datos.llave.slice(2)}`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 3,
          columns: [
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
          text: "Es deber de todo de todo profesional advertir oportunamente los riesgos que pueden derivarse del tratamiento que será practicado y a los que se expone teniendo en cuenta la solicitud de su médico tratante, solicitando el consentimiento informado ley 23 del 1981 (art 15 y 16).",
          bold: true,
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: "INFORMACION\n a continuación, se explica el proceso del examen el cual le van a practicar teniendo en cuenta la solicitud del médico tratante, es una exploración radiológica, en forma de RX, con el fin de proporcionar información diagnostica y tratar su enfermedad.",
          bold: true,
        },
        textoAutoriza(datos.autorizo),
      ],
    };
  }

  function textoAutoriza(autorizo) {
    const textoAutorizo = {
      stack: [
        {
          marginTop: 8,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Yo ${datos.paciente.descrip} identificada con cédula de ciudadanía No. ${datos.paciente.cod} de ${datos.paciente.descrip_ciudad} en forma voluntaria y en pleno uso de mis facultades mentales y psíquicas sin presión o inducción alguna, doy el consentimiento E.S.E salud Yopal -Hospital Central de Yopal, realice toma de RX. Acepto sus riesgos e imprevistos. Entiendo lo que he leído, se me ha explicado verbalmente y por escrito acerca del procedimiento, los cuidados que debo tener uso del chaleco plomado, los riesgos justificados y previsibles. También se me ha dado la oportunidad de preguntar y resolver dudas y recibí información del tecnólogo de radiología de nombre: ${datos.nombre_radiologo} CC ${datos.cedula_radiologo}.`,
        },
      ],
    };

    const textoRevoca = {
      stack: [
        {
          marginTop: 10,
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
              text: `el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento de: PRUEBAS RADIOLOGICAS EN PACIENTES EN ESTADO O SOSPECHA DE GESTACION.`,
            },
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 5,
          text: `Por los siguientes motivos: ${datos.revocar_motivos}`,
          alignment: "justify",
          style: "bodyNoBold",
        },
      ],
    };

    if (autorizo) return textoAutorizo;
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
