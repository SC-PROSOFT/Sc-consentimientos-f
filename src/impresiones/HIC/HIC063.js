import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getEmpresa } = useModuleFormatos();

export const impresionHIC063 = ({ datos }) => {
  console.log("datos ", datos);
  var dd = {
    stack: [contenidoHIC063(), firmas()],
  };
  function contenidoHIC063() {
    return {
      stack: [
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["100%"],
            body: [
              [{ text: [{ bold: true, text: "Nombres y apellidos: " }, { text: datos.paciente.descrip }] }],
              [
                {
                  text: [
                    {
                      bold: true,
                      text: "Tipo documento de identidad: ",
                    },
                    { text: datos.paciente.tipo_id },
                    {
                      bold: true,
                      text: " Número documento de identidad: ",
                    },
                    { text: datos.paciente.cod },
                    { bold: true, text: " De: " },
                    { text: datos.paciente.descrip_ciudad },
                  ],
                },
              ],
              [
                {
                  text: [
                    { bold: true, text: "Edad: " },
                    {
                      text: calcularEdad(datos.paciente.nacim),
                    },
                    { bold: true, text: " Teléfono: " },
                    {
                      text: datos.paciente.telefono,
                    },
                  ],
                },
              ],
              [
                {
                  text: [{ bold: true, text: "Procedimiento: " }, { text: "Asesoría en Interrupción Voluntaria del Embarazo." }],
                },
              ],
              [
                {
                  text: [
                    { bold: true, text: "Metodología: " },
                    { text: "Asesoría Individual: " },
                    {
                      bold: true,
                      decoration: "underline",
                      text: datos.asesoria_indiv == "S" ? " X " : "    ",
                    },
                    {
                      text: " Asesoría Grupal: ",
                    },
                    {
                      bold: true,
                      decoration: "underline",
                      text: datos.asesoria_grupal == "S" ? " X " : "    ",
                    },
                  ],
                },
              ],
              [
                {
                  text: [{ bold: true, text: "Lugar: " }, { text: getEmpresa.nomusu }, { bold: true, text: " Fecha: " }, { text: datos.fecha }],
                },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          alignment: "justify",
          text: [
            { text: "Se realiza a usuaria consejería sobre la interrupción voluntaria del embarazo (IVE) a la que tiene derecho según la " },
            { bold: true, text: "resolución 051 de 2023 " },
            {
              text: "que adopta la regulación única para la atención integral en salud frente a la Interrupción Voluntaria del Embarazo (IVE), en las condiciones previstas por la Corte Constitucional en las Sentencias C-355 de 2006, SU-096 de 2018 y C-055 de 2022 y modificar el numeral 4.2 del Lineamiento Técnico y Operativo de la Ruta Integral de Atención en Salud Materno Perinatal. \n ",
            },
            {
              text: "Esta resolución establece el derecho de las mujeres y personas gestantes a decidir de manera libre y autónoma sobre la interrupción del embarazo. En consonancia con la decisión de la Corte Constitucional, contenida en la ",
            },
            { bold: true, text: "Sentencia C055 de 2022, " },
            {
              text: "la atención en salud de la IVE no debe estar condicionada al cumplimiento de causales o requisitos y procede por la sola decisión de la mujer o persona gestante. Solo cuando se trate de embarazos después de la vigésimo cuarta (24) semana, la IVE procede ante la identificación de alguna de las tres causales ya definidas por la misma Corte Constitucional en ",
            },
            { bold: true, text: " Sentencia C - 355 de 2006, " },
            {
              text: '"esto es: "I) Cuando la continuación de/embarazo constituya peligro para la vida o la salud de la mujer, certificada por un médico; (II Cuando exista grave malformación del feto que haga inviable su vida, certificada por un médico; y, III) Cuando el embarazo sea el resultado de una conducta, debidamente denunciada, constitutiva de acceso carnal o acto sexual sin consentimiento, abusivo o de inseminación artificial o transferencia de óvulo fecundado no consentidas, o de incesto."',
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          text: "Se explican claramente sus opciones para interrupción de la gestación: farmacológica con misoprostol ambulatorio (para gestaciones menores de 12 semanas) y métodos no farmacológicos, a realizarse de manera intrahospitalaria.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          text: "Se explica claramente:",
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          marginTop: 10,
          style: "bodyNoBold9",
          ul: [
            {
              marginTop: 4,
              text: "Se debe administrar las tabletas de misoprostol de 200 mcg: 4 tabletas cada 3 horas vía sublingual o vaginal x 3 dosis o hasta expulsión de restos ovulares.",
            },

            {
              marginTop: 4,
              text: "Que el tratamiento es efectivo en un 85 % de los casos aproximadamente.",
            },
            {
              marginTop: 4,
              text: "Presentará sangrado vaginal en volumen similar a sangrado menstrual asociado a expulsión de restos ovulares, precedido de cólico.",
            },
            { marginTop: 4, text: "Puede presentar dolor pélvico/abdominal, náuseas, fiebre, escalofrío, diarrea, dolor de cabeza." },
            {
              marginTop: 4,
              text: "Signos de alarma para consultar por urgencias: sangrado vaginal abundante (mayor a dos toallas higiénicas empapadas por hora durante más de dos horas seguidas), no expulsión de fruto de la gestación, dolor intenso que no mejore tras analgesia, fiebre.",
            },
            {
              marginTop: 4,
              text: "Debe administrarse el método de anticoncepción de su elección lo más pronto posible (idealmente el mismo día de la IVE).",
            },
            {
              marginTop: 4,
              text: "Su periodo menstrual reaparecerá en características usuales a los 30-40 días después del procedimiento, con su respectivo retorno a la fertilidad y riesgo de nueva gestación en caso de no adoptar un método de planificación confiable.",
            },
          ],
        },
        {
          marginTop: 10,
          text: "Me ha quedado claro que de acuerdo a mi decisión tengo tres alternativas sobre mi embarazo actual:",
          style: "bodyNoBold9",
        },
        {
          style: "bodyNoBold9",
          ol: [
            {
              marginTop: 10,
              alignment: "justify",
              text: [
                {
                  text: "Quiero continuar mi embarazo e iniciar controles prenatales?",
                },
                {
                  text: " SI ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.ini_ctl_prenatal == "S" ? " X " : "    " },
                },
                {
                  text: " NO ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.ini_ctl_prenatal == "N" ? " X " : "    " },
                },
              ],
            },
            {
              marginTop: 4,
              alignment: "justify",
              text: [
                {
                  text: "Quiero continuar mi embarazo y darlo en adopción?",
                },
                {
                  text: " SI ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.dar_adopcion == "S" ? " X " : "    " },
                },
                {
                  text: " NO ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.dar_adopcion == "N" ? " X " : "    " },
                },
              ],
            },
            {
              marginTop: 4,
              alignment: "justify",
              text: [
                {
                  text: "Quiero la interrupción voluntaria de mi embarazo?",
                },
                {
                  text: " SI ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.inter_voluntaria == "S" ? " X " : "    " },
                },
                {
                  text: " NO ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.inter_voluntaria == "N" ? " X " : "    " },
                },
              ],
            },
          ],
        },
        {
          marginTop: 10,
          text: "Me ha quedado claro que de acuerdo a mi decisión tengo las siguientes alternativas para la interrupción voluntaria de mi gestación:",
          style: "bodyNoBold9",
        },

        {
          style: "bodyNoBold9",
          ol: [
            {
              marginTop: 10,
              alignment: "justify",
              text: [
                {
                  text: "Interrupción farmacológica ambulatoria (gestación < 12 semanas)?",
                },
                {
                  text: " SI ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.inter_farm_ambul == "S" ? " X " : "    " },
                },
                {
                  text: " NO ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.inter_farm_ambul == "N" ? " X " : "    " },
                },
              ],
            },
            {
              marginTop: 4,
              alignment: "justify",
              text: [
                {
                  text: "Interrupción farmacológica supervisada por medico de manera intrahospitalaria (gestación < 12 semanas)?",
                },
                {
                  text: " SI ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.inter_farm_super == "S" ? " X " : "    " },
                },
                {
                  text: " NO ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.inter_farm_super == "N" ? " X " : "    " },
                },
              ],
            },
            {
              marginTop: 4,
              alignment: "justify",
              text: [
                {
                  text: "Interrupción por métodos no farmacológicos supervisada por medico de manera intrahospitalaria (gestación > 12 semanas)? \n ",
                },
                {
                  text: " SI ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.inter_no_farmac == "S" ? " X " : "    " },
                },
                {
                  text: " NO ",
                },
                {
                  text: { bold: true, decoration: "underline", text: datos.inter_no_farmac == "N" ? " X " : "    " },
                },
              ],
            },
          ],
        },
        {
          pageBreak: "before",
          style: "bodyNoBold9",
          marginTop: 10,
          text: [
            {
              text: "Quien ha informado y asesorado a la paciente sobre la sentencia C-355/06 y su procedimiento. Nombres y apellidos del profesional: ",
            },
            { bold: true, text: datos.prof.descrip },
            {
              text: " Documento de identidad: ",
            },
            { bold: true, text: datos.prof.cod },
            {
              text: ".",
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
