export const createRouteLab = (title) => [
  {
    path: "/LAB001",
    name: "LAB001",
    component: () => import("@/views/lab/LAB001.vue"),
    meta: {
      maintenance: true,
      require_auth: true,
      title: `${title} - FORMATO LAB001`,
      descrip: "Consentimiento informado imagenologia",
    },
  },
  {
    path: "/LAB002",
    name: "LAB002",
    component: () => import("@/views/lab/LAB002.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB002`,
      descrip: "Consentimiento informado Sedacion",
    },
  },
  {
    path: "/LAB003",
    name: "LAB003",
    component: () => import("@/views/lab/LAB003.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB003`,
      descrip: "Consentimiento informado radiología convencional",
    },
  },
  {
    path: "/LAB004",
    name: "LAB004",
    component: () => import("@/views/lab/LAB004.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB004`,
      descrip: "Consentimiento informado mamografia",
    },
  },
  {
    path: "/LAB005",
    name: "LAB005",
    component: () => import("@/views/lab/LAB005.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB005`,
      descrip: "Consentimiento informado exámenes de radiología en mujeres gestantes",
    },
  },
  {
    path: "/LAB006",
    name: "LAB006",
    component: () => import("@/views/lab/LAB006.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB006`,
      descrip: "Consentimiento informado ecografía transvaginal",
    },
  },
  {
    path: "/LAB007",
    name: "LAB007",
    component: () => import("@/views/lab/LAB007.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB007`,
      descrip: "Consentimiento informado densitometría ósea",
    },
  },
  {
    path: "/LAB008",
    name: "LAB008",
    component: () => import("@/views/lab/LAB008.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB008`,
      descrip: "Consentimiento informado biopsia",
    },
  },
  {
    path: "/LAB009",
    name: "LAB009",
    component: () => import("@/views/lab/LAB009.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB009`,
      descrip: "Consentimiento informado resonancia magnética nuclear",
    },
  },
  {
    path: "/LAB010",
    name: "LAB010",
    component: () => import("@/views/lab/LAB010.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB010`,
      descrip: "Consentimiento informado tomografia axial computarizada",
    },
  },
  {
    path: "/LAB011",
    name: "LAB011",
    component: () => import("@/views/lab/LAB011.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB011`,
      descrip: "Formato historia clinica de procedimientos contrastados",
      // descrip: "Consentimiento informado procedimientos contrastados",
    },
  },
  {
    path: "/LAB012",
    name: "LAB012",
    component: () => import("@/views/lab/LAB012.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB012`,
      descrip: "Consentimiento informado valoración preanestésica",
    },
  },
  {
    path: "/LAB013",
    name: "LAB013",
    component: () => import("@/views/lab/LAB013.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB013`,
      descrip: "Consentimiento informado sedación fuera de salas de cirugía",
    },
  },
  {
    path: "/LAB014",
    name: "LAB014",
    component: () => import("@/views/lab/LAB014.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB014`,
      descrip: "Consentimiento informado mamografía",
    },
  },
  {
    path: "/LAB015",
    name: "LAB015",
    component: () => import("@/views/lab/LAB015.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB015`,
      descrip: "Consentimiento informado acto quirurgico",
    },
  },
  {
    path: "/LAB016",
    name: "LAB016",
    component: () => import("@/views/lab/LAB016.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB016`,
      descrip: "Consentimiento informado acto anestesico",
    },
  },
  {
    path: "/LAB017",
    name: "LAB017",
    component: () => import("@/views/hic/HIC048.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB017`,
      descrip: "Consentimiento informado para realizar la prueba presuntiva o diagnostica de VIH",
    },
  },
  {
    path: "/LAB018",
    name: "LAB018",
    component: () => import("@/views/hic/HIC049.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB018`,
      descrip: "Consentimiento informado para toma de muestras ginecoloógicas",
    },
  },
  {
    path: "/LAB019",
    name: "LAB019",
    component: () => import("@/views/hic/HIC050.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB019`,
      descrip: "Consentimiento informado toma de muestras de laboratorio clínico",
    },
  },
  {
    path: "/LAB020",
    name: "LAB020",
    component: () => import("@/views/hic/HIC051.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB020`,
      descrip: "Consentimiento informado toma de citologia",
    },
  },
  {
    path: "/LAB021",
    name: "LAB021",
    component: () => import("@/views/lab/LAB021.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB021`,
      descrip: "Formato historia clinica registro de sedacion",
    },
  },
  {
    path: "/LAB022",
    name: "LAB022",
    component: () => import("@/views/hic/HIC076.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB022`,
      descrip: "Consentimiento informado autorizacion voluntaria para la atencion en salud",
    },
  },
  {
    path: "/LAB023",
    name: "LAB023",
    component: () => import("@/views/hic/HIC077.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB023`,
      descrip: "Consentimiento informado para la toma de rx convencional",
    },
  },
  {
    path: "/LAB024",
    name: "LAB024",
    component: () => import("@/views/hic/HIC078.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB024`,
      descrip: "Consentimiento informado para rx convencional a paciente embarazada",
    },
  },
  {
    path: "/LAB025",
    name: "LAB025",
    component: () => import("@/views/hic/HIC056.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB025`,
      descrip: "Comprobante de prestación de servicios",
    },
  },
  {
    path: "/LAB026",
    name: "LAB026",
    component: () => import("@/views/hic/HIC079.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB026`,
      descrip: "Formato de retiro voluntario",
    },
  },
  {
    path: "/LAB027",
    name: "LAB027",
    component: () => import("@/views/hic/HIC081.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB027`,
      descrip: "Formato consentimiento informado para insercion o retiro de implante subdermico",
    },
  },
  {
    path: "/LAB028",
    name: "LAB028",
    component: () => import("@/views/hic/HIC082.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB028`,
      descrip: "Formato consentimiento informado para insercion o retiro de diu",
    },
  },
  {
    path: "/LAB029",
    name: "LAB029",
    component: () => import("@/views/hic/HIC083.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB029`,
      descrip: "Formato consentimiento informado para toma de citologia cervico uterina",
    },
  },
  {
    path: "/LAB030",
    name: "LAB030",
    component: () => import("@/views/hic/HIC084.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB030`,
      descrip: "Anexo consentimiento informado para prueba vih a las gestantes",
    },
  },
  {
    path: "/LAB031",
    name: "LAB031",
    component: () => import("@/views/hic/HIC085.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB031`,
      descrip: "Formato consentimiento informado para realizar la prueba diagnostica presuntiva o prueba diagnostica suplementaria de vih",
    },
  },
  {
    path: "/LAB032",
    name: "LAB032",
    component: () => import("@/views/hic/HIC086.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB032`,
      descrip: "Formato consentimiento custodia historia clinica",
    },
  },
  {
    path: "/LAB033",
    name: "LAB033",
    component: () => import("@/views/lab/LAB033.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB033`,
      descrip: "Consentimiento informado para parto vaginal",
    },
  },
  {
    path: "/LAB034",
    name: "LAB034",
    component: () => import("@/views/lab/LAB034.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB034`,
      descrip: "Formato de copagos",
    },
  },
  {
    path: "/LAB035",
    name: "LAB035",
    component: () => import("@/views/lab/LAB035.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB035`,
      descrip: "Formato consentimiento para toma de muestra de elisa-vih-sida",
    },
  },
  {
    path: "/LAB036",
    name: "LAB036",
    component: () => import("@/views/lab/LAB036.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB036`,
      descrip: "Formato consentimiento informado para toma de muestras a pacientes",
    },
  },
  {
    path: "/LAB037",
    name: "LAB037",
    component: () => import("@/views/hic/HIC117.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB037`,
      descrip: "Consentimiento anestesia general",
    },
  },
  {
    path: "/LAB038",
    name: "LAB038",
    component: () => import("@/views/hic/HIC118.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB038`,
      descrip: "Consentimiento anestesia local",
    },
  },
  {
    path: "/LAB039",
    name: "LAB039",
    component: () => import("@/views/hic/HIC119.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB039`,
      descrip: "Consentimiento anestesia regional",
    },
  },
  {
    path: "/LAB040",
    name: "LAB040",
    component: () => import("@/views/hic/HIC120.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB040`,
      descrip: "Consentimiento cardioversion",
    },
  },
  {
    path: "/LAB041",
    name: "LAB041",
    component: () => import("@/views/hic/HIC121.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB041`,
      descrip: "Consentimiento anestesia epidural",
    },
  },
  {
    path: "/LAB042",
    name: "LAB042",
    component: () => import("@/views/hic/HIC122.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB042`,
  descrip: "Formato de consentimiento informado de cirugia endoscopica nasosinusal para el tratamiento de la epistaxis",
    },
  },
  {
    path: "/LAB043",
    name: "LAB043",
    component: () => import("@/views/hic/HIC123.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB043`,
  descrip: "Formato de consentimiento informado de esofagoscopia mediante esofagoscopio rigido",
    },
  },
  {
    path: "/LAB044",
    name: "LAB044",
    component: () => import("@/views/hic/HIC124.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB044`,
  descrip: "Formato de consentimiento informado de adenoidectomia",
    },
  },
  {
    path: "/LAB045",
    name: "LAB045",
    component: () => import("@/views/hic/HIC125.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB045`,
  descrip: "Formato de consentimiento informado de rinoplastia",
    },
  },
  {
    path: "/LAB046",
    name: "LAB046",
    component: () => import("@/views/hic/HIC126.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB046`,
  descrip: "Formato de consentimiento informado de adenectomia cervical",
    },
  },
  {
    path: "/LAB047",
    name: "LAB047",
    component: () => import("@/views/hic/HIC127.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB047`,
  descrip: "Formato de consentimiento informado de amigdalectomia",
    },
  },
  {
    path: "/LAB048",
    name: "LAB048",
    component: () => import("@/views/hic/HIC128.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB048`,
  descrip: "Formato de consentimiento informado de timpanoplastia",
    },
  },
  {
    path: "/LAB049",
    name: "LAB049",
    component: () => import("@/views/hic/HIC129.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB049`,
  descrip: "Formato de consentimiento informado de reduccion de fractura de huesos propios de la nariz",
    },
  },
  {
    path: "/LAB050",
    name: "LAB050",
    component: () => import("@/views/hic/HIC130.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB050`,
  descrip: "Formato de consentimiento informado de septoplastia",
    },
  },
  {
    path: "/LAB051",
    name: "LAB051",
    component: () => import("@/views/hic/HIC131.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB051`,
  descrip: "Formato de consentimiento informado de adenoamigdalectomia",
    },
  },
  {
    path: "/LAB052",
    name: "LAB052",
    component: () => import("@/views/hic/HIC132.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB052`,
  descrip: "Formato de consentimiento informado de turbinoplastia",
    },
  },
  {
    path: "/LAB053",
    name: "LAB053",
    component: () => import("@/views/hic/HIC133.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB053`,
  descrip: "Formato de consentimiento informado de septorrinoplastia + turbinoplastia",
    },
  },
  {
    path: "/LAB054",
    name: "LAB054",
    component: () => import("@/views/hic/HIC134.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB054`,
  descrip: "Formato de consentimiento informado de septoplastia + turbinoplastia",
    },
  },
  {
    path: "/LAB055",
    name: "LAB055",
    component: () => import("@/views/hic/HIC135.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB055`,
  descrip: "Formato de consentimiento informado de cirugia endoscopica de senos paranasales",
    },
  },
  {
    path: "/LAB056",
    name: "LAB056",
    component: () => import("@/views/hic/HIC136.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB056`,
  descrip: "Formato de consentimiento informado de colocacion de tubos de ventilacion + adenoidectomia",
    },
  },
  {
    path: "/LAB057",
    name: "LAB057",
    component: () => import("@/views/hic/HIC137.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB057`,
  descrip: "Formato de consentimiento informado de laringoscopia directa microcirugia laringea",
    },
  },
  {
    path: "/LAB058",
    name: "LAB058",
    component: () => import("@/views/hic/HIC138.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB058`,
  descrip: "Formato de consentimiento informado de traquetomia",
    },
  },
  {
    path: "/LAB059",
    name: "LAB059",
    component: () => import("@/views/hic/HIC139.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB059`,
  descrip: "Formato de consentimiento informado de tiroidectomia",
    },
  },
  {
    path: "/LAB060",
    name: "LAB060",
    component: () => import("@/views/hic/HIC140.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB060`,
  descrip: "Formato de consentimiento informado de miringoplastia",
    },
  },
  {
    path: "/LAB061",
    name: "LAB061",
    component: () => import("@/views/hic/HIC141.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB061`,
  descrip: "Formato de consentimiento informado de laringoscopia directa e inyeccion intracordal",
    },
  },
  {
    path: "/LAB062",
    name: "LAB062",
    component: () => import("@/views/hic/HIC142.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB062`,
  descrip: "Formato de consentimiento informado de inyeccion intralaringea de toxina botulinica",
    },
  },
  {
    path: "/LAB063",
    name: "LAB063",
    component: () => import("@/views/hic/HIC143.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB063`,
  descrip: "Formato de consentimiento informado de extirpacion de lesion bajo anestesia local",
    },
  },
  {
    path: "/LAB064",
    name: "LAB064",
    component: () => import("@/views/hic/HIC144.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB064`,
  descrip: "Formato de consentimiento informado de estapedectomia",
    },
  },
  {
    path: "/LAB065",
    name: "LAB065",
    component: () => import("@/views/hic/HIC145.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB065`,
  descrip: "Formato de consentimiento informado de septorrinoplastia",
    },
  },
  {
    path: "/LAB066",
    name: "LAB066",
    component: () => import("@/views/hic/HIC146.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB066`,
  descrip: "Formato de consentimiento informado de otoplastia",
    },
  },
  {
    path: "/LAB067",
    name: "LAB067",
    component: () => import("@/views/hic/HIC147.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB067`,
  descrip: "Formato de consentimiento informado de mastoidectomia + timpanoplastia",
    },
  },
  {
    path: "/LAB068",
    name: "LAB068",
    component: () => import("@/views/hic/HIC148.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB068`,
  descrip: "Formato de consentimiento informado de extripacion de angiofibroma de rinofaringe",
    },
  },
  {
    path: "/LAB069",
    name: "LAB069",
    component: () => import("@/views/hic/HIC149.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB069`,
  descrip: "Formato de consentimiento informado de uvulopalatofaringoplastia",
    },
  },
  {
    path: "/LAB070",
    name: "LAB070",
    component: () => import("@/views/hic/HIC150.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB070`,
  descrip: "Formato de consentimiento informado de parotidectomia",
    },
  },
  {
    path: "/LAB071",
    name: "LAB071",
    component: () => import("@/views/hic/HIC151.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB071`,
  descrip: "Formato de consentimiento informado de cirugia endolaringea por suspension",
    },
  },
  {
    path: "/LAB072",
    name: "LAB072",
    component: () => import("@/views/hic/HIC152.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB072`,
  descrip: "Formato de consentimiento informado de extirpacion de lesion cutanea de la cara o cuello",
    },
  },
  {
    path: "/LAB073",
    name: "LAB073",
    component: () => import("@/views/hic/HIC153.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB073`,
  descrip: "Formato de consentimiento informado de cirugia del quiste tirogloso",
    },
  },
  {
    path: "/LAB074",
    name: "LAB074",
    component: () => import("@/views/hic/HIC154.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB074`,
  descrip: "Formato de consentimiento informado de submaxilectomia",
    },
  },
  {
    path: "/LAB075",
    name: "LAB075",
    component: () => import("@/views/hic/HIC155.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB075`,
  descrip: "Formato de consentimiento informado de colocacion de tubos de ventilacion",
    },
  },
  {
    path: "/LAB076",
    name: "LAB076",
    component: () => import("@/views/hic/HIC156.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB076`,
  descrip: "Formato de consentimiento informado de cirugia del colesteatoma",
    },
  },
  {
    path: "/LAB077",
    name: "LAB077",
    component: () => import("@/views/hic/HIC157.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB077`,
  descrip: "Formato de consentimiento informado de antrostomia maxilar o caldwell-luc",
    },
  },
  {
    path: "/LAB078",
    name: "LAB078",
    component: () => import("@/views/hic/HIC158.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB078`,
  descrip: "Formato de consentimiento informado de cervicotomia exploratoria",
    },
  },
  {
    path: "/LAB079",
    name: "LAB079",
    component: () => import("@/views/hic/HIC159.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB079`,
  descrip: "Formato de consentimiento informado de cirugia de la hipofisis por via transesfenoidal",
    },
  },
  {
    path: "/LAB080",
    name: "LAB080",
    component: () => import("@/views/hic/HIC160.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB080`,
  descrip: "Formato de consentimiento informado de dacriocistorrinostomia endonasal",
    },
  },
  {
    path: "/LAB081",
    name: "LAB081",
    component: () => import("@/views/hic/HIC161.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB081`,
  descrip: "Formato de consentimiento frenillectomia lingual",
    },
  },
  {
    path: "/LAB082",
    name: "LAB082",
    component: () => import("@/views/hic/HIC162.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB082`,
  descrip: "Formato de consentimiento vaciamiento cervical",
    },
  },
  {
    path: "/LAB083",
    name: "LAB083",
    component: () => import("@/views/hic/HIC163.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB083`,
  descrip: "Formato de consentimiento timpanomastoidectomia",
    },
  },
  {
    path: "/LAB084",
    name: "LAB084",
    component: () => import("@/views/hic/HIC164.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB084`,
  descrip: "Formato de consentimiento extirpacion de fistula y/o quistes preauriculares",
    },
  },
  {
    path: "/LAB085",
    name: "LAB085",
    component: () => import("@/views/hic/HIC165.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB085`,
  descrip: "Formato de consentimiento informado de biopsia de glandula salivar menor anestesia local",
    },
  },
  {
    path: "/LAB086",
    name: "LAB086",
    component: () => import("@/views/hic/HIC166.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB086`,
  descrip: "Formato de consentimiento informado somnoscopia (dise)",
    },
  },
  {
    path: "/LAB087",
    name: "LAB087",
    component: () => import("@/views/hic/HIC167.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB087`,
  descrip: "Formato de consentimiento informado de infiltracion intratimpanica",
    },
  },
  {
    path: "/LAB088",
    name: "LAB088",
    component: () => import("@/views/hic/HIC168.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB088`,
  descrip: "Formato de consentimiento informado de reseccion de ranula",
    },
  },
  {
    path: "/LAB089",
    name: "LAB089",
    component: () => import("@/views/hic/HIC169.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB089`,
  descrip: "Formato de consentimiento informado para extraccion de cuerpo extraño",
    },
  },
  {
    path: "/LAB090",
    name: "LAB090",
    component: () => import("@/views/hic/HIC170.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB090`,
  descrip: "Formato de consentimiento informado reseccion de sinequia nasal",
    },
  },
  {
    path: "/LAB091",
    name: "LAB091",
    component: () => import("@/views/hic/HIC171.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB091`,
  descrip: "Consentimiento informado transfusion sanguinea",
    },
  },
  {
    path: "/LAB092",
    name: "LAB092",
    component: () => import("@/views/hic/HIC172.vue"),
    meta: {
      require_auth: true,
      title: `${title} - FORMATO LAB092`,
  descrip: "Consentimiento puncion lumbar",
    },
  },
];
