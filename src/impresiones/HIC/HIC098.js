import { evaluarParentesco } from "@/formatos/utils";

export const impresionHIC098 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC098(), firmas()],
  };

  function contenidoHIC098() {
    return {
      stack: [
        {
          marginTop: 8,
          text: [
            { bold: true, style: "tableTitle", text: "Fuentedeoro Meta, fecha: " },
            { style: "bodyNoBold9", text: datos.fecha },
          ],
        },
        {
          marginTop: 8,
          text: [
            { bold: true, style: "tableTitle", text: "Nombre del paciente: " },
            { style: "bodyNoBold9", text: datos.paciente.descrip },
          ],
        },
        {
          marginTop: 8,
          text: [
            { bold: true, style: "tableTitle", text: "Historia clínica N°: " },
            { style: "bodyNoBold9", text: datos.llave },
          ],
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          marginTop: 8,
          text: [
            {
              text: "Yo ",
            },
            {
              bold: true,
              text: `${datos.acomp.cod.trim() != "" ? datos.acomp.descrip : datos.paciente.descrip} `,
            },
            { text: "identificado con documento " },
            {
              bold: true,
              text: `${datos.acomp.cod.trim() != "" ? datos.acomp.cod : datos.paciente.cod} `,
            },
            { text: "mayor de edad y/o responsable del paciente " },
            {
              bold: true,
              text: `${datos.acomp.cod.trim() != "" ? datos.paciente.cod : "N/A"} `,
            },
            { text: " identificado con documento " },
            {
              bold: true,
              text: `${datos.acomp.cod.trim() != "" ? datos.paciente.tipo_id : "N/A"} `,
            },
            { text: " No. " },
            {
              bold: true,
              text: `${datos.acomp.cod.trim() != "" ? datos.paciente.cod : "N/A"} `,
            },
            { text: " , actuando en nombre propio en pleno uso de mis facultades, libre y conscientemente declaro: " },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          bold: true,
          text: " Que por mi propia voluntad y pleno conocimiento de riesgos y complicaciones explicadas por el personal médico del Hospital Local Primer Nivel ESE Fuentedeoro Meta, he decidido solicitar retiro voluntario de esta institución, eximiendo de toda responsabilidad a esta institución y al personal que en el laboran, por las consecuencias que pudieran sobrevenir por mi determinación. ",
        },
        {
          marginTop: 8,
          text: [
            { bold: true, style: "tableTitle", text: "Fecha de ingreso: " },
            { style: "bodyNoBold9", text: datos.fecha_ingreso },
            { bold: true, style: "tableTitle", text: " Fecha de egreso: " },
            { style: "bodyNoBold9", text: datos.fecha_egreso },
          ],
        },
        {
          style: "bodyNoBold9",
          marginTop: 8,
          text: [{ bold: true, text: "Diagnóstico de ingreso: " }, { text: datos.nomb_diag_ingreso }],
        },
        {
          style: "bodyNoBold9",
          marginTop: 8,
          text: [{ bold: true, text: "Diagnóstico de egreso: " }, { text: datos.nomb_diag_egreso }],
        },
        {
          style: "bodyNoBold9",
          marginTop: 8,
          text: [{ bold: true, text: "Motivo del egreso: " }, { text: datos.motivo_egreso }],
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
