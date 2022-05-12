let hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Goliath", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let with9PlusPassengers = hitchedSpaceships.filter( element => {
    return element[1] > 9
})

let notHitchedSpaceshipIndex = hitchedSpaceships.findIndex( element => {
    return element[2] === false
}) + 1

let upcasedSpaceships = hitchedSpaceships.map( currentSpaceship => {
    let upcased = currentSpaceship[0].toUpperCase()
    return upcased
})

function createText(with9PlusPassengers, notHitchedSpaceshipIndex, upcasedSpaceships) {
    var text = ""
    
    text += "Naves:\n\n"
    upcasedSpaceships.forEach(element => {
        text += ( element + "\n")
    });
    text += "\n"

    text += "Plataforma com nave com engate pendendete: "
    text += (notHitchedSpaceshipIndex + "\n\n")

    text += "Naves com mais de 9 tripulantes:\n\n"
    with9PlusPassengers.forEach(element => {
        text += ( element[0] + "\n")
    });

    return text
}

alert( createText(with9PlusPassengers, notHitchedSpaceshipIndex, upcasedSpaceships) )