const prompt = require("prompt-sync")();
const username = "laralara";
const usersenha = "2007";
let i = 0;
const x = prompt("Qual é seu nome de usuário? ");
const y = prompt("Qual é sua senha? ");

while (true) {
  console.log(x);
  console.log(y);

  if (x == username) {
    if (y == usersenha) {
      console.log("Login realizado com sucesso!");
    }
  } else {
    console.log("alguma informação está errada!");
  }
  break;
}
