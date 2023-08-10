import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa do Quadrado.`);

console.log(`Informe a altura e a base do primeiro quadrado:`);

console.log(`Altura:`);
let altura1 = Number(ler());
console.log(`base:`);
let base1 = Number(ler());

console.log(`Informe a altura e a base do segundo quadrado:`);

console.log(`Altura:`);
let altura2 = Number(ler());
console.log(`base:`);
let base2 = Number(ler());

let quadrado1 = altura1 * base1;
let quadrado2 = altura2 * base2;

let resultado = quadrado1 == quadrado2;

console.log(`O dois quadrados tem a mesma área?: ${resultado}`);