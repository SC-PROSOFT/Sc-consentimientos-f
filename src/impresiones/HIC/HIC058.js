import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionHIC058 = ({ datos }) => {
  console.log("datos ", datos);

  var dd = {
    stack: [contenidoHIC058(), firmas()],
  };

  function contenidoHIC058() {
    return {
      stack: [
        {
          marginTop: 8,
          text: [
            { bold: true, style: "tableTitle", text: " Fecha: " },
            { style: "bodyNoBold9", text: datos.fecha },
          ],
        },
        {
          alignment: "center",
          marginTop: 8,
          text: [{ bold: true, style: "bodyNoBold9", text: "CONSENTIMIENTO DE INSERCIÓN DEL IMPLANTE SUBDERMICO" }],
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "Dentro de las normas éticas exigidas por la Ley 23 de 1981, se encuentra el deber de informar adecuada y oportunamente a todos sus pacientes los riesgos que puedan derivarse del tratamiento que le será practicado, solicitando su consentimiento anticipadamente e igualmente lo exige la guía para la atención en planificación familiar a hombres y mujeres.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "El procedimiento consiste en: Previo asepsia con un antiséptico adecuado, se inserta debajo de la piel, dos barras que contienen hormona anticonceptiva (levonorgestrel X 75 mg) a través de una pequeña inserción no mayor a dos milímetros (no requiere sutura); realizada en una zona de la piel sana de la cara interna del brazo izquierdo o derecho según sea la mujer diestra o zurda, en donde ha sido aplicada anestésico local previamente. Una vez insertadas las barras se procede a colocar un vendaje, el cual debe ser removido solo por un profesional de la salud al tercer o cuarto día posterior a la consulta de inserción. Algunas de las reacciones adversas se pueden presentar en alrededor del 10% de las usuarias.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            { text: "Yo " },
            { text: datos.paciente.descrip },
            { text: " identificada " },
            { text: datos.tipo_id },
            { text: "  " },
            { text: datos.paciente.cod },
            { text: " , expedida en " },
            { text: datos.paciente.descrip_ciudad },
            { text: " , declaro que he sido suficientemente informada en términos claros y comprensibles por " },
            { text: datos.prof_informa },
            { text: " , identificado(a) con C.C No. " },
            { text: datos.cod_prof_informa },
            { text: " , acerca del procedimiento inserción de implante subdérmico hormonal." },
          ],
          style: "bodyNoBold9",
        },
        {
          alignment: "center",
          marginTop: 8,
          text: [{ bold: true, style: "bodyNoBold9", text: "DECLARO" }],
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "1- Me han explicado en un lenguaje claro y comprensible la naturaleza y propósito del  procedimiento, también me han informado de las ventajas, complicaciones, molestias y  riesgos que pueden producirse, tales como aumento de peso, acné, nauseas pasajeras, leve dolor mamario o pélvico, cervicitis, secreción genital o prurito, irregularidades menstruales (hemorragia, ausencia de menstruación por periodos largos o manchados intermitentes) y cefalea, que disminuyen en la medida que el organismo se adapte al implante.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "2- Se me ha dado la oportunidad de hacer preguntas y mis preguntas han sido contestadas satisfactoriamente.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "3- Se me ha informado plenamente que retirado el implante y al no iniciar inmediatamente otro método de planificación familiar tengo la oportunidad de quedar embarazada.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "4- Se me ha informado de todos los signos de alarma por los cuales debo consultar una vez se me haya realizado el procedimiento tales como: fiebre, enrojecimiento, sangrado y salida de secreción por el sitio de incisión, dolor de cabeza intenso que no cede a la toma de analgésicos, dolor intenso del brazo en el cual fue insertado el implante subdermico.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "5- Tengo la opción de decidir en contra del procedimiento (sin sacrificar mis derechos a servicios o beneficios médicos, de salud y otros dentro de la eps).",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "6- Se me explico que el embarazo con este método de planificación familiar ocurre en una proporción de de menos de 1 en 100 mujeres al año.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "7- Se me explico que las contraindicaciones son: enfermedad trombo embolica venosa activa, presencia o antecedentes de enfermedad hepática severa, presencia o antecedentes de tumores hepáticos malignos o benignos, sospecha o certeza de neoplasias malignas dependientes de hormonas sexuales, hemorragia vaginal sin diagnosticar; para lo cual existe registro en la historia clínica.",
          style: "bodyNoBold9",
        },
        {
          bold: true,
          marginTop: 8,
          alignment: "justify",
          text: "CERTIFICO QUE HE LEIDO Y COMPRENDIDO PERFECTAMENTE LO ANTERIOR Y QUE TODOS LOS ESPACIOS EN BLANCO HAN SIDO COMPLETADOS ENTES DE MI FIRMA Y QUE ME ENCUENTRO EN LIBERTAD DE EXPRESAR MI VOLUNTAD Y POR LO TANTO AUTORIZO ME SEA REALIZADO EL PRECEDIMIENTO.",
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
