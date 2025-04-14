import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";
const { getAcomp } = useModuleFormatos();

export const impresionHIC093 = ({ datos }) => {
  console.log("datos ", datos);

  var dd = {
    stack: [contenidoHIC093(), firmas()],
  };

  function contenidoHIC093() {
    return {
      stack: [
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            { width: "33%", alignment: "left", text: [{ bold: true, text: "Fecha: " }, { text: datos.fecha }] },
            { width: "33%", alignment: "center", text: [{ bold: true, text: "Hora: " }, { text: datos.hora }] },
            { width: "33%", alignment: "right", text: [{ bold: true, text: "EPS: " }, { text: datos.paciente.descrip_eps }] },
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
                    { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.descrip.trim() : datos.paciente.descrip.trim() },
                    { text: " , Mayor de edad identificado con documento " },
                    { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.tipo_id : datos.paciente.tipo_id },
                    { text: " N°: " },
                    { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.cod : datos.paciente.cod },
                    { text: " de: " },
                    { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.descrip_ciudad : datos.paciente.descrip_ciudad },

                    { text: " actuando en nombre propio en pleno uso de mis facultades, libre y consciente, declaro que: \n" },
                    { text: " \n" },
                  ],
                },
              ],
              [
                {
                  border: [true, false, true, false],
                  stack: [
                    {
                      style: "bodyNoBold9",
                      columns: [
                        {
                          width: "80%",
                          text: "Otorgo mi consentimiento para que sea practicado el procedimiento de insercion",
                        },
                        {
                          width: "20%",
                          alignment: "left",
                          stack: datos.insercion == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                        },
                      ],
                    },
                    {
                      marginTop: 4,
                      style: "bodyNoBold9",
                      columns: [
                        {
                          width: "80%",
                          text: "Otorgo mi consentimiento para que sea practicado el procedimiento de retiro",
                        },
                        {
                          width: "20%",
                          alignment: "left",
                          stack: datos.retiro == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                        },
                      ],
                    },
                  ],
                },
              ],
              [
                {
                  border: [true, false, true, true],
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: [
                    { bold: true, text: "INSERCCION DE DISPOSITIVO INTRAUTERINO. \n" },
                    { text: " \n" },
                    {
                      text: "del cual se me brindo información y se me han explicado tanto la necesidad de hacerlo como los riesgos. \n",
                    },
                  ],
                },
              ],
              [
                {
                  // alignment: "justify",
                  style: "bodyNoBold9",
                  text: [
                    {
                      text: "DECLARO QUE: \n",
                    },
                    { text: " \n" },
                    {
                      text: "1. Me han explicado en un lenguaje claro y comprensible la naturaleza y propósito del procedimiento, también me han informado de las ventajas, complicaciones, molestias y riesgos que pueden producirse, tales como dolor, abdominal, sangrado, ruptura uterina, enfermedad pélvica inflamatoria, embarazo, cólicos menstruales más fuertes, desplazamientos o expulsión del DIU entre otros. \n",
                    },
                    { text: " \n" },
                    {
                      text: "2. Se me ha dado la oportunidad de hacer preguntas y mis preguntas han sido contestadas satisfactoriamente. \n",
                    },
                    { text: " \n" },
                    {
                      text: "3. Se me ha informado plenamente que retirado el DIU y al no iniciar inmediatamente otro método de planificación familiar tengo la oportunidad de quedar embarazada. \n",
                    },
                    { text: " \n" },
                    {
                      text: "4. Se me ha informado de todos los signos de alarma por los cuales debo consultar una vez se me haya realizado el procedimiento tales como: sangrado abundante, dolor abdominal que no cede a analgésicos orales , distensión abdominal, fiebre, escalofríos, salida de secreción vaginal mal oliente, entre otras. Y que debo acudir a la cita de control al mes y luego cada año. \n",
                    },
                    { text: " \n" },
                    {
                      text: "5. Tengo la opción de decidir en contra del procedimiento. \n",
                    },
                    { text: " \n" },
                  ],
                },
              ],
              [
                {
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: [
                    {
                      text: "Certifico que se me ha explicado el procedimiento y entiendo sus posibles riesgos \n",
                    },
                    { text: " \n" },
                    { bold: true, text: "HE LEIDO Y ACEPTO REALIZARME EL PROCEDIMIENTO. \n" },
                  ],
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
                          { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.descrip.trim() : datos.paciente.descrip.trim() },
                          {
                            text: ", después de ser informado de la situación, manifiesto NO ESTAR DE ACUERDO y NO AUTORIZAR el traslado en ambulancia a otra institución a nivel nacional y asumo las consecuencias eximiendo con ello a la institución tratante.",
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
