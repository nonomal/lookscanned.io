import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { createMetaManager } from "vue-meta";
import VueGtag from "vue-gtag";

createApp(App)
  .use(router)
  .use(createMetaManager())
  .use(VueGtag, {
    config: { id: "G-0HFWPLP3L2" },
  })
  .use(vuetify)
  .mount("#app");
