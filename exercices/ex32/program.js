import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa de Libra(melhor signo).`);

console.log(`Informe o seu mês nascimento:`);
let mes = ler();

console.log(`Informe o dia de nascimento:`);
let dia = Number(ler());

let resultado = mes == `setembro` && dia >= 23 || mes == `outubro` && dia <= 22;

console.log(`Você é de Libra?: ${resultado}`);