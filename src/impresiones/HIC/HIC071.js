import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";
import dayjs from "dayjs";
const { getPaci, getEmpresa } = useModuleFormatos();

export const impresionHIC071 = ({ datos }) => {
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
    stack: [contenidoHIC071(), firmas()],
  };

  function contenidoHIC071() {
    return {
      stack: [
        {
          marginTop: 10,
          alignment: "justify",
          text: [
            {
              bold: true,
              text: "Ciudad: ",
            },
            {
              text: "Granada - Meta ",
            },
            { bold: true, text: "Fecha: " },
            {
              text: datos.fecha,
            },
            { bold: true, text: " Hora: " },
            {
              text: datos.hora,
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          table: {
            widths: ["100%"],
            body: [
              [{ alignment: "center", text: "DATOS DE IDENTIFICACIÓN DE LA PERSONA", bold: true }],
              [
                {
                  text: [
                    { text: "Nombres y apellidos: ", bold: true },
                    { text: datos.paciente.descrip },
                    { text: "Tipo de identificación: ", bold: true },
                    { text: datos.paciente.tipo_id },
                    { text: " Número: ", bold: true },
                    { text: datos.paciente.cod },
                    { text: " Fecha de nacimiento: ", bold: true },
                    { text: dayjs(datos.paciente.nacim).format("YYYY-MM-DD") },
                    { text: " Edad: ", bold: true },
                    { text: calcularEdad(datos.paciente.nacim) },
                    { text: " Nombre de la EAPB responsable: ", bold: true },
                    { text: getEmpresa.nomusu },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            widths: ["100%"],
            body: [
              [{ alignment: "center", text: "INFORMACIÓN PREVIA", bold: true }],
              [
                {
                  text: [
                    {
                      alignment: "justify",
                      text: "La vacunación es una forma segura y eficaz de prevenir enfermedades y salvar muchas vidas. En la actualidad el país dispone de vacunas para proteger contra al menos 26 enfermedades, entre ellas, la difteria, el tétanos, la tos ferina, la poliomielitis, la hepatitis, el cáncer de útero y el sarampión. En conjunto, estas vacunas salvan cada año millones de vidas en el mundo. Con la aplicación de las vacunas las personas se protegen a sí mismas y a quienes las rodean. \n ",
                    },
                    {
                      alignment: "justify",
                      text: "\n",
                    },
                    {
                      alignment: "justify",
                      text: "La vacunación contra el SARS- CoV-2/COVID-19 reducirá la posibilidad de presentar la enfermedad. En esta etapa de la emergencia, en la cual se inicia la aplicación de esta vacuna, se han reconocido beneficios y riesgos, que es importante que usted conozca antes de dar el consentimiento para su aplicación. \n",
                    },
                    {
                      alignment: "justify",
                      text: "\n",
                    },
                    {
                      alignment: "justify",
                      text: "Esta vacuna tiene aprobación de uso de emergencia y surtió los pasos para la validación científica y sanitaria que permite su aplicación segura en humanos.",
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            widths: ["20%", "80%"],
            body: [
              [
                {
                  alignment: "center",
                  text: [
                    { text: "DATOS IMPORTANTES DE LA VACUNA ", bold: true },
                    { text: datos.paciente.descrip },
                    { text: "(Por favor, leer con detenimiento. Puede formular preguntas) " },
                  ],
                  colSpan: 2,
                },
                {},
              ],
              [
                { alignment: "center", text: "VACUNA Y DOSIS", bold: true },
                {
                  text: [
                    { text: "Nombre de la vacuna a aplicar: " },
                    { text: datos.nomb_vacuna, bold: true },
                    {
                      text: "\n",
                    },
                    {
                      text: " Esquema que tiene esta vacuna: ",
                    },
                    {
                      text: "Dos Dosis ",
                    },
                    {
                      bold: true,
                      decoration: "underline",
                      text: datos.dos_dosis == "S" ? " X " : "    ",
                    },
                    {
                      text: "  o dosis única ",
                    },
                    {
                      bold: true,
                      decoration: "underline",
                      text: datos.dosis_unica == "S" ? " X " : "    ",
                    },
                  ],
                },
              ],
              [
                { alignment: "center", text: "CÓMO SE APLICA", bold: true },
                {
                  text: "Administración vía intramuscular en el brazo (tercio medio del músculo deltoides).",
                },
              ],
              [
                { alignment: "center", text: "BENEFICIOS", bold: true },
                {
                  ul: [
                    "Prevención de la enfermedad COVID-19, causada por el virus SARS-CoV-2. ",
                    "Reducción de la severidad de la enfermedad en caso de presentarse.",
                    "Potencial protección del entorno familiar y los allegados.",
                  ],
                },
              ],
              [
                { alignment: "center", text: "RIESGOS", bold: true },
                {
                  ul: [
                    {
                      alignment: "justify",
                      text: "Presentación de efectos adversos a corto y mediano plazo posterior a su aplicación como: dolor en el sitio de inyección, dolor de cabeza (cefalea, articulaciones (artralgia), muscular (mialgia); fatiga (cansancio); resfriado; fiebre (pirexias); enrojecimiento e inflamación leve en el lugar de la inyección; inflamación de los ganglios (linfadenopatía); malestar general; sensación de adormecimiento en las extremidades, reacciones alérgicas leves, moderadas o severas.",
                    },
                    { alignment: "justify", text: "Estos no se presentan en todas las personas." },
                  ],
                },
              ],
              [
                { alignment: "center", text: "ALTERNATIVAS", bold: true },
                {
                  alignment: "justify",
                  text: "A la fecha no se ha identificado otra medida farmacológica más eficaz que la vacunación para la prevención de la COVID-19.",
                },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            widths: ["100%"],
            body: [
              [{ alignment: "center", text: "EXPRESIÓN DE LA VOLUNTAD", bold: true }],
              [
                {
                  text: [
                    {
                      alignment: "justify",
                      text: "De manera voluntaria, después de haber recibido información por el personal de salud, de manera clara, concreta, sencilla y en términos acordes con mi condición, así como las explicaciones adecuadas, informo que comprendo los beneficios, riesgos, alternativas e implicaciones de la aplicación de la vacuna que se me ofrece. De la misma manera, se me han indicado las recomendaciones que debo seguir, de acuerdo con la información entregada por el laboratorio productor de la vacuna. \n ",
                    },
                    {
                      alignment: "justify",
                      text: "\n",
                    },
                    {
                      alignment: "justify",
                      text: "Entiendo que la suscripción de este documento constituye una expresión autónoma de mi voluntad, y que NO tiene por objeto eximir de responsabilidad a las autoridades sanitarias o gubernamentales ni a las entidades que participaron en la aplicación de la vacuna contra el SARS-CoV-2/COVID-19 de brindar la atención en salud que sea necesaria por la aparición de posibles reacciones adversas no reportadas. \n ",
                    },
                    {
                      text: [
                        { text: "En consecuencia, decido " },
                        { bold: true, text: "ACEPTAR: " },
                        {
                          bold: true,
                          decoration: "underline",
                          text: datos.autorizo ? " X " : "    ",
                        },
                        { text: " que se me aplique la vacuna. " },
                        { bold: true, text: "NO ACEPTAR: " },
                        {
                          bold: true,
                          decoration: "underline",
                          text: !datos.autorizo ? " X " : "    ",
                        },
                        { text: " que se me aplique la vacuna." },
                      ],
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          pageBreak: "before",
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            widths: ["100%"],
            body: [
              [{ alignment: "center", bold: true, text: "DATOS DE LA INSTITUCIÓN" }],
              [
                {
                  text: [
                    {
                      alignment: "justify",
                      bold: true,
                      text: "INSTITUCIÓN PRESTADORA DE SERVICIOS SALUD (IPS): ",
                    },
                    {
                      alignment: "justify",
                      bold: true,
                      decoration: "underline",
                      text: "ESE PRIMER NIVEL GRANADA SALUD ",
                    },
                    {
                      alignment: "justify",
                      bold: true,
                      text: "DEPARTAMENTO/DISTRITO: ",
                    },
                    {
                      alignment: "justify",
                      bold: true,
                      decoration: "underline",
                      text: "META ",
                    },
                    {
                      alignment: "justify",
                      bold: true,
                      text: " MUNICIPIO: ",
                    },
                    {
                      alignment: "justify",
                      bold: true,
                      decoration: "underline",
                      text: " GRANADA ",
                    },
                  ],
                },
              ],
            ],
          },
        },

        {
          marginTop: 10,
          style: "bodyNoBold9",
          alignment: "justify",
          text: [
            {
              bold: true,
              text: "Nota: ",
            },
            {
              text: "Cuanto se trate de menores de edad, deberá firmar el menor junto con la persona que tiene la patria potestad, la representación legal o la custodia. La persona que no pueda o no sepa firmar podrá acudir a la firma a ruego, en los términos de ley.",
            },
          ],
        },
      ],
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
