import { createRouter, createWebHistory } from "vue-router";
import { createRouteConsen } from "./consen.route";

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
      ...createRouteConsen(title),
    ],
  },
  {
    path: "/ingreso",
    name: "ingreso",
    component: () => import("@/views/Login.vue"),
    meta: {
      title: `${title} - Ingreso`,
      require_auth: false,
    },
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  // const auth_operador = sessionStorage.operador || null;
  // const require_auth = to.matched.some((record) => record.meta.require_auth);
  // if (require_auth && !auth_operador) {
  //   next({ name: "menu" });
  // } else if (!require_auth && auth_operador && to.name != "menu") {
  //   next({ name: "menu" });
  // } else
  next();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

export default router;
