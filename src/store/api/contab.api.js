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
    getDll$({ data = {}, modulo = "", espacios = false, loader = true }) {
      return new Promise((resolve, reject) => {
        apiAxiosDll({
          url: `contabilidad/dll`,
          method: "POST",
          params: {
            directorio: `${process.env.APP}/${modulo}`,
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
        ruta = `${validarDiscoDeploy(this.empresa.nitusu)}:/SC/newcobol/DATOS/FIRMAS_CONSEN`;
      } else if (this.empresa.unid_prog == "P") {
        ruta = `${validarDiscoDeploy(this.empresa.nitusu)}:/PSC/PROG/DATOS/FIRMAS_CONSEN`;
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

    _getLogo$({ nit = 0, formato = "png" }) {
      nit = isNaN(nit) ? String(nit) : Number(this.empresa.nitusu);
      let ruta;
      console.log("nit ", nit);

      if (this.empresa.unid_prog == "S") {
        ruta = `${validarDiscoDeploy(this.empresa.nitusu)}:/SC/newcobol/LOGOS`;
      } else if (this.empresa.unid_prog == "P") {
        console.log("entre pare P");
        console.log("nitusu --->> ", this.empresa.nitusu);
        ruta = `${validarDiscoDeploy(this.empresa.nitusu)}:/PSC/PROG/LOGOS`;
        console.log("ruta -->> ", ruta);
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
            reject(`Error consultando logo de nit ${nit}`);
          });
      });
    },
    _getHuella$({ codigo = 0, formato = "jpg", ruta = "" }) {
      if (ruta == "") {
        if (this.empresa.unid_prog == "S") {
          ruta = `${validarDiscoDeploy(this.empresa.nitusu)}:/SC/newcobol/DATOS/BIOMETRIA`;
        } else if (this.empresa.unid_prog == "P") {
          ruta = `${validarDiscoDeploy(this.empresa.nitusu)}:/PSC/PROG/DATOS/BIOMETRIA`;
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
    _getImagen$({ codigo = 0, formato = "png" }) {
      let ruta;
      if (this.empresa.unid_prog == "S") {
        ruta = `${validarDiscoDeploy(this.empresa.nitusu)}:/SC/newcobol/DATOS/FIRMAS_CONSEN`;
      } else if (this.empresa.unid_prog == "P") {
        ruta = `${validarDiscoDeploy(this.empresa.nitusu)}:/PSC/PROG/DATOS/FIRMAS_CONSEN`;
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

const validarDiscoDeploy = (nitusu) => {
  if ([844003225].includes(Number(nitusu))) {
    return "P";
  } else return "D";
};
