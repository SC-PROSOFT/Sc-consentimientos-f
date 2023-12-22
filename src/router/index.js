import { createRouter, createWebHistory } from "vue-router";
import { createRouteHic } from "./hic.route";
import { createRouteOdo } from "./odo.route";
import { createRouteLab } from "./lab.route";

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
      {
        path: "/dev",
        name: "dev",
        component: () => import("@/components/global/Dev.vue"),
        meta: {
          title: `${title} - desarrollo`,
          require_auth: true,
        },
      },
      ...createRouteHic(title),
      ...createRouteOdo(title),
      ...createRouteLab(title),
    ],
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.meta.maintenance) return next({ name: "dev" });
  else next();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

export default router;
