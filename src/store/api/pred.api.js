import { defineStore } from "pinia";
import { apiAxios } from "@/api/apiAxios";

export const useApiPredial = defineStore("predial", {
  state: () => ({}),
  getters: {},
  actions: {
    getTiposPredio$({ loader = true }) {
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `predial/get-tipos-predio`,
          method: "GET",
          loader: true,
        })
          .then((response) => {
            if (response.success) resolve(response.data);
            else reject(response);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    getTipoPredio$({ cod_prtipo = null, loader = true }) {
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `predial/get-tipo-predio/${cod_prtipo}`,
          method: "GET",
          loader,
        })
          .then((response) => {
            if (response.success) resolve(response.data);
            else reject(response.message);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    getMunic$({ cod_munic = 1 }) {
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `predial/get-municipio/${cod_munic}`,
          method: "GET",
        })
          .then((response) => {
            response.success ? resolve(response.data) : reject(response.message);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    CAT101Put$({ data = {}, loader = true }) {
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `predial/CAT101`,
          method: "PUT",
          data,
          loader,
        })
          .then((response) => {
            if (response.success) resolve(response.message);
            else reject(response.message);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    CAT101Post$({ data = {}, loader = true }) {
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `predial/CAT101`,
          method: "POST",
          data,
          loader,
        })
          .then((response) => {
            if (response.success) resolve(response.message);
            else reject(response.message);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    CAT102Post$({ data = {}, loader = true }) {
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `predial/CAT102`,
          method: "POST",
          data,
          loader,
        })
          .then((response) => {
            if (response.success) resolve(response.message);
            else reject(response.message);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    CAT102Put$({ data = {}, loader = true }) {
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `predial/CAT102`,
          method: "PUT",
          data,
          loader,
        })
          .then((response) => {
            if (response.success) resolve(response.message);
            else reject(response.message);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    CAT102Delete$({ cod_prtipo = null, loader = true }) {
      return new Promise((resolve, reject) => {
        apiAxios({
          url: `predial/CAT102/${cod_prtipo}`,
          method: "DELETE",
          loader,
        })
          .then((response) => {
            if (response.success) resolve(response.message);
            else reject(response.message);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
  },
});
