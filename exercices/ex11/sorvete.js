export function SorveteriaGramas (gramas) {
  let preco;
  let resultado = ``;
  
  if (gramas >= 1000)
  {
      preco = (gramas / 100) * 3.00;
      
      resultado = `O total da compra de ${gramas}g foi de R$${preco}`;
  }

  else if (gramas < 999 && gramas >= 1)
  {
      preco = (gramas / 100) * 3.50;

      resultado = `O total da compra de ${gramas}g foi de R$${preco}`;
  }

  else if (gramas == 0)
  {
      resultado = `Peso inválido`;
  }

  return resultado;
}