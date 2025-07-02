import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";
const { getEmpresa } = useModuleFormatos();
export const impresionHIC101 = ({ datos }) => {
  console.log("impresionHIC101 -> ", datos);

  var dd = {
    stack: [contenidoHIC103(), firmas()],
  };

  function contenidoHIC103() {
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
          text: "Prueba de Identificación de Trastornos Relacionados con el Consumo de Alcohol, una prueba simple de diez preguntas desarrollada por la Organización Mundial de la Salud, que sirve para determinar si el consumo de alcohol de una persona puede considerarse peligroso.",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "APLICACIÓN DEL INSTRUMENTO",
        },
        {
          ul: [
            {
              marginTop: 2,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Las preguntas 1 a 3 están relacionadas con el consumo de alcohol.",
            },
            {
              marginTop: 2,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Las preguntas 4 a 6 están relacionadas con la dependencia del alcohol.",
            },
            {
              marginTop: 2,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Las preguntas 7 a 10 consideran problemas relacionados con el consumo de alcohol.",
            },
          ],
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "El profesional de salud que realice la prueba debe informarle a la persona: Debido a que el uso del alcohol puede afectar su salud e interferir con ciertos medicamentos y tratamientos, es importante que le hagamos algunas preguntas sobre su uso del alcohol. Sus respuestas serán confidenciales, así que le agradecemos su honestidad. Para cada pregunta en la tabla siguiente, marque una X en el cuadro que mejor describa su respuesta.",
        },
        {
          marginTop: 10,
          table: {
            widths: ["85%", "3%", "3%", "3%", "3%", "3%"],
            body: [
              [
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "justify", style: "bodyNoBold9", text: "Pregunta" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "0" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "1" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "2" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "3" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "4" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "1. ¿Con qué frecuencia consume alguna bebida alcohólica?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_1 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "2. ¿Cuántas bebidas alcohólicas suele realizar en un día de consumo normal?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_2 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "3. ¿Con qué frecuencia toma 5 o más bebidas alcohólicas en un solo día?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_3 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_3 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_3 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_3 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_3 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "4. ¿En el último año, con qué frecuencia ha sido incapaz de parar de beber, una vez haya iniciado?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_4 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_4 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_4 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_4 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_4 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "5. ¿En el último año, con qué frecuencia no pudo atender sus obligaciones porque había bebido?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_5 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_5 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_5 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_5 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_5 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "6. ¿En el último año, con qué frecuencia ha necesitado beber en ayunas para recuperarse después de haber bebido mucho el día anterior?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_6 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_6 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_6 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_6 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_6 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "7. ¿En el último año, con qué frecuencia ha tenido remordimientos o sentimientos de culpa después de haber bebido?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_7 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_7 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_7 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_7 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_7 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "8. ¿En el último año, con qué frecuencia no ha podido recordar lo que sucedió la noche anterior porque había estado bebiendo?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_8 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_8 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_8 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_8 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_8 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "9. ¿Usted o alguna otra persona ha resultado herido porque usted había bebido?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_9 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_9 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_9 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_9 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_9 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "10. ¿Algún familiar, amigo, médico o profesional de la salud ha mostrado preocupación por un consumo de bebidas alcohólicas o le ha sugerido que deje de beber?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "4" ? "X" : "" },
              ],
              [
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "Total" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.total_0 },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.total_1 },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.total_2 },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.total_3 },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.total_4 },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "INTERPRETACIÓN DE LOS RESULTADOS",
        },
        {
          marginTop: 5,
          table: {
            widths: ["25%", "25%", "50%"],
            body: [
              [
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "HOMBRES" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "MUJERES" },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "INDICACIÓN" },
              ],
              [
                {
                  alignment: "left",
                  style: "bodyNoBold9",
                  text: "8 o más puntos",
                },
                { alignment: "left", style: "bodyNoBold9", text: "7 o más puntos" },
                { alignment: "left", style: "bodyNoBold9", text: "Fuerte probabilidad de daños debido al consumo de alcohol" },
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
