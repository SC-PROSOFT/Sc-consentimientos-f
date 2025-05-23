import { useModuleFormatos, useApiContabilidad } from "@/store";
import dayjs from "dayjs";

const { getImgBs64, _getLogo$ } = useApiContabilidad();
const { getEmpresa, getPaci, getSesion } = useModuleFormatos();

export const utilsFormat = async ({ datos, content }) => {
  const logo = await validarLogo(datos);

  return {
    pageSize: "LETTER",
    pageMargins: [35, 105, 35, 30],
    images: {
      firma_disentimiento: datos.firma_disentimiento || sessionStorage.firma_disentimiento || getImgBs64,
      firma_profesional: datos.firma_prof || sessionStorage.firma_prof || getImgBs64,
      logo: logo || getImgBs64,
      firma_acomp: datos.img_firma_acomp ? datos.img_firma_acomp : getImgBs64,
      huella_paci: datos.img_huella_paci ? datos.img_huella_paci : getImgBs64,
      huella_acomp: datos.img_huella_acomp ? datos.img_huella_acomp : getImgBs64,
      huella_testigo: datos.img_huella_testigo ? datos.img_huella_testigo : getImgBs64,
      firma_testigo: datos.img_firma_testigo || getImgBs64,
      firma_func: datos.img_firma_func || getImgBs64,
      firma_consen: datos.img_firma_consen || getImgBs64,
      firma_paci: datos.img_firma_paci || getImgBs64,
      esquema_mamografia: datos.img_esquema_mamografia || getImgBs64,
      tabla_sedacion: datos.img_tabla_sedacion || getImgBs64,
    },
    info: {
      title: `CONSEN - ${getPaci.cod}${getSesion.oper}${dayjs().format("HHmm")}`, //Aca se añade el titulo del archivo
    },
    header: function (currentPage, pageCount) {
      return {
        margin: [35, 15, 35, 0], //Margenes deben ir en relacion a la pageMargin
        table: datosHeader(useApiContabilidad().getEncabezado.iso, currentPage, pageCount),
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
        fontSize: 7,
      },
      bodyNoBold9: {
        fontSize: 9,
      },
      tableTitle: {
        // fontSize: 10.5,
        fontSize: 8,
      },
      tableNoBold: {
        fontSize: 7,
      },
    },
  };
};

const min_salud = ["HIC042", "HIC036"];
const colom_poten = ["HIC043"];

const validarLogo = async (datos) => {
  try {
    let logo = "";
    const base64 = "data:image/png;base64,";
    console.log("⚡LOGO HEADER-->", datos?.cod_consen);
    if (colom_poten.includes(datos?.cod_consen)) logo = await _getLogo$({ nit: "ColomPotenVida" });
    else if (min_salud.includes(datos?.cod_consen)) logo = await _getLogo$({ nit: "MinSalud" });
    else return (logo = useModuleFormatos().getLogo);

    logo = `${base64}${logo}`;
    return logo;
  } catch (error) {
    throw error;
  }
};

export const calcEdad = (edad) => dayjs().diff(edad, "year");

