import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getEmpresa } = useModuleFormatos();

export const impresionHIC080 = ({ datos }) => {
  console.log("datos ", datos);
  var dd = {
    stack: [contenidoHIC080(), firmas()],
  };
  function contenidoHIC080() {
    return {
      stack: [
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            {
              text: "Fecha: ",
            },
            {
              bold: true,
              text: datos.fecha,
            },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: [
            { text: "Yo. " },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.descrip : datos.paciente.descrip },
            {
              text: "con ",
            },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.tipo_id : datos.paciente.tipo_id },
            {
              text: " No. ",
            },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.cod : datos.paciente.cod },
            {
              text: "como paciente (padre/madre, tutor/tutora o representante legal) de ",
            },
            { bold: true, text: datos.acomp.cod.trim() != "" ? datos.paciente.descrip : "N/A\n" },
            {
              text: "y en pleno uso de mis facultades, libre y voluntariamente DECLARO que: se me ha explicado que el procedimiento para la aplicación de la anestesia local consiste en administrar, por medio de una inyección, sustancias que provocan el bloqueo reversible de la sensación dolorosa, para efectuar el tratamiento sin dolor.",
            },
          ],
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "La administración de anestesia local puede provocar entre otras, ulceración en la mucosa en la zona de inyección, dolor, limitación del movimiento de apertura bucal, parestesia prolongada, descenso de la tensión arterial, sincope, urticaria, asma, edema angioneurotico, crisis hipertensiva, hipoxia, taquicardia, arritmia cardiaca, hiperglicemia y en casos menos frecuentes fibrilación ventricular o incluso la muerte, que pueden requerir tratamiento urgente.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          text: "Declaro que se me ha explicado en un vocabulario que me es comprensible, la magnitud, alcance y posibles consecuencias, secuelas o molestias derivadas del tratamiento antes indicado, que en caso de que se presenten las anteriores complicaciones, acepto las molestias y riesgos mencionados y los que se señalen como derivados del tratamiento realizado.",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            {
              text: "Por ello manifiesto que estoy satisfecho con la información recibida y que comprendo el alcance y los riesgos del tratamiento y consiento que me realicen los siguientes tratamientos odontológicos: ",
            },
            { bold: true, text: datos.tratam_odontolog },
            {
              text: " y me responsabilizo de cualquier tipo de consecuencia por no seguir los cuidados que se indican. ",
            },
          ],
        },
        revocacion(),
      ],
    };
  }
  function revocacion() {
    console.log("autorizo ", datos.autorizo);

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
            marginTop: 10,
            bold: true,
            alignment: "center",
            text: "ANEXO CONSENTIMIENTO INFORMADO REVOCACIÓN DEL CONSENTIMIENTO",
            style: "bodyNoBold9",
          },
          {
            alignment: "justify",
            marginTop: 8,
            style: "bodyNoBold9",
            text: [
              { text: "Yo, " },
              { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.descrip : datos.paciente.descrip },
              { text: "Tipo documento de identidad:" },
              { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.tipo_id : datos.paciente.tipo_id },
              { text: "N° " },
              { bold: true, text: datos.acomp.cod.trim() != "" ? datos.acomp.cod : datos.paciente.cod },
              {
                text: "como paciente (padre/madre, tutor/tutora o representante legal)  en uso de mis facultades, libre y voluntariamente REVOCO el consentimiento prestado con fecha:",
              },
              { bold: true, text: datos.fecha },
              { text: " ante el Higienista Dental y/o Dra. Informante " },
              { bold: true, text: datos.profes_infor_revoc },
              { text: " no deseando proseguir en el tratamiento propuesto." },
            ],
          },
        ],
      };
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
