import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";
const { getEmpresa } = useModuleFormatos();
export const impresionHIC099 = ({ datos }) => {
  console.log("impresionHIC099 -> ", datos);

  var dd = {
    stack: [contenidoHIC099(), firmas()],
  };

  function contenidoHIC099() {
    return {
      stack: [
        {
          columnGap: 20,
          columns: [
            [
              { text: "Ciudad:", bold: true, style: "bodyNoBold9" },
              { text: datos.empresa.ciudad_usuar, style: "bodyNoBold9" },
              { text: "Nombre:", bold: true, style: "bodyNoBold9" },
              { text: datos.paciente.descrip, style: "bodyNoBold9" },
            ],
            [
              { text: "Fecha:", bold: true, style: "tableTitle" },
              { text: datos.fecha, style: "bodyNoBold9" },
              { text: "Tipo y número documento de identificación:", bold: true, style: "bodyNoBold9" },
              { text: datos.paciente.tipo_id + " " + datos.paciente.cod, style: "bodyNoBold9" },
            ],
          ],
        },
        {
          table: {
            widths: ["40%", "15%", "15%", "15%", "15%"],
            body: [
              [
                {
                  bold: true,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Durante las últimas 2 semanas, ¿cuánto le han molestado los siguientes problemas?",
                },
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "(0) De nada" },
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "(1) Varios días" },
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "(2) Más de la mitad de los días" },
                { bold: true, alignment: "justify", style: "bodyNoBold9", text: "(3) Casi todos los días" },
              ],
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "1. ¿Se ha sentido nervioso(a), ansioso(a) o con los nervios de punta?",
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
                  text: "2. ¿No ha sido capaz de parar o controlar su preocupación?",
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
                  text: "3. ¿Tiene poco interés o placer en hacer las cosas?",
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
                  text: "4. ¿Se siente desanimado/a, deprimido/a, o sin esperanza?",
                },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_4 == "0" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_4 == "1" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_4 == "2" ? "X" : "" },
                { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.pregunta_4 == "3" ? "X" : "" },
              ],
            ],
          },
        },
        {
          marginTop: 5,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Notas: \n" },
            { style: "bodyNoBold9", text: datos.notas },
          ],
        },
        {
          marginTop: 3,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Puntuación: \n" },
            {
              style: "bodyNoBold9",
              text: "La puntuación total del PHQ-4 oscila entre 0 y 12, con las siguientes categorías de malestar psicológico:",
            },
          ],
        },
        {
          marginTop: 3,
          ul: [
            {
              text: [
                { bold: true, style: "bodyNoBold9", text: "Ninguno: " },
                {
                  style: "bodyNoBold9",
                  text: "0-2",
                },
              ],
            },
            {
              text: [
                { bold: true, style: "bodyNoBold9", text: "Leve: " },
                {
                  style: "bodyNoBold9",
                  text: "3-5",
                },
              ],
            },
            {
              text: [
                { bold: true, style: "bodyNoBold9", text: "Moderado: " },
                {
                  style: "bodyNoBold9",
                  text: "6-8",
                },
              ],
            },
            {
              text: [
                { bold: true, style: "bodyNoBold9", text: "Severo: " },
                {
                  style: "bodyNoBold9",
                  text: "9-12",
                },
              ],
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Subescala de ansiedad = " },
            {
              style: "bodyNoBold9",
              text: "suma de los ítems 1 y 2 (rango de puntuación: 0 a 6).",
            },
          ],
        },
        {
          text: [
            { bold: true, style: "bodyNoBold9", text: "Subescala de depresión = " },
            {
              style: "bodyNoBold9",
              text: "suma de los ítems 3 y 4 (rango de puntuación: 0 a 6).",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              style: "bodyNoBold9",
              text: "En cada subescala, una puntuación de 3 o más se considera positiva para fines de detección.",
            },
          ],
        },
        {
          alignment: "justify",
          marginTop: 5,
          text: [
            { bold: true, style: "bodyNoBold9", text: "References: \n" },
            {
              style: "bodyNoBold9",
              text: "Kroenke K, Spitzer RL, Williams JBW, Löwe B. An ultra-brief screening scale for anxiety and depression: the PHQ-4 Psychosomatics 2009;50:613-621.",
            },
          ],
        },
        {
          alignment: "justify",
          marginTop: 5,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Spanish Translation: \n" },
            {
              style: "bodyNoBold9",
              text: "Translated questions 1 and 2 of this CRF are based on a validated translation by the survey developers: \n",
            },
            {
              style: "bodyNoBold9",
              text: "Elaborado por los doctores Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke y colegas, mediante una subvención educativa otorgada por Pfizer Inc. No se requiere permiso para reproducir, traducir, presentar o distribuir \n",
            },
            {
              style: "bodyNoBold9",
              text: "Translated questions 3 and 4 of this CRF are based on a validated translation: \n",
            },
            {
              style: "bodyNoBold9",
              text: "Arrieta J, Aguerrebere M, Raviola G, Flores H, Elliott P, Espinosa A, Reyes A, Ortiz-Panozo E, Rodriguez-Gutierrez EG, Mukherjee J, Palazuelos D, Franke MF. Validity and Utility of the Patient Health Questionnaire (PHQ)-2 and PHQ-9 for Screening and Diagnosis of Depression in Rural Chiapas, Mexico: A Cross-Sectional Study. J Clin Psychol. 2017 Sep;73(9):1076-1090. doi: 10.1002/jclp.22390. Epub 2017 Feb 13. PMID: 28195649; PMCID: PMC5573982. \n",
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
