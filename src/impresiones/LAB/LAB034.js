import { evaluarParentesco } from "@/formatos/utils";
export const impresionLAB034 = ({ datos }) => {
  console.log("impresionLAB034 -> ", datos);

  var dd = {
    stack: [contenidoLAB034(), firmas()],
  };

  function contenidoLAB034() {
    return {
      stack: [
        {
          marginTop: 1,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Fecha: ",
            },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.fecha },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: " Entidad: ",
            },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.paciente.descrip_eps },
          ],
        },
        {
          marginTop: 2,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Nombre del paciente: ",
            },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.paciente.descrip },
          ],
        },
        {
          marginTop: 2,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Documento de identificación: ",
            },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.paciente.cod },
          ],
        },
        {
          marginTop: 2,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Tipo documento de identificación: ",
            },
            { bold: true, alignment: "center", style: "bodyNoBold9", text: datos.paciente.tipo_id },
          ],
        },
        {
          marginTop: 10,
          text: [
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: "Yo ",
            },
            {
              bold: true,
              alignment: "center",
              style: "bodyNoBold9",
              text: datos.acomp.er_nom + " " + datos.acomp.do_nom + " " + datos.acomp.er_apel + " " + datos.acomp.do_apel,
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: " con cedula ciudadanía No. ",
            },
            {
              bold: true,
              alignment: "center",
              style: "bodyNoBold9",
              text: datos.acomp.tipo_id + " " + datos.acomp.cod,
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: " de ",
            },
            {
              bold: true,
              alignment: "center",
              style: "bodyNoBold9",
              text: datos.acomp.descrip_ciudad,
            },
            {
              alignment: "justify",
              style: "bodyNoBold9",
              text: " en calidad de familiar y/o acompañante responsable del paciente anteriormente mencionado, reconozco que se me explico y entendí el compromiso que adquiero, en el momento del egreso “salida” de mi familiar  a realizar el pago correspondiente a los días de hospitalización “copago” , de acuerdo  al tipo de régimen y nivel que pertenece el paciente, siendo un porcentaje equivalente al valor total de la estancia hospitalaria, según (Acuerdo 260 de 2004 CNSSS – Ley 1955 de 2019, artículo 49).",
            },
          ],
        },
        {
          marginTop: 10,
          text: [
            { style: "bodyNoBold9", bold: true, text: "Copago: " },
            { style: "bodyNoBold9", bold: true, text: " SI " },
            { style: "bodyNoBold9", bold: true, decoration: "underline", text: datos.copago == "S" ? " X " : "    " },
            { style: "bodyNoBold9", bold: true, text: " NO " },
            { style: "bodyNoBold9", bold: true, decoration: "underline", text: datos.copago == "N" ? " X " : "    " },
          ],
        },
        {
          marginTop: 10,
          bold: true,
          alignment: "center",
          style: "bodyNoBold9",
          text: "PAGOS DE COPAGOS",
        },
        {
          marginTop: 2,
          bold: true,
          style: "bodyNoBold9",
          text: "REGIMEN CONTRIBUTIVO",
        },
        {
          marginTop: 10,
          table: {
            widths: ["13%", "33%", "27%", "27%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Copagos tope evento",
                  rowSpan: 4,
                },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "Rango de ingresos en SMLMV" },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Porcentaje del valor del servicio",
                },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "Tope por evento 2025" },
              ],
              [
                {},
                { alignment: "center", style: "bodyNoBold9", text: "A (Menor a 2 SMLMV)" },
                { alignment: "center", style: "bodyNoBold9", text: "11,50%" },
                { alignment: "center", style: "bodyNoBold9", text: "$ 356.548" },
              ],
              [
                {},
                { alignment: "center", style: "bodyNoBold9", text: "B (Entre 2 y 5 SMLMV)" },
                { alignment: "center", style: "bodyNoBold9", text: "17,30%" },
                { alignment: "center", style: "bodyNoBold9", text: "$ 1'428.678" },
              ],
              [
                {},
                { alignment: "center", style: "bodyNoBold9", text: "C (Mayor a 5 SMLMV)" },
                { alignment: "center", style: "bodyNoBold9", text: "23,00%" },
                { alignment: "center", style: "bodyNoBold9", text: "$ 2'857.356" },
              ],
            ],
          },
        },
        {
          marginTop: 10,
          table: {
            widths: ["13%", "57%", "30%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Copagos tope año",
                  rowSpan: 4,
                },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "Rango de ingresos en SMLMV" },

                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "Tope por año 2025" },
              ],
              [
                {},
                { alignment: "center", style: "bodyNoBold9", text: "A (Menor a 2 SMLMV)" },
                { alignment: "center", style: "bodyNoBold9", text: "$ 714.339" },
              ],
              [
                {},
                { alignment: "center", style: "bodyNoBold9", text: "B (Entre 2 y 5 SMLMV)" },
                { alignment: "center", style: "bodyNoBold9", text: "$ 2'857.356" },
              ],
              [
                {},
                { alignment: "center", style: "bodyNoBold9", text: "C (Mayor a 5 SMLMV)" },
                { alignment: "center", style: "bodyNoBold9", text: "$ 5'714.711" },
              ],
            ],
          },
        },
        {
          marginTop: 2,
          bold: true,
          style: "bodyNoBold9",
          text: "SUBSIDIADO NIVEL 2",
        },
        {
          marginTop: 10,
          table: {
            widths: ["13%", "10%", "27%", "25%", "25%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Copagos tope año",
                  rowSpan: 3,
                },
                { fillColor: "#6ca4c4", color: "white", bold: true, alignment: "center", style: "bodyNoBold9", text: "Nivel" },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Porcentaje del valor del servicio",
                },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Tope por evento 2025",
                },
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  bold: true,
                  alignment: "center",
                  style: "bodyNoBold9",
                  text: "Tope por año 2025",
                },
              ],
              [
                {},
                { alignment: "center", style: "bodyNoBold9", text: "1" },
                { alignment: "center", style: "bodyNoBold9", text: "0,0%" },
                { alignment: "center", style: "bodyNoBold9", text: "0,0" },
                { alignment: "center", style: "bodyNoBold9", text: "0,0" },
              ],
              [
                {},
                { alignment: "center", style: "bodyNoBold9", text: "2" },
                { alignment: "center", style: "bodyNoBold9", text: "10%" },
                { alignment: "center", style: "bodyNoBold9", text: "$ 621.164" },
                { alignment: "center", style: "bodyNoBold9", text: "$ 1'242.329" },
              ],
            ],
          },
        },
      ],
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
  return dd;
};
