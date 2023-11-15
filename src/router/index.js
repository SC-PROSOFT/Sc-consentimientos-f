import { createRouter, createWebHistory } from "vue-router";
import { createRouteHic } from "./hic.route";
import { createRouteOdo } from "./odo.route";

const title = "Prosoft";

const routes = [
  { path: "/:pathMatch(.*)*", redirect: `/` },
  { path: "/", redirect: "/menu" },
  {
    path: "/",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: `${title} - Inicio`,
      require_auth: true,
    },
    children: [
      {
        path: "/menu",
        name: "menu",
        component: () => import("@/views/Menu.vue"),
        meta: {
          title: `${title} - Menu principal`,
          require_auth: true,
        },
      },
      ...createRouteHic(title),
      ...createRouteOdo(title),
    ],
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

export default router;
