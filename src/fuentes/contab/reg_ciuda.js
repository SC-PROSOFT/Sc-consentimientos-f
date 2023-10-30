export const reg_ciuda_ = () => {
  return {
    dpto_ciu: null,
    ciu_ciu: null,
    nombre_ciu: null,
    pais_ciu: null,
    actbarrios_ciu: null,
    increm_ciu: null,
  };
};

export const form_ciuda_ = () => {
  return {
    dpto_ciu: {
      id: "dpto_ciu",
      label: "Cod.Dpto",
      tipo: "number",
      maxlength: "2",
      disabled: true,
      required: true,
    },
    ciu_ciu: {
      id: "ciu_ciu",
      label: "Cod.Ciud",
      tipo: "number",
      maxlength: "3",
      disabled: true,
      required: true,
    },
    nombre_ciu: {
      id: "nombre_ciu",
      label: "Nombre de ciudad",
      tipo: "text",
      maxlength: "20",
      disabled: true,
      required: true,
    },
    pais_ciu: {
      id: "pais_ciu",
      label: "Pais",
      tipo: "text",
      maxlength: "3",
      disabled: true,
      required: true,
    },
    actbarrios_ciu: {
      id: "actbarrios_ciu",
      label: "Act.Barr",
      tipo: "text",
      maxlength: "1",
      disabled: true,
      required: true,
    },
    increm_ciu: {
      id: "increm_ciu",
      label: "increment .",
      tipo: "number",
      maxlength: "5",
      disabled: true,
      required: true,
    },
  };
};
