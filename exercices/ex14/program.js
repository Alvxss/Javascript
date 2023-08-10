import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa de Médicos.`);

console.log(`Informe a quantida de Médicos:`);
let medicos = Number(ler());

let mulheres = (medicos / 100) * 48;

let pediatras = (mulheres / 100) * 9;

console.log(`De ${medicos} médicos, ${mulheres} são mulheres, e ${pediatras} são mulheres pediatras.`);