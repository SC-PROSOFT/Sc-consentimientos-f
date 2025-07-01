import { evaluarParentesco } from "@/formatos/utils";

export const impresionHIC110 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC110(), firmas()],
  };

  function contenidoHIC110() {
    return {
      stack: [
        {
          table: {
            widths: ["5%", "20%", "60%", "15%"],
            body: [
              [
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "No.",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntaje acumulado" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Orientación en el tiempo" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntuación" },
              ],
              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "1",
                  rowSpan: 6,
                },
                {
                  marginTop: 1,
                  rowSpan: 6,
                  text: [
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Puntuación (máx. 5) \n",
                    },
                    { bold: true, alignment: "center", style: "bodyNoBold9", text: acumulado_1() + "/5" },
                  ],
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "Consigna: “diga en qué estamos”", colSpan: 2 },
                { text: "" },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "En qué año" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg1_1 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "En qué mes" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg1_2 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "En qué Día estamos (fecha)" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg1_3 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "En qué día de la semana" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg1_4 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "Hora aproximadamente" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg1_5 },
              ],
              //*
              [
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "No.",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntaje acumulado" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Orientación en el espacio" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntuación" },
              ],
              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "2",
                  rowSpan: 6,
                },
                {
                  marginTop: 1,
                  rowSpan: 6,
                  text: [
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Puntuación (máx. 5) \n",
                    },
                    { bold: true, alignment: "center", style: "bodyNoBold9", text: acumulado_2() + "/5" },
                  ],
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "Consigna: “diga en qué estamos”", colSpan: 2 },
                { text: "" },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "¿En qué lugar estamos ahora?" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg2_1 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "¿En qué piso o departamento estamos ahora?" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg2_2 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "¿Qué barrio o parroquia es este?" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg2_3 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "¿En qué ciudad estamos?" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg2_4 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "¿En qué país estamos?" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg2_5 },
              ],
              //
              [
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "No.",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntaje acumulado" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Memoria" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntuación" },
              ],
              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "3",
                  rowSpan: 6,
                },
                {
                  marginTop: 1,
                  rowSpan: 6,
                  text: [
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Puntuación (máx. 3) \n",
                    },
                    { bold: true, alignment: "center", style: "bodyNoBold9", text: acumulado_3() + "/3" },
                  ],
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "Consigna: “Diga las siguientes palabras”", colSpan: 2 },
                { text: "" },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "CASA" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg3_1 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "MESA" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg3_2 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "ÁRBOL" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg3_3 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                {
                  colSpan: 2,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Un segundo por cada una. Luego pída a la persona que las repita. Asignándole un punto por cada respuesta correcta. Si en un primer intento no logra repetir las palabras, repitalas hasta que la persona las registre.",
                },
                { text: "" },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "Anote el numero de Ensayos Requeridos" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg_3_nro_ensay },
              ],
              //
              [
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "No.",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntaje acumulado" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Atención y cálculo" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntuación" },
              ],
              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "4",
                  rowSpan: 6,
                },
                {
                  marginTop: 1,
                  rowSpan: 6,
                  text: [
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Puntuación (máx. 5) \n",
                    },
                    { bold: true, alignment: "center", style: "bodyNoBold9", text: acumulado_4() + "/5" },
                  ],
                },
                {
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Consigna: “ reste de 100 - 7 ” en forma sucesiva durante 5 veces. Registre un punto por cada respuesta correcta ( En caso de que la persona no sepa restar utilizar la siguiente alternativa: Decir los meses del año al revés: Diciembre, noviembre,oCTUBRE, SEPTIEMBRE, AGOSTO.",
                  colSpan: 2,
                },
                { text: "" },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "93" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg4_1 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "86" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg4_2 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "79" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg4_3 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "72" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg4_4 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "65" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg4_5 },
              ],
              //
              [
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "No.",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntaje acumulado" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Evocación" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntuación" },
              ],
              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "5",
                  rowSpan: 4,
                },
                {
                  marginTop: 1,
                  rowSpan: 4,
                  text: [
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Puntuación (máx. 3) \n",
                    },
                    { bold: true, alignment: "center", style: "bodyNoBold9", text: acumulado_5() + "/3" },
                  ],
                },
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Consigna: “Dígame los 3 objetos que le mencioné al principio”.",
                  colSpan: 2,
                },
                { text: "" },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "CASA" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg5_1 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "MESA" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg5_2 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "ÁRBOL" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg5_3 },
              ],
              //
              [
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "No.",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntaje acumulado" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Lenguaje" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntuación" },
              ],
              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "6",
                  rowSpan: 2,
                },
                {
                  marginTop: 1,
                  rowSpan: 2,
                  text: [
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Puntuación (máx. 3) \n",
                    },
                    { bold: true, alignment: "center", style: "bodyNoBold9", text: acumulado_6() + "/2" },
                  ],
                },
                { style: "bodyNoBold9", text: "Mostrarle un lápiz y preguntar ¿qué es esto?" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg6_1 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "Mostrarle un reloj y preguntar ¿qué es esto?" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg6_2 },
              ],
              //
              [
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "No.",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntaje acumulado" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Lenguaje" },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntuación" },
              ],
              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "7",
                  rowSpan: 2,
                },
                {
                  marginTop: 1,
                  rowSpan: 2,
                  text: [
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Puntuación (máx. 1) \n",
                    },
                    { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg7_1 + "/1" },
                  ],
                },
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Consigna: “repita la siguiente frase",
                  colSpan: 2,
                },
                { text: "" },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "En el trigal había cinco perros." },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg7_1 },
              ],
              //
              [
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "No.",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntaje acumulado" },
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Comprensión obedecer una orden en tres etapas",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntuación" },
              ],
              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "8",
                  rowSpan: 4,
                },
                {
                  marginTop: 1,
                  rowSpan: 4,
                  text: [
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Puntuación (máx. 3) \n",
                    },
                    { bold: true, alignment: "center", style: "bodyNoBold9", text: acumulado_8() + "/3" },
                  ],
                },
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Consigna: “A continuacion le voy a dar una orden, escuchela toda y realícela: “Tome esta hoja de papel con su mano derecha, dóblela por la mitad y póngala en el piso",
                  colSpan: 2,
                },
                { text: "" },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "Tome este papel con la mano derecha" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg8_1 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "Dóblelo por la mitad" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg8_2 },
              ],
              [
                {
                  text: "",
                },
                {
                  text: "",
                },
                { style: "bodyNoBold9", text: "Déjelo en suelo" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg8_3 },
              ],
              //
              [
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "No.",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntaje acumulado" },
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Para las siguiente dos ordenes utilice una tarjeta u hoja de papel que contenga la frase 'cierre los ojos'. Pídale a la que",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntuación" },
              ],
              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "9",
                },
                {
                  marginTop: 1,
                  text: [
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Puntuación (máx. 1) \n",
                    },
                    { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg9_1 + "/1" },
                  ],
                },
                { style: "bodyNoBold9", text: "lea y que haga lo que dice la frase que contiene la tarjeta" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg9_1 },
              ],
              //
              [
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "No.",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntaje acumulado" },
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntuación" },
              ],
              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "10",
                },
                {
                  marginTop: 1,
                  text: [
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Puntuación (máx. 1) \n",
                    },
                    { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg10_1 + "/1" },
                  ],
                },
                { style: "bodyNoBold9", text: "Consigna: Quiero que por favor escriba la frase que contiene la tarjeta" },
                { alignment: "center", style: "bodyNoBold9", text: datos.preg10_1 },
              ],
              //
              [
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "No.",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntaje acumulado" },
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: " ",
                },
                { bold: true, fillColor: "#6ca4c4", color: "white", alignment: "center", style: "bodyNoBold9", text: "Puntuación" },
              ],

              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "11",
                },
                {
                  marginTop: 1,
                  text: [
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Puntuación (máx. 1) \n",
                    },
                    { bold: true, alignment: "center", style: "bodyNoBold9", text: "0/1" },
                  ],
                },
                {
                  bold: true,
                  style: "bodyNoBold9",
                  stack: [
                    { text: "Consigna: Copie el siguiente diseño ( dos pentágonos cruzados en un ángulo) (dibujo)" },
                    {
                      marginTop: 9,
                      marginLeft: 5,
                      image: "pentagonos",
                      width: 100,
                    },
                  ],
                },
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "1",
                },
              ],
            ],
          },
        },

        {
          marginTop: 10,
          table: {
            widths: ["35%", "15%", "35%", "15%"],
            body: [
              [
                {
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Puntuación TOTAL: (máx. 30 puntos)",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "11/30" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "SUMATORIA PUNTAJE FINAL" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "11" },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          table: {
            widths: ["50%", "50%"],
            body: [
              [
                {
                  bold: true,
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "PUNTUACIONES DE REFERENCIA:",
                  colSpan: 2,
                },
                { text: "" },
              ],
              [
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "27- 30" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "Normal" },
              ],
              [
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "24 - 26" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "Sospecha Patológica" },
              ],
              [
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "12 a 23" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "Deterioro" },
              ],
              [
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "9 a 11" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "Demencia" },
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
  function acumulado_1() {
    return Number(datos.preg1_1) + Number(datos.preg1_2) + Number(datos.preg1_3) + Number(datos.preg1_4) + Number(datos.preg1_5);
  }
  function acumulado_2() {
    return Number(datos.preg2_1) + Number(datos.preg2_2) + Number(datos.preg2_3) + Number(datos.preg2_4) + Number(datos.preg2_5);
  }
  function acumulado_3() {
    return Number(datos.preg3_1) + Number(datos.preg3_2) + Number(datos.preg3_3);
  }
  function acumulado_4() {
    return Number(datos.preg4_1) + Number(datos.preg4_2) + Number(datos.preg4_3) + Number(datos.preg4_4) + Number(datos.preg4_5);
  }
  function acumulado_5() {
    return Number(datos.preg5_1) + Number(datos.preg5_2) + Number(datos.preg5_3);
  }
  function acumulado_6() {
    return Number(datos.preg6_1) + Number(datos.preg6_2);
  }
  function acumulado_8() {
    return Number(datos.preg8_1) + Number(datos.preg8_2) + Number(datos.preg8_3);
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
