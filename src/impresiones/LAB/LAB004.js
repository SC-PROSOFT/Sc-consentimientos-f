import { datosFormatUTM } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionLAB004 = ({ datos }) => {
  var dd = {
    stack: [contenidoMamografia()],
  };

  function contenidoMamografia() {
    return {
      stack: [
        datosFormatUTM({ datos }),
        {
          marginTop: 20,
          table: {
            body: [
              [
                {
                  text: "NORMATIVIDAD VIGENTE",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  text: "La Ley 23 de 1981 al referirse a las relaciones médico – paciente, en los artículos 14, 15 y 18, advierte la necesidad del consentimiento para realizar los diferentes tratamientos medico quirúrgicos que se requieran. Para la resolución 3100 de 2019 el Consentimiento informado es la aceptación libre, voluntaria y consciente de un paciente o usuario, manifestada en el pleno uso de sus facultades, para que tenga a lugar un acto asistencial. Para que el consentimiento se considere informado, el paciente o usuario deberá entender la naturaleza de la decisión a consentir tras recibir información que le haga consciente de los beneficios, riesgos, alternativas e implicaciones del acto asistencial.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  text: "INFORMACIÓN DEL PROCEDIMIENTO",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  text: "La Mamografía es un estudio radiológico con la particularidad de ser una proyección específica para la evaluación de las mamas y con un equipo de rayos X diferente al utilizado para radiología convencional. Para la adquisición de este estudio es necesario que las mamas se coloquen en una superficie y se compriman para que sea más fácil la identificación de tumores o calcificaciones. Es importante ese día no utilizar desodorante o cremas en el área del pecho pues estos productos pueden ser detectados por los RX y causar un mal diagnóstico.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  text: "BENEFICIOS",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  text: "La mamografía de exploración juega un papel central en la detección temprana del cáncer de mamas ya que puede mostrar los cambios en las mamas años antes de que el médico o el paciente los adviertan. La mamografía de diagnóstico se utiliza para evaluar a una paciente con resultados clínicos anormales, tales como nódulos en las mamas o descargas de los pezones, descubiertos por la mujer o su médico. La mamografía de diagnóstico también puede realizarse luego de un mamograma de exploración anormal, con el fin de evaluar el área conflictiva en el examen de exploración.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  text: "RIESGOS",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  text: "La comprensión utilizada para tomaar el examen puede causar una pequeña molestia pero sólo durará unos segundos. Todo el examen lo realiza un tecnólogo en imágenes altamente capacitado para este fin. Las Mamogramas con resultado falso positivo requieren de mayor evaluación, como por ejemplo la realización de mamogramas adicionales o ultrasonido. Si aparece un resultado anormal, se deberá realizar un seguimiento o biopsia, de acuerdo a la valoración del medico tratante.",
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
                text: `Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la realización del procedimiento en mención, proceda a firmar dejando su autorización por escrito.\n\n Yo {PEPE PEPITO PEPITICO PEPOTE}, identificada (o) con el documento de identidad número {1111111111}, después de haber sido informado (a) sobre el procedimiento de Mamografía, los riesgos y beneficios, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo la toma del procedimiento teniendo en cuenta que esta autorización puede ser revocable en cualquier momento.`,
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
          ]
        }
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
                text: `Yo {PEPE PEPITO PEPITICO PEPOTE}, identificada (o) con el documento de identidad número {1111111111}, después de haber sido informado (a) sobre el procedimiento de Mamografía sus riesgos y beneficios y adicionalmente, los riesgos de no realizármelo, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con la toma del procedimiento en mención.`,
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
          ]
        }
    };
    if (autorizo !== false && autorizo!== true) {
        return {
            stack: [
              textoAutoriza,
              textoRevoca
            ]
        };
    }
    if (autorizo) return textoAutoriza;
    else return textoRevoca;
  }

  return dd;
};
