//Crie um loop while que tenha 10 iterações.
//A cada iteração, receba um número pelo prompt. Por fim, mostre no console o maior e o menor número.

const prompt = require("prompt-sync")();
let i = 0;
let min;
let max;

while (i < 10) {
  const x = Number(prompt("Digite um número: "));

  if (i == 0) {
    min = x;
    max = x;
  }

  if (x < max) {
    min = x;
  }

  if (x > min) {
    max = x;
  }
  i++;
}

console.log("menor numero: " + min);
console.log("maior número: " + max);
