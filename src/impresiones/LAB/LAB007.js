import { datosFormatUTM } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionLAB007 = ({ datos }) => {
  var dd = {
    stack: [contenidoDensOsea()],
  };

  function contenidoDensOsea() {
    const tipo_id = "";
    return {
      stack: [
        datosFormatUTM({ datos }),
        {
          marginTop: 15,
          table: {
            body: [
              [
                {
                  marginTop: 1,
                  marginBottom: 1,
                  text: "NORMATIVIDAD VIGENTE",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  // marginTop: 5,
                  // marginBottom: 5,
                  text: "La Ley 23 de 1981 al referirse a las relaciones médico – paciente, en los artículos 14, 15 y 18, advierte la necesidad del consentimiento para realizar los diferentes tratamientos medico quirúrgicos que se requieran. Para la resolución 3100 de 2019 el Consentimiento informado es la aceptación libre, voluntaria y consciente de un paciente o usuario, manifestada en el pleno uso de sus facultades, para que tenga a lugar un acto asistencial. Para que el consentimiento se considere informado, el paciente o usuario deberá entender la naturaleza de la decisión a consentir tras recibir información que le haga consciente de los beneficios, riesgos, alternativas e implicaciones del acto asistencial.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  marginTop: 1,
                  marginBottom: 1,
                  text: "INFORMACIÓN DEL PROCEDIMIENTO",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  // marginTop: 5,
                  // marginBottom: 5,
                  text: "El examen de densidad ósea, también llamada absorciometría de rayos X de energía dual, DEXA o DXA, utiliza una dosis muy pequeña de radiación ionizante para producir imágenes del interior del cuerpo, generalmente la parte inferior de la columna (lumbar) y las caderas, para medir la pérdida de hueso.\n\nGeneralmente, se utiliza para diagnosticar osteoporosis, para evaluar el riesgo que tiene un individuo de desarrollar fracturas debidas a la osteoporosis. La DXA es simple, rápida, y no es invasiva. También es el método más comunmente utilizado y estándar para diagnosticar la osteoporosis",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  marginTop: 1,
                  marginBottom: 1,
                  text: "BENEFICIOS",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  // marginTop: 5,
                  // marginBottom: 5,
                  text: "La densitometría ósea de DXA es un procedimiento simple, rápido y no invasivo. No se requiere anestesia. El examen de densidad ósea DXA es, actualmente, el mejor método estandarizado disponible para diagnosticar la osteoporosis y también se lo considera un exacto estimador del riesgo de fractura. La DXA se utiliza para tomar decisiones con respecto a si se necesita un tratamiento, y puede ser utilizada para monitorear los efectos del tratamiento. Los equipos DXA se encuentran ampliamente disponibles haciendo que la densitometría ósea sea conveniente tanto para los pacientes y como para los médicos. Luego del examen no queda radiación en su cuerpo. Los rayos X por lo general no tienen efectos secundarios en el rango de diagnóstico típico para este examen.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  marginTop: 1,
                  marginBottom: 1,
                  text: "RIESGOS",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  marginTop: 4,
                  marginBottom: 4,
                  text: "No se esperan complicaciones en el procedimiento. La cantidad de radiación utilizada es extremadamente pequeña, menos de un décimo de la dosis estándar de rayos X para tórax y menos que la exposición de un día a la radiación natural.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            ],
          },
        },
        textoAutoriza(true),
      ],
    };
  }

  function textoAutoriza(autorizo) {
    const textoAutoriza = {
      marginTop: 20,
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
              text: `Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la realización del procedimiento en mención, proceda a firmar dejando su autorización por escrito.\n\n Yo {PEPE PEPITO PEPITICO PEPOTE}, identificada (o) con el documento de identidad número {1111111111}, después de haber sido informado (a) sobre el procedimiento de Densitometría Ósea, los riesgos y beneficios, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo la toma del procedimiento teniendo en cuenta que esta autorización puede ser revocable en cualquier momento.`,
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
      marginTop: 20,
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
              text: `Yo {PEPE PEPITO PEPITICO PEPOTE}, identificada (o) con el documento de identidad número {1111111111}, después de haber sido informado (a) sobre el procedimiento de Densitometría Ósea sus riesgos y beneficios y adicionalmente, los riesgos de no realizármelo, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con la toma del procedimiento en mención.`,
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
