import { defineStore } from "pinia";

export const useModuleMenu = defineStore("menu", {
  state: () => ({
    title_historial: ["MENU PRINCIPAL"],
    menu_historial: [],
    title_opc: [],
    menu: [],
  }),
  getters: {
    getMenu$() {
      return this.menu;
    },
    getMenuHistorial$() {
      return this.menu_historial;
    },
  },
  actions: {
    setMenu$(menu) {
      this.menu = menu;
    },
    setMenuHistorial$(menu) {
      this.menu_historial.push(menu);
    },
    setTitleHistorial$(menu, opc) {
      this.title_historial.push(menu);
      this.title_opc.push(opc);
    },
    setMenuHistorialPop$() {
      this.title_historial.pop();
      this.menu_historial.pop();
      this.title_opc.pop();
    },
  },
});
