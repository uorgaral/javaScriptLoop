const prompt = require("prompt-sync")();
const x = Number(prompt("Digite um número: "));
let contador = 0;
let i = 1;

do {
  if (x % i == 0) {
    contador++;
  }
  i++;
} while (i <= x);

if (contador == 2) {
  console.log("primo");
} else {
  console.log("não primo");
}
