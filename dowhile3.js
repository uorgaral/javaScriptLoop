const prompt = require("prompt-sync")();
let i = 0;
let max;
let min;

do {
  const x = Number(prompt("Digite um numero: "));

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
} while (i < 10);
console.log("o maior número é: " + max);
console.log("o menor número é: " + min);
