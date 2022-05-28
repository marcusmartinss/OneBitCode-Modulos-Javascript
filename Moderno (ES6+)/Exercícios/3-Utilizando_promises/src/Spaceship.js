export default class Spaceship {
    constructor(name, batteryCapacity, currentCharge) {
        this.name = name,
        this.batteryCapacity = batteryCapacity,
        this.currentCharge = currentCharge
    }

    isBatteryLow() {
        if ( this.batteryPercentage() < 30 ) {
            return true
        } else { return false }
    }

    batteryPercentage() {
        return (this.currentCharge * 100)/this.batteryCapacity
    }
}