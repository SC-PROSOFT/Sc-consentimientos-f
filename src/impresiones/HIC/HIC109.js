import { evaluarParentesco } from "@/formatos/utils";
export const impresionHIC109 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC109(), firmas()],
  };

  function contenidoHIC109() {
    return {
      stack: [
        {
          marginTop: 1,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La puntación se calcula a partir de   diez preguntas de SI/NO, con un punto por cada respuesta afirmativa: ",
        },
        {
          marginTop: 10,
          table: {
            widths: ["94%", "3%", "3%"],
            body: [
              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Pregunta",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "SI" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "NO" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "1. Sex. Sexo Masculino",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "2. Age:  Edad (menor de 19 ó mayor 45 años)",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "3. Depression: Depresión",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_3 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_3 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "4. Previous Attempt: Intentos de suicidio previos",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_4 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_4 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "5. Ethanol abuse: Abuso de alcohol",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_5 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_5 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "6. Rational thinking los: Trastornos cognitivos",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_6 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_6 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "7. Social supports lacking: Sin apoyo social",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_7 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_7 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "8. Organized plan: Plan organizado de suicidio",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_8 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_8 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "9. No spouse: Sin pareja estable",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_9 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_9 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "10. Sickness: Enfermedad somática",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "N" ? "X" : "" },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Interpretación ",
        },
        {
          marginTop: 10,
          table: {
            widths: ["20%", "20%", "60%"],
            body: [
              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Puntos",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "Riesgo" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "Recomendaciones" },
              ],
              [
                {
                  alignment: "left",
                  style: "bodyNoBold9",
                  text: "0-2 Puntos",
                },
                { alignment: "left", style: "bodyNoBold9", text: "Sin riesgo" },
                { alignment: "left", style: "bodyNoBold9", text: "Alta con seguimiento ambulatorio." },
              ],
              [
                {
                  alignment: "left",
                  style: "bodyNoBold9",
                  text: "3-4 Puntos",
                },
                { alignment: "left", style: "bodyNoBold9", text: "Riesgo bajo" },
                { alignment: "left", style: "bodyNoBold9", text: "Seguimiento ambulatorio intensivo - Considerar ingreso psiquiátrico." },
              ],
              [
                {
                  alignment: "left",
                  style: "bodyNoBold9",
                  text: "5-6 Puntos",
                },
                { alignment: "left", style: "bodyNoBold9", text: "Riesgo medio" },
                { alignment: "left", style: "bodyNoBold9", text: "Si no hay apoyo familiar estrecho debe internarse." },
              ],
              [
                {
                  alignment: "left",
                  style: "bodyNoBold9",
                  text: "7-10 Puntos",
                },
                { alignment: "left", style: "bodyNoBold9", text: "Riesgo alto" },
                { alignment: "left", style: "bodyNoBold9", text: "Ingreso. Riesgo de intento inminente." },
              ],
            ],
          },
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
