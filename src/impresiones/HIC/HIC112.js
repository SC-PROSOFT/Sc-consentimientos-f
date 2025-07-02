import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";
const { getEmpresa } = useModuleFormatos();
export const impresionHIC112 = ({ datos }) => {
  console.log("impresionHIC112 -> ", datos);

  var dd = {
    stack: [contenidoHIC112(), firmas()],
  };

  function contenidoHIC112() {
    return {
      stack: [
        {
          alignment: "center",
          bold: true,
          style: "bodyNoBold9",
          text: "(Resolución 3100 de 2019, Resolución 2654 de 2019 y Resolución 465 de 2025)",
        },
        {
          marginTop: 3,
          bold: true,
          style: "bodyNoBold9",
          text: "I. DATOS DEL USUARIO:",
        },
        {
          marginTop: 3,
          ul: [
            {
              text: [
                { bold: true, style: "bodyNoBold9", text: "Nombre del paciente: " },
                {
                  style: "bodyNoBold9",
                  text: datos.paciente.descrip,
                },
              ],
            },
            {
              text: [
                { bold: true, style: "bodyNoBold9", text: "Tipo de documento: " },
                {
                  style: "bodyNoBold9",
                  text: datos.paciente.tipo_id,
                },
                { bold: true, style: "bodyNoBold9", text: " No. " },
                {
                  style: "bodyNoBold9",
                  text: datos.paciente.cod,
                },
              ],
            },
            {
              text: [
                { bold: true, style: "bodyNoBold9", text: "Edad: " },
                {
                  style: "bodyNoBold9",
                  text: calcularEdad(datos.paciente.nacim),
                },
                { bold: true, style: "bodyNoBold9", text: " Sexo: " },
                {
                  style: "bodyNoBold9",
                  text: datos.paciente.sexo,
                },
              ],
            },
            {
              text: [
                { bold: true, style: "bodyNoBold9", text: "EPS: " },
                {
                  style: "bodyNoBold9",
                  text: datos.paciente.descrip_eps,
                },
              ],
            },
            {
              text: [
                { bold: true, style: "bodyNoBold9", text: "Nombre del acudiente: " },
                {
                  style: "bodyNoBold9",
                  text: datos.acomp.descrip,
                },
              ],
            },
            {
              text: [
                { bold: true, style: "bodyNoBold9", text: "Parentesco: " },
                {
                  style: "bodyNoBold9",
                  text: evaluarParentesco(datos.paren_acomp),
                },
              ],
            },
            {
              text: [
                { bold: true, style: "bodyNoBold9", text: "Teléfono de contacto: " },
                {
                  style: "bodyNoBold9",
                  text: datos.paciente.telefono,
                },
                { bold: true, style: "bodyNoBold9", text: " Correo de contacto: " },
                {
                  style: "bodyNoBold9",
                  text: datos.paciente.email,
                },
              ],
            },
            {
              text: [
                { bold: true, style: "bodyNoBold9", text: "Fecha: " },
                {
                  style: "bodyNoBold9",
                  text: datos.fecha,
                },
              ],
            },
          ],
        },
        {
          marginTop: 10,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "La edad y estado de conciencia del paciente permiten firmar este documento: ",
            },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: "SI " },
            { bold: true, decoration: "underline", alignment: "center", style: "bodyNoBold9", text: datos.paci_firma == "S" ? " X " : "   " },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: "   NO " },
            { bold: true, decoration: "underline", alignment: "center", style: "bodyNoBold9", text: datos.paci_firma == "N" ? " X " : "   " },
          ],
        },
        {
          marginTop: 10,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Diagnóstico principal: " },
            { alignment: "justify", style: "bodyNoBold9", text: datos.diagnostico_princip },
          ],
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "II. INFORMACIÓN GENERAL DEL SERVICIO",
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "La hospitalización en salud mental y/o por consumo de sustancias psicoactivas tiene como objetivo brindar atención integral e interdisciplinaria al paciente, en un entorno seguro, estructurado y terapéutico.",
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "El servicio está orientado a la estabilización clínica, manejo terapéutico, desintoxicación (cuando aplique), intervención psicosocial y preparación para la reintegración social y familiar.",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "III. BENEFICIOS ESPERADOS DE LA INTERNACIÓN",
        },
        {
          marginTop: 5,
          ul: [
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Estabilización del estado de salud mental y/o manejo del síndrome de abstinencia.",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Reducción de riesgos para la vida o integridad del paciente y terceros.",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Acceso a intervención psicoterapéutica, farmacológica y ocupacional.",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Trabajo multidisciplinario (psiquiatría, psicología, enfermería, trabajo social, terapia ocupacional).",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Apoyo y orientación a la familia/acudiente.",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Plan de tratamiento estructurado y seguimiento individualizado.",
            },
          ],
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "IV. RIESGOS POSIBLES DE LA INTERNACIÓN",
        },
        {
          marginTop: 5,
          ul: [
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Cambios emocionales y comportamentales como parte del proceso terapéutico.",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Reacciones adversas a medicamentos.",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Conflictos con otros pacientes u operadores.",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Riesgo de autolesión o intento de fuga (aunque se implementan medidas preventivas).",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Interrupción temporal de dinámicas familiares, sociales o académicas.",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Riesgo de recaída posterior si no se continúa el tratamiento ambulatorio.",
            },
          ],
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "V. SISTEMA DE VIDEOVIGILANCIA",
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Conforme a lo establecido en la Resolución 465 de 2025, informamos que esta IPS cuenta con un sistema de videovigilancia interna, instalado en zonas comunes (pasillos, áreas de recreación, comedores, etc.) con el único propósito de proteger la integridad, seguridad y bienestar de los pacientes, del personal y visitantes.",
        },
        {
          marginTop: 5,
          ul: [
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "No se realizan grabaciones en zonas íntimas (baños, duchas, habitaciones cerradas).",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Las grabaciones se almacenan conforme a la normatividad vigente y solo podrán ser usadas con fines clínicos, legales o por solicitud de autoridad competente.",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "El paciente y/o acudiente acepta el uso de este sistema en pro del bienestar general.",
            },
          ],
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "VI. DESISTIMIENTO VOLUNTARIO DEL TRATAMIENTO",
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Se informa que el paciente o su acudiente tienen derecho a retirar el consentimiento en cualquier momento. Sin embargo, en casos donde se determine que el retiro del paciente puede representar un riesgo inminente para sí mismo o para otros, y se cuenta con orden de hospitalización involuntaria (según lo dispuesto en la ley), se podrán aplicar las medidas contempladas en la legislación colombiana para proteger su vida e integridad.",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          text: "VII. DECLARACIÓN DE CONSENTIMIENTO",
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Declaro que he recibido una explicación clara y comprensible sobre: ",
        },
        {
          marginTop: 5,
          ul: [
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "El objetivo del servicio de hospitalización, sus beneficios y riesgos.",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "El uso de cámaras de videovigilancia en áreas comunes.",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Mi derecho a recibir atención digna, segura y libre de tratos crueles o discriminatorios.",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "La posibilidad de retirarme del tratamiento de forma voluntaria (cuando aplique legalmente).",
            },
          ],
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Después de haber tenido la oportunidad de realizar preguntas, las cuales fueron resueltas satisfactoriamente, acepto voluntariamente el ingreso al servicio de hospitalización en salud mental y/o tratamiento por consumo de sustancias psicoactivas.",
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
