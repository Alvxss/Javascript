export function rendaFamiliar (valor) {
  let resultado = ``;

  if (valor >= 1000 && valor < 1999)
  {
      resultado = `Você está fora do orçamento! Não gaste mais!`;
  }

  else if (valor >= 2000 && valor < 2999)
  {
      resultado = `Você está dentro do orçamento!`;
  }

  else if (valor >= 3000)
  {
      resultado = `Hora de marcar uma viagem!`;
  }

  return resultado;
}