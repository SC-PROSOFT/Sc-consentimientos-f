import { useModuleFormatos, useApiContabilidad } from "@/store";
import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC125 = ({ datos }) => {
  console.log("impresionHIC125 -> ", datos);

  var dd = {
    stack: [contenidoHIC125(), firmas()],
  };
  function contenidoHIC125() {
    return {
      stack: [
        {
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "INFORMACIÓN GENERAL",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La rinoplastia es una técnica quirúrgica que tiene como finalidad la corrección de la forma externa de la nariz. El tipo de anestesia requerida será la indicada por el anestesiólogo. Es posible que, durante o después de la intervención, sea necesaria la utilización de sangre y/o hemoderivados. También es necesario que advierta de posibles alergias medicamentosas, alteraciones de la coagulación, enfermedades cardiopulmonares, existencia de prótesis, marcapasos, medicaciones actuales o cualquier otra circunstancia.",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "EN QUE CONSISTE LA RINOPLASTIA",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La intervención se realiza a través de unas incisiones que se hacen en el interior de las ventanas de la nariz. Después, los tejidos blandos se separan cuidadosamente de los cartílagos y huesos adyacentes y se corrigen las estructuras no deseadas. Posteriormente, los huesos y los cartílagos se sitúan de tal manera que tomen la forma adecuada para la nariz. Ocasionalmente puede ser necesario el uso de injertos de hueso o de cartílago. En el mismo acto quirúrgico se puede realizar la reconstrucción del tabique nasal, si está desviado, para aliviar la dificultad respiratoria que dicha desviación pueda producir. La intervención se denomina entonces septorrinoplastía siendo manejado el septo (tabique) por el otorrinolaringólogo.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "En ambas intervenciones se deja una pequeña férula de yeso u otros materiales sobre el dorso de la nariz y se coloca un taponamiento nasal o cánulas de silicona durante unas 72 horas. Por otra parte, como quiera que la valoración del resultado de la intervención por parte del paciente es subjetiva, cabe la posibilidad de no resultar satisfactoria. Todas estas circunstancias podrían justificar un segundo tiempo operatorio unos meses después asumido por el paciente.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "También cabe la posibilidad de que durante la cirugía haya que realizar modificaciones del procedimiento por los hallazgos intraoperatorios para proporcionar un tratamiento más adecuado.",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "RIESGOS DE LA RINOPLASTIA",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "A pesar de la adecuada elección de la técnica y de su correcta realización, pueden presentarse efectos indeseables, tanto los comunes derivados de toda intervención y que pueden afectar a todos los órganos y sistemas, como los debidos a la situación vital del paciente (diabetes, cardiopatía, hipertensión, edad avanzada, anemia, obesidad...), y los específicos del procedimiento: Pequeña hemorragia, tanto por las fosas nasales como por la faringe, que suele ceder en unas horas o persistir requiriendo un nuevo taponamiento. Si el taponamiento es con gasa, ésta puede deslizarse por la parte posterior de la fosa nasal provocando una sensación de cuerpo extraño y náuseas, que se soluciona retirando el taponamiento y colocando otro si es preciso.",
        },
        {
          marginTop: 5,
          ul: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Hematoma en la cara y los ojos en los primeros días.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Dolor en las fosas nasales, sobre todo si se ha tenido que actuar sobre el hueso, así como sensación de sequedad en garganta por respirar continuamente por la boca.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Vómitos sanguinolentos durante las primeras horas por la sangre deglutida.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Pequeña hemorragia nasal o bucal que rara vez requiere lo colocación de un taponamiento nasal.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Infección local con la aparición de síntomas inflamatorios.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Dolor o adormecimiento en la mejilla e incluso la falta de sensibilidad en los dientes superiores por lesión accidental del nervio infraorbitario.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Perforación del tabique nasal.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Sinequias -bridas entre ambas paredes de las fosas nasales.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Atrofia de la fosa nasal con la aparición de costras nasales y alteraciones del olfato.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Visión doble o inflamación de los párpados o del resto de la cara.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Movilización accidental de la pirámide nasal a lo largo del periodo de cicatrización, lo que produciría defectos estéticos en el periodo postoperatorio.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Palpación de pequeñas excrecencias por implantación de fragmentos de hueso extirpado bajo la as complicaciones habitualmente se resuelven con tratamiento médico (medicamentos, sueros, etc.) pero pueden llegar a requerir una reintervención, en algunos casos de urgencia o posteriormente.",
            },
          ],
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "También es posible la formación de fibrosis en el dorso, lo que se denomina “supratip”, la cual se puede resolver con infiltración de corticoide o con una re intervención. Generalmente es causado por edema (inflamación) residual o por el tipo de cicatrización del paciente.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Ningún procedimiento invasivo está absolutamente exento de riesgos importantes, incluyendo e! de mortalidad, si bien esta posibilidad es bastante infrecuente. De cualquier forma, si ocurriera una complicación, debe saber que todos los medios técnicos de este Centro están disponibles para intentar solucionarla.",
        },
        {
          pageBreak: "before",
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "RIESGOS PERSONALIZADOS",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: datos.riesgo_personaliz,
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "QUE OTRAS ALTERNATIVAS HAY",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: datos.otras_alternat,
        },
        autorizaRevoca(),
        {
          marginTop: 15,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La única alternativa es la abstención terapéutica.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Si después de leer detenidamente este documento desea más información, por favor, no dude en preguntar al especialista responsable, que le atenderá con mucho gusto.",
        },
        {
          marginTop: 5,
          alignment: "center",
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  style: "tableTitle",
                  text: {
                    bold: true,
                    text: "NOTA IMPORTANTE ¡SI NO PRESENTA ESTE FORMATO DEBIDAMENTE DILIGENCIADO EN EL MOMENTO DE  SU CITA PARA EL EXAMEN INDICADO SU CITA SERA CANCELADA",
                  },
                },
              ],
            ],
          },
        },
      ],
    };
  }

  function autorizaRevoca() {
    if (datos.autorizo) {
      return {
        stack: [
          {
            marginTop: 10,
            // pageBreak: "before",
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
              { style: "bodyNoBold9", text: "Yo, " },
              { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip },
              { style: "bodyNoBold9", text: ", edad " },
              { bold: true, style: "bodyNoBold9", text: calcularEdad(datos.paciente.nacim) },
              { style: "bodyNoBold9", text: ", identificad@ con Historia Clinica No. " },
              { bold: true, style: "bodyNoBold9", text: datos.llave },
              { style: "bodyNoBold9", text: " doy mi consentimiento para que me sea realizada una " },
              { bold: true, style: "bodyNoBold9", text: "RINOPLASTIA. \n\n" },
              {
                style: "bodyNoBold9",
                text: "Se me ha facilitado esto hoja informativa, habiendo comprendido el significado del procedimiento y los riesgos inherentes al mismo, y declaro estar debidamente informado/a, habiendo tenido oportunidad de aclarar mis dudas en entrevista personal con el Dr: ",
              },
              { bold: true, style: "bodyNoBold9", text: datos.med_explica },
              {
                style: "bodyNoBold9",
                text: " Asimismo, he recibido respuesta o todas mis preguntas, habiendo tomado la decisión de manera libre y voluntaria.",
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
            // pageBreak: "before",
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
              { style: "bodyNoBold9", text: "Yo, " },
              { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip },
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
