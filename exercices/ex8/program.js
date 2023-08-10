import prompt from "prompt-sync";
let ler = prompt();

import { media } from "../ex7/aprovado.js";
import { resultadoDaAprovacao } from "./ifMedia.js";

console.log(`Bem-vindo(a) ao programa de Aprovação, informe três notas para calcularmos a média e ver se o usuário(a)`);
console.log(`foi aprovado com sucesso.`);

console.log(`Infome sua primeira nota:`);
let n1 = Number(ler());

console.log(`Infome sua segunda nota:`);
let n2 = Number(ler());

console.log(`Infome sua terceira nota:`);
let n3 = Number(ler());

let notaMedia = media(n1 , n2, n3).toFixed(0);

let aprovado = resultadoDaAprovacao(notaMedia);

console.log(aprovado);