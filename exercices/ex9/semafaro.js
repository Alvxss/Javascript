export function semafaro (cor) {
  let resultado = ``;

  if (cor == `verde`)
  {
      resultado = `Atravesse.`;
  }

  else if (cor == `vermelho`)
  {
      resultado = `Espere.`;
  }

  return resultado;
}