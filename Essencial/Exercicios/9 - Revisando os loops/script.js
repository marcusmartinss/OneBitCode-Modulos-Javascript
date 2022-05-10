let nomeNave = prompt("Qual o nome da espaçonave?")

let nomeInversoNave = ""

for ( let i = nomeNave.length - 1; i >= 0; i-- ) {
    if ( nomeNave[i] != "e" ) {
        nomeInversoNave += nomeNave[i]
    } else {
        break
    }
}

alert("Nome original da nave: " + nomeNave + "\nNome após ocultação: " + nomeInversoNave)