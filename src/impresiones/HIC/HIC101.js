import { evaluarParentesco } from "@/formatos/utils";

export const impresionHIC101 = ({ datos }) => {
  console.log("impresionHIC101 ", datos);

  var dd = {
    stack: [contenidoHIC101(), firmas()],
  };

  function contenidoHIC101() {
    return {
      stack: [
        {
          marginTop: 8,
          table: {
            widths: ["50%", "50%"],
            body: [
              [
                {
                  alignment: "left",
                  text: [
                    { bold: true, style: "tableTitle", text: "Nombre del paciente: " },
                    { style: "bodyNoBold9", text: datos.paciente.descrip },
                  ],
                },
                {
                  alignment: "left",
                  text: [
                    { bold: true, style: "tableTitle", text: "Tipo y número de documento de identificación: " },
                    { style: "bodyNoBold9", text: datos.paciente.tipo_id + " " + datos.paciente.cod },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 8,
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  alignment: "left",
                  text: [
                    { bold: true, style: "tableTitle", text: "Fecha: " },
                    { style: "bodyNoBold9", text: datos.fecha },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 8,
          bold: true,
          style: "bodyNoBold9",
          alignment: "center",
          italics: true,
          text: "Conteste a las siguientes cuestiones, haciendo referencia al último año.",
        },
        { marginTop: 13, style: "bodyNoBold9", text: "1. ¿Con que frecuencia toma alguna “bebida” que contenga alcohol?", bold: true, italics: true },
        {
          marginTop: 3,
          table: {
            widths: ["23%", "25%", "20%"],
            body: [
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Nunca ................................." },
                    {
                      image: datos.preg_1 == "a" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Una o menos veces al mes ..." },
                    {
                      image: datos.preg_1 == "b" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "2 - 4 veces al mes ......." },
                    {
                      image: datos.preg_1 == "c" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
              ],
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "2 – 3 veces por semana ..." },
                    {
                      image: datos.preg_1 == "d" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "4 ó más veces por semana ..." },
                    {
                      image: datos.preg_1 == "e" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                { text: "", border: [false, false, false, false] },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 13,
          style: "bodyNoBold9",
          text: "2. ¿Cuántas “bebidas alcohólicas” toma durante un día típico en el que ha bebido?",
          bold: true,
          italics: true,
        },
        {
          marginTop: 3,
          table: {
            widths: ["9%", "9%", "9%", "9%", "12%"],
            body: [
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "1 ó 2 .... " },
                    {
                      image: datos.preg_2 == "a" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "3 ó 4 .... " },
                    {
                      image: datos.preg_2 == "b" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "5 ó 6 .... " },
                    {
                      image: datos.preg_2 == "c" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "7 a 9 .... " },
                    {
                      image: datos.preg_2 == "d" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "10 ó más .... " },
                    {
                      image: datos.preg_2 == "e" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 13,
          style: "bodyNoBold9",
          text: "3.¿Con que frecuencia toma seis “bebidas” o más en un sola ocasión?",
          bold: true,
          italics: true,
        },
        {
          marginTop: 3,
          table: {
            widths: ["23%", "25%", "20%"],
            body: [
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Nunca ................................." },
                    {
                      image: datos.preg_3 == "a" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Menos de una vez al mes ......" },
                    {
                      image: datos.preg_3 == "b" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Mensualmente ............." },
                    {
                      image: datos.preg_3 == "c" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
              ],
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Semanalmente ..................." },
                    {
                      image: datos.preg_3 == "d" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "A diario o casi a diario ............" },
                    {
                      image: datos.preg_3 == "e" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                { text: "", border: [false, false, false, false] },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 13,
          style: "bodyNoBold9",
          text: "4. ¿Con que frecuencia en el último año ha sentido incapacidad de parar de beber una vez que había comenzado?",
          bold: true,
          italics: true,
        },
        {
          marginTop: 3,
          table: {
            widths: ["23%", "25%", "20%"],
            body: [
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Nunca ................................." },
                    {
                      image: datos.preg_4 == "a" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Menos de una vez al mes ......" },
                    {
                      image: datos.preg_4 == "b" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Mensualmente ............." },
                    {
                      image: datos.preg_4 == "c" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
              ],
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Semanalmente ..................." },
                    {
                      image: datos.preg_4 == "d" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "A diario o casi a diario ............" },
                    {
                      image: datos.preg_4 == "e" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                { text: "", border: [false, false, false, false] },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 13,
          style: "bodyNoBold9",
          text: "5. ¿Con que frecuencia durante el último año no pudo hacer lo que normalmente se esperaba de usted debido a la bebida?",
          bold: true,
          italics: true,
        },
        {
          marginTop: 3,
          table: {
            widths: ["23%", "25%", "20%"],
            body: [
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Nunca ................................." },
                    {
                      image: datos.preg_5 == "a" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Menos de una vez al mes ......" },
                    {
                      image: datos.preg_5 == "b" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Mensualmente ............." },
                    {
                      image: datos.preg_5 == "c" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
              ],
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Semanalmente ..................." },
                    {
                      image: datos.preg_5 == "d" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "A diario o casi a diario ............" },
                    {
                      image: datos.preg_5 == "e" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                { text: "", border: [false, false, false, false] },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 13,
          style: "bodyNoBold9",
          text: "6. Durante el último año, ¿con que frecuencia necesitó tomar alguna “bebida alcohólica” por la mañana para poder ponerse en funcionamiento después de una noche de haber bebido mucho?",
          bold: true,
          italics: true,
        },
        {
          marginTop: 3,
          table: {
            widths: ["23%", "25%", "20%"],
            body: [
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Nunca ................................." },
                    {
                      image: datos.preg_6 == "a" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Menos de una vez al mes ......" },
                    {
                      image: datos.preg_6 == "b" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Mensualmente ............." },
                    {
                      image: datos.preg_6 == "c" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
              ],
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Semanalmente ..................." },
                    {
                      image: datos.preg_6 == "d" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "A diario o casi a diario ............" },
                    {
                      image: datos.preg_6 == "e" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                { text: "", border: [false, false, false, false] },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 13,
          style: "bodyNoBold9",
          text: "7. Durante el último año ¿con que frecuencia se sintió culpable o con remordimientos después de haber bebido?",
          bold: true,
          italics: true,
        },
        {
          marginTop: 3,
          table: {
            widths: ["23%", "25%", "20%"],
            body: [
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Nunca ................................." },
                    {
                      image: datos.preg_7 == "a" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Menos de una vez al mes ......" },
                    {
                      image: datos.preg_7 == "b" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Mensualmente ............." },
                    {
                      image: datos.preg_7 == "c" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
              ],
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Semanalmente ..................." },
                    {
                      image: datos.preg_7 == "d" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "A diario o casi a diario ............" },
                    {
                      image: datos.preg_7 == "e" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                { text: "", border: [false, false, false, false] },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 13,
          style: "bodyNoBold9",
          text: "8. Durante el último año, ¿en cuántas ocasiones no fue capaz de recordar lo que le había pasado la noche anterior por haber estado bebiendo?",
          bold: true,
          italics: true,
        },
        {
          marginTop: 3,
          table: {
            widths: ["23%", "25%", "20%"],
            body: [
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Nunca ................................." },
                    {
                      image: datos.preg_8 == "a" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Menos de una vez al mes ......" },
                    {
                      image: datos.preg_8 == "b" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Mensualmente ............." },
                    {
                      image: datos.preg_8 == "c" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
              ],
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Semanalmente ..................." },
                    {
                      image: datos.preg_8 == "d" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "A diario o casi a diario ............" },
                    {
                      image: datos.preg_8 == "e" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                { text: "", border: [false, false, false, false] },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          pageBreak: "before",
          marginTop: 13,
          style: "bodyNoBold9",
          text: "9. ¿Usted u otra persona ha sufrido algún daño como consecuencia de que usted hubiera bebido?",
          bold: true,
          italics: true,
        },
        {
          marginTop: 3,
          table: {
            widths: ["23%", "25%", "20%"],
            body: [
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "No ......................................." },
                    {
                      image: datos.preg_9 == "a" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Sí, pero no en el último año ..." },
                    {
                      image: datos.preg_9 == "b" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Sí, el último año ..........." },
                    {
                      image: datos.preg_9 == "c" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 13,
          style: "bodyNoBold9",
          text: "10. ¿Algún pariente, amigo, médico o profesional sanitario le ha expresado su preocupación por su bebida o le ha sugerido dejar de beber?",
          bold: true,
          italics: true,
        },
        {
          marginTop: 3,
          table: {
            widths: ["23%", "25%", "20%"],
            body: [
              [
                {
                  columns: [
                    { style: "bodyNoBold9", text: "No ......................................." },
                    {
                      image: datos.preg_10 == "a" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Sí, pero no en el último año ..." },
                    {
                      image: datos.preg_10 == "b" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
                {
                  columns: [
                    { style: "bodyNoBold9", text: "Sí, el último año ..........." },
                    {
                      image: datos.preg_10 == "c" ? "circulo_relleno" : "circulo_vacio",
                      width: 12,
                      height: 12,
                      margin: [0, 0, 0, 2],
                    },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
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
  function textoDisentimiento(disentimiento, acompa_disenti) {
    const textAcompa = `Yo ${datos.acomp.descrip}, identificado(a) con el documento de identidad número ${datos.acomp.cod}, en calidad de acudiente de ${datos.paciente.descrip} , identificada (o) con el documento de identidad número ${datos.paciente.cod}, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;
    const textPacient = `Yo ${datos.paciente.descrip}, identificado(a) con el documento de identidad número ${datos.paciente.cod}, en calidad de paciente, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;

    const textoDisentimiento = {
      marginTop: 5,
      table: {
        widths: ["auto", 170],
        body: [
          [
            {
              colSpan: 2,
              text: "DISENTIMIENTO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {},
          ],
          [
            {
              marginLeft: 3,
              marginTop: 5,
              marginRight: 3,
              stack: [
                {
                  text: acompa_disenti == "S" ? textAcompa : textPacient,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {
                  marginTop: 5,
                  text: [
                    {
                      text: "Observaciones:",
                      bold: true,
                    },
                    {
                      text: `${datos.obser_disenti}`,
                    },
                  ],
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            },
            {
              stack: [
                {
                  text: "RESPONSABLE DISENTIMIENTO",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
                {
                  marginTop: 5,
                  alignment: "center",
                  image: "firma_disentimiento",
                  width: 140,
                  height: 70,
                },
                {
                  marginTop: 5,
                  columns: [
                    {
                      width: 48,
                      text: "NOMBRE:",
                      bold: true,
                    },
                    {
                      width: "*",
                      text: `${acompa_disenti == "S" ? datos.acomp.descrip : datos.paciente.descrip}`,
                    },
                  ],
                  style: "tableTitle",
                },
                {
                  text: [
                    {
                      text: "DOC. IDENT: ",
                      bold: true,
                    },
                    {
                      text: `${acompa_disenti == "S" ? datos.acomp.cod : datos.paciente.cod}`,
                    },
                  ],
                  style: "tableTitle",
                },
              ],
            },
          ],
        ],
      },
    };

    if (disentimiento == "S") return textoDisentimiento;
    else return null;
  }
  return dd;
};
