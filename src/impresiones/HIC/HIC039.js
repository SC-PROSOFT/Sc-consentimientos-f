import { evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHIC039 = ({ datos }) => {
  const dd = {
    stack: [contenidoSalida(), firmas()],
  };

  function contenidoSalida() {
    return {
      stack: [
        {
          marginTop: 20,
          columns: [
            {
              text: `Historia clínica número: ${datos.llave.slice(0, 2)}-${datos.llave.slice(2)}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
            {
              width: "auto",
              text: `Ciudad: ${datos.empresa.ciudad_usuar}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
            {
              marginLeft: 50,
              width: "auto",
              text: `Fecha: ${dayjs(datos.empresa.fecha_act).format("YYYY-MM-DD")}`,
              alignment: "justify",
              style: "bodyNoBold",
            },
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Yo ${llenarFirmador().descrip()} identificado(a) con  N° ${llenarFirmador().cod()}, obrando en la calidad abajo indicada, hago la siguiente declaración: Por medio del presente documento, en forma libre, en pleno uso de mis facultades mentales y sin limitaciones o impedimentos de carácter médico o legal, habiendo recibido información por parte del médico tratante sobre las condiciones médicas, he decido solicitar MI ALTA VOLUNTARIA del servicio de ${
            datos.servicio
          } ${
            datos.empresa.nomusu
          }, motivo por el cual eximo de toda responsabilidad al Hospital y asumo las consecuencias que se deriven de esta decisión.`,
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: "CALIDAD EN LA QUE SE OTORGA ESTE CONSENTIMIENTO:",
          bold: true,
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          columns: [
            {
              width: "auto",
              text: "Como paciente:",
            },
            {
              marginLeft: 10,
              width: "auto",
              text: "SI",
            },
            {
              marginLeft: 5,
              width: "auto",
              stack: cuadro_canvas(datos.acomp.cod.trim() == "" ? true : false),
            },
            {
              marginLeft: 15,
              width: "auto",
              text: "NO",
            },
            {
              marginLeft: 5,
              width: "auto",
              stack: cuadro_canvas(datos.acomp.cod.trim() != "" ? true : false),
            },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold",
          alignment: "justify",
          columns: [
            {
              width: "25%",
              text: "Como responsable del paciente:",
              bold: true,
            },
            {
              width: "50%",
              text: " (Padre o Madre si es menor; representante legal, familiar o representante u otras personas que figuren como tales en la H. C.):",
            },
            {
              width: "20%",
              marginLeft: 20,
              columns: [
                {
                  width: "auto",
                  text: "SI",
                },
                {
                  marginLeft: 5,
                  width: "auto",
                  stack: cuadro_canvas(datos.acomp.cod.trim() != "" ? true : false),
                },
                {
                  marginLeft: 15,
                  width: "auto",
                  text: "NO",
                },
                {
                  marginLeft: 5,
                  width: "auto",
                  stack: cuadro_canvas(datos.acomp.cod.trim() == "" ? true : false),
                },
              ],
            },
          ],
        },
        {
          style: "bodyNoBold",
          text: [
            {
              text: "Fecha de notificación: ",
              bold: true,
            },
            {
              text: `${datos.fecha}`,
            },
          ],
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Certifico que he explicado los riesgos de alta voluntaria y he contestado todas las preguntas. Considero que el (la) paciente, pariente/representante comprenden completamente lo que he explicado.",
        },
        {
          marginTop: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: "OTRAS CONSIDERACIONES",
          bold: true,
        },
        {
          marginBottom: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: `${datos.otras_considera}`,
        },
        textoAutoriza(datos.autorizo, datos.disentimiento),
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

  function llenarFirmador() {
    const guion = "_________________________";
    const acomp = datos.acomp.cod.length;

    return {
      ciudad: () => (acomp ? datos.acomp.descrip_ciudad : datos.paciente.descrip_ciudad),
      direccion: () => (acomp ? datos.acomp.direccion : datos.paciente.direccion),
      telefono: () => (acomp ? datos.acomp.telefono : datos.paciente.telefono),
      descrip: () => (acomp ? datos.acomp.descrip : datos.paciente.descrip),
      nacim: () => (acomp ? datos.acomp.nacim : datos.paciente.nacim),
      sexo: () => (acomp ? datos.acomp.sexo : datos.paciente.sexo),
      cod: () => (acomp ? datos.acomp.cod : datos.paciente.cod),
      acudiente: () => (acomp ? datos.paciente.descrip : guion),
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

  function textoAutoriza(autorizo, disentir) {
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
                  text: " el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento SALIDA VOLUNTARIA",
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
              text: `Yo, ${datos.acomp.cod.trim() ? datos.acomp.descrip : datos.paciente.descrip} identificado (a) con la CC No ${
                datos.acomp.cod.trim() ? datos.acomp.cod : datos.paciente.cod
              }, en calidad de paciente y/o acudiente, disiento este consentimiento que he prestado sobre la realización de la toma de SALIDA VOLUNTARIA. \n`,
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
      if (!autorizo) return textoRevoca;
    }
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
