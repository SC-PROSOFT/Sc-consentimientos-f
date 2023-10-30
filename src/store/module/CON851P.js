import { defineStore } from "pinia";
import { reg_con851p_ } from "@/fuentes";

export const useModuleCon851p = defineStore("con851p", {
  state: () => ({
    con851p: reg_con851p_,
  }),
  getters: {
    getCon851p() {
      return { ...this.con851p };
    },
  },
  actions: {
    CON851P(codigo, tipo, mensaje, func1, func2) {
      this.con851p = { codigo, tipo, mensaje, func1, func2 };
      this.con851p.estado = true;
    },
    CON851Poff() {
      this.con851p = reg_con851p_;
    },
  },
});
