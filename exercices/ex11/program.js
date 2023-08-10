import prompt from "prompt-sync";
let ler = prompt();

import { SorveteriaGramas } from "./sorvete.js";

console.log(`Bem-vindo ao programa da Sorveteria.`);

console.log(`Informe a quantidade de gramas que você deseja comprar:`);
let gramas = Number(ler());

let resultado = SorveteriaGramas(gramas);

console.log(resultado);