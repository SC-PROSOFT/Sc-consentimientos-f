import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos, useApiContabilidad } from "@/store";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC083 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC083(), firmas()],
  };
  function contenidoHIC083() {
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
                      text: datos.paciente.tipo_id,
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
              [
                {
                  bold: true,
                  text: "Edad inicio relaciones sexuales ",
                },
                {
                  text: datos.edad_ini_relac_sex,
                },
              ],
              [
                {
                  bold: true,
                  text: "¿Primera vez que se realiza citología? ",
                },
                {
                  text: [
                    {
                      bold: true,
                      text: " SI ",
                    },
                    {
                      text: { bold: true, decoration: "underline", text: datos.primera_citolog == "S" ? " X " : "    " },
                    },
                    { bold: true, text: " NO " },
                    {
                      text: { bold: true, decoration: "underline", text: datos.primera_citolog == "N" ? " X " : "    " },
                    },
                  ],
                },
              ],
              [
                {
                  bold: true,
                  text: "No. de citología ",
                },
                {
                  text: datos.nro_citolog,
                },
              ],
            ],
          },
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "El cáncer cervico-uterino es una enfermedad neoplásica, maligna que se origina en el cérvix o cuello uterino. La citología es un examen en el que se detectan cambios en las células cervicales, consiste en la recolección de una muestra de células del cérvix, que se extienden sobre una lámina y se analizan en el laboratorio. Durante el examen se puede sentir un poco de molestia, similar a los cólicos menstruales y puede haber sangrado leve después del examen, pero es normal teniendo en cuenta que es un procedimiento invasivo que puede lesionar levemente el cuello del útero, pero es poco frecuente que esto suceda.",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Este documento es la manifestación voluntaria, libre y racional realizada por el paciente, de aceptación a la toma de citología cervico uterina, luego de haber sido informada de la misma manera clara y amplia con el fin de despejar todas sus dudas. Aquí se ratifica su aceptación y autorización para realizar el procedimiento en forma libre, voluntaria y consciente, después de que le fue informado y explicado, por parte del profesional de la salud, las indicaciones, contraindicaciones y posibles eventos adversos que puede ocasionar la toma de la citología.",
        },
        {
          marginTop: 8,
          bold: true,
          text: "DECLARACIÓN DEL PACIENTE",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Me han explicado y he comprendido satisfactoriamente la naturaleza y propósito de la toma de la citología cervico uterina, comprendo perfectamente, que es un examen para detectar patologías malignas, y pre malignas del cuello uterino y que a pesar de la adecuada toma y preparación del personal se pueden llegar a presentar efectos indeseables temporales como sangrado vaginal y dolor que están directamente relacionados con las condiciones clínico patológicas del paciente.",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [{ text: "Doy mi consentimiento para que se me realice la toma de " }, { bold: true, text: "CITOLOGIA CERVICO UTERINA " }],
        },
        { marginTop: 8, bold: true, text: "DECLARACIONES", style: "bodyNoBold9" },
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
      image: "firma_paci",
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
              text: datos.testigo?.descrip,
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
              text: datos.testigo?.cod,
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
