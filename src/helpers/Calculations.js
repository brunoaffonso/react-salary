const inss = [
  {
    id: 1,
    valor_min: 0,
    valor_max: 1045,
    diferenca: 1045,
    aliquota: 0.075,
  },
  {
    id: 2,
    valor_min: 1045.01,
    valor_max: 2089.6,
    diferenca: 1044.6,
    aliquota: 0.09,
  },
  {
    id: 3,
    valor_min: 2089.61,
    valor_max: 3134.4,
    diferenca: 1044.8,
    aliquota: 0.12,
  },
  {
    id: 4,
    valor_min: 3134.41,
    valor_max: 6101.06,
    diferenca: 2966.66,
    aliquota: 0.14,
  },
];

const irrf = [
  {
    id: 1,
    valor_min: 0,
    valor_max: 1903.98,
    aliquota: 0,
    deducao: 0,
  },
  {
    id: 2,
    valor_min: 1903.99,
    valor_max: 2826.65,
    aliquota: 0.075,
    deducao: 142.8,
  },
  {
    id: 3,
    valor_min: 2826.66,
    valor_max: 3751.05,
    aliquota: 0.15,
    deducao: 354.8,
  },
  {
    id: 4,
    valor_min: 3751.06,
    valor_max: 4664.68,
    aliquota: 0.225,
    deducao: 636.13,
  },
  {
    id: 5,
    valor_min: 4664.69,
    valor_max: 0,
    aliquota: 0.275,
    deducao: 869.36,
  },
];

function round(value) {
  return +value.toFixed(2);
}

function calculateINSS(baseINSS) {
  let currentINSS = 0;
}

function calculateIRRF(baseIRRF) {
  let currentIRRF = 0;
}
