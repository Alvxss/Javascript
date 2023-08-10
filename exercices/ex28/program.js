import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa do Parque.`);

console.log(`Informe quantos graus está fazendo para ver se dever ir ao parque:`);
let graus = Number(ler());

let resultado = graus >= 23 && graus <= 30;

console.log(`Você deve ir ao parque?: ${resultado}`);