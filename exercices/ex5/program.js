import { compra } from "./compra.js";

import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa da Compra.`);

console.log(`Informe o valor da sua compra:`);
let valor = Number(ler());

console.log(`Informe o valor do seu cupom:`);
let cupom = Number(ler());

let resultado = compra(valor, cupom).toFixed(1);

console.log(`Sua compra foi de R$${valor}, com o desconto de ${cupom}% fica: R$${resultado}`);