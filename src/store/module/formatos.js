import { defineStore } from "pinia";
import days from "dayjs";
import { regHc, regEmpresa, regPaci, regProf, regAcomp } from "@/fuentes";

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
    fecha_act: days().format("YYYY-MM-DD"),
    reg_paci: sessionStorage.reg_paci ? Object.assign({}, JSON.parse(sessionStorage.reg_paci)) : regPaci(),
    reg_prof: sessionStorage.reg_prof ? Object.assign({}, JSON.parse(sessionStorage.reg_prof)) : regProf(),
    reg_acomp: sessionStorage.reg_acomp
      ? Object.assign({}, JSON.parse(sessionStorage.reg_acomp))
      : regAcomp(),
    reg_hc: sessionStorage.reg_hc ? Object.assign({}, JSON.parse(sessionStorage.reg_hc)) : regHc(),
    reg_empresa: sessionStorage.empresa
      ? Object.assign({}, JSON.parse(sessionStorage.empresa))
      : regEmpresa(),
  }),
  getters: {},
  actions: {},
});
