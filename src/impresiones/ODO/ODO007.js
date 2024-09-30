import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionODO007 = ({ datos }) => {
  var dd = {
    stack: [contenidoODO007(), firmas()],
  };

  function contenidoODO007() {
    return {
      stack: [
        {
          text: `Yo ${getPaci.descrip} , identificado con documento No. ${getPaci.cod} .en pleno uso de mis facultades mentales, libre y conscientemente declaro que Doy mi consentimiento al Odontólogo(a) de la IPS, para formular y realizar el tratamiento requerido. Autorizo al odontólogo(a) para proveer servicios adicionales que considere razonables y necesarios para la salud, incluyendo la administración de anestesia que sea necesaria, exámenes de laboratorio, y la preparación de servicios que incluyan estudios de patología, estudios de radiología. Autorizo al odontólogo(a) para proveer servicios adicionales que considere razonables y necesarios para la salud, incluyendo la administración de anestesia que sea necesaria, administración de sangre y productos sanguíneos, hospitalización, profilaxis antibiótica, exámenes de laboratorio, y la preparación de servicios que incluyan estudios de patología, estudios de radiología. Me han informado sobre los beneficios y posibles riesgos del procedimiento, y resultados desfavorables; como pueden ser fracturas coronal, fractura radicular, laceración de los tejidos blandos, necrosis ,celulitis, fractura de la tabla ósea, fractura de instrumental, comunicación oroantral, transportación de nervios, fractura de tuberosidad, fractura de restauraciones adyacentes, deglución de diente, luxación de diente adyacente, crisis hipertensiva,hematoma,alveolitis postexodoncia,hemorragia postexodoncia,alergia a los guantes u otros materiales usados en la práctica,trismus, fractura alveolar,parestesia,isquemia en la zona de la infiltración, parálisis del velo del paladar. Leí cuidadosamente y antes de firmarlo he tenido la oportunidad de aclarar las dudas del procedimiento, Igualmente estoy enterado (a) que las coronas, las prótesis totales, las prótesis removibles, los tratamientos de ortodoncia, los tratamientos periodontales y las radiografías panorámicas, no están cubiertos por el Plan Obligatorio de Salud. Se entiende por procedimiento quirúrgico todo procedimiento en la consulta odontológica en el cual los tejidos orales entran en contacto con el medio ambiente oral, tales como: exodoncia simple, exodoncia método abierto de dientes temporales y/o permanentes, biopsias, frenillectomias, cirugía de tejidos blandos, remodelado óseo. Certifico que el odontólogo(a) de la IPS, me ha explicado el procedimiento a realizar, las causas por las cuales es necesario, el pronóstico del diente a tratar y las posibles complicaciones más frecuentes que pueden surgir durante el mismo, He tenido la oportunidad de hacer las preguntas que he considerado necesarias y todas han sido contestadas satisfactoriamente. Me comprometo, por otra parte, a asistir a los debidos controles que el odontólogo(a) de la IPS considere pertinentes después del procedimiento realizado.`,
          style: "bodyContent",
        },
        {
          text: `\n Igualmente estoy enterado (a) que las coronas, prótesis totales, prótesis removible, tratamientos de ortodoncia, tratamientos periodontales y radiografía panorámica, no están cubiertos por el plan obligatorio de salud.
`,
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
    let anchos = ["40%"];
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
