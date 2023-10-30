import Excel from "exceljs";
import FileSaver, { saveAs } from "file-saver";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { resolve } from "path-browserify";
import { formatNumberMask_ } from "@/setup";
import days from "dayjs";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// import index from "../store/index";

class _ImpresionExcel {
  workbook = new Excel.Workbook();
  worksheet = null;
  content = {
    ruta_logo: "P:\\PROG\\LOGOS\\",
    logo: "",
    tabla: null,
    header: [],
    merge_header: ["B", "D"],
    sheetName: null,
  };
  nombre_archivo = null;
  ruta_guardado = null;
  tabla_render = null;
  constructor(params) {
    this.content.sheetName = params.sheetName || "HOJA";
    this.nombre_archivo = params.archivo || `INFORME-${Math.random()}`;
    this.worksheet = this.workbook.addWorksheet(this.content.sheetName);
    this.content.header = params.header || null;
    this.content.logo = params.logo || null;
    this.content.tabla = params.tabla || null;
    this.content.scale = params.scale || 50;
    this.content.orientation = params.orientation || "portrait";
    this.ruta_guardado = params.ruta_guardado || " ";
    this.content.filas = params.filas || [];
  }

  imprimir() {
    let $this = this;
    return new Promise(function (resolve, reject) {
      if ($this.encabezadoExcel())
        if ($this.tablaExcel()) {
          if ($this.estiloExcel())
            if ($this.insertarFilas())
              writexlsx()
                .then(resolve)
                .catch((err) => {
                  index.commit("isLoading", null, { root: true });
                  console.error(err);
                  reject(err);
                });
        }
    });
  }

  insertarFilas() {
    /* Este script recibe un objeto content que contiene un header y unas filas, luego realiza una serie de validaciones para comprobar si existe el preTable y el postTable, de existir los dos, recorrerá para cada uno de ellos y comprobará si hay un merge o una columna para insertar los datos.
Finalmente devolverá true. */
    let final_encabezado = this.content.header.length + 2;
    let filas = this.content.filas;
    if (filas) {
      let preTable = filas.preTable;
      if (preTable) {
        let row = this.worksheet.getRow(final_encabezado);
        preTable.forEach((el) => {
          if (el.merge) {
            let rango = el.merge;
            this.worksheet.mergeCells(final_encabezado, rango[0], final_encabezado, rango[1]);
            row.getCell(rango[0]).value = el.text;
          } else {
            let column = parseInt(el.columna);
            row.getCell(column).value = el.text;
          }
        });
      }

      let posTable = filas.posTable;
      if (posTable) {
        let lastRow = this.worksheet.lastRow._number + 1;
        let row = this.worksheet.getRow(lastRow);
        posTable.forEach((el) => {
          if (el.merge) {
            let rango = el.merge;
            this.worksheet.mergeCells(final_encabezado, rango[0], final_encabezado, rango[1]);
            row.getCell(rango[0]).value = el.text;
          } else {
            let column = parseInt(el.columna);
            row.getCell(column).value = el.text;
          }
        });
      }
    }

    //return true;
    this.writexlsx();
  }

  tablaExcel() {
    /* Este script es una función que permite crear una tabla en un archivo Excel. La función recibe como argumento el contenido de la tabla, como las columnas y los datos, y se los asigna a variables para su posterior uso. Luego, utiliza la función addTable de la librería worksheet para crear la tabla, se le asigna un nombre, una referencia de inicio, una fila de totales si es necesario, y se definen los estilos que tendrá la tabla. Finalmente, se llama a la función writexlsx para guardar la tabla en el archivo excel. */
    let final_encabezado = this.content.header.length;
    let inicio_tabla = `A${final_encabezado + 3}`;
    this.tabla_render = this.worksheet.addTable({
      name: "table",
      ref: inicio_tabla,
      totalsRow: this.content.tabla.totalsRow || false,
      headerRow: true,
      style: {
        theme: "TableStyleMedium16",
        showRowStripes: true,
      },
      columns: this.tablaHeader(),
      rows: this.tablaDatos(),
    });
    return true;
    //this.writexlsx();
  }

