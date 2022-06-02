export default class Spaceship {
    constructor(name, batteryCapacity, currentCharge, shield) {
        this.name = name,
        this.batteryCapacity = batteryCapacity,
        this.currentCharge = currentCharge,
        this.shield = shield
    }

    async checkCurrentCharge() {
        let currentCharge = this.batteryPercentage()

        if (currentCharge < 30) {
            return Promise.reject(`Carga em apenas ${currentCharge} GJ`)
        }
        return(currentCharge)
    }

    batteryPercentage() {
        return (this.currentCharge * 100)/this.batteryCapacity
    }
}