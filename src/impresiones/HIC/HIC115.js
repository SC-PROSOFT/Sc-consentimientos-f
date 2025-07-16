import { calcularEdad, evaluarParentesco } from "@/formatos/utils";
import dayjs from "dayjs";

export const impresionHIC115 = ({ datos }) => {
  console.log(" impresionHIC115 ", datos);

  const tablaServicio = () => {
    let tabla_filtra = datos.tabla_servicio
      .filter((item) => item.indice_i != " " && item.indice_i != null && item.indice_i != "")
      .map((item) => [
        {
          text: item.indice_i,
        },
        {
          text: item.fecha,
        },
        // Equinoterapia
        { bold: true, alignment: "center", text: item.tipo_serv == "1" ? "X" : " " },
        // Musicoterapia
        {
          bold: true,
          alignment: "center",
          text: item.tipo_serv == "2" ? "X" : " ",
        },
        // Caninoterapia
        {
          bold: true,
          alignment: "center",
          text: item.tipo_serv == "3" ? "X" : " ",
        },
        {
          text: item.nomb_prof,
        },
      ]);
    tabla_filtra.push([
      { bold: true, text: "Total Servicios:", colSpan: 2 },
      {},
      // Equinoterapia
      {
        bold: true,
        alignment: "center",
        text: datos.tabla_servicio.filter((item) => item.tipo_serv == "1").length || "",
      },
      // Musicoterapia
      {
        bold: true,
        alignment: "center",
        text: datos.tabla_servicio.filter((item) => item.tipo_serv == "2").length || "",
      },
      // Caninoterapia
      {
        bold: true,
        alignment: "center",
        text: datos.tabla_servicio.filter((item) => item.tipo_serv == "3").length || "",
      },
      {},
    ]);
    return tabla_filtra;
  };

  var dd = {
    stack: [contenidoSedacion(), firmas()],
  };

  function contenidoSedacion() {
    return {
      stack: [
        {
          marginTop: 5,
          table: {
            marginRigth: 1,
            widths: ["50%", "50%"],
            body: [
              [
                {
                  fillColor: "#6ca4c4",
                  color: "white",
                  style: "tableTitle",
                  text: "Datos de identificación del paciente",
                  bold: true,
                  alignment: "center",
                  colSpan: 2,
                },
                {},
              ],
              [
                {
                  text: [
                    { style: "tableTitle", bold: true, text: "Nombre del Paciente: " },
                    { style: "bodyNoBold", text: datos.paciente.descrip },
                  ],
                },
                {
                  text: [
                    { style: "tableTitle", bold: true, text: "Fecha de Nac.: " },
                    { style: "bodyNoBold", text: datos.paciente.nacim },
                  ],
                },
              ],
              [
                {
                  text: [
                    { style: "tableTitle", bold: true, text: "Documento: " },
                    { style: "bodyNoBold", text: datos.paciente.tipo_id + " " + datos.paciente.cod },
                  ],
                },
                {
                  text: [
                    { style: "tableTitle", bold: true, text: "Edad: " },
                    { style: "bodyNoBold", text: calcularEdad(datos.paciente.nacim) },
                  ],
                },
              ],
              [
                {
                  text: [
                    { style: "tableTitle", bold: true, text: "Direccion: " },
                    { style: "bodyNoBold", text: datos.paciente.direccion },
                  ],
                },
                {
                  text: [
                    { style: "tableTitle", bold: true, text: "Sexo: " },
                    { style: "bodyNoBold", text: datos.paciente.sexo },
                  ],
                },
              ],
              [
                {
                  text: [
                    { style: "tableTitle", bold: true, text: "EPS: " },
                    { style: "bodyNoBold", text: datos.paciente.descrip_eps },
                  ],
                },
                {
                  text: [
                    { style: "tableTitle", bold: true, text: "Ciudad: " },
                    { style: "bodyNoBold", text: datos.paciente.descrip_ciudad },
                  ],
                },
              ],
              [
                {
                  text: [
                    { style: "tableTitle", bold: true, text: "Diagnostico: " },
                    { style: "bodyNoBold", text: datos.cod_diagn + " " + datos.descrip_diagn },
                  ],
                },
                {
                  text: [
                    { style: "tableTitle", bold: true, text: "Telefono: " },
                    { style: "bodyNoBold", text: datos.paciente.telefono },
                  ],
                },
              ],
            ],
          },
          width: "100%",
        },
        { marginTop: 10, alignment: "center", style: "tableTitle", bold: true, text: "SERVICIOS NO POS" },
        {
          columns: [
            {
              fontSize: 8,
              marginTop: 5,
              table: {
                marginRigth: 1,
                widths: ["4%", "9%", "16%", "17%", "16%", "38%"],
                body: [
                  [
                    { fillColor: "#6ca4c4", color: "white", text: "Item", bold: true, alignment: "justify" },
                    { fillColor: "#6ca4c4", color: "white", text: "Fecha", bold: true, alignment: "justify" },
                    { fillColor: "#6ca4c4", color: "white", text: "Equinoterapia", bold: true, alignment: "justify" },
                    { fillColor: "#6ca4c4", color: "white", text: "Musicoterapia", bold: true, alignment: "justify" },
                    { fillColor: "#6ca4c4", color: "white", text: "Caninoterapia", bold: true, alignment: "justify" },
                    { fillColor: "#6ca4c4", color: "white", text: "Nombre Profesional", bold: true, alignment: "justify" },
                  ],
                  ...tablaServicio(),
                ],
              },

              width: "100%",
            },
          ],
        },
        // {
        //   marginTop: 10,
        //   alignment: "justify",
        //   text: [
        //     { style: "tableTitle", text: "Yo  " },
        //     { style: "bodyNoBold", bold: true, text: datos.prof.descrip },
        //     { style: "tableTitle", text: " con número de identificación " },
        //     { style: "bodyNoBold", bold: true, text: datos.prof.cod },
        //     { style: "tableTitle", text: " Doy a conocer que el usuario mencionado, recibio los servicios satisfactoriamente. " },
        //   ],
        // },
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

  //   function firmaProfesional() {
  //     return {
  //       stack: [
  //         {
  //           text: "FIRMA PROFESIONAL",

  //           alignment: "center",
  //           style: "tableNoBold",
  //           bold: true,
  //         },
  //         {
  //           marginTop: 8,
  //           alignment: "center",
  //           image: "firma_profesional",
  //           width: 130,
  //           height: 70,
  //         },
  //         {
  //           marginTop: 8,
  //           text: [
  //             {
  //               text: "NOMBRE: ",
  //               style: "tableNoBold",
  //               bold: true,
  //             },
  //             {
  //               text: `${datos.prof.descrip}`,
  //               style: "tableNoBold",
  //             },
  //           ],
  //         },
  //         {
  //           columns: [
  //             {
  //               width: "auto",
  //               style: "tableNoBold",
  //               text: "PROFESIONAL AREA DE:",
  //               bold: true,
  //             },
  //             {
  //               marginLeft: 5,
  //               style: "tableNoBold",
  //               text: `${datos.prof.descrip_atiende}`,
  //             },
  //           ],
  //         },
  //         {
  //           columns: [
  //             {
  //               width: "auto",
  //               style: "tableNoBold",
  //               text: "DOCUMENTO: ",
  //               bold: true,
  //             },
  //             {
  //               marginLeft: 5,
  //               style: "tableNoBold",
  //               text: `${datos.prof.cod}`,
  //             },
  //           ],
  //         },
  //       ],
  //     };
  //   }

  function firmas() {
    let firmasArray = [];
    let anchos = ["40%"];
    let tamanoFirmasArray = 0;

    if (datos.firmas.firma_acomp) {
      firmasArray.push(firmaAcompanante());
    }

    // if (datos.firmas.firma_prof) {
    //   firmasArray.push(firmaProfesional());
    // }

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
