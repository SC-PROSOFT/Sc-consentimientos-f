import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionODO009 = ({ datos }) => {
  console.log("datos ", datos);

  var dd = {
    stack: [contenidoODO009(), firmas()],
  };

  function contenidoODO009() {
    return {
      stack: [
        {
          marginTop: 8,
          table: {
            widths: ["50%", "50%"],
            body: [
              [
                {
                  alignment: "left",
                  text: [
                    { bold: true, style: "tableTitle", text: "Fecha: " },
                    { style: "bodyNoBold9", text: datos.fecha },
                  ],
                },
                {
                  alignment: "right",
                  text: [
                    { bold: true, style: "tableTitle", text: "N°. H.C. " },
                    { style: "bodyNoBold9", text: datos.llave },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: `Yo, ${
            datos.acomp.cod.trim() != "" ? datos.acomp.descrip : datos.paciente.descrip
          } mayor de edad y/o responsable del paciente, identificado(a) como aparece al pie de la firma, actuando en nombre propio en pleno uso de mis facultades, libre y consiente, declaro:`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n Otorgo mi consentimiento para que sea practicado el proceso quirúrgico requerido denominado: ${datos.proces_quirurg}.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n De acuerdo al diagnóstico y plan de tratamiento programado el cual fui informado. Otros estudios de diagnóstico y medicamentos.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n  Acepto los servicios adicionales que juzguen razonables y necesarios como estudios de laboratorio, radiológicos, otros estudios de diagnóstico y medicamentos. Comprendo que en el área de cirugía bucal todos los procedimientos no están exentos de las complicaciones frecuentes como lo son:`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n • Riesgo de la técnica de anestesia que se utiliza.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n • Posible inflamación y dolor del área afectada en la intervención.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n • Dificultad para abrir la boca y masticar, después del procedimiento.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n • Riesgo de hemorragia y aparición de hematomas en zonas adyacentes.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n • Infección de las heridas quirúrgicas.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n • Posibilidad de pérdida de sensibilidad temporal o no.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n • Riesgo de fracturas óseas, sinusitis, dislocación mandibular, comunicación bucosinusal.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n Estoy enterado que se me darán indicaciones pre y post operatorias, según convenga a mi caso en particular, así como la indicación farmacológica que pueda requerir antes o después de la intervención.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n Por otra parte autorizo al profesional ya mencionado, aplique anestesia local en el momento que el tratamiento lo requiera.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n Doy mi consentimiento y autorización para la intervención descrita anteriormente, sin coacción ni manipulación de ningún tipo.`,
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          text: `\n Diente: ${datos.dientes}`,
          style: "bodyNoBold9",
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
              text: `${datos.acomp.tipo_id} - ${datos.acomp.cod}`,
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
