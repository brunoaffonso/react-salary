const inss = [
  {
    id: 1,
    min_value: 0,
    max_value: 1045,
    diference: 1045,
    percentage: 0.075,
  },
  {
    id: 2,
    min_value: 1045.01,
    max_value: 2089.6,
    diference: 1044.6,
    percentage: 0.09,
  },
  {
    id: 3,
    min_value: 2089.61,
    max_value: 3134.4,
    diference: 1044.8,
    percentage: 0.12,
  },
  {
    id: 4,
    min_value: 3134.41,
    max_value: 6101.06,
    diference: 2966.66,
    percentage: 0.14,
  },
];

function round(value) {
  return +value.toFixed(2);
}

function calculateINSS(baseINSS) {
  let inssDiscount = 0;

  if (baseINSS > 6101.07) {
    return round(713.1);
  }

  for (let i = 0; i < inss.length; i++) {
    let currentItem = inss[i];

    if (baseINSS > currentItem.max_value) {
      inssDiscount += currentItem.diference * currentItem.percentage;
    } else {
      inssDiscount +=
        (baseINSS - currentItem.min_value) * currentItem.percentage;
      break;
    }
  }
  return round(inssDiscount);
}

function calculateIRRF(baseIRRF) {
  if (baseIRRF <= 1903.98) {
    return 0;
  } else if (baseIRRF <= 2826.65) {
    return round(baseIRRF * 0.075 - 142.8);
  } else if (baseIRRF <= 3751.05) {
    return round(baseIRRF * 0.15 - 354.8);
  } else if (baseIRRF <= 4664.68) {
    return round(baseIRRF * 0.225 - 636.13);
  } else {
    return round(baseIRRF * 0.275 - 869.36);
  }
}

function totalDiscounts(salary) {
  const baseIRRF = salary - calculateINSS(salary);
  const inss = calculateINSS(salary);
  const irrf = calculateIRRF(baseIRRF);
  return round(inss + irrf);
}

function calculatePercentageDiscount(inicialValue, finalValue) {
  return round(100 - ((finalValue - inicialValue) / inicialValue) * 100 * -1);
}

// function calculatePercentageTotal(inicialValue, finalValue) {
//   return round(((finalValue - inicialValue) / inicialValue) * 100 * -1);
// }

function calculateDiscounts(salary) {
  const baseINSS = salary;
  const inssDiscount = calculateINSS(baseINSS);
  const inssDiscountPercentage = calculatePercentageDiscount(
    salary,
    inssDiscount
  );
  const baseIRRF = salary - inssDiscount;
  const irrfDiscount = calculateIRRF(baseIRRF);
  const irrfDiscountPercentage = calculatePercentageDiscount(
    salary,
    irrfDiscount
  );
  const discounts = totalDiscounts(salary);
  const liquidSalary = round(salary - discounts);
  const totalDiscountsPercentage = calculatePercentageDiscount(
    salary,
    liquidSalary
  );

  return {
    baseINSS,
    inssDiscount,
    inssDiscountPercentage,
    baseIRRF,
    irrfDiscount,
    irrfDiscountPercentage,
    discounts,
    liquidSalary,
    totalDiscountsPercentage,
  };
}

export { calculateDiscounts };
