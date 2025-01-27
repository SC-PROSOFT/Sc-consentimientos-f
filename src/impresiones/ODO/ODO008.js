import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci, getHc } = useModuleFormatos();

export const impresionODO008 = ({ datos }) => {
  console.log("datos", datos);

  var dd = {
    stack: [contenidoODO008(), firmas()],
  };

  function contenidoODO008() {
    return {
      stack: [
        {
          marginTop: 8,
          table: {
            widths: ["50%", "50%"],
            body: [
              [
                {
                  alignment: "left",
                  text: [
                    { bold: true, style: "tableTitle", text: "Fecha: " },
                    { style: "bodyNoBold9", text: datos.fecha },
                  ],
                },
                {
                  alignment: "right",
                  text: [
                    { bold: true, style: "tableTitle", text: "N°. H.C. " },
                    { style: "bodyNoBold9", text: getHc.llave },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: `Yo, ${getPaci.descrip} identificado con el documento de identidad ${getPaci.cod}, y por medio del presente documento hago constar lo siguiente.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n Por medio de la presente doy mi consentimiento al odontólogo(a) para formular y realizar el tratamiento, intervención u otros procedimientos dentales que considere necesarios o apropiados para mí o mi hijo(a), en los cuales estaremos mutuamente de acuerdo.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n Certifico que se me ha sido informado de los riesgos inherentes a los procedimientos clínicos a realizar y originados en la falta de colaboración mía o del niño, siendo los más frecuentes: el trauma de los tejidos blandos por el uso de elementos corto punzantes, la fractura radicular coronal y fractura alveolar.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n Igualmente me ha sido explicado que ante la intranquilidad del menor, existe la posibilidad de requerir durante su tratamiento la utilización de las técnicas restrictivas las cuales son utilizadas en odontopediatria y consiste en sujetar al niño(a) para controlar sus movimientos y así poder realizar el tratamiento, así mismo se me ha informado que puedo estar presente durante la atención del menor y apoyar o no en el momento de la aplicación de estas técnicas.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n También se me ha informado sobre la posibilidad de requerir la aplicación de anestesia local y sus posibles complicaciones, tales como parestesia, hematoma, dolor, isquemia de la piel, parálisis, trismus y auto mordeduras.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n He tenido la oportunidad de realizar las preguntas que he considerado necesarias y todas han sido respondidas satisfactoriamente, por otra parte autorizo el uso de anestesia local en el momento que así lo requiera.`,
          style: "bodyNoBold9",
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
