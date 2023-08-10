import prompt from "prompt-sync";
let ler = prompt();

import { semafaro } from "./semafaro.js";

console.log(`Bem-vindo(a) ao programa do Semáfaro.`);

console.log(`Informe que cor está o semáfaro:`);
let cor = ler();

let resultado = semafaro(cor);

console.log(resultado);