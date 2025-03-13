import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getEmpresa } = useModuleFormatos();

export const impresionHIC068 = ({ datos }) => {
  console.log("datos ", datos);
  var dd = {
    stack: [contenidoHIC068(), firmas()],
  };
  function contenidoHIC068() {
    return {
      stack: [
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["100%"],
            body: [
              [
                {
                  text: [{ text: "Fecha: " }, { text: datos.fecha }, { text: " Sede de la atención: " }, { text: getEmpresa.nomusu }],
                },
              ],
              [{ text: [{ text: "Nombres y apellidos: " }, { text: datos.paciente.descrip }] }],
              [
                {
                  text: [
                    {
                      text: "Tipo documento de identidad: ",
                    },
                    {
                      text: datos.paciente.tipo_id,
                    },
                    {
                      text: " Numero documento de identidad: ",
                    },
                    {
                      text: datos.paciente.cod,
                    },
                    {
                      text: " De: ",
                    },
                    {
                      text: datos.paciente.descrip_ciudad,
                    },
                  ],
                },
              ],
              [
                {
                  text: [
                    {
                      text: "EPS: ",
                    },
                    {
                      text: datos.paciente.descrip_eps,
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          bold: true,
          alignment: "center",
          decoration: "underline",
          text: "DECLARO LIBRE Y VOLUNTARIAMENTE",
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          text: "Que me han explicado y he entendido satisfactoriamente la naturaleza y propósitos del procedimiento, asi como los riesgos y que me han aclarado las dudas al respecto.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["100%"],
            body: [
              [
                {
                  text: [
                    { text: "Comprendo perfectamente que el procedimiento va a consistir en la " },
                    { text: "exploración VAGINAL, " },
                    {
                      text: "que es un examen físico en el cual el médico introduce uno o dos dedos en la vagina de la paciente o se introduce un especulo para evaluar el estado del cuello uterino y las paredes vaginales. Puede ser necesario para identificar las causas de dolor pélvico, sangrado anormal u otras molestias.",
                    },
                  ],
                },
              ],
              [
                {
                  stack: [
                    { text: [{ bold: true, text: "Riesgos y Complicaciones. " }] },
                    { ul: ["Molestia o dolor leve durante el examen.", "Sangrado leve, especialmente si se introduce especulo."] },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["100%"],
            body: [
              [
                {
                  text: [
                    { text: "Comprendo  perfectamente  que  el  procedimiento  va  a  consistir en la " },
                    { text: "exploración RECTAL, " },
                    {
                      text: "que es un examen físico en el cual el médico introduce un dedo, usando guantes y lubricante en el recto del paciente para evaluar la próstata (en el caso de hombres) y otras estructuras en caso de  dolor rectal, sangrado, alteraciones en los intestinos o para la evaluación de condiciones como hemorroides.",
                    },
                  ],
                },
              ],
              [
                {
                  stack: [
                    { text: [{ bold: true, text: "Molestia o dolor leve durante el examen. " }] },
                    {
                      ul: [
                        "Molestia o dolor leve durante el examen.",
                        "Sangrado leve, especialmente si existe una condición preexistente como hemorroides o ulceras.",
                      ],
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["100%"],
            body: [
              [
                {
                  text: [
                    { text: "Yo, " },
                    { text: datos.paciente.descrip },
                    {
                      text: [
                        {
                          text: "AUTORIZADO ",
                        },
                        {
                          bold: true,
                          decoration: "underline",
                          text: datos.autoriza == "S" ? " X " : "    ",
                        },
                        {
                          text: " NO AUTORIZADO ",
                        },
                        {
                          bold: true,
                          decoration: "underline",
                          text: datos.autoriza == "N" ? " X " : "    ",
                        },
                      ],
                    },
                    {
                      text: " al personal asistencial de la entidad, para que, en ejercicio legal de su profesión y de acuerdo con los procedimientos establecidos, se realice  la exploración ",
                    },
                    {
                      text: [
                        {
                          text: "VAGINAL ",
                        },
                        {
                          bold: true,
                          decoration: "underline",
                          text: datos.vaginal == "S" ? " X " : "    ",
                        },
                        {
                          text: " RECTAL ",
                        },
                        {
                          bold: true,
                          decoration: "underline",
                          text: datos.rectal == "N" ? " X " : "    ",
                        },
                      ],
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["100%"],
            body: [
              [
                {
                  bold: true,
                  text: "PROFESIONAL QUE REALIZA EL PROCEDIMIENTO",
                },
              ],

              [
                {
                  text: [
                    { text: "Yo, " },
                    { text: datos.prof.descrip.trim() },
                    { text: ", en desarrollo de mis actividades como " },
                    { text: datos.prof.descrip_atiende },
                    { text: "Certifico que he informado al paciente/ acudiente del propósito y naturaleza del procedimiento." },
                  ],
                },
              ],
            ],
          },
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
