import { evaluarParentesco } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getEmpresa } = useModuleFormatos();
export const impresionHIC075 = ({ datos }) => {
  console.log("impresionHIC075  ", datos);

  var dd = {
    stack: [contenidoHIC075(), firmas()],
  };
  function contenidoHIC075() {
    return {
      stack: [
        {
          marginTop: 8,
          table: {
            widths: ["auto", "*", "auto", "*", "auto", "*"],
            body: [
              [
                { text: "N° Historia: ", bold: true, style: "bodyNoBold9" },
                { text: datos.llave, style: "bodyNoBold9" },
                { text: "Fecha:", bold: true, style: "bodyNoBold9" },
                { text: datos.fecha, style: "bodyNoBold9" },
                { text: "La señora (Nombre y apellidos):", bold: true, style: "bodyNoBold9" },
                { text: datos.paciente.descrip, style: "bodyNoBold9" },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 1,
          table: {
            widths: ["auto", "*", "auto", "*", "auto", "*"],
            body: [
              [
                { text: "Tipo documento de identidad:", bold: true, style: "bodyNoBold9" },
                { text: datos.paciente.tipo_id, style: "bodyNoBold9" },
                { text: "N°:", bold: true, style: "bodyNoBold9" },
                { text: datos.paciente.cod, style: "bodyNoBold9" },
                { text: "Con domicilio en:", bold: true, style: "bodyNoBold9" },
                { text: datos.paciente.direccion, style: "bodyNoBold9" },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 5,
          bold: true,
          alignment: "left",
          text: "En caso de Incapacidad de consentir",
          style: "bodyNoBold9",
        },
        {
          marginTop: 1,
          table: {
            widths: ["auto", "*", "auto", "*", "auto", "*"],
            body: [
              [
                { text: "El Señor (a): ", bold: true, style: "bodyNoBold9" },
                { text: datos.acomp.descrip, style: "bodyNoBold9" },
                { text: "Tipo documento de identidad:", bold: true, style: "bodyNoBold9" },
                { text: datos.acomp.cod, style: "bodyNoBold9" },
                { text: "Con domicilio en:", bold: true, style: "bodyNoBold9" },
                { text: datos.acomp.direccion, style: "bodyNoBold9" },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 1,
          table: {
            widths: ["auto", "*"],
            body: [
              [
                { text: "Con domicilio en: ", bold: true, style: "bodyNoBold9" },
                { text: datos.acomp.direccion, style: "bodyNoBold9" },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 10,
          bold: true,
          alignment: "center",
          text: "DECLARO",
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          text: [
            { style: "bodyNoBold9", text: " Que " },
            { style: "bodyNoBold9", text: "(NOMBRE Y APELLIDOS DEL PROFESIONAL QUE PROPORCIONA LA INFORMACIÓN) " },
            { bold: true, style: "bodyNoBold9", text: datos.prof.descrip },
          ],
        },
        {
          marginTop: 10,
          text: [
            {
              style: "bodyNoBold9",
              text: "1. Me ha informado de los métodos anticonceptivos disponibles, de sus ventajas e inconvenientes, tras lo cual y para mi situación, mi elección es la colocación de un Dispositivo Intrauterino (DIU), del modelo T Cu 380 A. \n",
            },
            { bold: true, style: "bodyNoBold9", text: "El DIU es un dispositivo " },
            {
              bold: true,
              style: "bodyNoBold9",
              text: " que se coloca dentro del útero ",
            },
            {
              style: "bodyNoBold9",
              text: "con fines anticonceptivos. \n ",
            },
            {
              style: "bodyNoBold9",
              text: "La colocación del DIU y del modelo será indicado en consulta ambulatoria por PERSONAL CALIFICADO, que me indicará los controles posteriores a los que me debo someter, así como la duración del mismo. \n",
            },
          ],
        },
        {
          marginTop: 10,
          text: [
            {
              bold: true,
              style: "bodyNoBold9",
              text: "2. Complicaciones y/o riesgos y fracasos: \n",
            },
            {
              style: "bodyNoBold9",
              text: "a. En el momento de la inserción: \n",
            },
          ],
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          ul: [
            { text: "Dolor." },
            { text: "Perforación uterina (1 a 7 por cada 1.000)" },
            {
              text: "Infección en un período menor de un mes, pasado este período de tiempo la infección se debe a otras causas y no a la colocación del DIU.",
            },
            { text: "Sangrado genital" },
          ],
        },
        {
          bold: true,
          alignment: "left",
          text: "b. En la evolución:",
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          ul: [
            {
              text: "Gestación (1-3%), si ésta se produce, existe un mayor riesgo de aborto y de embarazo ectópico. La tasa real de fracaso como método anticonceptivo es mayor en el 1º año, entre 1-3%.",
            },
            {
              text: "Descenso y expulsión, puede ser asintomático o cursar con dolor o sangrado genital. Esto suele producirse en el primer mes de uso.",
            },
            { text: "Alteraciones menstruales: aumento de la cantidad y/o duración del sangrado menstrual, manchado intermenstrual." },
            { text: "Dolor." },
            { text: "Migración a cavidad abdominal con la posibilidad de complicaciones subsiguientes." },
          ],
        },
        {
          bold: true,
          alignment: "left",
          text: "c. En su extracción:",
          style: "bodyNoBold9",
        },
        {
          alignment: "justify",
          style: "bodyNoBold9",
          ul: [
            { text: "Pérdida de referencia de los hilos y la rotura con retención de un fragmento." },
            {
              text: "En caso de producirse alguna de estas complicaciones seré enviada al médico ginecólogo quien me indicará la necesidad de someterme a las pruebas o tratamientos complementarios necesarios, que pueden ser: extracción en algunos casos de mala tolerancia. gestación o infección, tratamiento antibiótico, laparoscopía o microlaparotomía en caso de perforación o embarazo ectópico, histeroscopía en caso de pérdida de referencia de hilos o retención de fragmentos, etc.",
            },
          ],
        },
        {
          alignment: "justify",
          marginTop: 10,
          text: [
            {
              bold: true,
              style: "bodyNoBold9",
              text: "3. He comprendido ",
            },
            {
              style: "bodyNoBold9",
              text: "las explicaciones que se me han dado en un lenguaje claro y sencillo, y el profesional que me ha atendido me ha permitido realizar todas las observaciones y ",
            },
            {
              bold: true,
              style: "bodyNoBold9",
              text: "me ha aclarado",
            },
            {
              style: "bodyNoBold9",
              text: "todas las dudas que le he planteado. \n",
            },
            {
              style: "bodyNoBold9",
              text: "También comprendo que, en cualquier momento y sin necesidad de dar ninguna explicación, ",
            },
            {
              bold: true,
              style: "bodyNoBold9",
              text: "puedo revocar",
            },
            {
              style: "bodyNoBold9",
              text: "el consentimiento que ahora presto.",
            },
            {
              text: "\n",
            },
            {
              style: "bodyNoBold9",
              text: "Por ello, manifiesto que estoy ",
            },
            {
              decoration: "underline",
              bold: true,
              style: "bodyNoBold9",
              text: "satisfecha ",
            },
            {
              style: "bodyNoBold9",
              text: "con la información recibida y que ",
            },
            {
              decoration: "underline",
              bold: true,
              style: "bodyNoBold9",
              text: "comprendo  ",
            },
            {
              style: "bodyNoBold9",
              text: "el alcance y los riesgos del procedimiento.",
            },
          ],
        },
        {
          marginTop: 10,
          alignment: "left",
          text: "Y en tales condiciones",
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          bold: true,
          alignment: "center",
          text: "CONSIENTO",
          style: "bodyNoBold9",
        },
        {
          marginTop: 10,
          style: "bodyNoBold9",
          text: [
            { text: "Que se me realice la colocación de un Dispositivo Intrauterino (DIU) modelo T Cu 380 A \n " },
            { text: "En (LUGAR Y FECHA) " },
            { bold: true, text: getEmpresa.nomusu },
            { text: " " },
            { bold: true, text: datos.fecha },
          ],
        },
        revocacion(),
      ],
    };
  }
  function revocacion() {
    if (datos.autorizo) {
      return {
        stack: [
          {
            pageBreak: "before",
            text: "",
          },
        ],
      };
    } else {
      return {
        stack: [
          {
            pageBreak: "before",
            marginTop: 10,
            bold: true,
            alignment: "center",
            text: "REVOCACIÓN",
            style: "bodyNoBold9",
          },
          {
            alignment: "justify",
            marginTop: 8,
            style: "bodyNoBold9",
            text: [
              { text: "Yo, " },
              { bold: true, text: datos.paciente.descrip },
              { text: "Tipo documento de identidad:" },
              { bold: true, text: datos.paciente.tipo_id },
              { text: "N° " },
              { bold: true, text: datos.paciente.cod },
              { text: "expedida en " },
              { bold: true, text: datos.paciente.descrip_ciudad },
              { text: " con domicilio en " },
              { bold: true, text: datos.paciente.direccion },
              { bold: true, text: ", REVOCO " },
              { text: " el consentimiento prestado en fecha " },
              { bold: true, text: datos.fecha },
              { text: " y no deseo proseguir el procedimiento propuesto, que doy con esta fecha por finalizado." },
            ],
          },
          {
            marginTop: 8,
            style: "bodyNoBold9",
            text: [{ text: "En (LUGAR Y FECHA) " }, { text: getEmpresa.nomusu }, { text: " " }, { text: datos.fecha }],
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
