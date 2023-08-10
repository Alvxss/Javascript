import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa da Quilometragem.`);

console.log(`Informe quantos quilometros foram percorridos:`);
let km = Number(ler());

let valorCorrida = (0.65 * km) + 4.20;

console.log(`O valor total da corrida foi de R$${valorCorrida}`);