import { datosFormatUTM } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionLAB021 = ({ datos }) => {
  console.log(" impresionLAB021 ", datos);
  console.log(" dayjs(datos.fecha).date() --->> ", dayjs(datos.fecha).year());

  const itemsTablaNotasAtenc = () => {
    return datos.tabla_notas_aten
      .filter((item) => item.indice_i != " " && item.indice_i != null && item.indice_i != "")
      .map((item) => [
        {
          text: item.indice_i,
        },
        {
          text: item.fecha,
        },
        {
          text: item.hora,
        },
        {
          text: item.notas_atencion,
        },
      ]);
  };

  var dd = {
    stack: [contenidoSedacion()],
  };

  function contenidoSedacion() {
    return {
      stack: [
        datosFormatUTM({ datos }),
        {
          marginTop: 5,
          table: {
            widths: ["20%", "20%", "5%", "20%", "5%", "25%", "5%"],
            body: [
              [
                { style: "tableTitle", text: "SEDACIÓN (TIPO) ", bold: true, alignment: "center" },
                { style: "tableTitle", text: "INTRAVENOSA ", alignment: "center" },
                { style: "tableTitle", text: datos.tipo_sedacion == "1" ? "X" : "", bold: true, alignment: "center" },
                { style: "tableTitle", text: "INHALATORIA ", alignment: "center" },
                { style: "tableTitle", text: datos.tipo_sedacion == "2" ? "X" : "", bold: true, alignment: "center" },
                { style: "tableTitle", text: "ANESTESIA GENERAL ", alignment: "center" },
                { style: "tableTitle", text: datos.tipo_sedacion == "3" ? "X" : "", bold: true, alignment: "center" },
              ],
            ],
          },
        },
        {
          marginTop: 3,
          alignment: "center",
          image: "tabla_sedacion",
          width: 542,
          height: 380,
        },
        {
          marginTop: 3,
          fontSize: 8,
          table: {
            widths: ["10%", "14%", "5%", "19%", "5%", "19%", "5%", "23%"],
            body: [
              [
                { text: "VÍA AÉREA ", bold: true, alignment: "center" },
                { text: "CÁNULA NASAL ", alignment: "center" },
                { style: "tableTitle", text: datos.via_aerea == "1" ? "X" : "", bold: true, alignment: "center" },
                { text: "MASCARILLA VENTURI ", alignment: "center" },
                { style: "tableTitle", text: datos.via_aerea == "2" ? "X" : "", bold: true, alignment: "center" },
                { text: "MASCARA LARÍNGEA ", alignment: "center" },
                { style: "tableTitle", text: datos.via_aerea == "3" ? "X" : "", bold: true, alignment: "center" },
                { text: `TUBO OROTRAQUEAL # ${datos.tubo_orotraqueal}`, alignment: "center" },
              ],
            ],
          },
        },
        tablaNotasAtenc(),
        {
          marginTop: 10,
          table: {
            heights: ["auto", "auto", "auto", "auto", "auto", "auto"],
            widths: [352, 171],
            body: [
              [
                {
                  text: "TEST DE RECUPERACIÓN POST-ANESTESICA ALDRETЕ",
                  bold: true,
                  style: "tableTitle",
                  alignment: "left",
                },
                {
                  text: "MÉDICO ANESTESIOLOGO",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  text: datos.test_recupera_anest,
                  rowSpan: 3,
                  alignment: "center",
                  style: "tableTitle",
                },
                {
                  marginTop: 5,
                  alignment: "center",
                  image: "firma_profesional",
                  width: 140,
                  height: 70,
                },
              ],
              [
                {},
                {
                  text: `NOMBRE: ${datos.prof.descrip}`,
                  style: "tableTitle",
                },
              ],
              [
                {},
                {
                  text: `DOC. IDENT: ${datos.prof.cod}`,
                  style: "tableTitle",
                },
              ],
            ],
          },
        },
        {
          marginTop: 5,
          alignment: "center",
          table: {
            widths: ["33.33%", "33.33%", "33.33%"],
            body: [
              [
                {
                  style: "tableTitle",
                  text: {
                    bold: true,
                    text: "Elaborado por: Médico Especialista",
                  },
                },
                {
                  style: "tableTitle",
                  text: {
                    bold: true,
                    text: "Revisado por: Asesor de Calidad",
                  },
                },
                {
                  style: "tableTitle",
                  text: {
                    bold: true,
                    text: "Aprobado por: Representante Legal",
                  },
                },
              ],
            ],
          },
        },
      ],
    };
  }

  function tablaNotasAtenc() {
    if (datos.tabla_notas_aten[0].notas_atencion.trim() != "") {
      return {
        columns: [
          {
            pageBreak: "before",
            fontSize: 8,
            marginTop: 5,
            table: {
              marginRigth: 1,
              widths: ["6%", "8%", "6%", "80%"],
              body: [
                [
                  { text: "INDICE ", bold: true, alignment: "center" },
                  { text: "FECHA ", bold: true, alignment: "center" },
                  { text: "HORA", bold: true, alignment: "center" },
                  { text: "NOTAS DE ATENCIÓN", bold: true, alignment: "center" },
                ],
                ...itemsTablaNotasAtenc(),
              ],
            },
            width: "100%",
          },
        ],
      };
    } else {
      return { pageBreak: "before", text: "" };
    }
  }

  function textoAutoriza() {
    const textoAutoriza = {
      marginTop: 10,
      table: {
        heights: ["auto", "auto", "auto", "auto", "auto", "auto"],
        widths: [171],
        body: [
          [
            {
              text: "TECNOLOGO EN RADIOLOGÍA",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
          ],
          [
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_profesional",
              width: 140,
              height: 70,
            },
          ],
          [
            {
              text: `NOMBRE: ${datos.prof.descrip}`,
              style: "tableTitle",
            },
          ],
          [
            {
              text: `DOC. IDENT: ${datos.prof.cod}`,
              style: "tableTitle",
            },
          ],
        ],
      },
    };
    return textoAutoriza;
  }

  return dd;
};
