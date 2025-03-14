import { evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionHIC010 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC010(), firmas()],
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
  function contenidoHIC010() {
    return {
      stack: [
        {
          columns: [
            {
              text: [
                { style: "tableTitle", text: "Fecha: " },
                { style: "bodyNoBold9", text: dayjs(datos.fecha_act).format("YYYY-MM-DD") },
                { style: "tableTitle", text: " Hora: " },
                { style: "bodyNoBold9", text: datos.hora_act || datos.hora },
              ],
            },
          ],
        },
        {
          marginTop: 5,
          text: `Yo, ${llenarFirmador().descrip()} , identificado con documento: ${llenarFirmador().cod()} expedido en ${llenarFirmador().ciudad()}, mayor de edad y / o responsable del paciente ${
            datos.acomp.cod.trim() == "" ? "" : datos.paciente.descrip
          }, identificado con el numero de documento ${datos.acomp.cod.trim() == "" ? "" : datos.paciente.cod}, expedido en ${
            datos.acomp.cod.trim() == "" ? "" : datos.paciente.descrip_ciudad
          }  actuando en nombre propio en pleno uso de mis facultades, libre y consciente declaro:`,
          style: "bodyNoBold9",
        },
        {
          marginTop: 5,
          text: "Que por mi propia voluntad y pleno conocimiento de riesgos y complicaciones explicadas por el personal médico y de enfermería, he decidido solicitar el retiro voluntario de esta institución eximiendo de toda responsabilidad a esta institución y al personal que en ella labora, por las consecuencias que pudieran sobrevenir por mi determinación.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          text: [
            { style: "tableTitle", text: "Fecha de ingreso: " },
            { style: "bodyNoBold9", text: dayjs(datos.fecha_ingreso).format("YYYY-MM-DD") },
            { style: "tableTitle", text: " Hora de ingreso: " },
            { style: "bodyNoBold9", text: datos.hora_ingreso },
          ],
        },
        {
          marginTop: 10,
          text: [
            { style: "tableTitle", text: "Fecha de egreso: " },
            { style: "bodyNoBold9", text: dayjs(datos.fecha_egreso).format("YYYY-MM-DD") },
            { style: "tableTitle", text: " Hora de egreso: " },
            { style: "bodyNoBold9", text: datos.hora_egreso },
          ],
        },
        {
          marginTop: 10,
          text: [
            {
              text: "Diagnostico: ",
              bold: true,
            },
            {
              text: ` ${datos.descrip_enfer}`,
            },
          ],
          style: "tableTitle",
          alignment: "justify",
        },
        {
          marginTop: 10,
          text: [
            {
              text: "Motivo del retiro: ",
              bold: true,
            },
            {
              text: ` ${datos.motivo_retiro}`,
            },
          ],
          style: "tableTitle",
          alignment: "justify",
        },
        {
          marginTop: 10,
          text: [
            {
              text: "Observaciones: ",
              bold: true,
            },
            {
              text: ` ${datos.observaciones}`,
            },
          ],
          style: "tableTitle",
          alignment: "justify",
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
