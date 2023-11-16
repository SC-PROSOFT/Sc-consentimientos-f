export const createRouteLab = (title) => [
    {
      path: "/LAB001",
      name: "LAB001",
      component: () => import("@/views/lab/LAB001.vue"),
      meta: {
        require_auth: true,
        title: `${title} - FORMATO LAB001`,
      },
    }, 
    {
      path: "/LAB002",
      name: "LAB002",
      component: () => import("@/views/lab/LAB002.vue"),
      meta: {
        require_auth: true,
        title: `${title} - FORMATO LAB002`,
      },
    }, 
    {
      path: "/LAB003",
      name: "LAB003",
      component: () => import("@/views/lab/LAB003.vue"),
      meta: {
        require_auth: true,
        title: `${title} - FORMATO LAB003`,
      },
    }, 
    {
      path: "/LAB008",
      name: "LAB008",
      component: () => import("@/views/lab/LAB008.vue"),
      meta: {
        require_auth: true,
        title: `${title} - FORMATO LAB008`,
      },
    }, 
  ];
  