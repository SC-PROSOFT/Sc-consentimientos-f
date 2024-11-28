import { evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionHIC009 = ({ datos }) => {
  console.log("datos en HIC009 ", datos);

  var dd = {
    stack: [contenidoHIC009(), firmas()],
  };
  function llenarFirmador() {
    const acomp = datos.acomp.cod.length;
    const paci = datos.paciente.cod.length;

    return {
      ciudad: () =>
        datos.acomp.descrip_ciudad.trim() != "00000" || datos.acomp.descrip_ciudad.trim() != ""
          ? datos.acomp.descrip_ciudad
          : datos.paciente.descrip_ciudad,
      descrip: () => (datos.acomp.descrip.trim() != "" ? datos.acomp.descrip : datos.paciente.descrip),
      cod: () => (datos.acomp.cod.trim() != "" ? datos.acomp.cod : datos.paciente.cod),
      acudiente: () => (datos.paciente.descrip.trim() != "" ? datos.paciente.descrip : ""),
    };
  }
  function contenidoHIC009() {
    return {
      stack: [
        {
          columns: [
            {
              text: [
                { style: "tableTitle", text: "Fecha: " },
                { style: "bodyNoBold9", text: dayjs(datos.fecha_act).format("YYYY-MM-DD") },
                { style: "tableTitle", text: " Hora: " },
                { style: "bodyNoBold9", text: datos.hora_act || datos.hora },
              ],
            },
          ],
          //   columns: [
          //     {
          //       marginLeft: 50,
          //       //   width: "auto",
          //       text: `Fecha: ${dayjs(datos.fecha_act).format("YYYY-MM-DD")} `,
          //       alignment: "justify",
          //       style: "bodyNoBold9",
          //     },
          //     {
          //       width: "auto",
          //       text: " Hora: " + datos.hora_act,
          //       //   alignment: "justify",
          //       style: "bodyNoBold9",
          //     },
          //   ],
        },
        {
          marginTop: 5,
          text: `Yo, ${llenarFirmador().descrip()} , mayor de edad identificado con el documento N°: ${llenarFirmador().cod()} de ${llenarFirmador().ciudad()} actuando en nombre propio en pleno uso de mis facultades, libre y consciente, o como responsable del menor ${llenarFirmador().acudiente()} declaro que:`,
          style: "bodyNoBold9",
        },
        {
          marginTop: 5,
          text: `\n 1. Otorgo mi consentimiento para el ingreso al servicio de HOSPITALIZACION  de acuerdo a los diagnósticos y plan de tratamiento, por orden del médico: ${datos.prof.descrip} `,
          style: "bodyNoBold9",
        },
        {
          text: `\n 2. Acepto los servicios adicionales que requiera dentro de la estancia hospitalaria como canalización, estudios de laboratorios, radiográficos, así como la administración de medicamentos.`,
          style: "bodyNoBold9",
        },
        {
          text: `\n 3. Certifico que me han explicado las NORMAS DE LA INSTUCION PARA PACIENTES HOSPITALIZADOS, los horarios de visita y las restricciones.`,
          style: "bodyNoBold9",
        },
        {
          text: `\n 4. Acepto el ingreso al servicio de hospitalización y entiendo que hay  riesgos como las caídas, por lo cual  se deben mantener arriba las barandas de las camas.`,
          style: "bodyNoBold9",
        },

        textoRevoca(datos.estado),
      ],
    };
  }

  function textoRevoca(estado) {
    const texto_revoca = {
      stack: [
        {
          text: "REVOCACIÓN O DISENTIMIENTO",

          alignment: "center",
          style: "tableNoBold",
          bold: true,
        },
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
                      text: `Yo, ${llenarFirmador().descrip()} después de ser informado de la necesidad de hospitalización, manifiesto de forma libre y consciente mi negación/ revocación para su realización, haciéndome responsable de las consecuencias que se puedan derivar de ésta decisión. `,
                    },
                  ],
                  alignment: "justify",
                  style: "bodyNoBold",
                },
              ],
              [
                {
                  marginTop: -2,
                  marginBottom: 10,
                  colSpan: 2,
                  text: "",
                  alignment: "justify",
                  style: "bodyNoBold",
                },
                {},
              ],
            ],
          },
        },
      ],
    };
    if (!datos.autorizo) {
      return texto_revoca;
    } else {
      return null;
    }
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
