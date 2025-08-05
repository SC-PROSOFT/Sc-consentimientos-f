import { useModuleFormatos, useApiContabilidad } from "@/store";
import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC150 = ({ datos }) => {
  console.log("impresionHIC150 -> ", datos);

  var dd = {
    stack: [contenidoHIC150(), firmas()],
  };
  function contenidoHIC150() {
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
          text: "Esta intervención permite la extirpación de la glándula parótida, indicada en situaciones de inflamación crónica o tumores benignos o malignos. El tipo de anestesia requerida será la indicada por el anestesiólogo. Es posible que, durante o después de la intervención, sea necesaria la utilización de sangre y/o hemoderivados. También es necesario que advierta de posibles alergias medicamentosas, alteraciones de la coagulación, enfermedades cardiopulmonares, existencia de prótesis, marcapasos. medicaciones actuales o cualquier otra circunstancia.",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "EN QUE CONSISTE LA PAROTIDECTOMIA",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Se lleva a cabo a través de una incisión facial que se disimula justo delante de la oreja, siguiendo por debajo del lóbulo y que se prolongo algunos centímetros por el cuello. El nervio facial que transcurre en la proximidad será respetado y diseccionado para efectuar una extirpación de la tumoración y del tejido glandular que lo rodea. Dependiendo de los hallazgos anatomopatológicos, la parotidectomía puede ser:",
        },
        {
          marginTop: 5,
          ul: [
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Parcial, en coso de que el tumor sea benigno y sin riesgo de recidiva.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Casi total, en el caso de tumor mixto, que es el tipo de tumor benigno más frecuente de la glándula parótida, para evitar el riesgo de recidiva.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Total, asociado a vaciamiento ganglionar cervical, en caso de tumor maligno. El tratamiento de las cadenas ganglionares cervicales precisa una prolongación de la incisión a nivel cervical.",
            },
          ],
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
          text: "RIESGOS DE LA PAROTIDECTOMIA",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "A pesar de la adecuada elección de la técnica y de su correcta realización, pueden presentarse efectos indeseables, tanto los comunes derivados de toda intervención y que pueden afectar a todos los órganos y sistemas, como los debidos a la situación vital del paciente (diabetes, cardiopatía, hipertensión, edad avanzada, anemia, obesidad...), y los específicos del procedimiento:",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          decoration: "underline",
          text: "Riesgos inmediatos: ",
        },
        {
          marginTop: 5,
          ul: [
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "La hemorragia en el postoperatorio inmediato, que obliga a una reintervención, es excepcional.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "El hematoma postoperatorio es posible, aunque raras veces de entidad relevante.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Dolor local y alteraciones transitorias de la masticación, debido a la proximidad de la articulación temporomandibular con la zona operada.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Dolores cervicales en relación con la postura del cuello durante la intervención.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "La extirpación de la glándula da lugar a una depresión cutánea local.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "La pérdida de sensibilidad alrededor de la zona anterior de la oreja por donde pasa la incisión cutánea es habitual y disminuye con el tiempo.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Parálisis de la cara, de intensidad variable y transitoria, en función de las dificultades quirúrgicas y de la disposición anatómica del nervio facial.",
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
              text: "Durante el año siguiente a la intervención puede presentar una transpiración de la zona operada en el momento de la alimentación (Síndrome de Frey). La cicatriz puede quedar sensible o dolorosa por la inflamación local que puede persistir en meses.",
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
              text: "Complicaciones graves y/o excepcionales: ",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "La parálisis facial definitiva es excepcional. Es debida a una intervención particularmente difícil (tumor sobreinfectado o en caso de reintervención) o debido al sacrificio intencionado del nervio facial en caso de que el tumor invada el nervio y sea imprescindible su extirpación con el tumor para una resección completa del mismo.",
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
              { style: "bodyNoBold9", text: ", doy mi consentimiento para que me sea realizada una " },
              { bold: true, style: "bodyNoBold9", text: "PAROTIDECTOMIA. \n\n" },
              {
                style: "bodyNoBold9",
                text: "Se me ha facilitado esto hoja informativa, habiendo comprendido el significado del procedimiento y los riesgos inherentes al mismo, y declaro estar debidamente informado/a, habiendo tenido oportunidad de aclarar mis dudas en entrevista personal con el Dr: ",
              },
              { bold: true, style: "bodyNoBold9", text: datos.med_explica },
              {
                style: "bodyNoBold9",
                text: " a si mismo, he recibido respuesta o todas mis preguntas, habiendo tomado la decisión de manera libre y voluntaria.",
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
