export const createRouteConsen = (title) => [
  {
    path: "/HIC24",
    name: "HIC24",
    component: () => import("@/views/consen/HIC24.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC24`,
    },
  },
];
