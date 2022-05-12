let inputNome = prompt("Cadastro:\n\nQual o nome da nave?")
let inputType = prompt("Cadastro:\n\nQual o tipo da nave?")
let inputMaxVelocity = prompt("Cadastro:\n\nQual a velocidade máxima da nave? (Km/s)")

let spaceship = {
    name: inputNome,
    type: inputType,
    velocity: 0,
    maxVelocity: inputMaxVelocity
}

function accelerateSpaceship() {
    let acceleration = prompt("Quanto deseja acelerar? (Km/s)")
    acceleration = parseInt(acceleration, 10)
    if ( (spaceship.velocity + acceleration) > spaceship.maxVelocity ) {
        alert("A velocidade máxima, de " + spaceship.maxVelocity + "Km/s, seria ultrapassada, tente outro valor.")
    } else if ( (spaceship.velocity + acceleration) < 0 ) {
        alert("A velocidade não pode ser negativa, tente outro valor.")
    } else if ( acceleration == null || acceleration == undefined || acceleration == "" || isNaN(acceleration)) {
        alert("A entrada não é válida. Tente novamente.")
    } else {
        spaceship.velocity += acceleration
        alert("A velocidade foi ajustada para " + parseInt(spaceship.velocity) + " Km/s.")
    } 
}

function stopSpaceship() {
    alert("A espaçonave parou.\n\nNome: "+ spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: " + spaceship.velocity + "\nVelocidade máxima da nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

let chosenOption = ""

do {
    chosenOption = prompt("Deseja:\n\n1 - Acelerar\n2 - Parar")
    switch (chosenOption) {
        case "1":
            accelerateSpaceship()
            break;
        case "2":
            stopSpaceship()
            break;
        default:
            alert("A opção escolhida não é válida. Tente novamente.")
            break;
    }
} while (chosenOption != "2");