let nomeNave = prompt("Qual o nome da nave?")

let velocidadeNave = 0
let opcaoEscolhida = ""

function acelerarNave(velocidadeNave) {
    alert("A velocidade foi aumentada em 5 Km/s.")
    velocidadeNave += 5
    return velocidadeNave
}

function desacelerarNave(velocidadeNave) {
    if ( velocidadeNave <= 0 ) {
        alert("Não é possível ter uma velocidade negativa.")
        return velocidadeNave
    } else {
        alert("A velocidade foi diminuida em 5 Km/s.")
        velocidadeNave -= 5
        return velocidadeNave
    }
}

function imprimirDados(nomeNave, velocidadeNave) {
    alert("Nome da nave: " + nomeNave + "\nVelocidade da nave: " + velocidadeNave + " Km/s")
}

function sairPrograma() {
    alert("Confirme para sair do programa.")
}

do {
    opcaoEscolhida = prompt("Menu da nave\n\n1 - Acelerar a nave em 5 Km/s\n2 - Desacelerar em 5 Km/s\n3 - Imprimir dados de bordo\n4 - Sair do programa\n")

    switch (opcaoEscolhida) {
        case "1":
            velocidadeNave = acelerarNave(velocidadeNave)
            break;
        case "2":
            velocidadeNave = desacelerarNave(velocidadeNave)
            break;
        case "3":
            imprimirDados(nomeNave, velocidadeNave)
            break;
        case "4":
            sairPrograma()
            break;
        default:
            alert("O valor inserido não é valido. Por favor, tente novamente!")
            break;
    }
} while (opcaoEscolhida != "4");