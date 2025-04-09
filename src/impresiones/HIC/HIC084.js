import { evaluarParentesco, calcularEdad } from "@/formatos/utils";

export const impresionHIC084 = ({ datos }) => {
  var dd = {
    stack: [contenidoHIC084(), firmas()],
  };
  function contenidoHIC084() {
    return {
      stack: [
        {
          text: "ESTRATEGIA PARA LA REDUCCIÓN DE LA TRANSMISIÓN PERINATAL DEL VIH",
          bold: true,
          style: "bodyNoBold9",
          alignment: "center",
        },
        { marginTop: 4, text: "REGISTRO INICIAL DE LA GESTANTE", bold: true, style: "bodyNoBold9", alignment: "center" },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          columns: [
            { width: "33%", alignment: "left", text: [{ bold: true, text: "Fecha: " }, { text: datos.fecha }] },
            { width: "33%", alignment: "center", text: [{ bold: true, text: "Departamento: " }, { text: "Meta" }] },
            { width: "33%", alignment: "right", text: [{ bold: true, text: "Codigo: " }, { text: datos.codigo }] },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            { width: "70%", alignment: "left", text: [{ bold: true, text: "Nombre de la gestante: " }, { text: datos.paciente.descrip }] },
            { width: "30%", alignment: "right", text: [{ bold: true, text: "Edad: " }, { text: calcularEdad(datos.paciente.nacim) }] },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            { width: "50%", alignment: "left", text: [{ bold: true, text: "Tipo de documento de identidad: " }, { text: datos.paciente.tipo_id }] },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Número de documento de identidad: " }, { text: datos.paciente.cod }] },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            {
              width: "50%",
              alignment: "left",
              text: [{ bold: true, text: "Sistema de seguridad social: " }, { text: datos.paciente.descrip_tipo_afil }],
            },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Teléfono: " }, { text: datos.paciente.telefono }] },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            { width: "50%", alignment: "left", text: [{ bold: true, text: "Ocupación: " }, { text: datos.paciente.descrip_ocup }] },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Dirección: " }, { text: datos.paciente.direccion }] },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            { width: "30%", alignment: "left", text: [{ bold: true, text: "Barrio/Vereda: " }, { text: datos.paciente.descrip_barrio }] },
            {
              width: "70%",
              alignment: "right",
              text: [{ bold: true, text: "Acudiente o responsable de la gestante: " }, { text: datos.acomp.descrip }],
            },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            {
              width: "70%",
              alignment: "left",
              text: [{ bold: true, text: "Edad gestacional a la captación (semanas): " }, { text: datos.edad_gest }],
            },
            { width: "30%", alignment: "right", text: [{ bold: true, text: "FPP Fecha: " }, { text: datos.ffp_fecha }] },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            {
              width: "50%",
              alignment: "left",
              text: [
                { bold: true, text: "Recibió asesoría PRE TEST: " },
                { bold: true, text: "SI " },
                { bold: true, decoration: "underline", text: datos.recib_ases_pre_test == "S" ? " X " : "    " },
                { text: " NO " },
                { bold: true, decoration: "underline", text: datos.recib_ases_pre_test == "N" ? " X " : "    " },
              ],
            },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Fecha de la asesoría: " }, { text: datos.fecha_ases_pre_test }] },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            {
              width: "50%",
              alignment: "left",
              text: [
                { bold: true, text: "Recibio asesoria POST TEST: " },
                { bold: true, text: "SI " },
                { bold: true, decoration: "underline", text: datos.recib_ases_post_test == "S" ? " X " : "    " },
                { text: " NO " },
                { bold: true, decoration: "underline", text: datos.recib_ases_post_test == "N" ? " X " : "    " },
              ],
            },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Fecha de la asesoría: " }, { text: datos.fecha_ases_post_test }] },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          columns: [
            {
              width: "60%",
              alignment: "left",
              text: [
                { bold: true, text: "Acepto las pruebas diagnosticas: " },
                { bold: true, text: "SI " },
                { bold: true, decoration: "underline", text: datos.acept_prueb_diagn == "S" ? " X " : "    " },
                { text: " NO " },
                { bold: true, decoration: "underline", text: datos.acept_prueb_diagn == "N" ? " X " : "    " },
              ],
            },
            {
              width: "40%",
              alignment: "right",
              text: [
                { bold: true, text: "Desplazada: " },
                { bold: true, text: "SI " },
                { bold: true, decoration: "underline", text: datos.desplazad == "S" ? " X " : "    " },
                { text: " NO " },
                { bold: true, decoration: "underline", text: datos.desplazad == "N" ? " X " : "    " },
              ],
            },
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            widths: ["20%", "10%", "35%", "35%"],
            body: [
              [
                {
                  colSpan: 2,
                  alignment: "center",
                  bold: true,
                  text: "PRUEBA REALIZADA",
                },
                {},
                {
                  alignment: "center",
                  bold: true,
                  text: "FECHA",
                },
                {
                  alignment: "center",
                  bold: true,
                  text: "RESULTADO",
                },
              ],
              [
                { border: [true, true, false, true], bold: true, text: "EISA 1" },
                {
                  border: [false, true, true, true],
                  alignment: "center",
                  stack: datos.eisa_1 == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                },
                { alignment: "center", bold: true, text: datos.fecha_eisa_1 },
                {
                  alignment: "center",
                  bold: true,
                  text: datos.result_eisa_1 == "RE" ? "Reactivo" : "No reactivo",
                },
              ],
              [
                { border: [true, true, false, true], bold: true, text: "ELISA 2" },
                {
                  border: [false, true, true, true],
                  alignment: "center",
                  stack: datos.elisa_2 == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                },
                { alignment: "center", bold: true, text: datos.fecha_elisa_2 },
                {
                  alignment: "center",
                  bold: true,
                  text: datos.result_elisa_2 == "RE" ? "Reactivo" : "No reactivo",
                },
              ],
              [
                { border: [true, true, false, true], bold: true, text: "WESTERN BLOT" },
                {
                  border: [false, true, true, true],
                  alignment: "center",
                  stack: datos.western_blot == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                },
                { alignment: "center", bold: true, text: datos.fecha_western_blot },
                {
                  alignment: "center",
                  bold: true,
                  text:
                    datos.result_western_blot == "PO"
                      ? "Positivo"
                      : datos.result_western_blot == "NE"
                      ? "Negativo"
                      : datos.result_western_blot == "IN"
                      ? "Indeterminado"
                      : "",
                },
              ],
            ],
          },
        },
        {
          marginTop: 20,
          text: "ATENCIÓN EN CONTROL DE TRABAJO DE PARTO SIN CONTROL PRENATAL",
          bold: true,
          style: "bodyNoBold9",
          alignment: "center",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            widths: ["20%", "10%", "35%", "35%"],
            body: [
              [
                {
                  colSpan: 2,
                  alignment: "center",
                  bold: true,
                  text: "PRUEBA REALIZADA",
                },
                {},
                {
                  alignment: "center",
                  bold: true,
                  text: "FECHA",
                },
                {
                  alignment: "center",
                  bold: true,
                  text: "RESULTADO",
                },
              ],
              [
                { border: [true, true, false, true], bold: true, text: "PRUEBA RAPIDA" },
                {
                  border: [false, true, true, true],
                  alignment: "center",
                  stack: datos.prb_rapiada == "S" ? cuadro_canvas_x(true) : cuadro_canvas(true),
                },
                { alignment: "center", bold: true, text: datos.fecha_prb_rapiada },
                {
                  alignment: "center",
                  bold: true,
                  text: datos.result_prb_rapiada == "PO" ? "Positivo" : "Negativo",
                },
              ],
            ],
          },
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
