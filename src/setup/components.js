// import { defineAsyncComponent } from "vue";
// export const componente = defineAsyncComponent(() => import("@/components/UI/componente.vue"));

import Input_ from "@/components/UI/Input.vue";
import InputF_ from "@/components/UI/InputF.vue";
import Toggle_ from "@/components/UI/Toggle.vue";
import Select_ from "@/components/UI/Select.vue";
import Header_ from "@/components/UI/Header.vue";
import TextArea_ from "@/components/UI/TextArea.vue";
import TextCard_ from "@/components/UI/TextCard.vue";
import DataTable_ from "@/components/UI/DataTable.vue";
import Autocomplete_ from "@/components/UI/Autocomplete.vue";

export default function registerComponents(app) {
  app.component("Input_", Input_);
  app.component("InputF_", InputF_);
  app.component("Toggle_", Toggle_);
  app.component("Header_", Header_);
  app.component("Select_", Select_);
  app.component("TextArea_", TextArea_);
  app.component("TextCard_", TextCard_);
  app.component("DataTable_", DataTable_);
  app.component("Autocomplete_", Autocomplete_);
}
