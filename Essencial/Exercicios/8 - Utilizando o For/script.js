let novoNomeNave = ""
let nomeNave = prompt("Qual o nome da nave?")

let caracterSubstituir = prompt("Qual caracter deseja substituir?")

let caracterSubstituto = prompt("Qual caracter substituirá o anterior?")

for (let i = 0; i < nomeNave.length; i++) {
    if( nomeNave[i] == caracterSubstituir ) {
        novoNomeNave += caracterSubstituto
    } else {
        novoNomeNave += nomeNave[i]
    }
}

alert("O novo nome da nave é: " + novoNomeNave)