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
    path: "/HIC010",
    name: "HIC010",
    component: () => import("@/views/hic/HIC010.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC010`,
      descrip: "Formato de salida voluntaria hospitalización",
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
  {
    path: "/HIC046",
    name: "HIC046",
    component: () => import("@/views/lab/LAB015.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC046`,
      descrip: "Consentimiento informado acto quirurgico",
    },
  },
  {
    path: "/HIC047",
    name: "HIC047",
    component: () => import("@/views/lab/LAB016.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC047`,
      descrip: "Consentimiento informado acto anestesico",
    },
  },
  {
    path: "/HIC048",
    name: "HIC048",
    component: () => import("@/views/hic/HIC048.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC048`,
      descrip: "Consentimiento informado para realizar la prueba presuntiva o diagnostica de VIH",
    },
  },
  {
    path: "/HIC049",
    name: "HIC049",
    component: () => import("@/views/hic/HIC049.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC049`,
      descrip: "Consentimiento informado para toma de muestras ginecoloógicas",
    },
  },
  {
    path: "/HIC050",
    name: "HIC050",
    component: () => import("@/views/hic/HIC050.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC050`,
      descrip: "Consentimiento informado toma de muestras de laboratorio clínico",
    },
  },
  {
    path: "/HIC051",
    name: "HIC051",
    component: () => import("@/views/hic/HIC051.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC051`,
      descrip: "Consentimiento informado toma de citologia",
    },
  },
  {
    path: "/HIC052",
    name: "HIC052",
    component: () => import("@/views/hic/HIC052.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC052`,
      descrip: "Consentimiento informado internacion hospitalaria",
    },
  },
  {
    path: "/HIC053",
    name: "HIC053",
    component: () => import("@/views/hic/HIC053.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC053`,
      descrip: "Formato acta de compromiso del familiar y/o acompañante",
    },
  },
  {
    path: "/HIC054",
    name: "HIC054",
    component: () => import("@/views/hic/HIC054.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC054`,
      descrip: "Formato derechos y deberes de los paciente",
    },
  },
  {
    path: "/HIC055",
    name: "HIC055",
    component: () => import("@/views/hic/HIC055.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC055`,
      descrip: "Formato guia para recepcion de visitas y llamadas a los pacientes",
    },
  },
  {
    path: "/HIC056",
    name: "HIC056",
    component: () => import("@/views/hic/HIC056.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC056`,
      descrip: "Comprobante de prestación de servicios",
    },
  },
  {
    path: "/HIC057",
    name: "HIC057",
    component: () => import("@/views/hic/HIC057.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC057`,
      descrip: "Consentimiento informado area de rehabilitacion",
    },
  },
  {
    path: "/HIC058",
    name: "HIC058",
    component: () => import("@/views/hic/HIC058.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC058`,
      descrip: "Formato de consentimiento de insercion del implante subdermico",
    },
  },
  {
    path: "/HIC059",
    name: "HIC059",
    component: () => import("@/views/hic/HIC059.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC059`,
      descrip: "Consentimiento informado para atencion primaria en salud-pic",
    },
  },
  {
    path: "/HIC060",
    name: "HIC060",
    component: () => import("@/views/hic/HIC060.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC060`,
      descrip: "Consentimiento informado y acta de compromiso familiar de visita domiciliaria de atencion primaria en salud",
    },
  },
  {
    path: "/HIC061",
    name: "HIC061",
    component: () => import("@/views/hic/HIC061.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC061`,
      descrip: "Formato consentimiento para acompanamiento y orientacion individual por psicologia",
    },
  },
  {
    path: "/HIC062",
    name: "HIC062",
    component: () => import("@/views/hic/HIC062.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC062`,
      descrip: "Consentimiento informado y acta de compromiso familiar de visita domiciliaria aps",
    },
  },
  {
    path: "/HIC063",
    name: "HIC063",
    component: () => import("@/views/hic/HIC063.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC063`,
      descrip: "Formato de consentimiento informado asesoria interrupcion voluntaria del embarazo (ive)",
    },
  },
  {
    path: "/HIC064",
    name: "HIC064",
    component: () => import("@/views/hic/HIC064.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC064`,
      descrip:
        "Formato registro de consentimiento informado para la realizacion dedeteccion de antigeno para sars-cov2 deteccion de anticuerpos para sars-cov2",
    },
  },
  {
    path: "/HIC065",
    name: "HIC065",
    component: () => import("@/views/hic/HIC065.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC065`,
      descrip: "Formato para consentimiento informado para toma de muestra de hepatitis b",
    },
  },
  {
    path: "/HIC066",
    name: "HIC066",
    component: () => import("@/views/hic/HIC066.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC066`,
      descrip: "Formato consentimiento informado para certificado de discapacidad - acompanante",
    },
  },
  {
    path: "/HIC067",
    name: "HIC067",
    component: () => import("@/views/hic/HIC067.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC067`,
      descrip: "Formato consentimiento informado para certificado de discapacidad",
    },
  },
  {
    path: "/HIC068",
    name: "HIC068",
    component: () => import("@/views/hic/HIC068.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC068`,
      descrip: "Formato consentimiento informado de exploracion vaginal y/o rectal",
    },
  },
  {
    path: "/HIC069",
    name: "HIC069",
    component: () => import("@/views/hic/HIC069.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC069`,
      descrip: "Formato consentimiento informado de atencion domiciliaria",
    },
  },
  {
    path: "/HIC070",
    name: "HIC070",
    component: () => import("@/views/hic/HIC070.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC070`,
      descrip: "Formato de consentimiento informado de procedimientos menores domiciliarios",
    },
  },
  {
    path: "/HIC071",
    name: "HIC071",
    component: () => import("@/views/hic/HIC071.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC071`,
      descrip: "Consentimiento informado para la aplicacion de la vacuna contra el sars-cov-2/covid-19",
    },
  },
  {
    path: "/HIC072",
    name: "HIC072",
    component: () => import("@/views/hic/HIC072.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC072`,
      descrip: "Consentimiento informado para procedimientos menores",
    },
  },
  {
    path: "/HIC073",
    name: "HIC073",
    component: () => import("@/views/hic/HIC073.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC073`,
      descrip: "Formato consentimiento informado para realizar la prueba presunta o diagnostica de vih",
    },
  },
  {
    path: "/HIC074",
    name: "HIC074",
    component: () => import("@/views/hic/HIC074.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC074`,
      descrip: "Formato consentimiento informado toma de citologias cervicouterina",
    },
  },
  {
    path: "/HIC075",
    name: "HIC075",
    component: () => import("@/views/hic/HIC075.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC075`,
      descrip: "Formato consentimiento de insercion del dispositivo intrauterino (DIU)",
    },
  },
  {
    path: "/HIC076",
    name: "HIC076",
    component: () => import("@/views/hic/HIC076.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC076`,
      descrip: "Consentimiento informado autorizacion voluntaria para la atencion en salud",
    },
  },
  {
    path: "/HIC077",
    name: "HIC077",
    component: () => import("@/views/hic/HIC077.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC077`,
      descrip: "Consentimiento informado para la toma de rx convencional",
    },
  },
  {
    path: "/HIC078",
    name: "HIC078",
    component: () => import("@/views/hic/HIC078.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC078`,
      descrip: "Consentimiento informado para rx convencional a paciente embarazada",
    },
  },
  {
    path: "/HIC079",
    name: "HIC079",
    component: () => import("@/views/hic/HIC079.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC079`,
      descrip: "Formato de retiro voluntario",
    },
  },
  // {
  //   path: "/HIC080",
  //   name: "HIC080",
  //   component: () => import("@/views/hic/HIC080.vue"),
  //   meta: {
  //     require_auth: true,
  //     title: `${title} - FORMATO HIC080`,
  //     descrip: "Consentimiento informado aplicacion de anestesia local",
  //   },
  // },
  {
    path: "/HIC081",
    name: "HIC081",
    component: () => import("@/views/hic/HIC081.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC081`,
      descrip: "Formato consentimiento informado para insercion o retiro de implante subdermico",
    },
  },
  {
    path: "/HIC082",
    name: "HIC082",
    component: () => import("@/views/hic/HIC082.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC082`,
      descrip: "Formato consentimiento informado para insercion o retiro de DIU",
    },
  },
  {
    path: "/HIC083",
    name: "HIC083",
    component: () => import("@/views/hic/HIC083.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC083`,
      descrip: "Formato consentimiento informado para toma de citologia cervico uterina",
    },
  },
  {
    path: "/HIC084",
    name: "HIC084",
    component: () => import("@/views/hic/HIC084.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC084`,
      descrip: "Anexo consentimiento informado para prueba vih a las gestantes",
    },
  },
  {
    path: "/HIC085",
    name: "HIC085",
    component: () => import("@/views/hic/HIC085.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC085`,
      descrip: "Formato consentimiento informado para realizar la prueba diagnostica presuntiva o prueba diagnostica suplementaria de vih",
    },
  },
  {
    path: "/HIC086",
    name: "HIC086",
    component: () => import("@/views/hic/HIC086.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC086`,
      descrip: "Formato consentimiento custodia historia clinica",
    },
  },
  {
    path: "/HIC087",
    name: "HIC087",
    component: () => import("@/views/hic/HIC087.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC087`,
      descrip: "Consentimeinto informado para paciente",
    },
  },
  {
    path: "/HIC088",
    name: "HIC088",
    component: () => import("@/views/hic/HIC088.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC088`,
      descrip: "Consentimiento informado para ingreso a hospitalizacion",
    },
  },
  {
    path: "/HIC089",
    name: "HIC089",
    component: () => import("@/views/hic/HIC089.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC089`,
      descrip: "Consentimiento informado para procedimientos invasivos",
    },
  },
  {
    path: "/HIC090",
    name: "HIC090",
    component: () => import("@/views/hic/HIC090.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC090`,
      descrip: "Consentimiento informado para referencia de pacientes sin aceptacion",
    },
  },
  {
    path: "/HIC091",
    name: "HIC091",
    component: () => import("@/views/hic/HIC091.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC091`,
      descrip: "Consentimiento informado pata toma de muestrascovid 19",
    },
  },
  {
    path: "/HIC092",
    name: "HIC092",
    component: () => import("@/views/hic/HIC092.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC092`,
      descrip: "Consentimiento informado toma de citologias",
    },
  },
  {
    path: "/HIC093",
    name: "HIC093",
    component: () => import("@/views/hic/HIC093.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC093`,
      descrip: "Consentimiento inserccion y retiro de dispositivo intrauterino",
    },
  },
  {
    path: "/HIC094",
    name: "HIC094",
    component: () => import("@/views/hic/HIC094.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC094`,
      descrip: "Consentimiento insercion y retiro implante subdermico",
    },
  },
  {
    path: "/HIC095",
    name: "HIC095",
    component: () => import("@/views/hic/HIC095.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC095`,
      descrip: "Formato salida voluntaria urgencias",
    },
  },
  {
    path: "/HIC096",
    name: "HIC096",
    component: () => import("@/views/hic/HIC096.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC096`,
      descrip: "Autorizacion para intervencion en planificacion familiar; insercion o retiro de implante subdermico",
    },
  },
  {
    path: "/HIC097",
    name: "HIC097",
    component: () => import("@/views/hic/HIC097.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC097`,
      descrip: "Autorizacion para intervencion en planificacion familiar; insercion o retiro de diu",
    },
  },
  {
    path: "/HIC098",
    name: "HIC098",
    component: () => import("@/views/hic/HIC098.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC098`,
      descrip: "Formato salida voluntaria",
    },
  },
  {
    path: "/HIC099",
    name: "HIC099",
    component: () => import("@/views/hic/HIC099.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC099`,
      descrip: "Patient Health Questionnaire-4 (PHQ-4)",
    },
  },
  {
    path: "/HIC100",
    name: "HIC100",
    component: () => import("@/views/hic/HIC100.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC100`,
      descrip: "PHQ-9 - Cuestionario de depresion del paciente",
    },
  },
  {
    path: "/HIC101",
    name: "HIC101",
    component: () => import("@/views/hic/HIC101.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC101`,
      descrip: "Formato TEST AUDIT",
    },
  },
  {
    path: "/HIC102",
    name: "HIC102",
    component: () => import("@/views/hic/HIC102.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC102`,
      descrip: "Cuestionario de Síntomas SRQ y CIE para ansiedad",
    },
  },
  {
    path: "/HIC103",
    name: "HIC103",
    component: () => import("@/views/hic/HIC103.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC103`,
      descrip: "Escala de zarit",
    },
  },
  {
    path: "/HIC104",
    name: "HIC104",
    component: () => import("@/views/hic/HIC104.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC104`,
      descrip: "GAD 2 (escala para desorden de ansiedad generalizada)",
    },
  },
  {
    path: "/HIC105",
    name: "HIC105",
    component: () => import("@/views/hic/HIC105.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC105`,
      descrip: "Test de whooley para tamizacion de depresion",
    },
  },
  {
    path: "/HIC106",
    name: "HIC106",
    component: () => import("@/views/hic/HIC106.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC106`,
      descrip: "Transtorno de ansiedad generalizada de 7 items (GAD-7)",
    },
  },
  {
    path: "/HIC107",
    name: "HIC107",
    component: () => import("@/views/hic/HIC107.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC107`,
      descrip: "Self report questionnaire (SRQ)",
    },
  },
  {
    path: "/HIC108",
    name: "HIC108",
    component: () => import("@/views/hic/HIC108.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC108`,
      descrip: "Self report questionnaire (SRQ)",
    },
  },
  {
    path: "/HIC109",
    name: "HIC109",
    component: () => import("@/views/hic/HIC109.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC109`,
      descrip: "Escala SAD persons para evaluacion del riesgo suicida",
    },
  },
  {
    path: "/HIC110",
    name: "HIC110",
    component: () => import("@/views/hic/HIC110.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC110`,
      descrip: "Instrumento minimental",
    },
  },
  {
    path: "/HIC111",
    name: "HIC111",
    component: () => import("@/views/hic/HIC111.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC111`,
      descrip: "Assist (deteccion consumo alcohol, tabaco y sustancias)",
    },
  },
  {
    path: "/HIC112",
    name: "HIC112",
    component: () => import("@/views/hic/HIC112.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC112`,
      descrip: "Consentimiento informado para servicio de hospitalizacion en salud mental y/o consumo de sustancias psicoactivas",
    },
  },
  {
    path: "/HIC113",
    name: "HIC113",
    component: () => import("@/views/lab/LAB034.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC113`,
      descrip: "Formato de copagos",
    },
  },
  {
    path: "/HIC114",
    name: "HIC114",
    component: () => import("@/views/hic/HIC114.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC114`,
      descrip: "Comprobante de servicios pos",
    },
  },
  {
    path: "/HIC115",
    name: "HIC115",
    component: () => import("@/views/hic/HIC115.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC115`,
      descrip: "Comprobante de servicios no pos",
    },
  },
  {
    path: "/HIC116",
    name: "HIC116",
    component: () => import("@/views/hic/HIC116.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC116`,
      descrip: "Formato consentimiento informado para legrado obstetrico",
    },
  },
  {
    path: "/HIC117",
    name: "HIC117",
    component: () => import("@/views/hic/HIC117.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC117`,
      descrip: "Consentimiento anestesia general",
    },
  },
  {
    path: "/HIC118",
    name: "HIC118",
    component: () => import("@/views/hic/HIC118.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC118`,
      descrip: "Consentimiento anestesia local",
    },
  },
  {
    path: "/HIC119",
    name: "HIC119",
    component: () => import("@/views/hic/HIC119.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC119`,
      descrip: "Consentimiento anestesia regional",
    },
  },
  {
    path: "/HIC120",
    name: "HIC120",
    component: () => import("@/views/hic/HIC120.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC120`,
      descrip: "Consentimiento cardioversion",
    },
  },
  {
    path: "/HIC121",
    name: "HIC121",
    component: () => import("@/views/hic/HIC121.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC121`,
      descrip: "Consentimiento anestesia epidural",
    },
  },
  {
    path: "/HIC122",
    name: "HIC122",
    component: () => import("@/views/hic/HIC122.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC122`,
      descrip: "Formato de consentimiento informado de cirugia endoscopica nasosinusal para el tratamiento de la epistaxis",
    },
  },
  {
    path: "/HIC123",
    name: "HIC123",
    component: () => import("@/views/hic/HIC123.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC123`,
      descrip: "Formato de consentimiento informado de esofagoscopia mediante esofagoscopio rigido",
    },
  },
  {
    path: "/HIC124",
    name: "HIC124",
    component: () => import("@/views/hic/HIC124.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC124`,
      descrip: "Formato de consentimiento informado de adenoidectomia",
    },
  },
  {
    path: "/HIC125",
    name: "HIC125",
    component: () => import("@/views/hic/HIC125.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC125`,
      descrip: "Formato de consentimiento informado de rinoplastia",
    },
  },
  {
    path: "/HIC126",
    name: "HIC126",
    component: () => import("@/views/hic/HIC126.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC126`,
      descrip: "Formato de consentimiento informado de adenectomia cervical",
    },
  },
  {
    path: "/HIC127",
    name: "HIC127",
    component: () => import("@/views/hic/HIC127.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC127`,
      descrip: "Formato de consentimiento informado de amigdalectomia",
    },
  },
  {
    path: "/HIC128",
    name: "HIC128",
    component: () => import("@/views/hic/HIC128.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC128`,
      descrip: "Formato de consentimiento informado de timpanoplastia",
    },
  },
  {
    path: "/HIC129",
    name: "HIC129",
    component: () => import("@/views/hic/HIC129.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC129`,
      descrip: "Formato de consentimiento informado de reduccion de fractura de huesos propios de la nariz",
    },
  },
  {
    path: "/HIC130",
    name: "HIC130",
    component: () => import("@/views/hic/HIC130.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC130`,
      descrip: "Formato de consentimiento informado de septoplastia",
    },
  },
  {
    path: "/HIC131",
    name: "HIC131",
    component: () => import("@/views/hic/HIC131.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC131`,
      descrip: "Formato de consentimiento informado de adenoamigdalectomia",
    },
  },
  {
    path: "/HIC132",
    name: "HIC132",
    component: () => import("@/views/hic/HIC132.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC132`,
      descrip: "Formato de consentimiento informado de turbinoplastia",
    },
  },
  {
    path: "/HIC133",
    name: "HIC133",
    component: () => import("@/views/hic/HIC133.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC133`,
      descrip: "Formato de consentimiento informado de septorrinoplastia + turbinoplastia",
    },
  },
  {
    path: "/HIC134",
    name: "HIC134",
    component: () => import("@/views/hic/HIC134.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC134`,
      descrip: "Formato de consentimiento informado de septoplastia + turbinoplastia",
    },
  },
  {
    path: "/HIC135",
    name: "HIC135",
    component: () => import("@/views/hic/HIC135.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC135`,
      descrip: "Formato de consentimiento informado de cirugia endoscopica de senos paranasales",
    },
  },
  {
    path: "/HIC136",
    name: "HIC136",
    component: () => import("@/views/hic/HIC136.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC136`,
      descrip: "Formato de consentimiento informado de colocacion de tubos de ventilacion + adenoidectomia",
    },
  },
  {
    path: "/HIC137",
    name: "HIC137",
    component: () => import("@/views/hic/HIC137.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC137`,
      descrip: "Formato de consentimiento informado de laringoscopia directa microcirugia laringea",
    },
  },
  {
    path: "/HIC138",
    name: "HIC138",
    component: () => import("@/views/hic/HIC138.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC138`,
      descrip: "Formato de consentimiento informado de traquetomia",
    },
  },
  {
    path: "/HIC139",
    name: "HIC139",
    component: () => import("@/views/hic/HIC139.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC139`,
      descrip: "Formato de consentimiento informado de tiroidectomia",
    },
  },
  {
    path: "/HIC140",
    name: "HIC140",
    component: () => import("@/views/hic/HIC140.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC140`,
      descrip: "Formato de consentimiento informado de miringoplastia",
    },
  },
  {
    path: "/HIC141",
    name: "HIC141",
    component: () => import("@/views/hic/HIC141.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC141`,
      descrip: "Formato de consentimiento informado de laringoscopia directa e inyeccion intracordal",
    },
  },
  {
    path: "/HIC142",
    name: "HIC142",
    component: () => import("@/views/hic/HIC142.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC142`,
      descrip: "Formato de consentimiento informado de inyeccion intralaringea de toxina botulinica",
    },
  },
  {
    path: "/HIC143",
    name: "HIC143",
    component: () => import("@/views/hic/HIC143.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC143`,
      descrip: "Formato de consentimiento informado de extirpacion de lesion bajo anestesia local",
    },
  },
  {
    path: "/HIC144",
    name: "HIC144",
    component: () => import("@/views/hic/HIC144.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC144`,
      descrip: "Formato de consentimiento informado de estapedectomia",
    },
  },
  {
    path: "/HIC145",
    name: "HIC145",
    component: () => import("@/views/hic/HIC145.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC145`,
      descrip: "Formato de consentimiento informado de septorrinoplastia",
    },
  },
  {
    path: "/HIC146",
    name: "HIC146",
    component: () => import("@/views/hic/HIC146.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC146`,
      descrip: "Formato de consentimiento informado de otoplastia",
    },
  },
  {
    path: "/HIC147",
    name: "HIC147",
    component: () => import("@/views/hic/HIC147.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC147`,
      descrip: "Formato de consentimiento informado de mastoidectomia + timpanoplastia",
    },
  },
  {
    path: "/HIC148",
    name: "HIC148",
    component: () => import("@/views/hic/HIC148.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC148`,
      descrip: "Formato de consentimiento informado de extripacion de angiofibroma de rinofaringe",
    },
  },
  {
    path: "/HIC149",
    name: "HIC149",
    component: () => import("@/views/hic/HIC149.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC149`,
      descrip: "Formato de consentimiento informado de uvulopalatofaringoplastia",
    },
  },
  {
    path: "/HIC150",
    name: "HIC150",
    component: () => import("@/views/hic/HIC150.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC150`,
      descrip: "Formato de consentimiento informado de parotidectomia",
    },
  },
  {
    path: "/HIC151",
    name: "HIC151",
    component: () => import("@/views/hic/HIC151.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC151`,
      descrip: "Formato de consentimiento informado de cirugia endolaringea por suspension",
    },
  },
  {
    path: "/HIC152",
    name: "HIC152",
    component: () => import("@/views/hic/HIC152.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC152`,
      descrip: "Formato de consentimiento informado de extirpacion de lesion cutanea de la cara o cuello",
    },
  },
  {
    path: "/HIC153",
    name: "HIC153",
    component: () => import("@/views/hic/HIC153.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC153`,
      descrip: "Formato de consentimiento informado de cirugia del quiste tirogloso",
    },
  },
  {
    path: "/HIC154",
    name: "HIC154",
    component: () => import("@/views/hic/HIC154.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC154`,
      descrip: "Formato de consentimiento informado de submaxilectomia",
    },
  },
  {
    path: "/HIC155",
    name: "HIC155",
    component: () => import("@/views/hic/HIC155.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC155`,
      descrip: "Formato de consentimiento informado de colocacion de tubos de ventilacion",
    },
  },
  {
    path: "/HIC156",
    name: "HIC156",
    component: () => import("@/views/hic/HIC156.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC156`,
      descrip: "Formato de consentimiento informado de cirugia del colesteatoma",
    },
  },
  {
    path: "/HIC157",
    name: "HIC157",
    component: () => import("@/views/hic/HIC157.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC157`,
      descrip: "Formato de consentimiento informado de antrostomia maxilar o caldwell-luc",
    },
  },
  {
    path: "/HIC158",
    name: "HIC158",
    component: () => import("@/views/hic/HIC158.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC158`,
      descrip: "Formato de consentimiento informado de cervicotomia exploratoria",
    },
  },
  {
    path: "/HIC159",
    name: "HIC159",
    component: () => import("@/views/hic/HIC159.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC159`,
      descrip: "Formato de consentimiento informado de cirugia de la hipofisis por via transesfenoidal",
    },
  },
  {
    path: "/HIC160",
    name: "HIC160",
    component: () => import("@/views/hic/HIC160.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC160`,
      descrip: "Formato de consentimiento informado de dacriocistorrinostomia endonasal",
    },
  },
  {
    path: "/HIC161",
    name: "HIC161",
    component: () => import("@/views/hic/HIC161.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC161`,
      descrip: "Formato de consentimiento frenillectomia lingual",
    },
  },
  {
    path: "/HIC162",
    name: "HIC162",
    component: () => import("@/views/hic/HIC162.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC162`,
      descrip: "Formato de consentimiento vaciamiento cervical",
    },
  },
  {
    path: "/HIC163",
    name: "HIC163",
    component: () => import("@/views/hic/HIC163.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC163`,
      descrip: "Formato de consentimiento timpanomastoidectomia",
    },
  },
  {
    path: "/HIC164",
    name: "HIC164",
    component: () => import("@/views/hic/HIC164.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC164`,
      descrip: "Formato de consentimiento extirpacion de fistula y/o quistes preauriculares",
    },
  },
  {
    path: "/HIC165",
    name: "HIC165",
    component: () => import("@/views/hic/HIC165.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC165`,
      descrip: "Formato de consentimiento informado de biopsia de glandula salivar menor anestesia local",
    },
  },
  {
    path: "/HIC166",
    name: "HIC166",
    component: () => import("@/views/hic/HIC166.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC166`,
      descrip: "Formato de consentimiento informado somnoscopia (dise)",
    },
  },
  {
    path: "/HIC167",
    name: "HIC167",
    component: () => import("@/views/hic/HIC167.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC167`,
      descrip: "Formato de consentimiento informado de infiltracion intratimpanica",
    },
  },
  {
    path: "/HIC168",
    name: "HIC168",
    component: () => import("@/views/hic/HIC168.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC168`,
      descrip: "Formato de consentimiento informado de reseccion de ranula",
    },
  },
  {
    path: "/HIC169",
    name: "HIC169",
    component: () => import("@/views/hic/HIC169.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC169`,
      descrip: "Formato de consentimiento informado para extraccion de cuerpo extraño",
    },
  },
  {
    path: "/HIC170",
    name: "HIC170",
    component: () => import("@/views/hic/HIC170.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC170`,
      descrip: "Formato de consentimiento informado reseccion de sinequia nasal",
    },
  },
  {
    path: "/HIC171",
    name: "HIC171",
    component: () => import("@/views/hic/HIC171.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC171`,
      descrip: "Consentimiento informado transfusion sanguinea",
    },
  },
  {
    path: "/HIC172",
    name: "HIC172",
    component: () => import("@/views/hic/HIC172.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC172`,
      descrip: "Consentimiento puncion lumbar",
    },
  },
  {
    path: "/HIC173",
    name: "HIC173",
    component: () => import("@/views/hic/HIC173.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC173`,
      descrip: "Consentimiento informado RLCPD certificacion, caracterizacion y localizacion de  personas con discapacidad",
    },
  },
  {
    path: "/HIC174",
    name: "HIC174",
    component: () => import("@/views/hic/HIC174.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC174`,
      descrip: "Consentimiento informado procedimientos medicos",
    },
  },
  {
    path: "/HIC175",
    name: "HIC175",
    component: () => import("@/views/hic/HIC175.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC175`,
      descrip: "Consentimiento informado atencion del parto",
    },
  },
  {
    path: "/HIC176",
    name: "HIC176",
    component: () => import("@/views/hic/HIC176.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC176`,
      descrip: "Consentimiento informado de salida voluntaria",
    },
  },
  {
    path: "/HIC177",
    name: "HIC177",
    component: () => import("@/views/hic/HIC177.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC177`,
      descrip: "Consentimiento informado para realizacion de onicectomia",
    },
  },
  {
    path: "/HIC178",
    name: "HIC178",
    component: () => import("@/views/hic/HIC178.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC178`,
      descrip: "Consentimiento informado toma de muestras de sangre",
    },
  },
  {
    path: "/HIC179",
    name: "HIC179",
    component: () => import("@/views/hic/HIC179.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC179`,
      descrip: "Consentimiento informado prueba de tolerancia oral a la glucosa, curva de glucosa y glicemia pre - post carga",
    },
  },
  {
    path: "/HIC180",
    name: "HIC180",
    component: () => import("@/views/hic/HIC180.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC180`,
      descrip: "Consentimiento informado toma de muestra flujo vaginal en menores de edad",
    },
  },
  {
    path: "/HIC181",
    name: "HIC181",
    component: () => import("@/views/hic/HIC181.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC181`,
      descrip: "Consentimiento informado toma de muestra frotis uretral en menor de edad",
    },
  },
  {
    path: "/HIC182",
    name: "HIC182",
    component: () => import("@/views/hic/HIC182.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC182`,
      descrip: "Consentimiento informado toma y procesamiento de muestras para covid - 19",
    },
  },
  {
    path: "/HIC183",
    name: "HIC183",
    component: () => import("@/views/hic/HIC183.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC183`,
      descrip: "Consentimiento informado toma de muestras frotis de flujo vaginal y cultivo recto - vaginal",
    },
  },
  {
    path: "/HIC184",
    name: "HIC184",
    component: () => import("@/views/hic/HIC184.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC184`,
      descrip: "Consentimiento informado toma de muestra de orina con sonda vesical",
    },
  },
  {
    path: "/HIC185",
    name: "HIC185",
    component: () => import("@/views/hic/HIC185.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC185`,
      descrip: "Consentimiento informado toma de muestra de orina con sonda vesical",
    },
  },
  {
    path: "/HIC186",
    name: "HIC186",
    component: () => import("@/views/hic/HIC186.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC186`,
      descrip: "Formato relacion de consentimientos informados",
    },
  },
  {
    path: "/HIC187",
    name: "HIC187",
    component: () => import("@/views/hic/HIC187.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC187`,
      descrip: "Consentimiento informado para cirugia",
    },
  },
  {
    path: "/HIC188",
    name: "HIC188",
    component: () => import("@/views/hic/HIC188.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC188`,
      descrip: "Lista de chequeo previo ingreso a cirugia",
    },
  },
  {
    path: "/HIC189",
    name: "HIC189",
    component: () => import("@/views/hic/HIC189.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC189`,
      descrip: "Visto bueno para egreso del paciente",
    },
  },
  {
    path: "/HIC190",
    name: "HIC190",
    component: () => import("@/views/lab/LAB033.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO HIC190`,
      descrip: "Consentimiento informado para parto vaginal",
    },
  },
];
