import { datosFormatUTM } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionLAB009 = ({ datos }) => {
  var dd = {
    stack: [contenidoResnciaNuclear()],
  };

  function contenidoResnciaNuclear() {
    return {
      stack: [
        datosFormatUTM({ datos }),
        {
          marginTop: 10,
          table: {
            widths: ["80%", "10%", "10%"],
            body: [
              [
                {
                  text: "PROCEDIMIENTO QUE REQUIERE MEDIO DE CONTRASTE (GADOLINIO)",
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
                      stack: marcaCasillaPrzonlzda(datos.proces == "S" ? true : false, 0, 55, 55, 0, -13, -13, 0, 0),
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
                      stack: marcaCasillaPrzonlzda(datos.gadolinio == "N" ? true : false, 0, 55, 55, 0, -13, -13, 0, 0),
                    },
                  ],
                },
              ],
            ],
          },
        },
        {
          marginTop: 10,
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
                  text: "La resonancia magnética nuclear (RMN) es una prueba diagnóstica con la que se obtienen imágenes del interior del cuerpo. Se basa en el procesamiento de ondas de radio que pasan por el paciente, el cual es sometido a un potente campo magnético. A diferencia del TAC o de las radiografías simples, la RMN no usa radiaciones ionizantes (rayos X). Permite obtener imágenes muy detalladas del cuerpo en dos y tres dimensiones y desde cualquier perspectiva (transversal, sagital y coronal). Puede realizarse con medio de contraste o si medio de contraste.",
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
                  text: "Puede aportar información sobre patologías que no se vean con otras técnicas de imagen como la ecografía o el TAC. También se utiliza cuando están contraindicadas otras pruebas de imágenes como por ejemplo en el caso de alergia al contraste iodado que se usa en el TAC. La RMN realizada después de inyectar un medio de contraste con gadolinio en una vena facilita al médico la valoración de inflamaciones, tumores y vasos sanguíneos.",
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
                  text: "La RMN es una prueba muy segura. El campo magnético que se aplica no tiene ningún efecto perjudicial sobre el organismo. El campo magnético utilizado en la RMN puede provocar que un dispositivo implantado se desplace, se sobrecaliente o funcione de forma inadecuada. Estos dispositivos también pueden distorsionar las imágenes de la RMN.\nA veces se puede sentir algo frío con la introducción del contraste; afortunadamente las reacciones alérgicas al contraste usado para la RMN son muy raras. Puede resultar algo molesto el permanecer mucho tiempo quieto en la mesa y puede llegar a sentir algo de claustrofobia. Los medios de contraste con gadolinio pueden provocar dolor de cabeza, náuseas, dolor y sensación de frío en el lugar de la inyección, distorsión del gusto y mareos. Con estos contrastes, es mucho menos probable que se produzcan reacciones graves que con los medios de contraste yodados utilizados en TAC.",
                  style: "tableTitle",
                  alignment: "justify",
                },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          table: {
            widths: ["13%", "3%", "22%", "4%", "20%", "4%", "30%", "4%"],
            body: [
              [
                {
                  colSpan: 8,
                  text: "ENCUESTA DE SEGURIDAD (RESONANCIA MAGNÉTICA NUCLEAR)",
                  bold: true,
                  style: "tableTitle",
                  alignment: "center",
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {
                  colSpan: 8,
                  text: "Por favor señale si cuenta con alguno de los dispositivos descritos a continuación:",
                  style: "tableTitle",
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {
                  text: "Marcapasos",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.marcapasos == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: "Neuroestimuladores",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.neuroestimuladores == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: "Prótesis dentales",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.protesis_dental == "S" ? true : datos.protesis_dental == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: "Dispositivo Intrauterino",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.disp_intrauterino == "S" ? true : false),
                    },
                  ],
                },
              ],
              [
                {
                  text: "Electrodos",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.electrodos == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: "Válvula de derivación",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.valvula_derivacion == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: "Suturas metálicas",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.suturas_metalicas == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: "Barras de Harrington",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.barras_harrington == "S" ? true : false),
                    },
                  ],
                },
              ],
              [
                {
                  text: "Audífonos",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.protesis_dental == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: "Esquirlas metálicas",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.esquirlas_metalicas == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: "Bomba de insulina",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.bomba_insulina == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: "Clips o ganchos quirúrgicos",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.clips_quirurgicos == "S" ? true : false),
                    },
                  ],
                },
              ],
              [
                {
                  text: "Stents",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.stents == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: "Prótesis auriculares",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.protesis_auriculares == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: "Implantes Auditivos",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.implantes_auditivos == "S" ? true : false),
                    },
                  ],
                },
                {
                  text: "Prótesis de Cadera o Rodilla",
                  style: "tableTitle",
                },
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.protesis_cadera == "S" ? true : false),
                    },
                  ],
                },
              ],
              [
                {
                  colSpan: 3,
                  text: "Desfibrilador implantable",
                  style: "tableTitle",
                },
                {},
                {},
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.desfibrilador == "S" ? true : false),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: "Fracturas tratadas con clavos o alambres",
                  style: "tableTitle",
                },
                {},
                {},
                {
                  stack: [
                    {
                      text: " ",
                      style: "tableTitle",
                      alignment: "center",
                    },
                    {
                      alignment: "center",
                      stack: marcaCasilla(datos.fractura_tratadas == "S" ? true : false),
                    },
                  ],
                },
              ],
              [
                {
                  colSpan: 8,
                  text: "Si usted tiene alguno de estos dispositivos implantados, deberá informar a su médico tratante, quien determinará si es seguro realizar esta prueba de imagen.",
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {
                  colSpan: 8,
                  text: "Recuerde que el uso de la resonancia esta totalmente contraindicado si Ud. tiene: Desfibrilador interno (implantado), Implante coclear (del oído), Clips que se utilizan en los aneurismas cerebrales.",
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {
                  colSpan: 8,
                  text: "Recuerde no usar ningún tipo de joyas incluyendo anillos, piercings, aretes, collares o relojes. Se le pedirá que se quite la ropa que tiene ganchos, botones, cierres u otros objetos metálicos para no interferir con el procedimiento.",
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {
                  colSpan: 8,
                  text: "Finalmente, no olvide informarnos si se encuentra en proceso de gestación o tiene posibilidades de estarlo, si sufre de claustrofobia o si pesa mas de 130 Kg.",
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
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
          marginTop: 10,
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
                  ],
                },
              ],
              [
                {
                  text: "¿Le han practicado exámenes con inyección de contraste de Gadolinio? ¿Otras resonancias? Especifique",
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
                      stack: marcaCasillaPrzonlzda(datos.P_1.trim() ? true : false, 0, 38, 38, 0, -13, -13, 13, 13),
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
                      stack: marcaCasillaPrzonlzda(!datos.P_1.trim() ? true : false, 0, 38, 38, 0, -13, -13, 13, 13),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: datos.P_1,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
              ],
              [
                {
                  text: "¿Presentó alguna reacción adversa al medio de contraste (Gadolinio)? Especifique",
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
                      stack: marcaCasillaPrzonlzda(datos.P_2.trim() ? true : false, 0, 38, 38, 0, -13, -13, 13, 13),
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
                      stack: marcaCasillaPrzonlzda(!datos.P_2.trim() ? true : false, 0, 38, 38, 0, -13, -13, 13, 13),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: datos.P_2,
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
                      stack: marcaCasillaPrzonlzda(datos.P_3.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
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
                      stack: marcaCasillaPrzonlzda(!datos.P_3.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: datos.P_3,
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
                      stack: marcaCasillaPrzonlzda(datos.P_4.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
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
                      stack: marcaCasillaPrzonlzda(!datos.P_4.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: datos.P_4,
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
                      stack: marcaCasillaPrzonlzda(datos.P_5.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
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
                      stack: marcaCasillaPrzonlzda(!datos.P_5.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: datos.P_5,
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
                      stack: marcaCasillaPrzonlzda(datos.P_6.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
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
                      stack: marcaCasillaPrzonlzda(!datos.P_6.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: datos.P_6,
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
                      stack: marcaCasillaPrzonlzda(datos.P_7.trim() ? true : false, 0, 38, 38, 0, -13, -13, 13, 13),
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
                      stack: marcaCasillaPrzonlzda(!datos.P_7.trim() ? true : false, 0, 38, 38, 0, -13, -13, 13, 13),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: datos.P_7,
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
                      stack: marcaCasillaPrzonlzda(datos.P_8.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
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
                      stack: marcaCasillaPrzonlzda(!datos.P_8.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: datos.P_8,
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
                      stack: marcaCasillaPrzonlzda(datos.P_9.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
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
                      stack: marcaCasillaPrzonlzda(!datos.P_9.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: datos.P_9,
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
                      stack: marcaCasillaPrzonlzda(datos.P_10.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
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
                      stack: marcaCasillaPrzonlzda(!datos.P_10.trim() ? true : false, 0, 40, 40, 0, -13, -13, 0, 0),
                    },
                  ],
                },
                {
                  colSpan: 3,
                  text: datos.P_10,
                  style: "tableTitle",
                  alignment: "justify",
                },
                {},
                {},
              ],
              [
                {
                  colSpan: 6,
                  text: "Recuerde que si su examen requiere la administración de medio de contraste endovenoso, el auxiliar de enfermería procederá a canalizarle una vena periférica (venoclisis) para administrar el medio de contraste. El procedimiento de venoclisis es seguro, sin embargo, Ud. puede presentar: ardor, malestar, sangrado escaso, hematoma, flebitis, extravasación y/o infiltración.",
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
              text: `Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la realización del procedimiento en mención, proceda a firmar dejando su autorización por escrito.\n\n Yo ${datos.paciente.descrip}, identificada (o) con el documento de identidad número ${datos.paciente.cod}, después de haber sido informado (a) sobre el procedimiento de Resonancia Magnética Nuclear, los riesgos y beneficios, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo la toma del procedimiento teniendo en cuenta que esta autorización puede ser revocable en cualquier momento.`,
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
              text: `Yo ${datos.paciente.descrip}, identificada (o) con el documento de identidad número ${datos.paciente.cod}, después de haber sido informado (a) sobre el procedimiento de Resonancia Magnética Nuclear sus riesgos y beneficios y adicionalmente, los riesgos de no realizármelo, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con la toma del procedimiento en mención.`,
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
