import { useModuleFormatos, useApiContabilidad } from "@/store";
import { evaluarParentesco } from "@/formatos/utils";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC171 = ({ datos }) => {
  console.log("impresionHIC171 -> ", datos);

  var dd = {
    stack: [contenidoHIC171(), firmas()],
  };
  function contenidoHIC171() {
    return {
      stack: [
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "DATOS DE IDENTIFICACIÓN",
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Nombre del paciente: ",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: datos.paciente.descrip,
            },
          ],
        },
        {
          marginTop: 5,
          text: [
            {
              bold: true,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Historia Clínica No.",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: datos.llave,
            },
          ],
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "INFORMACION GENERAL",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Durante el curso de la hospitalización se hace necesaria la transfusión de glóbulos rojos y otros hemocomponentes, como plaquetas, plasma o crioprecipitados, bien porque se precise durante una intervención quirúrgica, o bien porque tenga una enfermedad en la que se necesiten transfusiones.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Cuando su médico ha decidido ponerle sangre u otro producto sanguíneo es porque ha sopesado el beneficio de hacerlo frente a los riesgos que conlleva la transfusión, considerando, en ese caso, que si no se administrara la sangre, los problemas que podrían sucederle son muy superiores a los riesgos que en teoría pueden aparecer con la transfusión. No obstante, usted como paciente, tiene derecho a conocer esos riesgos y a decidir por sí mismo si acepta la administración de sangre o no, o si hay alguna otra alternativa.",
        },
        {
          alignment: "justify",
          marginTop: 5,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "El Doctor ",
            },
            {
              bold: true,
              alignment: "justify",
              style: "bodyNoBold9",
              text: datos.med_orden,
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: " le ha ordenado un procedimiento de transfusión de ",
            },
            {
              bold: true,
              alignment: "justify",
              style: "bodyNoBold9",
              text: datos.transfusion,
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "La transfusión consiste en administrar sangre humana o algunos de sus componentes a través de una vena del paciente como si fuera suero.",
            },
          ],
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "RIESGOS DE LA TRANSFUSION SANGUINEA",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "A pesar de la adecuada elección del procedimiento y de su correcta realización, pueden presentarse efectos indeseables, tanto los comunes derivados del mismo y que pueden afectar a todos los órganos y sistemas como los debidos a la situación vital del paciente (diabetes, cardiopatía, hipertensión, edad avanzada, anemia, obesidad) y los específicos del procedimiento.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La sangre y sus derivados proceden de personas que gozan de buena salud. Son personas que, por donar no reciben compensación económica alguna. Todos los donantes son seleccionados con criterios médicos y la sangre se estudia cuidadosamente con los análisis que exigen las leyes (Decreto 1571 de 1993, Resolución 001738 de 1995, Resolución 901 de 1996, Resolución 437 de 2014. A todas las unidades de sangre o hemocomponentes que vaya usted a recibir se les habrá realizado previamente las pruebas de rastreo de anticuerpos irregulares, prueba para detección de SIDA (antígeno p-24 y anticuerpos anti HIV1-HIV-2), prueba para la detección de hepatitis (Antígeno de superficie para el virus de la Hepatitis B y Anticuerpos contra el antígeno core del virus de la hepatitis B y Anticuerpos contra el virus de la Hepatitis C), prueba para detección de la enfermedad de Chagas (Anticuerpos contra el tripanosoma cruzi), prueba para el paludismo (detección de los HEMOPARASITOS), para el HTLV I-II y para la SIFILIS (anticuerpos contra el treponema pallidum ) , todas con resultados no reactivos o negativos por lo cuál llevan adheridos nuestro sello de calidad. Pese a ello existe una posibilidad de que los donantes se encuentren en período de ventana inmunológica o sea que el contagio sea reciente y sea imperceptible para las pruebas diagnósticas, por tanto la probabilidad de contagio se estima es de 1 de cada 20.000 transfusiones para el SIDA, y de 1 de cada 80.000 para la HEPATITIS B, y 1 de cada 35.000 para la HEPATITIS C, éstas cifras indican que aún con la tecnología de hoy en día es posible contagiarse1.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Su sangre se ha analizado previamente para hemoclasificación y se le han hecho las pruebas de compatibilidad correspondientes a los glóbulos rojos con resultado COMPATIBLE, sin embargo debe saber que hay posibilidad de reacciones adversas las cuales se pueden manifestar por: fiebre, escalofrío, brote, prurito (picazón), enrojecimiento, cansancio, dolor torácico/espalda/lumbar, calor o dolor en el sitio de la infusión, sudoración, nauseas/vomito, mareo o tos, hipotensión, taquicardia, ansiedad, palpitaciones, cefalea (dolor de cabeza), disnea (respiración con dificultad), dolor lumbar, sangrado incontrolable. Por favor si siente alguna de las anteriores comuníqueselo a la enfermera o al médico responsables de la transfusión. Ningún procedimiento invasivo está absolutamente exento de riesgos importantes, incluyendo el de mortalidad, si bien esta posibilidad es bastante infrecuente. De cualquier forma, si ocurriera una complicación, debe saber que todos los medios técnicos y científicos del Hospital Departamental de Villavicencio están disponibles para intentar solucionarla.",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "QUE OTRAS ALTERNATIVAS HAY",
        },
        {
          alignment: "justify",
          marginTop: 5,
          text: [
            {
              bold: true,
              decoration: "underline",
              alignment: "justify",
              style: "bodyNoBold9",
              text: "LA AUTOTRANSFUSION: ",
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Si va a someterse a una cirugía programada en la que pueda necesitarse sangre, se encuentra bien de salud y lo hace con suficiente anticipación, es posible que pueda donar su propia sangre en un procedimiento que se denomina autotransfusión. Así dispondría de sus propias bolsas de sangre por si fueran necesarias durante la intervención. Actualmente, no existen otras alternativas a las transfusiones de sangre exceptuando el empleo de la eritropoyetina en los enfermos renales.",
            },
          ],
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Si después de leer detenidamente éste documento desea más información, por favor no dude en preguntarle al médico responsable, que le atenderá con mucho gusto.",
        },

        autorizaRevoca(),
        {
          marginTop: 5,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Villavicencio, " + datos.fecha + ".",
        },
      ],
    };
  }

  function autorizaRevoca() {
    if (datos.autorizo) {
      return {
        stack: [
          {
            marginTop: 10,
            pageBreak: "before",
            bold: true,
            decoration: "underline",
            alignment: "center",
            style: "bodyNoBold9",
            text: "Consentimiento",
          },
          {
            marginTop: 5,
            text: [
              {
                bold: true,
                style: "bodyNoBold9",
                text: "Fecha: ",
              },
              {
                alignment: "justify",
                style: "bodyNoBold9",
                text: datos.fecha,
              },
            ],
          },
          {
            bold: true,
            marginTop: 5,
            style: "bodyNoBold9",
            text: "1. Declaración del Paciente:",
          },
          {
            marginTop: 10,
            alignment: "justify",
            text: [
              { style: "bodyNoBold9", text: "Yo, " },
              { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip },
              { style: "bodyNoBold9", text: "doy mi consentimiento para que me sea realizada la " },
              { bold: true, style: "bodyNoBold9", text: "TRANSFUSIÓN DE COMPONENTES DE LA SANGRE " },
              {
                style: "bodyNoBold9",
                text: "y los procedimientos complementarios que sean necesarios o convenientes durante la realización de este a juicio de los profesionales que lo lleven a cabo.",
              },
              {
                style: "bodyNoBold9",
                text: "Me han explicado y he comprendido satisfactoriamente la naturaleza y propósito de este procedimiento, también me han aclarado todas las dudas y me han dicho los posibles riesgos y complicaciones, así como las otras alternativas de tratamiento. Soy consciente que no existen garantías absolutas del resultado del procedimiento.",
              },
            ],
          },
          {
            bold: true,
            marginTop: 10,
            style: "bodyNoBold9",
            text: "2. Declaraciones:",
          },
          {
            marginTop: 5,
            alignment: "justify",
            text: [
              { bold: true, style: "bodyNoBold9", text: "A. NOMBRE MEDICO(S) RESPONSABLE(S) " },
              { bold: true, style: "bodyNoBold9", text: datos.med_explica },
              {
                style: "bodyNoBold9",
                text: " He informado al paciente del propósito y naturaleza del procedimiento descrito arriba, de sus alternativas, posibles riesgos y de los resultados que se esperan. ",
              },
            ],
          },
          {
            marginTop: 10,
            alignment: "justify",
            text: [
              { bold: true, style: "bodyNoBold9", text: "B. TUTOR LEGAL O FAMILIAR. \n" },
              {
                style: "bodyNoBold9",
                text: "Sé que el paciente",
              },
              { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip },
              {
                style: "bodyNoBold9",
                text: "ha sido considerado por ahora incapaz de tomar por si mismo la decisión de aceptar o rechazar el procedimiento descrito arriba. El médico me ha explicado de forma satisfactoria que es, como se hace y para que sirve este procedimiento. También se me ha explicado sus riesgos y complicaciones. He comprendido todo lo anterior perfectamente y por ello yo, , con documento de identidad - , parentesco ",
              },
              { bold: true, style: "bodyNoBold9", text: evaluarParentesco(datos.paciente.paren_acomp) },
              {
                style: "bodyNoBold9",
                text: ", doy mi consentimiento para que el (los) doctor(a)(es):",
              },
              { bold: true, style: "bodyNoBold9", text: datos.med_procedim },
              {
                style: "bodyNoBold9",
                text: " y el personal auxiliar que el/ella(os) precise(n) le realicen este procedimiento. Puedo revocar este consentimiento cuando en bien del paciente se presuma oportuno.",
              },
            ],
          },
        ],
      };
    } else {
      return {
        stack: [
          {
            marginTop: 10,
            pageBreak: "before",
            bold: true,
            decoration: "underline",
            alignment: "center",
            style: "bodyNoBold9",
            text: "Denegación o Revocación",
          },
          {
            marginTop: 10,
            alignment: "justify",
            text: [
              { style: "bodyNoBold9", text: "Yo, " },
              { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip },
              {
                style: "bodyNoBold9",
                text: "después de ser informado/a de la naturaleza y riesgos del procedimiento propuesto, manifiesto de forma libre y consciente mi denegación / revocación (táchese lo que no proceda) para su realización, haciéndome responsable de las consecuencias que puedan derivarse de esta decisión.",
              },
            ],
          },
        ],
      };
    }
  }
  function revocaAcompPaci() {
    if (!datos.acomp.cod) {
      return {
        marginTop: 10,
        alignment: "justify",
        text: [
          { style: "bodyNoBold9", text: "Yo, " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip.trim() + "," },
        ],
      };
    } else {
      return {
        marginTop: 10,
        alignment: "justify",
        text: [
          { style: "bodyNoBold9", text: "Yo, " },
          { bold: true, style: "bodyNoBold9", text: datos.acomp.descrip.trim() + "," },
          { style: "bodyNoBold9", text: " identifcado(a) con " },
          { bold: true, style: "bodyNoBold9", text: datos.acomp.tipo_id.trim() },
          { style: "bodyNoBold9", text: " " },
          { bold: true, style: "bodyNoBold9", text: datos.acomp.cod.trim() + "," },
          { style: "bodyNoBold9", text: " en calidad de familiar y/o acompañante responsable del paciente" },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip.trim() + "," },
          { style: "bodyNoBold9", text: " identifcado(a) con " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.tipo_id.trim() },
          { style: "bodyNoBold9", text: " " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.cod.trim() + "," },
        ],
      };
    }
  }
  function autorizaAcompPaci() {
    if (!datos.acomp.cod) {
      return {
        marginTop: 10,
        alignment: "justify",
        text: [
          { style: "bodyNoBold9", text: "Yo, " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip.trim() + "," },
        ],
      };
    } else {
      return {
        marginTop: 10,
        alignment: "justify",
        text: [
          { style: "bodyNoBold9", text: "Yo, " },
          { bold: true, style: "bodyNoBold9", text: datos.acomp.descrip.trim() + "," },
          { style: "bodyNoBold9", text: " identifcado(a) con " },
          { bold: true, style: "bodyNoBold9", text: datos.acomp.tipo_id.trim() },
          { style: "bodyNoBold9", text: " " },
          { bold: true, style: "bodyNoBold9", text: datos.acomp.cod.trim() + "," },
          { style: "bodyNoBold9", text: " en calidad de familiar y/o acompañante responsable del paciente " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip.trim() + "," },
          { style: "bodyNoBold9", text: " identifcado(a) con " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.tipo_id.trim() },
          { style: "bodyNoBold9", text: " " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.cod.trim() + "," },
        ],
      };
    }
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
      image: "firma_acomp",
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
