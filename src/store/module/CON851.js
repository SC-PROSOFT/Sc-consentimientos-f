import { defineStore } from "pinia";
import { reg_con851_ } from "@/fuentes";

export const useModuleCon851 = defineStore("con851", {
  state: () => ({
    con851: reg_con851_,
  }),
  getters: {
    getCon851() {
      return this.con851;
    },
  },
  actions: {
    CON851(codigo, tipo, mensaje, func) {
      this.con851 = { codigo, tipo, mensaje, func };
      this.con851.estado = true;
    },
    CON851off() {
      this.con851 = reg_con851_;
    },
  },
});
