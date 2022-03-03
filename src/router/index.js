import Vue from "vue";
import Router from "vue-router";
import Portfolio from "@/view/Portfolio.vue";
Vue.use(Router);
const routes = [{
    path: "/",
    name: "Portfolio",
    component: Portfolio
}];

const router = new Router({
    mode: "history",
    routes
});
export default router;