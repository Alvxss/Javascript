export function resultadoDaAprovacao (media) {
  let resultado = ``;

  if (media >= 8) 
  {
      resultado = `Aprovado com sucesso.`
  }

  else if (media >= 6 && media < 8)
  {
      resultado = `Aprovado.`
  }

  else if (media >= 3 && media < 6)
  {
      resultado = `Recuperação.`
  }

  else if (media < 3)
  {
      resultado = `Reprovado.`
  }

  else if (media == 0)
  {
      resultado = `Desistente`
  }

  return resultado;
}