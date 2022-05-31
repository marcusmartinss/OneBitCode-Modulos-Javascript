export default class Spaceship {
    constructor(name, batteryCapacity, currentCharge, shield) {
        this.name = name,
        this.batteryCapacity = batteryCapacity,
        this.currentCharge = currentCharge,
        this.shield = shield
    }

    checkCurrentCharge() {
        return new Promise( (resolve, reject) => {
            let currentCharge = this.batteryPercentage()
            if (currentCharge >= 30) {
                resolve(currentCharge)
            } else {
                reject(`Carga em apenas ${currentCharge} GJ`)
            }
        })
    }

    batteryPercentage() {
        return (this.currentCharge * 100)/this.batteryCapacity
    }
}