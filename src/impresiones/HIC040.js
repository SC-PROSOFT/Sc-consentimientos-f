import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export const impresionHC040 = () => {
  return new Promise(async (resolve) => {
    try {
      var dd = {
        pageSize: "LETTER",
        pageMargins: [35, 105, 35, 30],
        header: function (currentPage, pageCount) {
          return header(currentPage, pageCount);
        },
        content: [
          {
            stack: [contenidoAtencionParto(), firmas()],
          },
        ],

        styles: {
          headerBold: {
            fontSize: 12,
            bold: true,
          },
          headerEnd: {
            fontSize: 8,
          },
          bodyNoBold: {
            fontSize: 11,
          },
          body: {
            fontSize: 10,
          },
          tableBold: {
            fontSize: 10,
            bold: true,
          },
          tableNoBold: {
            fontSize: 9,
          },
        },
      };

      setTimeout(() => {
        pdfMake.createPdf(dd).download(`CONSENTIMIENTO INFORMADO HC040`);
        resolve();
      }, 600);
    } catch (error) {
      console.log(error);
    }
  });
};

function header(currentPage, pageCount) {
  return {
    margin: [35, 20, 35, 0], //Margenes deben ir en relacion a la pageMargin
    table: {
      widths: ["20%", "45%", "35%"],
      body: [
        [
          {
            image: "sampleImage.jpg",
            width: 90,
            height: 70,
            alignment: "center",
          },
          {
            text: "\nCONSENTIMIENTO INFORMADO PARA LA CONDUCCIÓN Y LA ATENCIÓN DEL TRABAJO DE PARTO Y PARTO VAGINAL\n",
            style: "headerBold",
            alignment: "center",
          },
          {
            stack: [
              {
                text: [
                  {
                    text: `Código: `,
                    bold: true,
                  },
                  {
                    text: "M2-S5-F-17",
                  },
                ],
                style: "headerEnd",
              },
              {
                text: [
                  {
                    text: `Versión: `,
                    bold: true,
                  },
                  {
                    text: "01",
                  },
                ],
                style: "headerEnd",
              },
              {
                text: [
                  {
                    text: `Aprobado el: `,
                    bold: true,
                  },
                  {
                    text: "04/10/2023",
                  },
                ],
                style: "headerEnd",
              },
              {
                text: [
                  {
                    text: `Revisado por `,
                    bold: true,
                  },
                  {
                    text: "04/10/2023",
                  },
                ],
                style: "headerEnd",
              },
              {
                text: [
                  {
                    text: `Aprobado por `,
                    bold: true,
                  },
                  {
                    text: "04/10/2023",
                  },
                ],
                style: "headerEnd",
              },
              {
                text: [
                  {
                    text: `Fecha de actualización: `,
                    bold: true,
                  },
                  {
                    text: "04/10/2023",
                  },
                ],
                style: "headerEnd",
              },
              {
                text: "\nPágina " + currentPage.toString() + " de " + pageCount.toString(),
                style: "headerEnd",
              },
            ],
          },
        ],
      ],
    },
  };
}

