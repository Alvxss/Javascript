import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa da Cor.`);

console.log(`Informe uma cor:`);
let cor = ler();

let resultado = cor == `vermelho` || cor == `amarelo` || cor == `azul`;

console.log(`A cor ${cor} é primária?: ${resultado}`);