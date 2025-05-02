import { datosFormatUTM } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionLAB010 = ({ datos }) => {
  console.log("datos -> ", datos);

  var dd = {
    stack: [contenidoTmgrfiaAxialCmptrzada()],
  };

  function contenidoTmgrfiaAxialCmptrzada() {
    return {
      stack: [
        datosFormatUTM({ datos }),
        {
          marginTop: 15,
          table: {
            widths: ["80%", "10%", "10%"],
            body: [
              [
                {
                  text: "PROCEDIMIENTO QUE REQUIERE MEDIO DE CONTRASTE (IODADO)",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
                {
                  stack: [
                    {
                      text: "SI",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.iodado == "S" ? true : false, 0, 55, 55, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "NO",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.iodado == "S" ? false : true, 0, 55, 55, 0, -13, -13, 0, 0),
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 15,
          table: {
            body: [
              [
                {
                  marginTop: 1,
                  marginBottom: 1,
                  text: "NORMATIVIDAD VIGENTE",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  // marginTop: 5,
                  // marginBottom: 5,
                  text: "La Ley 23 de 1981 al referirse a las relaciones médico – paciente, en los artículos 14, 15 y 18, advierte la necesidad del consentimiento para realizar los diferentes tratamientos medico quirúrgicos que se requieran. Para la resolución 3100 de 2019 el Consentimiento informado es la aceptación libre, voluntaria y consciente de un paciente o usuario, manifestada en el pleno uso de sus facultades, para que tenga a lugar un acto asistencial. Para que el consentimiento se considere informado, el paciente o usuario deberá entender la naturaleza de la decisión a consentir tras recibir información que le haga consciente de los beneficios, riesgos, alternativas e implicaciones del acto asistencial.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  marginTop: 1,
                  marginBottom: 1,
                  text: "INFORMACIÓN DEL PROCEDIMIENTO",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  // marginTop: 5,
                  // marginBottom: 5,
                  text: "La Tomografía Axial Computarizada TAC es un examen no invasivo que utiliza un equipo de rayos X especial para tomar imágenes de las estructuras internas del cuerpo. Los rayos X utilizados en las exploraciones por TAC usualmente no tienen efectos secundarios y no dejan radiación en el cuerpo de un paciente. Es posible que tenga que tomar el material de contraste alrededor de una hora antes de que se realice la tomografía computarizada; se necesita este tiempo para que el líquido recubra el estómago y los intestinos. También se puede administrar el medio de contraste vía intravenosa.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  marginTop: 1,
                  marginBottom: 1,
                  text: "BENEFICIOS",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  // marginTop: 5,
                  // marginBottom: 5,
                  text: "Las tomografías permiten diagnosticar trastornos musculares y óseos. Precisar la ubicación de un tumor, una infección o un coágulo sanguíneo. Guiar procedimientos, como cirugías, biopsias y radioterapia Detectar y controlar enfermedades y afecciones. Controlar la efectividad de determinados tratamientos y detectar lesiones internas.\n\nLas tomografías computarizadas -TC- con mejores que los rayos X convencionales para exámenes de muestra de tejido óseo, blando y vasos sanguíneos. El tomógrafo toma imágenes o “cortes” que muestran sólo unas capas del tejido del cuerpo a la vez. Al tomar imágenes de esta manera los profesionales de la salud pueden ver y encontrar mejor cualquier problema en su organismo. Se podrá utilizar un medio de contraste con el fin de visualizar mejor las imágenes en ciertas partes del cuerpo.\n\n",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  marginTop: 1,
                  marginBottom: 1,
                  text: "RIESGOS",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  // marginTop: 4,
                  // marginBottom: 4,
                  text: "Los riesgos son los derivados de la utilización de radiación ionizante y del empleo de contrastes iodados. La dosis de una TC depende de las características físicas del paciente y de la extensión de la parte del cuerpo a estudiar, no se ha demostrado que las bajas dosis de radiación usadas causen daño a largo plazo. En relación al uso de medio de contraste yodado, las reacciones adversas que pueden aparecer son entre moderadas a graves, siendo estas últimas muy poco comunes. Las reacciones incluyen: náusea y vómito, dolor de cabeza, picazón, calores súbitos, irritación de la piel o urticaria, sibilancia , ritmos cardíacos anormales, presión sanguínea alta o baja, falta de aliento o dificultad para respirar, inflamación de la vía aérea, convulsiones y paro cardiorrespiratorio.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            ],
          },
        },
        {
          marginTop: 15,
          table: {
            body: [
              [
                {
                  text: "RECOMENDACIONES DE SEGURIDAD (TOMOGRAFÍA AXIAL COMPUTARIZADA)",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
              ],
              [
                {
                  text: "Recuerde que el uso de la Tomografía Axial computarizada TAC esta contraindicada en mujeres gestantes y en personas que han presentado reacciones alérgicas a medios de contraste yodados. Recuerde informarnos si tiene posibilidades de estar en proceso de gestación.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  text: "Algunas condiciones incrementan el riesgo de una reacción alérgica o adversa a los materiales de contraste yodados. Informe si Ud. tiene historial de asma, drepanocitosis, policitemia y mieloma, si usa medicamentos como metoprolol, carvedilol, propanolol.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  text: "Recuerde no usar ningún tipo de joyas incluyendo anillos, piercings, aretes, collares o relojes. Se le pedirá que se quite la ropa que tiene ganchos, botones, cierres u otros objetos metálicos para no interferir con el procedimiento.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
              [
                {
                  text: "Infórmenos si sufre de claustrofobia o si pesa mas de 120 Kg.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            ],
          },
        },
        {
          marginTop: 15,
          table: {
            widths: ["55%", "7%", "7%", "9%", "11%", "11%"],
            body: [
              [
                {
                  colSpan: 4,
                  text: "ENCUESTA DE SEGURIDAD (PROCEDIMIENTO CON CONTRASTE)",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
                {},
                {},
                {},
                {
                  stack: [
                    {
                      text: "APLICA",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.contraste === true ? true : false, 0, 55, 55, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "NO APLICA",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.contraste === true ? false : true, 0, 55, 55, 0, -13, -13, 0, 0),
                    },
                  ],
                },
              ],
              [
                {
                  text: "¿Le han practicado exámenes con inyección de medio de contraste yodado?, ¿Otros TAC? Especifique",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: "SI",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_1.trim() != "" ? true : false, 0, 38, 38, 0, -13, -13, 13, 13),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "NO",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_1.trim() != "" ? false : true, 0, 38, 38, 0, -13, -13, 13, 13),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: `${datos.P_1.trim() != "" ? datos.P_1.trim() : ""}`,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
              ],
              [
                {
                  text: "¿Presentó alguna reacción adversa al medio de contraste (Yodado)? Especifique",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: "SI",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_2.trim() != "" ? true : false, 0, 38, 38, 0, -13, -13, 13, 13),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "NO",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_2.trim() != "" ? false : true, 0, 38, 38, 0, -13, -13, 13, 13),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: `${datos.P_2.trim() != "" ? datos.P_2.trim() : ""}`,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
              ],
              [
                {
                  text: "¿Presenta enfermedades del corazón? Especifique",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: "SI",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_3.trim() != "" ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "NO",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_3.trim() != "" ? false : true, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: `${datos.P_3.trim() != "" ? datos.P_3.trim() : ""}`,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
              ],
              [
                {
                  text: "¿Presenta enfermedades de los riñones? Especifique",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: "SI",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_4.trim() != "" ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "NO",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_4.trim() != "" ? false : true, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: `${datos.P_4.trim() != "" ? datos.P_4.trim() : ""}`,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
              ],
              [
                {
                  text: "¿Presenta enfermedades del hígado? Especifique",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: "SI",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_5.trim() != "" ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "NO",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_5.trim() != "" ? false : true, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: `${datos.P_5.trim() != "" ? datos.P_5.trim() : ""}`,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
              ],
              [
                {
                  text: "¿Padece de asma? Especifique",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: "SI",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_6.trim() != "" ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "NO",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_6.trim() != "" ? false : true, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: `${datos.P_6.trim() != "" ? datos.P_6.trim() : ""}`,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
              ],
              [
                {
                  text: "¿Presenta algún tipo de alergia? (a medicamentos, alimentos, otras sustancias) Especifique",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: "SI",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_7.trim() != "" ? true : false, 0, 38, 38, 0, -13, -13, 13, 13),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "NO",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_7.trim() != "" ? false : true, 0, 38, 38, 0, -13, -13, 13, 13),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: `${datos.P_7.trim() != "" ? datos.P_7.trim() : ""}`,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
              ],
              [
                {
                  text: "¿Padece de diabetes? Especifique",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: "SI",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_8.trim() != "" ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "NO",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_8.trim() != "" ? false : true, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: `${datos.P_8.trim() != "" ? datos.P_8.trim() : ""}`,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
              ],
              [
                {
                  text: "¿Padece de otro tipo de enfermedad? Especifique",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: "SI",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_9.trim() != "" ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "NO",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_9.trim() != "" ? false : true, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: `${datos.P_9.trim() != "" ? datos.P_9.trim() : ""}`,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
              ],
              [
                {
                  text: "¿Consume medicamentos? Especifique",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: "SI",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_10.trim() != "" ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  stack: [
                    {
                      text: "NO",
                      style: "tableTitle",
                      alignment: "center",
                      color: "#808080",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasillaPrzonlzda(datos.P_10.trim() != "" ? false : true, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: `${datos.P_10.trim() != "" ? datos.P_10.trim() : ""}`,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
              ],
              [
                {
                  colSpan: 6,
                  text: "Recuerde que si su examen requiere la administración de medio de contraste endovenoso, el auxiliar de enfermería procederá a canalizarle una vena periférica (venoclisis) para administrar el medio de contraste. El procedimiento de venoclisis es seguro, sin embargo, Ud. puede presentar: ardor, malestar, sangrado escaso, hematoma y flebitis. Si el medio de contraste es vía oral, Ud. deberá tomar el material en agua de acuerdo a las recomendaciones del personal de salud. Recuerde que una adecuada preparación permitirá que las imágenes tomadas sean de calidad para la valoración médica.",
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
                {},
                {},
                {},
              ],
            ],
          },
        },
        {
          marginTop: 15,
          table: {
            widths: ["25%", "25%", "25%", "25%"],
            body: [
              [
                {
                  text: "PRIMER APELLIDO",
                  style: "tableTitle",
                  alignment: "center",
                  bold: true,
                },
                {
                  text: "SEGUNDO APELLIDO",
                  style: "tableTitle",
                  alignment: "center",
                  bold: true,
                },
                {
                  text: "PRIMER NOMBRE",
                  style: "tableTitle",
                  alignment: "center",
                  bold: true,
                },
                {
                  text: "SEGUNDO NOMBRE",
                  style: "tableTitle",
                  alignment: "center",
                  bold: true,
                },
              ],
              [
                {
                  colSpan: 4,
                  text: datos.paciente.descrip,
                  style: "tableTitle",
                  alignment: "center",
                },
                {},
                {},
                {},
              ],
            ],
          },
        },
        textoAutoriza(datos.autorizo),
        textoDisentimiento(datos.disentimiento, datos.acompa_disenti),
      ],
    };
  }

  function textoAutoriza(autorizo) {
    const textoAutoriza = {
      marginTop: 20,
      table: {
        heights: ["auto", "auto", "auto", 80, "auto", "auto"],
        widths: [171, 172, 171],
        body: [
          [
            {
              colSpan: 3,
              text: "DECLARACIÓN DEL CONSENTIMIENTO INFORMADO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {},
            {},
          ],
          [
            {
              marginBottom: 5,
              colSpan: 3,
              text: `Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la realización del procedimiento en mención, proceda a firmar dejando su autorización por escrito.\n\n Yo ${datos.paciente.descrip}, identificada (o) con el documento de identidad número ${datos.paciente.cod}, después de haber sido informado (a) sobre el procedimiento de Tomografía Axial Computarizada, los riesgos y beneficios, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo la toma del procedimiento teniendo en cuenta que esta autorización puede ser revocable en cualquier momento.`,
              style: "tableTitle",
              alignment: "justify",
            },
            {},
            {},
          ],
          [
            {
              text: "PACIENTE",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "ACOMPAÑANTE",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "MÉDICO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
          ],
          [
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_paci",
              width: 140,
              height: 70,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_acomp",
              width: 140,
              height: 70,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_profesional",
              width: 140,
              height: 70,
            },
          ],
          [
            {
              text: `NOMBRE: ${datos.paciente.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.acomp.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.prof.descrip}`,
              style: "tableTitle",
            },
          ],
          [
            {
              text: `DOC. IDENT: ${datos.paciente.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.acomp.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.prof.cod}`,
              style: "tableTitle",
            },
          ],
        ],
      },
    };

    const textoRevoca = {
      marginTop: 20,
      table: {
        heights: ["auto", "auto", "auto", 80, "auto", "auto"],
        widths: [171, 172, 171],
        body: [
          [
            {
              colSpan: 3,
              text: "REVOCACIÓN DEL CONSENTIMIENTO INFORMADO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {},
            {},
          ],
          [
            {
              marginBottom: 5,
              colSpan: 3,
              text: `Yo ${datos.paciente.descrip}, identificada (o) con el documento de identidad número ${datos.paciente.cod}, después de haber sido informado (a) sobre el procedimiento de Tomografía Axial Computarizada sus riesgos y beneficios y adicionalmente, los riesgos de no realizármelo, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con la toma del procedimiento en mención.`,
              style: "tableTitle",
              alignment: "justify",
            },
            {},
            {},
          ],
          [
            {
              text: "PACIENTE",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "ACOMPAÑANTE",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "MÉDICO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
          ],
          [
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_paci",
              width: 140,
              height: 70,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_acomp",
              width: 140,
              height: 70,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_profesional",
              width: 140,
              height: 70,
            },
          ],
          [
            {
              text: `NOMBRE: ${datos.paciente.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.acomp.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.prof.descrip}`,
              style: "tableTitle",
            },
          ],
          [
            {
              text: `DOC. IDENT: ${datos.paciente.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.acomp.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.prof.cod}`,
              style: "tableTitle",
            },
          ],
        ],
      },
    };
    if (autorizo !== false && autorizo !== true) {
      return {
        stack: [textoAutoriza, textoRevoca],
      };
    }
    if (autorizo) return textoAutoriza;
    else return textoRevoca;
  }

  function marcaCasilla(condicion) {
    return [
      {
        canvas: condicion
          ? [
              { type: "line", x1: 0, x2: 24, y1: -14, y2: 0, color: "#808080" },
              { type: "line", x1: 24, x2: 0, y1: -14, y2: 0, color: "#808080" },
            ]
          : [],
      },
    ];
  }
  function textoAutoriza(autorizo) {
    const textoAutoriza = {
      marginTop: 20,
      table: {
        heights: ["auto", "auto", "auto", 80, "auto", "auto"],
        widths: [171, 172, 171],
        body: [
          [
            {
              colSpan: 3,
              text: "DECLARACIÓN DEL CONSENTIMIENTO INFORMADO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {},
            {},
          ],
          [
            {
              marginBottom: 5,
              colSpan: 3,
              text: `Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la realización del procedimiento en mención, proceda a firmar dejando su autorización por escrito.\n\n Yo ${datos.paciente.descrip}, identificada (o) con el documento de identidad número ${datos.paciente.cod}, después de haber sido informado (a) sobre el procedimiento de Tomografía Axial Computarizada, los riesgos y beneficios, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo la toma del procedimiento teniendo en cuenta que esta autorización puede ser revocable en cualquier momento.`,
              style: "tableTitle",
              alignment: "justify",
            },
            {},
            {},
          ],
          [
            {
              text: `${datos.firmas.firma_acomp ? "ACOMPAÑANTE" : "PACIENTE"}`,
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "TESTIGO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "MÉDICO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
          ],
          [
            {
              marginTop: 5,
              alignment: "center",
              image: `${datos.firmas.firma_acomp ? "firma_acomp" : "firma_paci"}`,
              width: 140,
              height: 70,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_testigo",
              width: 140,
              height: 70,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_profesional",
              width: 140,
              height: 70,
            },
          ],
          [
            {
              text: `NOMBRE: ${datos.firmas.firma_acomp ? datos.acomp.descrip : datos.paciente.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.testigo.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.prof.descrip}`,
              style: "tableTitle",
            },
          ],
          [
            {
              text: `DOC. IDENT: ${datos.firmas.firma_acomp ? datos.acomp.cod : datos.paciente.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.testigo.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.prof.cod}`,
              style: "tableTitle",
            },
          ],
        ],
      },
    };

    const textoRevoca = {
      marginTop: 20,
      table: {
        heights: ["auto", "auto", "auto", 80, "auto", "auto"],
        widths: [171, 172, 171],
        body: [
          [
            {
              colSpan: 3,
              text: "REVOCACIÓN DEL CONSENTIMIENTO INFORMADO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {},
            {},
          ],
          [
            {
              marginBottom: 5,
              colSpan: 3,
              text: `Yo ${datos.paciente.descrip}, identificada (o) con el documento de identidad número ${datos.paciente.cod}S, después de haber sido informado (a) sobre el procedimiento de Tomografía Axial Computarizada sus riesgos y beneficios y adicionalmente, los riesgos de no realizármelo, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con la toma del procedimiento en mención.`,
              style: "tableTitle",
              alignment: "justify",
            },
            {},
            {},
          ],
          [
            {
              text: `${datos.firmas.firma_acomp ? "ACOMPAÑANTE" : "PACIENTE"}`,
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "TESTIGO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
            {
              text: "MÉDICO",
              bold: true,
              style: "tableTitle",
              alignment: "center",
            },
          ],
          [
            {
              marginTop: 5,
              alignment: "center",
              image: `${datos.firmas.firma_acomp ? "firma_acomp" : "firma_paci"}`,
              width: 140,
              height: 70,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_testigo",
              width: 140,
              height: 70,
            },
            {
              marginTop: 5,
              alignment: "center",
              image: "firma_profesional",
              width: 140,
              height: 70,
            },
          ],
          [
            {
              text: `NOMBRE: ${datos.firmas.firma_acomp ? datos.acomp.descrip : datos.paciente.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.testigo.descrip}`,
              style: "tableTitle",
            },
            {
              text: `NOMBRE: ${datos.prof.descrip}`,
              style: "tableTitle",
            },
          ],
          [
            {
              text: `DOC. IDENT: ${datos.firmas.firma_acomp ? datos.acomp.cod : datos.paciente.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.testigo.cod}`,
              style: "tableTitle",
            },
            {
              text: `DOC. IDENT: ${datos.prof.cod}`,
              style: "tableTitle",
            },
          ],
        ],
      },
    };
    if (autorizo !== false && autorizo !== true) {
      return {
        stack: [textoAutoriza, textoRevoca],
      };
    }
    if (autorizo) return textoAutoriza;
    else return textoRevoca;
  }

  function marcaCasillaPrzonlzda(condicion, x1A, x1B, x2A, x2B, y1A, y1B, y2A, y2B) {
    return [
      {
        canvas: condicion
          ? [
              { type: "line", x1: x1A, x2: x2A, y1: y1A, y2: y2A, color: "#808080" },
              { type: "line", x1: x1B, x2: x2B, y1: y1B, y2: y2B, color: "#808080" },
            ]
          : [],
      },
    ];
  }
  function marcaCasillaPrzonlzda(condicion, x1A, x1B, x2A, x2B, y1A, y1B, y2A, y2B) {
    return [
      {
        canvas: condicion
          ? [
              { type: "line", x1: x1A, x2: x2A, y1: y1A, y2: y2A, color: "#808080" },
              { type: "line", x1: x1B, x2: x2B, y1: y1B, y2: y2B, color: "#808080" },
            ]
          : [],
      },
    ];
  }

  function textoDisentimiento(disentimiento, acompa_disenti) {
    const textAcompa = `Yo ${datos.acomp.descrip}, identificada (o) con el documento de identidad número ${datos.acomp.cod}, en calidad de acudiente de ${datos.paciente.descrip} , identificada (o) con el documento de identidad número ${datos.paciente.cod}, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;
    const textPacient = `Yo ${datos.paciente.descrip}, identificada (o) con el documento de identidad número ${datos.paciente.cod}, en calidad de paciente, disiento este consentimiento que he prestado sobre la realización de ${datos.nombre_consenti}`;

    const textoDisentimiento = {
      marginTop: 15,
      table: {
        widths: ["auto", 180],
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
