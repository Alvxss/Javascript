import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa da Quilometragem(Pelo valor).`);

console.log(`Informe o valor da sua corrida para calcalarmos a quilometragem percorrida:`);
let valorCorrida = Number(ler());

let resultado = (valorCorrida - 4.20) / 0.65;

console.log(`No valor de R$${valorCorrida} foi percorrido ${resultado} KM`);