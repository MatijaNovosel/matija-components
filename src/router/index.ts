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
        children: [
          {
            path: "avatar-editor",
            name: "avatar-editor",
            component: () =>
              import("@/components/preview/avatarEditorPreview.vue"),
          },
          {
            path: "degree-picker",
            name: "degree-picker",
            component: () =>
              import("@/components/preview/degreePickerPreview.vue"),
          },
          {
            path: "date-picker",
            name: "date-picker",
            component: () =>
              import("@/components/preview/datePickerPreview.vue"),
          },
          {
            path: "time-picker",
            name: "time-picker",
            component: () =>
              import("@/components/preview/timePickerPreview.vue"),
          },
          {
            path: "tree-view",
            name: "tree-view",
            component: () => import("@/components/preview/treeViewPreview.vue"),
          },
          {
            path: "tri-state-checkbox",
            name: "tri-state-checkbox",
            component: () =>
              import("@/components/preview/triStateCheckboxPreview.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next({
      name: "avatar-editor",
    });
  } else {
    next();
  }
});

export default router;
