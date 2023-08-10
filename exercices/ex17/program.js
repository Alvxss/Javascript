import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa do Sálario de Vendedor de Carros.`);

console.log(`Informe o seu sálario fixo:`);
let salario = Number(ler());

console.log(`Informe quantos carros foram vendidos:`);
let carros = Number(ler());

console.log(`Informe o valor de carros vendidos:`);
let valorCarros = Number(ler());

let comissaoCarros = valorCarros * 0.5;

let somaCarros = carros * valorCarros;

let total = salario + somaCarros + comissaoCarros;

console.log(`Seu salário é de: R$${total}`);