import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa de Médicos.`);

console.log(`Informe a quantidade de médicos:`);
let medicos = Number(ler());

let homens = (medicos / 100) * 52;

console.log(`De ${medicos} médicos, ${homens} são homens.`);