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
  {
    path: "/ODO008",
    name: "ODO008",
    component: () => import("@/views/odo/ODO008.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO ODO008`,
    },
  },
  {
    path: "/ODO009",
    name: "ODO009",
    component: () => import("@/views/odo/ODO009.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO ODO009`,
    },
  },
  {
    path: "/ODO010",
    name: "ODO010",
    component: () => import("@/views/odo/ODO010.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO ODO010`,
    },
  },
];
