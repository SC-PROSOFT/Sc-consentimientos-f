import { evaluarParentesco, evaluarClaseServ } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getEmpresa } = useModuleFormatos();

export const impresionHIC078 = ({ datos }) => {
  console.log("datos ", datos);
  var dd = {
    stack: [contenidoHIC078(), firmas()],
  };
  function contenidoHIC078() {
    return {
      stack: [
        {
          style: "bodyNoBold9",
          text: [
            { bold: true, text: "Servicio: " },
            {
              text: evaluarClaseServ(datos.servicio),
            },
            { bold: true, text: " Lugar: " },
            {
              text: getEmpresa.nomusu + "\n",
            },
            { bold: true, text: " Nombre del paciente: " },
            {
              text: datos.paciente.descrip,
            },
            { bold: true, text: " Identificación: " },
            {
              text: datos.paciente.tipo_id + " ",
            },
            {
              text: datos.paciente.cod,
            },
            { bold: true, text: " Fecha: " },
            {
              text: datos.fecha,
            },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Señora usuaria: Existen exámenes Imagenológicos que utilizan radiaciones ionizantes para su realización. Algunos de estos exámenes son: Radiografías, Mamografías, Densitometrías, Estudios Digestivos, Procedimientos con Apoyo Fluoroscópico y Tomografías Computadas. Las radiaciones ionizantes pueden producir efectos en el embrión o feto que dependen del tiempo de gestación, y de la dosis de radiación recibida. Estos efectos pueden aparecer también de forma natural o inducidos por otros factores. En el procedimiento que se le realizará, la dosis recibida es muy baja y el riesgo de aparición de efectos radioinducidos es despreciable. Sin embargo, hay que tener en consideración que la probabilidad de daño es mayor sobre todo al inicio del embarazo (3 primeros meses). Este riesgo es variable y no predecible, y no se puede eliminar a pesar de las medidas de protección radiológicas disponibles (uso de delantal plomado). Tomando en consideración lo expuesto anteriormente, su médico ha justificado la realización del estudio basándose en que los beneficios que se obtienen superan ampliamente a los posibles efectos que le pueda ocasionar, y a que no hay técnicas alternativas igual de eficaces para un buen diagnóstico.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          bold: true,
          text: "RIESGO:",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Para la mayoría de los procedimientos diagnósticos, impartiendo dosis fetales hasta aproximadamente 1 mGy,(miligray) los riesgos asociados de cáncer infantil son muy bajos (por debajo de 1 en 10000), comparado con el riesgo natural (alrededor de 1 en 500).",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Una radiografía de tórax simple expone al paciente a alrededor de 0.1 mSv (miliSievert). Esto es aproximadamente la misma cantidad de radiación a la que las personas están expuestas naturalmente durante unos 10 días.",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            { bold: true, text: "HE COMPRENDIDO CON CLARIDAD TODO LO ESCRITO ANTERIORMENTE " },
            {
              text: "Yo he tenido la oportunidad de preguntar y resolver todas mis dudas.",
            },
            { bold: true, text: " ACEPTO SI" },
            {
              text: { bold: true, decoration: "underline", text: datos.autorizo ? " X " : "    " },
            },
            { bold: true, text: " NO" },
            {
              text: { bold: true, decoration: "underline", text: !datos.autorizo ? " X " : "    " },
            },
            { bold: true, text: "LA REALIZACION DEL EXAMEN – DECLARO QUE LA DECISION QUE TOMO ES LIBRE Y VOLUNTARIA " },
            { bold: true, text: "SI" },
            {
              text: { bold: true, decoration: "underline", text: datos.autorizo ? " X " : "    " },
            },
            { bold: true, text: " NO" },
            {
              text: { bold: true, decoration: "underline", text: !datos.autorizo ? " X " : "    " },
            },
            { bold: true, text: " DOY MI CONSENTIMIENTO " },
            {
              text: " para que el profesional Tecnólogo en imágenes Diagnosticas me realice el procedimiento diagnostico solicitado por el médico tratante",
            },
            { bold: true, text: " SI " },
            {
              text: " he aceptado la toma del estudio, la entidad en mención y el tecnólogo en imágenes, quedan autorizados para llevar a cabo las conductas o procedimientos Imagenológicos necesarios tendientes a resolver las complicaciones imprevistas del procedimiento que mediante este documento autorizo.",
            },
          ],
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
