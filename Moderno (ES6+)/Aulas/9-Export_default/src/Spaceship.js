class Spaceship {
    constructor(name, captain, armaments = [], defenses = []) {
        this.name = name,
        this.captain = captain,
        this.armaments = armaments,
        this.defenses = defenses
    }
}

// ou de declarar com "export default" antes de "class"

// a exportação padrão do arquivo vai ser a classe Spaceship