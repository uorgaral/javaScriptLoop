const prompt = require("prompt-sync")();
const pergunta = Number(prompt("Adivinhe o número! "));
let i = 78;

while (true) {
  console.log(pergunta);
  if (pergunta == i) {
    console.log("parabénsssss!!! você acertou <3");
  } else if (pergunta > i) {
    console.log("pô... é maior que o número certo :(");
  } else {
    console.log("é menor, mas tá quase!!!");
  }
  break;
}
