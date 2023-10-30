import { default as axios } from "axios";
import { useModuleLoader } from "@/store";

const URl = `http://localhost:5025${process.env.API}`;

export const apiAxiosDll = ({
  url,
  data = {},
  method = "POST",
  header = {},
  params,
  responseType = "json",
  loader = true,
}) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: `${URl}${url}`,
      method,
      data,
      params: { ...params },
      headers: {
        ...header,
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.token,
      },
      responseType,
      validateStatus: function (status) {
        return status >= 200 && status < 400;
      },
    };
    loader && useModuleLoader().setLoader$();
    axios(config)
      .then((res) => {
        if (res?.data?.msg?.status) reject(`Error http ${res?.data?.msg?.status}`);
        return res.data;
      })
      .then((response) => {
        if (!response.success) throw new Error(response.message);
        return response.data;
      })
      .then((respuesta) => {
        let encode = encodeURI(respuesta);
        encode = encode.replace(
          /%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20/g,
          ""
        );
        encode = encode.replace(/%0D%0A/g, "");
        encode = encode.replace(/%0A/g, "");
        let decode = decodeURI(encode);
        decode = decode.replace(/[\u0000-\u0019]+/g, "");
        const response = JSON.parse(decode);
        return response;
      })
      .then((response) => {
        if (response.STATUS == "00") resolve(response.MENSAJE);
        else if (response.MENSAJE) {
          let mensaje = response.MENSAJE;
          /* VALIDAR ERRORES DE COBOL */
          reject(mensaje);
        } else resolve(response.MENSAJE);
      })
      .catch((error) => {
        const status = {
          400: `Status 400. hay algo que no ha funcionado bien en la petición del cliente.`,
          401: `No tiene autorización para realizar esta solicitud.`,
          402: `Status 402. hay algo que no ha funcionado bien en la petición del cliente.`,
          404: `Error 404, no se encuentra la ruta ${config.url}`,
        };
        if ([400, 401, 402, 404].includes(error?.response?.status)) {
          return reject(status[error?.response?.status]);
        }
        error?.code == "ERR_NETWORK" && reject("Error de conexión con el servidor");
        let response = { status: -1, message: null };
        if (error.response) {
          response.status = error.response.status;
          response.message = error.response.data;
          response.status == -1 ? reject(response.message) : null;
        } else if (response.request) {
          response.message = error.request;
          response.status == -1 ? reject(response.message) : null;
        } else {
          response.message = error.message;
          response.status == -1 ? reject(response.message) : null;
        }
        errorConsolee("global", error);
        reject(response);
      })
      .finally(() => {
        loader && loader && useModuleLoader().setLoader$();
      });
  });
};
const errorConsolee = (form, error, data = null) => {
  console.debug("-> Error: ", form, error, data);
};
