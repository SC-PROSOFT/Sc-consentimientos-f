import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getEmpresa } = useModuleFormatos();

export const impresionHIC074 = ({ datos }) => {
  console.log("datos ", datos);
  var dd = {
    stack: [contenidoHIC074(), firmas()],
  };
  function contenidoHIC074() {
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
                  alignment: "center",
                  bold: true,
                  text: "DATOS DE IDENTIFICACIÓN",
                },
              ],
              [{ text: [{ text: "Nombres y apellidos: " }, { bold: true, text: datos.paciente.descrip }] }],
              [
                {
                  text: [
                    {
                      text: "Tipo documento de identidad: ",
                    },
                    {
                      bold: true,
                      text: datos.paciente.tipo_id,
                    },
                    {
                      text: " Numero documento de identidad: ",
                    },
                    {
                      bold: true,
                      text: datos.paciente.cod,
                    },
                    {
                      text: " De: ",
                    },
                    {
                      bold: true,
                      text: datos.paciente.descrip_ciudad,
                    },
                  ],
                },
              ],
              [
                {
                  text: [
                    {
                      text: " Fecha: ",
                    },
                    {
                      bold: true,
                      text: datos.fecha,
                    },
                    {
                      text: " Lugar: ",
                    },
                    {
                      bold: true,
                      text: getEmpresa.nomusu,
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          italics: true,
          alignment: "justify",
          text: "Una vez conocido, explicado y entendido el Procedimiento o el tratamiento, quien sea requiere y acepte el mismo, firmara en constancia este documento, haciendo claridad que el objetivo es el mejoramiento de su calidad de vida pero que, si en algún momento del manejo establecido el usuario desea no continuar o no aceptar algún o todos los tratamientos propuestos, está en la libertad de solicitarlo.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          alignment: "center",
          text: "DECLARACIÓN DEL USUARIO",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Me han explicado y he entendido satisfactoriamente la naturaleza y propósitos de este procedimiento, también me han aclarado las dudas y me han dicho las ventajas y desventajas.  Comprendo  perfectamente  que  el  procedimiento  va  a  consistir en la toma de muestra para citología cervicouterina realizada con un especulo desechable, en donde se toma una muestra  con  un  citocepillo  de  la  zona  endocervical(centro  del  cuello  uterino)  y con una espátula se toma una muestra exocervical (de alrededor  del  cuello  del  útero)  esto  se  fija  en una placa para ser llevado a lectura, el  resultado  debe  recogerse  de  10  a  15  días  después  de  la toma y en caso de alguna alteración el profesional que toma la muestra se comunicara vía telefónica para determinar el paso a seguir, es posible que la citología genere incomodidad pélvica pero es un proceso rápido y no doloroso, si conozco algún estado que  debo  notificar  antes  de  la  toma  lo  especifico aquí:(uso de especulo pequeño, tratamientos previos como crioterapias, histerectomía, u otros eventos) tales como:",
        },
        {
          marginTop: 5,
          style: "bodyNoBold9",
          alignment: "justify",
          text: datos.otros_eventos,
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Entiendo que en caso de no aceptar el procedimiento aquí propuesto acepto la total responsabilidad de los inconvenientes o consecuencias que tenga la no realización de este procedimiento.",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Doy mi consentimiento para que me realicen la toma de muestra para citología cervicouterina en constancia firmo.",
        },
        {
          marginTop: 10,
          bold: true,
          style: "bodyNoBold9",
          alignment: "center",
          text: "PROFESIONAL QUE REALIZA EL PROCEDIMIENTO",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          alignment: "justify",
          text: [
            { text: "Profesional responsable " },
            { text: datos.prof.descrip },
            { text: " he informado 	del propósito y naturaleza del tratamiento, descrito arriba, las ventajas y los resultados que se esperan." },
          ],
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
