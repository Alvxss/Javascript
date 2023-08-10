import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa das Parcelas.`);

console.log(`Informe o valor da compra:`);
let valor = Number(ler());

console.log(`Informe a quantida de parcelas:`);
let parcelas = Number(ler());

let total = valor / parcelas.toFixed(1);

console.log(`O valor de R$${valor}, parcelado em ${parcelas}x fica: R$${total}`);