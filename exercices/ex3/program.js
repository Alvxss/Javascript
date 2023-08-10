import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa da Febre.`);

console.log(`Infome com quantos gruas você está agora:`);
let temp = Number(ler());

let resultado = temp >= 37.5;

console.log(`Você está com febre?: ${resultado}.`);