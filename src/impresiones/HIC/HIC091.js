import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import dayjs from "dayjs";
export const impresionHIC091 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC091(), firmas()],
  };
  function contenidoHIC091() {
    return {
      stack: [
        {
          marginTop: 10,
          style: "bodyNoBold9",
          columns: [
            { width: "50%", alignment: "left", text: [{ bold: true, text: "Fecha solicitud prueba: " }, { text: datos.fecha_solic_prueb }] },
            { width: "50%", alignment: "center", text: [{ bold: true, text: "Nombre y apellido: " }, { text: datos.paciente.descrip }] },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            { width: "30%", alignment: "left", text: [{ bold: true, text: "Tipo de documento de identidad: " }, { text: datos.paciente.tipo_id }] },
            { width: "45%", alignment: "center", text: [{ bold: true, text: "Número de documento de identidad: " }, { text: datos.paciente.cod }] },
            { width: "15%", alignment: "center", text: [{ bold: true, text: "Edad: " }, { text: calcularEdad(datos.paciente.nacim) }] },
            { width: "10%", alignment: "right", text: [{ bold: true, text: "Sexo: " }, { text: datos.paciente.sexo }] },
          ],
        },

        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            {
              width: "40%",
              alignment: "left",
              text: [{ bold: true, text: "Fecha de nacimiento: " }, { text: dayjs(datos.paciente.nacim).format("YYYY-MM-DD") }],
            },
            { width: "60%", alignment: "right", text: [{ bold: true, text: "Direccion de residencia: " }, { text: datos.paciente.direccion }] },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            { width: "50%", alignment: "left", text: [{ bold: true, text: "Ocupación: " }, { text: datos.paciente.descrip_ocup }] },
            {
              width: "50%",
              alignment: "right",
              text: [{ bold: true, text: "Regimen: " }, { text: datos.paciente.descrip_tipo_afil }],
              text: [{ bold: true, text: "EPS: " }, { text: datos.paciente.descrip_eps }],
            },
          ],
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          table: {
            widths: ["20%", "30%", "25%", "25%"],
            body: [
              [{ border: [true, true, true, false], colSpan: 4, alignment: "center", bold: true, text: "MOTIVO DE LA PRUEBA" }, {}, {}, {}],
              [
                { border: [true, false, false, true], text: "SOSPECHA CLINICA" },
                {
                  border: [false, false, false, true],
                  alignment: "left",
                  stack: datos.sospecha_clinic == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                },
                { border: [false, false, false, true], text: "CONTACTO ESTRECHO" },
                {
                  border: [false, false, true, true],
                  alignment: "left",
                  stack: datos.contacto_estrecho == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                },
              ],
            ],
          },
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          table: {
            widths: ["20%", "30%", "25%", "25%"],
            body: [
              [{ border: [true, true, true, false], colSpan: 4, alignment: "center", bold: true, text: "DEMANDA INDUCIDA" }, {}, {}, {}],
              [
                {
                  border: [true, false, true, false],
                  colSpan: 4,
                  alignment: "justify",
                  text: "Programa promocion y mantenimiento de la salud: " + datos.progr_prom_mant,
                },
                {},
                {},
                {},
              ],
              [
                { border: [true, false, false, false], text: "CONSULTA EXTERNA" },
                {
                  border: [false, false, false, false],
                  alignment: "left",
                  stack: datos.consul_extern == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                },
                { border: [false, false, false, false], text: "CONSULTA ESPECIALIZADA" },
                {
                  border: [false, false, true, false],
                  alignment: "left",
                  stack: datos.contacto_estrecho == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                },
              ],
              [
                {
                  border: [true, false, true, false],
                  colSpan: 4,
                  alignment: "justify",
                  text: "Cual: " + datos.cual_consult,
                },
                {},
                {},
                {},
              ],
              [
                { border: [true, false, false, true], text: "MEDICO LEGAL" },
                {
                  border: [false, false, false, true],
                  alignment: "left",
                  stack: datos.medico_legal == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                },
                { border: [false, false, false, true], text: "CONSULTA URGENCIAS" },
                {
                  border: [false, false, true, true],
                  alignment: "left",
                  stack: datos.consul_urgencias == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                },
              ],
            ],
          },
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          table: {
            widths: ["20%", "30%", "25%", "25%"],
            body: [
              [
                {
                  border: [true, true, true, false],
                  colSpan: 4,
                  alignment: "center",
                  bold: true,
                  text: "CONSENTIMIENTO INFORMADO TOMA DE LA MUESTRA",
                },
                {},
                {},
                {},
              ],
              [
                {
                  border: [true, false, true, false],
                  colSpan: 4,
                  alignment: "justify",
                  text: "Certifico que me han dado información sobre los riesgos asociados al procedimiento, así: Ante la extracción de sangre puede presentarse los siguientes riesgos:",
                },
                {},
                {},
                {},
              ],
              [
                {
                  border: [true, false, true, false],
                  colSpan: 4,
                  alignment: "justify",
                  text: "1. Sensación de dolor moderado; Sensación pulsátil; Se pueden formar hematomas; Leve inflamación y/o sangrado temporal; A causa de la ansiedad que genera el pinchazo: Puede sentir malestar (náuseas, mareo). Entiendo la información y he dialogado con la persona que me brindo información (actividad realizada por un profesional de la salud para prepararme y confrontarme con relación a mis conocimientos, prácticas y conductas antes de realizarme las pruebas de diagnóstico en laboratorio),se me ha explicado el procedimiento mediante el cual recibire mis resultados y que estoy de acuerdo. Entiendo que la toma de muestra es voluntaria y que puedo retirar mi consentimiento en cualquier momento antes de que sea tomado el examen.",
                },
                {},
                {},
                {},
              ],
              [
                {
                  border: [true, false, true, true],
                  colSpan: 4,
                  alignment: "justify",
                  text: "2. Ante la toma de Hisopado nasofaríngeo o Aspirado naso faríngeo, se pueden presentar los siguientes riesgos: Molestias nasales, sensación de estornudo, ruptura de pequeños vasos lo que ocasionaría un pequeño sangrado.",
                },
                {},
                {},
                {},
              ],
            ],
          },
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          table: {
            widths: ["20%", "30%", "25%", "25%"],
            body: [
              [
                {
                  border: [true, true, true, false],
                  colSpan: 4,
                  alignment: "center",
                  bold: true,
                  text: "ACEPTO REALIZARME LA PRUEBA",
                },
                {},
                {},
                {},
              ],
              [
                {
                  border: [true, false, true, true],
                  colSpan: 4,
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: [
                    { text: "Nombres y apellidos usuario: " },
                    { bold: true, text: datos.paciente.descrip.trim() },
                    { text: ", nombre de quien toma la muestra: " },
                    { bold: true, text: datos.prof.descrip.trim() },
                    { text: " , fecha: " },
                    { bold: true, text: datos.fecha },
                    { text: " profesión: " },
                    { bold: true, text: datos.prof.descrip_atiende.trim() },
                  ],
                },
                {},
                {},
                {},
              ],
            ],
          },
        },
        revocacion(),
      ],
    };
  }
  function revocacion() {
    if (datos.autorizo) {
      return {
        stack: [
          {
            text: "",
          },
        ],
      };
    } else {
      return {
        stack: [
          {
            marginTop: 5,
            table: {
              widths: ["100%"],
              body: [
                [
                  {
                    stack: [
                      {
                        marginTop: 10,
                        bold: true,
                        alignment: "center",
                        text: "DILIGENCIAR ESTE ESPACIO EN CASO DE REVOCACIÓN O DISENTIMIENTO",
                        style: "bodyNoBold9",
                      },
                      {
                        alignment: "justify",
                        marginTop: 8,
                        style: "bodyNoBold9",
                        text: [
                          { text: "Yo, " },
                          { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.descrip : datos.paciente.descrip },
                          {
                            text: ", después de ser informado de la naturaleza y riesgos del procedimiento propuesto, manifiesto de forma libre y consciente mi negación/ revocación para su realización, haciéndome responsable de las consecuencias que se puedan derivar de ésta decisión.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              ],
            },
          },
        ],
      };
    }
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
