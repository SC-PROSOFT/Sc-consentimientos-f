import { useModuleFormatos, useApiContabilidad } from "@/store";
import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC170 = ({ datos }) => {
  console.log("impresionHIC170 -> ", datos);

  var dd = {
    stack: [contenidoHIC170(), firmas()],
  };
  function contenidoHIC170() {
    return {
      stack: [
        {
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "IDENTIFICACIÓN Y DESCRIPCIÓN DEL PROCEDIMIENTO",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Llamamos sinequias nasales a las adherencias entre ambas paredes de la fosa nasal, la llamada pared lateral y la llamada medial o septal. Su origen puede ser muy diverso: infecciones sufridas con anterioridad, intervenciones quirúrgicas, taponamientos nasales, colocaciones de sondas de alimentación o aspiración, cauterizaciones nasales, etc., entre las más habituales. En muchos casos pasan desapercibidas pero, en otras ocasiones, pueden producir síntomas, como obstrucción nasal o la formación de costras.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "La intervención se puede realizar bajo anestesia local o bajo anestesia general, en función de la magnitud y localización de la lesión. En ocasiones, a criterio del cirujano, puede resultar necesaria la colocación de una o varias láminas de material sintético abrazando el tabique nasal, sujetas mediante una sutura, durante un tiempo variable.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Al finalizar la intervención, según el criterio del cirujano, la extensión y la zona específica tratada, se puede colocar un taponamiento nasal, que se mantendrá durante un tiempo variable. Este taponamiento ocasionará molestias, como dolor o pesadez de cabeza, sensación de taponamiento de oídos, molestias al masticar y sequedad de garganta, que se atenúan con tratamiento sintomático. Los taponamientos nasales se asocian con antibioticoterapia oral para evitar infecciones de la propia nariz o de los senos.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Durante las primeras horas tras la intervención, incluso a través del taponamiento, suele drenar a través de la nariz un líquido sanguinolento, que se considera normal. Incluso a través del propio taponamiento, puede aparecer una hemorragia nasal. Ello obliga a revisar ese taponamiento previamente colocado. A veces requiere sustituirlo por otro que garantice algo más de presión. Excepcionalmente, puede requerir la revisión de la zona quirúrgica bajo anestesia general. En raras ocasiones, el taponamiento se puede desplazar por la parte posterior de la fosa nasal, hacia la garganta, provocando una sensación de molestias y náuseas, que se solucionan retirándolo y colocando otro, si es preciso. El mencionado taponamiento justifica que respire a través de la boca, por lo que pueden aparecer diversas molestias en la garganta.",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "OBJETIVOS DEL PROCEDIMIENTO Y BENEFICIOS",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Mejoría en la permeabilidad nasal y desaparición de los síntomas producidos por la dificultad respiratoria nasal.",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "OTRAS ALTERNATIVAS",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "No se conocen otros métodos de eficacia contrastada para el tratamiento de la sinequia de las fosas nasales.",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "CONSECUENCIAS O POSIBLES RIESGOS",
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          ol: [
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Después de la intervención, suele existir dolor en la fosa nasal, pudiendo irradiarse a la cara y a la cabeza.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Vómitos sanguinolentos con coágulos que, durante las primeras horas, se consideran normales. Estos coágulos son la manifestación de la sangre deglutida y no precisan tratamiento. Deben desaparecer tras las primeras 24 horas de postoperatorio.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Retirado el taponamiento nasal, en el período postoperatorio es recomendable la realización de lavados de la fosa nasal mediante suero fisiológico o soluciones similares, para favorecer la eliminación de costras que pueden dificultar la respiración nasal.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Posibilidad de que persistan o se reproduzcan las sinequias: las sinequias que afectan el techo nasal o el suelo de la fosa nasal en su porción más anterior, obtienen siempre peor resultado quirúrgico y recidivan más frecuentemente.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Con frecuencia, durante el acto quirúrgico, el cirujano utiliza el llamado bisturí eléctrico. Con él realiza incisiones o cauteriza pequeños vasos que están sangrando. Si bien se tiene un esmerado cuidado con este tipo de instrumental, cabe la posibilidad de que se produzcan quemaduras, generalmente leves, en las proximidades de la zona a intervenir.",
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Es posible que, aun solucionada la sinequia, persista la insuficiencia respiratoria nasal o que pueda aparecer cierta sequedad nasal o sufrir la formación de costras, durante un periodo de tiempo relativamente largo e, incluso, con carácter permanente.",
            },
          ],
        },
        autorizaRevoca(),
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
            marginTop: 10,
            alignment: "justify",
            text: [
              { style: "bodyNoBold9", text: "Yo, " },
              { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip.trim() },
              { style: "bodyNoBold9", text: ", con " },
              { bold: true, style: "bodyNoBold9", text: datos.paciente.tipo_id },
              { style: "bodyNoBold9", text: " - " },
              { bold: true, style: "bodyNoBold9", text: datos.paciente.cod },
              { style: "bodyNoBold9", text: ", edad " },
              { bold: true, style: "bodyNoBold9", text: calcularEdad(datos.paciente.nacim) },
              { style: "bodyNoBold9", text: " doy mi consentimiento para que me sea realizada una " },
              { bold: true, style: "bodyNoBold9", text: "RESECCION DE SINEQUIA NASAL. \n\n" },
              {
                style: "bodyNoBold9",
                text: "Se me ha facilitado esto hoja informativa, habiendo comprendido el significado del procedimiento y los riesgos inherentes al mismo, y declaro estar debidamente informado/a, habiendo tenido oportunidad de aclarar mis dudas en entrevista personal con el Dr.: ",
              },
              { bold: true, style: "bodyNoBold9", text: datos.med_explica },
              {
                style: "bodyNoBold9",
                text: " Asimismo, he recibido respuesta o todas mis preguntas, habiendo tomado la decisión de manera libre y voluntaria.",
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
