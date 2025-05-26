import { useModuleFormatos } from "@/store";
import { createRouter, createWebHistory } from "vue-router";
import { createRouteHic } from "./hic.route";
import { createRouteOdo } from "./odo.route";
import { createRouteLab } from "./lab.route";

const title = "Prosoft";

function accesoMovil() {
  const ua = navigator.userAgent;
  const isDevice = /Mobi|Android|iPhone|iPad|Tablet|PlayBook|Silk|Kindle|SM-T|Nexus 7|Nexus 10/i.test(ua);
  const isSmallScreen = window.innerWidth <= 1024 && "ontouchstart" in window;
  return isDevice || isSmallScreen;
}
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
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue"),
        meta: {
          title: `${title} - Login`,
          require_auth: false,
        },
      },
      {
        path: "/elaborarconsent",
        name: "elaborarconsent",
        component: () => import("@/views/ElaborarConsent.vue"),
        meta: {
          title: `${title} - Información para el consentimiento`,
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
      {
        path: "/configUsunet",
        name: "configUsunet",
        component: () => import("@/views/HomeConfigUsunet.vue"),
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

// Middleware global para gestionar las reglas de navegación
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  const movil = accesoMovil();
  const usuario_ingreso = sessionStorage.getItem("usunet");
  if (to.name === "login" && useModuleFormatos().cerrando_sesion) {
    useModuleFormatos().setcerrandoSesion(false);
    return next();
  }
  if (movil && to.name === "menu" && !sessionStorage.getItem("usunet")) {
    return next({ name: "login" });
  }
  if (to.name === "login" && usuario_ingreso) {
    return next({ name: "elaborarconsent" });
  }
  if (from.name === "elaborarconsent" && to.name === "login") {
    return next({ name: "elaborarconsent" });
  }
  // if (to.name === "menu" && !to.query.llave_hc) {
  //   return next({ name: "login" });
  // }
  if (to.name === "elaborarconsent" && !sessionStorage.getItem("usunet")) {
    return next({ name: "login" });
  }
  if (to.meta.maintenance) return next({ name: "dev" });
  next();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

export default router;
