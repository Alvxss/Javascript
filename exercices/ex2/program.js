import prompt from "prompt-sync";
let ler = prompt();

console.log(`Seja bem-vindo(a) ao programa da Calculadora de somar dois números.`);

console.log(`Informe o primeiro número:`);
let n1 = Number(ler());

console.log(`Informe o segundo número:`);
let n2 = Number(ler());

let soma = n1 + n2;

console.log(`A soma de ${n1} + ${n2} é: ${soma}.`);