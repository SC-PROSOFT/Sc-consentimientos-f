import { calcularEdad, evaluarParentesco } from "@/formatos/utils";
export const impresionODO015 = ({ datos }) => {
  console.log("impresionODO015 -> ", datos);

  var dd = {
    stack: [contenidoODO015(), firmas()],
  };
  function contenidoODO015() {
    return {
      stack: [
        {
          marginTop: 15,
          alignment: "center",
          style: "bodyNoBold9",
          bold: true,
          text: "CONSENTIMIENTO INFORMADO EN PROCEDIMIENTOS ODONTOLOGICOS",
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "La Ley 35 de 1889 en su Articulo 5°, establece como buena práctica profesional por parte del Odontólogo, el deber de informar al paciente de los riesgos, incertidumbres y demás circunstancias que puedan comprometer el buen resultado del tratamiento que le sea practicado. Con el presente documento, se pretende informar acerca del procedimiento que se le practicara. Por lo tanto, solicitamos leer y diligenciar el documento para su ",
            },
            { alignment: "justify", style: "bodyNoBold9", bold: true, text: "AUTORIZACION" },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: " y ",
            },
            { alignment: "justify", style: "bodyNoBold9", bold: true, text: "APROBACION" },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: " del procedimiento a realizar.",
            },
          ],
        },
        {
          marginTop: 13,
          style: "bodyNoBold9",
          columns: [
            { width: "30%", alignment: "left", text: [{ bold: true, text: "Fecha: " }, { text: datos.fecha }] },
            { width: "30%", alignment: "right", text: [{ bold: true, text: "Hora: " }, { text: datos.hora }] },
            { width: "40%", alignment: "right", text: [{ bold: true, text: "Doctor: " }, { text: datos.doctor }] },
          ],
        },
        {
          marginTop: 10,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            {
              alignment: "justify",
              bold: true,
              style: "bodyNoBold9",
              text: "Nombres y apellidos del paciente: ",
            },
            { alignment: "justify", style: "bodyNoBold9", text: datos.paciente.descrip },
          ],
        },
        {
          marginTop: 5,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            {
              alignment: "justify",
              bold: true,
              style: "bodyNoBold9",
              text: "Documento de identidad: ",
            },
            { alignment: "justify", style: "bodyNoBold9", text: datos.paciente.tipo_id },
            {
              alignment: "justify",
              bold: true,
              style: "bodyNoBold9",
              text: " Numero: ",
            },
            { alignment: "justify", style: "bodyNoBold9", text: datos.paciente.cod },
          ],
        },
        datosAcomp(),
        {
          marginTop: 13,
          style: "bodyNoBold9",
          columns: [
            { width: "50%", alignment: "left", text: [{ bold: true, text: "Diente(s) a tratar: " }, { text: datos.dientes1 }] },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Procedimiento a realizar: " }, { text: datos.procedimiento1 }] },
          ],
        },
        {
          marginTop: 13,
          style: "bodyNoBold9",
          columns: [
            { width: "50%", alignment: "left", text: [{ bold: true, text: "Diente(s) a tratar: " }, { text: datos.dientes2 }] },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Procedimiento a realizar: " }, { text: datos.procedimiento2 }] },
          ],
        },
        {
          marginTop: 13,
          style: "bodyNoBold9",
          columns: [
            { width: "50%", alignment: "left", text: [{ bold: true, text: "Diente(s) a tratar: " }, { text: datos.dientes3 }] },
            { width: "50%", alignment: "right", text: [{ bold: true, text: "Procedimiento a realizar: " }, { text: datos.procedimiento3 }] },
          ],
        },
        {
          marginTop: 13,
          style: "bodyNoBold9",
          bold: true,
          text: "Adicional se me ha informado, explicado los riesgos y beneficios del procedimiento:",
        },
        {
          marginTop: 8,
          style: "bodyNoBold9",
          ul: [
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: [
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "PROCEDIMIENTO PROMOCION Y PREVENCION ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "(EDUCACION, CONTROL DE PLACA, PROFILAXIS, DETARTRAJE, SELLANTES, APLICACIÓN DE BARNIRZ DE FLUOR). \n",
                },
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "BENEFICIOS: ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Procedimientos y acciones que nos ayudan a prevenir y tratar las enfermedades bucales.  \n",
                },
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "RIESGOS Y COMPLICACIONES: ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Probabilidad de: Sangrado, Movilidad dental-Retracción gingival, sensibilidad.",
                },
              ],
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: [
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "PROCEDIMIENTO ANESTESIA: \n",
                },
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "BENEFICIOS: ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Se ha explicado que el tratamiento que se va a realizar se efectuara sobre anestesia local. Su finalidad es bloquear, de forma reversible, la transmisión de los impulsos nerviosos, para poder realizar la intervención sin dolor, se ha informado que notará una sensación de endurecimiento del labio, lengua, o de la zona de la cara y que normalmente desaparecerá entre dos a cuatro horas.\n",
                },
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "RIESGOS Y COMPLICACIONES: ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "- Infección. - Dolor posterior en el sitio de aplicación. - Laceración de un nervio. vaso sanguíneo, u otro tejido blando, - Efectos anestésicos en otros sitios. EJEMPLOS: Parpados, equimosis (morado), isquemia, necrosis de la membrana mucosa, parestesia temporal transitoria o definitiva, error en la técnica de aplicación, aumento de la presión arterial, arritmia y fractura de la aguja.",
                },
              ],
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: [
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "PROCEDIMIENTO OPERATORIA DENTAL: \n",
                },
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "BENEFICIOS: ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Es la intervención sobre el diente en cualquiera de sus superficies, en ocasiones eliminando parte de la estructura dentaria con el fin de remover la caries o restauraciones (calzas) y prepararlo para la restauración definitiva. Para este procedimiento se utilizan en la mayoría de los casos instrumentos metálicos que son operados por la fuerza del odontólogo, electricidad o aire. Posterior a la instrumentación se dejan materiales para reemplazar las partes afectadas de los dientes (calza), estos materiales son compatibles con los tejidos de la boca y en algunas ocasiones su color no es igual al del diente natural.\n",
                },
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "RIESGOS Y COMPLICACIONES: ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Sangrado de la encía o del nervio si la caries compromete cámara pulpar, - Laceraciones involuntarias de los tejidos blandos con los instrumentos o quemaduras con materiales líquidos, -Fractura de la corona del diente (se parte las paredes del diente), - Cambio de color del diente, - Dolor transitorio, sensibilidad o dolor permanente si presenta restauración desalojada o desadaptada y hay filtración de bacterias al nervio dental .- Desalojo de la restauración, - Cambio de color de la restauración, - Necesidad posterior de tratamiento de conducto, - Molestia en la oclusión (mordida), - Ingestión de algún instrumento de trabajo.\n",
                },
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "TRATAMIENTOS ALTERNOS: ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Rehabilitación oral, Exodoncia. Estos se remitirán a especialidades odontológicas.",
                },
              ],
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: [
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "PROCEDIMIENTO ENDODONCIA: \n",
                },
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "BENEFICIOS: ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Consiste en la remoción del nervio del diente, preparación del conducto con diferentes instrumentos para ampliar la luz del conducto y posterior relleno con material que selle.\n",
                },
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "RIESGOS Y COMPLICACIONES: ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Endodoncia con la longitud alterada de acuerdo con condiciones específicas de cada diente (sobrepaso de material o longitud corta), Perdida del diente por comunicaciones involuntarias entre los conductos y el tejido de soporte, - Infección, - Edema (hinchazón), - Dolor temporal o prolongado. durante o después del procedimiento, - Debilitamiento de la estructura del diente por la apertura y la falta de hidratación, - Sangrado durante la instrumentación del conducto, - Laceraciones involuntarias con los instrumentos y fractura del diente al colocar la grapa (se parte) en ocasiones necesitando corona, - Cambio de color del diente, - Desalojo de la restauración temporal y contaminación del tratamiento que conlleva a cirugía apical posterior al tratamiento, - Ruptura del instrumento dentro del conducto, - ingestión de algún liquido o elemento del trabajo, - Repetición del procedimiento por lesión recurrente, los tratamientos son de medios y no de resultados - Quemaduras en los tejidos blandos con los instrumentos de recorte, - Accidente por hipoclorito, puede presentarse por el sobrepaso del irrigante a los tejidos periapicales ya sea durante la irrigación de los conductos radiculares o por medio de la inyección accidental en los tejidos blandos - Molestias, irritación o alergias en la mucosa, asociada a líquidos o materiales usados para el tratamiento, que a pesar de realizarse correctamente la técnica, cabe la posibilidad de que la infección o el proceso quístico o granulomatoso no se eliminen totalmente, por lo que puede ser necesario acudir a la cirugía periapical al cabo de algunas semanas, meses o incluso años que generaría costos que deben ser cubiertos por mi como paciente.\n",
                },
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "TRATAMIENTOS ALTERNOS: ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Exodoncia del diente.",
                },
              ],
            },
            {
              marginTop: 5,
              alignment: "justify",
              style: "bodyNoBold9",
              text: [
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "PROCEDIMIENTO CIRUGIA ORAL (BASICA): \n",
                },
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "BENEFICIOS: ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Extracción de las piezas dentarias con grado avanzado de caries o destrucción coronal que constituyen un foco de infección. En determinados casos la exodoncia previene mal-oclusiones, afectaciones en los dientes adyacentes y otros problemas de la cavidad oral. Nos permite erradicar el dolor dental y la posibilidad de rehabilitar.\n",
                },
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "RIESGOS Y COMPLICACIONES: ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "Probabilidad de: Avulsiones - Luxaciones - Fractura radicular - Fractura dental - Hematomas -Dolor -Deglución de la pieza dental -Alveolitis o infección - Fractura de la obturación adyacente -Hemorragia -Fractura ósea -Comunicación Oroantral -Parestesia -Paresia -Trismus -Laceración de tejidos blandos Tratamientos alternos Endodoncia, Rehabilitación oral, Cirugía periodontal.\n",
                },
                {
                  alignment: "justify",
                  bold: true,
                  style: "bodyNoBold9",
                  text: "DECLARACIÓN DEL PACIENTE: ",
                },
                {
                  alignment: "justify",
                  style: "bodyNoBold9",
                  text: "La institución, a través de sus profesionales adscritos y demás personal vinculado, me ha explicado en forma clara, expresa y satisfactoria en qué consiste el procedimiento, como se hace, para que sirve, igualmente se me han explicado los riesgos, incertidumbres, complicaciones y molestias que puedan ser inherentes a las actividades programadas y realizadas y me han permitido realizar preguntas, las cuales, han sido respondidas de forma satisfactoria, entiendo por lo tanto que en el curso del tratamiento pueden presentarse situaciones especiales e imprevistas que requieran procedimientos adicionales y autorizo la relación de los mismos, cuando el profesional tratante considere necesario. Comprendo las implicaciones del presente consentimiento me encuentro en capacidad de expresarlo y dejo constancia de que los espacios en blanco han sido llenados ante mi firma. Me comprometo a seguir las indicaciones que al final del tratamiento me indique el profesional tratante. He comprendido todo lo anterior y por ello de manera libre y voluntaria firmo.",
                },
              ],
            },
          ],
        },
        {
          marginTop: 8,
          alignment: "justify",
          style: "bodyNoBold9",
          text: [
            { text: "El suscrito(a): " },
            { bold: true, text: datos.suscrito },
            {
              text: " deja constancia que ha explicado la naturaleza, propósito, ventajas y alternativas del tratamiento indicado y que ha respondido todas las preguntas formuladas por el paciente o la persona responsable de este.",
            },
          ],
        },
        consentDiferido(),
        desistimiento(),
        {
          marginTop: 13,
          style: "bodyNoBold9",
          bold: true,
          text: "POLITICA DE MANEJO DE DATOS PERSONALES",
        },
        {
          marginTop: 3,
          style: "bodyNoBold9",
          text: "Autorizo que la E.S.E HOSPITAL LOCAL DE TAURAMENA use la información provista por mí con el fin de realizar todas las actividades de los servicios odontológicos que sean necesarios y se lleven a cabalidad.",
        },
      ],
    };
  }

  function datosAcomp() {
    if (datos.acomp.cod) {
      return {
        stack: [
          {
            marginTop: 10,
            alignment: "justify",
            style: "bodyNoBold9",
            text: [
              {
                alignment: "justify",
                bold: true,
                style: "bodyNoBold9",
                text: "Acudiente responsable: ",
              },
              { alignment: "justify", style: "bodyNoBold9", text: datos.acomp.descrip },
            ],
          },
          {
            marginTop: 5,
            alignment: "justify",
            style: "bodyNoBold9",
            text: [
              {
                alignment: "justify",
                bold: true,
                style: "bodyNoBold9",
                text: "Documento de identidad: ",
              },
              { alignment: "justify", style: "bodyNoBold9", text: datos.acomp.tipo_id },
              {
                alignment: "justify",
                bold: true,
                style: "bodyNoBold9",
                text: " Numero: ",
              },
              { alignment: "justify", style: "bodyNoBold9", text: datos.acomp.cod },
            ],
          },
        ],
      };
    } else {
      {
        return {};
      }
    }
  }
  function consentDiferido() {
    if (datos.acomp.cod) {
      return {
        stack: [
          {
            marginTop: 10,
            alignment: "justify",
            style: "bodyNoBold9",
            text: [
              {
                alignment: "justify",
                bold: true,
                style: "bodyNoBold9",
                text: "CONSENTIMIENTO INFORMADO DIFERIDO: ",
              },
              {
                alignment: "justify",
                style: "bodyNoBold9",
                text: "(Para situación de discapacidad o menores de edad): En mi calidad de representante legal del paciente que no tiene la capacidad legal para otorgar la autorización (menor de edad, inconsciencia, alteración mental temporal o definitiva) me hago responsable y doy el consentimiento de manera libre y voluntaria para que le sean practicados los tratamientos que la institución ha descrito en la historia clínica.",
              },
            ],
          },
        ],
      };
    } else {
      {
        return {};
      }
    }
  }
  function desistimiento() {
    if (!datos.autorizo) {
      return {
        stack: [
          {
            marginTop: 10,
            alignment: "justify",
            style: "bodyNoBold9",
            text: [
              {
                alignment: "justify",
                bold: true,
                style: "bodyNoBold9",
                text: "DESISTIMIENTO DEL PROCEDIMIENTO: ",
              },
              {
                alignment: "justify",
                style: "bodyNoBold9",
                text: "Después de haber escuchado al profesional sobre el procedimiento propuesto y los riesgos posibles NO ACEPTO que se realice dicho procedimiento.",
              },
            ],
          },
        ],
      };
    } else {
      {
        return {};
      }
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
