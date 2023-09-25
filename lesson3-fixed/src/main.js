import Vue from "vue";
import "./scss/_fonts.scss";
import "./scss/_global.scss";
import "./scss/_reset.scss";
import App from "./App.vue";
import store from "./store/index.js";

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
