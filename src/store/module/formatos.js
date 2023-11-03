import { defineStore } from "pinia";
import days from "dayjs";

export const useModuleFormatos = defineStore("formatos", {
  state: () => ({
    datos: {
      fecha_act: days().format("YYYY-MM-DD"),
      img_firma_acomp: Object,
      reg_coninf: Object,
      firma_prof: String,
      reg_acomp: Object,
      reg_paci: Object,
      reg_prof: Object,
      reg_hc: Object,
    },
    reg_paci: sessionStorage.reg_paci && JSON.parse(sessionStorage.reg_paci),
    reg_prof: sessionStorage.reg_prof && JSON.parse(sessionStorage.reg_prof),
    reg_acomp: sessionStorage.reg_acomp && JSON.parse(sessionStorage.reg_acomp),
    reg_hc: sessionStorage.reg_hc && JSON.parse(sessionStorage.reg_hc),
    empresa: sessionStorage.empresa && JSON.parse(sessionStorage.empresa),
  }),
  getters: {},
  actions: {},
});
