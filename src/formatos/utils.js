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

  return {
    pageSize: "LETTER",
    pageMargins: [35, 105, 35, 30],
    images: {
      logo: `${base64}${sessionStorage.logo}` || getImgBs64,
      firma_consen: `${base64}${datos.img_firma_consen}` || getImgBs64,
      firma_paci: `${base64}${datos.img_firma_paci}` || getImgBs64,
      firma_acomp: `${base64}${datos.img_firma_acomp}` || getImgBs64,
      firma_profesional: datos.firma_prof || sessionStorage.firma_prof || getImgBs64,
    },
    header: function (currentPage, pageCount) {
      return {
        margin: [35, 15, 35, 0], //Margenes deben ir en relacion a la pageMargin
        table: {
          widths: ["20%", "54%", "26%"],
          body: [
            [
              {
                marginTop: 4,
                image: "logo",
                width: 90,
                height: 65,
                alignment: "center",
              },
              {
                text: [
                  {
                    marginTop: 10,
                    marginBottom: 10,
                    text: `${getEmpresa.NOMUSU} \n\n`,
                    style: "headerBold",
                    alignment: "center",
                  },
                  {
                    marginTop: 15,
                    text: `${getEncabezado.descrip}`,
                    style: "headerBold",
                    alignment: "center",
                  },
                ],
              },
              {
                stack: [
                  {
                    text: [
                      {
                        text: `Código: `,
                        bold: true,
                      },
                      {
                        text: "M2-S5-F-17",
                      },
                    ],
                    style: "headerEnd",
                  },
                  {
                    text: [
                      {
                        text: `Versión: `,
                        bold: true,
                      },
                      {
                        text: "01",
                      },
                    ],
                    style: "headerEnd",
                  },
                  {
                    text: [
                      {
                        text: `Aprobado el: `,
                        bold: true,
                      },
                      {
                        text: "04/10/2023",
                      },
                    ],
                    style: "headerEnd",
                  },
                  {
                    text: [
                      {
                        text: `Revisado por `,
                        bold: true,
                      },
                      {
                        text: "04/10/2023",
                      },
                    ],
                    style: "headerEnd",
                  },
                  {
                    text: [
                      {
                        text: `Aprobado por `,
                        bold: true,
                      },
                      {
                        text: "04/10/2023",
                      },
                    ],
                    style: "headerEnd",
                  },
                  {
                    text: [
                      {
                        text: `Fecha de actualización: `,
                        bold: true,
                      },
                      {
                        text: "04/10/2023",
                      },
                    ],
                    style: "headerEnd",
                  },
                  {
                    text: "Página " + currentPage + " de " + pageCount,
                    style: "headerEnd",
                  },
                ],
              },
            ],
          ],
        },
      };
    },
    content,
    styles: {
      headerBold: {
        fontSize: 12,
        bold: true,
      },
      headerEnd: {
        fontSize: 8,
      },
      bodyNoBold: {
        fontSize: 9,
      },
      tableBold: {
        fontSize: 10,
        bold: true,
      },
      tableNoBold: {
        fontSize: 9,
      },
    },
  };
};

export const calcEdad = (edad) => dayjs().diff(edad, "year");

export const evaluarParentesco = (value) => {
  const parentesco = [
    { COD: "1", DESCRIP: "MADRE" },
    { COD: "2", DESCRIP: "PADRE" },
    { COD: "3", DESCRIP: "HIJO(A)" },
    { COD: "4", DESCRIP: "ESPOSO(A)" },
    { COD: "5", DESCRIP: "HERMANO(A)" },
    { COD: "6", DESCRIP: "TIO(A)" },
    { COD: "7", DESCRIP: "SOBRINO(A)" },
    { COD: "8", DESCRIP: "PRIMO(A)" },
    { COD: "9", DESCRIP: "MADRASTRA" },
    { COD: "10", DESCRIP: "PADRASTRO" },
    { COD: "11", DESCRIP: "AMIGO(A)" },
    { COD: "12", DESCRIP: "ABUELO(A)" },
  ];
  return parentesco.find((e) => e.COD == value)?.DESCRIP || "NO TIENE PARENTESCO";
};
