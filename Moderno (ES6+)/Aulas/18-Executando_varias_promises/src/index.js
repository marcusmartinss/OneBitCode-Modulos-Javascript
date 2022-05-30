const increaseVelocity = function(velocityToIncrease) {
    return new Promise ( (resolve, reject) => {
        if (velocityToIncrease <= 0) {
            reject("Frenagem acionada!")
        } else {
            resolve(velocityToIncrease * 0.9)
        }
    })
}

const newBatteryComsumption = function(currentVelocity, velocityToIncrease) {
    return new Promise ( (resolve, reject) => {
        let newBatteryComsumption = (currentVelocity + velocityToIncrease) / 10000
        if (newBatteryComsumption > 0) {
            resolve(newBatteryComsumption)
        } else {
            reject("Consumo zerado!")
        }
    })
}

let velocity =  70

let velocityIncreased = increaseVelocity(velocity)
let batteryComsumption = newBatteryComsumption(80, velocity)

Promise.all([velocityIncreased, batteryComsumption]).then(results => {
    console.log(results)
}).catch(errors => {
    console.log(errors)
})