import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionHIC065 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC065(), firmas()],
  };

  function contenidoHIC065() {
    return {
      stack: [
        {
          marginTop: 8,
          text: [
            { style: "tableTitle", text: "Fecha: " },
            { style: "bodyNoBold9", text: datos.fecha },
          ],
        },
        {
          marginTop: 2,
          text: [
            { style: "tableTitle", text: "Nombre del paciente: " },
            { style: "bodyNoBold9", text: datos.paciente.descrip },
          ],
        },
        {
          marginTop: 2,
          text: [
            { style: "tableTitle", text: "Identificación: " },
            { style: "bodyNoBold9", text: datos.paciente.cod },
          ],
        },
        {
          marginTop: 2,
          text: [
            { style: "tableTitle", text: "Nombre del familiar/responsable (Si es menor de edad/Discapacidad): " },
            { style: "bodyNoBold9", text: datos.acomp.descrip },
          ],
        },
        {
          marginTop: 2,
          text: [
            { style: "tableTitle", text: "Identificación familiar/responsable: " },
            { style: "bodyNoBold9", text: datos.acomp.cod },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "left",
          text: "Por medio del presente consentimiento, acepto que se me realice la extracción de una muestra de sangre la cual será analizada en el laboratorio para determinación de antígeno de superficie para Hepatitis B.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: 'Se me ha explicado que el Antígeno de superficie de la hepatitis B (HBsAg)es una proteína que se encuentra en la superficie del virus de la hepatitis B que está presente en la sangre de la persona infectada. Si el resultado de esta prueba es positivo o "reactivo", significa que la hepatitis B está presente en el organismo y que soy portador de esta enfermedad.',
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Se me ha explicado sobre los beneficios de efectuarme el examen: Si hay infección, se puede dar tratamiento efectivo que retrasa el desarrollo de la enfermedad, y se puede prevenir contagiar a otros. También permite tomar precauciones con mi sangre y durante las relaciones sexuales, protegiéndome a mí mismo y a los demás.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          bold: true,
          italics: true,
          text: "Riesgos de la realización del examen: Leve dolor al momento de la punción, posible morado y sangrado escaso.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Entiendo que el examen es voluntario y que no estoy obligado a realizarme la prueba para identificar si poseo o no el virus antes mencionado.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          bold: true,
          text: "AUTORIZO al equipo de salud para realizar el procedimiento.",
        },
      ],
      styles: {
        bodyContent: {
          fontSize: 11,
          alignment: "justify",
        },
      },
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
