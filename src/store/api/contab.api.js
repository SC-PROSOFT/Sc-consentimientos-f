import { defineStore } from "pinia";
import { apiAxios } from "@/api/apiAxios";
import { apiAxiosDll } from "@/api/apiAxiosDll";
import { regEncabezado } from "@/fuentes";
import { useModuleFormatos } from "@/store";
import env_package from "./../../../package.json";

export const useApiContabilidad = defineStore("contabilidad", {
  state: () => ({
    empresa: useModuleFormatos().getEmpresa,
    encabezado: regEncabezado(),
  }),
  getters: {
    getEncabezado() {
      return this.encabezado;
    },
    getImgBs64: () => "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  },
  actions: {
    logOut$() {
      sessionStorage.removeItem("operador");
      sessionStorage.removeItem("token");
      window.close();
    },
    setHeader$({ encabezado }) {
      this.encabezado = encabezado;
    },
    getVersionBuild$({}) {
      return new Promise((resolve, reject) => {
        fetch(`https://api.github.com/repos/${process.env.USER_GIT}/SETUP-CONSEN-VUE/releases/latest`)
          .then((response) => response.json())
          .then((release) => {
            if (release.message) reject("Credenciales erroneas");
            if (env_package.version != release.name) resolve(release.name);
          })
          .catch((error) => console.error(error));
      });
    },
    actualizarVersion$({}) {
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/actualizar-versiones`,
          method: "POST",
          params: {
            modulo: "CONSEN",
            directorio_modulo: `D:/WEB/consentimientos`,
          },
          loader: true,
        })
          .then((response) => {
            resolve(response.message);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    getDll$({ directorio_dll = null, data = {}, modulo = "", espacios = false, loader = true }) {
      return new Promise((resolve, reject) => {
        apiAxiosDll({
          url: `contabilidad/dll`,
          method: "POST",
          params: {
            directorio: directorio_dll ? directorio_dll : `${process.env.APP}/${modulo}`,
            ip: localStorage.ip,
            espacios,
          },
          data,
          loader,
        })
          .then((response) => resolve(response))
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    enviarCorreo$({ file = null, subject = "", cuerpo = "", destino = "", loader = true }) {
      const formData = new FormData();
      formData.append("archivo", file, "consentimiento.pdf");

      const data_correo = {
        server_email: "smtp.gmail.com",
        remitente: this.empresa.emailusu.toLowerCase(),
        clave: this.empresa.clave_email.toLowerCase(),
        puerto: 587,
        destino,
        subject,
        cuerpo,
      };

      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/enviar-correo`,
          method: "POST",
          data: formData,
          params: data_correo,
          loader,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then((response) => resolve(response))
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },

    guardarArchivo$({ nombre, ruta, file = null, loader = true }) {
      const formData = new FormData();
      formData.append("archivo", file, nombre);
      const data_archivo = {
        ruta,
      };

      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/guardar-archivo`,
          method: "POST",
          data: formData,
          params: data_archivo,
          loader,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then((response) => resolve(response))
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },

    guardarFile$({ base64 = "", ruta = "", codigo = "", formato = "png", loader = true }) {
      if (this.empresa.unid_prog == "S") {
        ruta = `D:/SC/newcobol/DATOS/FIRMAS_CONSEN`;
      } else if (this.empresa.unid_prog == "P") {
        ruta = `D:/PSC/PROG/DATOS/FIRMAS_CONSEN`;
      }

      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/guardar-file`,
          method: "POST",
          data: { base64: base64 && base64.slice(22), ruta: `${ruta}/${codigo}.${formato}` },
          loader,
        })
          .then((response) => resolve(response))
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },

    guardarEsquema$({ base64 = "", ruta = "", codigo = "", formato = "png", loader = true }) {
      if (this.empresa.unid_prog == "S") {
        ruta = `D:/SC/newcobol/DATOS/FIRMAS_CONSEN`;
      } else if (this.empresa.unid_prog == "P") {
        ruta = `D:/PSC/PROG/DATOS/ESQUEMAS_CONSEN`;
      }

      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/guardar-file`,
          method: "POST",
          data: { base64: base64 && base64.slice(22), ruta: `${ruta}/${codigo}.${formato}` },
          loader,
        })
          .then((response) => resolve(response))
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    guardarPdf$({ data_archivo, loader = true }) {
      const ruta = `D:/PSC/PROG/DATOS/ANEXOS/CONSENTIMIENTOS`;
      const formData = new FormData();
      formData.append("archivo", data_archivo);
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/guardar-archivo?ruta=${ruta}`,
          method: "POST",
          data: formData,
          loader,
        })
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    _getEsquema$({ codigo = 0, formato = "png" }) {
      let ruta;
      if (this.empresa.unid_prog == "S") {
        ruta = `D:/SC/newcobol/DATOS/FIRMAS_CONSEN`;
      } else if (this.empresa.unid_prog == "P") {
        ruta = `D:/PSC/PROG/DATOS/ESQUEMAS_CONSEN`;
      }

      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/get-imagen`,
          method: "GET",
          params: { ruta, codigo, formato },
          loader: true,
        })
          .then((response) => {
            if (response.success && response.data) resolve(`data:image/png;base64,${response.data}`);
            else resolve(this.getImgBs64);
          })
          .catch((error) => {
            console.error(error);
            reject(`Error consultando esquema ${codigo}`);
          });
      });
    },

    _getLogo$({ nit = 0, formato = "png" }) {
      nit = isNaN(nit) ? String(nit) : Number(this.empresa.nitusu);
      let ruta;

      if (this.empresa.unid_prog == "S") {
        ruta = `D:/SC/newcobol/LOGOS`;
      } else if (this.empresa.unid_prog == "P") {
        ruta = `D:/PSC/PROG/LOGOS`;
      }
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/get-imagen`,
          method: "GET",
          params: { ruta, codigo: nit, formato },
          loader: true,
        })
          .then((response) => {
            if (response.success) resolve(response.data);
            else {
              resolve("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");
            }
          })
          .catch((error) => {
            console.error(error);
            reject(`Error consultando logo de nit ${nit}`);
          });
      });
    },
    _getFirma$({ disco = "D", codigo = 0, formato = "png", programa = "PSC" }) {
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/get-firma`,
          method: "GET",
          params: { disco, codigo, formato, programa },
          loader: true,
        })
          .then((response) => {
            if (response.success) resolve(`data:image/png;base64,${response.data}`);
            else resolve(this.getImgBs64);
          })
          .catch((error) => {
            console.error(error);
            reject("Error consultando firma");
          });
      });
    },
    _getHuella$({ codigo = 0, formato = "png", ruta = "" }) {
      if ([" ", "", "+"].includes(codigo)) {
        codigo = 0;
      }
      if (ruta == "") {
        if (this.empresa.unid_prog == "S") {
          ruta = `D:/SC/newcobol/DATOS/BIOMETRIA`;
        } else if (this.empresa.unid_prog == "P") {
          ruta = `D:/PSC/PROG/DATOS/BIOMETRIA/HUELLAS`;
        }
      }

      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/get-imagen`,
          method: "GET",
          params: { ruta, codigo, formato },
          loader: true,
        })
          .then((response) => {
            if (response.success) {
              resolve(`data:image/png;base64,${response.data}`);
            } else {
              resolve("");
            }
          })
          .catch((error) => {
            console.error(error);
            reject(`Error consultando logo de nit ${nit}`);
          });
      });
    },
    _getImagen$({ codigo = 0, tipo_test = null, formato = "png" }) {
      let ruta;

      if ([900273700, 79635522, 900772776, 822001570, 800037202].includes(Number(this.empresa.nitusu))) {
        // ruta de las entidades sanar, monte sinai, HOSPITAL LOCAL ESE FUENTEDEORO, HOSPITAL LOCAL GUAMAL I NIVEL
        if (tipo_test == "1" || tipo_test == "3") {
          if (/[A-Za-z]/.test(codigo)) {
            codigo = codigo.padStart(15, " ");
          }
          ruta = `D:/PSC/PROG/FIRMAS/PACIENTE`;
        } else {
          codigo = parseInt(codigo) || 0;
          ruta = `D:/PSC/PROG/FIRMAS`;
        }
      } else {
        if (this.empresa.unid_prog == "S") {
          ruta = `D:/SC/newcobol/DATOS/FIRMAS_CONSEN`;
        } else if (this.empresa.unid_prog == "P") {
          ruta = `D:/PSC/PROG/DATOS/FIRMAS_CONSEN`;
        }
      }

      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/get-imagen`,
          method: "GET",
          params: { ruta, codigo, formato },
          loader: true,
        })
          .then((response) => {
            if (response.success && response.data) resolve(`data:image/png;base64,${response.data}`);
            else resolve(this.getImgBs64);
          })
          .catch((error) => {
            console.error(error);
            reject(`Error consultando logo de nit ${nit}`);
          });
      });
    },
  },
  persist: {
    storage: sessionStorage,
    paths: ["encabezado"],
  },
});
