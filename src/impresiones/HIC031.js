import { evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHC031 = ({ datos }) => {
  var dd = {
    stack: [contenidoColposcopia(), firmas()],
  };

  function contenidoColposcopia() {
    return {
      stack: [
        {
          text: `Historia clínica número: ${datos.llave.slice(0, 2)}-${datos.llave.slice(2)}`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          columns: [
            {
              width: "auto",
              text: `Ciudad: ${datos.empresa.CIUDAD_USUAR}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
            {
              marginLeft: 50,
              width: "auto",
              text: `Fecha: ${dayjs(datos.empresa.FECHA_ACT).format("YYYY-MM-DD")}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
          ],
        },
        {
          marginTop: 8,
          text: "LA COLPOSCOPIA",
          alignment: "justify",
          style: "bodyNoBold",
          bold: true,
        },
        {
          marginTop: 8,
          text: "Es un examen sencillo del cuello, vagina y vulva, similar a la toma de citología cervicouterina, donde se realiza observación con un microscopio especial que permite visualizar los cambios ocurridos en el cuello del útero. Para ayudarnos durante este examen se utilizan sustancias que facilitan el reconocimiento de estas lesiones. Cuando el ginecólogo visualiza las lesiones sospechosas procede a tomar una muestra pequeña (biopsia) para posteriormente ser analizado por un patólogo. Normalmente puede presentar sangrado y dolor durante el procedimiento.",
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: "Riesgos de la Colposcopia:",
          alignment: "justify",
          style: "bodyNoBold",
          bold: true,
        },
        {
          ol: [
            "Molestias producidas por las soluciones aplicadas.",
            "Calambres, picadas o leve dolor.",
            "Sangrado mínimo durante varios días. Si es moderado se dejará una gasa para retirarla 6 horas después.",
            "Infección.",
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: "Si sospecha que está embarazada avisar al ginecólogo.",
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 8,
          text: `Yo, ${datos.paciente.descrip}, identificada con cédula de ciudadanía No. ${datos.paciente.cod} de ${datos.paciente.descrip_ciudad} en forma voluntaria y en pleno uso de mis facultades mentales y psíquicas sin presión o inducción alguna:`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        textoAutoriza(datos.autorizo),
      ],
    };
  }

  function textoAutoriza(autorizo) {
    const textoAutorizo = {
      marginTop: 8,
      stack: [
        {
          layout: "noBorders",
          table: {
            widths: ["2%", "98%"],
            body: [
              [
                {
                  stack: cuadro_canvas(true),
                },
                {
                  text: [
                    {
                      text: "Doy el consentimiento",
                      bold: true,
                      decoration: "underline",
                    },
                    {
                      text: " para que el ginecólogo de la E.S.E salud Yopal -Hospital local de Yopal, realice el procedimiento de colposcopia y biopsia. Acepto sus riesgos e imprevistos. Entiendo lo que he leído, se me ha explicado verbalmente y por escrito acerca del procedimiento, los cuidados que debo tener antes y después de la colposcopia, los riesgos justificados y previsibles. También se me ha dado la oportunidad de preguntar y resolver dudas. Entiendo que este procedimiento puede traer efectos adversos, como infección y sangrado, propias del procedimiento que aquí autorizo, los cuales asumo bajo mi responsabilidad.",
                    },
                  ],
                  alignment: "justify",
                  style: "bodyNoBold",
                },
              ],
            ],
          },
        },
      ],
    };

    const textoRevoca = {
      marginTop: 8,
      stack: [
        {
          layout: "noBorders",
          table: {
            widths: ["2%", "98%"],
            body: [
              [
                {
                  stack: cuadro_canvas(true),
                },
                {
                  text: [
                    {
                      text: "Expreso mi voluntad de ",
                    },
                    {
                      text: "revocar",
                      bold: true,
                      decoration: "underline",
                    },
                    {
                      text: ` revocar el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento de COLPOSCOPIA, por los siguientes motivos: ${datos.revocar_motivos}`,
                    },
                  ],
                  alignment: "justify",
                  style: "bodyNoBold",
                },
              ],
            ],
          },
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
          marginLeft: 3,
          columns: [
            {
              marginTop: 9,
              alignment: "center",
              image: "firma_acomp",
              width: 105,
              height: 70,
            },
            {
              marginTop: 9,
              marginLeft: 8,
              image: "firma_acomp",
              width: 55,
              height: 70,
            },
          ],
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
