import { useModuleFormatos, useApiContabilidad } from "@/store";
import dayjs from "dayjs";

export const utilsFormat = ({ datos, content }) => {
  const { getImgBs64, getEncabezado } = useApiContabilidad();
  const { getEmpresa } = useModuleFormatos();

  const prof = {
    1: "MEDICO ESPECIALISTA",
    2: "MEDICO GENERAL",
    3: "ENFERMERA",
    4: "AUXILIAR ENFERMERIA",
    5: "TERAPIAS Y OTROS",
    6: "ENFERMERA JEFE PYP",
    7: "PSICOLOGIA",
    8: "NUTRICIONISTA",
    9: "SIN DETERMINAR",
    A: "ODONTOLOGO",
    H: "HIGIENISTA ORAL",
    I: "INSTRUMENTACION",
    O: "OPTOMETRA",
  };
  const base64 = "data:image/png;base64,";

  // datos.cargo_prof = prof[datos.atiende_prof] || "";

  return {
    pageSize: "LETTER",
    pageMargins: [35, 100, 35, 30],
    images: {
      logo: `${base64}${sessionStorage.logo}` || getImgBs64,
      firma_consen: `${base64}${datos.img_firma_consen}` || getImgBs64,
      firma_profesional: datos.firma_prof || sessionStorage.firma_prof || getImgBs64,
    },

    header: () => {
      return {
        margin: [35, 20, 35, 10],
        stack: [
          {
            fontSize: 10,
            alignment: "center",
            table: {
              widths: ["15.5%", "36%", "18.5%", "15%", "15%"],
              body: [
                [
                  {
                    image: "logo",
                    width: 75,
                    height: 50,
                    rowSpan: 2,
                  },
                  {
                    text: getEncabezado.descrip,
                    bold: true,
                  },
                  {
                    text: [{ text: "Versión \n", bold: true }, { text: getEncabezado.version }],
                  },
                  {
                    text: [{ text: "Código \n", bold: true }, { text: getEncabezado.codigo }],
                  },
                  {
                    text: [
                      { text: "Aprobado el \n", bold: true },
                      {
                        text: getEncabezado.fecha_aprob,
                      },
                    ],
                  },
                ],
                [
                  {},
                  {
                    marginTop: getEmpresa.NOMUSU.length < 28 ? 5 : 0,
                    text: getEmpresa.NOMUSU,
                    bold: true,
                  },
                  {
                    text: [
                      { text: "Fecha actualización \n", bold: true },
                      {
                        text: dayjs(getEncabezado.fecha_act).format("YYYY-MM-DD"),
                      },
                    ],
                  },
                  {
                    text: [{ text: "Revisado por \n", bold: true }, { text: getEncabezado.reviso }],
                  },
                  {
                    text: [{ text: "Aprobado por \n", bold: true }, { text: getEncabezado.aprobo }],
                  },
                ],
              ],
            },
          },
        ],
      };
    },
    content,
    footer: function (currentPage, pageCount) {
      return {
        margin: [35, 0, 35, 0],
        text: `Pag. ${currentPage} / ${pageCount}`,
        fontSize: 8,
        alignment: "right",
        color: "grey",
      };
    },
    styles: {
      left7Bold: {
        fontSize: 7,
        bold: true,
        alignment: "left",
      },
      left7: {
        fontSize: 7,
        alignment: "left",
      },
      ceter8Bold: {
        fontSize: 8,
        bold: true,
        alignment: "center",
      },
      center8: {
        fontSize: 8,
        alignment: "center",
      },
      left8Bold: {
        fontSize: 8,
        bold: true,
        alignment: "left",
      },
      left8: {
        fontSize: 8,
        alignment: "left",
      },
      left9Bold: {
        fontSize: 9,
        bold: true,
        alignment: "left",
      },
      left9: {
        fontSize: 9,
        alignment: "left",
      },
      center9Bold: {
        fontSize: 9,
        bold: true,
        alignment: "center",
      },
      left10: {
        fontSize: 10,
        alignment: "left",
      },
      left10Bold: {
        bold: true,
        fontSize: 10,
        alignment: "left",
      },
      center10: {
        fontSize: 10,
        alignment: "center",
      },
      center10Bold: {
        bold: true,
        fontSize: 10,
        alignment: "center",
      },
      left11Bold: {
        bold: true,
        fontSize: 11,
        alignment: "left",
      },
      center11Bold: {
        bold: true,
        fontSize: 11,
        alignment: "center",
      },
      left11: {
        fontSize: 11,
        alignment: "left",
      },
      center12Bold: {
        bold: true,
        fontSize: 12,
        alignment: "center",
      },
      left12Bold: {
        bold: true,
        fontSize: 12,
        alignment: "left",
      },
    },
  };
};

