import HomePage from "@/pages/home-page.vue";
import NotFoundPage from "@/pages/not-found-page.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../pages/profile-page.vue"),
    },
    {
      path: "/public",
      name: "public",
      component: () => import("../pages/public-page.vue"),
    },
    {
      path: "/protected",
      name: "protected",
      component: () => import("../pages/protected-page.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../pages/admin-page.vue"),
    },
    {
      path: "*",
      name: "Not Found",
      component: NotFoundPage,
    },
  ],
});
