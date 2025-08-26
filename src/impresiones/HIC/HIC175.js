import { calcularEdad, evaluarParentesco } from "@/formatos/utils";
export const impresionHIC175 = ({ datos }) => {
  console.log("impresionHIC175 -> ", datos);

  var dd = {
    stack: [contenidoHIC175(), firmas()],
  };
  function contenidoHIC175() {
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
          marginTop: 2,
          style: "bodyNoBold9",
          columns: [
            { width: "50%", alignment: "left", text: [{ bold: true, text: "Nombre de la paciente: " }, { text: datos.paciente.descrip }] },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Edad: " }, { text: calcularEdad(datos.paciente.nacim) }] },
          ],
        },
        {
          marginTop: 2,
          style: "bodyNoBold9",
          columns: [
            {
              width: "60%",
              alignment: "left",
              text: [
                { bold: true, text: "Indentificada con: " },
                { text: datos.paciente.tipo_id },
                { bold: true, text: " Numero: " },
                { text: datos.paciente.cod },
              ],
            },
            { width: "40%", alignment: "right", text: [{ bold: true, text: "Telefono: " }, { text: datos.paciente.telefono }] },
          ],
        },
        {
          marginTop: 2,
          style: "bodyNoBold9",
          columns: [
            {
              width: "100%",
              alignment: "left",
              text: [{ bold: true, text: "Diagnostico: " }, { text: datos.diagnostico + "  " + datos.descrip_enfer }],
            },
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          ul: [
            {
              marginTop: 5,
              alignment: "justify",
              text: "Por medio de la presente constancia, en pleno uso de mis facultades mentales, otorgo en forma libre mi consentimiento a la E.S.E HOSPITAL LOCAL DE TAURAMENA a que por medio de médico en ejercicio de su profesión, así como por los demás profesionales de la salud que se requieran y con el concurso del personal auxiliar de servicios asistenciales lo mismo que del personal en formación, se sirva realizarme el procedentico, denominado: ",
            },
          ],
        },
        {
          marginTop: 15,
          alignment: "justify",
          style: "bodyNoBold9",
          bold: true,
          text: "ATENCION HOSPITALARIA DEL TRABAJO DE PARTO Y POST PARTO.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          bold: true,
          text: "Durante la atención puede ser necesario:",
        },
        {
          marginTop: 10,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La aplicación de Oxitocina (Pitocín) para la inducción y el manejo activo del trabajo de parto.",
        },
        {
          marginTop: 1,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La aplicación de Analgesia Epidural para disminuir el dolor ocasionado por las contracciones uterinas.",
        },
        {
          marginTop: 1,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La realización de Amniotomía (ruptura artificial de las membranas ovulares) como parte del manejo activo del trabajo de parto.",
        },
        {
          marginTop: 1,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La atención del parto por vía vaginal como primera opción.",
        },
        {
          marginTop: 1,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La atención del parto con instrumentos como Fórceps, cuando esté completamente justificada su aplicación.",
        },
        {
          marginTop: 1,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La aplicación de cualquier medicamento o la realización de los procedimientos que se requieran para tener el resultado deseado.",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          ul: [
            {
              marginTop: 5,
              alignment: "justify",
              text: "La E.S.E HOSPITAL LOCAL DE TAURAMENA CASANARE queda autorizada para llevar a cabo igualmente la práctica de conductas o procedimientos médicos adicionales a los ya autorizados, si en el curso de la intervención quirúrgica o del procedimiento llegare a presentarse una imprevista que, a juicio del médico tratante, los haga aconsejables.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: [
                {
                  text: "El consentimiento y autorización que anteceden, han sido otorgados previa evaluación que de mi estado de salud ha hecho, a nombre de la E.S.E HOSPITAL LOCAL DE TAURAMENA CASANARE, el doctor: ",
                },
                { bold: true, text: datos.nomb_medico },
                {
                  text: "con el objeto de identificar mis condiciones clínico - patológicas previa advertencia que, dicho médico me ha hecho ser conocedora, con respecto a los riesgos previstos y consecuentes, en los términos en los cuales lo ha consignado en la historia clínica.",
                },
              ],
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Declaro que he sido advertida por la E.S.E HOSPITAL LOCAL DE TAURAMENA CASANARE, en sentido de que la práctica de la atención que requiero compromete una ACTIVIDAD MÉDICA DE MEDIOS, PERO NO DE RESULTADOS. ",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Autorizo expresamente a las personas del equipo de salud hospitalario que tendrán a su cargo mi tratamiento para que me realicen terapias y procedimientos ordenados por mi médico tratante.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "He sido informada en forma clara acerca de la naturaleza y propósito del tratamiento y de las sustancias y medicamentos involucrados, beneficios, complicaciones, efectos secundarios, riesgos o consecuencias que pueden ocurrir por la instauración de dichos tratamientos.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "He comprendido el riesgo inherente a los tratamientos y procedimientos practicados por el personal de enfermería bajo las órdenes de mi médico tratante.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Certifico que el presente documento lo he leído y atendido íntegramente.",
            },
          ],
        },
      ],
    };
  }

  function autorizaRevoca() {
    if (datos.autorizo) {
      return {
        stack: [
          {
            pageBreak: "before",
            marginTop: 5,
            alignment: "justify",
            text: [
              { marginTop: 5, bold: true, decoration: "underline", alignment: "center", style: "bodyNoBold9", text: "AUTORIZO" },
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
