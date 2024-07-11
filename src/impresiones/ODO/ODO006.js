import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionODO006 = ({ datos }) => {
  var dd = {
    stack: [contenidoODO006(), firmas()],
  };

  function contenidoODO006() {
    return {
      stack: [
        {
          text: `Yo ${getPaci.descrip} , identificado con documento No. ${getPaci.cod} .en pleno uso de mis facultades mentales, libre y conscientemente declaro que Doy mi consentimiento al Odontólogo(a) de la IPS, para formular y realizar el tratamiento requerido.`,
          style: "bodyContent",
        },
        {
          text: `\n Autorizo al odontólogo(a) para proveer servicios adicionales que considere razonables y necesarios para la salud, incluyendo la administración de anestesia que sea necesaria, exámenes de laboratorio, y la preparación de servicios que incluyan estudios de patología, estudios de radiología.Se entiende como endodoncia el procedimiento odontológico por medio del cual se retira la pulpa o nervio dental y los conductos radiculares (raíz del diente) son sellados con un material específico para la conservación del diente, posterior a una enfermedad pulpar irreversible. Certifico que el odontólogo(a) de la IPS, me ha explicado el procedimiento a realizar, las causas por las cuales es necesario, el pronóstico del diente a tratar y las posibles complicaciones más frecuentes que pueden surgir durante el mismo, tales como: laceración de tejidos blandos, fractura del diente, perforaciones apical, escalones, fracturas de instrumentos en el canal radicular, sobrepaso de material sellador en zona apical en el momento de la obturación, accidente por hipoclorito, contaminación de conductos, perdida de obturación temporal,broncoaspiracion de instrumental, alergia a los guantes u otros materiales usados en la práctica. Igualmente certifico que me han explicado la importancia de realizar el tratamiento rehabilitador posterior al tratamiento endondontico, y asumo la responsabilidad de efectuarlo en un periodo no mayor a 2 meses. Leí cuidadosamente y antes de firmarlo he tenido la oportunidad de hacer las preguntas que he considerado necesarias y todas han sido contestadas satisfactoriamente; así como se me ha explicado que no es posible garantizar los resultados esperados con este procedimiento. De la misma manera manifiesto que se me ha informado sobre la posible necesidad de una cirugía Endodóntica, o técnica no convencionales, eventos no incluidos en el plan obligatorio de salud, en caso de no lograrse los resultados obtenidos con este tratamiento.Por otra parte autorizo a que el odontólogo(a) de la IPS aplique anestesia local en el momento en Que el tratamiento lo requiera y que conozco las posibles complicaciones más frecuentes, que pueden surgir durante dicha aplicación tales como parestesia, hematoma, dolor, isquemia de la piel en el lugar de la infiltración, parálisis del velo el paladar, trismus y afectación muscular. Igualmente estoy enterado (a) que las coronas, las prótesis totales, las prótesis removible, los tratamientos de ortodoncia, los tratamientos periodontales y las radiografías panorámicas, no están cubiertos por el Plan Obligatorio de Salud.`,
          style: "bodyContent",
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
