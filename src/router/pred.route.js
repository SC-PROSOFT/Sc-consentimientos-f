export const createRoutePre = (title) => [
  {
    path: "/CAT101",
    name: "CAT101",
    component: () => import("@/views/pred/CAT101.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Datos del municipio`,
    },
  },
  {
    path: "/CAT102",
    name: "CAT102",
    component: () => import("@/views/pred/CAT102.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Actualizar tipos de predio`,
    },
  },
  {
    path: "/CAT103",
    name: "CAT103",
    component: () => import("@/views/pred/CAT103.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Actualizar tarifas por tipo`,
    },
  },
  {
    path: "/CAT104",
    name: "CAT104",
    component: () => import("@/views/pred/CAT104.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Actualizar predios`,
    },
  },
  {
    path: "/CAT105",
    name: "CAT105",
    component: () => import("@/views/pred/CAT105.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Actualizar intereses mora`,
    },
  },
  {
    path: "/CAT106",
    name: "CAT106",
    component: () => import("@/views/pred/CAT106.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Actualizar fecha vence`,
    },
  },
  {
    path: "/CAT107",
    name: "CAT107",
    component: () => import("@/views/pred/CAT107.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Actualizar conceptos`,
    },
  },
  {
    path: "/CAT108",
    name: "CAT108",
    component: () => import("@/views/pred/CAT108.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Configurar cobro persuasivo`,
    },
  },
  {
    path: "/CAT109",
    name: "CAT109",
    component: () => import("@/views/pred/CAT109.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Configurar acuerdo de pago`,
    },
  },
  {
    path: "/CAT201",
    name: "CAT201",
    component: () => import("@/views/pred/CAT201.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Generar facturas del periodo`,
    },
  },
  {
    path: "/CAT202",
    name: "CAT202",
    component: () => import("@/views/pred/CAT202.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Impresion masiva de facturas`,
    },
  },
  {
    path: "/CAT203",
    name: "CAT203",
    component: () => import("@/views/pred/CAT203.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Consulta de factura predio`,
    },
  },
  {
    path: "/CAT204",
    name: "CAT204",
    component: () => import("@/views/pred/CAT204.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Reliquidar Factura predio`,
    },
  },
  {
    path: "/CAT301",
    name: "CAT301",
    component: () => import("@/views/pred/CAT301.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Consulta por propietario`,
    },
  },
  {
    path: "/CAT302",
    name: "CAT302",
    component: () => import("@/views/pred/CAT302.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Consulta por numero catastral`,
    },
  },
  {
    path: "/CAT303",
    name: "CAT303",
    component: () => import("@/views/pred/CAT303.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Consulta base igac`,
    },
  },
  {
    path: "/CAT304",
    name: "CAT304",
    component: () => import("@/views/pred/CAT304.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Movimiento cartera x numero catastral`,
    },
  },
  {
    path: "/CAT411",
    name: "CAT411",
    component: () => import("@/views/pred/CAT411.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Elaborar recibo de pago`,
    },
  },
  {
    path: "/CAT412",
    name: "CAT412",
    component: () => import("@/views/pred/CAT412.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Re-imprimir recibo de pago`,
    },
  },
  {
    path: "/CAT413",
    name: "CAT413",
    component: () => import("@/views/pred/CAT413.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Anular recibo de pago`,
    },
  },
  {
    path: "/CAT414",
    name: "CAT414",
    component: () => import("@/views/pred/CAT414.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Re-consolida recibo de pago`,
    },
  },
  {
    path: "/CAT415",
    name: "CAT415",
    component: () => import("@/views/pred/CAT415.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Correccion recibo de pago`,
    },
  },
  {
    path: "/CAT416",
    name: "CAT416",
    component: () => import("@/views/pred/CAT416.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Re-imprimir rango de recibo`,
    },
  },
  {
    path: "/CAT417",
    name: "CAT417",
    component: () => import("@/views/pred/CAT417.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Re-imprimir recibo caja por mes`,
    },
  },
  {
    path: "/CAT421",
    name: "CAT421",
    component: () => import("@/views/pred/CAT421.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Diligenciar resoluciones`,
    },
  },
  {
    path: "/CAT422",
    name: "CAT422",
    component: () => import("@/views/pred/CAT422.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Re-imprimir resoluciones`,
    },
  },
  {
    path: "/CAT423",
    name: "CAT423",
    component: () => import("@/views/pred/CAT423.vue"),
    meta: {
      require_auth: true,
      title: `${title} -Correccion de resoluciones`,
    },
  },
  {
    path: "/CAT424",
    name: "CAT424",
    component: () => import("@/views/pred/CAT424.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Anular resoluciones`,
    },
  },
  {
    path: "/CAT425",
    name: "CAT425",
    component: () => import("@/views/pred/CAT425.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Informe de resoluciones`,
    },
  },
  {
    path: "/CAT431",
    name: "CAT431",
    component: () => import("@/views/pred/CAT431.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Elaborar prescripcion`,
    },
  },
  {
    path: "/CAT432",
    name: "CAT432",
    component: () => import("@/views/pred/CAT432.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Re-imprimir prescripcion`,
    },
  },
  {
    path: "/CAT433",
    name: "CAT433",
    component: () => import("@/views/pred/CAT433.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Re-consolidar prescripcion`,
    },
  },
  {
    path: "/CAT434",
    name: "CAT434",
    component: () => import("@/views/pred/CAT434.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Informe de prescripciones`,
    },
  },
  {
    path: "/CAT441",
    name: "CAT441",
    component: () => import("@/views/pred/CAT441.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Elaborar Paz y salvos`,
    },
  },
  {
    path: "/CAT442",
    name: "CAT442",
    component: () => import("@/views/pred/CAT442.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Re-imprimir Paz y salvos`,
    },
  },
  {
    path: "/CAT443",
    name: "CAT443",
    component: () => import("@/views/pred/CAT443.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Anular Paz y salvos`,
    },
  },
  {
    path: "/CAT444",
    name: "CAT444",
    component: () => import("@/views/pred/CAT444.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Listado Paz y salvos por fechas`,
    },
  },
  {
    path: "/CAT451",
    name: "CAT451",
    component: () => import("@/views/pred/CAT451.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Elaborar Acuerdo de pago`,
    },
  },
  {
    path: "/CAT452",
    name: "CAT452",
    component: () => import("@/views/pred/CAT452.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Re-imprimir Acuerdo de pago`,
    },
  },
  {
    path: "/CAT453",
    name: "CAT453",
    component: () => import("@/views/pred/CAT453.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Recibo de Acuerdo de pago`,
    },
  },
  {
    path: "/CAT461",
    name: "CAT461",
    component: () => import("@/views/pred/CAT461.vue"),
    meta: {
      require_auth: true,
      title: `${title} - BBVA`,
    },
  },
  {
    path: "/CAT462",
    name: "CAT462",
    component: () => import("@/views/pred/CAT462.vue"),
    meta: {
      require_auth: true,
      title: `${title} - BANCO POPULAR`,
    },
  },
  {
    path: "/CAT501",
    name: "CAT501",
    component: () => import("@/views/pred/CAT501.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Catalogo de tarifas`,
    },
  },
  {
    path: "/CAT502",
    name: "CAT502",
    component: () => import("@/views/pred/CAT502.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Informe de facturacion`,
    },
  },
  {
    path: "/CAT503",
    name: "CAT503",
    component: () => import("@/views/pred/CAT503.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Informe de cartera`,
    },
  },
  {
    path: "/CAT504",
    name: "CAT504",
    component: () => import("@/views/pred/CAT504.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Informe de predios`,
    },
  },
  {
    path: "/CAT505",
    name: "CAT505",
    component: () => import("@/views/pred/CAT505.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Informe de avaluos 6 años`,
    },
  },
  {
    path: "/CAT506",
    name: "CAT506",
    component: () => import("@/views/pred/CAT506.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Informe de abonos por años`,
    },
  },
  {
    path: "/CAT507",
    name: "CAT507",
    component: () => import("@/views/pred/CAT507.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Impresion cobro persuasivo`,
    },
  },
  {
    path: "/CAT508",
    name: "CAT508",
    component: () => import("@/views/pred/CAT508.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Informe de cartera por años`,
    },
  },
  {
    path: "/CAT509",
    name: "CAT509",
    component: () => import("@/views/pred/CAT509.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Archivo plano predios PYS`,
    },
  },
  {
    path: "/CAT510",
    name: "CAT510",
    component: () => import("@/views/pred/CAT510.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Informe de abonos Año por año`,
    },
  },
  {
    path: "/CAT511",
    name: "CAT511",
    component: () => import("@/views/pred/CAT511.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Informe exogena DIAN`,
    },
  },
  {
    path: "/CAT512",
    name: "CAT512",
    component: () => import("@/views/pred/CAT512.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Informe exogena pago PSE`,
    },
  },
  {
    path: "/CAT513",
    name: "CAT513",
    component: () => import("@/views/pred/CAT513.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Factura para imprimir`,
    },
  },

  {
    path: "/CAT601",
    name: "CAT601",
    component: () => import("@/views/pred/CAT601.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Subir base de datos IGAC-R1`,
    },
  },
  {
    path: "/CAT602",
    name: "CAT602",
    component: () => import("@/views/pred/CAT602.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Contab causacion impuesto`,
    },
  },
  {
    path: "/CAT603",
    name: "CAT603",
    component: () => import("@/views/pred/CAT603.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Actualiza fecha notificacion`,
    },
  },
  {
    path: "/CAT604",
    name: "CAT604",
    component: () => import("@/views/pred/CAT604.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Contab causacion anterior`,
    },
  },
  {
    path: "/CAT651",
    name: "CAT651",
    component: () => import("@/views/pred/CAT651.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Archivo de predios`,
    },
  },
  {
    path: "/CAT652",
    name: "CAT652",
    component: () => import("@/views/pred/CAT652.vue"),
    meta: {
      require_auth: true,
      title: `${title} - Archivos de recibos de pago`,
    },
  },
];
