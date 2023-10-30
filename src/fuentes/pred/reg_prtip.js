export const reg_prtip_ = () => {
  return {
    id_prtipo: null,
    cod_prtipo: null,
    descrip_prtipo: null,
  };
};

export const form_prtip_ = () => {
  return {
    cod_prtipo: {
      id: "cod_prtipo",
      label: "Código",
      tipo: "codigo",
      maxlength: "1",
      disable: true,
      required: true,
      f0: ["f8"],
    },
    descrip_prtipo: {
      id: "descrip_prtipo",
      label: "Descripción",
      maxlength: "20",
      disable: true,
      required: true,
    },
  };
};
