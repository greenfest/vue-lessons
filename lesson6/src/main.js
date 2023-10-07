import Vue from "vue";
import "./scss/_global.scss";
import "./scss/_reset.scss";
import App from "./App.vue";
import store from "./store/index.js";
import router from "./router/index";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
