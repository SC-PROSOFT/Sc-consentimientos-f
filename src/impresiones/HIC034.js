import { calcEdad, evaluarParentesco } from "@/formatos/utils";

export const impresionHC034 = ({ datos }) => {
  const edad = calcEdad(datos.paciente.nacim);
  var dd = {
    stack: [contenidoIVE(), firmas()],
  };

  function llenarFechaAtc() {
    return {
      dia: () => (datos?.fecha_act ? datos.fecha_act.slice(6) : datos.fecha.slice(6)),
      mes: () => (datos?.fecha_act ? datos.fecha_act.slice(4, 6) : datos.fecha.slice(4, 6)),
      anio: () => (datos?.fecha_act ? datos.fecha_act.slice(0, 4) : datos.fecha.slice(0, 4)),
    };
  }

  function llenarFirmador() {
    const acomp = datos.acomp.cod.length;

    return {
      ciudad: () => (acomp ? datos.acomp.descrip_ciudad : datos.paciente.descrip_ciudad),
      nombre: () => (acomp ? datos.acomp.descrip : datos.paciente.descrip),
      cod: () => (acomp ? datos.acomp.cod : datos.paciente.cod),
    };
  }

  function contenidoIVE() {
    return {
      stack: [
        {
          alignment: "justify",
          marginTop: 14,
          style: "body",
          text: "La ley 23 de 1981 en su artículo 15 y 19, por la cual dictan las normas en materia de Ética médica, estableciendo que el médico no expondrá a su paciente a riesgos injustificados; pedirá su consentimiento para aplicar los tratamientos médicos y quirúrgicos que considere indispensables y que pueden afectarlo física o síquicamente, salvo en los casos en que ello no fuere posible, y le explicará al paciente o a sus responsables de tales consecuencias anticipadamente; igualmente en cumplimiento con lo establecido en la Ley Orgánica de Protección de Datos de carácter Personal (LOPD)15 del 13 de Diciembre 1999 sobre protección de datos personales y de conformidad con lo previsto en la Ley Orgánica (LO)  2 del 3 de marzo del 2010, de Salud Sexual y Reproductiva y de Interrupción Voluntaria del Embarazo, sus datos personales serán tratados garantizando su derecho a la intimidad y confidencialidad.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold",
          columns: [
            {
              width: "10%",
              text: [
                {
                  text: `Día: `,
                  bold: true,
                },
                {
                  text: `${llenarFechaAtc().dia()}`,
                },
              ],
            },
            {
              width: "10%",
              text: [
                {
                  text: `Mes: `,
                  bold: true,
                },
                {
                  text: `${llenarFechaAtc().mes()}`,
                },
              ],
            },
            {
              width: "10%",
              text: [
                {
                  text: `Año: `,
                  bold: true,
                },
                {
                  text: `${llenarFechaAtc().anio()}`,
                },
              ],
            },
            {
              width: "35%",
              text: [
                {
                  text: "Hora: ",
                  bold: true,
                },
                {
                  text: `${datos.hora_act || datos.hora}`,
                },
              ],
            },
            {
              width: "35%",
              text: [
                {
                  text: "Historia Clínica N°.",
                  bold: true,
                },
                {
                  text: `${datos.llave.slice(0, 2)}-${datos.llave.slice(2)}`,
                },
              ],
            },
          ],
        },
        {
          marginTop: 8,
          columns: [
            {
              width: "65%",
              style: "bodyNoBold",
              text: "SERVICIO: CONSULTA EXTERNA",
              bold: true,
            },
            {
              width: "35%",
              style: "bodyNoBold",
              text: "URGENCIAS",
              bold: true,
            },
          ],
        },
        {
          marginTop: 8,
          style: "bodyNoBold",
          table: {
            widths: [170, 35, 35, 100, 150],
            body: [
              [
                {
                  colSpan: 5,
                  text: `Nombres y appellidos del paciente y/o Tutor legal o Familiar: ${datos.paciente.descrip}`,
                  bold: true,
                },
                {},
                {},
                {},
                {},
              ],
              [
                {
                  text: "Documento de identidad",
                },
                {
                  columns: [
                    {
                      text: "T.I.",
                    },
                    {
                      marginLeft: 5,
                      stack: cuadro_canvas(edad < 18 ? true : false),
                    },
                  ],
                },
                {
                  columns: [
                    {
                      text: "C.C.",
                    },
                    {
                      marginLeft: 5,
                      stack: cuadro_canvas(edad >= 18 ? true : false),
                    },
                  ],
                },
                {
                  colSpan: 2,
                  text: `N°. ${datos.paciente.cod}`,
                },
                {},
              ],
              [
                {
                  colSpan: 3,
                  text: `Dirección: {Amarilo Araunco Diag 26 #6-90}`,
                },
                {},
                {},
                {
                  colSpan: 2,
                  text: `Teléfono: ${datos.paciente.telefono}`,
                },
                {},
              ],
              [
                {
                  colSpan: 3,
                  text: `Acudiente/responsable: ${datos.acomp.descrip}`,
                },
                {},
                {},
                {
                  text: `C.C.: ${datos.acomp.cod}`,
                },
                {
                  text: `Parentesco: ${evaluarParentesco(datos.paren_acomp)} `,
                },
              ],
            ],
          },
        },
        {
          marginTop: 8,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Las Gestantes hacen parte de una población de alto riesgo por su condición de embarazo, por lo tanto, tendrán prioridad en su proceso de atención y apoyo en los diferentes niveles de complejidad y se activarán los protocolos de acuerdo a su condición de salud.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Que la Institución para realizar la Interrupción Voluntaria del embarazo (IVE) que he solicitado según la legislación vigente, solo ofrece un (1) método y es el farmacológico (mediante tabletas) Mifepristona 200 microgramos via oral , dosis única y misoprostol vía vaginal o sublingual de 400 mcg cada 3 horas hasta 4 dosis iniciando a las 24-48 horas.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Que los efectos secundarios más frecuentes son Nausea, vomito, Fiebre, escalofrío y diarrea. Se me ha informado sobre las consecuencias psicológicas y sociales, que si bien estadísticamente son poco frecuentes se puede presentar depresiones post aborto, alteraciones del deseo sexual post aborto, baja autoestima y que para algunos sectores de la sociedad el Aborto está mal considerado.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Que las complicaciones que se pueden presentar son las relacionadas a continuación y se tendrán como criterios de remisión a la mediana complejidad (marque con una X, el criterio de remisión) con el fin de evitar complicaciones que deriven una muerte materna.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold",
          table: {
            widths: [40, 240, 220],
            body: [
              [
                {
                  alignment: "center",
                  text: "Item",
                  bold: true,
                },
                {
                  alignment: "center",
                  text: "Criterio",
                  bold: true,
                },
                {
                  alignment: "center",
                  text: "Observaciones",
                  bold: true,
                },
              ],
              [
                {
                  alignment: "center",
                  text: "1",
                },
                {
                  columns: [
                    {
                      width: "90%",
                      text: "• Hemorragia",
                    },
                    {
                      width: "4%",
                      stack: cuadro_canvas(datos.hemorragia == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: `${datos.obser_hemorragia}` || "",
                },
              ],
              [
                {
                  alignment: "center",
                  text: "2",
                },
                {
                  columns: [
                    {
                      width: "90%",
                      text: "• Retención Uterina",
                    },
                    {
                      width: "4%",
                      stack: cuadro_canvas(datos.retencion_ute == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: `${datos.obser_retencion_ute}` || "",
                },
              ],
              [
                {
                  alignment: "center",
                  text: "3",
                },
                {
                  columns: [
                    {
                      width: "90%",
                      text: "• IVE fallida",
                    },
                    {
                      width: "4%",
                      stack: cuadro_canvas(datos.ive_fallida == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: `${datos.obser_ive_fallida}` || "",
                },
              ],
              [
                {
                  alignment: "center",
                  text: "4",
                },
                {
                  columns: [
                    {
                      width: "90%",
                      text: "• Infecciones",
                    },
                    {
                      width: "4%",
                      stack: cuadro_canvas(datos.infecciones == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: `${datos.obser_infecciones}` || "",
                },
              ],
              [
                {
                  alignment: "center",
                  text: "5",
                },
                {
                  columns: [
                    {
                      width: "100%",
                      text: `• Entre otras: ${datos.entre_otras}`,
                    },
                  ],
                },
                {
                  text: `${datos.obser_entre_otras}` || "",
                },
              ],
            ],
          },
        },
        {
          marginTop: 8,
          style: "bodyNoBold",
          alignment: "justify",
          text: `De acuerdo con lo anterior, Yo ${llenarFirmador().nombre()}  con C.C. N° ${llenarFirmador().cod()} de ${llenarFirmador().ciudad()} en calidad de paciente o acudiente (persona responsable del paciente), por medio del presente documento, en forma libre en pleno uso de mis facultades mentales e intelectuales y sin limitaciones o impedimentos de carácter médico o legal, habiendo recibido información en un lenguaje claro, senillo y adecuado acerca de los riesgos y demás circunstancias que se originen del procedimiento, por parte del profesional en Medicina (Nombres y Apellidos completos) Dr. ${datos.prof.descrip} identificado con Cédula de ciudadanía y/o Registro médico N° ${datos.prof.cod} Autorizo ESE SALUD YOPAL, para que se me practique la Interrupción Voluntaria del Embarazo (IVE) con el método farmacológico que me ofrece la Institución.`,
        },
        {
          marginTop: 8,
          style: "bodyNoBold",
          alignment: "justify",
          text: "EN CUALQUIER MOMENTO PREVIO AL INICIO DE LA INTERVENCIÓN Y SIN NECESIDAD DE DAR NINGUNA EXPLICACION, PUEDO REVOCAR EL CONSENTIMIENTO QUE AHORA PRESTO.",
          bold: true,
        },
        {
          marginTop: 8,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Certifico que he explicado la naturaleza, propósito, ventajas, riesgos y complicaciones del procedimiento y he contestado todas las preguntas. Considero que el (la) paciente comprende todo lo explicado.",
        },
        {
          stack: disentimiento(false),
        },
      ],
    };
  }

  function datosAcudiente() {
    const existe_acomp = datos.acomp.cod.length ? true : false;
    return {
      nombre: () => (existe_acomp ? datos.acomp.descrip : ""),
      cod: () => (existe_acomp ? datos.acomp.cod : ""),
      paren: () => (existe_acomp ? datos.paren_acomp : ""),
    };
  }

  function disentimiento(disiente) {
    // disiente = false;
    const disentir = [
      {
        marginTop: 8,
        alignment: "center",
        style: "bodyNoBold",
        text: "DISENTIMIENTO",
        bold: true,
      },
      {
        marginTop: 8,
        style: "bodyNoBold",
        text: `Yo {David Pepito Perez Perecito} identificada con la CC No {1111111111}, en calidad de paciente y/o acudienteee, revoco este consentimiento que he prestado sobre la realización de la Interrupción voluntaria del Embarazo (IVE).`,
      },
    ];
    if (disiente) {
      return disentir;
    } else return [];
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

  function firmaPaciente() {
    return {
      stack: [
        {
          text: "PACIENTE (FIRMA / HUELLA)",
          bold: true,
          alignment: "center",
          style: "tableNoBold",
        },
        {
          columns: [
            {
              marginTop: 9,
              alignment: "center",
              image: "firma_paci",
              width: 105,
              height: 70,
            },
            {
              marginTop: 9,
              marginLeft: 8,
              image: "huella_paci",
              width: 55,
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
    let anchos = [];

    if (datos.firmas.firma_paci) {
      firmasArray.push(firmaPaciente());
    }

    if (datos.firmas.firma_acomp) {
      firmasArray.push(firmaAcompanante());
    }

    if (datos.firmas.firma_prof) {
      firmasArray.push(firmaProfesional());
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
