import { useModuleFormatos, useApiContabilidad } from "@/store";
import { evaluarParentesco } from "@/formatos/utils";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC122 = ({ datos }) => {
  console.log("impresionHIC122 -> ", datos);

  var dd = {
    stack: [contenidoHIC122(), firmas()],
  };
  function contenidoHIC122() {
    return {
      stack: [
        {
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "INFORMACION GENERAL",
        },
        {
          marginTop: 5,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Este documento informativo pretende explicar, de forma sencilla, la intervención quirúrgica denominada ",
            },
            {
              bold: true,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "CIRUGÍA ENDOSCÓPICA NASOSINUSAL PARA EL TRATAMIENTO DE LA EPISTAXIS. ",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "(hemorragia nasal), así como los aspectos más importantes del período postoperatorio y las complicaciones más frecuentes que, como consecuencia de esta intervención, puedan aparecer. ",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Llamamos ",
            },
            {
              bold: true,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "CIRUGÍA ENDOSCÓPICA NASOSINUSAL ",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "a la técnica quirúrgica que tiene como finalidad el tratamiento de diferentes procesos a nivel naso-sinusal, mediante su abordaje con ayuda de endoscopios, favoreciendo así una mejor iluminación de las cavidades, su mejor control visual y el mejor tratamiento de las lesiones nasales. En el caso concreto de la epistaxis o hemorragia nasal, la intervención se puede realizar bajo anestesia general, en casos muy seleccionados con hemorragias poco cuantiosas, se puede emplear la anestesia local o sedación y analgesia del paciente. La técnica quirúrgica se realiza a través de los orificios de las fosas nasales, por lo que no suele quedar ninguna cicatriz externa. En el acto quirúrgico se pretende localizar el punto de origen de la hemorragia y, si es necesario, la extirpación de las lesiones causantes de la misma, respetando al máximo la mucosa que tapiza las fosas nasales e intentando conservar al máximo su funcionalidad. Una vez localizado el punto sangrante, el cirujano intentará su hemostasia (detención de la hemorragia) utilizando diferentes técnicas, tales como la coagulación, la compresión, la colocación de material coagulante reabsorbible o la ligadura del vaso responsable. Tras la intervención, se coloca un taponamiento nasal durante un tiempo variable, que por lo general oscila entre 24 horas y 4 días de duración. Incluso con el taponamiento, el paciente puede presentar una pequeña hemorragia, ya sea a través de las fosas nasales o de la faringe, que suele ceder en unas horas, si el paciente no tiene trastornos de la coagulación. ",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "BENEFICIO: ",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "La detención de la hemorragia.",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "OTRAS ALTERNATIVAS: ",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "El tratamiento de la hemorragia es complejo y puede requerir maniobras muy diversas que pueden ser efectivas, tales como el taponamiento nasal anterior, el taponamiento nasal posterior, la cauterización química, la embolización arterial, la ligadura arterial y otros muchos.",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "CONSECUENCIAS PREVISIBLES DE SU REALIZACIÓN: ",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "1. Después de la intervención puede aparecer dolor en la fosa nasal, en la región facial o en la región craneal, que se tratará con analgésicos. 2. Vómitos sanguinolentos con coágulos que, durante las primeras horas, se consideran normales. Estos coágulos son la manifestación de la sangre deglutida y no precisan tratamiento. 3. Durante los primeros días un hematoma en la cara y en el entorno del ojo. La epistaxis independientemente del tratamiento realizado, podría repetirse un tiempo después, toda vez que no es lo habitual, en ausencia de enfermedades hematológicas o de la mucosa nasal. En caso de presentarse una nueva hemorragia por la nariz o por la boca, el paciente deberá acudir al médico para una nueva valoración y tratamiento.",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "RIESGOS FRECUENTES: ",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "puede persistir la hemorragia, Infección de la cavidad operatoria o de las cavidades sinusales debido a las alteraciones del drenaje y de la ventilación de los senos paranasales, que se tratará con antibióticos.  En raras ocasiones: complicaciones oculares. Perforaciones del tabique nasal, sinequias o cicatrices anómalas entre las paredes de la fosa nasal, trastornos de la olfacción, sensación de sequedad y formación de costras de moco, que precisan lavados nasales y curas tópicas, Complicaciones propias de toda intervención quirúrgica.",
            },
          ],
        },
        autorizaRevoca(),
        {
          marginTop: 5,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Villavicencio, " + datos.fecha + ".",
        },
      ],
    };
  }

  function autorizaRevoca() {
    if (datos.autorizo) {
      return {
        stack: [
          {
            marginTop: 5,
            bold: true,
            decoration: "underline",
            alignment: "center",
            style: "bodyNoBold9",
            text: "Consentimiento",
          },
          {
            marginTop: 10,
            alignment: "justify",
            text: [
              autorizaAcompPaci(),
              { style: "bodyNoBold9", text: "doy mi consentimiento para que sea realizada una " },
              { bold: true, style: "bodyNoBold9", text: "CIRUGIA ENDOSCOPICA NASOSINUSAL PARA EL TRATAMIENTO DE LA EPISTAXIS. " },
              {
                style: "bodyNoBold9",
                text: "Se me ha facilitado esto hoja informativa, habiendo comprendido el significado del procedimiento y los riesgos inherentes al mismo, y declaro estar debidamente informado/a, habiendo tenido oportunidad de aclarar mis dudas en entrevista personal con el Dr.: ",
              },
              { bold: true, style: "bodyNoBold9", text: datos.med_explica.trim() + "." },
              {
                style: "bodyNoBold9",
                text: " Asi mismo, he recibido respuesta o todas mis preguntas, habiendo tomado la decisión de manera libre y voluntaria.",
              },
            ],
          },
        ],
      };
    } else {
      return {
        stack: [
          {
            marginTop: 10,
            bold: true,
            decoration: "underline",
            alignment: "center",
            style: "bodyNoBold9",
            text: "Denegación o Revocación",
          },
          {
            marginTop: 10,
            alignment: "justify",
            text: [
              revocaAcompPaci(),
              {
                style: "bodyNoBold9",
                text: "después de ser informado/a de la naturaleza y riesgos del procedimiento propuesto, manifiesto de forma libre y consciente mi denegación / revocación (táchese lo que no proceda) para su realización, haciéndome responsable de las consecuencias que puedan derivarse de esta decisión.",
              },
            ],
          },
        ],
      };
    }
  }
  function revocaAcompPaci() {
    if (!datos.acomp.cod) {
      return {
        marginTop: 10,
        alignment: "justify",
        text: [
          { style: "bodyNoBold9", text: "Yo, " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip.trim() + "," },
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
          { style: "bodyNoBold9", text: " en calidad de familiar y/o acompañante responsable del paciente" },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip.trim() + "," },
          { style: "bodyNoBold9", text: " identifcado(a) con " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.tipo_id.trim() },
          { style: "bodyNoBold9", text: " " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.cod.trim() + "," },
        ],
      };
    }
  }
  function autorizaAcompPaci() {
    if (!datos.acomp.cod) {
      return {
        marginTop: 10,
        alignment: "justify",
        text: [
          { style: "bodyNoBold9", text: "Yo, " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip.trim() + "," },
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
          { style: "bodyNoBold9", text: " en calidad de familiar y/o acompañante responsable del paciente " },
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
