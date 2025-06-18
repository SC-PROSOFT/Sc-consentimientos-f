import { useModuleFormatos, useApiContabilidad } from "@/store";
import { evaluarParentesco } from "@/formatos/utils";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionLAB033 = ({ datos }) => {
  console.log("impresionLAB033 -> ", datos);

  var dd = {
    stack: [contenidoLAB033(), firmas()],
  };
  function contenidoLAB033() {
    return {
      stack: [
        {
          marginTop: 8,
          style: "bodyNoBold9",
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  bold: true,
                  alignment: "center",
                  text: "INTRODUCCIÓN",
                  fillColor: "#6ca4c4",
                  color: "white",
                },
              ],
              [
                {
                  text: [
                    {
                      bold: true,
                      text: "Apreciado Usuario: \n",
                    },
                    {
                      text: "\n",
                    },
                    {
                      alignment: "justify",
                      text: "Usted va a ser sometido a un procedimiento quirúrgico, invasivo no quirúrgico o terapéutico de la clínica Sanar. En este documento se explican con claridad, profundidad y en un lenguaje comprensible las más importantes características de la intervención sugerida, su indicación, beneficios y potenciales riesgos. Lo invitamos a leerlo con atención y a discutirlo con su médico tratante quien gustosamente responderá sus preguntas. \n",
                    },
                    {
                      text: "\n",
                    },
                    {
                      alignment: "justify",
                      text: "En señal de conformidad con la información recibida y con la realización de la intervención quirúrgica, deberá usted firmar el formato correspondiente. Solo con su autorización podremos programarlo y realizarle la intervención descrita. \n",
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
              [
                {
                  bold: true,
                  alignment: "center",
                  text: "INFORMACIÓN GENERAL",
                  fillColor: "#6ca4c4",
                  color: "white",
                },
              ],
              [
                {
                  alignment: "justify",
                  stack: [
                    {
                      text: [
                        {
                          bold: true,
                          text: "¿QUÉ ES EL PARTO VAGINAL? \n",
                        },
                        {
                          text: "\n",
                        },
                        {
                          alignment: "justify",
                          text: "El parto, es el momento de la culminación del embarazo. El trabajo de parto es un proceso natural, inevitable y fisiológico, que tiene como finalidad modificar el cuello del útero y permitir la expulsión del feto y la placenta por vía vaginal. \n",
                        },
                        {
                          alignment: "justify",
                          text: "Una mujer inicia el parto con la aparición de contracciones uterinas regulares que aumentan en intensidad y frecuencia acompañadas de cambios fisiológicos en el cuello uterino, consistentes en borramiento y dilatación. Simultáneamente, sucede el descenso y expulsión del feto seguido del alumbramiento de la placenta. \n",
                        },
                        {
                          alignment: "justify",
                          text: "Para facilitar este proceso, puede ser necesario usar anestesia peridural y medicamentos inductores de la contractilidad del útero de la índole de uterotónicos, oxitocina o prostaglandínicos, siempre bajo estricto control especializado. \n",
                        },
                        {
                          alignment: "justify",
                          text: "\n",
                        },
                        {
                          alignment: "justify",
                          text: "En el clinica San Ignacio como en la mayoría de los centros asistenciales el parto vaginal ocurre en una posición ginecológica, con la gestante acostada sobre su espalda y sus pies sostenidos a la altura de los glúteos. \n",
                        },
                        {
                          alignment: "justify",
                          text: "Cuando el bebe está en una estación adecuada, se procede a la episiotomia (incisión quirúrgica de la zona perineal) según criterio médico. \n",
                        },
                        {
                          alignment: "justify",
                          text: "En este momento el trabajo de parto se encuentra en el período expulsivo o período de pujar y culmina con la expulsión del feto. \n",
                        },
                        {
                          alignment: "justify",
                          text: "Posterior al nacimiento, es siguiente paso corresponde a la expulsión de la placenta y las membranas, esto lleva entre 5 y 30 minutos. En algunas pacientes de acuerdo con el criterio médico puede ser necesario revisar el útero mediante la introducción de la  mano del médico en la cavidad uterina para extraer restos placentarios o  membranas que hayan podido quedar retenidas. Finalmente se procede al cierre de la episiotomía mediante suturas quirúrgicas. \n",
                        },
                        {
                          text: "\n",
                        },
                        {
                          bold: true,
                          text: "BENEFICIOS \n",
                        },
                        {
                          text: "\n",
                        },
                        {
                          alignment: "justify",
                          text: "El mayor beneficio atribuible al parto vaginal es que evita una intervención quirúrgica (cesárea) y mejora el tiempo de recuperación. Con el nacimiento de un bebe sano este puede ser llevado inmediatamente a la habitación con la madre. \n",
                        },
                        {
                          text: "\n",
                        },
                        {
                          bold: true,
                          text: "POSIBLES RIESGOS \n",
                        },
                        {
                          text: "\n",
                        },
                        {
                          alignment: "justify",
                          text: "Durante el trabajo de parto se pueden presentar complicaciones maternas que pueden comprometer el estado de salud que imponen la necesidad de recurrir a la instrumentación del parto (uso de espátulas o fórceps) o eventualmente a cesárea. Las complicaciones pueden ocurrir durante cualquiera de los periodos del parto y requieren de una intervención rápida y eficaz para evitar daños en la madre y el feto. \n",
                        },
                        {
                          text: "\n",
                        },
                        {
                          alignment: "justify",
                          text: "La falta de progresión del parto puede obedecer a contracciones uterinas muy débiles o irregulares que no producen la dilatación cervical necesaria; también puede corresponder a una desproporción del tamaño fetal con respecto a la pelvis materna debido a macrosomia fetal o a estrechez del canal pélvico. \n",
                        },
                        {
                          text: "\n",
                        },
                        {
                          alignment: "justify",
                          text: "El sufrimiento fetal es la aparición de signos que indican deterioro biofísico del feto. Para ello se monitoriza a la madre con un tococardiograma fetal que establece cierta relación entre las variables frecuencia cardíaca fetal y frecuencia e intensidad de las contracciones uterinas. A su vez, otro signo que hace pensar en la pérdida de bienestar fetal, es la aparición de líquido amniótico de color verde o teñido de meconio (heces fetales), que indica que el feto circunstancialmente o de forma crónica no tiene el aporte de oxígeno ideal. En la actualidad no se dispone de métodos infalibles para detectar de manera precoz y confiable todas las situaciones de riesgo fetal. Solamente la vigilancia constante del trabajo de parto minimiza las situaciones de riesgo fetal y sus posibles secuelas. \n",
                        },
                        {
                          text: "\n",
                        },
                        {
                          alignment: "justify",
                          text: "Tanto la no progresión del parto como el sufrimiento fetal se tratan acortando el periodo de dilatación, ya sea mediante el uso de fórceps o espátulas, o practicando una cesárea de emergencia. \n",
                        },
                        {
                          text: "\n",
                        },
                        {
                          alignment: "justify",
                          text: "El embolismo de líquido amniótico es una rara complicación que presenta un alto índice de mortalidad. Para que se dé esta complicación deben romperse las membranas fetales y los vasos uterinos, lo que provoca que el líquido amniótico se introduzca en el sistema circulatorio y viaje hasta los pulmones de la madre causando un colapso pulmonar y como consecuencia de ello falla cardíaca. \n",
                        },
                        {
                          text: "\n",
                        },
                        {
                          alignment: "justify",
                          text: "Existen condiciones maternas que aumentan el riesgo obstétrico, en quienes es más frecuente la aparición de complicaciones no previsibles; sin que esto excluya del riesgo a las mujeres sanas sin riesgo obstétrico identificable. \n",
                        },
                        {
                          alignment: "justify",
                          text: "\n",
                        },
                        {
                          alignment: "justify",
                          text: "Son situaciones con alto riesgo obstétrico y perinatal: \n",
                        },
                      ],
                    },
                    {
                      marginTop: 10,
                      alignment: "justify",
                      ol: [
                        {
                          text: "Primíparas y grandes multíparas.",
                        },
                        {
                          text: "Obesidad y desnutrición.",
                        },
                        {
                          text: "Fumadoras y fármaco-dependientes.",
                        },
                        {
                          text: "Embarazos no deseados.",
                        },
                        {
                          text: "Embarazos pocos o ningún control prenatal.",
                        },
                        {
                          text: "Cesáreas anteriores u otra cirugía uterina anterior.",
                        },
                        {
                          text: "Embarazos múltiples.",
                        },
                        {
                          text: "Fetos macrosómicos (peso mayor de 4000 gr).",
                        },
                        {
                          text: "Fetos con bajo peso.",
                        },
                        {
                          text: "Fetos con malformaciones congénitas o hereditarias.",
                        },
                        {
                          text: "Presentaciones	o	situaciones	fetales	anormales-podálica,	cara,	frente, oblicua.",
                        },
                        {
                          text: "Hipertensión crónica, del embarazo o pre-eclampsia.",
                        },
                        {
                          text: "Diabetes antes o durante el embarazo.",
                        },
                        {
                          text: "Amenaza o trabajo de parto pre-término.",
                        },
                        {
                          text: "Oligohidramnios ( disminución del líquido amniótico).",
                        },
                        {
                          text: "Polihidramnios ( aumento del líquido amniótico).",
                        },
                        {
                          text: "Ruptura prematura de membranas.",
                        },
                        {
                          text: "Antecedente de abortos previos, esterilidad, anomalías congénitas de los genitales, miomas uterinos.",
                        },
                        {
                          text: "Enfermedades	generales.	Cardiopulmonares,	renales,	infecciosas, inmunológicas, mentales.",
                        },
                      ],
                    },
                    {
                      marginTop: 10,
                      text: "Ningún procedimiento está exento de riesgos importantes,	incluyendo la muerte, aunque esta posibilidad es infrecuente. \n",
                    },
                    {
                      text: "En caso de ocurrir alguna complicación, el clinica procederá con los medios y recursos necesarios para su control. \n",
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
              [
                {
                  bold: true,
                  alignment: "center",
                  text: "AUTORIZACIÓN",
                  fillColor: "#6ca4c4",
                  color: "white",
                },
              ],
              [
                {
                  text: [
                    {
                      style: "bodyNoBold9",
                      alignment: "justify",
                      text: "He comprendido las explicaciones que, en un lenguaje claro y sencillo, se me han brindado y el médico que me ha atendido me ha permitido expresar todas mis observaciones y me ha aclarado todas las dudas y preguntas que le he planteado respecto a los fines, alternativas, métodos, ventajas, inconvenientes y pronóstico de la intervención, así como de los riesgos y complicaciones que por mi situación actual pueden surgir, en especial las siguientes: \n",
                    },
                    {
                      text: "\n",
                    },
                    { bold: true, style: "bodyNoBold9", alignment: "justify", text: datos.riesgos_complicac + "\n" },
                    {
                      text: "\n",
                    },
                    {
                      style: "bodyNoBold9",
                      alignment: "justify",
                      text: "También he sido informado que durante el acto quirúrgico, procedimiento o tratamiento se pueden presentar imprevistos que hagan al equipo médico variar la técnica o plan de manejo programado. \n",
                    },
                    {
                      style: "bodyNoBold9",
                      alignment: "justify",
                      text: "Por ello, manifiesto que me considero satisfecho/a con la información recibida y que comprendo la indicación y los riesgos de este procedimiento/tratamiento. \n",
                    },
                    {
                      style: "bodyNoBold9",
                      alignment: "justify",
                      text: "Ningún procedimiento está exento de riesgos importantes, incluyendo la muerte, aunque esta posibilidad es infrecuente. \n",
                    },
                    {
                      text: "\n",
                    },
                    {
                      style: "bodyNoBold9",
                      alignment: "justify",
                      text: "En caso de ocurrir alguna complicación, la clinica procederá con los medios y recursos que se requieran para su control, intentando minimizar en lo posible sus consecuencias. \n",
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
              [
                {
                  alignment: "justify",
                  stack: [
                    {
                      text: [
                        {
                          text: "Yo ",
                        },
                        {
                          bold: true,
                          text: datos.paciente.descrip + "\n",
                        },
                        {
                          text: "Fecha ",
                        },
                        {
                          bold: true,
                          text: datos.fecha + "\n",
                        },
                      ],
                    },
                    {
                      marginTop: 3,
                      alignment: "justify",
                      ul: [
                        {
                          text: [
                            {
                              text: "He comprendido la naturaleza y propósitos de la intervención que me ha sido explicada	satisfactoriamente	por	el	médico: ",
                            },
                            { bold: true, text: datos.med_capacita },
                            {
                              text: "y he	podido formular todas las preguntas que he considerado oportunas.",
                            },
                          ],
                        },
                        {
                          text: [
                            {
                              text: "La cirugía descrita está aceptada por la especialidad ",
                            },
                            { bold: true, text: datos.espec_cirugia },
                            {
                              text: "como la mejor alternativa para solucionar mi problema y no existe una contraindicación especial para su realización.",
                            },
                          ],
                        },
                        {
                          text: "He sido informado de los métodos alternativos de tratamiento, en caso de que los hubiese, al igual que las ventajas y desventajas de cada uno de ellos.",
                        },
                        {
                          text: [
                            {
                              text: "He informado al médico ",
                            },
                            { bold: true, text: datos.med_valora },
                            {
                              text: " de mis enfermedades generales para la valoración de las posibles contraindicaciones.",
                            },
                          ],
                        },
                        {
                          text: "Puedo retirar la autorización para la cirugía si lo estimo oportuno, sin que ello repercuta en los restantes cuidados médicos.",
                        },
                        {
                          text: "Soy consciente de los riesgos propios del tratamiento indicado, así como los derivados de la anestesia que en mi caso se aplique.",
                        },
                        {
                          text: "Soy consciente que no existen garantías absolutas de obtener resultados satisfactorios.",
                        },
                      ],
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
              [
                {
                  alignment: "justify",
                  stack: [
                    {
                      text: [
                        {
                          text: "Información	complementaria	solicitada	y/o	circunstancia	especial: \n",
                        },
                        {
                          bold: true,
                          text: datos.info_complement + "\n",
                        },
                      ],
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
            widths: ["90%", "5%", "5%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  alignment: "center",
                  bold: true,
                  text: "Así pues, de forma voluntaria, doy mi consentimiento",
                },
                { fillColor: "#6ca4c4", color: "white", alignment: "center", bold: true, text: "SI" },
                { fillColor: "#6ca4c4", color: "white", alignment: "center", bold: true, text: "NO" },
              ],
              [
                {
                  text: "Para que se me realice dicho(s) procedimiento(s) quirúrgico(s), así como las maniobras u operaciones que sean necesarias durante la intervención y para que asista el personal autorizado.",
                },
                { alignment: "center", bold: true, text: datos.pre_1 == "S" ? " X " : "    " },
                { alignment: "center", bold: true, text: datos.pre_1 == "N" ? " X " : "    " },
              ],
              [
                {
                  text: "Para que se me administre la anestesia que se considere adecuada para la operación, así como las medidas complementarias oportunas.",
                },
                { alignment: "center", bold: true, text: datos.pre_2 == "S" ? " X " : "    " },
                { alignment: "center", bold: true, text: datos.pre_2 == "N" ? " X " : "    " },
              ],
              [
                {
                  text: "Para que se puedan realizar fotografías o/y grabar la intervención, así como su utilización con fines didácticos o científicos sin que se divulgue el nombre del paciente o sus familiares.",
                },
                { alignment: "center", bold: true, text: datos.pre_3 == "S" ? " X " : "    " },
                { alignment: "center", bold: true, text: datos.pre_3 == "N" ? " X " : "    " },
              ],
              [
                {
                  text: "Para que, en caso de necesidad se me hagan transfusiones de sangre y/o hemoderivados.",
                },
                { alignment: "center", bold: true, text: datos.pre_4 == "S" ? " X " : "    " },
                { alignment: "center", bold: true, text: datos.pre_4 == "N" ? " X " : "    " },
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
