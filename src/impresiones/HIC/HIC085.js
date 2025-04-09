import { evaluarParentesco } from "@/formatos/utils";

export const impresionHIC085 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC085(), firmas()],
  };
  function contenidoHIC085() {
    return {
      stack: [
        {
          marginTop: 2,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "El consentimiento informado es una “manifestación libre y voluntaria, que da una persona por escrito luego de la asesoría pre prueba, con el fin de realizarle el examen diagnóstico de laboratorio para detectar la infección por VIH, el cual deberá consignarse en la historia clínica”.",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            { text: "Yo, " },
            { bold: true, text: datos.paciente.descrip },
            { text: " identificado con " },
            { bold: true, text: datos.paciente.tipo_id },
            { text: " No." },
            { bold: true, text: datos.paciente.cod },
            {
              text: " certifico que han explicado en qué consiste este consentimiento informado y que entiendo su contenido, incluyendo propósitos, limitaciones, beneficios y riesgos de realizarme una prueba diagnóstica para VIH. En virtud de ello manifiesto que:",
            },
          ],
        },
        {
          marginTop: 5,
          ul: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "He recibido la asesoría pre-prueba, con el fin de realizarme el examen diagnóstico de laboratorio para detectar la infección por VIH.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Personal entrenado y calificado en consejería, me ha preparado y confrontado en relación con mis conocimientos, mis prácticas y conductas relacionadas con el VIH.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Entiendo que la toma de muestra para la prueba de detección del VIH es voluntaria y que puedo retirar mi consentimiento en cualquier momento anterior a la toma de la muestra de sangre.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Para la entrega del resultado indistintivamente del mismo recibiré otra asesoría denominada postprueba.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "He discutido el procedimiento a seguir con la persona que me realizó la asesoría, lo he comprendido y estoy de acuerdo.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Fui informado de las acciones que se seguirán para proteger la confidencialidad de la información que he proporcionado y del resultado de mi examen.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "La prueba diagnosticada presuntiva es el examen de laboratorio que indica posible infección por el Virus de Inmunodeficiencia Humana (VIH) y cuyo resultado en caso de ser reactivo, requiere confirmación por otro procedimiento de mayor especificidad denominado Prueba Diagnóstica Suplementaria mediante el cual se confirma la infección por el VIH.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Para garantizar el derecho a mi intimidad, la información y datos que he dado en la consulta, el diagnostico, y de toda la información que pertenezca a mi vida íntima y/o a mi orientación sexual, así como también el resultado de la prueba es de carácter confidencial y se utilizaran solo con fines sanitarios guardando mi identidad.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "He comprendido las medidas de protección que se deben tomar para evitar exponerme a la infección por VIH.",
            },
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["50%", "50%"],
            body: [
              [
                {
                  alignment: "center",
                  bold: true,
                  text: "ASESORIA PRE -TEST",
                },
                {
                  alignment: "center",
                  bold: true,
                  text: "ASESORIA POS- TEST",
                },
              ],
              [
                {
                  text: [
                    {
                      text: "Fecha: ",
                    },
                    {
                      bold: true,
                      text: datos.fecha_pre_test,
                    },
                    {
                      text: " Hora: ",
                    },
                    {
                      bold: true,
                      text: datos.hora_pre_test,
                    },
                  ],
                },
                {
                  text: [
                    {
                      text: "Fecha: ",
                    },
                    {
                      bold: true,
                      text: datos.fecha_pos_test,
                    },
                    {
                      text: " Hora: ",
                    },
                    {
                      bold: true,
                      text: datos.hora_pos_test,
                    },
                  ],
                },
              ],
            ],
          },
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
