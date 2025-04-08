import { evaluarParentesco } from "@/formatos/utils";

export const impresionHIC079 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC079(), firmas()],
  };
  function contenidoHIC079() {
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
            ],
          },
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            { text: "Yo, " },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.descrip : datos.paciente.descrip },
            { text: " identificado con " },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.tipo_id : datos.paciente.tipo_id },
            { text: " No." },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.cod : datos.paciente.cod },
            { text: " (Como paciente o acudiente de) " },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.paciente.descrip : "N/A\n" },
            { text: " identificado con " },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.paciente.tipo_id : "N/A" },
            { text: " No. " },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.paciente.cod : "N/A." },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "DECLARO que la Odontóloga me ha explicado que el propósito de la intervención de cirugía oral menor es para resolver alguno de los siguientes problemas de la cavidad oral: extracción de piezas dentarias o restos apicales incluidos, fenestración o tracción de dientes retenido.",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Para llevar a cabo el procedimiento se aplicará anestesia, de cuyos posibles riesgos también he sido informado/a, es posible que los fármacos utilizados puedan producir determinadas alteraciones del nivel de conciencia por lo que se me ha informado que no podré realizar determinadas actividades inmediatamente.",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Igualmente, se me ha informado de que existen ciertos riesgos potenciales y complicaciones, algunas de ellas inevitables, concretamente:",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          ol: [
            {
              marginTop: 5,
              alignment: "justify",
              text: "Alergia al anestésico u otro medicamento utilizado, antes o después de la cirugía.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Hematoma y edema de la región.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Hemorragia postoperatoria.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Dehiscencia de la sutura.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Daño de dientes adyacentes.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Hipoestesia o anestesia del nervio dentario inferior, temporal o definitivo.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Hipoestesia o anestesia del nervio lingual, temporal o definitivo.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Hipoestesia o anestesia del nervio infraorbitario, temporal o definitivo.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Infección postoperatoria.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Osteítis.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Sinusitis.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Comunicación buconasal y/o bucosinual.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Fracturas óseas.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              text: "Rotura de instrumentos.",
            },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Tras la información recibida, he comprendido la naturaleza y propósitos del tratamiento de cirugía que se me va a practicar. He comprendido lo que se me ha explicado de forma clara, con un lenguaje sencillo, habiendo resuelto todas las dudas que se me han planteado, y la información complementaria que le he solicitado. Me queda claro que en cualquier momento y sin necesidad de dar ninguna explicación, puedo revocar este consentimiento. Estoy satisfecho con la información recibida y comprendido el alcance y riesgos de este tratamiento, y en por ello, DOY MI CONSENTIMIENDO, para que se me practique el tratamiento de cirugía. En el Hospital Local de Guamal.",
        },
        {
          pageBreak: "before",
          marginTop: 8,
          bold: true,
          alignment: "center",
          text: "DECLARACIONES",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "He  informado al paciente del propósito y naturaleza del procedimiento descrito arriba.",
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
          {
            alignment: "justify",
            marginTop: 8,
            style: "bodyNoBold9",
            text: [{ text: "NOTA: " }, { text: "En caso de ser menor de 18 años, deben firmar ambos padres." }],
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
