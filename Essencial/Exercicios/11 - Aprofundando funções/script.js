function slowDown(spaceshipVelocity, printer) {
    let deceleration = 20

    while ( spaceshipVelocity > 0 ) {
        printer(spaceshipVelocity)
        spaceshipVelocity -= deceleration
    }

    alert("Nave parada. As comportas podem ser abertas.")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, (velocity) => {
    console.log("Velocidade atual: " + velocity)
})