import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";
const { getEmpresa } = useModuleFormatos();
export const impresionHIC096 = ({ datos }) => {
  console.log("impresionHIC096 -> ", datos);

  var dd = {
    stack: [contenidoHIC096(), firmas()],
  };

  function contenidoHIC096() {
    return {
      stack: [
        {
          bold: true,
          alignment: "center",
          text: "AUTORIZACIÓN PARA INTERVENCIÓN EN PLANIFICACIÓN FAMILIAR; INSERCIÓN O RETIRO DE IMPLANTE SUBDÉRMICO",
          style: "bodyNoBold9",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          text: "A.	Identificación",
          style: "bodyNoBold9",
        },
        {
          marginTop: 5,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Ciudad: " },
            { style: "bodyNoBold9", text: datos.paciente.descrip_ciudad },
            { bold: true, style: "tableTitle", text: " Fecha: " },
            { style: "bodyNoBold9", text: datos.fecha },
          ],
        },
        {
          marginTop: 5,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Nombre: " },
            { style: "bodyNoBold9", text: datos.paciente.descrip },
          ],
        },
        {
          marginTop: 5,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Tipo y numero documento de identificación: " },
            { style: "bodyNoBold9", text: datos.paciente.tipo_id + " " + datos.paciente.cod },
          ],
        },
        {
          marginTop: 5,
          text: [
            { bold: true, style: "bodyNoBold9", text: "N° Historia Clínica: " },
            { style: "bodyNoBold9", text: `${datos.llave.slice(0, 2)}-${datos.llave.slice(2)}` },
          ],
        },
        {
          marginTop: 5,
          text: [
            { bold: true, style: "bodyNoBold9", text: " Edad: " },
            { style: "bodyNoBold9", text: calcularEdad(datos.paciente.nacim) },
          ],
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          text: "B.	Certificación",
          style: "bodyNoBold9",
        },
        {
          marginTop: 5,
          alignment: "justify",
          text: "El suscrito certifica que, habiendo sido debidamente informado, sobre la naturaleza y los propósitos del procedimiento; posibles métodos alternativos de tratamiento, consecuencias, complicaciones y riesgos.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 5,
          text: [
            { style: "bodyNoBold9", text: "Autoriza a la institución " },
            { bold: true, style: "bodyNoBold9", text: getEmpresa.nomusu },
            { style: "bodyNoBold9", text: getEmpresa.nomusu },
            { style: "bodyNoBold9", text: " para que, bajo su responsabilidad, asigne a quienes practicaran el siguiente procedimiento: " },
            { bold: true, style: "bodyNoBold9", text: datos.procedimiento },
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
