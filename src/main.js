import Vue from "vue";
import "./cube-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import filters from "@/utils/filters";

// 定义全局过滤器
for (const key in filters) {
  // key:addCurrency filters[key]:Fn
  Vue.filter(key, filters[key]);
}
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
