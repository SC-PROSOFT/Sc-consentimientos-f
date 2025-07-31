import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionHIC072 = ({ datos }) => {
  console.log("datos ", datos);

  var dd = {
    stack: [contenidoHIC072(), firmas()],
  };

  function contenidoHIC072() {
    return {
      stack: [
        {
          marginTop: 8,
          text: [
            { bold: true, style: "tableTitle", text: " Fecha: " },
            { style: "bodyNoBold9", text: datos.fecha },
            { bold: true, style: "tableTitle", text: " Hora: " },
            { style: "bodyNoBold9", text: datos.hora },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          text: [
            { text: "Yo, " },
            { bold: true, text: datos.nomb_prof },
            { text: " Certifico que TENGO UNA ORDEN MEDICA para el procedimiento a realizar, identificado a continuación." },
          ],
        },
        {
          marginTop: 8,
          table: {
            widths: ["25%", "25%", "25%", "25%"],
            body: [
              [
                {
                  colSpan: 4,
                  style: "tableTitle",
                  text: {
                    text: [
                      { text: "ADMINISTRACIÓN DE MEDICAMENTOS: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.admin_medic == "S" ? " X " : "    " },
                      },
                      { text: "    NOMBRE DE MEDICAMENTO: " },
                      { bold: true, text: datos.nomb_medicament + "\n" },
                      { bold: true, text: "Vía:    " },
                      { text: "IV: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.iv == "S" ? " X " : "    " },
                      },
                      { text: " IM: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.im == "S" ? " X " : "    " },
                      },
                      { text: " SC: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.sc == "S" ? " X " : "    " },
                      },
                      { text: " ID: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.id == "S" ? " X " : "    " },
                      },
                      { text: " SB: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.sb == "S" ? " X " : "    " },
                      },
                      { text: " VO: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.vo == "S" ? " X " : "    " },
                      },
                    ],
                  },
                },
                {},
                {},
                {},
              ],
              [
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      { text: "CURACIÓN: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.curacion == "S" ? " X " : "    " },
                      },
                    ],
                  },
                },
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      { text: "RETIRO DE PUNTOS: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.retiro_puntos == "S" ? " X " : "    " },
                      },
                    ],
                  },
                },
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      { text: "LAVADO DE OIDO: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.lavado_oido == "S" ? " X " : "    " },
                      },
                    ],
                  },
                },
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      { text: "LAVADO OCULAR: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.lavado_ocular == "S" ? " X " : "    " },
                      },
                    ],
                  },
                },
              ],
              [
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      { text: "TOMA DE ELECTROCARDIOGRAMA: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.toma_electro == "S" ? " X " : "    " },
                      },
                    ],
                  },
                },
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      { text: " CATETERISMO VESICAL: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.cateterismo_vesical == "S" ? " X " : "    " },
                      },
                    ],
                  },
                },
                {
                  colSpan: 2,
                  style: "tableTitle",
                  text: {
                    text: [
                      { text: "OTROS NO RELACIONADOS: " },
                      {
                        text: { bold: true, decoration: "underline", text: datos.otr_no_relac == "S" ? " X \n" : "    \n" },
                      },
                      { text: "¿Cuál? " },
                      { text: datos.descrip_otr_no_relac },
                    ],
                  },
                },
                {},
              ],
            ],
          },
        },

        {
          marginTop: 8,
          table: {
            widths: ["25%", "25%", "25%", "25%"],
            body: [
              [
                {
                  colSpan: 4,
                  style: "tableTitle",
                  text: {
                    text: [
                      { bold: true, alignment: "center", text: "POSIBLES COMPLICACIONES \n" },
                      {
                        alignment: "justify",
                        text: "Entiendo que este procedimiento hace parte del tratamiento instaurado por el profesional tratante y que el personal designado para su realización posee la idoneidad y el entrenamiento suficiente para hacerlo; no obstante, entiendo que pueden presentarse complicaciones en algunos casos.",
                      },
                    ],
                  },
                },
                {},
                {},
                {},
              ],
              [
                {
                  colSpan: 4,
                  style: "tableTitle",
                  text: {
                    text: [
                      { bold: true, alignment: "justify", text: "ADMINISTRACIÓN DE MEDICAMENTOS: " },
                      {
                        alignment: "justify",
                        text: "Reacciones alérgicas, intolerancia, interacción con otros medicamentos que el paciente haya recibido y en caso de administración por medio de inyectología se puede presentar dolor, inflamación, flebitis, infiltraciones o hematomas.",
                      },
                    ],
                  },
                },
                {},
                {},
                {},
              ],
              [
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      { bold: true, text: "CURACIONES: " },
                      {
                        text: "Dolor, inflamación.",
                      },
                    ],
                  },
                },
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      { bold: true, text: "RETIRO DE PUNTOS: " },
                      {
                        text: "Rubor, equimosis, molestia, dolor.",
                      },
                    ],
                  },
                },
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      { bold: true, text: "LAVADO DE OIDO: " },
                      {
                        text: "Molestia, inflamación, mareo.",
                      },
                    ],
                  },
                },
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      { bold: true, text: "LAVADO OCULAR: " },
                      {
                        text: "Molestia, inflamación.",
                      },
                    ],
                  },
                },
              ],
              [
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      { bold: true, text: "TOMA ELECTROCARDIOGRAMA: " },
                      {
                        text: "La toma de EKG no implica ningún riesgo ni complicación.",
                      },
                    ],
                  },
                },
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      { bold: true, text: "CATETERISMO VESICAL: " },
                      {
                        text: "Falsa vía uretral Infección urinaria Retención urinaria Hematuria.",
                      },
                    ],
                  },
                },
                {
                  colSpan: 2,
                  style: "tableTitle",
                  text: {
                    text: [
                      { bold: true, text: "EN CASO DE OTRO PROCEDIMIENTO REGISTRAR EN ESTE ESPACIO LAS POSIBLES COMPLICACIONES: " },
                      {
                        text: datos.descrip_otr_procedim,
                      },
                    ],
                  },
                },
                {},
              ],
            ],
          },
        },
        {
          marginTop: 8,
          table: {
            alignment: "justify",
            widths: ["100%"],
            body: [
              [
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      { bold: true, text: "CONSENTIMIENTO / DISENTIMIENTO: " },
                      {
                        text: "De forma libre e informada, ",
                      },
                      {
                        text: " AUTORIZO ",
                      },
                      {
                        text: { bold: true, decoration: "underline", text: datos.autorizo ? " X " : "    " },
                      },
                      {
                        text: " NO AUTORIZO ",
                      },
                      {
                        text: { bold: true, decoration: "underline", text: !datos.autorizo ? " X " : "    " },
                      },
                      {
                        text: " al personal asistencial de la entidad, para que, en ejercicio legal de su profesión y de acuerdo con los procedimientos establecidos, se practique el procedimiento relacionado anteriormente.",
                      },
                    ],
                  },
                },
              ],
              [
                {
                  style: "tableTitle",
                  text: {
                    text: [
                      {
                        text: "Nombre del paciente: ",
                      },
                      {
                        bold: true,
                        text: datos.paciente.descrip,
                      },
                      {
                        text: ", No. de Identificación: ",
                      },
                      {
                        bold: true,
                        text: datos.paciente.cod,
                      },
                      {
                        text: ", EPS: ",
                      },
                      {
                        bold: true,
                        text: datos.paciente.descrip_eps,
                      },
                    ],
                  },
                },
              ],
            ],
          },
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
