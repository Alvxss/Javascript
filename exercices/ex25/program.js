import prompt from "prompt-sync";
let ler = prompt();

console.log(`Bem-vindo(a) ao programa de conversão de Graus Fahrenheit - Celsius`);

console.log(`Informe o primeiro número em Fahrenheit:`);
let fahrenheit1 = Number(ler());

console.log(`Informe o segundo número em Fahrenheit:`);
let fahrenheit2 = Number(ler());

console.log(`Informe o terceiro número em Fahrenheit:`);
let fahrenheit3 = Number(ler());

console.log(`Informe o quarto número em Fahrenheit:`);
let fahrenheit4 = Number(ler());

console.log(`Informe o quinto número em Fahrenheit:`);
let fahrenheit5 = Number(ler());

console.log(`Informe o sexto número em Fahrenheit:`);
let fahrenheit6 = Number(ler());

console.log(`Informe o sétimo número em Fahrenheit:`);
let fahrenheit7 = Number(ler());

console.log(`Informe o oitavo número em Fahrenheit:`);
let fahrenheit8 = Number(ler());

console.log(`Informe o nono número em Fahrenheit:`);
let fahrenheit9 = Number(ler());

console.log(`Informe o décimo número em Fahrenheit:`);
let fahrenheit10 = Number(ler());

let conta1 = 5/9 * (fahrenheit1  - 32);
let conta2 = 5/9 * (fahrenheit2  - 32);
let conta3 = 5/9 * (fahrenheit3  - 32);
let conta4 = 5/9 * (fahrenheit4  - 32);
let conta5 = 5/9 * (fahrenheit5  - 32);
let conta6 = 5/9 * (fahrenheit6  - 32);
let conta7 = 5/9 * (fahrenheit7  - 32);
let conta8 = 5/9 * (fahrenheit8  - 32);
let conta9 = 5/9 * (fahrenheit9  - 32);
let conta10 = 5/9 * (fahrenheit10  - 32);

console.log(`O primeiro resultado em Celsius: °C ${conta1}`);
console.log(`O segundo resultado em Celsius: °C ${conta2}`);
console.log(`O terceiro resultado em Celsius: °C ${conta3}`);
console.log(`O quarto resultado em Celsius: °C ${conta4}`);
console.log(`O quinto resultado em Celsius: °C ${conta5}`);
console.log(`O sexto resultado em Celsius: °C ${conta6}`);
console.log(`O sétimo resultado em Celsius: °C ${conta7}`);
console.log(`O oitavo resultado em Celsius: °C ${conta8}`);
console.log(`O nono resultado em Celsius: °C ${conta9}`);
console.log(`O décimo resultado em Celsius: °C ${conta10}`);