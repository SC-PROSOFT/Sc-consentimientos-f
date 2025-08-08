import { useModuleFormatos, useApiContabilidad } from "@/store";
import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC129 = ({ datos }) => {
  console.log("impresionHIC129 -> ", datos);

  var dd = {
    stack: [contenidoHIC129(), firmas()],
  };
  function contenidoHIC129() {
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
          text: "La fractura de los huesos propios de la nariz comporta una deformación de la pirámide nasal con/sin obstrucción de las fosas nasales por hundimiento, lateralización y/o desviación septal asociada. La intervención pretende restaurar la morfología de la nariz y la respiración nasal. Los cartílagos fracturados suelen presentar una tendencia a la deformidad una vez reducidos.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "El tipo de anestesia requerida será la indicada por el anestesiólogo. Es posible que, durante o después de la intervención, sea necesaria la utilización de sangre y/o hemoderivados. También es necesario que advierta de posibles alergias medicamentosas, alteraciones de la coagulación, enfermedades cardiopulmonares, existencia de prótesis, marcapasos, medicaciones actuales o cualquier otra circunstancia.",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "EN QUE CONSISTE LA REDUCCIÓN DE FRACTURA DE HUESOS PROPIOS",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La reducción de la fractura se hace por vía endonasal habitualmente. De forma instrumental se reparan los huesos fracturados y se coloca un taponamiento de contención durante algunos días.",
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
          text: "RIESGOS DE LA REDUCCIÓN DE FRACTURA DE HUESOS PROPIOS",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "A pesar de la adecuada elección de la técnica y de su correcta realización, pueden presentarse efectos indeseables, tanto los comunes derivados de toda intervención y que pueden afectar a todos los órganos y sistemas, como los debidos a la situación vital del paciente (diabetes, cardiopatía. hipertensión, edad avanzada, anemia, obesidad,..., y los específicos del procedimiento:",
        },
        {
          marginTop: 5,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              decoration: "underline",
              text: "Riesgos inmediatos: ",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: " Es habitual la aparición de edema y hematoma.",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              decoration: "underline",
              text: "Riesgos secundarios: ",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "La persistencia de anomalías morfológicas residuales es frecuente y está en función de la importancia de la deformación inicial y de la consolidación de la fractura.",
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              decoration: "underline",
              text: "Complicaciones graves excepcionales: ",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Existe un riesgo de infección local, sobre todo del cartílago, debido a que es una fractura abierta a las cavidades nasales. Esta condritis puede conllevar una deformación nasal importante que requiera reintervención.",
            },
          ],
        },

        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Estas complicaciones habitualmente se resuelven con tratamiento médico (medicamentos, sueros, etc.) pero pueden llegar a requerir una reintervención, en algunos casos de urgencia.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Ningún procedimiento invasivo está absolutamente exento de riesgos importantes, incluyendo el de mortalidad, si bien esta posibilidad es bastante infrecuente.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "De cualquier forma, si ocurriera una complicación, debe saber que todos los medios técnicos de este Centro están disponibles para intentar solucionarla.",
        },
        {
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
          text: "La única alternativa es la abstención terapéutica.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Si después de leer detenidamente este documento desea más información, por favor, no dude en preguntar al especialista responsable, que le atenderá con mucho gusto.",
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
            marginTop: 10,
            pageBreak: "before",
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

              { bold: true, style: "bodyNoBold9", text: "REDUCCIÓN DE FRACTURA DE HUESOS PROPIOS DE NARIZ. \n\n" },
              {
                style: "bodyNoBold9",
                text: "Se me ha facilitado esta hoja informativa, habiendo comprendido el significado del procedimiento y los riesgos inherentes al mismo, y declaro estar debidamente informado/a, habiendo tenido oportunidad de aclarar mis dudas en entrevista personal con el Dr.: ",
              },
              { bold: true, style: "bodyNoBold9", text: datos.med_explica.trim() + "." },
              {
                style: "bodyNoBold9",
                text: "Asi mismo, he recibido respuesta o todas mis preguntas, habiendo tomado la decisión de manera libre y voluntaria.",
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
            pageBreak: "before",
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
          { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip },
          { style: "bodyNoBold9", text: " con historia clínica No. " },
          { bold: true, style: "bodyNoBold9", text: datos.llave },
          { style: "bodyNoBold9", text: " edad " },
          { bold: true, style: "bodyNoBold9", text: calcularEdad(datos.paciente.nacim) },
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
