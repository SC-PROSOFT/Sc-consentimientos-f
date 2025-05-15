import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";
const { getPaci } = useModuleFormatos();

export const impresionHIC048 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC048(), firmas()],
  };

  function contenidoHIC048() {
    return {
      stack: [
        {
          marginTop: 8,
          text: [
            { bold: true, style: "tableTitle", text: " Fecha: " },
            { style: "bodyNoBold9", text: datos.fecha },
          ],
        },
        autorizaPaciOAcomp(),
        {
          alignment: "justify",
          text: `\n He recibido consejería PRE-TEST (actividad realizada por un profesional de salud para prepararme y confrontarme con relación a mis conocimientos, prácticas y conductas, antes de realizarme las pruebas diagnósticas).`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n También certifico que dicha persona me brindo asesoría y según su compromiso, de ella también recibiré una asesoría posprueba (procedimiento mediante el cual me entregaran mis resultados) Y que estoy de acuerdo con el proceso.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n Entiendo que la toma de la muestra voluntaria y que puedo retirar mi consentimiento en cualquier momento antes de que sea tomado el examen.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n Fui informado de las medidas que se tomaran para proteger la confidencialidad de mis resultados.`,
          style: "bodyNoBold9",
        },
      ],
    };
  }

  function autorizaPaciOAcomp() {
    if (datos.acomp.cod) {
      return {
        marginTop: 15,
        alignment: "justify",
        text: [
          { style: "tableTitle", text: " Yo, " },
          { bold: true, style: "tableTitle", text: datos.acomp.descrip },
          {
            style: "bodyNoBold9",
            text: " responsable del menor ",
          },
          { bold: true, style: "tableTitle", text: datos.paciente.descrip },
          {
            style: "bodyNoBold9",
            text: " con ",
          },
          { bold: true, style: "tableTitle", text: datos.paciente.tipo_id },
          {
            style: "bodyNoBold9",
            text: " - ",
          },
          { bold: true, style: "tableTitle", text: datos.paciente.cod },
          {
            style: "bodyNoBold9",
            text: " certifico que he leído (o que se me ha leído) el documento sobre Consentimiento informado que contiene información sobre el propósito y beneficio de la prueba, su interpretación, sus limitaciones y riesgo, y que entiendo su contenido, incluyendo las limitaciones, beneficios y  riesgos de la prueba.",
          },
        ],

        style: "bodyNoBold9",
      };
    } else {
      return {
        marginTop: 15,
        alignment: "justify",
        text: [
          { style: "tableTitle", text: " Yo, " },
          { bold: true, style: "tableTitle", text: datos.paciente.descrip },
          {
            style: "bodyNoBold9",
            text: " he leído (o que se me ha leído) el documento sobre Consentimiento informado que contiene información sobre el propósito y beneficio de la prueba, su interpretación, sus limitaciones y riesgo, y que entiendo su contenido, incluyendo las limitaciones, beneficios y riesgos de la prueba.",
          },
        ],

        style: "bodyNoBold9",
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
