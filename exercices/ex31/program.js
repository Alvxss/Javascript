import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa do Retângulo.`);

console.log(`Informe a altura e a base do primeiro retângulo:`);

console.log(`Altura:`);
let altura1 = Number(ler());
console.log(`base:`);
let base1 = Number(ler());

console.log(`Informe a altura e a base do segundo retângulo:`);

console.log(`Altura:`);
let altura2 = Number(ler());
console.log(`base:`);
let base2 = Number(ler());

let retangulo1 = altura1 * base1;
let retangulo2 = altura2 * base2;

let resultado = retangulo1 == retangulo2;

console.log(`O dois retângulos tem a mesma área?: ${resultado}`);