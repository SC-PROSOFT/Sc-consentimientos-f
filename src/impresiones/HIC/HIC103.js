import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";
const { getEmpresa } = useModuleFormatos();
export const impresionHIC103 = ({ datos }) => {
  console.log("impresionHIC103 -> ", datos);

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
          text: "Es un instrumento que cuantifica el grado de sobrecarga que padecen los cuidadores de las personas dependientes. Consta de un listado de afirmaciones que describen cómo se sienten los cuidadores.",
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
          text: "A continuación, se presenta una lista de afirmaciones, en las cuales el cuidador debe indicar la frecuencia con que se siente así, utilizando una escala que consta de 0 (nunca), 1 (rara vez), 2 (algunas veces), 3 (bastantes veces) y 4 (casi siempre). A la hora de responder piense que no existen respuestas acertadas o equivocadas. Las puntuaciones obtenidas en cada ítem se suman, y la puntuación final representa el grado de sobrecarga del cuidador. Por tanto, la puntuación global oscila entre 0 y 88 puntos.",
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
                  text: "1. ¿Cree que su familiar solicita más ayuda de la que realmente necesita?",
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
                  text: "2. ¿Cree que debido al tiempo que dedica a su familiar ya no dispone de tiempo suficiente para usted?",
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
                  text: "3. ¿Se siente agobiado entre cuidar a su familiar y atender además otras responsabilidades en su trabajo o familia?",
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
                  text: "4. ¿Se siente avergonzado por la conducta de su familiar?",
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
                  text: "5. ¿Se siente enfadado cuando está cerca de su familiar?",
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
                  text: "6. ¿Piensa que su familiar afecta negativamente a su relación con otros miembros de su familia?",
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
                  text: "7. ¿Tiene miedo de lo que el futuro depare a su familiar?",
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
                  text: "8. ¿Cree que su familiar depende de usted?",
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
                  text: "9. ¿Se siente tenso cuando está cerca de su familiar?",
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
                  text: "10. ¿Cree que su salud se ha resentido por cuidar a su familiar?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_10 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "11. ¿Cree que no tiene tanta intimidad como le gustaría debido a su familiar?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_11 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_11 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_11 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_11 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_11 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "12. ¿Cree que su vida social se ha resentido por cuidar a su familiar?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_12 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_12 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_12 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_12 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_12 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "13. ¿Se siente incómodo por desatender a sus amistades debido a su familiar?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_13 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_13 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_13 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_13 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_13 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "14. ¿Cree que su familiar parece esperar que usted sea la persona que le cuide, como si usted fuera la única persona de quien depende?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_14 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_14 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_14 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_14 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_14 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "15. ¿Cree que no tiene suficiente dinero para cuidar a su familiar además de sus otros gastos?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_15 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_15 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_15 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_15 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_15 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "16. ¿Cree que será incapaz de cuidarle/a por mucho más tiempo?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_16 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_16 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_16 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_16 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_16 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "17. ¿Siente que ha perdido el control de su vida desde la enfermedad de su familiar?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_17 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_17 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_17 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_17 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_17 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "18. ¿Desearía poder dejar el cuidado de su familiar a otros?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_18 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_18 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_18 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_18 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_18 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "19. ¿Se siente indeciso sobre qué hacer con su familiar?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_19 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_19 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_19 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_19 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_19 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "20. ¿Cree que debería hacer más por su familiar?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_20 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_20 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_20 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_20 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_20 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "21. ¿Cree que podría cuidar mejor de su familiar?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_21 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_21 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_21 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_21 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_21 == "4" ? "X" : "" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "22. Globalmente, ¿qué grado de carga experimenta por el hecho de cuidar a su familiar?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_22 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_22 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_22 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_22 == "3" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.preg_22 == "4" ? "X" : "" },
              ],
            ],
          },
        },
        {
          pageBreak: "before",
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "INTERPRETACIÓN DE LOS RESULTADOS",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Puntuación máxima de 88 puntos. No existen normas ni puntos de corte establecidos. Sin embargo, suele considerarse indicativa de 'no sobrecarga' una puntuación inferior a 46, y de 'sobrecarga intensa' una puntuación superior a 56",
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
