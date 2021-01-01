import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Dashboard from "@/views/dashboard/Dashboard.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Dashbaord",
        component: Dashboard
    },
    {
        path: "/login",
        name: "Login",
        meta: { layout: "empty" },
        component: () =>
            import("../views/security/Login.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
