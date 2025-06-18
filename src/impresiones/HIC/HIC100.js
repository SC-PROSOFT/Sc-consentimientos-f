import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";
const { getEmpresa } = useModuleFormatos();
export const impresionHIC100 = ({ datos }) => {
  console.log("impresionHIC100 -> ", datos);

  var dd = {
    stack: [contenidoHIC100(), firmas()],
  };

  function contenidoHIC100() {
    return {
      stack: [
        {
          table: {
            widths: ["49%", "13%", "11%", "15%", "12%"],
            body: [
              [
                {
                  bold: true,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Durante  las ultimas 2 semanas ¿con que frecuencia ha presentado alguno de los siguientes problemas?",
                },
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "(0) En lo absoluto" },
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "(1) Varios días" },
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "(2) Más de la mitad de los días" },
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "(3) Casi todos los días" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "1. Poco interés o placer en hacer las cosas",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_1 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_1 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_1 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_1 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "2. Sentirse decaído, deprimido o sin energía",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_2 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_2 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_2 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_2 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "3. Dificultad para conciliar el sueño o permanecer dormido, o dormir demasiado",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_3 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_3 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_3 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_3 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "4. Sentirse cansado o con poca energía",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_4 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_4 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_4 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_4 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "5. Poco apetito o comer en exceso",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_5 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_5 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_5 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_5 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "6. Sentirse mal consigo mismo... o que es un fracaso o que se ha decepcionado a sí mismo o a su familia",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_6 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_6 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_6 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_6 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "7. Dificultad para concentrarse en cosas, como leer el periódico o ver la televisión",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_7 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_7 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_7 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_7 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "8. Moverse o hablar tan despacio que otras personas podrían haberlo notado. O lo contrario, estar tan inquieto o inquieto que se ha estado moviendo mucho más de lo habitual",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_8 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_8 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_8 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_8 == "3" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "9. Pensamientos de que lo darían por muerto o de hacerse daño",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_9 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_9 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_9 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_9 == "3" ? "X" : "" },
              ],
              [
                {
                  bold: true,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Total",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.total_0 },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.total_1 },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.total_2 },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.total_3 },
              ],
            ],
          },
        },
        {
          marginTop: 1,
          text: [
            {
              bold: true,
              style: "bodyNoBold9",
              text: "(Profesional de la salud: Para la interpretación del TOTAL, consulte la tarjeta de puntuación adjunta). \n",
            },
          ],
        },
        {
          marginTop: 15,
          table: {
            widths: ["47%", "41%", "12%"],
            body: [
              [
                {
                  rowSpan: 4,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "10. Si marcó algún problema, ¿qué tan difícil le han resultado estos problemas para hacer su trabajo, ocuparse de las cosas en casa o llevarse bien con otras personas?",
                },
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "Nada difícil" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_10 == "0" ? "X" : "" },
              ],
              [
                {},
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "Algo difícil" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_10 == "1" ? "X" : "" },
              ],
              [
                {},
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "Extremadamente difícil" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_10 == "2" ? "X" : "" },
              ],
              [
                {},
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "Muy difícil" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_10 == "3" ? "X" : "" },
              ],
            ],
          },
        },
        {
          marginTop: 8,
          text: [{ bold: true, style: "bodyNoBold9", text: "Para diagnóstico inicial: " }],
        },
        {
          alignment: "justify",
          marginTop: 3,
          style: "bodyNoBold9",
          ol: [
            { style: "bodyNoBold9", text: "El paciente completa el PHQ-9, Evaluación Rápida de Depresión. " },
            {
              style: "bodyNoBold9",
              text: "Si hay al menos 4 ✓ en la sección sombreada (incluyendo las Preguntas #1 y #2), considerar un trastorno depresivo. Sume los puntajes para determinar la gravedad.",
            },
          ],
        },
        {
          marginTop: 8,
          text: [{ bold: true, style: "bodyNoBold9", text: "Considere Trastorno Depresivo Mayor" }],
        },
        {
          marginTop: 3,
          style: "bodyNoBold9",
          ul: [{ style: "bodyNoBold9", text: "Si hay al menos 5 ✓ en la sección sombreada (una de las cuales corresponde a la Pregunta #1 o #2)." }],
        },
        {
          marginTop: 8,
          text: [{ bold: true, style: "bodyNoBold9", text: "Considere Otro Trastorno Depresivo" }],
        },
        {
          marginTop: 3,
          style: "bodyNoBold9",
          ul: [{ style: "bodyNoBold9", text: "Si hay 2-4 ✓ en la sección sombreada (una de las cuales corresponde a la Pregunta #1 o #2)." }],
        },
        {
          marginTop: 5,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Nota: " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Dado que el cuestionario se basa en el autoinforme del paciente, todas las respuestas deben ser verificadas por el clínico, y el diagnóstico definitivo se realiza en base a criterios clínicos, considerando qué tan bien el paciente entendió el cuestionario, así como otra información relevante del paciente.",
            },
          ],
        },
        {
          alignment: "justify",
          marginTop: 5,
          style: "bodyNoBold9",
          text: "Los diagnósticos de Trastorno Depresivo Mayor u Otro Trastorno Depresivo también requieren deterioro en el funcionamiento social, laboral u otras áreas importantes (Pregunta #10) y descartar duelo normal, antecedentes de un Episodio Maníaco (Trastorno Bipolar) o un trastorno físico, medicamento u otra sustancia como causa biológica de los síntomas depresivos.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          bold: true,
          text: "Para monitorear la gravedad en el tiempo en pacientes recién diagnosticados o en tratamiento actual por depresión:",
        },
        {
          alignment: "justify",
          marginTop: 3,
          style: "bodyNoBold9",
          ol: [
            {
              style: "bodyNoBold9",
              text: "Los pacientes pueden completar los cuestionarios al inicio y en intervalos regulares (ej., cada 2 semanas) en casa y traerlos en su próxima cita para su puntuación, o pueden completarlo durante cada cita programada.",
            },
            {
              style: "bodyNoBold9",
              text: "Sume las ✓ por columna.    Por cada ✓: Varios días = 1; Más de la mitad de los días = 2; Casi todos los días = 3.",
            },
            {
              style: "bodyNoBold9",
              text: "Sume los puntajes de las columnas para obtener un TOTAL.",
            },
            {
              style: "bodyNoBold9",
              text: "Consulte el Cuadro de Puntuación del PHQ-9 adjunto para interpretar el puntaje TOTAL.",
            },
            {
              style: "bodyNoBold9",
              text: "Los resultados pueden incluirse en el expediente del paciente para ayudar a establecer un objetivo de tratamiento, determinar el grado de respuesta y guiar la intervención terapéutica.",
            },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          bold: true,
          text: "Puntuación: sume todas las casillas marcadas en el PHQ-9",
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          text: "Por cada ✓ Nada = 0; Varios días = 1;",
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          text: "Más de la mitad de los días = 2; Casi todos los días = 3",
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          bold: true,
          text: "Interpretación del Puntaje Total",
        },
        {
          marginTop: 15,
          table: {
            widths: ["10%", "90%"],
            body: [
              [
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "Rangos" },
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "Gravedad de la Depresión" },
              ],
              [
                { alignment: "justify", style: "bodyNoBold9", text: "1-4" },
                { alignment: "justify", style: "bodyNoBold9", text: "Depresión mínima" },
              ],
              [
                { alignment: "justify", style: "bodyNoBold9", text: "5-9" },
                { alignment: "justify", style: "bodyNoBold9", text: "Depresión leve" },
              ],
              [
                { alignment: "justify", style: "bodyNoBold9", text: "10-14" },
                { alignment: "justify", style: "bodyNoBold9", text: "Depresión moderada" },
              ],
              [
                { alignment: "justify", style: "bodyNoBold9", text: "15-19" },
                { alignment: "justify", style: "bodyNoBold9", text: "Depresión moderadamente grave" },
              ],
              [
                { alignment: "justify", style: "bodyNoBold9", text: "20-27" },
                { alignment: "justify", style: "bodyNoBold9", text: "Depresión grave" },
              ],
            ],
          },
        },
        //
        {
          marginTop: 5,
          style: "bodyNoBold9",
          text: "PHQ-9 Copyright © Pfizer Inc. Todos los derechos reservados. Reproducido con permiso.",
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          text: "PRIME-MD® es una marca registrada de Pfizer Inc.",
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          text: "A2662B 10-04-2005",
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
