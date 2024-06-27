//Receba um número acima de 0 do usuário. Crie uma estrutura de repetição `for` que mostre no console um triângulo
//com base no valor fornecido pelo usuário. O número digitado deve ser a quantidade de níveis de altura do triângulo, ou seja,
//se for digitado 5, o triângulo deve ter 5 andares.
//Faça o triângulo utilizando espaços em branco e asteriscos `*` para demonstrar quantos elementos existem no triângulo.
//Você precisará usar sua lógica para entender quantos asteriscos deve conter em uma linha e formar, no final, o formato de um triângulo.

const prompt = require("prompt-sync")();
let user = Number(prompt("Qual é o tamanho da pirâmide? "));

for (let i = 1; i < user; i++) {
  const triangulo = "*".repeat(i * 2 - 1);
  const espaço = " ".repeat(user - i);
  console.log(espaço + triangulo);
}
