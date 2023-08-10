import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa do Real.`);

console.log(`Informe um valor para a conversão:`);
let dolar = Number(ler());

let real = dolar * 5.05;

console.log(`Sobre o valor de US$${dolar}, o valor em Real é R$${real}`);