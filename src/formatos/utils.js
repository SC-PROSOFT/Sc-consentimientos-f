import { useModuleFormatos, useApiContabilidad } from "@/store";
import dayjs from "dayjs";

const { getImgBs64, getEncabezado } = useApiContabilidad();
const { getEmpresa, getPaci } = useModuleFormatos();

export const utilsFormat = ({ datos, content }) => {

  const base64 = "data:image/png;base64,";

  return {
    pageSize: "LETTER",
    pageMargins: [35, 105, 35, 30],
    images: {
      logo: sessionStorage.logo ? `${base64}${sessionStorage.logo}` : getImgBs64,
      firma_consen: `${base64}${datos.img_firma_consen}` || getImgBs64,
      firma_paci: `${base64}${datos.img_firma_paci}` || getImgBs64,
      firma_acomp: datos.img_firma_acomp ? `${base64}${datos.img_firma_acomp}` : getImgBs64,
      huella_paci: datos.img_huella_paci ? datos.img_huella_paci : getImgBs64,
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
                    text: `${getEmpresa.nomusu} \n\n`,
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
                        text: getEncabezado.codigo,
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
                        text: getEncabezado.version,
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
                        text: getEncabezado.fecha_aprob
                          ? dayjs(getEncabezado.fecha_aprob).format("YYYY-MM-DD")
                          : "",
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
                        text: getEncabezado.reviso,
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
                        text: getEncabezado.aprobo,
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
                        text: getEncabezado.fecha_act
                          ? dayjs(getEncabezado.fecha_act).format("YYYY-MM-DD")
                          : "",
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

export const separarNombre = () => {
  let uno = "";
  let dos = "";
  let tres = "";
  let cuatro = "";

  const partes = getPaci.descrip.split(" ").filter((part) => part.trim() !== "");
  switch (partes.length) {
    case 1: 
      uno = partes[0];
      break;
    case 2: 
      uno = partes[0];
      tres = partes[1];
      break;
    case 3:
      uno = partes[0];
      dos = partes[1];
      tres = partes[2];
      break;
    case 4:
      uno = partes[0];
      dos = partes[1];
      tres = partes[2];
      cuatro = partes[3];
      break;
    default: 
      uno = nombre
      break;
  }

  return [uno, dos, tres, cuatro];
};
