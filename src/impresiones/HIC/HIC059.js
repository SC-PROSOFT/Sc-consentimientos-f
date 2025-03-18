import { evaluarParentesco } from "@/formatos/utils";
export const impresionHIC059 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC059(), firmas()],
  };
  function contenidoHIC059() {
    return {
      stack: [
        {
          marginTop: 10,
          alignment: "justify",
          text: [
            { text: "Yo " },
            { bold: true, text: datos.paciente.descrip },
            { text: ", identificado(a) con tipo de documento: " },
            { bold: true, text: datos.paciente.tipo_id },
            { text: " , N°: " },
            { bold: true, text: datos.paciente.cod },
            { text: " , expedida en: " },
            { bold: true, text: datos.paciente.descrip_ciudad },
            { text: " , residente del municipio " },
            { bold: true, text: datos.municipio },
            { text: " , en el MICROTERRITORIO: " },
            { bold: true, text: datos.microterritorio },
            { text: " , en representación de la familia: " },
            { bold: true, text: datos.familia + ",\n" },
            { bold: true, text: " Si autorizo: " },
            { bold: true, decoration: "underline", text: datos.autorizo ? " X " : "    " },
            { bold: true, text: " , No autorizo: " },
            { bold: true, decoration: "underline", text: !datos.autorizo ? " X " : "    " },
            {
              text: " , al equipo básico de salud del Plan de Intervenciones Colectivas PIC de la E.S.E. PRIMER NIVEL GRANADA SALUD, en específico al auxiliar de enfermería, enfermera, psicólogo, médico.",
            },
            { text: " \n " },
            { bold: true, text: "Otro: " },
            { bold: true, text: datos.otro_prof },
            { text: " \n " },
            {
              text: "para que ingrese a mi hogar con el objetivo de desarrollar la Estrategia de Atención Primaria en Salud comprometiéndome a suministrar la información requerida mediante el diligenciamiento de fichas caracterización, y en las etapas de plan de cuidado y su respectivo cumplimiento.",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          text: "Me comprometo a cumplir con mis obligaciones tales como:",
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          marginTop: 10,
          style: "bodyNoBold9",
          ul: [
            "Estar presente en el domicilio la fecha indicada para la visita.",
            "Tener un trato cordial y respetuoso con el personal de salud.",
            "Suministrar información veraz para ser consignada en las fichas de caracterización ambiental, familiar e individual en el entorno hogar.",
            "Revisar, concertar las actividades y las recomendaciones del plan integral de cuidado primario (PICP).",
            "Cumplir con las citas asignadas por la IPS de referencia.",
            "Participar activamente en los seguimientos y las actividades de intervenciones colectivas para cumplir con las tareas asignadas dentro PICP.",
            "Preguntar cuando no entienda algo relacionado con mi salud y la de mi núcleo familiar.",
            "Informar cambio de domicilio o número de teléfono al programa.",
            "Acatar las indicaciones para la realización de los procedimientos de enfermería y psicología en casa.",
          ],
        },
        {
          marginTop: 10,
          alignment: "justify",
          text: [
            { text: "Dado en " },
            { text: datos.lugar_atenc },
            { text: "el día " },
            { text: datos.dia_atenc },
            { text: " del mes de " },
            { text: datos.mes_atenc },
            { text: " del año 2025." },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          alignment: "justify",
          text: [
            { text: "Autoriza registro fotográfico: " },
            { text: "SI " },
            { bold: true, decoration: "underline", text: datos.autoriza_foto == "S" ? " X " : "    " },
            { bold: true, text: "  NO " },
            { bold: true, decoration: "underline", text: datos.autoriza_foto == "N" ? " X " : "    " },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          text: "En constancia firma",
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["30%", "70%"],
            body: [
              [{ bold: true, text: "Nombre completo" }, datos.paciente.descrip],
              [{ bold: true, text: "Tipo  y numero de documento" }, `${datos.paciente.tipo_id} ${datos.paciente.cod}`],
              [{ bold: true, text: "Teléfono" }, datos.telefono],
              [{ bold: true, text: "Dirección" }, datos.direcc],
            ],
          },
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