export const calcularEdad = (fecha_naci) => {
  const fecha_actual = dayjs();
  const nacimiento = dayjs(fecha_naci, "YYYYMMDD");
  const diferencia_dias = fecha_actual.diff(nacimiento, "day");
  const diferencia_meses = fecha_actual.diff(nacimiento, "month");
  const diferencia_anios = fecha_actual.diff(nacimiento, "year");

  if (diferencia_dias < 30) {
    return `${diferencia_dias} Días`;
  } else if (diferencia_meses < 12) {
    return `${diferencia_meses} Meses`;
  } else {
    return `${diferencia_anios} Años`;
  }
};

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
    { COD: "A", DESCRIP: "PADRASTRO" },
    { COD: "B", DESCRIP: "AMIGO(A)" },
    { COD: "C", DESCRIP: "ABUELO(A)" },
    { COD: "D", DESCRIP: "TRABAJADOR SOCIAL" },
  ];
  return parentesco.find((e) => e.COD == value)?.DESCRIP || "";
};
export const evaluarDiscapacidad = (value) => {
  const discapacidad = [
    { COD: "1", DESCRIP: "SIN DISCAPACIDAD" },
    { COD: "2", DESCRIP: "DISCAPACIDAD FISICA" },
    { COD: "3", DESCRIP: "DISCAPACIDAD AUDITIVA" },
    { COD: "4", DESCRIP: "DISCAPACIDAD VISUAL" },
    { COD: "5", DESCRIP: "DISCAPACIDAD MENTAL" },
    { COD: "6", DESCRIP: "DISCAPACIDAD COGNITIVA" },
  ];
  return discapacidad.find((e) => e.COD == value)?.DESCRIP || "SIN DISCAPACIDAD";
};
export const evaluarTipoId = (value) => {
  const array_tipo_id = [
    { COD: "CC", DESCRIP: "CEDULA CIUDADANIA" },
    { COD: "CE", DESCRIP: "CEDULA EXTRANJERIA" },
    { COD: "PA", DESCRIP: "NUMERO PASAPORTE" },
    { COD: "RC", DESCRIP: "REGISTRO CIVIL" },
    { COD: "TI", DESCRIP: "TARJETA IDENTIDAD" },
    { COD: "ASI", DESCRIP: "ADULTO SIN IDENTIDAD" },
    { COD: "MSI", DESCRIP: "MENOR SIN IDENTIDAD" },
    { COD: "NUI", DESCRIP: "NUM UNICO IDENTIDAD NUID" },
    { COD: "CD", DESCRIP: "CARNET DIPLOMA" },
    { COD: "SC", DESCRIP: "SALVO CONDUCTO" },
    { COD: "PE", DESCRIP: "PERMISO ESPECIAL PERM" },
    { COD: "CN", DESCRIP: "CERTIFICADO NACIDO VIVO" },
    { COD: "PT", DESCRIP: "PERMISO PROTECCION TEMPORAL" },
    { COD: "DE", DESCRIP: "DOC IDENTIDAD EXTRANJERA" },
  ];
  let busqueda = array_tipo_id.find((e) => e.COD == value.trim());
  return busqueda ? busqueda.COD + " - " + busqueda.DESCRIP : "";
};

