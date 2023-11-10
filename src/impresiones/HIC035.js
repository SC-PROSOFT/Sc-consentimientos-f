import { evaluarParentesco } from "@/formatos/utils";
import { calcEdad } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHC035 = ({ datos }) => {
  var dd = {
    stack: [contenidoEISP(), firmas()],
  };

  function llenarFirmador() {
    const guion = "_________________________";
    const acomp = datos.acomp.cod.length;

    return {
      ciudad: () => (acomp ? datos.acomp.descrip_ciudad : datos.paciente.descrip_ciudad),
      direccion: () => (acomp ? datos.acomp.direccion : datos.paciente.direccion),
      telefono: () => (acomp ? datos.acomp.telefono : datos.paciente.telefono),
      descrip: () => (acomp ? datos.acomp.descrip : datos.paciente.descrip),
      nacim: () => (acomp ? datos.acomp.nacim : datos.paciente.nacim),
      sexo: () => (acomp ? datos.acomp.sexo : datos.paciente.sexo),
      cod: () => (acomp ? datos.acomp.cod : datos.paciente.cod),
      acudiente: () => (acomp ? datos.paciente.descrip : guion),
    };
  }
  
  function iniciarTrata() {
    return (datos.iniciar_trata = datos.iniciar_trata == "S" ? "SI" : "NO");
  }

  function contenidoEISP() {
    return {
      stack: [
        {
          marginTop: 10,
          columns: [
            {
              text: `Historia clínica número: ${datos.llave.slice(0, 2)}-${datos.llave.slice(2)}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
            {
              width: "auto",
              text: `Ciudad: ${datos.empresa.ciudad_usuar}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
            {
              marginLeft: 50,
              width: "auto",
              text: `Fecha: ${dayjs(datos.empresa.fecha_act).format("YYYY-MM-DD")}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
          ],
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Yo ${llenarFirmador().descrip()} de ${calcEdad(
            llenarFirmador().nacim()
          )} años de edad, de genero ${llenarFirmador().sexo()} identificado(a) con documento de identidad N°: ${llenarFirmador().cod()}, expedida en ${llenarFirmador().direccion()} con residencia en ${llenarFirmador().ciudad()}, teléfono número ${llenarFirmador().telefono()} actuando en nombre propio o como acudiente de ${llenarFirmador().acudiente()} en mi calidad de paciente y en pleno uso de mis facultades mentales y de mis derechos de salud y habiendo solicitado por mi voluntad los servicios de salud a la empresa social del estado ESE salud Yopal, por medio del presente documento doy mi  consentimiento informado para que se me brinden los cuidados correspondientes y se siga la conducta terapéutica  según el criterio del profesional de salud tratante.`,
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Dejo constancia que he sido informado(a) y he recibido información y asesoría sobre el evento: ${datos.evento} respecto del modo de contagio, estrategias y métodos de prevención, importancia de diagnostico y tratamiento de la pareja de ser necesario a quien le informaré mi estado actual para que reciba la asesoría, tratamiento y seguimientos que se requieran para evitar reinfecciones y/o transmisión de la enfermedad a otras personas con quien se tenga contacto. Fui informado(a) de las acciones que se seguirán: tratamiento y controles que debo realizar posterior al tratamiento médico, al cual debo ser adherente, y recibir oportunamente y de manera adecuada; Por lo anterior me comprometo a seguir las indicaciones dadas por el profesional de la salud respecto al evento presentado, de no seguir las indicaciones los principales riesgos que se pueden presentar: resistencia a medicamentos, náuseas, mareos, vomito, gastritis, reinfecciones.`,
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Me garantizan la confidencialidad de mis resultados y la información que he proporcionado. De lo anterior ${iniciarTrata()} acepto iniciar tratamiento y realizar los controles y seguimientos que se requieran de acuerdo a la patología en curso. Por lo tanto, en forma consciente y voluntaria, luego de haber escuchado la información y explicaciones, sin haber sido objeto de coacción, persuasión, ni manipulación manifiesto lo siguiente:`,
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Me considero SATISFECHO con la información recibida y COMPRENDO la indicación, los beneficios, además de los riesgos y posibles complicaciones que podrían desprenderse de dicho acto.",
        },
        revocar(datos.autorizo),
      ],
    };
  }

  function revocar(condicion) {
    if (!condicion) {
      return {
        stack: [
          {
            text: "REVOCATORIA DE CONSENTIMIENTO",
            alignment: "center",
            marginTop: 10,
            bold: true,
          },
          {
            marginTop: 10,
            text: `Yo ${datos.paciente.descrip} paciente de la ESE SALUD YOPAL, con C.C ${
              datos.paciente.cod
            } Expreso mi voluntad de revocar el consentimiento prestado en fecha ${dayjs(
              datos.empresa.fecha_act
            ).format(
              "YYYY-MM-DD"
            )} y declaro por tanto que, tras la información recibida, no consiento en someterme al procedimiento de: ${
              datos.revoca_procedi || "_______________________________________"
            } por los siguientes motivos. ${datos.revoca_motivos}`,
            style: "bodyNoBold",
          },
        ],
      };
    } else return {};
  }

  function firmaPaciente() {
    return {
      stack: [
        {
          text: "PACIENTE (FIRMA / HUELLA)",
          bold: true,
          alignment: "center",
          style: "tableNoBold",
        },
        {
          marginTop: 9,
          alignment: "center",
          image: "firma_paci",
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

  function firmas(condicion) {
    let firmasArray = [];
    let anchos = [];

    if (datos.firmas.firma_paci) {
      firmasArray.push(firmaPaciente());
    }

    if (datos.firmas.firma_acomp) {
      firmasArray.push(firmaAcompanante());
    }

    if (datos.firmas.firma_prof) {
      firmasArray.push(firmaProfesional());
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
