import Spaceship from './Spaceship'
import SpaceshipEngine from './SpaceshipEngine'

let spaceships = [
    new Spaceship("Sophia", 10, 5),
    new Spaceship("Amsterdã", 14, 10),
    new Spaceship("Estrela-Anã", 20, 4),
    new Spaceship("Abluéblué", 50, 10)
]

let spaceshipEngines = []
let spaceshipIndex

spaceships.forEach(element => {
    spaceshipIndex = spaceships.indexOf(element)
    spaceshipEngines.push(new SpaceshipEngine(spaceships[spaceshipIndex]))
});

spaceshipEngines.forEach(element => {
    element.startEngine().then(message => {
        console.log(message)
    }).catch(message => {
        console.log(message)
    })
});