import IMask from "imask";


export function formatNumberMask_(val = 0, scale = 0) {
    let mask = IMask.createMask({
      mask: Number,
      scale,
      signed: true,
      min: -999999999999.99,
      max: 999999999999.99,
      thousandsSeparator: ",",
      padFractionalZeros: true,
      normalizeZeros: false,
      mapToRadix: [","],
      radix: ".",
    });
  
    let val_num = typeof val == "string" ? val.trim() : val;
    let num = parseFloat(val_num || 0).toString();
    mask.resolve(num);
    return `${mask.value}`;
  }