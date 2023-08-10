import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa do Açaí.`);

console.log(`Informe a quantide de açaís que deseja comprar:`);
let acais = Number(ler());

let total = 13.50 * acais;

console.log(`O total da compra foi de R$${total}`);