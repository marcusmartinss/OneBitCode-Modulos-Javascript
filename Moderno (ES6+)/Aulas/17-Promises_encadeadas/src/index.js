const spaceship = {
    name: "Rontaro",
    currentBatteryCharge: 50,
    consumptionPerKms: 0.00008
}

const updateBatteryCharge = function(chargeConsumed) {
    return new Promise( (resolve, reject) => {
        spaceship.currentBatteryCharge -= chargeConsumed
        if (spaceship.currentBatteryCharge > 0) {
            resolve(spaceship.currentBatteryCharge)
        } else {
            reject("Bateria esgotada! A nave será desativada em alguns segundos.")
        }
    })
}

const calculateBatteryConsumption = function(velocity, seconds) {
    return new Promise( (resolve, reject) => {
        if (spaceship.consumptionPerKms <= 0 || velocity <= 0) {
            reject("Nave está parada!")
        } else {
            let chargeConsumed = spaceship.consumptionPerKms * velocity * seconds
            resolve(chargeConsumed)
        }
    })
}

calculateBatteryConsumption(90,300).then(chargeConsumed => {
    return updateBatteryCharge(chargeConsumed)
}).then( newCharge => {
    console.log(`Carga atual: ${newCharge}`)
}).catch(error => {
    console.log(error)
})
// Para evitar um código sujo e complicado, um único catch pode
// ser utilizado para qualquer reject das promises, sendo o 
// segundo then utilizado apenas quando o primeiro for
// suprido com resolve