function contenidoAtencionParto() {
  return {
    stack: [
      {
        marginTop: 20,
        columns: [
          {
            text: `Historia clínica número: {1193221112-1}`,
            alignment: "justify",
            style: "bodyNoBold",
          },
          {
            width: "auto",
            text: `Ciudad: {VILLAVICENCIO}`,
            alignment: "justify",
            style: "bodyNoBold",
          },
          {
            marginLeft: 50,
            width: "auto",
            text: `Fecha: {02/11/2023}`,
            alignment: "justify",
            style: "bodyNoBold",
          },
        ],
      },
      {
        marginTop: 10,
        style: "bodyNoBold",
        alignment: "justify",
        text: `Yo {David Santiago Lozada Quintero}, de {00} años de edad, identificado(a) con {CC} N° {1193220992} expedida en {VILLAVICENCIO}, con residencia en {VILLAVICENCIO}, teléfono número {3223758923}, en calidad de paciente y mi acompañante {VICTOR HUGO COBO VELASQUEZ}, de {23} años de edad, identificado (a) con {1111111111}, expedida en {VILLAVICENCIO}; en pleno uso de nuestras facultades mentales y de nuestros derechos de salud y habiendo solicitado por nuestra voluntad los servicios de salud a la empresa social del estado ESE Salud Yopal, por medio del presente documento autorizamos al equipo de salud de la Institución, para atenderme y vigilarme durante la conducción del trabajo de parto y la atención del parto vaginal.`,
      },
      {
        marginTop: 10,
        style: "bodyNoBold",
        alignment: "justify",
        text: "Autorizo al personal médico de la ESE Salud Yopal que me atiende a solicitar y practicar las ayudas diagnósticas y terapéuticas, que consideren pertinentes durante la atención y proceso de parto, de mi salud previa información detallada de los posibles riesgos como son: estudio de imagenologia, monitoreo fetal, pruebas de laboratorio clínico, colocación de catéteres, toma de muestras de laboratorio y secreciones, actividades de higiene y confort, administración de medicamentos, administración de líquidos endovenosos.",
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
        text: "Además se me ha informado  que en la ESE  salud Yopal, participa personal  idóneo, competente  y capacitado para la prescripción y determinación de conductas terapéuticas que contribuyan a mejorar mi calidad de vida y de mi hijo.",
      },
      {
        marginTop: 10,
        style: "bodyNoBold",
        alignment: "justify",
        text: `El Dr. {Manotas Cobo Velazquez} me ha explicado en que consiste el trabajo de parto y el parto vaginal y me ha informado las complicaciones, molestias y posibles riesgos que se puedan presentar en particular los siguientes:`,
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
        text: "Me comprometo a seguir las indicaciones que me brindan los profesionales de LA ESE Salud Yopal para contribuir a una atención segura como son:",
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

function firmas(paciente_firma) {
  paciente_firma = "S";
  let firmasArray = [];
  let motivosArray = [];
  let margin = 0;
  let anchos = [];

  if (paciente_firma !== "N") {
    firmasArray = [firmaPaciente(), firmaProfesional()];
    margin = 80;
    anchos = ["40%", "40%"];
  } else {
    firmasArray = [firmaAcompanante(), firmaProfesional()];
    motivosArray = [motivosNoFirma()];
    margin = 80;
    anchos = ["40%", "40%", "33%"];
  }

  return {
    marginTop: 8,
    stack: [
      {
        marginLeft: margin,
        layout: "noBorders",
        table: {
          widths: anchos,
          body: [[...firmasArray]],
        },
      },
      ...motivosArray,
    ],
  };
}

function firmaPaciente() {
  return {
    stack: [
      {
        text: "PACIENTE",
        alignment: "center",
        style: "tableBold",
      },
      {
        marginBottom: 2,
        text: [
          {
            text: "FIRMA / HUELLA ",
            alignment: "center",
            style: "tableBold",
          },
          {
            text: "(EN CASO DE NO FIRMAR)",
            alignment: "center",
            style: "tableNoBold",
            fontSize: 7,
          },
        ],
      },
      {
        alignment: "center",
        image: "sampleImage.jpg",
        width: 150,
        height: 80,
      },
      {
        marginTop: 10,
        text: [
          {
            text: "NOMBRE: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "David Santiago Lozada Quintero",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "DOCUMENTO: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "1111111111",
            style: "tableNoBold",
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
        style: "tableBold",
        marginBottom: 14,
      },
      {
        alignment: "center",
        image: "sampleImage.jpg",
        width: 150,
        height: 80,
      },
      {
        marginTop: 10,
        text: [
          {
            text: "NOMBRE: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "David Santiago Lozada Quintero",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "PROFESIONAL AREA DE: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "EXAMENES DOC.MANOTAS",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "R.P N°: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "1111111111",
            style: "tableNoBold",
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
        text: "TUTOR/ACOMPAÑANTE/REPR.LEGAL",
        alignment: "center",
        style: "tableBold",
      },
      {
        marginBottom: 2,
        text: [
          {
            text: "FIRMA / HUELLA ",
            alignment: "center",
            style: "tableBold",
          },
          {
            text: "(EN CASO DE NO FIRMAR)",
            alignment: "center",
            style: "tableNoBold",
            fontSize: 7,
          },
        ],
      },
      {
        alignment: "center",
        image: "sampleImage.jpg",
        width: 150,
        height: 80,
      },
      {
        marginTop: 10,
        text: [
          {
            text: "NOMBRE: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "David Santiago Lozada Quintero Quintero",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "DOCUMENTO: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "2222222222",
            style: "tableNoBold",
          },
        ],
      },
      {
        text: [
          {
            text: "PARENTESCO: ",
            style: "tableNoBold",
            bold: true,
          },
          {
            text: "HERMANO",
            style: "tableNoBold",
          },
        ],
      },
    ],
  };
}

function motivosNoFirma() {
  return {
    marginTop: 12,
    marginLeft: 30,
    marginRight: 30,
    stack: [
      {
        text: [
          {
            text: "MOTIVOS POR LOS QUE EL USUARIO NO FIRMA: 222222222222222 2222222222222222 22222 222222222 2222 2222 222222 222 222222222222222222222222222222222222 ",
            alignment: "justify",
            style: "tableNoBold",
            bold: true,
          },
        ],
      },
    ],
  };
}
