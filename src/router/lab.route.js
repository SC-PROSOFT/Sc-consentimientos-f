export const createRouteLab = (title) => [
  {
    path: "/LAB001",
    name: "LAB001",
    component: () => import("@/views/lab/LAB001.vue"),
    meta: {
      maintenance: true,
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
    path: "/LAB005",
    name: "LAB005",
    component: () => import("@/views/lab/LAB005.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB005`,
      descrip: "Consentimiento informado exámenes de radiología en mujeres gestantes",
    },
  },
  {
    path: "/LAB006",
    name: "LAB006",
    component: () => import("@/views/lab/LAB006.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB006`,
      descrip: "Consentimiento informado ecografía transvaginal",
    },
  },
  {
    path: "/LAB007",
    name: "LAB007",
    component: () => import("@/views/lab/LAB007.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB007`,
      descrip: "Consentimiento informado densitometría ósea",
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
  {
    path: "/LAB009",
    name: "LAB009",
    component: () => import("@/views/lab/LAB009.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB009`,
      descrip: "Consentimiento informado resonancia magnética nuclear",
    },
  },
  {
    path: "/LAB010",
    name: "LAB010",
    component: () => import("@/views/lab/LAB010.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB010`,
      descrip: "Consentimiento informado tomografia axial computarizada",
    },
  },
  {
    path: "/LAB011",
    name: "LAB011",
    component: () => import("@/views/lab/LAB011.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB011`,
      descrip: "Formato historia clinica de procedimientos contrastados",
      // descrip: "Consentimiento informado procedimientos contrastados",
    },
  },
  {
    path: "/LAB012",
    name: "LAB012",
    component: () => import("@/views/lab/LAB012.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB012`,
      descrip: "Consentimiento informado valoración preanestésica",
    },
  },
  {
    path: "/LAB013",
    name: "LAB013",
    component: () => import("@/views/lab/LAB013.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB013`,
      descrip: "Consentimiento informado sedación fuera de salas de cirugía",
    },
  },
  {
    path: "/LAB014",
    name: "LAB014",
    component: () => import("@/views/lab/LAB014.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB014`,
      descrip: "Consentimiento informado mamografía",
    },
  },
  {
    path: "/LAB015",
    name: "LAB015",
    component: () => import("@/views/lab/LAB015.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB015`,
      descrip: "Consentimiento informado acto quirurgico",
    },
  },
  {
    path: "/LAB016",
    name: "LAB016",
    component: () => import("@/views/lab/LAB016.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB016`,
      descrip: "Consentimiento informado acto anestesico",
    },
  },
  {
    path: "/LAB017",
    name: "LAB017",
    component: () => import("@/views/hic/HIC048.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB017`,
      descrip: "Consentimiento informado para realizar la prueba presuntiva o diagnostica de VIH",
    },
  },
  {
    path: "/LAB018",
    name: "LAB018",
    component: () => import("@/views/hic/HIC049.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB018`,
      descrip: "Consentimiento informado para toma de muestras ginecoloógicas",
    },
  },
  {
    path: "/LAB019",
    name: "LAB019",
    component: () => import("@/views/hic/HIC050.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB019`,
      descrip: "Consentimiento informado toma de muestras de laboratorio clínico",
    },
  },
  {
    path: "/LAB020",
    name: "LAB020",
    component: () => import("@/views/hic/HIC051.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB020`,
      descrip: "Consentimiento informado toma de citologia",
    },
  },
  {
    path: "/LAB021",
    name: "LAB021",
    component: () => import("@/views/lab/LAB021.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB021`,
      descrip: "Formato historia clinica registro de sedacion",
    },
  },
];