function firmaPaciente() {
  return {
    stack: [
      {
        text: "PACIENTE",
        alignment: "center",
        style: "tableBold",
      },
      {
        marginBottom: 2,
        text: [
          {
            text: "FIRMA / HUELLA ",
            alignment: "center",
            style: "tableBold",
          },
          {
            text: "(EN CASO DE NO FIRMAR)",
            alignment: "center",
            style: "tableNoBold",
            fontSize: 7,
          },
        ],
      },
      {
        alignment: "center",
        image: "firma_consen",
        width: 150,
        height: 80,
      },
      {
        marginTop: 2,
        text: [
          {
            text: "NOMBRE: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "David Santiago Lozada Quintero",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "DOCUMENTO: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "1111111111",
            style: "tableNoBold",
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
        style: "tableBold",
        marginBottom: 14,
      },
      {
        alignment: "center",
        image: "firma_profesional",
        width: 150,
        height: 80,
      },
      {
        marginTop: 10,
        text: [
          {
            text: "NOMBRE: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "David Santiago Lozada Quintero",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "PROFESIONAL AREA DE: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "EXAMENES DOC.MANOTAS",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "R.P N°: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "1111111111",
            style: "tableNoBold",
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
        text: "TUTOR/ACOMPAÑANTE/REPR.LEGAL",
        alignment: "center",
        style: "tableBold",
      },
      {
        marginBottom: 2,
        text: [
          {
            text: "FIRMA / HUELLA ",
            alignment: "center",
            style: "tableBold",
          },
          {
            text: "(EN CASO DE NO FIRMAR)",
            alignment: "center",
            style: "tableNoBold",
            fontSize: 7,
          },
        ],
      },
      {
        alignment: "center",
        image: "firma_consen",
        width: 150,
        height: 80,
      },
      {
        marginTop: 2,
        text: [
          {
            text: "NOMBRE: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "David Santiago Lozada Quintero Quintero",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "DOCUMENTO: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "2222222222",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "PARENTESCO: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "HERMANO",
            style: "tableNoBold",
          },
        ],
      },
    ],
  };
}

function motivosNoFirma() {
  return {
    margin: [30, 10, 30, 0],
    stack: [
      {
        text: [
          {
            text: "MOTIVOS POR LOS QUE EL USUARIO NO FIRMA: 222222222222222 2222222222222222 22222 222222222 22222222 222222222222222222222222222222222222222222222 ",
            alignment: "justify",
            style: "tableNoBold",
            bold: true,
          },
        ],
      },
    ],
  };
}

export function firmas(paciente_firma) {
  paciente_firma = "N";
  let firmasArray = [];
  let motivosArray = [];
  let margin = 0;
  let anchos = [];

  if (paciente_firma !== "N") {
    firmasArray = [firmaPaciente(), firmaProfesional()];
    margin = 80;
    anchos = ["40%", "40%"];
  } else {
    firmasArray = [firmaAcompanante(), firmaProfesional()];
    motivosArray = [motivosNoFirma()];
    margin = 80;
    anchos = ["40%", "40%", "33%"];
  }

  return {
    marginTop: 8,
    stack: [
      {
        marginLeft: margin,
        layout: "noBorders",
        table: {
          widths: anchos,
          body: [[...firmasArray]],
        },
      },
      ...motivosArray,
    ],
  };
}
