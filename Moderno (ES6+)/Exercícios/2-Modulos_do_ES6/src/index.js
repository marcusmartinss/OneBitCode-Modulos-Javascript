import Planet from './Planet'
import { convertAUtoKm } from './PlanetOperations'

let planets = [
    new Planet("Mercúrio", 0.39),
    new Planet("Vênus", 0.72),
    new Planet("Terra", 1),
    new Planet("Marte", 1.52),
    new Planet("Júpiter", 5.2),
    new Planet("Saturno", 9.53),
    new Planet("Urano", 19.1),
    new Planet("Netuno", 30)
]

planets.forEach(planet => {
    let AUToKm = convertAUtoKm(planet.starDistanceInAU).toFixed(2)

    console.log(`${planet.name} - Distância do Sol: ${planet.starDistanceInAU} AU (ou ${AUToKm} Km)`)
});