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
          text: "COLPOSCOPIA ",
          route: "/HIC25",
        },
        {
          opc: "3",
          id: "C3",
          text: "Actualizar tarifas por tipo",
          route: "/CAT103",
        },
        {
          opc: "4",
          id: "C4",
          text: "Actualizar predios",
          route: "/CAT104",
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
