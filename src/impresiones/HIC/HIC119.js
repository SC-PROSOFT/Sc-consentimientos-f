import { useModuleFormatos, useApiContabilidad } from "@/store";
import { evaluarParentesco } from "@/formatos/utils";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC119 = ({ datos }) => {
  console.log("impresionHIC119 -> ", datos);

  var dd = {
    stack: [contenidoHIC119(), firmas()],
  };
  function contenidoHIC119() {
    return {
      stack: [
        {
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La anestesia es el procedimiento médico que permite realizar uno operación quirúrgica sin dolor. La anestesia puede realizarse durmiendo al paciente (anestesia general) o haciendo insensible la parte del cuerpo en la que se va a realizar la operación (anestesio local o regional). En algunas ocasiones después de practicar una anestesia local o regional se tiene que pasar a la anestesia general por resultar la primera insuficiente.",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          text: "El médico anestesiólogo es el encargado de indicar el tipo de anestesio adecuada para cada caso dependiendo de la operación que se va a realizar y del estado del paciente. Además, cuida del estado general del paciente durante la operación y trata las complicaciones que pudieran surgir.",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Todo acto anestésico conlleva siempre un riesgo menor asumido que justifica su uso generalizado pero también es evidente que es un procedimiento capaz de originar lesiones agudas, secuelas crónicas, complicaciones anestésicas graves e incluso lo muerte; toda ellas en relación con el estado de salud previo; edad; tipo, complejidad y duración de lo intervención quirúrgica, así como consecuencia de reacciones alérgicos u otros posibles factores imprevisibles. Cada tipo de anestesia tiene sus propios riesgos. Los riesgos no pueden suprimirse por completo.",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          text: "También es necesario que advierta de posibles alergias medicamentosas, alteración es de la coagulación, enfermedades cardiopulmonares, existencia de prótesis, marcapasos, medicaciones actuales o cualquier otra circunstancia.",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "EN QUE CONSISTE LA ANESTESIA REGIONAL",
        },
        {
          ul: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "En este tipo de anestesio Ud. permanecerá despierto o ligeramente sedado.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Es necesario también canalizar una vena antes de proceder con el bloqueo.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "El anestesiólogo le administrará el anestésico mediante inyección, con la finalidad de anestesiar una determinada zona del cuerpo. Recuerde que en ocasiones, la anestesia regional no consigue un nivel de bloqueo suficiente y es necesario recurrir a una anestesia general.",
            },
          ],
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          text: "De igual forma se colocara unos electrodos adhesivos colocados en el pecho permitirán el control de su latido cardíaco. También se le colocará un aparato que medirá su tensión arterial y un dispositivo en el dedo (pulso-oxímetro) para conocer la cantidad de oxígeno en su sangre.",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "RIESGOS DE LA ANESTESIA REGIONAL",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          text: "En ocasiones excepcionales, como consecuencia de la dificultad que planteo el acceso a un punto anestésico concreto, la anestesia administrada pasa rápidamente a la sangre o a las estructuras nerviosas, produciendo los efectos de una anestesia general que se puede acompañar de complicaciones graves, como bajada de la tensión, convulsiones, etc. Generalmente estas complicaciones se solucionan pero requieren llevar a cabo la intervención prevista con anestesia general. Tras lo administración de la anestesia regional pueden surgir molestias, toles como dolor de cabeza o de espalda, que desaparecen en los días posteriores. Es posible que, después de este tipo de anestesia, queden molestias en la zona con sensación de acorchamiento u hormigueo, generalmente pasajeros.",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La administración de los sueros y los medicamentos, que son imprescindibles durante la anestesia, pueden producir, excepcionalmente, reacciones alérgicas. Estas reacciones pueden llegar a ser graves pero tienen carácter extraordinario. Los expertos desaconsejan la práctica sistemática de pruebas de alergia a los medicamentos anestésicos por considerar que no es adecuado hacerlo en pacientes sin historia previa de reacciones adversas o los mismos. Además, estas pruebas no están libres de riesgo y, aún siendo su resultado negativo, los anestésicos probados pueden producir reacciones adversas durante el acto anestésico.",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Como consecuencia de su estado clínico puede ser necesario transfundirle sangre.",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          text: "De cualquier forma, si ocurriera una complicación, debe saber que todos los medios técnicos de este Centro están disponibles para intentar solucionarla.",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "RECOMENDACIONES ANTES DE LA ANESTESIA REGIONAL",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Debe guardar un ayuno absoluto desde ocho horas antes de la cirugía. EL incumplimiento de esta norma supone lo suspensión de la cirugía.",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Debe mantener cualquier medicación que esté tomando de manera habitual (por ejemplo, sus pastillas para la hipertensión) salvo orden expresa de que haga otra cosa. El día de la cirugía puede tomarlas con un sorbo de agua sin romper la norma anterior. Solamente debe usted interrumpir bajo prescripción médica, uno semana antes de la operación, los medicamentos que afectan a la coagulación de la sangre (por ejemplo Aspirina, Adiro, Asosantín, Tromalyt, Tikiid, Persantín, Disgren, etc.).",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Si es usted fumador debe intentar interrumpir su hábito cuanto más tiempo mejor, previo a la cirugía.",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "QUE OTRAS ALTERNATIVAS HAY",
        },
        {
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
              { style: "bodyNoBold9", text: "Yo, " },
              { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip },
              { style: "bodyNoBold9", text: "doy mi consentimiento para que me sea realizada una " },
              { bold: true, style: "bodyNoBold9", text: "ANESTESIA REGIONAL " },
              {
                style: "bodyNoBold9",
                text: "Se me ha facilitado esto hoja informativa, habiendo comprendido el significado del procedimiento y los riesgos inherentes al mismo, y declaro estar debidamente informado/a, habiendo tenido oportunidad de aclarar mis dudas en entrevista personal con el Dr.: ",
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
