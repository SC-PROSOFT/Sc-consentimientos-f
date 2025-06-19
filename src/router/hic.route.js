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
];
