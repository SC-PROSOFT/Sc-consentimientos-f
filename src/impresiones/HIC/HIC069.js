import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";
import dayjs from "dayjs";
const { getPaci } = useModuleFormatos();

export const impresionHIC069 = ({ datos }) => {
  console.log("datos ", datos);

  var dd = {
    stack: [contenidoHIC069(), firmas()],
  };

  function contenidoHIC069() {
    return {
      stack: [
        {
          marginTop: 8,
          table: {
            widths: ["auto", "*", "auto", "*", "auto", "*"],
            body: [
              [
                { text: "Fecha:", bold: true, style: "tableTitle" },
                { text: datos.fecha, style: "bodyNoBold9" },
                { text: "Hora:", bold: true, style: "tableTitle" },
                { text: datos.hora, style: "bodyNoBold9" },
                { text: "Nombres y apellidos del paciente:", bold: true, style: "tableTitle" },
                { text: datos.paciente.descrip, style: "bodyNoBold9" },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          table: {
            widths: ["auto", "*", "auto", "*", "auto", "*"],
            body: [
              [
                { text: "Edad:", bold: true, style: "tableTitle" },
                { text: calcularEdad(datos.paciente.nacim), style: "bodyNoBold9" },
                { text: "Sexo:", bold: true, style: "tableTitle" },
                { text: datos.hora, style: "bodyNoBold9" },
                { text: "Fecha nacimiento:", bold: true, style: "tableTitle" },
                { text: dayjs(datos.paciente.nacim).format("YYYY-MM-DD"), style: "bodyNoBold9" },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          table: {
            widths: ["auto", "*", "auto", "*", "auto", "*"],
            body: [
              [
                { text: "Dirección:", bold: true, style: "tableTitle" },
                { text: datos.paciente.direccion, style: "bodyNoBold9" },
                { text: "Teléfono:", bold: true, style: "tableTitle" },
                { text: datos.paciente.telefono, style: "bodyNoBold9" },
                { text: "EPS:", bold: true, style: "tableTitle" },
                { text: datos.paciente.descrip_eps, style: "bodyNoBold9" },
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
              text: "Yo, ",
            },
            {
              text: datos.paciente.descrip,
              bold: true,
            },
            {
              text: "identificado con C.C ",
            },
            {
              text: datos.paciente.cod,
              bold: true,
            },
            {
              text: " , mayor de edad, actuando en calidad de representante legal y/o tutor.",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          bold: true,
          decoration: "underline",
          alignment: "center",
          text: "DECLARO LIBRE Y VOLUNTARIAMENTE",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            {
              text: "En concordancia con el Artículo 1502 del Código Civil; que he comprendido satisfactoriamente la información que me han dado con respecto a mi estado de salud y la necesidad de atención domiciliaria, por lo tanto,  ",
            },
            {
              text: [
                { bold: true, text: "AUTORIZADO " },
                {
                  bold: true,
                  decoration: "underline",
                  text: datos.autorizo ? " X " : "    ",
                },
                { bold: true, text: " NO AUTORIZADO " },
                {
                  bold: true,
                  decoration: "underline",
                  text: !datos.autorizo ? " X " : "    ",
                },
              ],
            },
            {
              text: "al personal de la ",
            },
            { bold: true, text: "IPS ESE PRIMER NIVEL GRANADA SALUD, " },
            {
              text: "para que ingrese a mi domicilio, y, acepto que me realicen los procedimientos de enfermería y/o medicina general según se requieran, además de lo anterior me comprometo a: ",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          ul: [
            "Seguir las recomendaciones dadas por el personal de salud durante la visita domiciliaria.",
            "Tener un trato cordial y respetuoso con el personal de salud.",
            "Preguntar cuando no comprenda algo relacionado con mi salud.",
            "Acatar las indicaciones para la realización de los procedimientos de enfermería en casa.",
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: [
            { text: "AUTORIZO ", bold: true },
            {
              text: "al personal asistencial de la entidad, para que, en ejercicio legal de su profesión y de acuerdo con los procedimientos establecidos, se realice la atención domiciliaria.",
            },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "center",
          text: "Procedimientos",
          bold: true,
        },
        {
          marginTop: 8,
          columns: [
            {
              layout: "noBorders",
              table: {
                widths: ["2%", "98%"],
                body: [
                  [
                    {
                      stack: datos.curacion == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                    },
                    {
                      marginLeft: 10,
                      text: "Curación",
                      alignment: "justify",
                      style: "bodyNoBold9",
                    },
                  ],
                  [
                    {
                      stack: datos.cambio_sonda == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                    },
                    {
                      marginLeft: 10,
                      text: "Cambio de sonda",
                      alignment: "justify",
                      style: "bodyNoBold9",
                    },
                  ],
                ],
              },
            },
            // columna 2,
            {
              layout: "noBorders",
              table: {
                widths: ["2%", "98%"],
                body: [
                  [
                    {
                      stack: datos.glucometria == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                    },
                    {
                      marginLeft: 10,
                      text: "Glucometría",
                      alignment: "justify",
                      style: "bodyNoBold9",
                    },
                  ],
                  [
                    {
                      stack: datos.retiro_sutura == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                    },
                    {
                      marginLeft: 10,
                      text: "Retiro de sutura",
                      alignment: "justify",
                      style: "bodyNoBold9",
                    },
                  ],
                ],
              },
            },
            // columna 3,
            {
              layout: "noBorders",
              table: {
                widths: ["2%", "98%"],
                body: [
                  [
                    {
                      stack: datos.lavado_nasal == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                    },
                    {
                      marginLeft: 10,
                      text: "Lavado nasal",
                      alignment: "justify",
                      style: "bodyNoBold9",
                    },
                  ],
                  [
                    {
                      stack: datos.lavado_ocular == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                    },
                    {
                      marginLeft: 10,
                      text: "Lavado ocular",
                      alignment: "justify",
                      style: "bodyNoBold9",
                    },
                  ],
                ],
              },
            },
            // columna 4,
            {
              layout: "noBorders",
              table: {
                widths: ["2%", "98%"],
                body: [
                  [
                    {
                      stack: datos.lavado_oido == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                    },
                    {
                      marginLeft: 10,
                      text: "Lavado de oído",
                      alignment: "justify",
                      style: "bodyNoBold9",
                    },
                  ],
                ],
              },
            },
          ],
          columnGap: 1,
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "left",
          text: "Administración de medicamento:",
          bold: true,
        },
        {
          marginTop: 2,
          style: "bodyNoBold9",
          alignment: "justify",
          text: datos.admin_medicam,
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "left",
          text: "DESCRIPCIÓN DEL PROCEDIMIENTO (técnica-materiales utilizados- Observaciones):",
          bold: true,
        },
        {
          marginTop: 2,
          style: "bodyNoBold9",
          alignment: "justify",
          text: datos.descrip_procedim,
        },
      ],
    };
  }
  function cuadro_canvas_x(condicion) {
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
  function cuadro_canvas() {
    return [{ canvas: [{ type: "rect", x: 0, y: 0, h: 11, w: 12 }] }];
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
