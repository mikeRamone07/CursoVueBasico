import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import Chart from 'chart.js';
import Chartick from "vue-chartkick";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";
Vue.config.productionTip = false;
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

Vue.use(Chartick.use(Chart));
Vue.use(VueSpinners);


new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
