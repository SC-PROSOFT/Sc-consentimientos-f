/* 
    Importa de manera dinamica todos los formatos de cada modulo.
    Importante que los formatos tenga bien el codigo del modulo y el codigo de consentimiento ejem: "ODO004" 
*/

const modules = import.meta.glob("./**/*.js");
const exportModules = {};

for (const path in modules) {
  modules[path]().then((module) => Object.assign(exportModules, module));
}

export default exportModules;