export const createRouteLab = (title) => [
  {
    path: "/LAB001",
    name: "LAB001",
    component: () => import("@/views/lab/LAB001.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB001`,
      descrip: "Consentimiento informado imagenologia",
    },
  },
  {
    path: "/LAB002",
    name: "LAB002",
    component: () => import("@/views/lab/LAB002.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB002`,
      descrip: "Consentimiento informado Sedacion",
    },
  },
  {
    path: "/LAB003",
    name: "LAB003",
    component: () => import("@/views/lab/LAB003.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB003`,
      descrip: "Consentimiento informado radiología convencional",
    },
  },
  {
    path: "/LAB004",
    name: "LAB004",
    component: () => import("@/views/lab/LAB004.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB004`,
      descrip: "Consentimiento informado mamografia",
    },
  },
  {
    path: "/LAB008",
    name: "LAB008",
    component: () => import("@/views/lab/LAB008.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB008`,
      descrip: "Consentimiento informado biopsia",
    },
  },
];
