import prompt from "prompt-sync";
let ler = prompt();

import { rendaFamiliar } from "./situacao.js";

console.log(`Bem-vindo(a) ao programa do Orçamento.`);

console.log(`Informe os ganhos totais:`);
let ganhos = Number(ler());

let resultado = rendaFamiliar(ganhos);

console.log(resultado);