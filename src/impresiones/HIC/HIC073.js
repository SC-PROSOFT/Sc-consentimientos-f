import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionHIC073 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC073(), firmas()],
  };

  function contenidoHIC073() {
    return {
      stack: [
        {
          marginTop: 8,
          text: [
            { bold: true, style: "tableTitle", text: "Fecha de asesoria: " },
            { style: "bodyNoBold9", text: datos.fecha },
          ],
        },
        {
          alignment: "justify",
          marginTop: 8,
          text: [
            { style: "bodyNoBold9", text: "Yo, " },
            { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip },
            {
              style: "bodyNoBold9",
              text: ", certifico que: He leído (o que se me ha leído) el documento sobre Consentimiento Informado que contiene información sobre el propósito y beneficio de la prueba, su interpretación, sus limitaciones y su riesgo, y que entiendo su contenido, incluyendo las limitaciones, beneficios y riesgos de la prueba. ",
            },
          ],
        },
        {
          alignment: "justify",
          marginTop: 8,
          style: "tableTitle",
          text: "He recibido consejería PRE-PRUEBA (actividad realizada por un profesional de la salud para prepararme y confrontarme con relación a mis conocimientos, prácticas y conductas, antes de realizarme las pruebas diagnósticas).",
        },
        {
          alignment: "justify",
          marginTop: 8,
          style: "tableTitle",
          text: "También certifico que dicha persona me brindó la asesoría y que, según su compromiso, de ella también recibiré una asesoría post-prueba (procedimiento mediante el cual me entregarán mis resultados) y que estoy de acuerdo con el proceso.",
        },
        {
          alignment: "justify",
          marginTop: 8,
          style: "tableTitle",
          text: "Entiendo que la toma de muestra es voluntaria y que puedo retirar mi consentimiento en cualquier momento antes de que me sea tomado el examen.",
        },
        {
          alignment: "justify",
          marginTop: 8,
          style: "tableTitle",
          text: "Fui informado de las medidas que se tomarán para proteger la confidencialidad de mis resultados.",
        },
        {
          marginTop: 8,
          style: "tableTitle",
          text: [
            { bold: true, decoration: "underline", text: "GESTANTE: " },
            {
              text: "SI ",
            },
            {
              bold: true,
              decoration: "underline",
              text: datos.gestante == "S" ? " X " : "    ",
            },
            {
              text: " NO ",
            },
            {
              bold: true,
              decoration: "underline",
              text: datos.gestante == "N" ? " X " : "    ",
            },
          ],
        },
        {
          alignment: "justify",
          marginTop: 8,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Nombre: " },
            { style: "bodyNoBold9", text: datos.paciente.descrip + " \n " },
            { marginTop: 3, bold: true, style: "bodyNoBold9", text: "Tipo de identificación: " },
            { style: "bodyNoBold9", text: datos.paciente.tipo_id + " \n " },
            { marginTop: 3, bold: true, style: "bodyNoBold9", text: "Télefono: " },
            { style: "bodyNoBold9", text: datos.paciente.telefono + " \n " },
            { marginTop: 3, bold: true, style: "bodyNoBold9", text: "EPS: " },
            { style: "bodyNoBold9", text: datos.paciente.descrip_eps + " \n " },
            { marginTop: 3, bold: true, style: "bodyNoBold9", text: "Dirección: " },
            { style: "bodyNoBold9", text: datos.paciente.direccion + " \n " },
          ],
        },
        {
          text: [
            { bold: true, style: "tableTitle", text: "Fecha de toma de muesta: " },
            { style: "bodyNoBold9", text: datos.fecha_toma_muestra },
          ],
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
          image: getAcomp.cod ? getImgBs64 : "huella_paci",
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

  function firmaAcompanante(firma_acomp, cant_firmas) {
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
        firmaHuellaAcomp(firma_acomp, cant_firmas),
        // {
        //   marginTop: 8,
        //   alignment: "center",
        //   image: "firma_acomp",
        //   width: 125,
        //   height: 70,
        // },
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

  function firmaHuellaAcomp(huella_acomp, cant_firmas) {
    let tamano_firma = 0;

    if (cant_firmas == 2) {
      tamano_firma = 100;
    } else {
      tamano_firma = 125;
    }
    const conHuella = {
      marginLeft: 3,
      columns: [
        {
          marginTop: 8,
          alignment: "center",
          image: "firma_acomp",
          width: tamano_firma,
          height: 60,
        },
        // {
        //   marginTop: 9,
        //   marginLeft: 2,
        //   image: "huella_acomp",
        //   width: 50,
        //   height: 65,
        // },
      ],
    };

    const sinHuella = {
      marginLeft: 3,
      marginTop: 9,
      alignment: "center",
      image: "firma_acomp",
      width: tamano_firma,
      height: 70,
    };

    if (huella_acomp) return conHuella;
    else return sinHuella;
  }

  function firmaProfesional() {
    return {
      stack: [
        {
          text: "QUIEN BRINDA LA INFORMACIÓN",

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
  function firmaTestigo() {
    return {
      stack: [
        {
          text: "TESTIGO",

          alignment: "center",
          style: "tableNoBold",
          bold: true,
        },
        {
          marginTop: 8,
          alignment: "center",
          image: "firma_testigo",
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
              text: `${datos.testigo.descrip}`,
              style: "tableNoBold",
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
              text: `${datos.testigo.cod}`,
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
      firmasArray.push(firmaAcompanante(datos.firmas.huella_acomp, tamanoFirmasArray));
    }

    firmasArray.push(firmaTestigo());

    if (datos.firmas.firma_prof) {
      firmasArray.push(firmaProfesional());
    }

    tamanoFirmasArray = firmasArray.length;

    if (!datos.firmas.firma_acomp) {
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
