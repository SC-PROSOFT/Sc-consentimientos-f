import { evaluarParentesco } from "@/formatos/utils";
export const impresionHIC102 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC102(), firmas()],
  };

  function contenidoHIC102() {
    return {
      stack: [
        {
          marginTop: 1,
          bold: true,
          style: "bodyNoBold9",
          text: "1.1.Cuestionario de Síntomas Self-Reporting Questionnaire (SRQ)",
        },
        {
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
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_1 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_1 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "2. ¿Tiene mal apetito?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_2 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_2 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "3. ¿Duerme mal?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_3 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_3 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "4. ¿Se asusta con facilidad?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_4 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_4 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "5. ¿Sufre de temblor de manos?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_5 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_5 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "6. ¿Se siente nervioso, tenso o aburrido?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_6 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_6 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "7. ¿Sufre de mala digestión?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_7 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_7 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "8. ¿No puede pensar con claridad?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_8 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_8 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "9. ¿Se siente triste?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_9 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_9 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "10. ¿Llora usted con mucha frecuencia?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_10 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_10 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "11. ¿Tiene dificultad en disfrutar sus actividades diarias?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_11 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_11 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "12. ¿Tiene dificultad para tomar decisiones?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_12 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_12 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "13. ¿Tiene dificultad en hacer su trabajo? (¿Sufre usted con su trabajo?)",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_13 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_13 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "14. ¿Es incapaz de desempeñar un papel útil en su vida?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_14 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_14 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "15. ¿Ha perdido interés en las cosas?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_15 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_15 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "16. ¿Siente que usted es una persona inútil?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_16 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_16 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "17. ¿Ha tenido la idea de acabar con su vida?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_17 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_17 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "18. ¿Se siente cansado todo el tiempo?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_18 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_18 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "19. ¿Tiene sensaciones desagradables en su estómago?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_19 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_19 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "20. ¿Se cansa con facilidad?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_20 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_20 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "21. ¿Siente usted que alguien ha tratado de herirlo en alguna forma?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_21 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_21 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "22. ¿Es usted una persona mucho más importante de lo que piensan los demás?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_22 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_22 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "23. ¿Ha notado interferencias o algo raro en su pensamiento?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_23 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_23 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "24. ¿Oye voces sin saber de dónde vienen o que otras personas no pueden oír?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_24 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_24 == "N" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "25. ¿Ha tenido convulsiones, ataques o caídas al suelo, con movimientos de brazos y piernas; con mordedura de la lengua o pérdida del conocimiento?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_25 == "S" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_srq_25 == "N" ? "X" : "" },
              ],
            ],
          },
        },
        {
          marginTop: 1,
          bold: true,
          style: "bodyNoBold9",
          text: "Determinación de la puntuación: ",
        },
        {
          marginTop: 1,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Se suman las respuestas afirmativas.",
        },
        {
          marginTop: 1,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "a) Si la suma es 11 o más, de la pregunta número 1 a la 20 o",
        },
        {
          marginTop: 1,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "b) si alguna de las preguntas 21 a 25 se responde afirmativamente (Sí)",
        },
        {
          marginTop: 1,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "se debe hacer evaluación por el médico.",
        },
        {
          marginTop: 1,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Además, si el comportamiento de una persona entrevistada parece evidentemente raro o extraño (ejemplo: suspicaz, habla demasiado, triste o llora) debe tener también una evaluación, independientemente de las respuestas que se hayan dado en el cuestionario.",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "1.2.Cuestionario CIE 10 para ansiedad",
        },
        {
          marginTop: 10,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "¿Durante el último mes ha tenido cualquiera de las siguientes quejas la mayoría del tiempo?",
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "I.   ¿Se ha venido sintiendo tenso o ansioso?  ",
            },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: "SI " },
            { bold: true, decoration: "underline", alignment: "center", style: "bodyNoBold9", text: datos.preg_1_2_i == "S" ? " X " : "   " },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: "   NO " },
            { bold: true, decoration: "underline", alignment: "center", style: "bodyNoBold9", text: datos.preg_1_2_i == "N" ? " X " : "   " },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "II.   ¿Ha estado usted muy preocupado acerca de cosas?  ",
            },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: "SI " },
            { bold: true, decoration: "underline", alignment: "center", style: "bodyNoBold9", text: datos.preg_1_2_ii == "S" ? " X " : "   " },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: "   NO " },
            { bold: true, decoration: "underline", alignment: "center", style: "bodyNoBold9", text: datos.preg_1_2_ii == "N" ? " X " : "   " },
          ],
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "Si contesta SI a alguna de las preguntas anteriores continúe con las siguientes:",
        },
        {
          marginTop: 10,
          alignment: "justify",
          style: "bodyNoBold9",
          bold: true,
          text: "1.   Ha experimentado en el último mes:",
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " a. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_1_a == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Miedo a morir?  ",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " b. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_1_b == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Miedo a perder el control (descontrolarse)?  ",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " c. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_1_c == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Palpitaciones?  ",
            },
          ],
        },
        {
          pageBreak: "before",
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " d. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_1_d == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Sudoración?  ",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " e. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_1_e == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Temblor?",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " f. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_1_f == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Opresión en el pecho y dificultad para respirar?",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " g. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_1_g == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Mareo, sensación de desmayo?",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " h. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_1_h == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Sensación de hormigueo o adormecimiento de partes del cuerpo?  ",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " i. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_1_i == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Sentimientos de desrealización (ver el mundo como si fuera un sueño o una película?  ",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " j. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_1_j == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Nauseas?  ",
            },
          ],
        },
        {
          marginTop: 10,
          alignment: "justify",
          style: "bodyNoBold9",
          bold: true,
          text: "2. Ha experimentado estos síntomas cuando:",
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " a. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_2_a == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿va a lugares desconocidos?  ",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " b. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_2_b == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Viaja solo (por ejemplo en trasporte público)?  ",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " c. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_2_c == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Se encuentra en multitudes/lugares cerrados/lugares públicos?  ",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " d. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_2_d == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿está en un ascensor?",
            },
          ],
        },
        {
          marginTop: 10,
          alignment: "justify",
          style: "bodyNoBold9",
          bold: true,
          text: "3. Miedo/ Ansiedad en situaciones sociales:",
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " a. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_3_a == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Hablar en público?",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " b. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_3_b == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Eventos sociales?",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " c. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_3_c == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Comer delante de otras personas?",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " d. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_3_d == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Preocupación/tensión/sentimientos de temor?",
            },
          ],
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "i. Durante el último mes se ha visto limitado en una o más de las siguientes áreas de su vida la mayoría del tiempo:",
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " a. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_i_a == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Autocuidado (bañarse, vestirse, comer)?",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " b. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_i_b == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Relaciones familiares (con el cónyuge, hijos, familiares)?",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " c. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_i_c == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Ir a trabajar o a estudiar?",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " d. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_i_d == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Hacer las labores domésticas?",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " e. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_i_e == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Asistir a actividades sociales (verse con amigos, aficiones)?",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " f. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_i_f == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Recordar cosas (problemas de memoria)?",
            },
          ],
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "ii. Debido a estos problemas durante el último mes:",
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " a. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_ii_a == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Cuantos días fue usted incapaz de llevar a cabo sus labores diarias?",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              bold: true,
              text: " b. ",
            },
            { bold: true, decoration: "underline", alignment: "justify", style: "bodyNoBold9", text: datos.preg_ii_b == "S" ? " X " : "    " },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "  ¿Cuantos días pasó en cama para descansar?",
            },
          ],
        },

        {
          marginTop: 10,
          text: [
            {
              style: "bodyNoBold9",
              text: "Sí I o II son positivos pero 1, 2 y 3 son negativos indica",
            },
            {
              bold: true,
              style: "bodyNoBold9",
              text: " Ansiedad Generalizada.",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              style: "bodyNoBold9",
              text: "Sí I es afirmativo y 1 son positivos indica",
            },
            {
              bold: true,
              style: "bodyNoBold9",
              text: " Trastorno de Pánico.",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              style: "bodyNoBold9",
              text: "Sí I y 2 son afirmativos indica",
            },
            {
              bold: true,
              style: "bodyNoBold9",
              text: " Agorafobia.",
            },
          ],
        },
        {
          marginTop: 1,
          text: [
            {
              style: "bodyNoBold9",
              text: "Sí I y 3 son afirmativos indica",
            },
            {
              bold: true,
              style: "bodyNoBold9",
              text: " Fobia Social.",
            },
          ],
        },
        {
          marginTop: 1,
          italics: true,
          style: "bodyNoBold9",
          text: "En todos los casos anteriores la persona debe ser valorada por el médico.",
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
