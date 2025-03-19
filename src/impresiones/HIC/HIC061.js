import { evaluarParentesco } from "@/formatos/utils";
export const impresionHIC061 = ({ datos }) => {
  var dd = {
    stack: [datos.acomp.cod.trim() != "" ? contenidoHIC061Acomp() : contenidoHIC061Paci(), firmas()],
  };
  function contenidoHIC061Paci() {
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
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            { text: "Yo " },
            { bold: true, text: datos.paciente.descrip },
            {
              text: " identificado(a) con ",
            },
            { bold: true, text: datos.paciente.tipo_id },
            {
              text: " N°. ",
            },
            { bold: true, text: datos.paciente.cod },
            {
              text: ", con residencia en ",
            },
            { bold: true, text: datos.paciente.descrip_ciudad },
            {
              text: ",  número de teléfono ",
            },
            { bold: true, text: datos.paciente.telefono },
            {
              text: ",  manifiesto a ustedes mi aceptación del proceso de consulta por psicología ofrecido por la E.S.E Primer Nivel Granada Salud, reconociendo que me han explicado y he comprendido las condiciones generales de la atención, por lo cual, pongo en conocimiento que mi asistencia es voluntaria y hace parte de mi proceso de recuperación y bienestar emocional.",
            },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Entiendo que toda la información obtenida y resultados referentes a mi procedimiento, serán tratados bajo confidencialidad y anonimato, como lo dicta el código Deontológico y Bioético y otras disposiciones, no será divulgada ni entregada sin mi consentimiento expreso, excepto cuando la orden de entrega provenga de una autoridad judicial competente (conforme al artículo 25 de la Ley 1090 de 2006). También entiendo y por lo tanto estoy de acuerdo con la necesidad de quebrantar este principio de confidencialidad en caso de presentarse situaciones que pongan en grave peligro mi integridad física o mental o de algún miembro de la comunidad. (Ley 1090 de 2006).",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Autorizo al psicólogo profesional a cargo de mi proceso para que consulte mi situación con otros profesionales de la E.S.E Primer Nivel Granada o terceros expertos para brindar la mejor atención posible. Reconozco que la información que le brindo al profesional es verdadera y corresponde a mi realidad, ya que sobre dicha información se plantean las propuestas de la orientación. También reconozco que la decisión de continuar o suspender las consultas por psicología y las actividades programadas, son tomadas por mí. La orientación psicológica requiere mi compromiso, asistencia, puntualidad, participación, además de mi colaboración al diligenciar registros, documentos, pruebas con información personal que será utilizada por el profesional para el proceso de consulta por psicología.",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "He leído, comprendido y accedido de manera voluntaria a lo anterior mencionado.",
        },
      ],
    };
  }
  function contenidoHIC061Acomp() {
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
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            { text: "Yo " },
            { bold: true, text: datos.acomp.descrip },
            {
              text: " identificado(a) con ",
            },
            { bold: true, text: datos.acomp.tipo_id },
            {
              text: " N°. ",
            },
            { bold: true, text: datos.acomp.cod },
            {
              text: ", con residencia en ",
            },
            { bold: true, text: datos.acomp.descrip_ciudad },
            {
              text: ",  número de teléfono ",
            },
            { bold: true, text: datos.acomp.telefono },
            {
              text: ", obrando en calidad de representante legal del (la) menor",
            },
            { bold: true, text: datos.paciente.descrip },
            {
              text: " identificado(a) con ",
            },
            { bold: true, text: datos.paciente.tipo_id },
            {
              text: " N°. ",
            },
            { bold: true, text: datos.paciente.cod },
            {
              text: " expedida en ",
            },
            { bold: true, text: datos.paciente.descrip_ciudad },
            {
              text: " manifiesto a ustedes que se me ha informado del proceso de consulta por psicología ofrecido por la E.S.E Primer Nivel Granada Salud, reconociendo que me han explicado y he comprendido las condiciones generales de la atención, por lo cual, pongo en conocimiento que la asistencia de mi hijo/hoja es voluntaria y hace parte de su proceso de recuperación y bienestar emocional.",
            },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Entiendo que toda la información obtenida y resultados referentes al procedimiento, serán tratados bajo confidencialidad y anonimato, como lo dicta el código Deontológico y Bioético y otras disposiciones, no será divulgada ni entregada sin mi consentimiento expreso, excepto cuando la orden de entrega provenga de una autoridad judicial competente (conforme al artículo 25 de la Ley 1090 de 2006). También entiendo y por lo tanto estoy de acuerdo con la necesidad de quebrantar este principio de confidencialidad en caso de presentarse situaciones que pongan en grave peligro mi integridad física o mental o de algún miembro de la comunidad. (Ley 1090 de 2006).",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Autorizamos al psicólogo profesional a cargo del proceso para que consulte la situación con otros profesionales de la E.S.E Primer Nivel Granada o terceros expertos para brindar la mejor atención posible. Reconocemos que la información que se le brindo al profesional es verdadera y corresponde a mi realidad, ya que sobre dicha información se plantean las propuestas de la orientación. También reconocemos que la decisión de continuar o suspender las consultas por psicología y las actividades programadas, son tomadas por nosotros. La orientación psicológica requiere mi compromiso, asistencia, puntualidad, participación, además de mi colaboración al diligenciar registros, documentos, pruebas con información personal que será utilizada por el profesional para el proceso de consulta por psicología.",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Para conocer su respuesta ante esta consulta individual, es necesario que por favor conteste lo siguiente:",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            {
              text: "Autorizo ",
            },
            { bold: true, text: " SI " },
            {
              text: { bold: true, decoration: "underline", text: datos.autorizo ? " X " : "    " },
            },
            { bold: true, text: " NO " },
            {
              text: { bold: true, decoration: "underline", text: !datos.autorizo ? " X " : "    " },
            },
            {
              text: " para desarrollar la asesoría individual por psicología con mi hijo/hija, conozco y comprendo el propósito de esta.",
            },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "He leído, comprendido y accedido de manera voluntaria a lo anterior mencionado.",
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
