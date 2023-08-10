import { corPrimaria } from "./cor.js";

import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa da Cor Primária, informaremos até duas cores que você colocar neste porograma se são primárias.`);

console.log(`Informe a primeira cor:`);
let cor1 = ler(ler);

console.log(`Informe a segunda cor:`);
let cor2 = ler(ler);

let resultado1 = corPrimaria(cor1);
let resultado2 = corPrimaria(cor2);
console.log(`A cor ${cor1} é ${resultado1}, a cor ${cor2} é ${resultado2}.`);