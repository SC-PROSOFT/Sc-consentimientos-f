import { evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";
import { useModuleFormatos, useApiContabilidad } from "@/store";
const { getAcomp, getEmpresa } = useModuleFormatos();
const { getImgBs64 } = useApiContabilidad();
export const impresionODO011 = ({ datos }) => {
  var dd = {
    stack: [contenidoConsenGeneral(), firmas()],
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

  function contenidoConsenGeneral() {
    return {
      stack: [
        {
          marginTop: 3,
          alignment: "left",
          style: "bodyNoBold9",
          text: [
            { bold: true, text: "Fecha: " },
            {
              text: datos.fecha,
            },
            { bold: true, text: " Hora: " },
            {
              text: datos.hora,
            },
            { bold: true, text: " Sede: " },
            {
              text: getEmpresa.nomusu,
            },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            { text: "Yo; " },
            {
              bold: true,
              text: datos.paciente.descrip,
            },
            { text: " identificado (a) con: " },
            {
              bold: true,
              text: datos.paciente.tipo_id,
            },
            { text: " N°.: " },
            {
              bold: true,
              text: datos.paciente.cod + ".",
            },
            {
              text: " Declaro que comprendo que dentro de la atención programada para SALUD ORAL, se incluyen algunos de los siguientes procedimientos, que he sido informado de los riesgos relacionados, como paciente o como acudiente, entiendo la necesidad de realizar algunos exámenes complementarios e interconsultas con otras especialidades que se requieran, cumplir con los controles y cuidados, acepto que de ser necesario en algunos casos, se puede recurrir a técnicas de inmovilización física que puede derivar de forma involuntaria, rasguños, laceraciones o hematomas, entiendo de que no seguir las indicaciones del profesional, el plan de tratamiento descrito inicialmente, podría cambiar. Comprendo que puedo revocar mi decisión en cualquier momento.",
            },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          alignment: "justify",
          table: {
            widths: ["80%", "20%"],
            body: [
              [
                {
                  text: [
                    {
                      text: "APLICACIÓN DE ANESTESIA LOCAL: ",
                      bold: true,
                    },
                    {
                      text: "Se me ha informado que notaré una sensación de entumecimiento del labio, lengua o de otras zonas de la cara que normalmente desaparecerá entre dos y cuatro horas. Aunque no tenga alergias o hipersensibilidad, en algunos casos se pueden originar leves alteraciones del pulso. También se me ha explicado que en el punto de inyección puede sentirse una cierta dificultad en los movimientos de apertura de boca, generalmente transitoria, que en casos menos frecuentes puede provocar sincope o fibrilación ventricular, que deben tratarse posteriormente.",
                    },
                  ],
                },
                {
                  text: [
                    { bold: true, text: "SI " },
                    {
                      bold: true,
                      text: datos.aplica_anest_local == "S" ? "( X )" : "(   )",
                    },
                    {
                      bold: true,
                      text: "  NO ",
                    },
                    {
                      bold: true,
                      text: datos.aplica_anest_local == "N" ? " ( X ) " : "(   )",
                    },
                  ],
                  alignment: "center",
                  margin: [0, 25, 0, 10],
                },
              ],
              [
                {
                  text: [
                    {
                      bold: true,
                      text: "EXTRACCION DE DIENTES: ",
                    },
                    {
                      text: "Me han sido explicadas alternativas adicionales para no extraer los dientes (tratamiento de conductos, coronas) en dientes con pronóstico favorable. Sin embargo de lo anterior autorizo la extracción de los siguientes",
                    },
                    {
                      bold: true,
                      text: " dientes: ",
                    },
                    {
                      bold: true,
                      text: datos.nro_dient_extrac,
                    },
                    {
                      text: " comprendo que es posible que el estado inflamatorio del diente que se me va a extraer pueda producir un proceso infeccioso, que puede requerir tratamiento con antibióticos y/o antiinflamatorios; que puede haber hemorragia, además existe el riesgo de fractura dental, heridas en la mucosa de la mejilla o en la lengua durante el procedimiento, en algunos casos puede presentar parestesia o parálisis, comunicación oroantral, posibilidad de requerir procedimientos adicionales o diferentes a lo previsto incluyendo la decisión de no continuar con el procedimiento, acepto los cuidados postquirúrgicos que me indique el profesional y lo eximo de cualquier eventualidad como consecuencia de mal autocuidado.",
                    },
                  ],
                },
                {
                  text: [
                    { bold: true, text: "SI " },
                    {
                      bold: true,
                      text: datos.extrac_dient == "S" ? "( X )" : "(   )",
                    },
                    {
                      bold: true,
                      text: "  NO ",
                    },
                    {
                      bold: true,
                      text: datos.extrac_dient == "N" ? " ( X ) " : "(   )",
                    },
                  ],
                  alignment: "center",
                  margin: [0, 45, 0, 10],
                },
              ],
              [
                {
                  text: [
                    {
                      bold: true,
                      text: "PULPOTOMIA O PULPECTOMIA: ",
                    },
                    {
                      text: "Comprendo que la pulpotomía y pulpectomía es un procedimiento como alternativa para salvar mi diente, entiendo que es la preparación temporal para realizar posteriormente un tratamiento de conducto realizado por un especialista, existe el riesgo de necesitarse retratamiento o cirugía periapical posteriormente. Es posible que después del tratamiento, en algunos casos el diente cambie de color y se oscurezca ligeramente o que se debilite y tienda a fracturarse, por lo que puede ser necesario realizarle procedimientos adicionales a lo previsto, entiendo que durante la preparación exista perforaciones, fractura de instrumentos en el canal radicular y sobre paso de material en la zona peri radicular, dolor persistente lo cual requerirá re instrumentación, además entiendo que de no terminar por completo el tratamiento de conducto y la restauración del diente por completo, el diente requerirá extraerse. pronóstico favorable.",
                    },
                    {
                      bold: true,
                      text: " Dientes: ",
                    },
                    {
                      bold: true,
                      text: datos.nro_dient_pulpect,
                    },
                  ],
                },
                {
                  text: [
                    { bold: true, text: "SI " },
                    {
                      bold: true,
                      text: datos.pulpot_pulpect == "S" ? "( X )" : "(   )",
                    },
                    {
                      bold: true,
                      text: "  NO ",
                    },
                    {
                      bold: true,
                      text: datos.pulpot_pulpect == "N" ? " ( X ) " : "(   )",
                    },
                  ],
                  alignment: "center",
                  margin: [0, 45, 0, 10],
                },
              ],
              [
                {
                  text: [
                    {
                      bold: true,
                      text: "OPERATORIA DENTAL: (RESINAS Y IONOMEROS): ",
                    },
                    {
                      text: "Se me ha explicado que el tratamiento consiste en restaurar los dientes incompletos ya sea por fractura, caries, desgastes, malformaciones y proteger la pulpa dental o tratamiento de conducto. Se me ha explicado que es posible la aparición de una mayor sensibilidad, que normalmente desaparecerá de modo espontáneo y que puede cambiar un poco la forma y el color del diente, soy consiente de que durante el procedimiento podría presentar laceraciones en la encía, exposición pulpar, hipersensibilidad, daño de dientes adyacentes, fracturas, dolor a la masticación, entiendo que podría requerirse aplicación de anestesia local antes o durante el procedimiento acetando sus riesgos descritos en este documento.",
                    },
                    {
                      bold: true,
                      text: " Dientes: ",
                    },
                    {
                      bold: true,
                      text: datos.nro_opera_dental,
                    },
                  ],
                },
                {
                  text: [
                    { bold: true, text: "SI " },
                    {
                      bold: true,
                      text: datos.operat_dental == "S" ? "( X )" : "(   )",
                    },
                    {
                      bold: true,
                      text: "  NO ",
                    },
                    {
                      bold: true,
                      text: datos.operat_dental == "N" ? " ( X ) " : "(   )",
                    },
                  ],
                  alignment: "center",
                  margin: [0, 35, 0, 10],
                },
              ],
              [
                {
                  text: [
                    {
                      bold: true,
                      text: "DETARTRAJE: ",
                    },
                    {
                      text: "El detartraje tiene por objeto la eliminación de los cálculos. Comprendo que se puede producir inflamación, dolor o se pueden lacerar las mucosas. También se me ha explicado que es posible sentir temporalmente un aumento en la sensibilidad y en la movilidad de mis dientes, puede sentir se podrá sentir nauseas.",
                    },
                  ],
                },
                {
                  text: [
                    { bold: true, text: "SI " },
                    {
                      bold: true,
                      text: datos.detartraje == "S" ? "( X )" : "(   )",
                    },
                    {
                      bold: true,
                      text: "  NO ",
                    },
                    {
                      bold: true,
                      text: datos.detartraje == "N" ? " ( X ) " : "(   )",
                    },
                  ],
                  alignment: "center",
                  margin: [0, 15, 0, 10],
                },
              ],
              [
                {
                  text: [
                    {
                      bold: true,
                      text: "PROFILAXIS: ",
                    },
                    {
                      text: " Para eliminar o remover película de placa bacteriana con ayuda del cepillo/copa de caucho, y/o pasta dental, diente por diente, donde el riesgo de un daño abrasivo que puede causar durante la limpieza dental es mínimo, acepto que puede lacerar las mucosas, sangrado, nauseas.",
                    },
                  ],
                },
                {
                  text: [
                    { bold: true, text: "SI " },
                    {
                      bold: true,
                      text: datos.profilaxis == "S" ? "( X )" : "(   )",
                    },
                    {
                      bold: true,
                      text: "  NO ",
                    },
                    {
                      bold: true,
                      text: datos.profilaxis == "N" ? " ( X ) " : "(   )",
                    },
                  ],
                  alignment: "center",
                  margin: [0, 10, 0, 5],
                },
              ],
              [
                {
                  text: [
                    {
                      bold: true,
                      text: "APLICACIÓN DEL BARNIZ DE FLUOR: ",
                    },
                    {
                      text: "Es una barrera o película protectora en todas las superficies de los dientes con una sustancia llamada barniz de fluoruro, cuya aplicación es segura y sencilla, que no genera ningún tipo de lesión ni daño en los tejidos, nauseas.",
                    },
                  ],
                },
                {
                  text: [
                    { bold: true, text: "SI " },
                    {
                      bold: true,
                      text: datos.aplic_barniz_fluor == "S" ? "( X )" : "(   )",
                    },
                    {
                      bold: true,
                      text: "  NO ",
                    },
                    {
                      bold: true,
                      text: datos.aplic_barniz_fluor == "N" ? " ( X ) " : "(   )",
                    },
                  ],
                  alignment: "center",
                  margin: [0, 10, 0, 5],
                },
              ],
              [
                {
                  text: [
                    {
                      bold: true,
                      text: "APLICACIÓN DE SELLANTES: ",
                    },
                    {
                      text: "Comprendo que el profesional aplicara una barrera o película protectora en las superficies de los dientes cuya aplicación es segura y sencilla, los cuales no generan ningún tipo de lesión  ni daño en los tejidos, es posible sensación de nauseas.",
                    },
                  ],
                },
                {
                  text: [
                    { bold: true, text: "SI " },
                    {
                      bold: true,
                      text: datos.aplic_sellante == "S" ? "( X )" : "(   )",
                    },
                    {
                      bold: true,
                      text: "  NO ",
                    },
                    {
                      bold: true,
                      text: datos.aplic_sellante == "N" ? " ( X ) " : "(   )",
                    },
                  ],
                  alignment: "center",
                  margin: [0, 10, 0, 0],
                },
              ],
            ],
          },
        },
        {
          pageBreak: "before",
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          table: {
            headerRows: 1,
            widths: ["100%"],
            body: [
              [
                {
                  text: [
                    { bold: true, text: "CONSENTIMIENTO / DISENTIMIENTO: " },

                    { text: "De forma libre e informada, " },
                    { bold: true, text: " AUTORIZO " },
                    {
                      text: { bold: true, decoration: "underline", text: datos.autorizo ? " X " : "    " },
                    },
                    { bold: true, text: " NO AUTORIZO " },
                    {
                      text: { bold: true, decoration: "underline", text: !datos.autorizo ? " X " : "    " },
                    },
                    {
                      text: " al personal asistencial de la entidad, para que, en ejercicio legal de su profesión y de acuerdo con los procedimientos establecidos, se practique el procedimiento/s relacionado/s anteriormente.",
                    },
                  ],
                },
              ],
            ],
          },
        },
      ],
    };
  }

  function autorizoCheck() {
    if (datos.autorizo) {
      return {
        marginTop: 10,
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
                    text: "Autorizo ",
                    bold: true,
                    decoration: "underline",
                  },
                  {
                    text: `al personal asistencial de la ${datos.empresa.nomusu}, para la realización de los procedimientos de salud: ${datos.procedimiento}, cuyo objetivo es: ${datos.objetivo}, ante el diagnostico ${datos.descrip_enfer}`,
                  },
                ],
                alignment: "justify",
                style: "bodyNoBold",
              },
            ],
            [{}, {}],
          ],
        },
      };
    } else {
      return {
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
                    text: "Expreso mi voluntad de ",
                  },
                  {
                    text: "revocar",
                    bold: true,
                    decoration: "underline",
                  },
                  {
                    text: ` el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento de: GENERAL PYP OK \npor los siguientes motivos: ${datos.revocar_motivos}`,
                  },
                ],
                alignment: "justify",
                style: "bodyNoBold",
              },
            ],
            [
              {
                marginTop: -2,
                colSpan: 2,
                text: "",
                alignment: "justify",
                style: "bodyNoBold",
              },
              {},
            ],
          ],
        },
      };
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
        //   width: 130,
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
          height: 70,
        },
        {
          marginTop: 9,
          marginLeft: 2,
          image: "huella_acomp",
          width: 50,
          height: 65,
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

  function firmas() {
    let firmasArray = [];
    let anchos = ["40%"];
    let tamanoFirmasArray = 0;

    if (datos.firmas.firma_acomp || datos.firmas.huella_acomp) {
      firmasArray.push(firmaAcompanante(datos.firmas.huella_acomp, tamanoFirmasArray));
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
