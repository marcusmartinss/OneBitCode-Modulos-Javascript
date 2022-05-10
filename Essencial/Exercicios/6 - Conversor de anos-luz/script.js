let distanciaAnosLuz = prompt("Qual a distância em anos-luz?")

let opcaoEscolhida = prompt("Em qual unidade a distância será convertida?\n\n1-Parsec (pc)\n2-Unidade astronômica (AU)\n3-Quilômetros (Km)\n")

let distanciaConvertida
let unidadeEscolhida

switch (opcaoEscolhida) {
    case "1":
        unidadeEscolhida = "Parsec"
        distanciaConvertida = distanciaAnosLuz * 0.306601
        break;
    case "2":
        unidadeEscolhida = "Unidade astronômica"
        distanciaConvertida = distanciaAnosLuz * 63241.1
        break;
    case "3":
        unidadeEscolhida = "Quilômetros"
        distanciaConvertida = distanciaAnosLuz * Math.pow(10, 12)
        break;
    default:
        unidadeEscolhida = "Unidade não identificada"
        distanciaConvertida = "Conversão fora do escopo"
        break;
}

alert("Distância em Anos-luz: " + distanciaAnosLuz + "\n" + unidadeEscolhida + ": " + distanciaConvertida)

