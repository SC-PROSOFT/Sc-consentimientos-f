export const createRouteHic = (title) => [
  {
    path: "/HIC001",
    name: "HIC001",
    component: () => import("@/views/hic/HIC001.vue"),
    meta: {
      maintenance: true,
      require_auth: true,
      title: `${title} - FORMATO HIC001`,
      descrip: "CONSENTIMIENTO INFORMADO PARA LA PRUEBA DE VIH (Prueba de Inmunodeficiencia Humana)",
    },
  },
  {
    path: "/HIC002",
    name: "HIC002",
    component: () => import("@/views/hic/HIC002.vue"),
    meta: {
      maintenance: true,
      require_auth: true,
      title: `${title} - FORMATO HIC002`,
      descrip: "Consentimiento informado retiro voluntario",
    },
  },
  {
    path: "/HIC003",
    name: "HIC003",
    component: () => import("@/views/hic/HIC003.vue"),
    meta: {
      maintenance: true,
      require_auth: true,
      title: `${title} - FORMATO HIC003`,
      descrip: "Consentimiento informado procedimientos invasivos",
    },
  },
  {
    path: "/HIC006",
    name: "HIC006",
    component: () => import("@/views/hic/HIC006.vue"),
    meta: {
      maintenance: true,
      require_auth: true,
      title: `${title} - FORMATO HIC006`,
      descrip: "Consentimiento del familiar o tutor, autorizando a hija menor para vacunarse contra el virus del papiloma humano",
    },
  },
  {
    path: "/HIC008",
    name: "HIC008",
    component: () => import("@/views/hic/HIC008.vue"),
    meta: {
      maintenance: true,
      require_auth: true,
      title: `${title} - FORMATO HIC008`,
      descrip: "Formato de constancia de servicios recibidos",
    },
  },
  {
    path: "/HIC009",
    name: "HIC009",
    component: () => import("@/views/hic/HIC009.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC008`,
      descrip: "Formato de ingreso a hospitalización",
    },
  },
  {
    path: "/HIC012",
    name: "HIC012",
    component: () => import("@/views/hic/HIC012.vue"),
    meta: {
      maintenance: true,
      require_auth: true,
      title: `${title} - FORMATO HIC012`,
      descrip: "Consentimiento informado insercion y/o retiro implante subdermico JADELL",
    },
  },
  {
    path: "/HIC015",
    name: "HIC015",
    component: () => import("@/views/hic/HIC015.vue"),
    meta: {
      maintenance: true,
      require_auth: true,
      title: `${title} - FORMATO HIC015`,
      descrip: "Consentimiento informado procedimientos especiales",
    },
  },
  {
    path: "/HIC016",
    name: "HIC016",
    component: () => import("@/views/hic/HIC016.vue"),
    meta: {
      maintenance: true,
      require_auth: true,
      title: `${title} - FORMATO HIC016`,
      descrip: "consentimiento informado para dilatación bajo cicloplejia",
    },
  },
  {
    path: "/HIC030",
    name: "HIC030",
    component: () => import("@/views/hic/HIC030.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC030`,
      descrip: "Consentimiento informado para la toma de citología.",
    },
  },
  {
    path: "/HIC031",
    name: "HIC031",
    component: () => import("@/views/hic/HIC031.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC031`,
      descrip: "Colposcopía",
    },
  },
  {
    path: "/HIC032",
    name: "HIC032",
    component: () => import("@/views/hic/HIC032.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC032`,
      descrip: "Consentimiento informado general para promoción y prevención (PYP).",
    },
  },
  {
    path: "/HIC033",
    name: "HIC033",
    component: () => import("@/views/hic/HIC033.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC033`,
      descrip: "PRUEBA VIH",
    },
  },
  {
    path: "/HIC034",
    name: "HIC034",
    component: () => import("@/views/hic/HIC034.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC034`,
      descrip: "Interrupción voluntaria del embarazo",
    },
  },
  {
    path: "/HIC035",
    name: "HIC035",
    component: () => import("@/views/hic/HIC035.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC035`,
      descrip: "Eventos de interés en salud pública (EISP)",
    },
  },
  {
    path: "/HIC036",
    name: "HIC036",
    component: () => import("@/views/hic/HIC036.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC036`,
      descrip: "Tratamiento directamente observado (TDO)",
    },
  },
  {
    path: "/HIC037",
    name: "HIC037",
    component: () => import("@/views/hic/HIC037.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC037`,
      descrip: "Pruebas radiológicas en pacientes en estado o sospecha de gestación",
    },
  },
  {
    path: "/HIC038",
    name: "HIC038",
    component: () => import("@/views/hic/HIC038.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC038`,
      descrip: "Referencia y contrarreferencia OK",
    },
  },
  {
    path: "/HIC039",
    name: "HIC039",
    component: () => import("@/views/hic/HIC039.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC039`,
      descrip: "Salida voluntaria",
    },
  },
  {
    path: "/HIC040",
    name: "HIC040",
    component: () => import("@/views/hic/HIC040.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC040`,
      descrip: "Atencion de parto",
    },
  },
  {
    path: "/HIC041",
    name: "HIC041",
    component: () => import("@/views/hic/HIC041.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC041`,
      descrip: "Ingreso urgencias",
    },
  },
  {
    path: "/HIC042",
    name: "HIC042",
    component: () => import("@/views/hic/HIC042.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC042`,
      descrip: "Aplicación de la vacuna contra el virus del papiloma humano - VPH",
    },
  },
  {
    path: "/HIC043",
    name: "HIC043",
    component: () => import("@/views/hic/HIC043.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC043`,
      descrip: "Consentimiento informado para la aplicacion de la vacuna contra el sars-cov-2/covid-19",
    },
  },
  {
    path: "/HIC044",
    name: "HIC044",
    component: () => import("@/views/hic/HIC044.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC044`,
      descrip: "Acompañamiento durante trabajo de parto, parto y post parto",
    },
  },
  {
    path: "/HIC045",
    name: "HIC045",
    component: () => import("@/views/hic/HIC045.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC045`,
      descrip: "Consentimiento informado cardiología",
    },
  },
  {
    path: "/ODO003",
    name: "ODO003",
    component: () => import("@/views/odo/ODO003.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC042`,
      descrip: "Consentimiento informado para odontología",
    },
  },
];
