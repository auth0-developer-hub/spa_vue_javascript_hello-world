import HomePage from "@/pages/home-page.vue";
import CallbackPage from "@/pages/callback-page.vue";
import NotFoundPage from "@/pages/not-found-page.vue";
import Vue from "vue";
import Router from "vue-router";
import { authenticationGuard } from "../authentication-guard";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../pages/profile-page.vue"),
      beforeEnter: authenticationGuard,
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
      beforeEnter: authenticationGuard,
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../pages/admin-page.vue"),
      beforeEnter: authenticationGuard,
    },
    {
      path: "/callback",
      name: "callback",
      component: CallbackPage,
    },
    {
      path: "*",
      name: "Not Found",
      component: NotFoundPage,
    },
  ],
});
