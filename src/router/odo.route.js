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
  ];
  