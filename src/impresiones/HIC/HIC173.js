import { useModuleFormatos, useApiContabilidad } from "@/store";
import { evaluarParentesco } from "@/formatos/utils";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC173 = ({ datos }) => {
  console.log("impresionHIC173 -> ", datos);

  var dd = {
    stack: [contenidoHIC173(), firmas()],
  };
  function contenidoHIC173() {
    return {
      stack: [
        {
          marginTop: 15,
          style: "bodyNoBold9",
          columns: [
            { width: "50%", alignment: "left", text: [{ bold: true, text: "Tauramena, fecha: " }, { text: datos.fecha }] },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Hora: " }, { text: datos.hora }] },
          ],
        },
        {
          marginTop: 25,
          text: [
            acompPaci(),
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: " por medio de la presente y en pleno y normal uso de mis facultades físicas y mentales, otorgo de forma libre y autónoma mi consentimiento al Equipo Interdisciplinario, quienes obran como evaluadores para que se lleve a cabo el procedimiento de certificación y registro de caracterización de personas con discapacidad, del mismo modo se me ha informado que este equipo cuenta con personal idóneo, competente y capacitado para realizar la valoración clínica multidisciplinario simultánea, fundamentado en la clasificación internacional del funcionamiento de la discapacidad y de la salud (CIF), que permite establecer la existencia de discapacidad a partir de la identificación de las deficiencias en funciones y estructuras corporales incluyendo las psicológicas, las limitaciones en la actividad y las restricciones en la participación que presenta una persona. Doy constancia de que se me ha explicado en lenguaje sencillo y claro, teniendo en cuenta los ajustes razonables para llevar a cabo el consentimiento informado (barreras comunicacionales, actitudinales o físicas), entendible para mí, los aspectos relacionados con mi condición actual, los riesgos y beneficios, se me ha permitido hacer todas las preguntas necesarias y han sido resueltas satisfactoriamente.",
            },
          ],
        },
        {
          marginTop: 15,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Me han explicado la naturaleza y el propósito de esta certificación, donde la información que de este se derive y sus resultados se registraran en el “Registro de Localización y caracterización de personas con Discapacidad” y que será utilizada para apoyar la formulación, implementación y seguimiento de políticas públicas, planes, programas, y proyectos, orientados a la garantía de los derechos de las personas con discapacidad, como medio de verificación de la existencia de discapacidad o priorización para programas sociales y para el re direccionamiento a la oferta programática institucional.",
        },
        {
          marginTop: 15,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Me han explicado que de no estar de acuerdo con el resultado del procedimiento obtenido de la certificación de discapacidad, se podrá solicitar una segunda opinión por una (1) única vez en cualquier tiempo, solicitando a la secretaria de salud municipal para que genere la orden para realizar el nuevo procedimiento de certificación de discapacidad con un equipo interdisciplinario diferente y la IPS asignara la cita.",
        },
        {
          marginTop: 15,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Me han explicado que la actualización del certificado según el artículo 12 de la resolución 1239 del 21 de julio de 2022 se podrá realizar cuando: ",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          ul: [
            { marginTop: 5, text: "Cuando el menor de edad cumpla seis (6) años." },
            { marginTop: 10, text: "Cuando el menor de edad cumpla dieciocho (18) años." },
            {
              marginTop: 10,
              text: "Cuando el criterio médico tratante se modifiquen las deficiencias corporales, limitaciones en las actividades o restricciones en la participación, por efecto de la evolución positiva o negativa de la condición de salud.",
            },
          ],
        },
        {
          marginTop: 15,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Se me ha explicado que la ruta mediante la cual se puede acceder al certificado de discapacidad es ingresando al Sistema integrado de información de la protección social SISPRO.",
        },
        {
          marginTop: 15,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Me han explicado también que, de negarme a realizarme la valoración y el procedimiento de certificación, estoy asumiendo la responsabilidad por sus consecuencias como de no hacer parte de la localización y caracterización de las personas con discapacidad sin contar con los beneficios que de ello se deriven, con lo que exonero de ellas al equipo interdisciplinario y a la institución (IPS), sin embargo, ello no significa que pierda mis derechos para una atención posterior. Por lo tanto, en forma consciente y voluntaria, sin haber sido objeto de coacción, persuasión, ni manipulación:",
        },
        autorizaRevoca(),
        {
          marginTop: 5,
          alignment: "justify",
          text: [
            {
              style: "bodyNoBold9",
              text: " Este consentimiento informado es asistido",
            },
            { bold: true, style: "bodyNoBold9", text: " SI: " },
            {
              bold: true,
              decoration: "underline",
              style: "bodyNoBold9",
              text: datos.conse_asist == "S" ? " X " : "     ",
            },
            {
              style: "bodyNoBold9",
              text: " donde se utilizaron acciones como: ",
            },
            {
              bold: true,
              style: "bodyNoBold9",
              text: datos.acciones,
            },
            {
              style: "bodyNoBold9",
              text: " con el fin de proteger la expresión de la voluntad de la persona con discapacidad. Este consentimiento informado",
            },
            { bold: true, style: "bodyNoBold9", text: " NO: " },
            {
              bold: true,
              decoration: "underline",
              style: "bodyNoBold9",
              text: datos.conse_asist == "N" ? " X " : "     ",
            },
            {
              style: "bodyNoBold9",
              text: " es asistido.",
            },
          ],
        },
        { marginTop: 5, bold: true, style: "bodyNoBold9", text: "RECIBI CERTIFICADO DE DISCAPACIDAD EN FISICO A CONFORMIDAD." },
      ],
    };
  }

  function autorizaRevoca() {
    if (datos.autorizo) {
      return {
        stack: [
          {
            marginTop: 5,
            alignment: "justify",
            text: [
              { pageBreak: "before", marginTop: 5, bold: true, decoration: "underline", alignment: "center", style: "bodyNoBold9", text: "AUTORIZO" },
              {
                style: "bodyNoBold9",
                text: " al equipo interdisciplinario de la IPS ESE HOSPITAL LOCAL DE TAURAMENA, para realizar la valoración para la certificación y el procedimiento que requiere la caracterización y localización de la persona con discapacidad.",
              },
            ],
          },
        ],
      };
    } else {
      return {
        stack: [
          {
            pageBreak: "before",
            marginTop: 5,
            alignment: "justify",
            text: [
              {
                style: "bodyNoBold9",
                text: "Expreso mi voluntad de ",
              },
              {
                marginTop: 5,
                bold: true,
                decoration: "underline",
                alignment: "center",
                style: "bodyNoBold9",
                text: "REVOCAR",
              },
              {
                style: "bodyNoBold9",
                text: " el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme a la valoración para la certificación, localización y caracterización de personas con discapacidad por los siguientes motivos:",
              },
            ],
          },
          { marginTop: 5, alignment: "justify", style: "bodyNoBold9", bold: true, text: datos.motivo_revoca },
        ],
      };
    }
  }

  function acompPaci() {
    if (!datos.acomp.cod) {
      return {
        marginTop: 10,
        alignment: "justify",
        text: [
          { style: "bodyNoBold9", text: "Yo, " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip.trim() + "," },
          { style: "bodyNoBold9", text: "identificado(a) con " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.tipo_id.trim() + " " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.cod.trim() },
          { style: "bodyNoBold9", text: " expedida en " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip_ciudad.trim() },
          { style: "bodyNoBold9", text: " actuando en nombre propio, " },
        ],
      };
    } else {
      return {
        marginTop: 10,
        alignment: "justify",
        text: [
          { style: "bodyNoBold9", text: "Yo, " },
          { bold: true, style: "bodyNoBold9", text: datos.acomp.descrip.trim() + "," },
          { style: "bodyNoBold9", text: " identifcado(a) con " },
          { bold: true, style: "bodyNoBold9", text: datos.acomp.tipo_id.trim() },
          { style: "bodyNoBold9", text: " " },
          { bold: true, style: "bodyNoBold9", text: datos.acomp.cod.trim() + "," },
          { style: "bodyNoBold9", text: " expedida en " },
          { bold: true, style: "bodyNoBold9", text: datos.acomp.descrip_ciudad.trim() },
          { style: "bodyNoBold9", text: " actuando como acudiente del paciente " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip.trim() + "," },
          { style: "bodyNoBold9", text: " identifcado(a) con " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.tipo_id.trim() },
          { style: "bodyNoBold9", text: " " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.cod.trim() + "," },
        ],
      };
    }
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
