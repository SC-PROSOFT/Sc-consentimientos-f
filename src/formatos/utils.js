import { useModuleFormatos, useApiContabilidad } from "@/store";
import dayjs from "dayjs";

const { getImgBs64, getEncabezado, _getLogo$ } = useApiContabilidad();
const { getEmpresa, getPaci, getSesion, getLogo } = useModuleFormatos();
let logo = getLogo;

export const utilsFormat = async ({ datos, content }) => {
  await validarLogo(datos);

  return {
    pageSize: "LETTER",
    pageMargins: [35, 105, 35, 30],
    images: {
      firma_disentimiento: datos.firma_disentimiento || sessionStorage.firma_disentimiento || getImgBs64,
      firma_profesional: datos.firma_prof || sessionStorage.firma_prof || getImgBs64,
      logo: logo || getImgBs64,
      firma_acomp: datos.img_firma_acomp ? datos.img_firma_acomp : getImgBs64,
      huella_paci: datos.img_huella_paci ? datos.img_huella_paci : getImgBs64,
      firma_testigo: datos.img_firma_testigo || getImgBs64,
      firma_consen: datos.img_firma_consen || getImgBs64,
      firma_paci: datos.img_firma_paci || getImgBs64,
    },
    info: {
      title: `CONSEN - ${getPaci.cod}${getSesion.oper}${dayjs().format("HHmm")}`, //Aca se añade el titulo del archivo
    },
    header: function (currentPage, pageCount) {
      return {
        margin: [35, 15, 35, 0], //Margenes deben ir en relacion a la pageMargin
        table: datosHeader(getEncabezado.iso, currentPage, pageCount),
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
      tableTitle: {
        fontSize: 10.5,
      },
      tableNoBold: {
        fontSize: 9,
      },
    },
  };
};

const validarLogo = async (datos) => {
  try {
    const base64 = "data:image/png;base64,";
    console.log("⚡LOGO HEADER-->", datos?.cod_consen);
    if (datos?.cod_consen == "HIC043") logo = await _getLogo$({ nit: "ColomPotenVida" });
    else if (datos?.cod_consen == "HIC042") logo = await _getLogo$({ nit: "MinSalud" });
    else return logo = getLogo;

    logo = `${base64}${logo}`;
    return logo;
  } catch (error) {
    throw error;
  }
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

const datosHeader = (iso, currentPage, pageCount) => {
  const headerISO = {
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
            construirHeaderISO(),
            {
              text: "Página " + currentPage + " de " + pageCount,
              style: "headerEnd",
            },
          ],
        },
      ],
    ],
  };

  const headerSinISO = {
    widths: ["20%", "80%"],
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
      ],
    ],
  };

  if (iso == "S") return headerISO;
  else return headerSinISO;
};

const construirHeaderISO = () => {
  const encabezado = [];

  const agregarElemento = (texto, valor) => {
    if (valor !== " " && valor !== "") {
      encabezado.push({
        text: [
          {
            text: `${texto}: `,
            bold: true,
          },
          {
            text: valor,
          },
        ],
        style: "headerEnd",
      });
    }
  };

  agregarElemento("Código", getEncabezado.codigo);
  agregarElemento("Versión", getEncabezado.version);
  agregarElemento(
    "Fecha de actualización",
    getEncabezado.fecha_act ? dayjs(getEncabezado.fecha_act.trim()).format("YYYY-MM-DD") : ""
  );
  agregarElemento(
    "Aprobado el",
    getEncabezado.fecha_aprob ? dayjs(getEncabezado.fecha_aprob).format("YYYY-MM-DD") : ""
  );
  agregarElemento("Aprobado por", getEncabezado.aprobo);
  agregarElemento("Revisado por", getEncabezado.reviso);

  return encabezado;
};

