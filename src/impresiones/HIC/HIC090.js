import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos, useApiContabilidad } from "@/store";

const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();

export const impresionHIC090 = ({ datos }) => {
  console.log("datos ", datos);

  var dd = {
    stack: [contenidoHIC090(), firmas()],
  };

  function contenidoHIC090() {
    return {
      stack: [
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            { width: "50%", alignment: "left", text: [{ bold: true, text: "Fecha: " }, { text: datos.fecha }] },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Hora: " }, { text: datos.hora }] },
          ],
        },
        {
          marginTop: 5,
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  border: [true, true, true, false],
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: [
                    { text: "Yo, " },
                    { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.descrip : datos.paciente.descrip },
                    { text: " , Mayor de edad identificado con documento " },
                    { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.tipo_id : datos.paciente.tipo_id },
                    { text: " N°: " },
                    { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.cod : datos.paciente.cod },
                    { text: " de: " },
                    { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.descrip_ciudad : datos.paciente.descrip_ciudad },

                    { text: " actuando en nombre propio en pleno uso de mis facultades, libre y consciente, o como responsable del paciente " },
                    { bold: true, text: datos.acomp.cod.trim() != "" ? datos.paciente.descrip : "N/A\n" },
                    { text: " identificado con " },
                    { bold: true, text: datos.acomp.cod.trim() != "" ? datos.paciente.tipo_id : "N/A" },
                    { text: " N°: " },
                    { bold: true, text: datos.acomp.cod.trim() != "" ? datos.paciente.cod : "N/A." },
                    { text: " declaro que: \n" },
                    { text: " \n" },
                    {
                      text: "Se me ha explicado claramente el estado actual de salud como paciente y la necesidad de referirme a otra institución de mayor complejidad, donde se cuente con los recursos técnico-científicos y profesionales especializados para el manejo de mi condición.\n",
                    },
                    { text: " \n" },
                    {
                      text: "Me han informado que luego de realizar el trámite de la remisión por el conducto regular no ha sido posible la aceptación, por lo cual el médico: ",
                    },
                    { bold: true, text: datos.medico_informa.trim() },
                    {
                      text: " ha tomado la decisión de iniciar el traslado sin confirmar las indicaciones:",
                    },
                    { bold: true, text: datos.indicaciones.trim() + ".\n" },
                    { text: " \n" },
                    { text: "También me han informado: \n" },
                  ],
                },
              ],
              [
                {
                  border: [true, false, true, false],
                  alignment: "justify",
                  style: "bodyNoBold9",
                  ul: [
                    {
                      text: "Que la aceptación o negación de la remisión en otra Institución es decisión de la IPS de mayor complejidad,  EPS del paciente y está condicionada a la disponibilidad de recursos, especialistas o situaciones administrativas.",
                    },
                    {
                      text: "Que en todo traslado se pueden presentar complicaciones durante el recorrido ya sea por los riesgos que esto implica o por la condición de salud del paciente que pueden terminar con la muerte del mismo.",
                    },
                    {
                      text: "Que la ambulancia en la que se realizará el traslado cuenta con el personal y los equipos necesarios para asegurar la atención durante el mismo, pero se entiende que pueden existir eventualidades imposibles de atender dentro de un vehículo.",
                    },
                    {
                      text: "Que se llegara a la institución de mayor complejidad con el paciente, sujeto a ser o no aceptado en otras instituciones.",
                    },
                  ],
                },
              ],
              [
                {
                  border: [true, false, true, true],
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Manifiesto que entendí la información recibida y que comprendo los riesgos del traslado y en tales condiciones acepto que se realice el mismo a otra institución de mayor complejidad, con el fin de hacer lo posible por salvaguardar la vida, aunque no haya sido admitido durante el trámite realizado.",
                },
              ],
            ],
          },
        },
        {
          marginTop: 5,
          table: {
            widths: ["100%"],
            body: [
              [
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  bold: true,
                  text: "Entiendo que en cualquier momento y sin necesidad de dar explicaciones puedo revocar este consentimiento.",
                },
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
