import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EnterView from "../views/EnterView.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/enter",
    name: "enter",
    component: EnterView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/imagedesc",
    name: "imagedesc",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/imageView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
