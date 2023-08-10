import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa do Kilo`);

console.log(`Informe a quantide de Kilos para converter para gramas:`);
let kilo = Number(ler());

let gramas = kilo * 1000;

console.log(gramas);