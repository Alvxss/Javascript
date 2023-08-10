import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa de Febre.`);

console.log(`Informe a sua temperatura:`);
let graus = Number(ler());

let resultado = graus >= 37;

console.log(`Você está com febre?: ${resultado}`);