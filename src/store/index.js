import { createPinia } from "pinia";

export * from "./api/contab.api";
export * from "./api/pred.api";

export * from "./module/menu";
export * from "./module/loader";
export * from "./module/CON851";
export * from "./module/CON851P";

export const pinia = createPinia();
