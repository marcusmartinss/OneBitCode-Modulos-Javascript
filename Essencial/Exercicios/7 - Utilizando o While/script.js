let quantidadeDobras = 0

let nomeNave = prompt("Insira o nome da nave")

let escolhaDobra = prompt("Deseja entrar em dobra espacial?\n\n1 - Sim\n2 - Não\n")

while ( escolhaDobra == "1" ) {
    quantidadeDobras++
    escolhaDobra = prompt("Deseja realizar a próxima dobra?\n\n1 - Sim\n2 - Não\n")
}

alert("Nome da nave: " + nomeNave + "\nNúmero de dobras: " + quantidadeDobras)