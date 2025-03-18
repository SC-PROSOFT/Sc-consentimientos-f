import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionHIC072 = ({ datos }) => {
  console.log("datos ", datos);
  const marcaCasilla = (condicion) => {
    return [
      {
        canvas: condicion
          ? [
              { type: "line", x1: 0, x2: 30, y1: -2, y2: 10, color: "#808080" },
              { type: "line", x1: 30, x2: 0, y1: -2, y2: 10, color: "#808080" },
            ]
          : [],
      },
    ];
  };

  var dd = {
    stack: [contenidoHIC072(), firmas()],
  };

  function contenidoHIC072() {
    return {
      stack: [
        {
          marginTop: 8,
          text: [
            { bold: true, style: "tableTitle", text: " Fecha: " },
            { style: "bodyNoBold9", text: datos.fecha },
            { bold: true, style: "tableTitle", text: " Hora: " },
            { style: "bodyNoBold9", text: datos.hora },
          ],
        },
        {
          marginTop: 8,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Nombre: " },
            { style: "bodyNoBold9", text: datos.paciente.descrip },
          ],
        },
        {
          marginTop: 8,
          text: [
            { bold: true, style: "bodyNoBold9", text: "Tipo y numero documento de identificación: " },
            { style: "bodyNoBold9", text: datos.paciente.tipo_id + " " + datos.paciente.cod },
          ],
        },
        {
          marginTop: 10,
          bold: true,
          alignment: "left",
          text: "SEÑORA USUARIA",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            {
              text: "Es muy importante para nosotros que usted reciba y entienda la información, acerca del examen que fue solicitado por su médico tratante, quien determino que este estudio es la ",
            },
            {
              text: "alternativa ",
              bold: true,
            },
            {
              text: "más adecuada con la cual se puede ",
            },
            {
              text: "beneficiar, ",
              bold: true,
            },
            {
              text: ", obtener o confirmar el diagnóstico y que nosotros con gusto realizaremos, lea con atención y no tema solicitar explicación en caso de duda, para aclarar sus inquietudes y responder sus preguntas. A continuación, se mencionan los exámenes que se realizan a partir de muestras ginecológicas, marque con una x el procedimiento a realizar.",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 5,
          alignment: "center",
          table: {
            widths: ["5%", "95%"],
            body: [
              [{ style: "tableTitle", text: "DESCRIPCION", alignment: "center", colSpan: 2 }, {}],
              [
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                    },
                    {
                      stack: marcaCasilla(datos.exam_fluj_vaginal.trim() == "S" ? true : false),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      alignment: "justify",
                      text: [
                        { text: "EXAMEN DE FLUJO VAGINAL: ", bold: true },
                        {
                          text: "Se tomará nuestra de la secreción vaginal para examen directo y/o cultivo, previa colocación o no de especulo vaginal (depende del caso), muestra se toma con ayuda de un aplicador.",
                        },
                      ],
                      style: "bodyNoBold9",
                    },
                  ],
                },
              ],
              [
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                    },
                    {
                      stack: marcaCasilla(datos.exam_fluj_vaginal.trim() == "S" ? true : false),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      alignment: "justify",
                      text: [
                        { text: "CITOLOGIA VAGINAL: ", bold: true },
                        {
                          text: "Previa colocación	del especulo vaginal, se frotará la mucosa del cuello uterino, con un cepillo y espátula especiales, para obtener muestras del tejido celular, el material se extiende sobre una lámina, que luego de un proceso de colaboración es analizada bajo el microscopio.",
                        },
                      ],
                      style: "bodyNoBold9",
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            { text: "RIESGO: ", bold: true },
            {
              text: "No existe ningún riesgo identificado al tomar las muestras, incluso si usted se encuentra embarazada actualmente. Cuando el cuello del útero se encuentra muy inflamado, en ocasiones se presenta escaso sangrado vaginal (manchado). Que cede solo y no requiere tratamiento.",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            { text: "LIMITACION: ", bold: true },
            {
              text: "Pacientes con antecedentes de traumas o cirugía reciente en región genital y/o estructuras circundantes, que dificulten el examen.",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            { text: "USTED DEBE SABER QUE: ", bold: true },
            {
              text: "Para este examen se utilizan elementos nuevos y desechables. Son procedimientos seguros y muy rara vez presentan complicaciones durante la toma de las muestras se puede presentar alguna molestia como dolor leve que cederá rápidamente su colaboración es muy importante para realizarlo, en el tiempo indicado y con menor incomodidad.",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            {
              text: "No existe pruebas exactas para establecer el grado de riesgo, sin embargo, el profesional asignado establecerá si se puede o no realizar la prueba solicitada y tomara las medidas especiales para garantizar de la mejor forma de su seguridad.",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            { text: "RECOMENDACIONES: ", bold: true },
            {
              text: "Si posteriormente el examen presenta algún síntoma como sangrado vaginal, dolor abdominal, ardor para orinar y/o fiebre, flujo vaginal de mal olor y no se encuentra en nuestras instalaciones, consulte a su médico tratante o asista al servicio de urgencias que le corresponde.",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            { text: "HE COMPRENDIDO CON CLARIDAD TODO LO ESCRITO ANTERIORMENTE. ", bold: true },
            {
              text: "Yo he tenido la oportunidad de preguntar y resolver todas mis dudas. ",
            },
            { text: "ACEPTO LA REALIZACION DEL EXAMEN - DECLARO QUE LA DECISION QUE TOMO ES LIBRE Y VOLUNTARIA DOY MI CONSENTIMIENTO ", bold: true },
            {
              text: "para que el profesional del Hospital Local Primer Nivel E.S.E FuentedeOro me realice el procedimiento diagnostico solicitado por mi médico tratante. ",
            },
            {
              text: "he aceptado la toma del estudio, la entidad en mención y el médico, quedan autorizados para llevar a cabo las conductas o procedimientos médicos necesarios tendientes a resolver las complicaciones imprevisibles del procedimiento que mediante este documento autorizo.",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            {
              text: "Entiendo que me puedo retractar de este consentimiento cuando así lo desee, debiendo informal al equipo médico de diagnóstico del cambio de esta decisión.",
            },
          ],
          style: "bodyNoBold9",
        },
      ],
      styles: {
        bodyContent: {
          fontSize: 11,
          alignment: "justify",
        },
      },
    };
  }

  function firmaHuellaPaci(huella_paci, cant_firmas) {
    let tamano_firma = 0;

    if (cant_firmas == 2) {
      tamano_firma = 105;
    } else {
      tamano_firma = 130;
    }
    const conHuella = {
      marginLeft: 3,
      columns: [
        {
          marginTop: 9,
          alignment: "center",
          image: "firma_paci",
          width: tamano_firma,
          height: 70,
        },
        {
          marginTop: 9,
          marginLeft: 5,
          image: "huella_paci",
          width: 55,
          height: 70,
        },
      ],
    };

    const sinHuella = {
      marginLeft: 3,
      marginTop: 9,
      alignment: "center",
      image: "firma_paci",
      width: tamano_firma,
      height: 70,
    };

    if (huella_paci) return conHuella;
    else return sinHuella;
  }

  function firmaPaciente(huella_paci, cant_firmas) {
    return {
      stack: [
        {
          text: "PACIENTE (FIRMA / HUELLA)",
          bold: true,
          alignment: "center",
          style: "tableNoBold",
        },
        firmaHuellaPaci(huella_paci, cant_firmas),
        {
          marginTop: 10,
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "NOMBRE: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.paciente.descrip}`,
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "DOCUMENTO: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.paciente.cod}`,
            },
          ],
        },
      ],
    };
  }

  function firmaAcompanante() {
    return {
      stack: [
        {
          text: "TUTOR O ACOMPAÑANTE (FIRMA / HUELLA)",

          alignment: "center",
          style: "tableNoBold",
          bold: true,
        },
        {
          text: "(EN CASO DE NO FIRMAR)",
          alignment: "center",
          style: "tableNoBold",
          fontSize: 6,
        },
        {
          marginTop: 2,
          alignment: "center",
          image: "firma_acomp",
          width: 130,
          height: 70,
        },
        {
          marginTop: 10,
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "NOMBRE: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.acomp.descrip}`,
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "DOCUMENTO: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.acomp.cod}`,
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "PARENTESCO: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${evaluarParentesco(datos.paren_acomp)}`,
            },
          ],
        },
      ],
    };
  }

  function firmaProfesional() {
    return {
      stack: [
        {
          text: "FIRMA PROFESIONAL",

          alignment: "center",
          style: "tableNoBold",
          bold: true,
        },
        {
          marginTop: 8,
          alignment: "center",
          image: "firma_profesional",
          width: 130,
          height: 70,
        },
        {
          marginTop: 8,
          text: [
            {
              text: "NOMBRE: ",
              style: "tableNoBold",
              bold: true,
            },
            {
              text: `${datos.prof.descrip}`,
              style: "tableNoBold",
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "PROFESIONAL AREA DE:",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.prof.descrip_atiende}`,
            },
          ],
        },
        {
          columns: [
            {
              width: "auto",
              style: "tableNoBold",
              text: "DOCUMENTO: ",
              bold: true,
            },
            {
              marginLeft: 5,
              style: "tableNoBold",
              text: `${datos.prof.cod}`,
            },
          ],
        },
      ],
    };
  }

  function firmas() {
    let firmasArray = [];
    let anchos = ["40%"];
    let tamanoFirmasArray = 0;

    if (datos.firmas.firma_acomp) {
      firmasArray.push(firmaAcompanante());
    }

    if (datos.firmas.firma_prof) {
      firmasArray.push(firmaProfesional());
    }

    tamanoFirmasArray = firmasArray.length;

    if (datos.firmas.firma_paci) {
      firmasArray.unshift(firmaPaciente(datos.firmas.huella_paci, tamanoFirmasArray));
    }

    if (firmasArray.length == 2) {
      firmasArray.unshift({ border: [false, false, false, false], text: "" });
      anchos = ["10%", "40%", "40%"];
    } else if (firmasArray.length == 3) anchos = ["33%", "34%", "33%"];
    return {
      marginTop: 30,
      table: {
        widths: anchos,
        body: [[...firmasArray]],
      },
    };
  }

  return dd;
};
