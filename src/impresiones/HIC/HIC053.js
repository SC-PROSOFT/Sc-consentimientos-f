import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionHIC053 = ({ datos }) => {
  console.log("impresionHIC053 ", datos);
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
    stack: [contenidoHIC053(), firmas()],
  };

  function contenidoHIC053() {
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
                    { bold: true, style: "tableTitle", text: "EPS: " },
                    { style: "bodyNoBold9", text: datos.paciente.descrip_eps },
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
            widths: ["50%", "50%"],
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
          text: `Yo ${datos.acomp.descrip} con cedula de ciudadanía N° ${datos.acomp.cod} de ${datos.acomp.descrip_ciudad} en calidad de familiar y/o acompañante responsable del paciente anteriormente mencionado, al firmar la presente acta reconozco que se me explico y entendí la siguiente información:`,
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          bold: true,
          alignment: "justify",
          text: 'No se recibe ropa de color negro, ni de "marca", debe ser ropa sencilla, cómoda y discreta para uso diario en actividades y descanso.',
          style: "bodyNoBold9",
          decoration: "underline",
        },

        {
          marginTop: 5,
          text: [
            {
              text: "La IPS de salud mental monte Sinaí S.A.S le ofrece el servicio de lavandería de las prendas de vestir para el paciente por un valor de ",
            },
            {
              text: "$ 2.500 (DOS MIL QUINIENTOS PESOS) ",
              bold: true,
            },
            {
              text: "DIARIOS. Acepta el servicio de manera voluntaria?",
            },
            { text: " SI: ", bold: true },
            { style: "bodyNoBold9", bold: true, decoration: "underline", text: datos.acept_serv_volunt == "S" ? " X " : "    " },
            { text: " NO: ", bold: true },
            { style: "bodyNoBold9", bold: true, decoration: "underline", text: datos.acept_serv_volunt == "N" ? " X " : "    " },
          ],
          style: "tableTitle",
          alignment: "justify",
        },
        {
          marginTop: 5,
          text: [
            {
              text: "En caso de no aceptar adquiero el compromiso de llevar la ropa sucia y traer la ropa limpia del paciente que constara de cinco (5) mudas cada semana? ",
            },
            { text: " SI: ", bold: true },
            { style: "bodyNoBold9", bold: true, decoration: "underline", text: datos.compr_ropa_sucia == "S" ? " X " : "    " },
            { text: " NO: ", bold: true },
            { style: "bodyNoBold9", bold: true, decoration: "underline", text: datos.compr_ropa_sucia == "N" ? " X " : "    " },
          ],
          style: "tableTitle",
          alignment: "justify",
        },
        {
          marginTop: 5,
          bold: true,
          alignment: "justify",
          text: `• LA ROPA que se sugiere para el paciente consta de: `,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `2 camisetas sencillas, manga corta.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `1 camiseta o camisa de manga larga.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `3 pantalonetas o pantalón largo tipo sudadera.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `3 Interiores.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `2 brasier (Mujeres).`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `1 pijama.`,
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: " Además de lo anterior el familiar o responsable del paciente se compromete a traer los útiles de aseo personal requeridos durante el tiempo de hospitalización del mismo.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 5,
          bold: true,
          alignment: "justify",
          text: ` • LOS ÚTILES DE ASEO PERSONAL SON "CONSUMIBLES" PARA 7 DIAS DE HOSPITALIZACIÓN, consta de: `,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `1 cepillo de dientes.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `1 crema dental mediana.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `1 barra de jabón de tocador.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `2 rollos de Papel higiénico.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `1 toalla de baño.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `2 sobres de Shampoo, empaque individual.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `1 paquete Toallas higiénicas (mujeres).`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `1 prestobarba.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `2 sobres de desodorante en crema, empaque individual.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `30 pañales desechables adulto (si el paciente lo requiere).`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `1 paquete de 100 pañitos húmedos (si el paciente requiere pañal).`,
          style: "bodyNoBold9",
        },
        {
          marginTop: 15,
          bold: true,
          alignment: "justify",
          text: "EN CASO DE NO TRAER LOS UTILES DE ASEO PARA EL PACIENTE ME COMPROMETO A CANCELAR LA SUMA DE $ 35.000 (Treinta y cinco mil pesos Mcte.), YA QUE LA IPS SE LOS SUMINISTRARÁ.",
          style: "bodyNoBold9",
        },
        textoDisentimiento(datos.disentimiento, datos.acompa_disenti),
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
  function textoDisentimiento(disentimiento, acompa_disenti) {
    const textAcompa = `Yo ${datos.acomp.descrip}, identificado(a) con el documento de identidad número ${datos.acomp.cod}, en calidad de acudiente de ${datos.paciente.descrip} , identificada (o) con el documento de identidad número ${datos.paciente.cod}, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;
    const textPacient = `Yo ${datos.paciente.descrip}, identificado(a) con el documento de identidad número ${datos.paciente.cod}, en calidad de paciente, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;

    const textoDisentimiento = {
      marginTop: 5,
      table: {
        widths: ["auto", 170],
        body: [
          [
            {
              colSpan: 2,
              text: "DISENTIMIENTO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {},
          ],
          [
            {
              marginLeft: 3,
              marginTop: 5,
              marginRight: 3,
              stack: [
                {
                  text: acompa_disenti == "S" ? textAcompa : textPacient,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {
                  marginTop: 5,
                  text: [
                    {
                      text: "Observaciones:",
                      bold: true,
                    },
                    {
                      text: `${datos.obser_disenti}`,
                    },
                  ],
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            },
            {
              stack: [
                {
                  text: "RESPONSABLE DISENTIMIENTO",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
                {
                  marginTop: 5,
                  alignment: "center",
                  image: "firma_disentimiento",
                  width: 140,
                  height: 70,
                },
                {
                  marginTop: 5,
                  columns: [
                    {
                      width: 48,
                      text: "NOMBRE:",
                      bold: true,
                    },
                    {
                      width: "*",
                      text: `${acompa_disenti == "S" ? datos.acomp.descrip : datos.paciente.descrip}`,
                    },
                  ],
                  style: "tableTitle",
                },
                {
                  text: [
                    {
                      text: "DOC. IDENT: ",
                      bold: true,
                    },
                    {
                      text: `${acompa_disenti == "S" ? datos.acomp.cod : datos.paciente.cod}`,
                    },
                  ],
                  style: "tableTitle",
                },
              ],
            },
          ],
        ],
      },
    };

    if (disentimiento == "S") return textoDisentimiento;
    else return null;
  }
  return dd;
};
