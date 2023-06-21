import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import Vue3Autocounter from "vue3-autocounter";
import "@/assets/main.scss";

loadFonts();

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .component("vue3-autocounter", Vue3Autocounter)
  .mount("#app");
