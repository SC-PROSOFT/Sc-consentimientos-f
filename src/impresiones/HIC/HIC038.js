import { evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHIC038 = ({ datos }) => {
  var dd = {
    stack: [contenidoRefeYContraref(), firmas()],
  };

  function contenidoRefeYContraref() {
    return {
      stack: [
        {
          marginTop: 5,
          columns: [
            {
              width: "40%",
              text: `Historia clínica número: ${datos.llave.slice(0, 2)}-${datos.llave.slice(2)}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
            {
              width: "40%",
              text: `Ciudad: ${datos.empresa.ciudad_usuar}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
            {
              width: "20%",
              text: `Fecha: ${dayjs(datos.empresa.fecha_act).format("YYYY-MM-DD")}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
          ],
        },
        {
          marginTop: 10,
          text: `Yo, ${datos.paciente.descrip}, identificado con documento de identidad ${datos.tipo_id} ${datos.paciente.cod} expedida en ${datos.paciente.descrip_ciudad} con residencia en ${datos.paciente.descrip_ciudad}, teléfono número ${datos.paciente.telefono}. Actuando en nombre propio o como acudiente de ${datos.paciente.descrip} en mi calidad de paciente, de representante legal, familiar o allegado y en pleno uso de mis facultades mentales y de mis derechos de salud y habiendo solicitado por mi voluntad los servicios de salud a la empresa social del estado ESE salud Yopal, por medio del presente documento doy mi  consentimiento informado para que se me brinden los cuidados correspondientes y se siga la conducta terapéutica  según el criterio del médico tratante, se  me ha informado que es necesario y conveniente  por mi situación actual de salud, realizar  remisión a una institución Prestadora de Servicios de Salud de mayor complejidad para la atención por el o los servicios de ${datos.servicios} en pro de mejorar mi condición clínica de salud y dar continuidad al plan terapéutico requerido.`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 10,
          text: `Por lo anterior me ha brindado la siguiente información:`,
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 10,
          marginLeft: 15,
          alignment: "justify",
          style: "bodyNoBold",
          ol: [
            {
              text: `Se me ha informado que los trámites administrativos para la remisión estarán a cargo de mi EPS ${datos.paciente.eps}, ellos serán los encargados de presentar mi caso antes las diferentes instituciones de salud, para disponibilidad de la cama de acuerdo con la Red que tengan contratada.`,
            },
            {
              marginTop: 5,
              text: "El Periodo de tiempo para la aceptación de la remisión por parte de las IPS depende de varios factores como disponibilidad de la especialidad requerida, disponibilidad de cama, disponibilidad de convenio entre IPS y la EPS, entre otros, por lo tanto, no se puede determinar fecha ni hora exacta del proceso de remisión.",
            },
            {
              marginTop: 5,
              text: "El personal de la oficina de Referencia y Contra-referencia de la ESE Salud Yopal, realizara los trámites administrativos de informar a la EPS la necesidad de remisión y otorgo la autorización para que sean entregados todos los documentos de mi historia clínica requeridos para dichos tramites.",
            },
            {
              marginTop: 5,
              text: `En la Oficina de Referencia y Contra-referencia me entregaran información sobre los avances del proceso de remisión en los siguientes horarios: ${datos.horarios}`,
            },
            {
              marginTop: 5,
              text: `En consenso familiar hemos delegado al Señor/Señora ${datos.delegado_nombre}, identificado(a) con cedula de ciudadanía N° ${datos.delegado_cod} expedida en la ciudad de ${datos.delegado_expedida} para que sea la única persona que reciba la información sobre los avances de la remisión en la oficina de Referencia y Contra-referencia y transmita esta información al resto de mis familiares.`,
            },
            {
              marginTop: 5,
              text: "Se me informa que debo definir la persona que me acompañará durante el traslado y durante mi estadía en la institución de referencia, esa persona debe estar disponible para ser trasladado en el momento requerido.",
            },
            {
              marginTop: 5,
              text: "En caso de que el personal médico tratante de la ESE Salud Yopal suspenda la remisión por mejoría de mi estado de salud, se nos informara inmediatamente.",
            },
            {
              marginTop: 5,
              text: "Una vez entregado a la institución de salud remisoria para continuidad del tratamiento, mi cuidado y responsabilidad estará a cargo de la institución receptora.",
            },
            {
              marginTop: 5,
              text: "Me han informado que los riesgos durante el traslado en la ambulancia de la ESE Salud Yopal son: accidente vial, caída de la camilla, retrasos en la llegada al sitio de referencia por causas externas como factores climáticos, orden público, arreglos en la vía, entre otros.",
            },
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold",
          layout: {
            hLineWidth: function (i, node) {
              return 0.1;
            },
            vLineWidth: function (i, node) {
              return 0.1;
            },
          },
          table: {
            widths: ["90%", "5%", "5%"],
            heights: [12, 15, 15],
            body: [
              [
                {
                  alignment: "center",
                  text: "Marque con una equis “X” en los espacios en blanco de acuerdo con su respuesta.",
                  bold: true,
                },
                {
                  alignment: "center",
                  text: "SI",
                },
                {
                  alignment: "center",
                  text: "NO",
                },
              ],
              [
                {
                  marginTop: 2,
                  text: "¿Se me ha permitido realizar todas las observaciones y me han dado respuesta las inquietudes al respecto?",
                },
                {
                  marginTop: 2,
                  marginLeft: 6,
                  stack: cuadro_canvas(datos.observaciones == "S" ? true : false),
                },
                {
                  marginTop: 2,
                  marginLeft: 6,
                  stack: cuadro_canvas(datos.observaciones == "N" ? true : false),
                },
              ],
              [
                {
                  marginTop: 2,
                  text: "¿El equipo de salud me ha explicado toda la información aquí descrita?",
                },
                {
                  marginTop: 2,
                  marginLeft: 6,
                  stack: cuadro_canvas(datos.explicacion == "S" ? true : false),
                },
                {
                  marginTop: 2,
                  marginLeft: 6,
                  stack: cuadro_canvas(datos.explicacion == "N" ? true : false),
                },
              ],
            ],
          },
        },
        //AÑADIR CONDICION DE TEXTO ACOMPAÑANTE
        textoAutoriza(datos.autorizo, datos.disentimiento),
        textoAcomp(datos.acomp.cod != "" && datos.acomp.descrip != ""),
      ],
    };
  }

  function textoAcomp(acomp) {
    const textoAcompa = {
      stack: [
        {
          marginTop: 5,
          alignment: "center",
          style: "bodyBold",
          text: "TUTOR LEGAL O FAMILIAR",
        },
        {
          marginTop: 10,
          alignment: "justify",
          style: "bodyNoBold",
          text: `El (la) Señor(a) ${datos.acomp.descrip}, identificado(a) con cedula de ciudadanía N° ${
            datos.acomp.cod
          } expedida en la ciudad de ${datos.acomp.descrip_ciudad} en calidad de ${evaluarParentesco(
            datos.paren_acomp
          )}, es consciente de que el paciente cuyos datos figuran en el encabezamiento, no es competente para decidir en este momento, por lo que asume la responsabilidad de la decisión, en los mismos términos que haría el propio paciente.`,
        },
      ],
    };
    if (acomp) return textoAcompa;
    else return null;
  }

  function textoAutoriza(autorizo, disentir) {
    const textoAutoriza = {
      marginTop: 10,
      stack: [
        {
          text: [
            {
              text: "Para ello, manifiesto que estoy ",
            },
            {
              text: "satisfecho/a",
              bold: true,
              decoration: "underline",
            },
            {
              text: " con la información recibida y que comprendo el alcance y los riesgos explicados.",
            },
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
      ],
    };

    const textoRevoca = {
      stack: [
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          columns: [
            {
              width: "4%",
              stack: cuadro_canvas(true),
            },
            {
              marginLeft: 4,
              width: "96%",
              text: [
                {
                  text: "Expreso mi voluntad de ",
                },
                {
                  text: "revocar",
                  bold: true,
                },
                {
                  text: " el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento REFERENCIA Y CONTRA REFERENCIA DE PACIENTES",
                },
                {
                  text: `por los siguientes motivos: ${datos.revocar_motivos}`,
                },
              ],
            },
          ],
        },
      ],
    };

    const textoDisiente = {
      stack: [
        {
          marginTop: 10,
          text: "DISENTIMIENTO",
          alignment: "center",
          style: "bodyNoBold",
          bold: true,
        },
        {
          marginTop: 5,
          text: [
            {
              text: `Yo, ${
                datos.acomp.cod.trim() ? datos.acomp.descrip : datos.paciente.descrip
              } identificado (a) con la CC No ${
                datos.acomp.cod.trim() ? datos.acomp.cod : datos.paciente.cod
              }, en calidad de paciente y/o acudiente, disiento este consentimiento que he prestado sobre la realización de la toma de REFERENCIA Y CONTRA REFERENCIA DE PACIENTES. \n`,
            },
          ],
          alignment: "justify",
          style: "bodyNoBold",
        },
        {
          marginTop: 5,
          marginBottom: 10,
          text: [
            {
              text: "OBSERVACIONES:\n",
              marginTop: 15,
              bold: true,
            },
            {
              text: `${datos?.reg_coninf2?.obser_disenti}`,
            },
          ],

          alignment: "justify",
          style: "bodyNoBold",
        },
      ],
    };

    if (disentir == "S") return textoDisiente;
    else {
      if (autorizo) return textoAutoriza;
      else return textoRevoca;
    }
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

    if (datos.firmas.firma_func && datos.firmas.firma_acomp) {
      if (cant_firmas == 2) tamano_firma = 25;
      else tamano_firma = 50;
    } else {
      if (cant_firmas == 2) tamano_firma = 105;
      else tamano_firma = 130;
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
              text: "ESPECIALIDAD:",
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

  function firmaFuncionario() {
    return {
      stack: [
        {
          text: "FIRMA FUNCIONARIO",

          alignment: "center",
          style: "tableNoBold",
          bold: true,
        },
        {
          marginTop: 8,
          alignment: "center",
          image: "firma_func",
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
              text: `${datos.func.descrip}`,
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
              text: `${datos.func.cod}`,
            },
          ],
        },
      ],
    };
  }

  function firmas(condicion) {
    let firmasArray = [];
    let anchos = [];
    let tamanoFirmasArray = 0;

    if (datos.firmas.firma_acomp) {
      firmasArray.push(firmaAcompanante());
    }

    if (datos.firmas.firma_prof) {
      firmasArray.push(firmaProfesional());
    }

    if (datos.firmas.firma_func) {
      firmasArray.push(firmaFuncionario());
    }

    tamanoFirmasArray = firmasArray.length;

    if (datos.firmas.firma_paci) {
      firmasArray.unshift(firmaPaciente(datos.firmas.huella_paci, tamanoFirmasArray));
    }

    if (firmasArray.length == 2) {
      firmasArray.unshift({ border: [false, false, false, false], text: "" });
      anchos = ["10%", "40%", "40%"];
    } else if (firmasArray.length == 3) anchos = ["33%", "34%", "33%"];
    else if (firmasArray.length == 4) anchos = ["25%", "25%", "25%", "25%"];

    return {
      pageBreak: "before", //Se añade porque el formato no excede la primera pagina estando con todos los textos habilitados
      marginTop: 10,
      table: {
        widths: anchos,
        body: [[...firmasArray]],
      },
    };
  }

  return dd;
};
