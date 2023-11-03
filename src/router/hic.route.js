export const createRouteHic = (title) => [
  {
    path: "/HIC030",
    name: "HIC030",
    component: () => import("@/views/hic/HIC030.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC030`,
    },
  },
  {
    path: "/HIC032",
    name: "HIC032",
    component: () => import("@/views/hic/HIC032.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC032`,
    },
  },
  {
    //COLPOSCOPIA
    path: "/HIC031",
    name: "HIC031",
    component: () => import("@/views/hic/HIC031.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC031`,
    },
  },
  {
    //PRUEBA VIH
    path: "/HIC033",
    name: "HIC033",
    component: () => import("@/views/hic/HIC033.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC033`,
    },
  },
  {
    //INTERRUPCIÓN VOLUNTARIA DEL EMBARAZO
    path: "/HIC034",
    name: "HIC034",
    component: () => import("@/views/hic/HIC034.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC034`,
    },
  },
  {
    //EVENTOS DE INTERES EN SALUD PUBLICA (EISP)
    path: "/HIC035",
    name: "HIC035",
    component: () => import("@/views/hic/HIC035.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC035`,
    },
  },
  {
    //Tratamiento Directamente Observado (TDO)
    path: "/HIC036",
    name: "HIC036",
    component: () => import("@/views/hic/HIC036.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC036`,
    },
  },
  {
    //PRUEBAS RADIOLOGICAS EN PACIENTES EN ESTADO O SOSPECHA DE GESTACION
    path: "/HIC037",
    name: "HIC037",
    component: () => import("@/views/hic/HIC037.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC037`,
    },
  },
];
