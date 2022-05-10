let nomePiloto = prompt("Qual será o nome do piloto?")
let velocidadeNave = 0

let velocidadeNaveTemp = prompt("A qual velocidade deseja acelerar a nave? (Km/s)")

if ( confirm("Deseja mesmo deixar a velocidade da nave em " + velocidadeNaveTemp + " Km/s?") ) {
    velocidadeNave = velocidadeNaveTemp
}

const printFinal = `\n\nPilot: ${nomePiloto}\nVelocidade atual: ${velocidadeNave} Km/s`

if ( velocidadeNave <= 0 ) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if ( velocidadeNave > 0 && velocidadeNave < 40 ) {
    alert("Você está devagar, podemos aumentar mais." + printFinal)
} else if ( velocidadeNave >= 40 && velocidadeNave < 80 ) {
    alert("Parece uma boa velocidade para manter." + printFinal)
} else if ( velocidadeNave >= 80 && velocidadeNave < 100 ) {
    alert("Velocidade alta. Considere diminuir." + printFinal)
} else if ( velocidadeNave > 100 ) {
    alert("Velocidade perigosa. Controle automático forçado." + printFinal)
}
