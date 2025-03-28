import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

export const impresionHIC050 = ({ datos }) => {
  console.log("datos ", datos);
  var dd = {
    stack: [contenidoHIC050(), firmas()],
  };

  function contenidoHIC050() {
    return {
      stack: [
        {
          marginTop: 8,
          text: [
            { bold: true, style: "tableTitle", text: " Fecha: " },
            { style: "bodyNoBold9", text: datos.fecha },
            { bold: true, style: "tableTitle", text: " Hora: " },
            { style: "bodyNoBold9", text: datos.hora },
          ],
        },
        {
          marginTop: 8,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Nombre: " },
            { style: "bodyNoBold9", text: datos.paciente.descrip },
          ],
        },
        {
          marginTop: 8,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Tipo y numero documento de identificación: " },
            { style: "bodyNoBold9", text: datos.paciente.tipo_id + " " + datos.paciente.cod },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "El propósito principal del procedimiento de toma y recepción de muestras de laboratorio consiste en: Recolectar sangre, orina o tejidos corporales para posteriormente procesarlos y determinar si los resultados obtenidos están dentro de los límites normales.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "Se me ha explicado que la toma de muestras de laboratorio mediante la venopunción es un procedimiento invasivo que consiste en la extracción de sangre de una vena, la cual será envasada en tubos de laboratorio para su posterior procesamiento y análisis.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            { text: "El personal", bold: true },
            { text: " que realiza el procesamiento es idóneo y cumple con todas las normas de bioseguridad vigentes." },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            { text: "Recomendaciones Generales: ", bold: true },
            {
              text: "La forma de prepararse depende del examen de sangre específico que le vayan a hacer. Muchos exámenes no quieren de ninguna preparación especial y otras veces se le puede solicitar que evite alimentos o bebidas.",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            { text: "Riesgos: ", bold: true },
            {
              text: "En el momento de la toma de muestra de sangre por venopunción, sentirá un leve dolor tipo pinchazo. En casos esporádicos se podrían presentar complicaciones de este procedimiento, como hematoma y/o dolor leve, extravasaciones que pueden llegar a causar dolor e irritación, equimosis, flebitis mecánica, los cuales mejoraran espontáneamente o con medidas locales.",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            { text: "HE COMPRENDIDO CON CLARIDAD TODO LO ESCRITO ANTERIORMENTE. ", bold: true },
            {
              text: "Yo he tenido la oportunidad de preguntar y resolver todas mis dudas. ",
            },
            {
              text: "ACEPTO LA TOMA O RECEPCIÓN DE LA MUESTRA - DECLARO QUE LA DECISION QUE TOMO ES LIBRE Y VOLUNTARIA DOY MI CONSENTIMIENTO ",
              bold: true,
            },
            {
              text: "para que el profesional del Hospital Local Primer Nivel E.S.E FuentedeOro me realice el procedimiento diagnostico solicitado por mi médico tratante.",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            {
              text: "Entiendo que me puedo retractar de este consentimiento cuando así lo desee, debiendo informar al equipo médico de diagnóstico del cambio de esta decisión.",
            },
          ],
          style: "bodyNoBold9",
        },
      ],
      styles: {
        bodyContent: {
          fontSize: 11,
          alignment: "justify",
        },
      },
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
