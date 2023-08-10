import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa do Açaí.`);

console.log(`Informe a quantide de açaís pequenos que deseja comprar:`);
let acaisP = Number(ler());

console.log(`Informe a quantide de açaís médios que deseja comprar:`);
let acaisM = Number(ler());

console.log(`Informe a quantide de açaís grandes que deseja comprar:`);
let acaisG = Number(ler());

let valorP = 13.50 * acaisP;
let valorM = 15 * acaisM;
let valorG = 17 * acaisG;

let total = valorP + valorM + valorG;


console.log(`O total da compra foi de R$${total}`);