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
    path: "/HIC032",
    name: "HIC032",
    component: () => import("@/views/hic/HIC032.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC032`,
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
    //TTRATAMIENTO DIRECTAMENTE OBSERVADO (TDO)
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
  {
    //SALIDA VOLUNTARIA
    path: "/HIC039",
    name: "HIC039",
    component: () => import("@/views/hic/HIC039.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC039`,
    },
  },
  {
    //ATENCIÓN DE PARTO
    path: "/HIC040",
    name: "HIC040",
    component: () => import("@/views/hic/HIC040.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC040`,
    },
  },
  {
    //INGRESO URGENCIAS
    path: "/HIC041",
    name: "HIC041",
    component: () => import("@/views/hic/HIC041.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC041`,
    },
  },
  {
    //APLICACION DE LA VACUNA CONTRA EL VIRUS DEL PAPILOMA HUMANO - VPH
    path: "/HIC042",
    name: "HIC042",
    component: () => import("@/views/hic/HIC042.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC042`,
    },
  },
  {
    //CONSENTIMIENTO INFORMADO PARA ODONTOLOGIA
    path: "/ODO003",
    name: "ODO003",
    component: () => import("@/views/odo/ODO003.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC042`,
    },
  },
];