  tablaHeader() {
    let columnas = this.content.tabla.columnas;
    columnas.map((el) => {
      el.name = el.title;
    });
    return columnas;
  }

  encabezadoExcel() {
    let $this = this;
    let bordes = {
      top: { style: "thin", color: { argb: "000" } },
      left: { style: "thin", color: { argb: "000" } },
      bottom: { style: "thin", color: { argb: "000" } },
      right: { style: "thin", color: { argb: "000" } },
    };
    let header = $this.content.header;
    let columnas_final = $this.content.tabla.columnas.length;
    let columnas_limite = columnas_final > 26 ? 20 : columnas_final;
    let final_text = String.fromCharCode(96 + columnas_limite);

    let inicial = $this.content.merge_header[0];
    let final = columnas_final < 4 ? $this.content.merge_header[1] : final_text.toUpperCase();
    header.forEach((val, index) => {
      index++;
      let key_inicial = `${inicial + index}`;
      let key_final = `${final + index}`;
      let text = typeof val == "object" ? val.text : val;
      $this.worksheet.mergeCells(`${key_inicial}:${key_final}`);

      $this.worksheet.getRow(index).height = 20;

      let cell = $this.worksheet.getCell(key_inicial);
      cell.value = text;
      cell.font = {
        bold: typeof val == "object" ? val.bold : false,
        size: typeof val == "object" ? val.size : 12,
      };

      cell.alignment = {
        vertical: "middle",
        horizontal: "left",
      };

      cell.border = bordes;
    });
    let logo_merge = `A1:A${header.length}`;

    let logo = this.content.logo;

    const image = $this.workbook.addImage({
      base64: logo,
      extension: "png",
    });

    $this.worksheet.addImage(image, logo_merge);
    $this.worksheet.mergeCells(logo_merge);
    $this.worksheet.getColumn("A").width = 20;
    $this.worksheet.getCell("A1").border = bordes;

    return true;
  }

  tablaDatos() {
    let datos = this.content.tabla.data;
    let columnas = this.content.tabla.columnas;

    let formato_datos = [];

    datos.forEach((row, index) => {
      formato_datos.push([]);
      columnas.forEach((columna) => {
        if (columna.format == "money") {
          let val = row[columna.value] || "";
          val = formatNumberMask_(val, 2);
          formato_datos[index].push(val || "");
        } else if (columna.format == "number") {
          let val = row[columna.value] || 0;
          val = parseFloat(val);
          formato_datos[index].push(val || 0);
        } else {
          if (columna.format == "fecha") {
            let val = row[columna.value] || "";
            val = val.toString().trim();
            if (val.length == 8) {
              val = val.substring(0, 4) + "/" + val.substring(4, 6) + "/" + val.substring(6, 8);
            } else if (val.length == 6) {
              val = val.substring(0, 2) + "/" + val.substring(2, 4) + "/" + val.substring(4, 6);
            }
            formato_datos[index].push(val || "");
          } else if (columna.format == "string") {
            let val = row[columna.value] || "";
            val = val.toString().trim();
            formato_datos[index].push(val || "");
          } else {
            let val = row[columna.value] || "";
            val = val.toString().trim();
            formato_datos[index].push(val || "");
          }
        }
      });
    });
    return formato_datos;
  }

