import dayjs from "dayjs";

export const impresionLAB002 = ({ datos }) => {
  var dd = {
    stack: [contenidoSedacion()],
  };

  function contenidoSedacion() {
    return {
      stack: [textoAutoriza(true)],
    };
  }

  function textoAutoriza(autorizo) {
    const textoAutoriza = {
      // marginTop: 15,
      table: {
        heights: ["auto", "auto", "auto", 80, "auto", "auto"],
        widths: [171, 172, 171],
        body: [
          [
            {
              colSpan: 3,
              text: "DECLARACIÓN DEL CONSENTIMIENTO INFORMADO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {},
            {},
          ],
          [
            {
              marginBottom: 5,
              colSpan: 3,
              text: `Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la realización del procedimiento en mención, proceda a firmar dejando su autorización por escrito.\n\n Yo {PEPE PEPITO PEPITICO PEPOTE}, identificada (o) con el documento de identidad número {1111111111}, después de haber sido informado (a) sobre el procedimiento de Sedación, los riesgos y beneficios, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo la toma del procedimiento teniendo en cuenta que esta autorización puede ser revocable en cualquier momento.`,
              style: "tableTitle",
              alignment: "justify",
            },
            {},
            {},
          ],
          [
            {
              text: "PACIENTE",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "TESTIGO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "MÉDICO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
          ],
          [
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_paci",
              width: 140,
              height: 70,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_acomp",
              width: 140,
              height: 70,
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
            {
              text: `NOMBRE: PEPE PEPITO PEPITICO PEPOTE`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: PEPE PEPITO PEPITICO PEPOTE`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: PEPE PEPITO PEPITICO PEPOTE`,
              style: "tableTitle",
            },
          ],
          [
            {
              text: `DOC. IDENT: 1111111111`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: 1111111111`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: 1111111111`,
              style: "tableTitle",
            },
          ],
        ],
      },
    };

    const textoRevoca = {
      marginTop: 15,
      table: {
        heights: ["auto", "auto", "auto", 80, "auto", "auto"],
        widths: [171, 172, 171],
        body: [
          [
            {
              colSpan: 3,
              text: "REVOCACIÓN DEL CONSENTIMIENTO INFORMADO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {},
            {},
          ],
          [
            {
              marginBottom: 5,
              colSpan: 3,
              text: `Yo {PEPE PEPITO PEPITICO PEPOTE}, identificada (o) con el documento de identidad número {1111111111}, después de haber sido informado (a) sobre el procedimiento de Sedación, sus riesgos y beneficios y adicionalmente, los riesgos de no realizármelo, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con la toma del procedimiento en mención.`,
              style: "tableTitle",
              alignment: "justify",
            },
            {},
            {},
          ],
          [
            {
              text: "PACIENTE",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "TESTIGO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "MÉDICO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
          ],
          [
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_paci",
              width: 140,
              height: 70,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_acomp",
              width: 140,
              height: 70,
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
            {
              text: `NOMBRE: PEPE PEPITO PEPITICO PEPOTE`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: PEPE PEPITO PEPITICO PEPOTE`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: PEPE PEPITO PEPITICO PEPOTE`,
              style: "tableTitle",
            },
          ],
          [
            {
              text: `DOC. IDENT: 1111111111`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: 1111111111`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: 1111111111`,
              style: "tableTitle",
            },
          ],
        ],
      },
    };
    if (autorizo !== false && autorizo !== true) {
      return {
        stack: [textoAutoriza, textoRevoca],
      };
    }
    if (autorizo) return textoAutoriza;
    else return textoRevoca;
  }

  return dd;
};
