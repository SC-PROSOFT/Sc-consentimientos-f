export const createRouteHic = (title) => [
  {
    path: "/HIC024",
    name: "HIC024",
    component: () => import("@/views/hic/HIC24.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC24`,
    },
  },
];
