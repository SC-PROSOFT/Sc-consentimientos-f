import { useModuleFormatos, useApiContabilidad } from "../store";

const { getImgBs64, getEncabezado } = useApiContabilidad();
const { getEmpresa, getAcomp, getPaci, getProf } = useModuleFormatos();

export const utilsFormat = ({ datos, content }) => {
  console.log("⚡  datos-- >", datos);

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
    pageMargins: [35, 88, 35, 30],
    images: {
      logo: `${base64}${sessionStorage.logo}` || getImgBs64,
      firma_consen: `${base64}${datos.img_firma_consen}` || getImgBs64,
      firma_profesional: datos.firma_prof || sessionStorage.firma_prof || getImgBs64,
    },

    header: () => {
      return {
        margin: [35, 20, 35, 0],
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
                        text: getEncabezado.fecha_act,
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

export function firmas(condicion) {
  return [
    {
      style: "center8",
      stack: [
        { text: "FIRMA DEL PACIENTE", bold: true },
        {
          stack:
            datos.img_firma_consen && condicion
              ? [
                  {
                    image: "firma_consen",
                    width: 150,
                    height: 60,
                    alignment: "center",
                    marginTop: -3,
                  },
                ]
              : [
                  {
                    image: getImgBs64,
                    width: 150,
                    height: 60,
                    alignment: "center",
                    marginTop: -3,
                  },
                ],
        },
        {
          text: getPaci.descrip,
          bold: true,
          marginTop: -10,
        },
        {
          text: getPaci.tipo_id + ". " + getPaci.cod,
          bold: true,
        },
      ],
    },
    {
      style: "center8",
      stack: [
        { text: "TUTOR FAMILIAR O RESPONSABLE", bold: true },
        {
          stack:
            datos.img_firma_consen && condicion
              ? [
                  {
                    image: "firma_consen",
                    width: 150,
                    height: 60,
                    alignment: "center",
                    marginTop: -3,
                  },
                ]
              : [
                  {
                    image: getImgBs64,
                    width: 150,
                    height: 60,
                    alignment: "center",
                    marginTop: -3,
                  },
                ],
        },
        {
          text: datos.img_firma_consen != "" && condicion ? getAcomp.descrip : "",
          bold: true,
          marginTop: -10,
        },
        {
          text:
            datos.img_firma_consen != "S" && condicion
              ? getAcomp.tipo_id + ". " + getAcomp.cod + "        Parentesco: " + "falta tipo de parentesco"
              : "",
          bold: true,
        },
      ],
    },
    {
      style: "center8",
      stack: [
        { text: "FIRMA PROFESIONAL", bold: true },
        {
          stack: condicion
            ? [
                {
                  image: firma_profesional,
                  width: 150,
                  height: 60,
                  alignment: "center",
                  marginTop: -3,
                },
                {
                  text: getProf.descrip,
                  bold: true,
                  marginTop: -10,
                },
                {
                  text: "Doc. " + getProf.cod,
                  bold: true,
                },
              ]
            : [
                {
                  text: "",
                  marginTop: 56,
                },
              ],
        },
      ],
    },
  ];
}
