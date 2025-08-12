import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import dayjs from "dayjs";
export const impresionLAB035 = ({ datos }) => {
  console.log("impresionLAB035 -> ", datos);

  var dd = {
    stack: [contenidoLAB035(), firmas()],
  };

  function contenidoLAB035() {
    return {
      stack: [
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Fecha: ",
            },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.fecha },
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          columns: [
            { width: "50%", alignment: "left", text: [{ bold: true, text: "Remitente: " }, { text: datos.remitente }] },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Nombre del paciente: " }, { text: datos.paciente.descrip }] },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            { width: "30%", alignment: "left", text: [{ bold: true, text: "Tipo de documento de identidad: " }, { text: datos.paciente.tipo_id }] },
            { width: "45%", alignment: "center", text: [{ bold: true, text: "Número de documento de identidad: " }, { text: datos.paciente.cod }] },
            { width: "15%", alignment: "center", text: [{ bold: true, text: "Edad: " }, { text: calcularEdad(datos.paciente.nacim) }] },
            { width: "10%", alignment: "right", text: [{ bold: true, text: "Sexo: " }, { text: datos.paciente.sexo }] },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            {
              width: "30%",
              alignment: "left",
              text: [{ bold: true, text: "Fecha de nacimiento: " }, { text: dayjs(datos.paciente.nacim).format("YYYY-MM-DD") }],
            },
            { width: "70%", alignment: "right", text: [{ bold: true, text: "Dirección residencial: " }, { text: datos.paciente.direccion }] },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            {
              width: "50%",
              alignment: "left",
              text: [{ bold: true, text: "Ocupación: " }, { text: datos.paciente.descrip_ocup }],
            },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Regimen contributivo: " }, { text: datos.paciente.descrip_tipo_afil }] },
          ],
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Resultado de la prueba:",
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              style: "bodyNoBold9",
              text: "a. ",
            },
            {
              bold: true,
              decoration: "underline",
              style: "bodyNoBold9",
              text: datos.result_prb == "A" ? " X " : "     ",
            },
            {
              style: "bodyNoBold9",
              text: " ABS",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              style: "bodyNoBold9",
              text: "b. ",
            },
            {
              bold: true,
              decoration: "underline",
              style: "bodyNoBold9",
              text: datos.result_prb == "B" ? " X " : "     ",
            },
            {
              style: "bodyNoBold9",
              text: " PC",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              style: "bodyNoBold9",
              text: "c. ",
            },
            {
              bold: true,
              decoration: "underline",
              style: "bodyNoBold9",
              text: datos.result_prb == "C" ? " X " : "     ",
            },
            {
              style: "bodyNoBold9",
              text: " Otro",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              style: "bodyNoBold9",
              text: "Cual: ",
            },
            {
              style: "bodyNoBold9",
              text: datos.result_prb == "C" ? datos.otr_result : "",
            },
          ],
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Motivo de prueba:",
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              style: "bodyNoBold9",
              text: "a. ",
            },
            {
              bold: true,
              decoration: "underline",
              style: "bodyNoBold9",
              text: datos.motivo_prb == "A" ? " X " : "     ",
            },
            {
              style: "bodyNoBold9",
              text: " Conducta sexual de riesgo",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              style: "bodyNoBold9",
              text: "b. ",
            },
            {
              bold: true,
              decoration: "underline",
              style: "bodyNoBold9",
              text: datos.motivo_prb == "B" ? " X " : "     ",
            },
            {
              style: "bodyNoBold9",
              text: " DX perinatal",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              style: "bodyNoBold9",
              text: "c. ",
            },
            {
              bold: true,
              decoration: "underline",
              style: "bodyNoBold9",
              text: datos.motivo_prb == "C" ? " X " : "     ",
            },
            {
              style: "bodyNoBold9",
              text: " Sospecha clinica",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              style: "bodyNoBold9",
              text: "d. ",
            },
            {
              bold: true,
              decoration: "underline",
              style: "bodyNoBold9",
              text: datos.motivo_prb == "D" ? " X " : "     ",
            },
            {
              style: "bodyNoBold9",
              text: " Contacto VIH",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              style: "bodyNoBold9",
              text: "e. ",
            },
            {
              bold: true,
              decoration: "underline",
              style: "bodyNoBold9",
              text: datos.motivo_prb == "E" ? " X " : "     ",
            },
            {
              style: "bodyNoBold9",
              text: " Transfusiones antes de 1993",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              style: "bodyNoBold9",
              text: "f. ",
            },
            {
              bold: true,
              decoration: "underline",
              style: "bodyNoBold9",
              text: datos.motivo_prb == "F" ? " X " : "     ",
            },
            {
              style: "bodyNoBold9",
              text: " Uso de agujas",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              style: "bodyNoBold9",
              text: "g. ",
            },
            {
              bold: true,
              decoration: "underline",
              style: "bodyNoBold9",
              text: datos.motivo_prb == "G" ? " X " : "     ",
            },
            {
              style: "bodyNoBold9",
              text: " Tiempo de gestación",
            },
          ],
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          decoration: "underline",
          alignment: "center",
          text: "CONSENTIMIENTO INFORMADO",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Certifico que me han dado la información sobre:",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          ol: [
            "Propósito y beneficio de la prueba.",
            "Interpretación de la prueba.",
            "Limitaciones de la prueba.",
            "Posibles resultados de la prueba.",
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "que entiendo su contenido y que he discutido con la persona que me brindo la asesoría el procedimiento mediante el cual recibiré mis resultados y que estoy de acuerdo con el.",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "entiendo que la toma de la muestra es voluntaria y que puedo retirar mi consentimiento en cualquier momento antes de que sea tomado el examen.",
        },
      ],
    };
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
    let anchos = ["40%"];
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
  function cuadro_canvas_x(condicion) {
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
  function cuadro_canvas() {
    return [{ canvas: [{ type: "rect", x: 0, y: 0, h: 11, w: 12 }] }];
  }
  return dd;
};
