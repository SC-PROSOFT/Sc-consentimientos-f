import { useModuleFormatos, useApiContabilidad } from "@/store";
import { evaluarParentesco } from "@/formatos/utils";
const { getAcomp } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionHIC187 = ({ datos }) => {
  console.log("impresionHIC187 -> ", datos);

  var dd = {
    stack: [contenidoHIC187(), firmas()],
  };
  function contenidoHIC187() {
    return {
      stack: [
        {
          marginTop: 15,
          alignment: "center",
          bold: true,
          style: "bodyNoBold9",
          text: "Consentimiento informado para cirugía",
        },
        {
          alignment: "center",
          style: "bodyNoBold9",
          text: "(En cumplimiento de la ley 23 de 1981)",
        },
        {
          marginTop: 5,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Villavicencio, " + datos.fecha + ".",
        },
        autorizaAcompPaci(),
        {
          marginTop: 10,
          alignment: "justify",
          text: [
            { style: "bodyNoBold9", text: " En forma voluntaria conciente en que el(la) doctor(a): " },
            { bold: true, style: "bodyNoBold9", text: datos.med_cirujano.trim() + "," },
            { style: "bodyNoBold9", text: " como cirujano(a) y el ayudante que el(ella) designe, me realicen: " },
            { bold: true, style: "bodyNoBold9", text: datos.procedimiento.trim() + "." },
            { style: "bodyNoBold9", text: " Como tratamiento para: " },
            { bold: true, style: "bodyNoBold9", text: datos.tratamiento.trim() + "." },
            { style: "bodyNoBold9", text: " Entiendo que esta cirugía consiste básicamente en: " },
            { bold: true, style: "bodyNoBold9", text: datos.cirugia.trim() + "." },
          ],
        },

        {
          marginTop: 15,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Esta cirugia no garantiza totalmente los resultados esperados. Se me ha explicado y entiendo que la garantía no puede ser total pues la práctica de la medicina y cirugía no son una ciencia exacta. debiendo mi médico colocar todo su conocimiento y su experiencia en buscar siempre lo mejores resultados con el objetivo o de de mejorar el problema por el cual consulté.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "También he entendido que existen otros tros tipos de tratamiento como los cuales no acepto y voluntariamente he elegido este método quirúrgico.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Entiendo que como en toda intervención quirúrgica y por causas independientes dei actuar de mi médico se pueden presentar complicaciones comunes y potencialmente serias que podrían requerir tratamientos complementarios, tanto médicos como quirúrgicos, siendo las complicaciones más frecuentes: náuseas, vómito, dolor, inflamación, moretones, ceroma (acumulación de líquido en la cicatriz), riz), granulomas gra (reacción a cuerpo extraño o sutura), queloide (crecimiento excesivo de la cicatriz), hematomas(acumulación de sangre), apraxias (cambios en la sensibilidad de la piel), cistitis, retención urinaria, sangrado o hemorragias con la posible necesidad de transfusión (intra o pos operatoria), infecciones con posible evolución febril (orina-heridas, de pared abdominal, ominal, pél pélvicas...), reacciones alérgicas, irritación frénica, anemia, heridas involuntarias en vasos sanguíneos, vejiga, intestino u otros órganos, eventración (hernias en la cicatriz. Existen otros riesgos como:",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "También se me informa la posibilidad de complicaciones severas como pelvi peritonitis, choque hemorrágico o trombosis que, aunque son poco frecuentes, representan como en toda intervención quirúrgica un riesgo excepcional de perder la vida derivado del acto quirúrgico o de la situación vital de cada paciente.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "En mi caso particular, el (la) doctor (a) me ha explicado que presento los siguientes riesgos adicionales:",
        },
        {
          marginTop: 2,
          bold: true,
          alignment: "justify",
          style: "bodyNoBold9",
          text: datos.riesgo_adicionals,
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Entiendo que para esta cirugía se necesita anestesia, la cual se evaluará y realizará por el servicio de anestesia.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "Entiendo que, si es necesario extraer algún tejido, se someterá a estudio anatomopatológico posterior, siendo mi deber reclamar el resultado e informarlo al médico.",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: "He entendido las condiciones y objetivo de la cirugía que se me va a practicar, los cuidados que debo tener antes y después de ella, estoy satisfecha con la información recibida del médico tratante quien lo ha hecho en un lenguaje claro y sencillo, y me ha dado la oportunidad de preguntar y resolver las dudas a satisfacción, además comprendo y acepto el alcance y los riesgos justificados de posible previsión que conlleva el procedimiento quirúrgico que aquí autorizo. En tales condiciones consiente que se me realice cirugía.",
        },
      ],
    };
  }
  function autorizaAcompPaci() {
    if (!datos.acomp.cod) {
      return {
        marginTop: 10,
        alignment: "justify",
        text: [
          { style: "bodyNoBold9", text: "Yo, " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip.trim() },
          { style: "bodyNoBold9", text: "identifcado(a) con, " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.tipo_id + "  " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.cod.trim() + "." },
        ],
      };
    } else {
      return {
        marginTop: 10,
        alignment: "justify",
        text: [
          { style: "bodyNoBold9", text: "Yo, " },
          { bold: true, style: "bodyNoBold9", text: datos.acomp.descrip.trim() + "," },
          { style: "bodyNoBold9", text: " identifcado(a) con " },
          { bold: true, style: "bodyNoBold9", text: datos.acomp.tipo_id.trim() },
          { style: "bodyNoBold9", text: " " },
          { bold: true, style: "bodyNoBold9", text: datos.acomp.cod.trim() + "," },
          { style: "bodyNoBold9", text: " en calidad de familiar y/o acompañante responsable del paciente " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.descrip.trim() + "," },
          { style: "bodyNoBold9", text: " identifcado(a) con " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.tipo_id.trim() },
          { style: "bodyNoBold9", text: " " },
          { bold: true, style: "bodyNoBold9", text: datos.paciente.cod.trim() + "." },
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
