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
                  stack: cuadro_canvas(datos.vih == "S" ? true : false ),
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
                  stack: cuadro_canvas(datos.relaciones == "S" ? true : false ),
                },
                {
                  width: "4%",
                  text: "NO",
                },
                {
                  width: "6%",
                  stack: cuadro_canvas(datos.relaciones == "N" ? true : false ),
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
                  stack: cuadro_canvas(datos.inyec_sust_psico == "S" ? true : false ),
                },
                {
                  width: "4%",
                  text: "NO",
                },
                {
                  width: "6%",
                  stack: cuadro_canvas(datos.inyec_sust_psico == "N" ? true : false ),
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
                  stack: cuadro_canvas(datos.proteccion_rel_sex == "S" ? true : false ),
                },
                {
                  width: "4%",
                  text: "NO",
                },
                {
                  width: "6%",
                  stack: cuadro_canvas(datos.proteccion_rel_sex == "N" ? true : false ),
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
                      stack: cuadro_canvas(datos.perdida_peso == "S" ? true : false ),
                    },
                    {
                      width: "4%",
                      text: "NO",
                    },
                    {
                      width: "6%",
                      stack: cuadro_canvas(datos.perdida_peso == "N" ? true : false ),
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
                      stack: cuadro_canvas(datos.fiebre_frec == "S" ? true : false ),
                    },
                    {
                      width: "4%",
                      text: "NO",
                    },
                    {
                      width: "6%",
                      stack: cuadro_canvas(datos.fiebre_frec == "N" ? true : false ),
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
                      stack: cuadro_canvas(datos.diarrea_perm == "S" ? true : false ),
                    },
                    {
                      width: "4%",
                      text: "NO",
                    },
                    {
                      width: "6%",
                      stack: cuadro_canvas(datos.diarrea_perm == "N" ? true : false ),
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
                      stack: cuadro_canvas(datos.infeccion_hon_her == "S" ? true : false ),
                    },
                    {
                      width: "4%",
                      text: "NO",
                    },
                    {
                      width: "6%",
                      stack: cuadro_canvas(datos.infeccion_hon_her == "N" ? true : false ),
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
              stack: cuadro_canvas(datos.tranfundido == "S" ? true : false ),
            },
            {
              width: "4%",
              text: "NO",
            },
            {
              width: "6%",
              stack: cuadro_canvas(datos.tranfundido == "N" ? true : false ),
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
              text: `${datos.observaciones}`,
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
          text: `Yo ${datos.paciente.descrip} identificado(a) con C.C. No. ${datos.paciente.cod} expedida en ${datos.paciente.descrip_ciudad}, Certifico que: He leído (o que se me ha leído) el documento sobre consentimiento informado que contiene información sobre el propósito y beneficio de la prueba, su interpretación, sus limitaciones, y su riesgo, y que entiendo su contenido, incluyendo las limitaciones, beneficios y riegos de la prueba.`,
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
                  text: " a mi asesor para la realización de la prueba, procesamiento y reporte de la misma.",
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

    tamanoFirmasArray = firmasArray.length

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
