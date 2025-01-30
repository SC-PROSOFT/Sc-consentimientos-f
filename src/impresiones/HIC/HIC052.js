import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionHIC052 = ({ datos }) => {
  console.log("impresionHIC052 ", datos);
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
    stack: [contenidoHIC052(), firmas()],
  };

  function contenidoHIC052() {
    return {
      stack: [
        {
          marginTop: 8,
          table: {
            widths: ["50%", "50%"],
            body: [
              [
                {
                  alignment: "left",
                  text: [
                    { bold: true, style: "tableTitle", text: "Nombre del paciente: " },
                    { style: "bodyNoBold9", text: datos.paciente.descrip },
                  ],
                },
                {
                  alignment: "right",
                  text: [
                    { bold: true, style: "tableTitle", text: "Edad: " },
                    { style: "bodyNoBold9", text: calcularEdad(getPaci.nacim) },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 8,
          table: {
            widths: ["40%", "40%", "20%"],
            body: [
              [
                {
                  alignment: "left",
                  text: [
                    { bold: true, style: "tableTitle", text: "Identificación: " },
                    { style: "bodyNoBold9", text: datos.paciente.cod },
                  ],
                },
                {
                  alignment: "right",
                  text: [
                    { bold: true, style: "tableTitle", text: "EPS: " },
                    { style: "bodyNoBold9", text: datos.paciente.descrip_eps },
                  ],
                },
                {
                  alignment: "right",
                  text: [
                    { bold: true, style: "tableTitle", text: "Fecha: " },
                    { style: "bodyNoBold9", text: datos.fecha },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            {
              text: "La edad y estado de conciencia del paciente permiten firmar este docuemento? ",
            },
            { text: " SI: ", bold: true },
            { style: "bodyNoBold9", bold: true, decoration: "underline", text: datos.permite_firmar == "S" ? " X " : "    " },
            { text: " NO: ", bold: true },
            { style: "bodyNoBold9", bold: true, decoration: "underline", text: datos.permite_firmar == "N" ? " X " : "    " },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            {
              text: "Diagnóstico principal: ",
            },
            {
              text: datos.diagn_princip,
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "Procedimiento propuesto y explicación del mismo: TRATAMIENTO INTRAHOSPITALARIO INTEGRAL: FARMACOLÓGICO / PSICOLOGIA, TERAPIA OCUPACIONAL, ENFERMERÍA, MEDICINA GENERAL, TRABAJO SOCIAL Y NUTRICIÓN. Y EN CASO DE REQUERIRSE SE ACEPTA LA CONTENCIÓN MECÁNICA A FIN DE GARANTIZAR EL BIENESTAR PROPIO Y DE LOS DEMÁS.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            { text: " Beneficios: " },
            {
              bold: true,
              text: "REDUCCION DE RIESGO DE AUTO Y HETERO AGRESION, ENTRE OTROS. ",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            { text: " Riesgos: " },
            {
              bold: true,
              text: "CAÍDAS, FUGAS, EFECTOS SECUNDARIOS MEDICAMENTOSOS, ENTRE OTROS. ",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            {
              text: "Alternativas de otros tratamientos: ",
            },
            {
              text: datos.alt_otr_tratamient,
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "Por medio del presente documento, acepto recibir servicios y apoyos en salud requeridos, reconozco que se me explico y comprendí en su totalidad el procedimiento que se propone, estoy enterado de los beneficios; me dieron a conocer y comprendo de los riesgos y las probables complicaciones que se pueden presentar y se me han explicado las alternativas existentes. Soy consciente que con el tratamiento que me brindan se busca un beneficio, doy mi consentimiento sin obligación y por decisión propia para que estos se efectúen, así mismo para realizar la atención de contingencias y urgencias derivadas del acto autorizado, con base en el principio de libertad prescriptiva. Así mismo acepto el criterio médico de los profesionales de la IPS SALUD MENTAL MONTE SINAÍ.",
          style: "bodyNoBold9",
        },

        {
          marginTop: 8,
          table: {
            widths: ["50%", "50%"],
            body: [
              [
                {
                  alignment: "left",
                  text: [
                    { style: "tableTitle", text: "Numero de celular de contacto: " },
                    { style: "bodyNoBold9", text: datos.telef_contact },
                  ],
                },
                {
                  alignment: "right",
                  text: [
                    { bold: true, style: "tableTitle", text: "Correo electrónico del contacto: " },
                    { style: "bodyNoBold9", text: datos.correo_elect_contact },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
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
