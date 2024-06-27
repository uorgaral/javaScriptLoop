const prompt = require("prompt-sync")();
const x = Number(prompt("Insira um número: "));

for (let i = 1; i <= x; i++) {
  console.log(i);
}
