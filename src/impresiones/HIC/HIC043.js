import { calcEdad, evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHC043 = ({ datos }) => {
  const llenarDatos = {
    evaluarDosis: () => {
      const cant_dosis = {
        "1RA": "Primera dosis",
        "2DA": "Segunda dosis",
        "1RF": "Primer refuerzo",
        "2RF": "Segundo refuerzo",
        ADC: "Dosis adicional",
      };

      return cant_dosis[datos.cant_dosis] || "Sin definir dosis";
    },
  };
  var dd = {
    stack: [contenidoSARS(), firmas()],
  };

  function contenidoSARS() {
    return {
      stack: [
        {
          text: "DATOS DE IDENTIFICACIÓN DE LA PERSONA",
          alignment: "center",
          marginTop: 10,
          bold: true,
        },
        {
          marginTop: 5,
          text: [
            {
              text: `NOMBRE: `,
              bold: true,
            },
            {
              text: datos.paciente.descrip,
            },
            {
              text: `TIPO DE IDENTIFICACIÓN: `,
              bold: true,
            },
            {
              text: datos.paciente.tipo_id,
            },
            {
              text: ` NUMERO: `,
              bold: true,
            },
            {
              text: datos.paciente.cod,
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              text: `FECHA DE NACIMIENTO: `,
              bold: true,
            },
            {
              text: ` ${dayjs(datos.paciente.nacim).format("YYYY-MM-DD")}, ${calcEdad(
                datos.paciente.nacim
              )}  años`,
            },
            {
              text: ` NOMBRE DE LA EAPB RESPONSABLE: `,
              bold: true,
            },
            {
              text: datos.empresa.nomusu,
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              text: `MUJER EN ESTADO DE EMBARAZO: `,
              bold: true,
            },
            {
              text: datos.embarazada,
            },
          ],
        },
        {
          stack: [
            {
              text: "INFORMACIÓN PREVIA",
              alignment: "center",
              marginTop: 10,
              bold: true,
            },
            {
              text: "La vacunación es una forma segura y eficaz de prevenir enfermedades y salvar muchas vidas. En la actualidad el país dispone de vacunas para proteger contra al menos 26 enfermedades, entre ellas, la difteria, el tétanos, la tos ferina, la poliomielitis, la hepatitis, el cáncer de útero y el sarampión. En conjunto, estas vacunas salvan cada año millones de vidas en el mundo. Con la aplicación de las vacunas las personas se protegen a sí mismas y a quienes las rodean.",
              alignment: "justify",
              marginTop: 5,
            },
            {
              text: "La vacunación contra el SARS- CoV-2/COVID-19 reducirá la posibilidad de presentar la enfermedad. En esta etapa de la emergencia, en la cual se inicia la aplicación de esta vacuna, se han reconocido beneficios y riesgos, que es importante que usted conozca antes de dar el consentimiento para su aplicación.",
              alignment: "justify",
              marginTop: 5,
            },
            {
              text: "Esta vacuna tiene aprobación de uso de emergencia y surtió los pasos para la validación científica y sanitaria que permite su aplicación segura en humanos.",
              alignment: "justify",
              marginTop: 5,
            },
          ],
        },
        {
          stack: [
            {
              alignment: "center",
              marginTop: 15,
              text: [
                { text: "DATOS IMPORTANTES DE LA VACUNA", bold: true },
                { text: "(Por favor, leer con detenimiento. Puede formular preguntas)" },
              ],
            },
            {
              marginTop: 10,
              table: {
                body: [
                  [
                    {
                      text: "VACUNA Y DOSIS",
                      fillColor: "#B2CEEB",
                      bold: true,
                    },
                    {
                      text: `Nombre de la vacuna a aplicar: ${
                        datos.nom_vacuna
                      } , Dosis: ${llenarDatos.evaluarDosis()}`,
                    },
                  ],
                  [
                    {
                      text: "BENEFICIOS",
                      fillColor: "#B2CEEB",
                      bold: true,
                    },
                    {
                      text: "Prevención de la enfermedad COVID-19, causada por el virus SARS-CoV-2. Reducción de la severidad de la enfermedad en caso de presentarse. Potencial protección del entorno familiar y los allegados. RIESGOS Presentación de efectos adversos a corto y mediano plazo",
                    },
                  ],
                  [
                    {
                      text: "RIESGOS",
                      fillColor: "#B2CEEB",
                      bold: true,
                    },
                    {
                      text: "Presentación de efectos adversos a corto y mediano plazo posterior a su aplicación como: dolor en el sitio de inyección, dolor de cabeza (cefalea, articulaciones (artralgia), muscular (mialgia); fatiga (cansancio); resfriado; fiebre (pirexias); enrojecimiento e inflamación leve en el lugar de la inyección; inflamación de los ganglios (linfadenopatía); malestar general; sensación de adormecimiento en las extremidades, reacciones alérgicas leves, moderadas o severas. Estos no se presentan en todas las personas.",
                    },
                  ],
                  [
                    {
                      text: "ALTERNATIVAS",
                      fillColor: "#B2CEEB",
                      bold: true,
                    },
                    {
                      text: "A la fecha no se ha identificado otra medida farmacológica más eficaz que la vacunación para la prevención de la COVID-19.",
                    },
                  ],
                ],
              },
            },
            {
              text: "INFORMACION ESPECIFICA PARA GESTANTES",
              alignment: "center",
              marginTop: 15,
              bold: true,
            },
            {
              text: "La vacuna de Pfizer es la única que tiene aprobado el uso en mujeres gestantes desde la semana doce (12) y durante los 40 días postparto, siempre que los posibles beneficios superen los posibles riesgos con base en la evaluación clínica realizada en conjunto por el médico tratante y la gestante.",
              marginTop: 5,
              alignment: "justify",
            },
            {
              text: "La vacuna que se le esta administrando es eficaz para evitar complicaciones severas y muerte por SARS CoV-2 COVID-19 en la gestante, en el feto o neonato.",
              alignment: "justify",
              marginTop: 5,
            },
            {
              text: "A la fecha no hay pruebas que la vacuna cause efectos adversos diferentes a los observados en la población general importantes para la mujer embarazada, el feto o la placenta",
              alignment: "justify",
            },
            {
              marginTop: 5,
              text: "A nivel poblacional son muchos mayores los beneficios de administrar la vacuna, sobre los riesgos de llegar a padecer COVID-19 durante la gestación, por el impacto que sobre la salud materna y perinatal produce la infección por SARS-CoV- 2 y ante el alto riesgo de complicaciones severas, ingreso a UCI morbilidad y mortalidad materna y fetal asociada a esta enfermedad.",
              alignment: "justify",
            },
            {
              marginTop: 5,
              text: "Manifiesto que soy mujer con mas de 12 semanas de gestación o que me encuentro dentro de los 40 días postparto y realicé previamente la evaluación riesgo-beneficio junto con mi médico",
              alignment: "justify",
            },
            {
              text: "EXPRESIÓN DE LA VOLUNTAD",
              alignment: "center",
              marginTop: 15,
              bold: true,
            },
            {
              text: "De manera voluntaria, después de haber recibido información por el personal de salud, de manera clara, concreta, sencilla y en términos acordes con mi condición, así como las explicaciones adecuadas, informo que comprendo los beneficios, riesgos, alternativas e implicaciones de la aplicación de la vacuna que se me ofrece. De la misma manera, se me han indicado las recomendaciones que debo seguir, de acuerdo con la información entregada por el laboratorio productor de la vacuna.",
              marginTop: 5,
              alignment: "justify",
            },
            {
              text: "Entiendo que la suscripción de este documento constituye una expresión autónoma de mi voluntad, y que NO tiene por objeto eximir de responsabilidad a las autoridades sanitarias o gubernamentales ni a las entidades que participaron en la aplicación de la vacuna contra el SARS-CoV-2/COVID-19 de brindar la atención en salud que sea necesaria por la aparición de posibles reacciones adversas no reportadas.",
              alignment: "justify",
              marginTop: 5,
            },
            {
              marginTop: 5,
              text: `En consecuencia, decido AUTORIZAR con el procedimiento informado.`,
              alignment: "justify",
            },
            {
              alignment: "center",
              marginTop: 15,
              text: [
                { text: "Nota:", bold: true },
                {
                  text: "Cuanto se trate de menores de edad, deberá firmar el menor junto con representación legal.",
                },
              ],
            },
            {
              alignment: "center",
              text: [
                { text: "Tipos de documentos de identidad:", bold: true },
                {
                  text: " RC: Registro Civil, TI: Tarjeta de Identidad, CC: Cédula de ciudadanía, CE: Cédula de extranjería",
                },
              ],
            },
            textoAutoriza(datos.autorizo, datos.disentimiento),
          ],
        },
      ],
    };
  }

  function firmas() {
    let firmasArray = [];
    let anchos = [];
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
          marginTop: 8,
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

  function cuadro_canvas(condicion) {
    return [
      { canvas: [{ type: "rect", x: 0, y: 0, h: 11, w: 12 }] },
      {
        canvas: condicion
          ? [
              { type: "line", x1: 0, x2: 12, y1: -11, y2: 0 },
              { type: "line", x1: 12, x2: 0, y1: -11, y2: 0 },
            ]
          : [],
      },
    ];
  }

  function textoAutoriza(autorizo, disentir) {
    const textoRevoca = {
      stack: [
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          columns: [
            {
              width: "4%",
              stack: cuadro_canvas(true),
            },
            {
              marginLeft: 4,
              width: "96%",
              text: [
                {
                  text: "Expreso mi voluntad de ",
                },
                {
                  text: "revocar",
                  bold: true,
                },
                {
                  text: " el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento A APLICACION DE LA VACUNA CONTRA EL SARS-COV-2/COVID-19",
                },
                {
                  text: `por los siguientes motivos: ${datos.revocar_motivos}`,
                },
              ],
            },
          ],
        },
      ],
    };

    const textoDisiente = {
      stack: [
        {
          marginTop: 10,
          text: "DISENTIMIENTO",
          alignment: "center",
          style: "bodyNoBold",
          bold: true,
        },
        {
          marginTop: 5,
          text: [
            {
              text: `Yo, ${
                datos.acomp.cod.trim() ? datos.acomp.descrip : datos.paciente.descrip
              } identificado (a) con la CC No ${
                datos.acomp.cod.trim() ? datos.acomp.cod : datos.paciente.cod
              }, en calidad de paciente y/o acudiente, disiento este consentimiento que he prestado sobre la realización de la APLICACION DE LA VACUNA CONTRA EL SARS-COV-2/COVID-19. \n`,
            },
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 5,
          marginBottom: 10,
          text: [
            {
              text: "OBSERVACIONES:\n",
              marginTop: 15,
              bold: true,
            },
            {
              text: `${datos?.reg_coninf2?.obser_disenti}`,
            },
          ],

          alignment: "justify",
          style: "bodyNoBold",
        },
      ],
    };

    if (disentir == "S") return textoDisiente;
    else {
      if (autorizo) return { text: "" };
      else return textoRevoca;
    }
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
  return dd;
};
