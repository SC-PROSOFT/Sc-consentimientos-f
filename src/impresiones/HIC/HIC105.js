import { evaluarParentesco } from "@/formatos/utils";
export const impresionHIC105 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC105(), firmas()],
  };

  function contenidoHIC105() {
    return {
      stack: [
        {
          marginTop: 1,
          bold: true,
          style: "bodyNoBold9",
          text: "TEST DE WHOOLEY PARA TAMIZACIÓN DE DEPRESIÓN",
        },
        {
          marginTop: 10,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Las preguntas de Whooley, son los dos ítems referidos al estado de ánimo y anhedonia del PHQ- 9. Se aplican en menos de un minuto y atendiendo a sus propiedades psicométricas han sido recomendadas para la identificación precoz (cribado) de la depresión en personas con factores de riesgo, que sean mayores de 18 años.",
        },
        {
          marginTop: 10,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "1.   ¿Durante los últimos 30 días se ha sentido a menudo desanimado, deprimido o con pocas esperanzas?   ",
            },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: "SI " },
            { bold: true, decoration: "underline", alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "S" ? " X " : "   " },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: "   NO " },
            { bold: true, decoration: "underline", alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "N" ? " X " : "   " },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "2.   ¿Durante los últimos 30 días ha sentido menudo poco interés o placer al hacer cosas que habitualmente disfrutaba?   ",
            },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: "SI " },
            { bold: true, decoration: "underline", alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "S" ? " X " : "   " },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: "   NO " },
            { bold: true, decoration: "underline", alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "N" ? " X " : "   " },
          ],
        },
        {
          marginTop: 10,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Si la respuesta a alguna de las dos preguntas es positiva, se debe realizar la valoración correspondiente para confirmar el diagnóstico de un episodio depresivo único o recurrente.",
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
  return dd;
};
