export const dateFormatter = new Intl.DateTimeFormat('pt-br')

export const priceFormat = new Intl.NumberFormat('pt-BR', {
  style: 'currency', // para formatar como moeda
  currency: 'BRl', // tipo da moeda
})
