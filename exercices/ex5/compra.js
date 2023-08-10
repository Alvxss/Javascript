export function compra (valor, cupom) {
  let desconto = cupom / 100;
  
  let resultado = valor * desconto;
  
  return resultado;
}