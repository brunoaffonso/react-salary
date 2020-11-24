function currencyFormatter(number) {
  const numberFormated = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);

  return numberFormated;
}

function numberFormatter(number) {
  const numberFormated = new Intl.NumberFormat('pt-BR').format(number);
  return numberFormated;
}

export { currencyFormatter, numberFormatter };
