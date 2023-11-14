import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import { fileURLToPath, URL } from "node:url";

const modulo = "consentimientos";

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({ sassVariables: "src/assets/styles/quasar-variables.sass" }),
  ],
  define: {
    "process.env": {
      BASE_URL: modulo,
      API: "/api/v1/",
      APP: `${modulo}/v2/app`,
      PORT: 8787,
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: { port: 8080, open: false },
  base: `/${modulo}`,
});
