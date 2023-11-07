import { createRouter, createWebHistory } from "vue-router";
import { ROUTE_NAMES } from "./routeNames";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/default.vue"),
    children: [
      {
        path: "",
        name: ROUTE_NAMES.HOME,
        component: () => import("@/views/home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
