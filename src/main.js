import { createApp } from "vue";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import App from "./App.vue";
import router from "./router";
import { pinia } from "./store";
import registerComponents from "./setup/components";

const app = createApp(App);
registerComponents(app);

app
  .use(router)
  .use(pinia)
  .use(Quasar, {
    config: {
      brand: {},
    },
    plugins: {},
  })
  .mount("#app");
