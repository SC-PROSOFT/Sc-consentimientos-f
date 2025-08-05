import { useModuleFormatos, useApiContabilidad } from "@/store";
import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC167 = ({ datos }) => {
  console.log("impresionHIC167 -> ", datos);

  var dd = {
    stack: [contenidoHIC167(), firmas()],
  };
  function contenidoHIC167() {
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
          text: "La infiltración o inyección de corticoides intratimpánicos es un procedimiento que se viene usando en la práctica clínica de los otorrinolaringólogos desde hace más de una década.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Si bien la evidencia científica de su efectividad sigue siendo tema de controversia, la mayoría de los estudios avalan su uso como tratamiento para la hipoacusia súbita tanto de forma primaria o como terapia de rescate y como terapia no ablativa en la enfermedad de Menière.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Las principales ventajas de este tratamiento es que no se producen los efectos adversos que producen los corticoides por vía sistémica y a la vez permite una mayor concentración del medicamento en el oído interno.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La inyección de corticoides intratimpánicos está indicada en patologías que afectan al oído interno como son:",
        },
        {
          marginTop: 5,
          ul: [
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Hipoacusia súbita.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Enfermedad de Menière.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Enfermedad autoinmune del oído interno.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Trauma acústico.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Acufenos.",
            },
          ],
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "EN QUE CONSISTE LA INFLITRACION INTRATIMPANICA DE CORTICOIDES",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Se realiza a través de una punción con aguja fina del tímpano, la colocación de pequeñas cantidades de corticoides en el oído medio, este procedimiento se realiza con anestesia tópica.",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "RIESGOS DE LA COLOCACIÓN DE TUBOS DE VENTILACIÓN",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La inyección de corticoides intratimpánico es considerado un procedimiento seguro y reproducible. No son frecuentes las complicaciones pero se han descrito algunas como:",
        },
        {
          marginTop: 5,
          ul: [
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Mareo transitorio.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Dolor de oído.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Sensación de quemazón.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Vértigo pos inyección.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Adormecimiento de la lengua.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Perforación timpánica permanente.",
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
          ],
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
          text: "Uso de corticoides vía oral o sistémica (inyecciones) y otras tratamientos no invasivos.",
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
              { style: "bodyNoBold9", text: "Yo, " },
              { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip },
              { style: "bodyNoBold9", text: ", edad " },
              { bold: true, style: "bodyNoBold9", text: calcularEdad(datos.paciente.nacim) },
              { bold: true, style: "bodyNoBold9", text: ", " + datos.paciente.tipo_id + " - " + datos.paciente.cod },
              { style: "bodyNoBold9", text: " doy mi consentimiento para que me sea realizada una " },
              { bold: true, style: "bodyNoBold9", text: " INFILTRACION INTRATIMPANICA " + datos.timpano.trim() + ". \n\n" },
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
