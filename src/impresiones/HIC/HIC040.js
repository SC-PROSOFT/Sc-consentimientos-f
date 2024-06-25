import { evaluarParentesco, calcEdad } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHIC040 = ({ datos }) => {
  const dd = {
    stack: [contenidoAtencionParto(), firmas()],
  };

  function contenidoAtencionParto() {
    return {
      stack: [
        {
          marginTop: 10,
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
          text: `Yo ${datos.paciente.descrip}, de ${calcEdad(
            datos.paciente.nacim
          )} años de edad, identificado(a) con ${datos.paciente.tipo_id} N° ${
            datos.paciente.cod
          } expedida en ${datos.paciente.descrip_ciudad}, con residencia en ${
            datos.paciente.direccion
          }, teléfono número ${datos.paciente.telefono}, en calidad de paciente y mi acompañante ${
            datos.acomp.descrip
          }, de ${calcEdad(datos.acomp.nacim)} años de edad, identificado (a) con ${
            datos.acomp.cod
          }, expedida en ${
            datos.acomp.descrip_ciudad
          }; en pleno uso de nuestras facultades mentales y de nuestros derechos de salud y habiendo solicitado por nuestra voluntad los servicios de salud a la empresa social del estado ${
            datos.empresa.nomusu
          }, por medio del presente documento autorizamos al equipo de salud de la Institución, para atenderme y vigilarme durante la conducción del trabajo de parto y la atención del parto vaginal.`,
        },
        {
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Autorizo al personal médico de la ${datos.empresa.nomusu} que me atiende a solicitar y practicar las ayudas diagnósticas y terapéuticas, que consideren pertinentes durante la atención y proceso de parto, de mi salud previa información detallada de los posibles riesgos como son: estudio de imagenologia, monitoreo fetal, pruebas de laboratorio clínico, colocación de catéteres, toma de muestras de laboratorio y secreciones, actividades de higiene y confort, administración de medicamentos, administración de líquidos endovenosos.`,
        },
        {
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Me informan que Aunque son procedimientos seguros pueden presentarse complicaciones como: hematomas, inflamaciones, infecciones, alergias,  dolores locales, sangrados, efectos adversos medicamentosos y otros impredecibles.",
        },
        {
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Declaro que se me ha explicado sobre los riesgos y beneficios de los procedimientos  durante mi  estancia en los servicios de: urgencias  e internación   y que algunos de ellos pueden ser  dados por mi edad, profesión, creencias, valores y actitudes propias de mi ser.",
        },
        {
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Además se me ha informado  que en la ${datos.empresa.nomusu}, participa personal  idóneo, competente  y capacitado para la prescripción y determinación de conductas terapéuticas que contribuyan a mejorar mi calidad de vida y de mi hijo.`,
        },
        {
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          text: `El Dr. ${datos.prof.descrip} me ha explicado en que consiste el trabajo de parto y el parto vaginal y me ha informado las complicaciones, molestias y posibles riesgos que se puedan presentar en particular los siguientes:`,
        },
        {
          marginTop: 5,
          marginLeft: 15,
          style: "bodyNoBold",
          alignment: "justify",
          ol: [
            {
              text: "Que el trabajo de parto es un proceso fisiológico donde se dilata y borra el cuello del útero, permitiendo la expulsión del feto y de la placenta por vía vaginal.",
            },
            {
              marginTop: 2,
              text: "Que existen tres etapas en el trabajo de parto que son: la dilatación y borramiento del cuello uterino, el descenso y la expulsión del feto, y el alumbramiento de la placenta.",
            },
            {
              marginTop: 2,
              text: "Que durante cualquiera de las etapas del trabajo de parto se pueden presentar situaciones imprevistas o complicaciones que serán, en lo posible atendidas por el personal médico de la Institución.",
            },
            {
              marginTop: 2,
              text: "Que el trabajo de parto se adelantará dentro de la Institución con el fin de permitir la vigilancia y monitoreo constante por parte del equipo asistencial.",
            },
            {
              marginTop: 2,
              text: "Que en algunos casos se hace necesario inducir el proceso natural del parto con productos farmacológicos, tales como uterotónicos, oxitócicos o prostaglandínicos, que se aplican según criterio médico y bajo vigilancia, con monitoreo constante.",
            },
            {
              marginTop: 2,
              text: "Que en caso de distocia del parto (cuando el parto o expulsión procede de manera anormal o difícil), se hace necesario instrumentar el parto con el uso de instrumentos que facilitan la extracción del feto.",
            },
          ],
        },
        {
          marginTop: 5,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Igualmente mi acompañante y yo hemos sido informados que se pueden presentar complicaciones maternas o fetales, que pueden comprometer mi salud,  mi vida o la del feto. El profesional nos notifica que en la actualidad la Institución no dispone de métodos que nos permitan detectar de manera precoz y confiable, todas las situaciones de riesgo fetal, pero con la vigilancia constante del trabajo de parto y parto, se pretende minimizar su ocurrencia y prevenir sus posibles secuelas.",
        },
        {
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Dentro de los riesgos materno y fetales frecuentes se encuentran:",
        },
        {
          marginTop: 5,
          marginLeft: 15,
          style: "bodyNoBold",
          alignment: "justify",
          type: "lower-alpha",
          ol: [
            {
              text: "Sufrimiento fetal derivado de falta de oxígeno.",
            },
            {
              marginTop: 2,
              text: "Síndrome de aspiración meconial.",
            },
            {
              marginTop: 2,
              text: "Desprendimiento placentario.",
            },
            {
              marginTop: 2,
              text: "Prolapso de cordón.",
            },
            {
              marginTop: 2,
              text: "Acretismo placentario (invasión anormal de la placenta en la pared del útero).",
            },
            {
              marginTop: 2,
              text: "Nudos verdaderos de cordón.",
            },
            {
              marginTop: 2,
              text: "Ruptura uterina.",
            },
            {
              marginTop: 2,
              text: "Inversión uterina post parto.",
            },
            {
              marginTop: 2,
              text: "Distocia de hombros.",
            },
            {
              marginTop: 2,
              text: "Embolia de líquido amniótico (cuando el líquido amniótico o el material embrionario ingresa al torrente sanguíneo de la madre).",
            },
          ],
        },
        {
          marginTop: 2,
          marginLeft: 15,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Entre otros.",
        },
        {
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Que algunas de estas complicaciones presentan riesgo potencial para mí y/o para el feto y pueden generar secuelas neurológicas leves, moderadas o severas.",
        },
        {
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Comprendo y acepto que durante el procedimiento pueden aparecer circunstancias imprevisibles o inesperadas, que pueden requerir una extensión de otro procedimiento, acepto que las ciencias de la salud no son una ciencia exacta y que no se me garantizan resultados en la atención y que además al presentar  factores de riesgo inherentes a mi persona y patologías previas o actuales, mi riesgo aumentara de manera general.",
        },
        {
          marginTop: 5,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Que si se hace necesario la episiotomía por mi condición clínica durante el expulsivo, deberá ser suturada y que sus posibles complicaciones pueden ser: desgarros perineales, que en casos extremos pueden incluir músculos perineales alrededor del ano (esfínter externo del ano y recto), dolor, formación de hematomas, infecciones de  la herida, dehiscencia (abertura espontánea) de la sutura y a largo plazo fístulas (conducto anormal de un cavidad orgánica) recto vaginales e incontinencia fecal.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Que en caso de presentar alguna complicación que  me pueda llevar a la necesidad de realización de una cesárea de urgencia y en algunos casos (hemorragias incontrolables) a una histerectomía total o subtotal en procura de preservar mi vida y/o la de mi hijo(a); se iniciará el proceso de remisión a un nivel de mayor complejidad, para realizar dicho procedimiento que no hace parte del portafolio de servicios de la Institución.",
        },
        {
          marginTop: 8,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Se me ha dado la oportunidad de hacer preguntas y todas ellas han sido contestadas satisfactoriamente.",
        },
        {
          marginTop: 5,
          style: "bodyNoBold",
          alignment: "justify",
          text: `Me comprometo a seguir las indicaciones que me brindan los profesionales de ${datos.empresa.nomusu} para contribuir a una atención segura como son:`,
        },
        {
          marginTop: 5,
          marginLeft: 15,
          style: "bodyNoBold",
          alignment: "justify",
          ul: [
            {
              text: "Mantener puesta la manilla de identificación.",
            },
            {
              marginTop: 2,
              text: "Mantener elevadas las barandas  de la cama.",
            },
            {
              marginTop: 2,
              text: "Pedir ayuda al personal de enfermería en los casos que los requiera. (aseo diario, ir al baño. etc.).",
            },
            {
              marginTop: 2,
              text: "Permanecer acompañado o asistir con acompañante si hay indicación.",
            },
            {
              marginTop: 2,
              text: "Tomarme únicamente los medicamentos prescritos por los profesionales tratantes.",
            },
            {
              marginTop: 2,
              text: "Informar si soy alérgico a algún medicamento  o procedimiento y si vengo tomando medicamentos de forma regular.",
            },
            {
              marginTop: 2,
              text: "No manipular las llaves que regulan el oxígeno, los goteos de sueros, los monitores, equipos terapéuticos o dispositivos biomédicos.",
            },
            {
              marginTop: 2,
              text: "Lavarme frecuentemente las manos para evitar infecciones.",
            },
            {
              marginTop: 2,
              text: "Seguir las recomendaciones de aislamiento si cumplo criterios.",
            },
          ],
        },
        {
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Por lo tanto, en forma consciente y voluntaria, luego de haber escuchado la información y explicaciones, sin haber sido objeto de coacción, persuasión, ni manipulación manifiesto lo siguiente:",
        },
        {
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Mi acompañante y Yo que hemos recibido y comprendido toda la información, relacionada con el trabajo de parto y atención del mismo, que entendemos y autorizamos las decisiones médicas que durante su desarrollo se llegaren a presentar y que aceptamos los riesgos y limitaciones expuestas, en el entendido que se propenderá por minimizar su ocurrencia.",
        },
        {
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          text: "Declaramos que nos encontramos en capacidad de entender y expresar nuestra voluntad y en consecuencia suscribimos el presente documento en señal de conformidad con su contenido.",
        },
        textoAutoriza(datos.autorizo, datos.disentimiento),
        {
          marginTop: 10,
          style: "bodyNoBold",
          alignment: "justify",
          bold: true,
          text: "Como doctor dejo constancia que he explicado los propósitos, ventajas, riesgos y alternativas de manejo del trabajo de parto y del parto vaginal",
        },
      ],
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
                  text: " el consentimiento presentado y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento CONDUCCION Y LA ATENCION DEL TRABAJO DE PARTO Y PARTO VAGINAL",
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
              }, en calidad de paciente y/o acudiente, disiento este consentimiento que he prestado sobre la realización de la toma de LA CONDUCCION Y LA ATENCION DEL TRABAJO DE PARTO Y PARTO VAGINAL. \n`,
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
      if (autorizo) return { text: "" };
      else return textoRevoca;
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