  estiloExcel() {
    let final_encabezado2 = this.content.header.length;
    let columnas_final_2 = this.content.tabla.columnas.length;

    let $this = this;
    let tabla = this.tabla_render;
    let rango = tabla.table.tableRef.split(":");
    let limite_ini = rango[0].substr(1); // Row inicio de tabla
    // Row final de tabla
    let limite_fin = null;
    columnas_final_2 > 26 ? (limite_fin = rango[1].substr(2)) : (limite_fin = rango[1].substr(1));

    // David.M 17/07/2020
    // Se agrega escala, orientacion y encabezado repetible en cada pagina
    // Se elimina printArea para que sea automatico.

    this.worksheet.pageSetup.scale = this.content.scale;
    this.worksheet.pageSetup.orientation = this.content.orientation;
    this.worksheet.pageSetup.printTitlesRow = `1:${final_encabezado2 + 2}`;

    // Ajusta la altura (height) de cada fila
    let heightRow = this.content.tabla.heightRow || false;
    this.worksheet._rows.forEach((row) => {
      if (row._number >= limite_ini && row._number <= limite_fin) row.height = heightRow || 20;
    });

    //Ajusta todas las celdas al tamaño del texto
    //Asigna formato (money) a las columnas seleccionadas
    this.worksheet.columns.forEach((column, index) => {
      let width = 0;
      let id_columna = column._number;
      let config_column = $this.content.tabla.columnas[id_columna - 1] || false;

      column.eachCell({ includeEmpty: false }, (cell) => {
        let coord = null;
        let columna = null;
        let parent_columna = null;
        let col2 = cell._address.substring(1, 2);
        // Condicion evaluando si hay mas de 26 columnas
        if (isNaN(parseFloat(col2))) {
          coord = parseInt(cell._address.substr(2));
          columna = String.fromCharCode(96 + id_columna).toUpperCase();
          parent_columna = cell._address.substr(0, 2);
        } else {
          coord = parseInt(cell._address.substr(1));
          columna = String.fromCharCode(96 + id_columna).toUpperCase();
          parent_columna = cell._address.substr(0, 1);
        }
        cell.alignment = {
          vertical: "middle",
          // horizontal: ["money", "right"].includes(config_column.format) ? "right" : "left",
        };

        if (
          coord >= parseInt(limite_ini) &&
          coord < parseInt(limite_fin) &&
          cell._address != "A1"
        ) {
          let actual = cell.value ? (cell.value.length || 10) + 5 : 10;
          width = actual > width ? actual : width;
        }
        if (
          coord > parseInt(limite_ini) &&
          columna == parent_columna &&
          config_column &&
          config_column.format &&
          config_column.format == "money"
        ) {
          cell.alignment = {
            vertical: "middle",
            horizontal: "right",
          };
          cell.numFmt = "$#,##0.00;[Red]-$#,##0.00";
        }

        if (
          coord > parseInt(limite_ini) &&
          columna == parent_columna &&
          config_column &&
          config_column.format &&
          config_column.format == "fecha"
        )
          cell.numFmt = "dd/mm/yyyy";
      });

      column.width = column._number == 1 && width < 20 ? 20 : width;
    });

    return true;
  }

  async writexlsx() {
    let name = `${this.ruta_guardado}${this.nombre_archivo}.xlsx`;
    this.workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: this.blobType });
      FileSaver.saveAs(blob, name);
    });

    // await this.workbook.xlsx.writeFile(name);
    // child(name);
  }
}

class _impresion_pdf {
  content = null;
  nombre_archivo = null;
  ruta_guardado = "DESCARGA";
  abrir_archivo = null;

  constructor(params) {
    this.content = params.content;
    this.nombre_archivo = params.archivo;
    this.ruta_guardado = params.ruta_guardado || this.ruta_guardado;
    this.abrir_archivo = params.abrir_archivo != undefined ? params.abrir_archivo : true;
    this.retornar = params.retornar == true ? true : false;
  }

