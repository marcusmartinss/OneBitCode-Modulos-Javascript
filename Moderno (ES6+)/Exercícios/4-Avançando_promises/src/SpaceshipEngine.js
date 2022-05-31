export default class SpaceshipEngine {
    constructor(spaceship) {
        this.spaceship = spaceship
    }

    startEngine() {
        let spaceshipName = this.spaceship.name
        let isBatteryLow = this.spaceship.checkCurrentCharge()
        let shieldChecking = this.testShield()

        Promise.all([isBatteryLow, shieldChecking]).then(results => {
            return this.normalizateShield(results[1])
        }).then(newShield => {
            this.spaceship.shield = newShield
            console.log(`(${spaceshipName}) Partida autorizada: Escudo (${this.spaceship.shield}) - Carga ${this.spaceship.batteryPercentage()}%`)
        }).catch(error => {
            console.log(`(${spaceshipName}) Partida NÃO autorizada: ${error}`)
        })
    }

    testShield() {
        return new Promise( (resolve, reject) => {
            let shieldTestValue = this.spaceship.shield * 2
            if ( (shieldTestValue) >= 100 ) {
                resolve(shieldTestValue)
            } else {
                reject(`O escudo está em sobrecarga!`)
            }
        })
    }

    normalizateShield(shield) {
        return new Promise( (resolve, reject) => {
            let shieldNormalizationValue = shield * 0.7
            if ( shieldNormalizationValue > 120 ) {
                reject(`(${this.spaceship.name}) O escudo está em sobrecarga!`)
            } else {
                resolve(shieldNormalizationValue)
            }
        })
    }
}