import "core-js"
import "regenerator-runtime"

import Spaceship from './Spaceship'
import SpaceshipEngine from './SpaceshipEngine'

let spaceships = [
    new Spaceship("Sophia", 10, 5, 70),
    new Spaceship("Amsterdã", 14, 10, 40),
    new Spaceship("Estrela-Anã", 20, 4, 80),
]

let spaceshipEngines = []
let spaceshipIndex

spaceships.forEach(element => {
    spaceshipIndex = spaceships.indexOf(element)
    spaceshipEngines.push(new SpaceshipEngine(spaceships[spaceshipIndex]))
});

spaceshipEngines.forEach(element => {
    element.startEngine()
})