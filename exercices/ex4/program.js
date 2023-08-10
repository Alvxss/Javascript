import { media } from "./media.js";

import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa da Média, onde é feito a média de apenas três notas.`);

console.log(`Infome sua primeira nota:`);
let n1 = Number(ler());

console.log(`Infome sua segunda nota:`);
let n2 = Number(ler());

console.log(`Infome sua terceira nota:`);
let n3 = Number(ler());

let resultado = media(n1, n2, n3).toFixed(0);

console.log(`Sua média foi de: ${resultado}.`);