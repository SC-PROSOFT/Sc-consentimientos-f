import { defineStore } from "pinia";
import { apiAxios } from "@/api/apiAxios";
import { apiAxiosDll } from "@/api/apiAxiosDll";
import { regEncabezado } from "@/fuentes";
import { useModuleFormatos } from "@/store";

export const useApiContabilidad = defineStore("contabilidad", {
  state: () => ({
    encabezado: regEncabezado(),
    nit_empresa: 844003225,
  }),
  getters: {
    getEncabezado() {
      if (this.encabezado.codigo) return this.encabezado;
      else if (sessionStorage.encabezado) return JSON.parse(sessionStorage.encabezado);
    },
    getNit() {
      return this.nit_empresa;
    },
    getImgBs64: () =>
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  },
  actions: {
    logOut$() {
      sessionStorage.removeItem("operador");
      sessionStorage.removeItem("token");
      window.close();
    },
    setHeader$({ encabezado }) {
      sessionStorage.removeItem("encabezado");
      if (encabezado) {
        this.encabezado = encabezado;
        sessionStorage.setItem("encabezado", JSON.stringify(encabezado));
      }
    },
    getDll$({ directorio = "", data = {}, modulo = "", espacios = false, loader = true }) {
      return new Promise((resolve, reject) => {
        apiAxiosDll({
          url: `contabilidad/dll`,
          method: "POST",
          params: { ip: sessionStorage.ip, directorio, espacios, modulo: `${process.env.APP}/${modulo}` },
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

      const empresa = JSON.parse(JSON.stringify(useModuleFormatos().getEmpresa));

      const data_correo = {
        server_email: "smtp.gmail.com",
        remitente: empresa.emailusu,
        clave: empresa.clave_email,
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

    guardarFile$({
      base64 = "",
      ruta = "D:/PSC/PROG/DATOS/FIRMAS_CONSEN",
      codigo = "",
      formato = "png",
      loader = true,
    }) {
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/guardar-file`,
          method: "POST",
          data: { base64, ruta: `${ruta}/${codigo}.${formato}` },
          loader,
        })
          .then((response) => resolve(response))
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },

    _getLogo$({ disco = "D", nit = 0, formato = "png" }) {
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/get-logo`,
          method: "GET",
          params: { disco, nit, formato },
          loader: true,
        })
          .then((response) => {
            if (response.success) resolve(response.data);
            else {
              resolve(
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              );
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
            else {
              resolve(
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              );
            }
          })
          .catch((error) => {
            console.error(error);
            reject(`Error consultando logo de nit ${nit}`);
          });
      });
    },
    _getHuella$({ codigo = 0, formato = "png" }) {
      let ruta;
      const empresa = useModuleFormatos().getEmpresa;

      if (empresa.unid_prog == "S") ruta = "D:/SC/newcobol/DATOS/BIOMETRIA";
      else if (empresa.unid_prog == "P") ruta = "D:/PSC/PROG/DATOS/BIOMETRIA";

      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/get-imagen`,
          method: "GET",
          params: { ruta, codigo, formato },
          loader: true,
        })
          .then((response) => {
            if (response.success) resolve(`data:image/png;base64,${response.data}`);
            else resolve("");
          })
          .catch((error) => {
            console.error(error);
            reject(`Error consultando logo de nit ${nit}`);
          });
      });
    },
    _getImagen$({ ruta = "D:/PSC/PROG/DATOS/FIRMAS_CONSEN", codigo = 0, formato = "png" }) {
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `contabilidad/get-imagen`,
          method: "GET",
          params: { ruta, codigo, formato },
          loader: true,
        })
          .then((response) => {
            if (response.success) resolve(response.data);
            else {
              resolve(
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              );
            }
          })
          .catch((error) => {
            console.error(error);
            reject(`Error consultando logo de nit ${nit}`);
          });
      });
    },
  },
});
