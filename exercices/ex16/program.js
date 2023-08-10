import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa dos Votos.`);

console.log(`Informe a quantidade de votos:`);
let votos = Number(ler());

let brancos = (votos / 100) * 20;
let validos = (votos / 100) * 50;
let nulos = (votos / 100) * 30;

console.log(`Sobre ${votos} votos, ${brancos} foram brancos, ${validos} foram válidos e ${nulos} foram nulos.`);