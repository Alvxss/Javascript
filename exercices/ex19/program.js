import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa do Dólar.`);

console.log(`Informe um valor para a conversão:`);
let real = Number(ler());

let dolar = real / 5.05;

console.log(`Sobre o valor de R$${real}, o valor em Dólar é US$${dolar}`);