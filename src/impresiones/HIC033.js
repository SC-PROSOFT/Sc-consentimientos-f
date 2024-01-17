import { evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHC033 = ({ datos }) => {
  var dd = {
    stack: [contenidoPruebaVIH(), firmas()],
  };

  function contenidoPruebaVIH() {
    return {
      stack: [
        {
          marginLeft: 20,
          marginTop: 5,
          marginBottom: 3,
          style: "bodyNoBold",
          ol: [
            {
              columns: [
                {
                  width: "65%",
                  marginRight: 20,
                  text: "¿Sabe que es el VIH/SIDA?",
                },
                {
                  width: "4%",
                  text: "SI",
                },
                {
                  width: "6%",
                  stack: cuadro_canvas(datos.vih == "S" ? true : false),
                },
                {
                  width: "4%",
                  text: "NO",
                },
                {
                  width: "6%",
                  stack: cuadro_canvas(datos.vih == "N" ? true : false),
                },
              ],
            },
            {
              marginTop: 5,
              columns: [
                {
                  width: "65%",
                  marginRight: 20,
                  text: "¿Ha tenido relaciones con personas portadoras de VIH/SIDA?",
                },
                {
                  width: "4%",
                  text: "SI",
                },
                {
                  width: "6%",
                  stack: cuadro_canvas(datos.relaciones == "S" ? true : false),
                },
                {
                  width: "4%",
                  text: "NO",
                },
                {
                  width: "6%",
                  stack: cuadro_canvas(datos.relaciones == "N" ? true : false),
                },
              ],
            },
            {
              marginTop: 5,
              columns: [
                {
                  width: "65%",
                  marginRight: 20,
                  text: "¿Se inyecta sustancias psicoactivas?",
                },
                {
                  width: "4%",
                  text: "SI",
                },
                {
                  width: "6%",
                  stack: cuadro_canvas(datos.inyec_sust_psico == "S" ? true : false),
                },
                {
                  width: "4%",
                  text: "NO",
                },
                {
                  width: "6%",
                  stack: cuadro_canvas(datos.inyec_sust_psico == "N" ? true : false),
                },
              ],
            },
            {
              marginTop: 5,
              columns: [
                {
                  width: "65%",
                  marginRight: 20,
                  text: "¿Usa algún método de protección cuando tiene relaciones sexuales?",
                },
                {
                  width: "4%",
                  text: "SI",
                },
                {
                  width: "6%",
                  stack: cuadro_canvas(datos.proteccion_rel_sex == "S" ? true : false),
                },
                {
                  width: "4%",
                  text: "NO",
                },
                {
                  width: "6%",
                  stack: cuadro_canvas(datos.proteccion_rel_sex == "N" ? true : false),
                },
              ],
            },
            {
              marginTop: 5,
              text: "Ha tenido los siguientes síntomas:",
            },
            {
              marginLeft: 10,
              ul: [
                {
                  marginTop: 5,
                  columns: [
                    {
                      width: "35%",
                      marginRight: 20,
                      text: "Pérdida de peso",
                    },
                    {
                      width: "4%",
                      text: "SI",
                    },
                    {
                      width: "6%",
                      stack: cuadro_canvas(datos.perdida_peso == "S" ? true : false),
                    },
                    {
                      width: "4%",
                      text: "NO",
                    },
                    {
                      width: "6%",
                      stack: cuadro_canvas(datos.perdida_peso == "N" ? true : false),
                    },
                  ],
                },
                {
                  marginTop: 5,
                  columns: [
                    {
                      width: "35%",
                      marginRight: 20,
                      text: "Fiebre frecuente",
                    },
                    {
                      width: "4%",
                      text: "SI",
                    },
                    {
                      width: "6%",
                      stack: cuadro_canvas(datos.fiebre_frec == "S" ? true : false),
                    },
                    {
                      width: "4%",
                      text: "NO",
                    },
                    {
                      width: "6%",
                      stack: cuadro_canvas(datos.fiebre_frec == "N" ? true : false),
                    },
                  ],
                },
                {
                  marginTop: 5,
                  columns: [
                    {
                      width: "35%",
                      marginRight: 20,
                      text: "Diarrea permanente",
                    },
                    {
                      width: "4%",
                      text: "SI",
                    },
                    {
                      width: "6%",
                      stack: cuadro_canvas(datos.diarrea_perm == "S" ? true : false),
                    },
                    {
                      width: "4%",
                      text: "NO",
                    },
                    {
                      width: "6%",
                      stack: cuadro_canvas(datos.diarrea_perm == "N" ? true : false),
                    },
                  ],
                },
                {
                  marginTop: 5,
                  columns: [
                    {
                      width: "35%",
                      marginRight: 20,
                      text: "Infección por hongos y herpes",
                    },
                    {
                      width: "4%",
                      text: "SI",
                    },
                    {
                      width: "6%",
                      stack: cuadro_canvas(datos.infeccion_hon_her == "S" ? true : false),
                    },
                    {
                      width: "4%",
                      text: "NO",
                    },
                    {
                      width: "6%",
                      stack: cuadro_canvas(datos.infeccion_hon_her == "N" ? true : false),
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          marginTop: 5,
          marginLeft: 20,
          marginBottom: 5,
          style: "bodyNoBold",
          columns: [
            {
              width: "65%",
              marginRight: 20,
              text: "6. ¿Ha sido transfundido en los últimos años?",
            },
            {
              width: "4%",
              text: "SI",
            },
            {
              width: "6%",
              stack: cuadro_canvas(datos.tranfundido == "S" ? true : false),
            },
            {
              width: "4%",
              text: "NO",
            },
            {
              width: "6%",
              stack: cuadro_canvas(datos.tranfundido == "N" ? true : false),
            },
          ],
        },
        {
          marginTop: 7,
          style: "bodyNoBold",
          text: [
            {
              text: "OBSERVACIONES: ",
              bold: true,
            },
            {
              text: `${
                datos.observaciones || "_______________________________________________________________"
              }`,
            },
          ],
        },
        {
          marginTop: 14,
          style: "bodyNoBold",
          alignment: "center",
          text: "CONSENTIMIENTO INFORMADO PARA REALIZAR LA PRUEBA PRESUNTIVA O DIAGNOSTICA DE VIH (VIRUS DE INMUNODEFICIENCIA HUMANA)",
          bold: true,
        },
        textoDiligenciado(),
        textoAutoriza(datos.autorizo),
        {
          alignment: "justify",
          marginTop: 20,
          style: "bodyNoBold",
          columnGap: 40,
          columns: [
            {
              stack: [
                {
                  text: "CONSENTIMIENTO INFORMADO VIH",
                  bold: true,
                  alignment: "center",
                },
                {
                  text: "información para ser leída por el profesional de la salud al paciente antes de que su consentimiento informado para que se le realice las pruebas presuntivas y diagnosticas de la infección por VIH.",
                },
                {
                  text: "\nEL CONSENTIMIENTO INFORMADO es la manifestación libre y voluntaria que da por escrito, una persona, luego de la consejería pre prueba, autorizada que se le realice el examen diagnóstico de laboratorio para detectar la infección por VIH, cuyo resultado deberá consignarse en la historia clínica.",
                },
                {
                  text: "\nPROPÓSITO Y BENEFICIO DE LA PRUEBA",
                  bold: true,
                },
                {
                  text: "\nLa prueba que se le va a realizar, cuyo nombre es prueba de ELISA para VIH (Virus de la Inmunodeficiencia Humana) se utilizara para precisar si una persona está infectada o no con el VIH, mediante la determinación en sangre de anticuerpos contra este virus. Un anticuerpo es una proteína que los glóbulos blancos de la sangre fabrican en respuesta a cualquier tipo de infección que ataque al cuerpo.",
                },
                {
                  text: "\nEl propósito de realizarle esta prueba es ayudarle a usted a identificarsi está infectada con el virus, ya sea porque tiene un antecedente de riesgo (compartir agujas de jeringas, recibir transfusiones de sangre, haber recibido un trasplante o fluidos corporales como semen en su cuerpo, en relaciones sexuales penetrativas o haber estado en contacto directo – sin condón o barreras orales – con secreciones vaginal, o a través del embarazo y/o el nacimiento) o porque hay condiciones clínicas que lo ameritan y a los médicos que la atienden a tratar de manera más eficaz los síntomas que pueden ser causados por el VIH.",
                },
                {
                  text: "\nINTERPRETACIÓN DE LA PRUEBA",
                  bold: true,
                },
                {
                  text: "El primer paso se llevará a cabo es examinar su sangre utilizando una prueba presuntiva ELISA (Examen de laboratorio que indica posible infección por el VIH en una persona, y cuyo resultado en caso de ser reactivo, requiere confirmación por otro procedimiento de mayor especificidad). Si ésta resulta REACTIVA (positiva), se le repetirá el procedimiento de laboratorio antes de entregarle el diagnóstico y será necesario realizarle otra prueba llamada suplementaria o confirmatoria (Examen de laboratorio de alta especificidad aceptado por la autoridad competente, mediante el cual se confirma la infección por el VIH, utilizando el procedimiento de laboratorio llamado Western Blot o el denominado de inmunofluorescencia). Si el resultado de ésta prueba es también REACTIVO, significaría que usted está infectado por el VIH, y que lo puede transmitir a otras personas (si no toma las medidas de precaución adecuadas). Si el resultado es NO REACTIVO (negativo) significa que no hay evidencia de laboratorio, hasta el momento, de que usted esté infectada.",
                },
                {
                  text: "\nLIMITACIONES DE LA PRUEBA",
                  bold: true,
                },
                {
                  text: "Las pruebas de laboratorio son bastante confiables. Sin embargo, como en otras pruebas realizadas en sangre, algunos resultados podrían ser FALSOS POSITIVOS. Falso positivo significa que la prueba",
                },
              ],
            },
            {
              stack: [
                {
                  text: "presuntiva (ELISA) fue positivo pero que la prueba confirmatoria fue NEGATIVA. En este caso, la prueba presuntiva indicaba presencia de anticuerpos contra el VIH cuando en realidad no los había. También se obtienen resultados FALSOS NEGATIVOS, en los cuales no se detectan anticuerpos contra el VIH en la prueba presuntiva, aun cuando en realidad el virus está presente, esto sucede cuando la prueba se realiza durante el PERIODO DE VENTANA INMUNOLOGICA, es decir cuando se hace la prueba y aún no ha pasado suficiente tiempo después de la situación considerada infectante (antes de cumplir tres meses) y por tanto no existe considerado volumen necesario de anticuerpos que pueden ser detectados por una prueba ELISA.",
                },
                {
                  text: "\nEs posible que en las pruebas presuntivas y confirmatorias se presenten resultados INDETERMINADOS, ello significa que no hay seguridad de que la persona esta realmente infectada y se hace necesario repetir la prueba seis (6) meses después.",
                },
                {
                  text: "\nTenga en cuenta que la prueba no puede predecir si usted permanecerá saludable, presentara síntomas o desarrollara el SIDA, es decir, el conjunto de síntomas y signos generados por el compromiso del sistema inmunitario, de una persona como consecuencia de la infección por el VIH.",
                },
                {
                  text: "\nEn caso de que el diagnostico sea reactivo requerirá de evaluaciones medicas periódicas y de exámenes adicionales para ayudar a determinar el riesgo que usted tiene de presentar problemas de salud como resultado de la infección por el VIH.",
                },
                {
                  text: "\nRIESGO DE LA PRUEBA",
                  bold: true,
                },
                {
                  text: "A algunas personas cuando se le informa que tiene anticuerpos contra el VIH (resultado reactivo) puede llegar a presentar fuertes reacciones emocionales, incluyendo ansiedad y depresión. También puede ser objeto de discriminación o rechazo por otras personas e instituciones.",
                },
                {
                  text: "En caso de que usted viva con el virus del VIH se le recomienda que además de la consejería post – prueba busque apoyo y asesoría para manejar en forma adecuada todas las situaciones que el diagnostico pueda llegar a generar. Todo profesional miembro del equipo de salud está en la obligación de mantener la confidencialidad sobre su diagnóstico y su estado de salud en general (reserva que deben mantener todas y cada una de las personas del equipo de salud frente a la comunidad, respecto a la información del estado de salud y a la condiciones misma de una persona, con el fin de garantizarle su derecho fundamental a la intimidad)",
                },
              ],
            },
          ],
        },
      ],
    };
  }

  function textoDiligenciado() {
    const menorDoceAnios = {
      stack: [
        {
          marginTop: 16,
          style: "bodyNoBold",
          text: "Este espacio debe ser diligenciado para niños (as) menores de 12 años.",
          bold: true,
        },
        {
          marginTop: 7,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Yo ${datos.acomp.descrip} mayor de edad, identificado(a) con C.C. No. ${datos.acomp.cod} expedida en ${datos.acomp.descrip_ciudad} en condición de representante legal o acudiente del niño(a) ${datos.paciente.descrip} de ${datos.anios_paciente} años de edad`,
        },
      ],
    };

    const mayorDoceAnios = {
      stack: [
        {
          marginTop: 7,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Este espacio es diligenciado para mayores de 12 años.",
          bold: true,
        },
        {
          marginTop: 7,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Yo, ${datos.paciente.descrip} identificado(a) con C.C. No. ${datos.paciente.cod} expedida en ${datos.paciente.descrip_ciudad}, Certifico que: He leído (o que se me ha leído) el documento sobre consentimiento informado que contiene información sobre el propósito y beneficio de la prueba, su interpretación, sus limitaciones, y su riesgo, y que entiendo su contenido, incluyendo las limitaciones, beneficios y riegos de la prueba.`,
        },
        {
          marginTop: 7,
          style: "bodyNoBold",
          alignment: "justify",
          text: "He recibido consejería PRE-PRUEBA (actividad realizada por un profesional de la salud para prepararme y confrontarme en relación a mis conocimientos, prácticos, y conductas, antes de realizarme las pruebas diagnósticas).",
        },
        {
          marginTop: 7,
          style: "bodyNoBold",
          alignment: "justify",
          text: "También certifico que dicha persona me brindo la asesoría y que según su compromiso, de ella también recibiré una asesoría Post-prueba (procedimiento mediante el cual me entregaran mis resultados) y que estoy de acuerdo con el proceso.",
        },
        {
          marginTop: 7,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Entiendo que la toma de muestra es voluntaria y que no puedo retirar mi consentimiento en cualquier momento antes de que me sea tomada el examen.",
        },
        {
          marginTop: 7,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Fui informada de las medidas que se tomara para proteger la confidencialidad de mis resultados.",
        },
      ],
    };

    if (datos.anios_paciente <= 12) return menorDoceAnios;
    else return mayorDoceAnios;
  }

  function textoAutoriza(autorizo) {
    const textoAutorizo = {
      stack: [
        {
          marginTop: 7,
          style: "bodyNoBold",
          columns: [
            {
              width: "13%",
              text: "De lo anterior",
            },
            {
              width: "auto",
              stack: cuadro_canvas(true),
            },
            {
              marginLeft: 4,
              width: "84%",
              text: [
                {
                  text: "Autorizo",
                  bold: true,
                },
                {
                  text: "Autorizo ESE SALUD YOPAL, para que se me practique la Interrupción Voluntaria del Embarazo (IVE) con el método farmacológico que me ofrece la Institución.",
                },
                {
                  text: "EN CUALQUIER MOMENTO PREVIO AL INICIO DE LA INTERVENCIÓN Y SIN NECESIDAD DE DAR NINGUNA EXPLICACION, PUEDO REVOCAR EL CONSENTIMIENTO QUE AHORA PRESTO.",
                  marginTop: 10,
                  bold: true,
                },
              ],
            },
          ],
        },
      ],
    };

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
                  text: " el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento de toma de laboratorio VIH",
                },
                {
                  text: "(VIRUS DE INMUNODEFICIENCIA HUMANA),",
                  bold: true,
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

    if (autorizo) return textoAutorizo;
    else return textoRevoca;
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

  function firmas(condicion) {
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

  return dd;
};
