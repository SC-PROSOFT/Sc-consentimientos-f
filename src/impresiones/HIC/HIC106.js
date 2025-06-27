import { evaluarParentesco } from "@/formatos/utils";
export const impresionHIC106 = ({ datos }) => {
  console.log("impresionHIC106 -> ", datos);

  var dd = {
    stack: [contenidoHIC106(), firmas()],
  };

  function contenidoHIC106() {
    return {
      stack: [
        {
          marginTop: 10,
          table: {
            widths: ["52%", "10%", "12%", "14%", "12%"],
            body: [
              [
                {
                  bold: true,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Durante las últimas 2 semanas, ¿qué tan seguido se ha molestado por los siguientes problemas?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "(0) Para nada" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "(1) Algunos días" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "(2) Más de la mitad de los días" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "(3) Casi todos los días" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "1. Sentirse nervioso o ansioso.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "2. No poder detener  o controlar la preocupación.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "3. Preocuparse demasiado por  diferentes cosas.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_3 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_3 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_3 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_3 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "4. Dificultad para relajarse.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_4 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_4 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_4 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_4 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "5. Estar tan inquieto que es dificil quedarse quieto.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_5 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_5 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_5 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_5 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "6. Volverse Facilmente molesto  o irritable.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_6 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_6 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_6 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_6 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "7. Sentir miedo como si algo terrible pidiera suceder.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_7 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_7 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_7 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_7 == "3" ? "X" : "" },
              ],
            ],
          },
        },
        {
          marginTop: 1,
          bold: true,
          style: "bodyNoBold9",
          text: "Interpretación:",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La puntuación de 8 o superior representa un punto de corte razonable para identificar casos probables de ansiedad  generalizada.",
        },
        {
          marginTop: 5,
          ul: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: [{ text: "Puntuación de 0-4: " }, { bold: true, text: "Ansiedad Mínima." }],
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: [{ text: "Puntuación de 5-9: " }, { bold: true, text: "Ansiedad leve." }],
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: [{ text: "Puntuación 10-14: " }, { bold: true, text: "Ansiedad moderada." }],
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: [{ text: "Puntuación mayor a 15: " }, { bold: true, text: "Ansiedad Severa." }],
            },
          ],
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
