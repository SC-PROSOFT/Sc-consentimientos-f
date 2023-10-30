export const menu_consen = JSON.parse(
  JSON.stringify([
    {
      opc: "1",
      text: "CONSENTIMIENTOS PYP",
      sub: [
        {
          opc: "1",
          id: "HIC24",
          text: "TOMA DE CITOLOGIA",
          route: "/HIC24",
        },
        {
          opc: "2",
          id: "HIC25",
          text: "COLPOSCOPIA",
          route: "/HIC25",
        },
        {
          opc: "3",
          id: "HIC27",
          text: "PRUEBA VIH",
          route: "/HIC27",
        },
        {
          opc: "4",
          id: "HIC28",
          text: "INTERRUPCIÓN VOLUNTARIA DEL EMBARAZO",
          route: "/HIC28",
        },
        {
          opc: "5",
          id: "HIC26",
          text: "ESTANDAR",
          route: "/HIC26",
        },
        {
          opc: "F",
          text: "Regresar",
          icon: "undo",
        },
      ],
    },
    {
      opc: "2",
      text: "CONSENTIMIENTOS URGENCIAS",
      sub: [
        {
          opc: "1",
          id: "URG01",
          text: "REFERENCIA Y CONTRA REFERENCIA DE PACIENTES",
          route: "/URG01",
        },
        {
          opc: "2",
          id: "URG02",
          text: "SALIDA VOLUNTARIA",
          route: "/URG02",
        },
        {
          opc: "3",
          id: "URG03",
          text: "CONDUCCIÓN Y LA ATENCIÓN DEL TRABAJO DE PARTO Y PARTO VAGINAL",
          route: "/URG03",
        },
        {
          opc: "4",
          id: "URG04",
          text: "ENTANDAR",
          route: "/URG04",
        },
        {
          opc: "F",
          text: "Regresar",
          icon: "undo",
        },
      ],
    },
    {
      opc: "S",
      text: "Salir de Prosoft",
      icon: "cancel_presentation",
      color: "teal-9",
    },
  ])
);
