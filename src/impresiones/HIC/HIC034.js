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
        textoAutoriza(datos.autorizo, datos.disentimiento),
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

  function textoAutoriza(autorizo, disentir) {
    const textoAutorizo = {
      stack: [
        {
          marginTop: 7,
          style: "bodyNoBold",
          columns: [
            {
              width: "13%",
              text: "De lo anterior",
            },
            {
              width: "auto",
              stack: cuadro_canvas(true),
            },
            {
              marginLeft: 4,
              width: "84%",
              text: [
                {
                  text: "Autorizo",
                  bold: true,
                },
                {
                  text: `Autorizo ${datos.empresa.nomusu}, para que se me practique la Interrupción Voluntaria del Embarazo (IVE) con el método farmacológico que me ofrece la Institución.`,
                },
                {
                  text: "EN CUALQUIER MOMENTO PREVIO AL INICIO DE LA INTERVENCIÓN Y SIN NECESIDAD DE DAR NINGUNA EXPLICACION, PUEDO REVOCAR EL CONSENTIMIENTO QUE AHORA PRESTO.",
                  marginTop: 10,
                  bold: true,
                },
              ],
            },
          ],
        },
      ],
    };

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
                  text: " el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento de toma de laboratorio VIH",
                },
                {
                  text: "(VIRUS DE INMUNODEFICIENCIA HUMANA),",
                  bold: true,
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
              text: `Yo, ${
                datos.acomp.cod.trim() ? datos.acomp.descrip : datos.paciente.descrip
              } identificado (a) con la CC No ${
                datos.acomp.cod.trim() ? datos.acomp.cod : datos.paciente.cod
              }, en calidad de paciente y/o acudiente, disiento este consentimiento que he prestado sobre la realización de la toma de INTERRUPCION VOLUNTARIA DEL EMBARAZO. \n`,
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
      if (autorizo) return textoAutorizo;
      else return textoRevoca;
    }
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
    let tamanoFirmasArray = 0;
    let anchos = [];

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
