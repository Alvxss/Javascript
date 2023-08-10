import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa de Juros Simples`);

console.log(`Informe o valor de capaital:`);
let capital = Number(ler());

console.log(`Informe o valor da taxa:`);
let taxa = Number(ler());

console.log(`Informe a quantidade de mêses:`);
let meses = Number(ler());

let juros = (capital * taxa * meses) / 100;

let montante = capital + juros;

console.log(`O montante pago pelo empréstimo de R$${capital} é R$${montante}`);