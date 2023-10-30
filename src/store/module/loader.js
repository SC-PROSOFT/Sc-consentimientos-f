import { defineStore } from "pinia";

export const useModuleLoader = defineStore("loader", {
  state: () => ({
    loader: false,
  }),
  getters: {
    getLoader$() {
      return this.loader;
    },
  },
  actions: {
    setLoader$() {
      this.loader = !this.loader;
    },
  },
});
