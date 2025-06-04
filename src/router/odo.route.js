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
  {
    path: "/ODO011",
    name: "ODO011",
    component: () => import("@/views/odo/ODO011.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO ODO011`,
    },
  },
  {
    path: "/ODO012",
    name: "ODO012",
    component: () => import("@/views/odo/ODO012.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO ODO012`,
    },
  },
  {
    path: "/ODO013",
    name: "ODO013",
    component: () => import("@/views/odo/ODO013.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO ODO013`,
    },
  },
  {
    path: "/ODO014",
    name: "ODO014",
    component: () => import("@/views/hic/HIC056.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO ODO014`,
    },
  },
];

// {
//   path: "/LAB023",
//   name: "LAB023",
//   component: () => import("@/views/hic/HIC079.vue"),
//   meta: {
//     require_auth: true,
//     title: `${title} - FORMATO LAB023`,
//     descrip: "Consentimiento informado de cirugia oral",
//   },
// },
// {
//   path: "/LAB024",
//   name: "LAB024",
//   component: () => import("@/views/hic/HIC080.vue"),
//   meta: {
//     require_auth: true,
//     title: `${title} - FORMATO LAB024`,
//     descrip: "Consentimiento informado aplicacion de anestesia local",
//   },
// },
