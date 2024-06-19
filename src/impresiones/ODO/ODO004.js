import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionODO004 = ({ datos }) => {
  var dd = {
    stack: [contenidoODO004(), firmas()],
  };

  function contenidoODO004() {
    return {
      stack: [
        {
          text: `Yo ${getPaci.descrip} , identificado con documento No. ${getPaci.cod} .en pleno uso de mis facultades mentales, libre y conscientemente declaro que doy mi consentimiento al Odontólogo(a) de la IPS, para formular y realizar el tratamiento requerido por mi o por mi hijo (a), intervención u otros procedimientos dentales que considere necesarios o apropiados y en los cuales estemos mutuamente de acuerdo. `,
          style: "bodyContent",
        },
        {
          text: `\n Me han informado sobre los beneficios del tratamiento y los riesgos que pueden presentarse en el procedimiento, las opciones de tratamiento.los riesgos que se pueden presentar en los procedimientos clínicos a realizar y/o originados en la falta de colaboración mía o del niño. Siendo las más frecuentes: el trauma de tejidos blandos por el uso de elementos corto punzantes, la fractura radicular, la fractura coronal y la fractura alveolar. Igualmente, me ha sido explicado que ante la falta de colaboración del menor de edad, existe la posibilidad de requerir durante su tratamiento, la utilización de las técnicas restrictivas, las cuales son utilizadas en odontopediatria y consisten en aplicar medidas tales como sujetar al niño (a), para controlar sus movimientos y así poder realizar el tratamiento. Así mismo, se me ha informado que puedo estar presente durante la atención del menor y apoyar o no en el momento de la aplicación de estas técnicas.`,
          style: "bodyContent",
        },
        {
          text: `\nTambién se me ha informado sobre la posibilidad de requerir la aplicación de anestesia local y sus posibles complicaciones, tales como: parestesia, hematoma, dolor, isquemia de la piel en el lugar de la infiltración, parálisis del velo del paladar, trismus, afectación muscular y auto mordeduras (frecuente en niños). He tenido la oportunidad de hacer las preguntas que he considerado necesarias y todas han sido resueltas satisfactoriamente`,
          style: "bodyContent",
        },
        {
          text: `\nPor otra parte autorizo al odontólogo de la IPS, aplique anestesia local en el momento en que el tratamiento odontológico lo requiera.`,
        },
        {
          text: `\nIgualmente estoy enterado (a) que las coronas, prótesis total, prótesis removible, tratamientos de ortodoncia, periodontales y radiografía panorámica, no están cubiertos por el Plan Obligatorio de Salud.`,
        },
      ],
      styles: {
        bodyContent: {
          fontSize: 11,
          alignment: "justify",
        },
      },
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
          image: "huella_paci",
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

  function firmaAcompanante() {
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
        {
          marginTop: 2,
          alignment: "center",
          image: "firma_acomp",
          width: 130,
          height: 70,
        },
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

  function firmas() {
    let firmasArray = [];
    let anchos = [];
    let tamanoFirmasArray = 0;

    if (datos.firmas.firma_acomp) {
      firmasArray.push(firmaAcompanante());
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
