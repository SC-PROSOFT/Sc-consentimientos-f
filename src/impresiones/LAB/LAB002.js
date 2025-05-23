import { datosFormatUTM } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionLAB002 = ({ datos }) => {
  var dd = {
    stack: [contenidoSedacion()],
  };

  function contenidoSedacion() {
    return {
      stack: [
        datosFormatUTM({ datos }),
        {
          marginTop: 15,
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
                  text: "La sedación es una práctica médica que se puede considerar como una estrategia para mejorar la calidad del cuidado proporcionado al paciente, llegando incluso a considerarse como un indicador de calidad; se emplea en procedimientos invasivos y no invasivos, de carácter diagnóstico o intervencionista. La sedación consiste en la administración de agentes sedantes o disociativos (medicamentos) para disminuir el dolor, la ansiedad y la incomodidad que pueden producir los procedimientos médicos. La sedación fuera del quirófano hace referencia a la administración de sedación en un entorno diferente a las salas de cirugía, una práctica que puede ser usual en procedimientos de radiología, intervenciones diagnósticas, procedimientos pediátricos o en pacientes psiquiátricos, entre otros.",
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
                  text: "Con mucha frecuencia la necesidad de obtener imágenes de alta calidad sólo depende de la inmovilidad del paciente, como es en el caso de la resonancia magnética o la tomografía axial computarizada; estos procedimiento no implicann dolor, pero en situaciones donde el enfermo se encuentra ansioso, sufre de claustrofobia o no puede permanecer quieto, las técnicas de sedación o anestesia en ocasiones son indispensables para proporcionarle comodidad y seguridad al paciente.",
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
                  text: "La administración de sedación es un proceso complejo y dinámico, que requiere un monitoreo continuo, pues el grado de sedación al que se somete el paciente puede cambiar rápidamente. Los medicamentos empleados para sedación se relacionan con eventos adversos, como la hipotensión, la bradicardia, depresión respiratoria, hipoxia, aspiración, laringoespasmo, que fácilmente pueden poner en riesgo la vida. La administración de sedación fuera de la sala de cirugía incrementa el riesgo de evento adverso, por esto, en UTM el personal involucrado en esta práctica tiene las competencias necesarias para garantizar la seguridad del procedimiento, la sedación se encuentra dirigida por el médico anestesiólogo, quien además acompaña al paciente durante el procedimiento y la recuperación.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            ],
          },
        },
        textoAutoriza(datos.autorizo),
        textoDisentimiento(datos.disentimiento, datos.acompa_disenti),
      ],
    };
  }

  function textoAutoriza(autorizo) {
    const textoAutoriza = {
      marginTop: 10,
      pageBreak: "before",
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
              text: `Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la realización del procedimiento en mención, proceda a firmar dejando su autorización por escrito.\n\n Yo ${datos.paciente.descrip}, identificada (o) con el documento de identidad número ${datos.paciente.cod}, después de haber sido informado (a) sobre el procedimiento de Sedación, los riesgos y beneficios, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo la toma del procedimiento teniendo en cuenta que esta autorización puede ser revocable en cualquier momento.`,
              style: "tableTitle",
              alignment: "justify",
            },
            {},
            {},
          ],
          [
            {
              text: `${datos.firmas.firma_acomp ? "ACOMPAÑANTE" : "PACIENTE"}`,
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
              image: `${datos.firmas.firma_acomp ? "firma_acomp" : "firma_paci"}`,
              width: 140,
              height: 70,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_testigo",
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
              text: `NOMBRE: ${datos.firmas.firma_acomp ? datos.acomp.descrip : datos.paciente.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.testigo.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.prof.descrip}`,
              style: "tableTitle",
            },
          ],
          [
            {
              text: `DOC. IDENT: ${datos.firmas.firma_acomp ? datos.acomp.cod : datos.paciente.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.testigo.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.prof.cod}`,
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
              text: `Yo ${datos.paciente.descrip}, identificada (o) con el documento de identidad número ${datos.paciente.cod}, después de haber sido informado (a) sobre el procedimiento de Sedación, sus riesgos y beneficios y adicionalmente, los riesgos de no realizármelo, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con la toma del procedimiento en mención.`,
              style: "tableTitle",
              alignment: "justify",
            },
            {},
            {},
          ],
          [
            {
              text: `${datos.firmas.firma_acomp ? "ACOMPAÑANTE" : "PACIENTE"}`,
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
              image: `${datos.firmas.firma_acomp ? "firma_acomp" : "firma_paci"}`,
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
              text: `NOMBRE: ${datos.firmas.firma_acomp ? datos.acomp.descrip : datos.paciente.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.acomp.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.prof.descrip}`,
              style: "tableTitle",
            },
          ],
          [
            {
              text: `DOC. IDENT: ${datos.firmas.firma_acomp ? datos.acomp.cod : datos.paciente.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.acomp.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.prof.cod}`,
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

  function textoDisentimiento(disentimiento, acompa_disenti) {
    const textAcompa = `Yo ${datos.acomp.descrip}, identificada (o) con el documento de identidad número ${datos.acomp.cod}, en calidad de acudiente de ${datos.paciente.descrip} , identificada (o) con el documento de identidad número ${datos.paciente.cod}, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;
    const textPacient = `Yo ${datos.paciente.descrip}, identificada (o) con el documento de identidad número ${datos.paciente.cod}, en calidad de paciente, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;

    const textoDisentimiento = {
      marginTop: 15,
      table: {
        widths: ["auto", 180],
        body: [
          [
            {
              colSpan: 2,
              text: "DISENTIMIENTO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {},
          ],
          [
            {
              marginLeft: 3,
              marginTop: 5,
              marginRight: 3,
              stack: [
                {
                  text: acompa_disenti == "S" ? textAcompa : textPacient,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {
                  marginTop: 5,
                  text: [
                    {
                      text: "Observaciones:",
                      bold: true,
                    },
                    {
                      text: `${datos.obser_disenti}`,
                    },
                  ],
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            },
            {
              stack: [
                {
                  text: "RESPONSABLE DISENTIMIENTO",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
                {
                  marginTop: 5,
                  alignment: "center",
                  image: "firma_disentimiento",
                  width: 140,
                  height: 70,
                },
                {
                  marginTop: 5,
                  columns: [
                    {
                      width: 48,
                      text: "NOMBRE:",
                      bold: true,
                    },
                    {
                      width: "*",
                      text: `${acompa_disenti == "S" ? datos.acomp.descrip : datos.paciente.descrip}`,
                    },
                  ],
                  style: "tableTitle",
                },
                {
                  text: [
                    {
                      text: "DOC. IDENT: ",
                      bold: true,
                    },
                    {
                      text: `${acompa_disenti == "S" ? datos.acomp.cod : datos.paciente.cod}`,
                    },
                  ],
                  style: "tableTitle",
                },
              ],
            },
          ],
        ],
      },
    };

    if (disentimiento == "S") return textoDisentimiento;
    else return null;
  }

  return dd;
};
