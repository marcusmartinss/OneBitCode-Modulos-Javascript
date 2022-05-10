let inputDataPartida = prompt("Digite a data de partida (Formato DD/MM/AAAA)")

let dataPartida = moment(inputDataPartida, "DD/MM/YYYY")

let hoje = moment()

let diferencaData = hoje - dataPartida

let escolhaOpcao = prompt("Escolha como o tempo será exibido a partir de agora\n\n1-Segundos\n2-Minutos\n3-Horas\n4-Dias\n")

switch (escolhaOpcao) {
    case "1":
        let segudosPartida = Math.round(diferencaData / 1000)
        alert("A nave partiu há: " + segudosPartida + " segundos")
        break;
    case "2":
        let minutosPartida = Math.round(diferencaData / 1000 / 60)
        alert("A nave partiu há: " + minutosPartida + " minutos")
        break;
    case "3":
        let horasPartida = Math.round(diferencaData / 1000 / 60 / 60)
        alert("A nave partiu há: " + horasPartida + " horas")
        break;
    case "4":
        let diasPartida = Math.round(diferencaData / 1000 / 60 / 60 / 24)
        alert("A nave partiu há: " + diasPartida + " dias")
        break;
    default:
        alert("Opção inválida")
        break;
}