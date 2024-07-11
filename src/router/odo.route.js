export const createRouteOdo = (title) => [
  {
    path: "/ODO003",
    name: "ODO003",
    component: () => import("@/views/odo/ODO003.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO ODO003`,
    },
  },
  {
    path: "/ODO004",
    name: "ODO004",
    component: () => import("@/views/odo/ODO004.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO ODO004`,
    },
  },
  {
    path: "/ODO005",
    name: "ODO005",
    component: () => import("@/views/odo/ODO005.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO ODO005`,
    },
  },
  {
    path: "/ODO006",
    name: "ODO006",
    component: () => import("@/views/odo/ODO006.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO ODO006`,
    },
  },
  {
    path: "/ODO007",
    name: "ODO007",
    component: () => import("@/views/odo/ODO007.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO ODO007`,
    },
  },
];
