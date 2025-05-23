import { evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";
import { useModuleFormatos, useApiContabilidad } from "@/store";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionLAB015 = ({ datos }) => {
  console.log("impresionLAB015 -> ", datos);

  var dd = {
    stack: [contenidoConsenGeneral(), firmas()],
  };

  function llenarFirmador() {
    const acomp = datos.acomp.cod.length;
    const paci = datos.paciente.cod.length;

    return {
      ciudad: () =>
        datos.acomp.descrip_ciudad.trim() != "00000" || datos.acomp.descrip_ciudad.trim() != ""
          ? datos.acomp.descrip_ciudad
          : datos.paciente.descrip_ciudad,
      descrip: () => (datos.acomp.descrip.trim() != "" ? datos.acomp.descrip : datos.paciente.descrip),
      cod: () => (datos.acomp.cod.trim() != "" ? datos.acomp.cod : datos.paciente.cod),
      acudiente: () => (datos.paciente.descrip.trim() != "" ? datos.paciente.descrip : ""),
    };
  }

  function contenidoConsenGeneral() {
    return {
      stack: [
        {
          marginTop: 5,
          text: `Yo, ${llenarFirmador().descrip()}, Mayor de edad identificado con C.C. ${llenarFirmador().cod()} actuando en nombre propio o como representante legal de ${
            datos.acomp.cod.trim() == "" ? "" : datos.paciente.descrip
          }.`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: `Por medio de la presente AUTORIZO al doctor (a) ${datos.prof.descrip} y a los asistentes de su elección a realizar en mi o en el (la) paciente al cual represento legalmente la realización de la siguiente intervención quirúrgica:`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: datos.interv_quirurg,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: "El Doctor(a) me ha explicado la naturaleza y propósito del acto quirúrgico, también me ha informado de los riegos y complicaciones previstas, tales como inflamación, infección, pequeñas deformidades, desviaciones, cicatrices, manchas, pigmentaciones de la cicatriz, colección de líquidos debajo de la piel, hematomas, asimetrías, alteraciones sensitivas y motoras por compromiso de ramas nerviosas en la zona intervenida, contractura capsular o rechazo por el uso de prótesis, dehiscencia de la herida quirúrgica o alteraciones de la cicatriz; hasta problemas mayores: sufrimiento de piel, cardiovasculares, pulmonares, embolismo graso, trombo embolismo, e imponderables,  ósea de difícil o imposible predicción, por razón misma del procedimiento quirúrgico o anestésico, que pueden incluir la pérdida del órgano e incluso la muerte.",
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: "Teniendo en cuenta lo arriba anotado se me ha explicado cada uno de los puntos y se me ha dado la oportunidad de hacer todas las preguntas necesarias y han sido contestadas satisfactoriamente mis dudas, procedo a otorgar autorización, para la realización de dicho procedimiento o procedimientos quirúrgicos al médico tratante así mismo asumo los riesgos adversos del mismo, generados por el cumplimiento de un riesgo o consecuencia prevista.",
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: "Entiendo que en el curso de los procedimientos quirúrgicos puedan presentarse situaciones imprevistas que requieran procedimientos adicionales. Por lo tanto, autorizo la realización de estos procedimientos si el médico arriba mencionado o los asistentes los juzgan necesarios. ",
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: "Soy consciente que no se me ha garantizado los resultados que se esperan del procedimiento, advirtiendo que el cirujano realizará las intervenciones necesarias con la mayor diligencia, prudencia y pondrá a disposición toda su pericia y cuidado para el buen resultado de este, de la misma manera me comprometo a cumplir fielmente con todas sus recomendaciones, toma de medicamentos e instrucciones.",
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: "Certifico que he leído y comprendido perfectamente lo anterior y todos los espacios en blanco han sido completados antes de mi firma y me encuentro en capacidad de expresar mi libre albedrio.",
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: `Dado en Villavicencio, a los ${datos.fecha.split("-")[2]} días del mes de ${datos.fecha.split("-")[1]} de ${
            datos.fecha.split("-")[0]
          }.`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: "QUIEN BRINDA LA INFORMACIÓN",
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: "  Certifica que ha explicado los posibles riesgos de anestesia y que el paciente, pariente o tutor han comprendido completamente lo que ha explicado.",
          alignment: "justify",
          style: "bodyNoBold",
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
        //   width: 130,
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
          height: 70,
        },
        {
          marginTop: 9,
          marginLeft: 2,
          image: "huella_acomp",
          width: 50,
          height: 65,
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
  function firmaTestigo(huella_testigo, cant_firmas) {
    return {
      stack: [
        {
          text: "TESTIGO",
          alignment: "center",
          style: "tableNoBold",
          bold: true,
        },

        firmaHuellaTestigo(huella_testigo, cant_firmas),

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
              text: `${datos.testigo.descrip}`,
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
  function firmaHuellaTestigo(huella_testigo, cant_firmas) {
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
          image: "firma_testigo",
          width: tamano_firma,
          height: 70,
        },
        {
          marginTop: 9,
          marginLeft: 2,
          image: "huella_testigo",
          width: 50,
          height: 65,
        },
      ],
    };

    const sinHuella = {
      marginLeft: 3,
      marginTop: 9,
      alignment: "center",
      image: "firma_testigo",
      width: tamano_firma,
      height: 70,
    };

    if (huella_testigo) return conHuella;
    else return sinHuella;
  }
  function firmas() {
    let firmasArray = [];
    let anchos = ["40%"];
    let tamanoFirmasArray = 0;

    if (datos.firmas.firma_acomp || datos.firmas.huella_acomp) {
      firmasArray.push(firmaAcompanante(datos.firmas.huella_acomp, tamanoFirmasArray));
    }

    if (datos.firmas.firma_test || datos.firmas.huella_testigo) {
      firmasArray.push(firmaTestigo(datos.firmas.huella_testigo, tamanoFirmasArray));
    }

    if (datos.firmas.firma_prof) {
      firmasArray.push(firmaProfesional());
    }

    tamanoFirmasArray = firmasArray.length;

    if (datos.firmas.firma_paci) {
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
