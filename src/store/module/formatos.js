import { defineStore } from "pinia";
import { regHc, regEmpresa, regPaci, regProf, regAcomp } from "@/fuentes";
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
    logo: null,
    fecha_act: days().format("YYYY-MM-DD"),
    reg_paci: regPaci(),
    reg_prof: regProf(),
    reg_acomp: regAcomp(),
    reg_hc: regHc(),

    reg_empresa: Object.assign({}, regEmpresa()),
  }),
  getters: {
    getLogo() {
      if (sessionStorage.logo) return `data:image/png;base64,${sessionStorage.logo}`;
      return this.logo;
    },
    getFechaActual() {
      return this.fecha_act;
    },
    getEmpresa() {
      if (sessionStorage.empresa) return JSON.parse(sessionStorage.empresa);
      return this.reg_empresa;
    },
    getPaci() {
      if (sessionStorage.reg_paci) return JSON.parse(sessionStorage.reg_paci);
      return this.reg_paci;
    },
    getProf() {
      if (sessionStorage.reg_prof) return JSON.parse(sessionStorage.reg_prof);
      return this.reg_prof;
    },
    getAcomp() {
      if (sessionStorage.reg_acomp) return JSON.parse(sessionStorage.reg_acomp);
      return this.reg_acomp;
    },
    getHc() {
      if (sessionStorage.reg_hc) return JSON.parse(sessionStorage.reg_hc);
      return this.reg_hc;
    },
  },
  actions: {},
});
