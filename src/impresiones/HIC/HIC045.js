import { calcularEdad, evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHIC045 = ({ datos }) => {
  var discapacidad = {
    1: "SIN DISCAPACIDAD",
    2: "DISCAPACIDAD FISICA",
    3: "DISCAPACIDAD AUDITIVA",
    4: "DISCAPACIDAD VISUAL",
    5: "DISCAPACIDAD MENTAL",
    6: "DISCAPACIDAD COGNITIVA",
  };
  const parentesco = {
    1: "MADRE",
    2: "PADRE",
    3: "HIJO(A)",
    4: "ESPOSO(A)",
    5: "HERMANO(A)",
    6: "TIO(A)",
    7: "SOBRINO(A)",
    8: "PRIMO(A)",
    9: "MADRASTRA",
    10: "PADRASTRO",
    11: "AMIGO(A)",
    12: "ABUELO(A)",
  };
  var dd = {
    stack: [contenidoConsen(), firmas()],
  };
  function contenidoConsen() {
    return {
      stack: [
        {
          columns: [
            {
              fontSize: 10,
              marginTop: 10,
              text: [{ text: "Ciudad: ", bold: true }, { text: datos.empresa.ciudad_usuar }],
            },
            {
              fontSize: 10,
              marginTop: 5,
              text: [{ text: "Fecha: ", bold: true }, { text: dayjs(datos.fecha_act).format("YYYY-MM-DD") }],
              alignment: "right",
            },
          ],
        },

        {
          fontSize: 10,
          marginTop: 5,
          text: [{ text: "Nombre: ", bold: true }, { text: datos.paciente.descrip }],
        },
        {
          fontSize: 10,
          marginTop: 5,
          text: [{ text: "Tipo de indentificación: ", bold: true }, { text: datos.paciente.tipo_id }],
        },
        {
          fontSize: 10,
          marginTop: 5,
          columns: [
            {
              text: [{ text: "Numero documento de indentificación: ", bold: true }, { text: datos.paciente.cod }],
            },
          ],
        },
        {
          fontSize: 10,
          marginTop: 5,
          text: [{ text: "Edad: ", bold: true }, { text: calcularEdad(datos.paciente.nacim) }],
        },
        {
          fontSize: 10,
          marginTop: 5,
          text: [{ text: "Hora: ", bold: true }, { text: dayjs().format("hh:mm A") }],
        },
        //QUEDA PENDIENTE EL CONVENIO, PETICION DE LORNA
        // {
        //   marginTop: 5,
        //   text: [{ text: "Convenio: ", bold: true }, { text: datos.paciente.tipo_id }],
        // },
        {
          fontSize: 10,
          marginTop: 5,
          text: [
            { text: "Procedimiento a realizar: ", bold: true },
            {
              alignment: "justify",
              text: datos.procedimiento,
            },
          ],
        },
        {
          fontSize: 10,
          marginTop: 5,
          text: [
            { text: "Beneficios esperados: ", bold: true },
            {
              alignment: "justify",
              text: "Los pacientes pueden ser diagnosticados,lo que puede contrubuir a mejores resultados y tratamiento médico.",
            },
          ],
        },
        {
          fontSize: 10,
          marginTop: 5,
          text: [
            { text: "Riesgos o posibles complicaciones derivadas: ", bold: true },
            {
              alignment: "justify",
              text: "A pesar de los esfuerzos razonables de protección, la transmisión de la información médica, se pueden presentar las siguientes complicaciones. Infarto de Miocardio, Asistolia, Fibrilación Ventricular, Taquicardia Ventricular, Arritmias Supraventriculares, Espasmo Coronario, Hipotensión, Hipertensión, Hipersensibilidad a medicamentos (según estudio), Caidas desde su propia altura, trauma laringeo y esofagico (ETE).",
            },
          ],
        },

        {
          fontSize: 10,
          marginTop: 5,
          alignment: "justify",
          text: "Manifiesto  que me han explicado en términos comprensibles en que consiste el(os) procedimiento(s), cuales son sus beneficios, prosibles riesgos y complicaciones, que han sido aclaradas todas mis dudas e inquietudes sobre la atención,  en palabras claras y fácilmente comprensibles y sé que en cualquier momento puedo negar o retirar mi consentimiento para la realización del procedimiento citado anteriormente . Luego de comprender y ponderar la información recibida, doy mi consentimiento libre y espontáneo, en pleno uso de mis capacidades mentales, para acceder a la prestación del servicio en esta Institución.",
        },
        {
          fontSize: 10,
          marginTop: 5,
          alignment: "justify",
          bold: true,
          text: "MANIFIESTO QUE HE LEÍDO EN SU INTEGRIDAD EL PRESENTE DOCUMENTO Y QUE TODOS LOS ESPACIOS EN BLANCO PRECEDENTES HAN SIDO DILIGENCIADOS ANTES DE MI FIRMA.",
        },
        {
          fontSize: 10,
          marginTop: 10,
          alignment: "justify",
          bold: true,
          text: datos.acomp.descrip.trim() != "" ? "EN CASO DE INCAPACIDAD DEL PACIENTE Y/O MENOR DE EDAD." : "",
        },
        {
          fontSize: 10,
          marginTop: 5,
          alignment: "justify",
          text:
            datos.acomp.descrip.trim() == ""
              ? ""
              : [
                  "Motivo de la incapacidad: ",
                  { text: discapacidad[Number(datos.paciente.discap)], style: "header", bold: true },
                  "relación/parentesco: ",
                  { text: parentesco[Number(datos.paren_acomp)], style: "header", bold: true },
                  " .Yo ",
                  { text: datos.paciente.descrip, style: "header", bold: true },

                  "identificado con ",
                  { text: datos.paciente.tipo_id, style: "header", bold: true },

                  " N°",
                  { text: datos.paciente.cod, style: "header", bold: true },
                  " en mi calidad de Representante Legal del paciente, manifiesto que he leído en su integridad el presente documento y que me han explicado claramente en qué consiste la modalidad de atención de telemedicina citada en este documento cuáles son sus beneficios, posibles riesgos y mis responsabilidades. Con base en lo anterior, de manera libre y espontánea, autorizo que se realice la teleconsulta, teniendo en cuenta que se ha acreditado previamente la incapacidad de mi representado para dar su consentimiento frente a la realización de esta modalidad de atención.",
                ],
        },
        textoAutoriza(datos.disentimiento),
      ],
    };
  }
  return dd;

  function firmas() {
    let firmasArray = [];
    let anchos = [];
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
          marginTop: 8,
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

  function textoAutoriza(disentir) {
    const textoDisiente = {
      stack: [
        {
          marginTop: 10,
          text: "DISENTIMIENTO",
          alignment: "center",
          style: "bodyNoBold",
          bold: true,
        },
        {
          marginTop: 5,
          text: [
            {
              text: `En calidad de paciente y/o acudiente, disiento este consentimiento que he prestado sobre el procedimiento: ${datos.procedimiento}. \n`,
            },
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 5,
          marginBottom: 10,
          text: [
            {
              text: "OBSERVACIONES:\n",
              marginTop: 15,
              bold: true,
            },
            {
              text: `${datos?.reg_coninf2?.obser_disenti}`,
            },
          ],

          alignment: "justify",
          style: "bodyNoBold",
        },
      ],
    };

    if (disentir == "S") return textoDisiente;
    else return { text: "" };
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
};
