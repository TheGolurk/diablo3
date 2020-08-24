import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./assets/css/main.styl";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  methods: {
    init() {
      store.dispatch("oauth/getToken", null, { root: true });
    }
  },
  created() {
    this.init();
  },
  render: h => h(App)
}).$mount("#app");
