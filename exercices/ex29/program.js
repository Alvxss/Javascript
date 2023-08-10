import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa Par.`);

console.log(`Informe o número para saber se é par`);
let numero = Number(ler());

let par = numero % 2;

let resultado = par == 0;

console.log(`O número ${numero} é ${resultado}`);