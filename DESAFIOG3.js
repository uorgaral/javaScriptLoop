//Crie uma estrutura de repetição for que tenha 10 iterações e, a cada iteração,
//pergunte ao usuário algum número maior que 0. Faça a média dos números recebidos e exiba no console a resposta.
const prompt = require("prompt-sync")();
let contador = 0;

for (let x = 1; x <= 10; x++) {
  const y = Number(prompt("Digite um número: "));
  contador = contador + y;
}
console.log(contador / 10);