export const datosFormatUTM = ({ datos }) => {
  const diag =
    getSesion?.diagnosticos.length == 2 ? getSesion?.diagnosticos : JSON.parse(atob(getSesion.diagnosticos));
  const artic =
    getSesion?.articulos.length == 2 ? getSesion?.articulos : JSON.parse(atob(getSesion.articulos));
  const tipos_id = ["CC", "CE", "PA", "PT", "RC", "TI"];

  const marcaCasilla = (condicion) => {
    return [
      {
        canvas: condicion
          ? [
              { type: "line", x1: 0, x2: 30, y1: -11, y2: 0, color: "#808080" },
              { type: "line", x1: 30, x2: 0, y1: -11, y2: 0, color: "#808080" },
            ]
          : [],
      },
    ];
  };

  return {
    stack: [
      {
        alignment: "center",
        table: {
          widths: ["7%", "7%", "7%", "7%", "7%", "7%", "7%", "25%", "10%", "8%", "8%"],
          body: [
            [
              {
                colSpan: 3,
                bold: true,
                text: "FECHA",
                style: "tableTitle",
              },
              {},
              {},
              {
                colSpan: 3,
                bold: true,
                text: "HORA",
                style: "tableTitle",
              },
              {},
              {},
              {
                colSpan: 2,
                bold: true,
                text: "SERVICIO",
                style: "tableTitle",
              },
              {},
              {
                colSpan: 3,
                bold: true,
                text: "SEDE",
                style: "tableTitle",
              },
              {},
              {
                text: "",
                style: "tableTitle",
              },
            ],
            [
              {
                noWrap: true,
                text: `${dayjs().date()}`,
                style: "tableTitle",
              },
              {
                noWrap: true,
                text: `${dayjs().month() + 1}`,
                style: "tableTitle",
              },
              {
                noWrap: true,
                text: `${dayjs().year()}`,
                style: "tableTitle",
              },
              {
                noWrap: true,
                colSpan: 3,
                text: `${dayjs().format("hh:mm A")}`,
                style: "tableTitle",
              },
              {},
              {},
              {
                noWrap: true,
                colSpan: 2,
                text: `${datos.servicio}`,
                style: "tableTitle",
              },
              {},
              {
                colSpan: 3,
                noWrap: true,
                text: `${datos.empresa.nomusu}`,
                style: "tableTitle",
              },
              {},
              {},
            ],
            [
              {
                colSpan: 11,
                bold: true,
                text: "NOMBRES Y APELLIDOS COMPLETOS",
                style: "tableTitle",
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                colSpan: 11,
                noWrap: true,
                text: `${datos.paciente.descrip}`,
                style: "tableTitle",
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
            [
              {
                colSpan: 7,
                bold: true,
                text: "DOCUMENTO DE IDENTIFICACIÓN",
                style: "tableTitle",
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {
                colSpan: 3,
                bold: true,
                text: "NÚMERO DE IDENTIFICACIÓN",
                style: "tableTitle",
              },
              {},
              {},
              {
                bold: true,
                text: "EDAD",
                style: "tableTitle",
              },
            ],
            [
              {
                stack: [
                  {
                    text: "CC",
                    style: "tableTitle",
                  },
                  {
                    stack: marcaCasilla(datos.paciente.tipo_id.trim() == "CC" ? true : false),
                  },
                ],
              },
              {
                stack: [
                  {
                    text: "CE",
                    style: "tableTitle",
                  },
                  {
                    stack: marcaCasilla(datos.paciente.tipo_id.trim() == "CE" ? true : false),
                  },
                ],
              },
              {
                stack: [
                  {
                    text: "PA",
                    style: "tableTitle",
                  },
                  {
                    stack: marcaCasilla(datos.paciente.tipo_id.trim() == "PA" ? true : false),
                  },
                ],
              },
              {
                stack: [
                  {
                    text: "PT",
                    style: "tableTitle",
                  },
                  {
                    stack: marcaCasilla(datos.paciente.tipo_id.trim() == "PT" ? true : false),
                  },
                ],
              },
              {
                stack: [
                  {
                    text: "RC",
                    style: "tableTitle",
                  },
                  {
                    stack: marcaCasilla(datos.paciente.tipo_id.trim() == "RC" ? true : false),
                  },
                ],
              },
              {
                stack: [
                  {
                    text: "TI",
                    style: "tableTitle",
                  },
                  {
                    stack: marcaCasilla(datos.paciente.tipo_id.trim() == "TI" ? true : false),
                  },
                ],
              },
              {
                stack: [
                  {
                    text: `${
                      !tipos_id.includes(datos.paciente.tipo_id.trim())
                        ? datos.paciente.tipo_id.trim()
                        : "OTRO"
                    }`,
                    style: "tableTitle",
                  },
                  {
                    stack: marcaCasilla(!tipos_id.includes(datos.paciente.tipo_id.trim()) ? true : false),
                  },
                ],
              },
              {
                colSpan: 3,
                text: `${datos.paciente.cod}`,
                style: "tableTitle",
              },
              {},
              {},
              {
                text: `${calcEdad(getPaci.nacim)}`,
                noWrap: true,
                style: "tableTitle",
              },
            ],
            [
              {
                alignment: "left",
                colSpan: 11,
                style: "tableTitle",
                text: [
                  {
                    bold: true,
                    text: "ENTIDAD RESPONSABLE DE PBS:",
                  },
                  {
                    text: ``,
                  },
                ],
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
          ],
        },
      },
      {
        alignment: "center",
        table: {
          widths: ["6%", "22%", "72%"],
          body: [
            [
              {
                border: [true, false, true, true],
                bold: true,
                text: "Nº",
                style: "tableTitle",
              },
              {
                border: [true, false, true, true],
                bold: true,
                text: "CÓDIGO CUPS",
                style: "tableTitle",
              },
              {
                border: [true, false, true, true],
                bold: true,
                text: "EXAMEN A REALIZAR",
                style: "tableTitle",
              },
            ],
            [
              {
                border: [true, false, true, true],
                text: "1",
                style: "tableTitle",
              },
              {
                border: [true, false, true, true],
                text: `${artic[0] ? artic[0].codigo : ""}`,
                style: "tableTitle",
              },
              {
                border: [true, false, true, true],
                text: `${artic[0] ? artic[0].descripcion : ""}`,
                style: "tableTitle",
              },
            ],
            [
              {
                border: [true, false, true, true],
                text: "2",
                style: "tableTitle",
              },
              {
                border: [true, false, true, true],
                text: `${artic[1] ? artic[1].codigo : ""}`,
                style: "tableTitle",
              },
              {
                border: [true, false, true, true],
                text: `${artic[1] ? artic[1].descripcion : ""}`,
                style: "tableTitle",
              },
            ],
            [
              {
                border: [true, false, true, true],
                bold: true,
                text: "Nº",
                style: "tableTitle",
              },
              {
                border: [true, false, true, true],
                bold: true,
                text: "CÓDIGO CIE-10",
                style: "tableTitle",
              },
              {
                border: [true, false, true, true],
                bold: true,
                text: "DIAGNÓSTICO MÉDICO",
                style: "tableTitle",
              },
            ],
            [
              {
                border: [true, false, true, true],
                text: "1",
                style: "tableTitle",
              },
              {
                border: [true, false, true, true],
                text: `${diag[0] ? diag[0].codigo : ""}`,
                style: "tableTitle",
              },
              {
                border: [true, false, true, true],
                text: `${diag[0] ? diag[0].descripcion : ""}`,
                style: "tableTitle",
              },
            ],
            [
              {
                border: [true, false, true, true],
                text: "2",
                style: "tableTitle",
              },
              {
                border: [true, false, true, true],
                text: `${diag[1] ? diag[1].codigo : ""}`,
                style: "tableTitle",
              },
              {
                border: [true, false, true, true],
                text: `${diag[1] ? diag[1].descripcion : ""}`,
                style: "tableTitle",
              },
            ],
          ],
        },
      },
    ],
  };
};
