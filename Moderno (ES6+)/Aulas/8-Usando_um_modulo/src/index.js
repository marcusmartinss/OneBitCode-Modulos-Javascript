const Planet = require('./Planet')
const solarSystem = require('./SolarSystem')
// require solicita e já considera que os arquivos
// são do tipo JS

const moment = require('moment')
// moment fica dentro do node_modules mas o require
// considera 'node_modules' como o diretório padrão,
// por isso o caminho não é necessário

const earth = new Planet("Terra", 50100000)
earth.rotate()

solarSystem.planets.push(earth)
solarSystem.planets.push(new Planet("Marte", 144800000))
solarSystem.planets.push(new Planet("Mercurio", 74800000))
solarSystem.planets.push(new Planet("Saturno", 42700000000))

console.log(solarSystem)
console.log(moment().format("h:mm"))