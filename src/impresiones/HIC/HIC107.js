import { evaluarParentesco } from "@/formatos/utils";
export const impresionHIC107 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC107(), firmas()],
  };

  function contenidoHIC107() {
    return {
      stack: [
        {
          marginTop: 1,
          bold: true,
          style: "bodyNoBold9",
          text: "DEFINICIÓN",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: " Este instrumento se aplica a las personas a partir de los 16 años de edad y consta de 30 preguntas, referidas a los últimos 30 días (el último mes).",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "APLICACIÓN DEL INSTRUMENTO",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Puede ser auto aplicado o a manera de entrevista estructurada. La persona responde SI o NO dependiendo de su vivencia.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Las primeras 20 preguntas se refieren a problemas de salud mental como depresión, ansiedad y otros. Once o más respuestas positivas en este grupo determinan una alta probabilidad de sufrir uno de estos problemas.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "De la 21 a la 24 evalúa posible psicosis. Con una respuesta positiva se considera un posible caso.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La respuesta positiva a la pregunta 25 indica alta probabilidad de sufrir un trastorno convulsivo.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Las preguntas 26 a 30 indican problemas relacionados con el alcohol; la respuesta positiva a una sola de ellas determina que la persona tiene alto riesgo de sufrir alcoholismo.",
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
                  text: "1. ¿Tiene frecuentes dolores de cabeza?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "2. ¿Tiene mal apetito?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "3. ¿Duerme mal?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_3 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_3 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "4. ¿Se asusta con facilidad?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_4 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_4 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "5. ¿Sufre de temblor de manos?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_5 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_5 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "6. ¿Se siente nervioso, tenso o aburrido?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_6 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_6 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "7. ¿Sufre de mala digestión?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_7 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_7 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "8. ¿No puede pensar con claridad?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_8 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_8 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "9. ¿Se siente triste?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_9 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_9 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "10. ¿Llora usted con mucha frecuencia?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "11. ¿Tiene dificultad en disfrutar sus actividades diarias?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_11 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_11 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "12. ¿Tiene dificultad para tomar decisiones?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_12 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_12 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "13. ¿Tiene dificultad en hacer su trabajo? (¿Sufre usted con su trabajo?)",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_13 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_13 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "14. ¿Es incapaz de desempeñar un papel útil en su vida?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_14 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_14 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "15. ¿Ha perdido interés en las cosas?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_15 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_15 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "16. ¿Siente que usted es una persona inútil?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_16 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_16 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "17. ¿Ha tenido la idea de acabar con su vida?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_17 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_17 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "18. ¿Se siente cansado todo el tiempo?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_18 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_18 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "19. ¿Tiene sensaciones desagradables en su estómago?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_19 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_19 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "20. ¿Se cansa con facilidad?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_20 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_20 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "21. ¿Siente usted que alguien ha tratado de herirlo en alguna forma?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_21 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_21 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "22. ¿Es usted una persona mucho más importante de lo que piensan los demás?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_22 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_22 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "23. ¿Ha notado interferencias o algo raro en su pensamiento?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_23 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_23 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "24. ¿Oye voces sin saber de dónde vienen o que otras personas no pueden oír?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_24 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_24 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "25. ¿Ha tenido convulsiones, ataques o caídas al suelo, con movimientos de brazos y piernas; con mordedura de la lengua o pérdida del conocimiento?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_25 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_25 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "26. ¿Alguna vez le ha parecido a su familia, sus amigos, su médico o a su sacerdote que usted estaba bebiendo demasiado licor?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_26 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_26 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "27. ¿Alguna vez ha querido dejar de beber, pero no ha podido?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_27 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_27 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "28. ¿Ha tenido alguna vez dificultades en el trabajo (o estudio) a causa de la bebida, como beber en el trabajo o en el colegio, o faltar a ellos?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_28 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_28 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "29. ¿Ha estado en riñas o lo han detenido estando borracho?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_29 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_29 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "30. ¿Le ha parecido alguna vez que usted bebía demasiado?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_30 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_30 == "N" ? "X" : "" },
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
