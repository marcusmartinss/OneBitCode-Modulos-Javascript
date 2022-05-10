alert("Será pedido o nome e idade de duas pessoas.")

let nomeMaisVelha = prompt("Insira o nome da pessoa mais velha:")
let idadeMaisVelha = prompt("Insira a idade da pessoa mais velha:")

let nomeMaisNova = prompt("Insira o nome da pessoa mais nova:")
let idadeMaisNova = prompt("Insira a idade da pessoa mais nova:")

let diferencaIdade = idadeMaisVelha - idadeMaisNova

alert("Nome: " + nomeMaisVelha + " \nIdade: " + idadeMaisVelha +
      "\n\nNome: " + nomeMaisNova + " \nIdade: " + idadeMaisNova +
      "\n\nA diferença de idade entre estas duas pessoas é de " + diferencaIdade + " anos.")
