import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos, useApiContabilidad } from "@/store";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC081 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC081(), firmas()],
  };
  function contenidoHIC081() {
    return {
      stack: [
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["30%", "70%"],
            body: [
              [
                {
                  bold: true,
                  text: "Nombre del paciente",
                },
                {
                  text: datos.paciente.descrip,
                },
              ],
              [
                {
                  bold: true,
                  text: "Tipo y número de documento",
                },
                {
                  text: [
                    {
                      text: datos.paciente.tipo_id + " ",
                    },
                    {
                      text: datos.paciente.cod,
                    },
                  ],
                },
              ],
              [
                {
                  bold: true,
                  text: "Dirección",
                },
                {
                  text: datos.paciente.direccion,
                },
              ],
              [
                {
                  bold: true,
                  text: "Teléfono",
                },
                {
                  text: datos.paciente.telefono,
                },
              ],
              [
                {
                  bold: true,
                  text: "Fecha",
                },
                {
                  text: datos.fecha,
                },
              ],
            ],
          },
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "El implante subdérmico es un método hormonal temporal de planificación familiar de uso a un tiempo de 4 a 5 años, puede y debe ser retirado al terminar el periodo del uso del mismo o por causas médicas que afecten la salud de la paciente.",
        },
        {
          marginTop: 8,
          bold: true,
          text: "DECLARACIÓN DEL PACIENTE",
          style: "bodyNoBold9",
        },
        {
          marginTop: 4,
          alignment: "justify",
          style: "bodyNoBold9",
          bold: true,
          italics: true,
          text: "Me ha explicado claramente todo lo relacionado con los métodos anticonceptivos a los que puedo acceder, incluido el implante Subdérmico Levonorgestrel, este consiste en la colocación de 2 implantes debajo de la piel en la cara interna del brazo no dominante, mediante anestesia local, la cual puede ser dolorosa. La eficacia anticonceptiva de los implantes es muy alta (99,95%) y su duración es de 5 años, tiempo durante el cual no será removido. Las complicaciones que pueden aparecer en la zona de los implantes en el momento de la inserción o extracción de los mismos son:",
        },
        {
          marginTop: 4,
          style: "bodyNoBold9",
          bold: true,
          italics: true,
          ul: [
            {
              marginTop: 5,
              alignment: "justify",
              text: "Hematoma y/o hemorragia",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Dolor intenso en el brazo",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Infección",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Alergias al anestésico local ",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Fibrosis",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Pequeña cicatriz",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Cicatriz queloide",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Difícil extracción",
            },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          bold: true,
          italics: true,
          text: "Los efectos secundarios de los implantes pueden ser:",
        },
        {
          marginTop: 4,
          style: "bodyNoBold9",
          bold: true,
          italics: true,
          ul: [
            {
              marginTop: 5,
              alignment: "justify",
              text: "Irregularidad del sangrado menstrual",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Cambios en el peso",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Cambios en el estado de animo",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Aparición de acné",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Aumento de flujo vaginal",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Dolor de cabeza",
            },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Doy mi consentimiento para que se me realice Inserción o Extracción de:",
        },
        {
          marginTop: 8,
          bold: true,
          decoration: "underline",
          text: "IMPLANTE SUBDERMICO.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Me comprometo a seguir las indicaciones del profesional después de la inserción o extracción de los implantes como: cuidados de la herida, no realización de labores que impliquen uso de la fuerza en el brazo correspondiente, asistir a control al mes y asistir a consulta preconcepcional o continuar controles de Planificación Familiar.",
        },
        { pageBreak: "before", marginTop: 8, bold: true, text: "DECLARACIONES", style: "bodyNoBold9" },
        {
          text: [
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "Funcionario responsable",
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              bold: true,
              text: datos.prof.descrip.trim(),
            },
            {
              style: "bodyNoBold9",
              alignment: "justify",
              text: "He informado al paciente del propósito y naturaleza del procedimiento descrito arriba.",
            },
          ],
        },
        paciDiscapac(),
      ],
    };
  }
  function paciDiscapac() {
    if (datos.acomp.cod.trim() == "") {
      return {
        stack: [
          {
            text: "",
          },
        ],
      };
    } else {
      return {
        stack: [
          {
            marginTop: 10,
            bold: true,
            alignment: "center",
            text: "ESPACIO PARA PACIENTES CON DISCAPACIDAD",
            style: "bodyNoBold9",
          },
          {
            alignment: "justify",
            marginTop: 8,
            style: "bodyNoBold9",
            text: [
              { text: "Sé que el paciente " },
              { bold: true, text: datos.paciente.descrip.trim() },
              {
                text: ", ha sido considerado por ahora incapaz de tomar por sí mismo la decisión de aceptar o rechazar el procedimiento descrito arriba. La funcionaria me ha explicado los riesgos y complicaciones. He comprendido todo lo anterior perfectamente y por ello: YO, ",
              },
              { bold: true, text: datos.acomp.descrip.trim() },
              { text: ", con documento de identidad " },
              { bold: true, text: datos.acomp.tipo_id },
              { text: ", No. " },
              { bold: true, text: datos.acomp.cod },
              { text: ", doy mi consentimiento para que la profesional, " },
              { bold: true, text: datos.prof.descrip.trim() },
              { text: ", realice este procedimiento. Puedo revocar este consentimiento cuando en bien del paciente se presuma oportuno." },
            ],
          },
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
