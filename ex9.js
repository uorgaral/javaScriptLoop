const prompt = require("prompt-sync")();
let min;
let max;

for (let y = 0; y < 5; y++) {
  const x = Number(prompt("digite um numero: "));

  if (y == 0) {
    min = x;
    max = x;
  } else {
    if (x > max) {
      max = x;
    }

    if (x < min) {
      min = x;
    }
  }
}
console.log("maior número: " + max);
console.log("menor número: " + min);
