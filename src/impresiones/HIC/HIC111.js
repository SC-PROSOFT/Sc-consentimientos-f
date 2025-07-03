import { evaluarParentesco } from "@/formatos/utils";
export const impresionHIC111 = ({ datos }) => {
  console.log("impresionHIC111 -> ", datos);

  var dd = {
    stack: [contenidoHIC111(), firmas()],
  };

  function contenidoHIC111() {
    return {
      stack: [
        {
          marginTop: 1,
          bold: true,
          style: "bodyNoBold9",
          text: "ASSIST - TEST SMOKING AND SUBSTANCE INVOLVEMENT SCREENING TEST",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "APLICACIÓN DEL INSTRUMENTO",
        },
        {
          marginTop: 5,
          bold: true,
          style: "bodyNoBold9",
          text: "INTRODUCCIÓN (Léalo por favor al participante)",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Entrevista sobre el alcohol, tabaco y otras drogas. Le voy hacer algunas preguntas sobre su experiencia de consumo de sustancias a lo largo de su vida, así como en los últimos tres meses. Estas sustancias pueden ser fumadas, ingeridas, inhaladas, inyectadas o consumidas en forma de pastillas (muestre la tarjeta de drogas).",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Algunas de las sustancias incluidas pueden haber sido recetadas por un médico (p.ej. pastillas adelgazantes, tranquilizantes, o determinados medicamentos para el dolor). Para esta entrevista, no vamos a anotar fármacos que hayan sido consumidos tal como han sido prescritos por su médico. Sin embargo, si ha tomado alguno de estos medicamentos por motivos distintos a los que fueron prescritos o los toma más frecuentemente o a dosis más altas a las prescritas, entonces díganoslo. Si bien estamos interesados en conocer su consumo de diversas drogas, por favor tenga por seguro que esta información será tratada con absoluta confidencialidad.",
        },
        {
          marginTop: 5,
          bold: true,
          style: "bodyNoBold9",
          text: "NOTA: ANTES DE FORMULAR LAS PREGUNTAS, ENTREGUE LAS TARJETAS DE RESPUESTA A LOS PARTICIPANTES",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Pregunta 1",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "(Al completar el seguimiento compare por favor las respuestas del participante con las que dio a la P1 del cuestionario basal. Cualquier diferencia en estas preguntas debe ser explorada).",
        },
        {
          marginTop: 10,
          table: {
            widths: ["90%", "5%", "5%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "A lo largo de su vida, ¿Cuál de las siguientes sustancias ha consumido alguna vez? (SOLO PARA USOS NO-MÉDICOS)",
                },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(0) No" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(3) Si" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "a. Tabaco (cigarrillos, cigarros habanos, tabaco de mascar, pipa, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[0].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[0].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[1].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[1].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "c. Cannabis (marihuana, costo, hierba, hashish, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[2].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[2].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "d. Cocaína (coca, farlopa, crack, base, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[3].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[3].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[4].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[4].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[5].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[5].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[6].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[6].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[7].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[7].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[8].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[8].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "j. Otros ",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[8].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta1[8].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "especifique: " + datos.otros_1,
                  colSpan: 3,
                },
                {},
                {},
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
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "Compruebe si todas las respuestas son negativas:" },
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "Si contestó 'No' a todos los ítems, pare la entrevista." },
              ],
              [
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "“¿Tampoco incluso cuando iba al colegio?”" },
                {
                  bold: true,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Si contestó 'Si' a alguno de estos ítems, siga a la Pregunta 2 para cada sustancia que ha consumido alguna vez.",
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Pregunta 2",
        },
        {
          marginTop: 10,
          table: {
            widths: ["50%", "10%", "10%", "10%", "10%", "10%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "¿Con qué frecuencia ha consumido las sustancias que ha mencionado en los últimos tres meses, (PRIMERA DROGA, SEGUNDA DROGA, ETC)?",
                },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(0) Nunca" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(2) 1 ó 2 veces" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(3) Cada mes" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(4) Cada semana" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(6) A diario o casi a diario" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "a. Tabaco (cigarrillos, cigarros habanos, tabaco de mascar, pipa, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[0].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[0].respuesta == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[0].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[0].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[0].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[1].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[1].respuesta == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[1].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[1].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[1].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "c. Cannabis (marihuana, costo, hierba, hashish, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[2].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[2].respuesta == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[2].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[2].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[2].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "d. Cocaína (coca, farlopa, crack, base, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[3].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[3].respuesta == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[3].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[3].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[3].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[4].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[4].respuesta == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[4].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[4].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[4].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[5].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[5].respuesta == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[5].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[5].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[5].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).	",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[6].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[6].respuesta == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[6].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[6].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[6].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[7].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[7].respuesta == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[7].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[7].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[7].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[8].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[8].respuesta == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[8].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[8].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[8].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "j. Otros.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[9].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[9].respuesta == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[9].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[9].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta2[9].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "especifique: " + datos.otros_2,
                  colSpan: 6,
                },
                {},
                {},
                {},
                {},
                {},
              ],
            ],
          },
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Si ha respondido 'Nunca' a todos los ítems en la Pregunta 2, salte a la Pregunta 6.",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Si ha consumido alguna de las sustancias de la Pregunta 2 en los últimos tres meses, continúe con las preguntas 3, 4 & 5 para cada una de las sustancias que ha consumido.",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Pregunta 3",
        },
        {
          marginTop: 10,
          table: {
            widths: ["50%", "10%", "10%", "10%", "10%", "10%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "En los últimos tres meses, ¿con qué frecuencia ha tenido deseos fuertes o ansias de consumir (PRIMERA DROGA, SEGUNDA DROGA, ETC)?",
                },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(0) Nunca" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(3) 1 ó 2 veces" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(4) Cada mes" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(5) Cada semana" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(6) A diario o casi a diario" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "a. Tabaco (cigarrillos, cigarros habanos, tabaco de mascar, pipa, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[0].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[0].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[0].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[0].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[0].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[1].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[1].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[1].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[1].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[1].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "c. Cannabis (marihuana, costo, hierba, hashish, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[2].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[2].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[2].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[2].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[2].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "d. Cocaína (coca, farlopa, crack, base, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[3].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[3].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[3].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[3].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[3].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[4].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[4].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[4].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[4].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[4].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[5].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[5].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[5].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[5].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[5].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[6].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[6].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[6].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[6].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[6].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[7].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[7].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[7].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[7].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[7].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[8].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[8].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[8].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[8].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[8].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "j. Otros.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[9].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[9].respuesta == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[9].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[9].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta3[9].respuesta == "6" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "especifique: " + datos.otros_3,
                  colSpan: 6,
                },
                {},
                {},
                {},
                {},
                {},
              ],
            ],
          },
        },
        //
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Pregunta 4",
        },
        {
          marginTop: 10,
          table: {
            widths: ["50%", "10%", "10%", "10%", "10%", "10%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "En los últimos tres meses, ¿con qué frecuencia le ha llevado su consumo de (PRIMERA DROGA, SEGUNDA DROGA, ETC) a problemas de salud, sociales, legales o económicos?",
                },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(0) Nunca" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(4) 1 ó 2 veces" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(5) Cada mes" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(6) Cada semana" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(7) A diario o casi a diario" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "a. Tabaco (cigarrillos, cigarros habanos, tabaco de mascar, pipa, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[0].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[0].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[0].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[0].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[0].respuesta == "7" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[1].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[1].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[1].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[1].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[1].respuesta == "7" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "c. Cannabis (marihuana, costo, hierba, hashish, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[2].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[2].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[2].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[2].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[2].respuesta == "7" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "d. Cocaína (coca, farlopa, crack, base, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[3].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[3].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[3].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[3].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[3].respuesta == "7" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[4].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[4].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[4].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[4].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[4].respuesta == "7" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[5].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[5].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[5].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[5].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[5].respuesta == "7" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[6].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[6].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[6].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[6].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[6].respuesta == "7" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[7].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[7].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[7].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[7].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[7].respuesta == "7" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[8].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[8].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[8].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[8].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[8].respuesta == "7" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "j. Otros.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[9].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[9].respuesta == "4" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[9].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[9].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta4[9].respuesta == "7" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "especifique: " + datos.otros_4,
                  colSpan: 6,
                },
                {},
                {},
                {},
                {},
                {},
              ],
            ],
          },
        },
        //
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Pregunta 5",
        },
        {
          marginTop: 10,
          table: {
            widths: ["50%", "10%", "10%", "10%", "10%", "10%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "En los últimos tres meses, ¿con qué frecuencia no pudo atender sus obligaciones por el consumo de (PRIMERA DROGA, SEGUNDA DROGA, ETC)?",
                },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(0) Nunca" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(5) 1 ó 2 veces" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(6) Cada mes" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(7) Cada semana" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(8) A diario o casi a diario" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "a. Tabaco.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[0].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[0].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[0].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[0].respuesta == "7" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[0].respuesta == "8" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[1].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[1].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[1].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[1].respuesta == "7" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[1].respuesta == "8" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "c. Cannabis (marihuana, costo, hierba, hashish, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[2].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[2].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[2].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[2].respuesta == "7" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[2].respuesta == "8" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "d. Cocaína (coca, farlopa, crack, base, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[3].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[3].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[3].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[3].respuesta == "7" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[3].respuesta == "8" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[4].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[4].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[4].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[4].respuesta == "7" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[4].respuesta == "8" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[5].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[5].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[5].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[5].respuesta == "7" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[5].respuesta == "8" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[6].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[6].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[6].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[6].respuesta == "7" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[6].respuesta == "8" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[7].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[7].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[7].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[7].respuesta == "7" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[7].respuesta == "8" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[8].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[8].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[8].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[8].respuesta == "7" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[8].respuesta == "8" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "j. Otros.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[9].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[9].respuesta == "5" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[9].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[9].respuesta == "7" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta5[9].respuesta == "8" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "especifique: " + datos.otros_5,
                  colSpan: 6,
                },
                {},
                {},
                {},
                {},
                {},
              ],
            ],
          },
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Haga las preguntas 6 y 7 para todas las sustancias que ha consumido alguna vez (es decir, aquellas abordadas en la Pregunta 1)",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Pregunta 6",
        },
        {
          marginTop: 10,
          table: {
            widths: ["63%", "6%", "14%", "17%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Un amigo, un familiar o alguien más, ¿alguna vez ha mostrado preocupación por su consumo de (PRIMERA DROGA, SEGUNDA DROGA, ETC)?",
                },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(0) No nunca" },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "(6) Si, en los últimos 3 meses",
                },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "(3) Sí, pero no en los últimos 3 meses",
                },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "a. Tabaco (cigarrillos, cigarros habanos, tabaco de mascar, pipa, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[0].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[0].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[0].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[1].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[1].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[1].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "c. Cannabis (marihuana, costo, hierba, hashish, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[2].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[2].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[2].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "d. Cocaína (coca, farlopa, crack, base, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[3].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[3].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[3].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[4].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[4].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[4].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[5].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[5].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[5].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[6].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[6].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[6].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[7].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[7].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[7].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[8].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[8].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[8].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "j. Otros.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[9].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[9].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta6[9].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "especifique: " + datos.otros_6,
                  colSpan: 4,
                },
                {},
                {},
                {},
              ],
            ],
          },
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Pregunta 7",
        },
        {
          marginTop: 10,
          table: {
            widths: ["55%", "10%", "15%", "20%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "¿Ha intentado alguna vez controlar, reducir o dejar de consumir (PRIMERA DROGA, SEGUNDA DROGA, ETC) y no lo ha logrado?",
                },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(0) No nunca" },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "(6) Si, en los últimos 3 meses",
                },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "(3) Sí, pero no en los últimos 3 meses",
                },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "a. Tabaco (cigarrillos, cigarros habanos, tabaco de mascar, pipa, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[0].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[0].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[0].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[1].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[1].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[1].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "c. Cannabis (marihuana, costo, hierba, hashish, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[2].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[2].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[2].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "d. Cocaína (coca, farlopa, crack, base, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[3].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[3].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[3].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[4].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[4].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[4].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[5].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[5].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[5].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[6].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[6].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[6].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[7].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[7].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[7].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.).",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[8].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[8].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[8].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "j. Otros.",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[9].respuesta == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[9].respuesta == "6" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.tabla_respuesta7[9].respuesta == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "especifique: " + datos.otros_7,
                  colSpan: 4,
                },
                {},
                {},
                {},
              ],
            ],
          },
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Pregunta 8",
        },
        {
          marginTop: 10,
          table: {
            widths: ["50%", "15%", "15%", "20%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Pregunta",
                },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "(0) No nunca" },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "(2) Si, en los últimos 3 meses",
                },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "(1) Sí, pero no en los últimos 3 meses",
                },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "a. ¿Ha consumido alguna vez alguna droga por vía inyectada? (ÚNICAMENTE PARA USOS NO MÉDICOS)?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_8 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_8 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_8 == "1" ? "X" : "" },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "NOTA IMPORTANTE",
        },
        {
          marginTop: 1,
          style: "bodyNoBold9",
          text: "A los pacientes que se han inyectado drogas en los últimos 3 meses se les debe preguntar sobre su patrón de inyección en este período, para determinar los niveles de riesgo y el mejor tipo de intervención.",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Requiere mayor evaluación y tratamiento más intensivo *",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "INTERPRETACIÓN DE LOS RESULTADOS",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Para cada sustancia (etiquetadas de la a. la j.) sume las puntuaciones de las preguntas 2 a la 7, ambas inclusive. No incluya los resultados ni de la pregunta 1 ni de la 8 en esta puntuación. Por ejemplo, la puntuación para el cannabis se calcula como: P2c + P3c + P4c + P5c + P6c + P7c Note que la P5 para el tabaco no está codificada, y se calcula como: P2a + P3a + P4a + P6a + P7a.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "EL TIPO DE INTERVENCIÓN SE DETERMINA POR LA PUNTUACIÓN ESPECÍFICA DEL PACIENTE PARA CADA SUSTANCIA.",
        },
        //
        {
          marginTop: 10,
          table: {
            widths: ["15%", "40%", "12%", "13%", "20%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Sustancia",
                },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,

                  style: "bodyNoBold9",
                  text: "Registre la puntuación para sustancia específica",
                },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Sin intervención",
                },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Intervención breve",
                },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Tratamiento más intensivo*",
                },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "a.  Tabaco",
                },
                { bold: true, style: "bodyNoBold9", text: totalTabaco() },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "0 - 3" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "4 - 26" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "27 +" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "b.  Alcohol",
                },
                { bold: true, style: "bodyNoBold9", text: totalAlcohol() },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "0 - 10" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "11 - 26" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "27 +" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "c.	Cannabis",
                },
                { bold: true, style: "bodyNoBold9", text: totalCannabis() },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "0 - 3" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "4 - 26" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "27 +" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "d.  Cocaína",
                },
                { bold: true, style: "bodyNoBold9", text: totalCocaina() },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "0 - 3" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "4 - 26" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "27 +" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "e.  Anfetaminas",
                },
                { bold: true, style: "bodyNoBold9", text: totalAnfetaminas() },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "0 - 3" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "4 - 26" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "27 +" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "f.	Inhalantes",
                },
                { bold: true, style: "bodyNoBold9", text: totalInhalantes() },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "0 - 3" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "4 - 26" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "27 +" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "g.  Sedantes",
                },
                { bold: true, style: "bodyNoBold9", text: totalSedantes() },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "0 - 3" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "4 - 26" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "27 +" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "h.  Alucinógenos",
                },
                { bold: true, style: "bodyNoBold9", text: totalAlucinogenos() },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "0 - 3" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "4 - 26" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "27 +" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "i.	Opiáceos",
                },
                { bold: true, style: "bodyNoBold9", text: totalOpiaceos() },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "0 - 3" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "4 - 26" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "27 +" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "j.	Otras drogas",
                },
                { bold: true, style: "bodyNoBold9", text: totalOtrasDrogas() },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "0 - 3" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "4 - 26" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: "27 +" },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "NOTA: *UNA MAYOR EVALUACIÓN Y TRATAMIENTO MÁS INTENSIVO puede ser proporcionado por profesionales sanitarios dentro del ámbito de Atención Primaria, o por un servicio especializado para las adicciones cuando esté disponible.",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Alcohol, Smoking and Substance Involvement Screening Test (OMS ASSIST V3.0) TARJETAS DE RESPUESTA para los Pacientes",
        },
        {
          marginTop: 10,
          table: {
            widths: ["40%", "20%", "40%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Sustancia",
                },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Puntuación",
                },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Nivel de riesgo",
                },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "a. Productos derivados del tabaco",
                },
                { style: "bodyNoBold9", text: totalTabaco() },
                {
                  text: [
                    {
                      style: "bodyNoBold9",
                      text: "0 - 3 = Bajo, 4 - 26 = Moderado, 27+ = Alto  \n",
                    },
                  ],
                },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "b. Bebidas alcohólicas",
                },
                { style: "bodyNoBold9", text: totalAlcohol() },
                {
                  text: [
                    {
                      style: "bodyNoBold9",
                      text: "0 - 10 = Bajo, 11 - 26 = Moderado, 27+ = Alto  \n",
                    },
                  ],
                },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "c. Cannabis",
                },
                { style: "bodyNoBold9", text: totalCannabis() },
                {
                  text: [
                    {
                      style: "bodyNoBold9",
                      text: "0 - 3 = Bajo, 4 - 26 = Moderado, 27+ = Alto  \n",
                    },
                  ],
                },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "d. Cocaína",
                },
                { style: "bodyNoBold9", text: totalCocaina() },
                {
                  text: [
                    {
                      style: "bodyNoBold9",
                      text: "0 - 3 = Bajo, 4 - 26 = Moderado, 27+ = Alto  \n",
                    },
                  ],
                },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "e. Estimulantes de tipo anfetamínico",
                },
                { style: "bodyNoBold9", text: totalAnfetaminas() },
                {
                  text: [
                    {
                      style: "bodyNoBold9",
                      text: "0 - 3 = Bajo, 4 - 26 = Moderado, 27+ = Alto  \n",
                    },
                  ],
                },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "f. Inhalantes",
                },
                { style: "bodyNoBold9", text: totalInhalantes() },
                {
                  text: [
                    {
                      style: "bodyNoBold9",
                      text: "0 - 3 = Bajo, 4 - 26 = Moderado, 27+ = Alto  \n",
                    },
                  ],
                },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "g. Sedantes o pastillas para dormir",
                },
                { style: "bodyNoBold9", text: totalSedantes() },
                {
                  text: [
                    {
                      style: "bodyNoBold9",
                      text: "0 - 3 = Bajo, 4 - 26 = Moderado, 27+ = Alto  \n",
                    },
                  ],
                },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "h. Alucinógenos",
                },
                { style: "bodyNoBold9", text: totalAlucinogenos() },
                {
                  text: [
                    {
                      style: "bodyNoBold9",
                      text: "0 - 3 = Bajo, 4 - 26 = Moderado, 27+ = Alto  \n",
                    },
                  ],
                },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "i. Opiáceos",
                },
                { style: "bodyNoBold9", text: totalOpiaceos() },
                {
                  text: [
                    {
                      style: "bodyNoBold9",
                      text: "0 - 3 = Bajo, 4 - 26 = Moderado, 27+ = Alto  \n",
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          bold: true,
          alignment: "center",
          style: "bodyNoBold9",
          text: "¿Qué significan sus puntuaciones?",
        },
        {
          marginTop: 5,
          bold: true,
          style: "bodyNoBold9",
          text: "BAJO",
        },
        {
          marginTop: 2,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Su actual patrón de consumo representa un riesgo bajo sobre su salud y de otros problemas.",
        },
        {
          marginTop: 5,
          bold: true,
          style: "bodyNoBold9",
          text: "MODERADO",
        },
        {
          marginTop: 2,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Usted presenta riesgo para su salud y de otros tipos de problemas derivados de su actual patrón de consumo de sustancias.",
        },
        {
          marginTop: 5,
          bold: true,
          style: "bodyNoBold9",
          text: "ALTO",
        },
        {
          marginTop: 2,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Usted presenta un riesgo elevado de experimentar problemas graves (de salud, sociales, económicos, legales, de pareja u otros) derivado de su patrón.",
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
  function totalTabaco() {
    return (
      (Number(datos.tabla_respuesta2[0].respuesta) || 0) +
      (Number(datos.tabla_respuesta3[0].respuesta) || 0) +
      (Number(datos.tabla_respuesta4[0].respuesta) || 0) +
      (Number(datos.tabla_respuesta5[0].respuesta) || 0) +
      (Number(datos.tabla_respuesta6[0].respuesta) || 0) +
      (Number(datos.tabla_respuesta7[0].respuesta) || 0)
    );
  }
  function totalAlcohol() {
    return (
      (Number(datos.tabla_respuesta2[1].respuesta) || 0) +
      (Number(datos.tabla_respuesta3[1].respuesta) || 0) +
      (Number(datos.tabla_respuesta4[1].respuesta) || 0) +
      (Number(datos.tabla_respuesta5[1].respuesta) || 0) +
      (Number(datos.tabla_respuesta6[1].respuesta) || 0) +
      (Number(datos.tabla_respuesta7[1].respuesta) || 0)
    );
  }
  function totalCannabis() {
    return (
      (Number(datos.tabla_respuesta2[2].respuesta) || 0) +
      (Number(datos.tabla_respuesta3[2].respuesta) || 0) +
      (Number(datos.tabla_respuesta4[2].respuesta) || 0) +
      (Number(datos.tabla_respuesta5[2].respuesta) || 0) +
      (Number(datos.tabla_respuesta6[2].respuesta) || 0) +
      (Number(datos.tabla_respuesta7[2].respuesta) || 0)
    );
  }
  function totalCocaina() {
    return (
      (Number(datos.tabla_respuesta2[3].respuesta) || 0) +
      (Number(datos.tabla_respuesta3[3].respuesta) || 0) +
      (Number(datos.tabla_respuesta4[3].respuesta) || 0) +
      (Number(datos.tabla_respuesta5[3].respuesta) || 0) +
      (Number(datos.tabla_respuesta6[3].respuesta) || 0) +
      (Number(datos.tabla_respuesta7[3].respuesta) || 0)
    );
  }
  function totalAnfetaminas() {
    return (
      (Number(datos.tabla_respuesta2[4].respuesta) || 0) +
      (Number(datos.tabla_respuesta3[4].respuesta) || 0) +
      (Number(datos.tabla_respuesta4[4].respuesta) || 0) +
      (Number(datos.tabla_respuesta5[4].respuesta) || 0) +
      (Number(datos.tabla_respuesta6[4].respuesta) || 0) +
      (Number(datos.tabla_respuesta7[4].respuesta) || 0)
    );
  }
  function totalInhalantes() {
    return (
      (Number(datos.tabla_respuesta2[5].respuesta) || 0) +
      (Number(datos.tabla_respuesta3[5].respuesta) || 0) +
      (Number(datos.tabla_respuesta4[5].respuesta) || 0) +
      (Number(datos.tabla_respuesta5[5].respuesta) || 0) +
      (Number(datos.tabla_respuesta6[5].respuesta) || 0) +
      (Number(datos.tabla_respuesta7[5].respuesta) || 0)
    );
  }
  function totalSedantes() {
    return (
      (Number(datos.tabla_respuesta2[6].respuesta) || 0) +
      (Number(datos.tabla_respuesta3[6].respuesta) || 0) +
      (Number(datos.tabla_respuesta4[6].respuesta) || 0) +
      (Number(datos.tabla_respuesta5[6].respuesta) || 0) +
      (Number(datos.tabla_respuesta6[6].respuesta) || 0) +
      (Number(datos.tabla_respuesta7[6].respuesta) || 0)
    );
  }
  function totalAlucinogenos() {
    return (
      (Number(datos.tabla_respuesta2[7].respuesta) || 0) +
      (Number(datos.tabla_respuesta3[7].respuesta) || 0) +
      (Number(datos.tabla_respuesta4[7].respuesta) || 0) +
      (Number(datos.tabla_respuesta5[7].respuesta) || 0) +
      (Number(datos.tabla_respuesta6[7].respuesta) || 0) +
      (Number(datos.tabla_respuesta7[7].respuesta) || 0)
    );
  }
  function totalOpiaceos() {
    return (
      (Number(datos.tabla_respuesta2[8].respuesta) || 0) +
      (Number(datos.tabla_respuesta3[8].respuesta) || 0) +
      (Number(datos.tabla_respuesta4[8].respuesta) || 0) +
      (Number(datos.tabla_respuesta5[8].respuesta) || 0) +
      (Number(datos.tabla_respuesta6[8].respuesta) || 0) +
      (Number(datos.tabla_respuesta7[8].respuesta) || 0)
    );
  }
  function totalOtrasDrogas() {
    return (
      (Number(datos.tabla_respuesta2[9].respuesta) || 0) +
      (Number(datos.tabla_respuesta3[9].respuesta) || 0) +
      (Number(datos.tabla_respuesta4[9].respuesta) || 0) +
      (Number(datos.tabla_respuesta5[9].respuesta) || 0) +
      (Number(datos.tabla_respuesta6[9].respuesta) || 0) +
      (Number(datos.tabla_respuesta7[9].respuesta) || 0)
    );
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
