export default class SpaceshipEngine {
    constructor(spaceship) {
        this.spaceship = spaceship
    }

    async startEngine() {
        let spaceshipName = this.spaceship.name

        try {
            let isBatteryLow = this.spaceship.checkCurrentCharge()
            let shieldChecking = this.testShield()

            let promiseResponse = await Promise.all([isBatteryLow, shieldChecking])

            let newShield = await this.normalizateShield(promiseResponse[1])
            this.spaceship.shield = newShield

            console.log(`(${spaceshipName}) Partida autorizada: Escudo (${this.spaceship.shield}) - Carga ${this.spaceship.batteryPercentage()}%`)
            
        } catch (error) {
            console.log(`(${spaceshipName}) Partida NÃO autorizada: ${error}`)
        }
    }

    async testShield() {    
        let shieldTestValue = this.spaceship.shield * 2

        if (shieldTestValue < 100) {
            return Promise.reject("O escudo está em sobrecarga!")
        }
        return (shieldTestValue)
    }

    async normalizateShield(shield) {  
        let shieldNormalizationValue = shield * 0.7

        if ( shieldNormalizationValue > 120 ) {
            return Promise.reject("O escudo está em sobrecarga!")
        }
        return (shieldNormalizationValue)
    }
}