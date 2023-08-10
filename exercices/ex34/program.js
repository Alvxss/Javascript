import prompt from "prompt-sync";
let ler = prompt();

import { peso } from "./kilos.js";

console.log(`Bem-vindo ao programa Kilo.`);

console.log(`Informe quantos kilos você quer converter:`);
let kilo = Number(ler());

let resultado = peso(kilo);

console.log(resultado);


export function peso(kilo) {
    let resultado = kilo * 1000;

    return resultado;
}