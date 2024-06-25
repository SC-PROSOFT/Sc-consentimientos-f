import { calcEdad, evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHIC044 = ({ datos }) => {
  var dd = {
    stack: [contenidoPARTO(), firmas()],
  };

  function contenidoPARTO() {
    return {
      stack: [
        {
          text: `En forma libre y voluntaria yo ${datos.acomp.descrip} identificado
          Con documento número ${datos.acomp.cod} manifiesto mi
          deseo de ingresar como acompañante durante el trabajo de parto, parto y post parto de la usuaria: ${datos.paciente.descrip}`,
        },
        {
          marginTop: 10,
          text: "He recibido información clara, en lenguaje sencillo sobre la importancia del acompañamiento durante el trabajo de parto y parto, así como sus beneficios en la salud materna y perinatal.",
        },
        {
          marginTop: 10,
          text: "Me comprometo a:",
        },
        {
          marginTop: 5,
          ul: [
            "Dar apoyo continuo a mi familiar para que se sienta más tranquila y segura durante su trabajo de parto",
            "Respetar al personal de la salud y demás pacientes.",
            "Brindar ayuda efectiva a la mujer:",
            "Como promover la respiración consciente, el movimiento como caminar (siempre que no esté contraindicado) y hidratación.",
            "Permanecer en la unidad al lado de mi familiar, no deambular por el servicio ni por otros servicios de la institución.",
            "Respetar la privacidad de otras usuarias.",
            "Permitir la realización de los procedimientos que requiera mi familiar durante su atención en el servicio.",
            "Está atento a suministrar información al personal médico, sobre datos personales y el seguimiento de la atención prenatal",
            "No manipular los dispositivos médicos (Líquidos endovenosos, bombas de infusión, monitores, oxigeno, etc.)",
            "En la sala de partos permanecer en la cabecera de mi familiar para brindar apoyo requerido.",
            "Retirarme del servicio ante la orden médica en caso de situaciones inesperadas para facilitar la actuación del personal de salud.",
            "No realizar videos de las actuaciones del personal de salud ni de otros pacientes.",
          ],
        },
        {
          marginTop: 10,
          text: `${datos.empresa.nomusu}, respeta el derecho de las mujeres en trabajo de parto, a estar acompañadas por su
          compañero o una persona significativa para ella durante el trabajo de parto, parto y puerperio.`,
        },
        {
          marginTop: 10,
          bold: true,
          text: `Requisitos para el acompañamiento durante el trabajo de parto y parto, en ${datos.empresa.nomusu}.`,
        },
        {
          marginTop: 5,
          ul: [
            "Idealmente que haya asistido o participado del curso de preparación para la maternidad y paternidad.",
            "Leer y firmar el consentimiento de acompañamiento.",
            "Usar de manera permanente tapabocas",
            "No ingresar objetos de valor como joyas bolsos etc",
            "Brindar ayuda efectiva a la mujer: promover la respiración constante. Brindar hidratación constante.",
            "Evitar el uso del celular en lo posible",
            "Colaborar con el manejo médico y decisiones tomados por el médico tratante.",
            "Disponer con la pañalera con los elementos requeridos y estar atento de la entrega de alguno, cuando se requiera.",
            "Acatar las indicaciones del personal enfermería de sala de partos",
            "Es voluntario entrar al parto.",
            "Respetar la privacidad de las demás usuarias de la sala de trabajo de parto.",
          ],
        },
        textoAutoriza(datos.disentimiento),
      ],
    };
  }

  return dd;

  function firmas() {
    let firmasArray = [];
    let anchos = [];
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
          marginTop: 8,
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

  function textoAutoriza(disentir) {
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
              text: `En calidad de paciente y/o acudiente, disiento este consentimiento que he prestado sobre ACOMPAÑAMIENTO DURANTE TRABAJO DE PARTO, PARTO Y POST PARTO. \n`,
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
    else return { text: "" };
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
};
