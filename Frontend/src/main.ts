import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import Notifications from "vue-notification";
import VueSimpleAlert from "vue-simple-alert";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/css/style.css";
import "@/assets/css/progress-bar.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(Notifications);
Vue.use(VueSimpleAlert);

Vue.config.productionTip = false;
export const bus = new Vue();
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
