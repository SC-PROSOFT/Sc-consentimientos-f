export const menu_pred = JSON.parse(
  JSON.stringify([
    {
      opc: "1",
      text: "Archivos maestros",
      sub: [
        {
          opc: "1",
          id: "C1",
          text: "Datos del municipio",
          route: "/CAT101",
        },
        {
          opc: "2",
          id: "C2",
          text: "Actualizar tipos de predio",
          route: "/CAT102",
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
          opc: "5",
          id: "C5",
          text: "Actualizar intereses mora",
          route: "/CAT105",
        },
        {
          opc: "6",
          id: "C6",
          text: "Actualizar fecha vence",
          route: "/CAT106",
        },
        {
          opc: "7",
          id: "C7",
          text: "Actualizar conceptos",
          route: "/CAT107",
        },
        {
          opc: "8",
          id: "C8",
          text: "Configurar cobro persuasivo",
          route: "/CAT108",
        },
        {
          opc: "9",
          id: "C9",
          text: "Configurar acuerdo de pago",
          route: "/CAT109",
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
      text: "Generar facturacion",

      sub: [
        {
          opc: "1",
          id: "C21",
          text: "Generar facturas del periodo",
          route: "/CAT201",
        },
        {
          opc: "2",
          id: "C22",
          text: "Impresion masiva de facturas",
          route: "/CAT202",
        },
        {
          opc: "3",
          id: "C23",
          text: "Consulta de factura predio",
          route: "/CAT203",
        },
        {
          opc: "4",
          id: "C24",
          text: "Reliquidar Factura predio",
          route: "/CAT204",
        },
        {
          opc: "F",
          text: "Regresar",
          icon: "undo",
        },
      ],
    },
    {
      opc: "3",
      text: "Consultas",

      sub: [
        {
          opc: "1",
          id: "C31",
          text: "Consulta por propietario",
          route: "/CAT301",
        },
        {
          opc: "2",
          id: "C32",
          text: "Consulta por numero catastral",
          route: "/CAT302",
        },
        {
          opc: "3",
          id: "C33",
          text: "Consulta base igac",
          route: "/CAT303",
        },
        {
          opc: "4",
          id: "C34",
          text: "Movimiento cartera x numero catastral",
          route: "/CAT304",
        },
        {
          opc: "F",
          text: "Regresar",
          icon: "undo",
        },
      ],
    },
    {
      opc: "4",
      text: "Formularios",

      sub: [
        {
          opc: "1",
          id: "C41",
          text: "Recibo de pago de predial",

          sub: [
            {
              opc: "1",
              id: "C411",
              text: "Elaborar recibo de pago",
              route: "/CAT411",
            },
            {
              opc: "2",
              id: "C412",
              text: "Re-imprimir recibo de pago",
              route: "/CAT412",
            },
            {
              opc: "3",
              id: "C413",
              text: "Anular recibo de pago",
              route: "/CAT413",
            },
            {
              opc: "4",
              id: "C414",
              text: "Re-consolida recibo de pago",
              route: "/CAT414",
            },
            {
              opc: "5",
              id: "C415",
              text: "Correccion recibo de pago",
              route: "/CAT415",
            },
            {
              opc: "6",
              id: "C416",
              text: "Re-imprimir rango de recibo",
              route: "/CAT416",
            },
            {
              opc: "7",
              id: "C417",
              text: "Re-imprimir recibo caja por mes",
              route: "/CAT417",
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
          id: "C42",
          text: "Resoluciones IGAC",

          sub: [
            {
              opc: "1",
              id: "C421",
              text: "Diligenciar resoluciones",
              route: "/CAT421",
            },
            {
              opc: "2",
              id: "C422",
              text: "Re-imprimir resoluciones",
              route: "/CAT422",
            },
            {
              opc: "3",
              id: "C423",
              text: "Correccion de resoluciones",
              route: "/CAT423",
            },
            {
              opc: "4",
              id: "C424",
              text: "Anular resoluciones",
              route: "/CAT424",
            },
            {
              opc: "5",
              id: "C425",
              text: "Informe de resoluciones",
              route: "/CAT425",
            },
            {
              opc: "F",
              text: "Regresar",
              icon: "undo",
            },
          ],
        },
        {
          opc: "3",
          id: "C43",
          text: "Prescripciones",

          sub: [
            {
              opc: "1",
              id: "C431",
              text: "Elaborar prescripcion",
              route: "/CAT431",
            },
            {
              opc: "2",
              id: "C432",
              text: "Re-imprimir prescripcion",
              route: "/CAT432",
            },
            {
              opc: "3",
              id: "C433",
              text: "Re-consolidar prescripcion",
              route: "/CAT433",
            },
            {
              opc: "4",
              id: "C434",
              text: "Informe de prescripciones",
              route: "/CAT434",
            },
            {
              opc: "F",
              text: "Regresar",
              icon: "undo",
            },
          ],
        },
        {
          opc: "4",
          id: "C44",
          text: "Paz y salvos",

          sub: [
            {
              opc: "1",
              id: "C441",
              text: "Elaborar Paz y salvos",
              route: "/CAT441",
            },
            {
              opc: "2",
              id: "C442",
              text: "Re-imprimir Paz y salvos",
              route: "/CAT442",
            },
            {
              opc: "3",
              id: "C443",
              text: "Anular Paz y salvos",
              route: "/CAT443",
            },
            {
              opc: "4",
              id: "C444",
              text: "Listado Paz y salvos por fechas",
              route: "/CAT444",
            },
            {
              opc: "F",
              text: "Regresar",
              icon: "undo",
            },
          ],
        },
        {
          opc: "5",
          id: "C45",
          text: "Acuerdos de pago",

          sub: [
            {
              opc: "1",
              id: "C451",
              text: "Elaborar Acuerdo de pago",
              route: "/CAT451",
            },
            {
              opc: "2",
              id: "C452",
              text: "Re-imprimir Acuerdo de pago",
              route: "/CAT452",
            },
            {
              opc: "3",
              id: "C453",
              text: "Recibo de Acuerdo de pago",
              route: "/CAT453",
            },
            {
              opc: "F",
              text: "Regresar",
              icon: "undo",
            },
          ],
        },
        {
          opc: "6",
          id: "C46",
          text: "Recaudos en bancos",

          sub: [
            {
              opc: "1",
              id: "C461",
              text: "BBVA",
              route: "/CAT461",
            },
            {
              opc: "2",
              id: "C462",
              text: "BANCO POPULAR",
              route: "/CAT462",
            },
            {
              opc: "F",
              text: "Regresar",
              icon: "undo",
            },
          ],
        },
        {
          opc: "F",
          text: "Regresar",
          icon: "undo",
        },
      ],
    },
    {
      opc: "5",
      text: "Informes",

      sub: [
        {
          opc: "1",
          id: "C51",
          text: "Catalogo de tarifas",
          route: "/CAT501",
        },
        {
          opc: "2",
          id: "C52",
          text: "Informe de facturacion",
          route: "/CAT502",
        },
        {
          opc: "3",
          id: "C53",
          text: "Informe de cartera",
          route: "/CAT503",
        },
        {
          opc: "4",
          id: "C54",
          text: "Informe de predios",
          route: "/CAT504",
        },
        {
          opc: "5",
          id: "C55",
          text: "Informe de avaluos 6 años",
          route: "/CAT505",
        },
        {
          opc: "6",
          id: "C56",
          text: "Informe de abonos por años",
          route: "/CAT506",
        },
        {
          opc: "7",
          id: "C57",
          text: "Impresion cobro persuasivo",
          route: "/CAT507",
        },
        {
          opc: "8",
          id: "C58",
          text: "Informe de cartera por años",
          route: "/CAT508",
        },
        {
          opc: "9",
          id: "C59",
          text: "Archivo plano predios PYS",
          route: "/CAT509",
        },
        {
          opc: "A",
          id: "C5A",
          text: "Informe de abonos Año por año",
          route: "/CAT510",
        },
        {
          opc: "B",
          id: "C5B",
          text: "Informe exogena DIAN",
          route: "/CAT511",
        },
        {
          opc: "C",
          id: "C5C",
          text: "Informe exogena pago PSE",
          route: "/CAT512",
        },
        {
          opc: "D",
          id: "C5D",
          text: "Factura para imprimir",
          route: "/CAT513",
        },
        {
          opc: "F",
          text: "Regresar",
          icon: "undo",
        },
      ],
    },
    {
      opc: "6",
      text: "Procesos adicionales",

      sub: [
        {
          opc: "1",
          id: "C61",
          text: "Subir base de datos IGAC-R1",
          route: "/CAT601",
        },
        {
          opc: "2",
          id: "C62",
          text: "Contab causacion impuesto",
          route: "/CAT602",
        },
        {
          opc: "3",
          id: "C63",
          text: "Actualiza fecha notificacion",
          route: "/CAT603",
        },
        {
          opc: "4",
          id: "C64",
          text: "Contab causacion anterior",
          route: "/CAT604",
        },
        {
          opc: "5",
          text: "Auditoria",

          sub: [
            {
              opc: "1",
              id: "C651",
              text: "Archivo de predios",
              route: "/CAT651",
            },
            {
              opc: "2",
              id: "C652",
              text: "Archivos de recibos de pago",
              route: "/CAT652",
            },
            {
              opc: "F",
              text: "Regresar",
              icon: "undo",
            },
          ],
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