export const validarCodPaci = (value) => {
  let cod_paci = value.trim();
  let regExp = /[a-zA-Z]/g;
  if (regExp.test(cod_paci)) {
    return cod_paci.padStart(15, " ");
  } else {
    return cod_paci.padStart(15, "0");
  }
};
// Reemplazo carácteres especiales
export const replaceEsp = (value) => {
  if (typeof value !== "string") return value;
  return value.replace(/[\!\*\]\[\}\{\"\'\&\t]/g, "");
};

// Reemplazo salto de línea/enter por caracter &
export const enterReplace = (value) => {
  if (typeof value !== "string") return value;
  return value.replace(/(\r\n|\n|\r)/gm, "&");
};

export const evaluarClaseServ = (value) => {
  const servicio =
    Number(getEmpresa.nitusu) == 800156469
      ? [
          { COD: "0", DESCRIP: "DROGUERIA" },
          { COD: "1", DESCRIP: "CIRUGIAS" },
          { COD: "2", DESCRIP: "ECOGRAFIAS" },
          { COD: "3", DESCRIP: "RX - IMAGENOLOGIA" },
          { COD: "4", DESCRIP: "DOPPLER" },
          { COD: "5", DESCRIP: "T.A.C." },
          { COD: "6", DESCRIP: "RESONANCIA NUCLEAR" },
          { COD: "7", DESCRIP: "PROMOCION Y PREVENCION" },
        ]
      : [
          { COD: "0", DESCRIP: "DROGUERIA" },
          { COD: "1", DESCRIP: "CIRUGIAS" },
          { COD: "2", DESCRIP: "LABORATORIOS Y OTROS DIAGNOSTICOS" },
          { COD: "3", DESCRIP: "RX - IMAGENOLOGIA" },
          { COD: "4", DESCRIP: "OTROS SERVICIOS" },
          { COD: "5", DESCRIP: "CONSULTAS Y TERAPIAS" },
          { COD: "6", DESCRIP: "PATOLOGIA" },
          { COD: "7", DESCRIP: "PROMOCION Y PREVENCION" },
        ];
  return servicio.find((e) => e.COD == value)?.DESCRIP || " ";
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
              text: `${useApiContabilidad().getEncabezado.descrip}`,
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
              text: `${useApiContabilidad().getEncabezado.descrip}`,
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

  agregarElemento("Código", useApiContabilidad().getEncabezado.codigo);
  agregarElemento("Versión", useApiContabilidad().getEncabezado.version);
  agregarElemento(
    "Fecha de actualización",
    useApiContabilidad().getEncabezado.fecha_act ? dayjs(useApiContabilidad().getEncabezado.fecha_act.trim()).format("YYYY-MM-DD") : ""
  );
  agregarElemento(
    "Aprobado el",
    useApiContabilidad().getEncabezado.fecha_aprob ? dayjs(useApiContabilidad().getEncabezado.fecha_aprob).format("YYYY-MM-DD") : ""
  );
  agregarElemento("Aprobado por", useApiContabilidad().getEncabezado.aprobo);
  agregarElemento("Revisado por", useApiContabilidad().getEncabezado.reviso);

  return encabezado;
};

export const datosFormatUTM = ({ datos }) => {
  console.log("datosFormatUTM", datos);

  const diag = getSesion?.diagnosticos.length == 2 ? getSesion?.diagnosticos : JSON.parse(atob(getSesion.diagnosticos));
  const artic = getSesion?.articulos.length == 2 ? getSesion?.articulos : JSON.parse(atob(getSesion.articulos));
  const tipos_id = ["CC", "CE", "PA", "PT", "RC", "TI"];

  /* "format_encab_ampl", ESTOS FORMATOS SE LES AGREGO MAS DATOS; SEXO BIOLOGICO, IDENTIDADA DE GENERO, DISCAPACIDAD,
   ACOMPAÑANTE, PARENTESCO, TELEF. ACOMPAÑANTE, AMBITO DE ATENCION.
   POR LO TANTO SE CONDICIONA PARA NO AFECTAR LAS IMPRESIONES DE LOS DEMAS FORMATOS */

  const format_encab_ampl = ["LAB011", "LAB012", "LAB014"];

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
  const encab_ampl = [
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
        text: dayjs(datos.fecha).date(),
        style: "tableTitle",
      },
      {
        noWrap: true,
        text: dayjs(datos.fecha).month() + 1,
        style: "tableTitle",
      },
      {
        noWrap: true,
        text: dayjs(datos.fecha).year(),
        style: "tableTitle",
      },
      {
        noWrap: true,
        colSpan: 3,
        text: datos.hora,
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
        noWrap: false,
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
            text: `${!tipos_id.includes(datos.paciente.tipo_id.trim()) ? datos.paciente.tipo_id.trim() : "OTRO"}`,
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
        text: `${calcularEdad(getPaci.nacim)}`,
        noWrap: true,
        style: "tableTitle",
      },
    ],
    [
      {
        colSpan: 3,
        bold: true,
        text: "SEXO BIOLOGICO",
        style: "tableTitle",
      },
      {},
      {},
      {
        colSpan: 8,
        bold: true,
        text: "DISPACIDAD",
        style: "tableTitle",
      },
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
        stack: [
          {
            text: "M",
            style: "tableTitle",
          },
          {
            stack: marcaCasilla(getPaci.sexo.trim() == "M" ? true : false),
          },
        ],
      },
      {
        stack: [
          {
            text: "F",
            style: "tableTitle",
          },
          {
            stack: marcaCasilla(getPaci.sexo.trim() == "F" ? true : false),
          },
        ],
      },
      {
        stack: [
          {
            text: "I",
            style: "tableTitle",
          },
          {
            stack: marcaCasilla(getPaci.sexo.trim() != "M" && getPaci.sexo.trim() != "F" ? true : false),
          },
        ],
      },
      {
        colSpan: 8,
        text: `${evaluarDiscapacidad(getPaci.discap)}`,
        style: "tableTitle",
      },
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
        bold: true,
        text: "IDENTIDAD GÉNERO",
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
        colSpan: 2,
        stack: [
          {
            text: "MASCULINO",
            style: "tableTitle",
          },
          {
            stack: marcaCasilla(datos.ident_genero ? (datos.ident_genero.trim() == "MASCULINO" ? true : false) : false),
          },
        ],
      },
      {},
      {
        colSpan: 2,
        stack: [
          {
            text: "FEMENINO",
            style: "tableTitle",
          },
          {
            stack: marcaCasilla(datos.ident_genero ? (datos.ident_genero.trim() == "FEMENINO" ? true : false) : false),
          },
        ],
      },
      {},
      {
        colSpan: 2,
        stack: [
          {
            text: "TRANS",
            style: "tableTitle",
          },
          {
            stack: marcaCasilla(datos.ident_genero ? (datos.ident_genero.trim() == "TRANS" ? true : false) : false),
          },
        ],
      },
      {},
      {
        colSpan: 2,
        stack: [
          {
            text: "NEUTRO",
            style: "tableTitle",
          },
          {
            stack: marcaCasilla(datos.ident_genero ? (datos.ident_genero.trim() == "NEUTRO" ? true : false) : false),
          },
        ],
      },
      {},
      {
        colSpan: 3,
        stack: [
          {
            text: "NO DECLARA",
            style: "tableTitle",
          },
          {
            stack: marcaCasilla(datos.ident_genero ? (datos.ident_genero.trim() == "NO DECLARA" ? true : false) : false),
          },
        ],
      },
      {},
      {},
    ],
    // ACOMPAÑANTE
    [
      {
        colSpan: 8,
        bold: true,
        text: "ACOMPAÑANTE",
        style: "tableTitle",
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {
        colSpan: 3,
        bold: true,
        text: "PARENTESCO",
        style: "tableTitle",
      },
      {},
      {},
    ],
    [
      {
        colSpan: 8,
        text: datos.acomp.descrip || "",
        style: "tableTitle",
      },

      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {
        colSpan: 3,
        text: `${evaluarParentesco(datos.paren_acomp)}`,
        style: "tableTitle",
      },
      {},
      {},
    ],
    [
      {
        colSpan: 5,
        bold: true,
        text: "TELEFONO ACOMPAÑANTE",
        style: "tableTitle",
      },
      {},
      {},
      {},
      {},
      {
        colSpan: 6,
        bold: true,
        text: "AMBITO DE ANTENCIÓN",
        style: "tableTitle",
      },
      {},
      {},
      {},
      {},
      {},
    ],
    [
      {
        colSpan: 5,
        text: `${datos.acomp.telefono}`,
        style: "tableTitle",
      },
      {},
      {},
      {},
      {},
      {
        colSpan: 3,
        stack: [
          {
            text: "AMBULATORIO",
            style: "tableTitle",
          },
          {
            stack: marcaCasilla(datos.ambito_atenc ? (datos.ambito_atenc.trim() == "AMBULATORIO" ? true : false) : false),
          },
        ],
      },
      {},
      {},
      {
        colSpan: 3,
        stack: [
          {
            text: "HOSPITALIZADO",
            style: "tableTitle",
          },
          {
            stack: marcaCasilla(datos.ambito_atenc ? (datos.ambito_atenc.trim() == "HOSPITALIZADO" ? true : false) : false),
          },
        ],
      },
      {},
      {},
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
            text: datos.paciente.descrip_eps,
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
  ];

  const encab_normal = [
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
        text: dayjs(datos.fecha).date(),
        style: "tableTitle",
      },
      {
        noWrap: true,
        text: dayjs(datos.fecha).month() + 1,
        style: "tableTitle",
      },
      {
        noWrap: true,
        text: dayjs(datos.fecha).year(),
        style: "tableTitle",
      },
      {
        noWrap: true,
        colSpan: 3,
        text: datos.hora,
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
        noWrap: false,
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
            text: `${!tipos_id.includes(datos.paciente.tipo_id.trim()) ? datos.paciente.tipo_id.trim() : "OTRO"}`,
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
        text: `${calcularEdad(getPaci.nacim)}`,
        noWrap: true,
        style: "tableTitle",
      },
    ],
    // acompañante
    [
      {
        colSpan: 7,
        bold: true,
        text: "ACOMPAÑANTE",
        style: "tableTitle",
      },
      {},
      {},
      {},
      {},
      {},
      {},
      { bold: true, text: "TELEFONO ACOMPAÑANTE", style: "tableTitle" },
      {
        colSpan: 3,
        bold: true,
        text: "PARENTESCO",
        style: "tableTitle",
      },
      {},
      {},
    ],
    [
      {
        colSpan: 7,
        text: datos.acomp.descrip || "",
        style: "tableTitle",
      },

      {},
      {},
      {},
      {},
      {},
      {},
      {
        text: `${datos.acomp.telefono}`,
        style: "tableTitle",
      },
      {
        colSpan: 3,
        text: `${evaluarParentesco(datos.paren_acomp)}`,
        style: "tableTitle",
      },
      {},
      {},
    ],
    [
      {
        alignment: "left",
        colSpan: 11,
        style: "tableTitle",
        text: [
          {
            bold: true,
            text: "ENTIDAD RESPONSABLE DE PBS: ",
          },
          {
            text: datos.paciente.descrip_eps,
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
  ];

  return {
    stack: [
      {
        alignment: "center",
        table: {
          widths: ["7%", "7%", "7%", "7%", "7%", "7%", "7%", "25%", "10%", "8%", "8%"],
          body: format_encab_ampl.includes(datos.cod_consen) ? encab_ampl : encab_normal,
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
