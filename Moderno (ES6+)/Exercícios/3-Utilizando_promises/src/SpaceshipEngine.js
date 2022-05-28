export default class SpaceshipEngine {
    constructor(spaceship) {
        this.spaceship = spaceship
    }

    startEngine() {
        let spaceshipName = this.spaceship.name
        let chargePercentage = this.spaceship.batteryPercentage().toFixed(0)
        let isBatteryLow = this.spaceship.isBatteryLow()

        return new Promise(function(resolve, reject) {
            if ( isBatteryLow ) {
                reject(`(${spaceshipName}) Partida NÃO autorizada. Carga em ${chargePercentage}%`)
            } else {
                resolve(`(${spaceshipName}) Partida autorizada. Carga atual em ${chargePercentage}%`)
            }
        })
    }
}