export const createRouteHic = (title) => [
  {
    path: "/HIC24",
    name: "HIC24",
    component: () => import("@/views/hic/HIC24.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC24`,
    },
  },
];
