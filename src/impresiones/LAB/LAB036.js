import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import dayjs from "dayjs";
export const impresionLAB036 = ({ datos }) => {
  console.log("impresionLAB036 -> ", datos);

  var dd = {
    stack: [contenidoLAB036(), firmas()],
  };

  function contenidoLAB036() {
    return {
      stack: [
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Fecha: ",
            },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.fecha },
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          ol: [
            "Identifique el tipo de muestra que se le va a tomar al paciente.",
            "Lea al paciente o familiar el procedimiento y los riesgos.",
            "Registre al paciente en el formato de socialización y entendimiento de consentimiento para la toma de muestras de laboratorio.",
            "Asegúrese que el paciente o familiar firme el formato de socialización.",
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["35%", "65%"],
            body: [
              [
                { bold: true, alignment: "center", text: "PROCEDIMIENTO" },
                { bold: true, alignment: "center", text: "RIESGO" },
              ],
              [
                { bold: true, alignment: "center", text: "TOMA DE MUESTRAS DE SANGRE" },
                {
                  stack: [
                    {
                      style: "bodyNoBold9",
                      text: "En la extracción de sangre puede presentarse: ",
                    },
                    {
                      marginTop: 3,
                      ul: [
                        "Sensación de dolor moderado.",
                        "Sensación pulsátil.",
                        "Se pueden formar hematomas.",
                        "Leve inflamación y/o sangrado temporal.",
                      ],
                    },
                    {
                      marginTop: 10,
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "A causa de la ansiedad puede sentir malestar o sensación de náuseas y mareo. INFORME DE INMEDIATO A QUIEN LE ESTÁ TOMANDO LA MUESTRA.",
                    },
                  ],
                },
              ],
              [
                {
                  marginTop: 5,
                  text: [
                    { bold: true, alignment: "justify", text: "TOMA DE MUESTRAS DE PIEL O MUCOSAS " },
                    { alignment: "justify", text: "KOH, Gram,  Leishmania" },
                  ],
                },
                { alignment: "justify", text: "Al realizar toma de la muestra o raspado de piel se puede presentar dolor y sangrado temporal." },
              ],
              [
                {
                  stack: [
                    {
                      bold: true,
                      style: "bodyNoBold9",
                      text: "TOMA DE MUESTRAS EN GENITALES O REGION PERIANAL",
                    },
                    {
                      marginTop: 3,
                      ul: [
                        "Frotis de Flujo vaginal.",
                        "Examen de secreción uretral.",
                        "Hisopado de tamizaje para control pre-natal.",
                        "Frotis rectal.",
                      ],
                    },
                  ],
                },
                {
                  stack: [
                    {
                      alignment: "justify",
                      style: "bodyNoBold9",
                      text: "Puede presentarse una ligera molestia y ligero sangrado durante la toma de la muestra de flujo vaginal o de secreción uretral si hay lesiones.",
                    },
                    {
                      alignment: "justify",
                      marginTop: 5,
                      style: "bodyNoBold9",
                      text: "En caso de piel intacta y sin lesiones, no hay riesgos al realizar la toma de las muestras.",
                    },
                  ],
                },
              ],
              [
                {
                  marginTop: 5,
                  bold: true,
                  alignment: "justify",
                  text: "SUMINISTRO DE CARGA DE GLUCOSA",
                },
                { alignment: "justify", text: "La ingestión de la carga de glucosa puede provocar: Náuseas, mareos, malestar general, vómito." },
              ],
              [
                {
                  marginTop: 5,
                  bold: true,
                  alignment: "justify",
                  text: "SOLICITUD DE DATOS CLINICOS",
                },
                {
                  alignment: "justify",
                  text: "El paciente podrá o no, informar sobre su estado de salud, las enfermedades preexistentes, o el motivo por el cual le ordenaron los exámenes.",
                },
              ],
              [
                {
                  marginTop: 5,
                  bold: true,
                  alignment: "justify",
                  text: "SOLICITUD DE CORREO ELECTRONICO O UN MEDIO DE COMUNICACIÓN PARA ENVIARLE LOS RESULTADOS",
                },
                {
                  alignment: "justify",
                  text: "El paciente podrá o no, informar su correo electrónico, o permitirá otro medio de comunicación para entregarle los resultados de laboratorio.",
                },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          decoration: "underline",
          alignment: "center",
          text: "DECLARO que entiendo la importancia de la toma de muestras y que me han informado los riesgos",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          decoration: "underline",
          alignment: "center",
          text: "DOY MI CONSENTIMIENTO Para la toma de la muestra y para la realización de las pruebas de laboratorio",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          columns: [
            { width: "50%", alignment: "left", text: [{ bold: true, text: "Correo: " }, { text: datos.paciente.email }] },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Nombre del paciente: " }, { text: datos.paciente.descrip }] },
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          columns: [
            {
              width: "70%",
              alignment: "left",
              text: [
                { bold: true, text: "Tipo y numero documento de identificación: " },
                { text: datos.paciente.tipo_id + " - " + datos.paciente.cod },
              ],
            },
            { width: "30%", alignment: "right", text: [{ bold: true, text: "Telefono: " }, { text: datos.paciente.telefono }] },
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
