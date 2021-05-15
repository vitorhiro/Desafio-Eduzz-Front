export const currencyMask = (value: number) => {
  return parseFloat(value.toString()).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const a = 'teste';
