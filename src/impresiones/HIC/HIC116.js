import { useModuleFormatos, useApiContabilidad } from "@/store";
import { evaluarParentesco } from "@/formatos/utils";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC116 = ({ datos }) => {
  console.log("impresionHIC116 -> ", datos);

  var dd = {
    stack: [contenidoHIC116(), firmas()],
  };
  function contenidoHIC116() {
    return {
      stack: [
        {
          marginTop: 8,
          style: "bodyNoBold9",
          table: {
            widths: ["100%"],
            body: [
              [{ fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", text: "INTRODUCCIÓN" }],
              [
                {
                  text: [
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Apreciado Usuario:  \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Usted va a ser sometido a un procedimiento quirúrgico, invasivo no quirúrgico o terapéutico por el grupo de especialistas de Clínica Sanar. En este documento se explican con claridad, profundidad y en un lenguaje comprensible las más importantes características de la intervención sugerida, su indicación, beneficios y potenciales riesgos. Lo invitamos a leerlo con atención y a discutirlo con su médico tratante quien gustosamente responderá sus preguntas.  \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "En señal de conformidad con la información recibida y con la realización de la intervención quirúrgica, deberá usted firmar el formato correspondiente. Solo con su autorización podremos programarlo y realizarle la intervención descrita. ",
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          table: {
            widths: ["100%"],
            body: [
              [{ fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", text: "INFORMACIÓN GENERAL" }],
              [
                {
                  text: [
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "¿QUÉ ES EL LEGRADO OBSTÉTRICO?  \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Es una intervención quirúrgica que consiste en la extracción por vía vaginal de los restos del embarazo. \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "El principal propósito del legrado es limpiar la cavidad endometrial (parte interna del útero) de restos ovulares y de coágulos sanguíneos.  \n\n",
                    },

                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "¿CUÁNDO SE HACE? \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "En abortos (es decir pérdida del embarazo) que ocurren de forma incompleta o se encuentran retenidos. También es necesario hacerlo cuando hay retención de restos ovulares después del parto o cesárea. \n\n",
                    },
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "¿CUÁLES ALTERNATIVAS DE TRATAMIENTO EXISTEN? \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "En algunos casos puede existir la alternativa de manejo farmacológico del aborto con medicamentos que facilitan la expulsión de los restos del embarazo como el misoprostol. Esta opción necesita seguimientos clínicos frecuentes puesto que puede ocurrir sangrado abundante y cuando falla se requiere de todas maneras un legrado obstétrico. \n\n",
                    },
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "¿CÓMO SE HACE? \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Bajo anestesia, por vía vaginal, previa asepsia y antisepsia, mediante la introducción de instrumentos quirúrgicos diseñados para limpiar la cavidad endometrial de los restos ovulares. \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "En algunos casos es necesario aplicar desde el día anterior medicaciones que ayuden en la maduración del cuello uterino, es decir que lo tornen más blando y lo dilaten para facilitar el procedimiento. De todas maneras, se necesita dilatar el cuello del útero dentro de la cirugía. Si la pérdida de la gestación ocurre en embarazos mayores a 10 semanas, se debe esperar la expulsión de parte de los restos, antes de recurrir al procedimiento, lo cual puede suceder en el término de horas o de días, en cuyo caso requiere sostener una vigilancia intrahospitalaria en sala de partos. \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Muy ocasionalmente puede ser necesario un segundo legrado para completar la evacuación, sobre todo en casos de: úteros grandes con pérdidas de embarazos mayores a las 10 semanas, sacos anembrionados, embriones o fetos muertos y retenidos, embarazos molares, obliteraciones importantes del orificio cervical interno del útero o en patologías uterinas específicas. \n\n",
                    },
                    {
                      bold: true,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "¿CUÁLES SON LAS POSIBLES COMPLICACIONES? \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Como en toda intervención médica existe riesgo de complicaciones que suceden durante o después de la operación, derivadas del acto quirúrgico o dependientes del compromiso del estado de salud particular de cada persona (hipertensión arterial, diabetes, asma, alergias, obesidad, malnutrición, anemia, enfermedades cardiacas, pulmonares, neurológicas, hematológicas o várices.) no todas previsibles ni prevenibles. \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Dentro de las complicaciones específicas que podrían suceder en este procedimiento se encuentran: \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Hemorragias intra o posoperatorias con la posible necesidad de transfusión o intervenciones quirúrgicas adicionales como laparotomía e histerectomía (extracción del útero). \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Perforación uterina con la posible necesidad de hospitalización para vigilancia clínica o intervenciones quirúrgicas adicionales como laparotomías e histerectomía (extracción del útero). \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Infecciones pélvicas o urinaria. A pesar de la asepsia y antisepsia estrictas previas a la cirugía, en muy raras ocasiones pueden derivarse infecciones mayores con compromiso del estado de salud, aunque con mínimo riesgo de mortalidad, que requieren tratamientos adicionales. \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Desgarros de cuello uterino. \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Formación poslegrado de sinequias (adherencias entre las paredes del útero). \n\n",
                    },
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Si en el momento del acto quirúrgico surgiera alguna complicación imprevista Clínica Sanar procederá con los medios y recursos necesarios para su control.",
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          table: {
            widths: ["100%"],
            body: [
              [{ fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", text: "AUTORIZACIÓN" }],

              [
                {
                  stack: [
                    {
                      text: [
                        {
                          alignment: "justify",
                          style: "bodyNoBold9",
                          text: "He comprendido las explicaciones que, en un lenguaje claro y sencillo, se me han brindado y el médico que me ha atendido me ha permitido expresar todas mis observaciones y me ha aclarado todas las dudas y preguntas que le he planteado respecto a los fines, alternativas, métodos, ventajas, inconvenientes y pronóstico de la intervención, así como de los riesgos y complicaciones que por mi situación actual pueden surgir, en especial las siguientes: \n\n",
                        },
                        { bold: true, alignment: "justify", style: "bodyNoBold9", text: datos.riesgo_compli + " \n\n" },
                        {
                          alignment: "justify",
                          style: "bodyNoBold9",
                          text: "También he sido informado que, durante el acto quirúrgico, procedimiento o tratamiento se pueden presentar imprevistos que hagan al equipo médico variar la técnica o plan de manejo programado. Asimismo, he entendido y acepto que durante el procedimiento/tratamiento se podrán realizar fotografías o grabar imágenes que luego se conservarán y se podrán transmitir con fines científicos y/o de docencia y utilizar en sesiones clínicas, juntas facultativas, conferencias, congresos, publicaciones médicas y actos científicos, sin que en las mismas figure mi identidad.  \n\n",
                        },
                        {
                          alignment: "justify",
                          style: "bodyNoBold9",
                          text: "Por ello, manifiesto que me considero satisfecho/a con la información recibida y que comprendo la indicación y los riesgos de este procedimiento/tratamiento.  \n\n",
                        },
                        {
                          alignment: "justify",
                          style: "bodyNoBold9",
                          text: "Ningún procedimiento está exento de riesgos importantes, incluyendo la muerte, aunque esta posibilidad es infrecuente. \n\n",
                        },
                        {
                          alignment: "justify",
                          style: "bodyNoBold9",
                          text: "En caso de ocurrir alguna complicación, Clínica Sanar procederá con los medios y recursos que se requieran para su control, intentando minimizar en lo posible sus consecuencias. \n\n",
                        },
                        {
                          alignment: "justify",
                          style: "bodyNoBold9",
                          text: "Yo ",
                        },
                        {
                          alignment: "justify",
                          style: "bodyNoBold9",
                          text: datos.paciente.descrip.trim(),
                          bold: true,
                        },
                        {
                          alignment: "justify",
                          style: "bodyNoBold9",
                          text: ", identificada con documento  ",
                        },
                        {
                          alignment: "justify",
                          style: "bodyNoBold9",
                          text: datos.paciente.cod,
                          bold: true,
                        },
                        {
                          alignment: "justify",
                          style: "bodyNoBold9",
                          text: " de ",
                        },
                        {
                          alignment: "justify",
                          style: "bodyNoBold9",
                          text: datos.paciente.descrip_ciudad,
                          bold: true,
                        },
                        {
                          alignment: "justify",
                          style: "bodyNoBold9",
                          text: " fecha ",
                        },
                        {
                          alignment: "justify",
                          style: "bodyNoBold9",
                          text: datos.fecha,
                          bold: true,
                        },
                      ],
                    },
                    {
                      marginTop: 8,
                      alignment: "justify",
                      ul: [
                        {
                          text: [
                            {
                              style: "bodyNoBold9",
                              text: " He comprendido la naturaleza y propósitos de la intervención que me ha sido explicada satisfactoriamente por el médico: ",
                            },
                            { bold: true, style: "bodyNoBold9", text: datos.med_explica },
                            { style: "bodyNoBold9", text: " y he podido formular todas las preguntas que he considerado oportunas." },
                          ],
                        },
                        {
                          marginTop: 3,
                          text: [
                            {
                              style: "bodyNoBold9",
                              text: "La cirugía descrita está aceptada por la especialidad: ",
                            },
                            { bold: true, style: "bodyNoBold9", text: datos.especiali },
                            {
                              style: "bodyNoBold9",
                              text: " como la mejor alternativa para solucionar mi problema y no existe una contraindicación especial para su realización.",
                            },
                          ],
                        },
                        {
                          marginTop: 3,
                          text: [
                            {
                              style: "bodyNoBold9",
                              text: "He sido informado de los métodos alternativos de tratamiento, en caso de que los hubiese, al igual que las ventajas y desventajas de cada uno de ellos.",
                            },
                          ],
                        },
                        {
                          marginTop: 3,
                          text: [
                            {
                              style: "bodyNoBold9",
                              text: "He informado al médico ",
                            },
                            { bold: true, style: "bodyNoBold9", text: datos.med_infor },
                            {
                              style: "bodyNoBold9",
                              text: " de mis enfermedades generales para la valoración de las posibles contraindicaciones. ",
                            },
                          ],
                        },
                        {
                          marginTop: 3,
                          text: [
                            {
                              style: "bodyNoBold9",
                              text: "Puedo retirar la autorización para la cirugía si lo estimo oportuno, sin que ello repercuta en los restantes cuidados médicos.",
                            },
                          ],
                        },
                        {
                          marginTop: 3,
                          text: [
                            {
                              style: "bodyNoBold9",
                              text: "Soy consciente de los riesgos propios del tratamiento indicado, así como los derivados de la anestesia que en mi caso se aplique. ",
                            },
                          ],
                        },
                        {
                          marginTop: 3,
                          text: [
                            {
                              style: "bodyNoBold9",
                              text: "Soy consciente que no existen garantías absolutas de obtener resultados satisfactorios. ",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      marginTop: 8,
                      text: [
                        { style: "tableTitle", text: "Información complementaria solicitada y/o circunstancia especial: \n" },
                        { bold: true, style: "tableTitle", text: datos.info_complement },
                      ],
                    },
                    {
                      pageBreak: "before",
                      marginTop: 8,
                      text: [{ style: "tableTitle", text: "Así pues, de forma voluntaria, doy mi consentimiento: \n" }],
                    },
                    {
                      marginTop: 5,
                      alignment: "justify",
                      ul: [
                        {
                          text: [
                            {
                              style: "bodyNoBold9",
                              text: "Para que se me realice dicho(s) procedimiento(s) quirúrgico(s), así como las maniobras u operaciones que sean necesarias durante la intervención y para que asista el personal autorizado. ",
                            },
                            { bold: true, alignment: "center", style: "bodyNoBold9", text: "SI " },
                            {
                              bold: true,
                              decoration: "underline",
                              alignment: "center",
                              style: "bodyNoBold9",
                              text: datos.preg_1 == "S" ? " X " : "   ",
                            },
                            { bold: true, alignment: "center", style: "bodyNoBold9", text: "   NO " },
                            {
                              bold: true,
                              decoration: "underline",
                              alignment: "center",
                              style: "bodyNoBold9",
                              text: datos.preg_1 == "N" ? " X " : "   ",
                            },
                          ],
                        },
                        {
                          text: [
                            {
                              style: "bodyNoBold9",
                              text: "Para que se me administre la anestesia que se considere adecuada para la operación, así como las medidas complementarias oportunas.",
                            },
                            { bold: true, alignment: "center", style: "bodyNoBold9", text: "SI " },
                            {
                              bold: true,
                              decoration: "underline",
                              alignment: "center",
                              style: "bodyNoBold9",
                              text: datos.preg_2 == "S" ? " X " : "   ",
                            },
                            { bold: true, alignment: "center", style: "bodyNoBold9", text: "   NO " },
                            {
                              bold: true,
                              decoration: "underline",
                              alignment: "center",
                              style: "bodyNoBold9",
                              text: datos.preg_2 == "N" ? " X " : "   ",
                            },
                          ],
                        },
                        {
                          text: [
                            {
                              style: "bodyNoBold9",
                              text: "Para que se puedan realizar fotografías o/y grabar la intervención, así como su utilización con fines didácticos o científicos sin que se divulgue el nombre del paciente o sus familiares.",
                            },
                            { bold: true, alignment: "center", style: "bodyNoBold9", text: "SI " },
                            {
                              bold: true,
                              decoration: "underline",
                              alignment: "center",
                              style: "bodyNoBold9",
                              text: datos.preg_3 == "S" ? " X " : "   ",
                            },
                            { bold: true, alignment: "center", style: "bodyNoBold9", text: "   NO " },
                            {
                              bold: true,
                              decoration: "underline",
                              alignment: "center",
                              style: "bodyNoBold9",
                              text: datos.preg_3 == "N" ? " X " : "   ",
                            },
                          ],
                        },
                        {
                          text: [
                            {
                              style: "bodyNoBold9",
                              text: "Para que, en caso de necesidad se me hagan transfusiones de sangre y/o hemoderivados.",
                            },
                            { bold: true, alignment: "center", style: "bodyNoBold9", text: "SI " },
                            {
                              bold: true,
                              decoration: "underline",
                              alignment: "center",
                              style: "bodyNoBold9",
                              text: datos.preg_4 == "S" ? " X " : "   ",
                            },
                            { bold: true, alignment: "center", style: "bodyNoBold9", text: "   NO " },
                            {
                              bold: true,
                              decoration: "underline",
                              alignment: "center",
                              style: "bodyNoBold9",
                              text: datos.preg_4 == "N" ? " X " : "   ",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            ],
          },
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
          image: getAcomp.cod ? getImgBs64 : "huella_paci",
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

  function firmaAcompanante(firma_acomp, cant_firmas) {
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
        firmaHuellaAcomp(firma_acomp, cant_firmas),
        // {
        //   marginTop: 8,
        //   alignment: "center",
        //   image: "firma_acomp",
        //   width: 125,
        //   height: 70,
        // },
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

  function firmaHuellaAcomp(huella_acomp, cant_firmas) {
    let tamano_firma = 0;

    if (cant_firmas == 2) {
      tamano_firma = 100;
    } else {
      tamano_firma = 125;
    }
    const conHuella = {
      marginLeft: 3,
      columns: [
        {
          marginTop: 8,
          alignment: "center",
          image: "firma_acomp",
          width: tamano_firma,
          height: 60,
        },
        // {
        //   marginTop: 9,
        //   marginLeft: 2,
        //   image: "huella_acomp",
        //   width: 50,
        //   height: 65,
        // },
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

    if (huella_acomp) return conHuella;
    else return sinHuella;
  }

  function firmaProfesional() {
    return {
      stack: [
        {
          text: "QUIEN BRINDA LA INFORMACIÓN",

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
  function firmaTestigo() {
    return {
      stack: [
        {
          text: "TESTIGO",

          alignment: "center",
          style: "tableNoBold",
          bold: true,
        },
        {
          marginTop: 8,
          alignment: "center",
          image: "firma_testigo",
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
              text: `${datos.testigo.descrip}`,
              style: "tableNoBold",
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
              text: `${datos.testigo.cod}`,
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
      firmasArray.push(firmaAcompanante(datos.firmas.huella_acomp, tamanoFirmasArray));
    }

    firmasArray.push(firmaTestigo());

    if (datos.firmas.firma_prof) {
      firmasArray.push(firmaProfesional());
    }

    tamanoFirmasArray = firmasArray.length;

    if (!datos.firmas.firma_acomp) {
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
