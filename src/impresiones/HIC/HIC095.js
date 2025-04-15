import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos, useApiContabilidad } from "@/store";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC095 = ({ datos }) => {
  console.log("datos ", datos);

  var dd = {
    stack: [contenidoHIC095(), firmas()],
  };

  function contenidoHIC095() {
    return {
      stack: [
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            { width: "50%", alignment: "left", text: [{ bold: true, text: "Fecha: " }, { text: datos.fecha }] },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Hora: " }, { text: datos.hora }] },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            { text: "Yo, " },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.descrip : datos.paciente.descrip },
            { text: " , identificado con documento " },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.tipo_id : datos.paciente.tipo_id },
            { text: " N°: " },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.cod : datos.paciente.cod },
            { text: " mayor de edad y / o responsable del paciente " },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.paciente.descrip : "N/A\n" },
            { text: " identificado con " },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.paciente.tipo_id : "N/A" },
            { text: " N°: " },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.paciente.cod : "N/A." },
            { text: " de: " },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.paciente.descrip_ciudad : "N/A." },
            { text: " actuando en nombre propio en pleno uso de mis facultades, libre y consciente declaro: \n" },
            { text: " \n" },
            {
              text: "Que por mi propia voluntad y pleno conocimiento de riesgos y complicaciones explicadas por el personal médico, he decidido solicitar el retiro voluntario, eximiendo de toda responsabilidad a esta institución y al personal que en ella labora, por las consecuencias que pudieran sobrevenir por mi determinación. \n",
            },
            { text: " \n" },
            {
              text: "Fecha de ingreso a urgencias: ",
            },
            { bold: true, text: datos.fecha_ingr_urg },
            {
              text: " Hora de ingreso a urgencias: ",
            },
            { bold: true, text: datos.hora_ingr_urg + " \n" },
            { text: " \n" },
            {
              text: " DIAGNOSTICO DE INGRESO: ",
            },
            { bold: true, text: datos.diagnostico + " " },
            { bold: true, text: datos.descrip_enfer + ".\n" },
            { text: " \n" },
          ],
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [{ bold: true, text: "Motivo del retiro: " }, { text: datos.motiv_retiro }],
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [{ bold: true, text: "Observaciones: " }, { text: datos.observac }],
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
