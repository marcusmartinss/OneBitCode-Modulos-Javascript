class Planet {
    constructor(name, surfaceArea) {
        this.name = name,
        this.surfaceArea = surfaceArea
    }

    rotate() {
        console.log("Rotacionando!")
    }
}

// para poder exportar alguma coisa de um
// arquivo eh utilizado o module.exports e
// atribuido o que sera exportado 
module.exports = Planet