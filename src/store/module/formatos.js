import { defineStore } from "pinia";
import { regHc, regEmpresa, regTest, regSession, regPaci, regProf, regAcomp } from "@/fuentes";
import days from "dayjs";

export const useModuleFormatos = defineStore("formatos", {
  state: () => ({
    logo: null,
    fecha_act: days().format("YYYY-MM-DD"),
    reg_testigo: regTest(),
    reg_paci: regPaci(),
    reg_prof: regProf(),
    reg_acomp: regAcomp(),
    reg_hc: regHc(),
    reg_sesion: regSession(),
    reg_empresa: Object.assign({}, regEmpresa()),
    empresa_cargada: false,
    cerrando_sesion: false,
  }),
  getters: {
    getSesion() {
      if (sessionStorage.query) {
        let data_session = JSON.parse(sessionStorage.query);
        data_session.articulos = data_session?.articulos && JSON.parse(atob(data_session?.articulos));
        data_session.diagnosticos = data_session?.diagnosticos && JSON.parse(atob(data_session?.diagnosticos));
        return data_session;
      }
      if (this.reg_sesion.articulos) {
        this.reg_sesion.articulos = JSON.parse(atob(this.reg_sesion.articulos));
      }
      if (this.reg_sesion.diagnosticos) {
        this.reg_sesion.diagnosticos = JSON.parse(atob(this.reg_sesion.diagnosticos));
      }
      return this.reg_sesion;
    },
    getLogo() {
      if (sessionStorage.logo) return `data:image/png;base64,${sessionStorage.logo}`;
      return this.logo;
    },
    getFirma() {
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
    getTestigo() {
      if (sessionStorage.reg_testigo) return JSON.parse(sessionStorage.reg_testigo);
      return this.reg_testigo;
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
      if (this.reg_hc.llave) return this.reg_hc;
      else if (sessionStorage.reg_hc) return JSON.parse(sessionStorage.reg_hc);
    },
    getDiag() {
      if (sessionStorage.diagnosticos) return JSON.parse(sessionStorage.diagnosticos);
      else return [];
    },
    getArtic() {
      if (sessionStorage.articulos) return JSON.parse(sessionStorage.articulos);
      else return [];
    },
    datosh() {
      if (sessionStorage.datosh) return sessionStorage.getItem("datosh");
      else return "";
    },
    accesoMovil() {
      const ua = navigator.userAgent;
      const isDevice = /Mobi|Android|iPhone|iPad|Tablet|PlayBook|Silk|Kindle|SM-T|Nexus 7|Nexus 10/i.test(ua);
      const isSmallScreen = window.innerWidth <= 1024 && "ontouchstart" in window;
      return isDevice || isSmallScreen;
    },
  },
  actions: {
    setHc(reg_hic) {
      sessionStorage.setItem("reg_hc", JSON.stringify(reg_hic));
      Object.assign(this.reg_hc, reg_hic);
    },
    setSession(reg_sesion) {
      sessionStorage.setItem("query", JSON.stringify(reg_sesion));
      Object.assign(this.reg_sesion, reg_sesion);
    },
    setPaci(reg_paci) {
      sessionStorage.setItem("reg_paci", JSON.stringify(reg_paci));
      Object.assign(this.reg_paci, reg_paci);
    },
    setTestigo(reg_testigo) {
      sessionStorage.setItem("reg_testigo", JSON.stringify(reg_testigo));
      Object.assign(this.reg_testigo, reg_testigo);
    },
    setAcomp(reg_acomp) {
      sessionStorage.setItem("reg_acomp", JSON.stringify(reg_acomp));
      Object.assign(this.reg_acomp, reg_acomp);
    },
    setProf(reg_prof) {
      sessionStorage.setItem("reg_prof", JSON.stringify(reg_prof));
      Object.assign(this.reg_prof, reg_prof);
    },
    setEmpresa(reg_empresa) {
      sessionStorage.setItem("empresa", JSON.stringify(reg_empresa));
      Object.assign(this.reg_empresa, reg_empresa);
      this.empresa_cargada = true;
    },
    setcerrandoSesion(value) {
      this.cerrando_sesion = value;
    },
    setDatosh(value) {
      sessionStorage.setItem("datosh", value);
    },
  },
});
