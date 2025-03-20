import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionHIC064 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC064(), firmas()],
  };
  function contenidoHIC064() {
    return {
      stack: [
        {
          marginTop: 10,
          alignment: "left",
          text: [
            { bold: true, text: "Granada, " },
            { bold: true, text: " fecha: " },
            {
              text: datos.fecha,
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 3,
          alignment: "left",
          style: "bodyNoBold9",
          text: [
            { bold: true, text: " Fecha de toma de muestra: " },
            {
              text: datos.fecha_toma_muestra,
            },
          ],
        },
        {
          marginTop: 10,
          bold: true,
          alignment: "center",
          text: "INFORMACIÓN PARA LA TOMA DE MUESTRA",
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            { bold: true, style: "tableTitle", text: "Pruebas basadas en detección de anticuerpos: " },
            {
              text: "Se trata de pruebas que detectan la presencia de Anticuerpos IgM, IgG específicos contra el SARS-CoV-2 como respuesta inmune durante las diferentes fases de la infección. Usando una muestra de sangre, se procesa mediante el uso de inmunocromatográfia (prueba de casette).",
            },
          ],
        },
        {
          marginTop: 10,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            { bold: true, style: "tableTitle", text: "Prueba de antígeno: " },
            {
              text: "Prueba diagnóstica para SARS-CoV-2, esta prueba detecta ciertas proteínas en el virus. Se usa un hisopo para tomar una muestra del fluido de la nariz o la garganta, se considera una prueba de rápido resultado.",
            },
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          alignment: "justify",
          text: [
            { bold: true, style: "tableTitle", text: "Propósito de la prueba: " },
            {
              text: "Detección del SARS-CoV-2, que es el virus que causa el COVID-19.",
            },
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          alignment: "justify",
          text: [
            { bold: true, style: "tableTitle", text: "Beneficios: " },
            {
              text: "Identificar a personas infectadas por SARS-CoV-2, para poder tomar medidas que desaceleren y detengan la propagación del virus. Detección temprana del virus en pacientes asintomáticos. Mayor sensibilidad y especificidad de detección (prueba de antígeno).",
            },
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          alignment: "justify",
          text: [
            { bold: true, style: "tableTitle", text: "Riesgos:  " },
            { bold: true, italics: true, style: "tableTitle", text: "Hisopado: " },
            {
              text: "Sangrado nasal, dolor leve y molestia en nariz o garganta.",
            },
            { bold: true, italics: true, style: "tableTitle", text: "Muestra de sangre: " },
            { style: "tableTitle", text: "Dolor, equimosis (amoratamiento), sangrado leve en el lugar de la punción. " },
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          alignment: "justify",
          text: [
            { style: "tableTitle", text: "Yo " },
            { bold: true, style: "tableTitle", text: datos.paciente.descrip },
            { text: " identificado (a) con documento N° " },
            { bold: true, style: "tableTitle", text: datos.paciente.cod },
            { text: " de " },
            { bold: true, style: "tableTitle", text: datos.paciente.descrip_ciudad },
            {
              text: " , declaro que me presente por voluntad propia, para toma de prueba DETECCIÓN DE ANTIGENO PARA SARS-CoV2 o  DETECCION DE ANTICUERPOS PARA SARS-CoV2, Confirmo que se me ha informado sobre el propósito y beneficio del procedimiento, su interpretación, y su riesgo y que entiendo su contenido, incluyendo sus limitaciones, beneficios y riesgos de la prueba. ",
            },
          ],
        },
        {
          marginTop: 10,
          alignment: "left",
          text: "Por lo anterior, doy mi consentimiento para:",
          style: "bodyNoBold9",
        },
        {
          style: "bodyNoBold9",
          ol: [
            {
              marginTop: 10,
              alignment: "justify",
              text: [
                {
                  text: "Toma de muestras biológicas de Hisopado nasofaríngeo?",
                },
                {
                  text: " SI ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.hisopa_nasof == "S" ? " X " : "    " },
                },
                {
                  text: " NO ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.hisopa_nasof == "N" ? " X " : "    " },
                },
              ],
            },
            {
              marginTop: 4,
              alignment: "justify",
              text: [
                {
                  text: "Toma de muestra en sangre para estudios de detección de Anticuerpos COVID-19?",
                },
                {
                  text: " SI ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.detec_anticuerp == "S" ? " X " : "    " },
                },
                {
                  text: " NO ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.detec_anticuerp == "N" ? " X " : "    " },
                },
              ],
            },
          ],
        },
        {
          marginTop: 10,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Autorizo de manera voluntaria, previa y explicita a la institución para tratar mis datos personales de acuerdo con la política de tratamiento de datos personales de la empresa y para los fines relacionados con su objeto social.",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          text: [
            { bold: true, text: "Nombre paciente: " },
            { text: datos.paciente.descrip },
            { text: "\n " },
            { bold: true, text: "Documento: " },
            { text: datos.paciente.tipo_id },
            { bold: true, text: " N°. " },
            { text: datos.paciente.cod },
            { text: "\n " },
            { bold: true, text: "E-mail: " },
            { text: datos.paciente.email },
            { text: "\n " },
            { bold: true, text: "Teléfono: " },
            { text: datos.paciente.telefono },
            { text: "\n " },
            { bold: true, text: "Dirección: " },
            { text: datos.paciente.direccion },
            { text: "\n " },
            { bold: true, text: "EPS: " },
            { text: datos.paciente.descrip_eps },
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
