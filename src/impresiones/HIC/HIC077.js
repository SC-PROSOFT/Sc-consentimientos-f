import { evaluarParentesco, evaluarClaseServ } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getEmpresa } = useModuleFormatos();

export const impresionHIC077 = ({ datos }) => {
  console.log("datos ", datos);
  var dd = {
    stack: [contenidoHIC077(), firmas()],
  };
  function contenidoHIC077() {
    return {
      stack: [
        {
          style: "bodyNoBold9",
          text: [
            { bold: true, text: "Servicio: " },
            {
              text: evaluarClaseServ(datos.servicio),
            },
            { bold: true, text: " Lugar: " },
            {
              text: getEmpresa.nomusu + "\n",
            },
            { bold: true, text: " Nombre del paciente: " },
            {
              text: datos.paciente.descrip,
            },
            { bold: true, text: " Identificación: " },
            {
              text: datos.paciente.tipo_id + " ",
            },
            {
              text: datos.paciente.cod,
            },
            { bold: true, text: " Fecha: " },
            {
              text: datos.fecha,
            },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Señor(a) usuario (a): Se le va a realizar una exploración imagenológica que utilizara radiación ionizante, en forma de rayos X, por lo anterior es necesario que usted informe si tiene sospechas de estado de embarazo para que el profesional tome consideraciones especiales en su caso y medidas protectoras para minimizar el riesgo de irradiación.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Para proporcionar una información que nos ayuda a identificar y tratar mejor su enfermedad el tecnólogo en imágenes diagnosticas lo ubicara en el Equipo de Radiología Convencional, en el cual usted adoptara algunas posiciones sugeridas por el profesional tomándose una serie de protecciones que permitirán llevar a cabo el procedimiento solicitado.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Beneficios del procedimiento: El estudio es necesario para su diagnostico y decide realizarse el RX propuesto debe saber que se efectúa con equipos calibrados y utilizados por personal calificado que minimizan la exposición a las radiaciones ionizantes protegiendo su cuerpo en la medida de lo posible. SOLO se le realizaran las radiografías indispensables.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          bold: true,
          text: "RIESGO:",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "La realización de los estudios radiológicos se justifica bajo análisis de la relación riesgo beneficio realizado tanto por el medico tratante como por el medico radiólogo con el fin de tomar decisiones acertadas para el diagnostico y tratamiento y seguimiento de la patología en estudio.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "El Riesgo Potencial a la exposición de la radiación es bajo comparado con los beneficios obtenidos del estudio de la imagen médica.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Una ligera elevación del riesgo de padecer alguna neoplasia en el futuro. Este riesgo en menor al 0.5%, por lo que se puede considerar muy bajo en comparación con la incidencia normal de las neoplasias en la población, que es del 33% para las mujeres y 50% para los hombres de acuerdo con la Sociedad Americana de Oncología.",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            { bold: true, text: "HE COMPRENDIDO CON CLARIDAD TODO LO ESCRITO ANTERIORMENTE " },
            {
              text: "Yo he tenido la oportunidad de preguntar y resolver todas mis dudas.",
            },
            { bold: true, text: " ACEPTO SI" },
            {
              text: { bold: true, decoration: "underline", text: datos.atorizo ? " X " : "    " },
            },
            { bold: true, text: " NO" },
            {
              text: { bold: true, decoration: "underline", text: !datos.atorizo ? " X " : "    " },
            },
            { bold: true, text: "LA REALIZACION DEL EXAMEN – DECLARO QUE LA DECISION QUE TOMO ES LIBRE Y VOLUNTARIA " },
            { bold: true, text: "SI" },
            {
              text: { bold: true, decoration: "underline", text: datos.atorizo ? " X " : "    " },
            },
            { bold: true, text: " NO" },
            {
              text: { bold: true, decoration: "underline", text: !datos.atorizo ? " X " : "    " },
            },
            { bold: true, text: " DOY MI CONSENTIMIENTO " },
            {
              text: " para que el profesional Tecnólogo en imágenes Diagnosticas me realice el procedimiento diagnostico solicitado por el médico tratante",
            },
            { bold: true, text: " SI " },
            {
              text: " he aceptado la toma del estudio, la entidad en mención y el tecnólogo en imágenes, quedan autorizados para llevar a cabo las conductas o procedimientos Imagenológicos necesarios tendientes a resolver las complicaciones imprevistas del procedimiento que mediante este documento autorizo.",
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