  async imprimir() {
    let tipo_imp = 0;
    if (
      (["043", "03", "041"].includes(localStorage.idOpciondata) &&
        $_USUA_GLOBAL[0].NIT == 822000327 &&
        sessionStorage.Modulo == "HIC") ||
      (["09421", "097C13"].includes(localStorage.idOpciondata) &&
        [800037021, 845000038].includes($_USUA_GLOBAL[0].NIT) &&
        sessionStorage.Modulo == "SAL")
    ) {
    }

    var _this = this;
    if (this.content.pageSize) {
      this.content.pageSize = this.content.pageSize || "letter";
    }
    return new Promise(function (resolve, reject) {
      var nombre_archivo = `${_this.ruta_guardado}${_this.nombre_archivo}`;
      let validacion = _this.validarImg(_this.content);
      var docDefinition = validacion;
      try {
        if (_this.retornar) {
          const pdfDocGenerator = pdfMake.createPdf(docDefinition);
          pdfDocGenerator.getBuffer((data) => {
            resolve(data);
          });
        } else {
          const pdfDocGenerator = pdfMake.createPdf(docDefinition);
          pdfDocGenerator.getBuffer(async (data) => {
            const blob = new Blob([data], { type: "application/pdf" });
            const pdfUrl = URL.createObjectURL(blob);

            // Abrir una nueva pestaña con la URL del PDF
            window.open(pdfUrl, "_blank");
            saveAs(blob, nombre_archivo); // Descargar el archivo en el navegador
            resolve();
          });
        }
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  validarImg(data) {
    if (!data.images) data.images = {};

    let imagenes = data.images;
    Object.getOwnPropertyNames(imagenes).forEach(function (val) {
      let ruta = imagenes[val];
      try {
        // let base64 = require("fs").readFileSync(ruta).toString("base64");
        imagenes[val] = "data:image/png;base64," + base64;
      } catch {
        //imagen en blanco
        imagenes[val] =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
      }
    });
    data.images = imagenes;
    if (data.codigo_barras) {
      var codigos = data.codigo_barras;
      Object.getOwnPropertyNames(codigos).forEach(function (val) {
        let actual = null;
        let options = {};

        if (typeof codigos[val] == "string") actual = codigos[val];
        else {
          actual = codigos[val].text;
          options = codigos[val].options;
        }

        var canvas = document.createElement("CANVAS");

        JsBarcode(canvas, actual, options);
        let url = canvas.toDataURL();
        canvas.remove();
        data.images[val] = url;
      });
    }

    return data;
  }

  ventana_imprimir_directo() {}
}

class _impresion_list_pdf {
  constructor(params) {
    this.ruta_logo = params.ruta_logo || "P:\\PROG\\LOGOS\\";
    this.nombre_archivo = params.archivo || `INFORME-${Math.random()}`;
    this.logo = params.logo || null;
    this.header = params.header || "";
    this.tabla = params.tabla || null;
    this.orientation = params.orientation || "landscape";
    this.stack_inicial = params.stack_inicial || [];

    this.mascara_valor = IMask.createMask({
      mask: Number,
      thousandsSeparator: ",",
      min: -999999999999,
      max: 9999999999999,
    });
  }

  format() {
    return {
      pageMargins: [20, 90, 20, 40],
      pageOrientation: this.orientation,
      images: { logo: `${this.ruta_logo}${this.logo}` },
      header: this.header_list_pdf(),
      content: [
        { stack: this.stack_inicial },
        {
          table: this.contentListPdf(),
          layout: {
            hLineWidth: (i) => {
              if (i == 0 || i == 1 || i == this.tabla.data.length + 1) return 1;
              else return 0;
            },
            vLineWidth: (i) => {
              if (i == 0 || i <= this.tabla.columnas.length) return 1;
              else return 0;
            },
            hLineColor: (i) => {
              return i != 0 && i != this.tabla.data.length + 1 ? "gray" : "black";
            },
            vLineColor: (i) => {
              return i != 0 && i != this.tabla.columnas.length ? "gray" : "black";
            },
          },
        },
      ],
      styles: this.stylesListPdf(),
    };
  }

  async imprimir() {
    await generarImpresion({
      tipo: "pdf",
      archivo: `${this.nombre_archivo}.pdf`,
      content: this.format(),
    })
      .then((data) => {
        return resolve(data);
      })
      .catch((error) => {
        console.error("imprimir", error);
      });
  }

  header_list_pdf() {
    return (currentPage, pageCount, pageSize) => {
      return {
        margin: [20, 20, 20, 0],
        stack: [
          {
            style: "left8",
            table: {
              widths: ["25%", "50%", "25%"],
              heights: [53],
              body: [
                [
                  {
                    margin: [10, 4, 0, 0],
                    stack: [
                      {
                        image: "logo",
                        width: 70,
                        height: 50,
                      },
                    ],
                    border: [true, true, false, true],
                    width: "20%",
                  },
                  {
                    marginTop: 7,
                    style: "center10Bold",
                    stack: [this.header],
                    width: "60%",
                    border: [false, true, false, true],
                  },
                  {
                    stack: [
                      { text: `FECHA IMP: ${days().format("YYYY-MM-DD")}` },
                      {
                        text: `PAG: ${currentPage} de ${pageCount}`,
                        marginTop: 14,
                      },
                    ],
                    margin: [0, 7, 7, 0],
                    style: "right10Bold",
                    width: "20%",
                    border: [false, true, true, true],
                  },
                ],
              ],
            },
          },
        ],
      };
    };
  }
  contentListPdf() {
    let table = {
      headerRows: 1,
      body: [],
    };
    let row_header = [],
      widths = [];
    // header
    this.tabla.columnas.forEach((col) => {
      row_header.push({
        text: col.title,
        style: col.style ? col.style : "center9BoldT",
        alignment: col.alignment ? col.alignment : "center",
      });
      if (col.width) widths.push(col.width);
      else widths.push("*");
    });
    table.widths = widths;
    table.body.push(row_header);

    let row_content = [];
    // content
    this.tabla.data.forEach((row) => {
      row_content = [];
      this.tabla.columnas.forEach((col) => {
        let cell = row[col.value],
          style = "";
        switch (col.format) {
          case "money":
            // config_column.value = formatNumberMask_(config_column.value, 2);
            cell = parseFloat(cell.toString().replace(/\,/g, "")) || 0;
            cell = this.mascara_valor.resolve(parseFloat(cell).toString());
            // cell = `$ ${cell}`;
            style = "right9";
            break;
          case "fecha":
            cell = `${cell.slice(0, 4)}/${cell.slice(4, 6)}/${cell.slice(6)}`;
            style = "center9";
            break;
          case "string":
            cell = cell;
            style = "left9";
            break;
          case "number":
            cell = parseFloat(cell) ? parseFloat(cell) : cell;
            style = "center9";
            break;
          default:
            cell = parseFloat(cell) ? parseFloat(cell) : cell;
            style = "left9";
            break;
        }

        if (col.body_style)
          row_content.push({
            text: cell,
            style: col.body_style ? col.body_style : style,
          });
        else
          row_content.push({
            text: cell,
            style: col.style ? col.style : style,
          });
      });
      table.body.push(row_content);
    });

    return table;
  }

  stylesListPdf() {
    return {
      left9: { fontSize: 9, alignment: "left" },
      center9: { fontSize: 9, alignment: "center" },
      right9: { fontSize: 9, alignment: "right" },
      center9Bold: { fontSize: 9, alignment: "center", bold: true },
      center9BoldT: {
        fontSize: 9,
        alignment: "center",
        bold: true,
        fillColor: "#D1DFF4",
      },
      center10Bold: { fontSize: 10, alignment: "center", bold: true },
      right10Bold: { fontSize: 10, alignment: "right", bold: true },
      center7BoldT: {
        fontSize: 7,
        alignment: "center",
        bold: true,
        fillColor: "#D1DFF4",
      },
      left7: { fontSize: 7, alignment: "left" },
    };
  }
}
export const generarImpresion = async (params) => {
  return new Promise(function (resolve, reject) {
    if (!params.tipo) {
      index.commit("isLoading", null, { root: true });
      alert("Falta definir tipo de impresión");
      reject("Falta definir tipo de impresión");
    } else if (params.tipo == "excel") {
      let config = new _ImpresionExcel(params);
      config
        .imprimir()
        .then(resolve("Impresión excel exitosa"))
        .catch(reject("La impresión ha fallado"));
      index.commit("resetSpinner", null, { root: true });
    } else if (params.tipo == "pdf") {
      var config = new _impresion_pdf(params);
      config
        .imprimir()
        .then(resolve("Impresión PDF exitosa"))
        .catch(reject("La impresión ha fallado"));
    } else if (params.tipo == "list_pdf") {
      let config = new _impresion_list_pdf(params);
      config
        .imprimir()
        .then(resolve("Impresión PDF exitosa"))
        .catch(reject("La impresión ha fallado"));
    } else {
      alert("Tipo de impresión no disponible");
      reject("Tipo de impresión no disponible");
    }
  });
  // .finally(index.commit("isLoading", null, { root: true }));
};
