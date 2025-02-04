import { evaluarParentesco, calcularEdad } from "@/formatos/utils";
import { useModuleFormatos } from "@/store";

const { getPaci } = useModuleFormatos();

export const impresionHIC055 = ({ datos }) => {
  console.log("impresionHIC055 ", datos);
  var dd = {
    stack: [contenidoHIC055(), firmas()],
  };

  function contenidoHIC055() {
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
                    { bold: true, style: "tableTitle", text: "Nombre del paciente: " },
                    { style: "bodyNoBold9", text: datos.paciente.descrip },
                  ],
                },
                {
                  alignment: "right",
                  text: [
                    { bold: true, style: "tableTitle", text: "Identificación: " },
                    { style: "bodyNoBold9", text: datos.paciente.cod },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
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
                    { bold: true, style: "tableTitle", text: "EPS: " },
                    { style: "bodyNoBold9", text: datos.paciente.descrip_eps },
                  ],
                },
              ],
            ],
          },
          layout: "noBorders",
        },
        {
          marginTop: 8,
          bold: true,
          alignment: "left",
          text: "Objetivo:",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          text: "Dar a conocer a los visitantes de los pacientes hospitalizados los horarios y normas para recepción de visitas y llamadas para los usuarios hospitalizados.",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          bold: true,
          alignment: "left",
          text: "Condiciones Generales:",
          style: "bodyNoBold9",
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          ul: [
            "Los pacientes se podrán comunicar por celular (1) vez a la semana en horario diurno siempre y cuando se tenga autorizada por condición clínica esta actividad. Se hará 1 llamada al número autorizado, teniendo en cuenta la unidad donde se encuentre el paciente y el cronograma interno.",
            "No se permitirán las video llamadas, ni las fotografías dentro de la institución.",
            "Las llamadas que el paciente realiza serán para el acudiente Responsable o familiar registrado y autorizado.",
            "Solo tendrá autorizado una sola llamada de 3 minutos a un solo familiar, si el paciente ya realizo la llamada al primer familiar y fue optima no podrá llamar a ningún otro número.",
            "Si el paciente se torna hostil, o ansioso, o con llanto fácil, o con cambios de ánimos considerables en el momento de la llamada o visita, enfermería suspenderá la actividad.",
            "Las visitas serán los días martes y jueves de 2:00 pm a 4:00 pm y sábados  de 9:00 am a 11:00 am.",
            "Las visitas son de máximo dos (2) familiares por paciente y en caso de ser menor de 12 AÑOS o por autorización médica recibirá visitas fuera del horario establecido.",
            "Los pacientes que tengan visitas permitidas, pero por su estado clínico no sea posible, no se les autorizara visita hasta que mejore su estado.",
            "NO traer recipientes en vidrio.",
            "NO ingresar cigarrillos, bebidas alcohólicas ni sustancias psicoactivas.",
            "NO ingresar bebidas oscuras (chocolate, tinto, gaseosas negras).",
            "NO ingresar fósforos o mecheras.",
            "NO ingresar ningún objeto corto punzante, (tijeras, navajas, cortaúñas, bisturí, agujas, etc.).",
            "NO se le dejara al paciente medios electrónicos como: celular, Tablet, portátiles, iPod, etc. Los familiares y/o acompañantes no podrán suministrar estos elementos a los pacientes durante el tiempo de visita.",
            "NO ingresar animales o algún tipo de mascota.",
            "NO entregar directamente al paciente ningún elemento, se debe entregar primero a enfermería.",
            "Los pacientes NO podrán manejar dinero dentro de la institución.",
            "Si tiene alguna Queja, Petición, Reclamo o Felicitación puede llenar el formato que se encuentra en el buzón de sugerencias, hacerlo de forma verbal, al correo electrónico, por la página web, o telefónicamente según su preferencia.",
            "Si le ingresan alimentos debe ser en recipientes de icopor o plástico.",
            "Se da conocer al paciente y familiares el manual de derechos y deberes de la IPS Monte Sinaí explicándole cada uno de los items establecidos.",
          ],
        },

        {
          marginTop: 8,
          alignment: "justify",
          text: "Se firma en constacia de haber entendido y aceptado la información contenida en la presente guía.",
          style: "bodyNoBold9",
        },
        textoDisentimiento(datos.disentimiento, datos.acompa_disenti),
      ],
      styles: {
        bodyContent: {
          fontSize: 11,
          alignment: "justify",
        },
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
  function textoDisentimiento(disentimiento, acompa_disenti) {
    const textAcompa = `Yo ${datos.acomp.descrip}, identificado(a) con el documento de identidad número ${datos.acomp.cod}, en calidad de acudiente de ${datos.paciente.descrip} , identificada (o) con el documento de identidad número ${datos.paciente.cod}, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;
    const textPacient = `Yo ${datos.paciente.descrip}, identificado(a) con el documento de identidad número ${datos.paciente.cod}, en calidad de paciente, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;

    const textoDisentimiento = {
      marginTop: 5,
      table: {
        widths: ["auto", 170],
        body: [
          [
            {
              colSpan: 2,
              text: "DISENTIMIENTO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {},
          ],
          [
            {
              marginLeft: 3,
              marginTop: 5,
              marginRight: 3,
              stack: [
                {
                  text: acompa_disenti == "S" ? textAcompa : textPacient,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {
                  marginTop: 5,
                  text: [
                    {
                      text: "Observaciones:",
                      bold: true,
                    },
                    {
                      text: `${datos.obser_disenti}`,
                    },
                  ],
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            },
            {
              stack: [
                {
                  text: "RESPONSABLE DISENTIMIENTO",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
                {
                  marginTop: 5,
                  alignment: "center",
                  image: "firma_disentimiento",
                  width: 140,
                  height: 70,
                },
                {
                  marginTop: 5,
                  columns: [
                    {
                      width: 48,
                      text: "NOMBRE:",
                      bold: true,
                    },
                    {
                      width: "*",
                      text: `${acompa_disenti == "S" ? datos.acomp.descrip : datos.paciente.descrip}`,
                    },
                  ],
                  style: "tableTitle",
                },
                {
                  text: [
                    {
                      text: "DOC. IDENT: ",
                      bold: true,
                    },
                    {
                      text: `${acompa_disenti == "S" ? datos.acomp.cod : datos.paciente.cod}`,
                    },
                  ],
                  style: "tableTitle",
                },
              ],
            },
          ],
        ],
      },
    };

    if (disentimiento == "S") return textoDisentimiento;
    else return null;
  }
  return dd;
};
