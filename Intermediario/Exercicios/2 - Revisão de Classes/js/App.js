class App {
    constructor() {
        this.spaceship = null
    }

    static isNotAValidNumber(element) {
        if( isNaN(element) || element == null || element == undefined ) {
            return true
        } else {
            return false
        }
    }
    
    accelerate() {
        let acceleration
        do {
            acceleration = prompt("Quanto deseja acelerar a nave? (Km/s)")
            if ( App.isNotAValidNumber(acceleration)) {
                alert("A aceleração fornecida não é válida. Tente novamente.")
            } else {
                parseFloat(acceleration)
                return(acceleration)
            }
        } while ( App.isNotAValidNumber(acceleration) );
    }
    
    createBattleSpaceship(spaceshipName, spaceshipCrewQuantity) {
        let spaceshipGunsQuantity = ""
        do {
            spaceshipGunsQuantity = prompt("Qual a quantidade de armas da nave?")
            parseInt(spaceshipGunsQuantity)
            if ( App.isNotAValidNumber(spaceshipGunsQuantity) ) {
                alert("A quantidade inserida não é válida. Tente novamente.")
            }
        } while ( App.isNotAValidNumber(spaceshipGunsQuantity) );
        let spaceship = new BattleSpaceship(spaceshipName, spaceshipCrewQuantity, spaceshipGunsQuantity)
        return spaceship
    }
    
    createTransportSpaceship(spaceshipName, spaceshipCrewQuantity) {
        let spaceshipSeatsQuantity
        do {
            spaceshipSeatsQuantity = prompt("Qual a quantidade de assentos da nave?")
            if ( App.isNotAValidNumber(spaceshipSeatsQuantity) ) {
                alert("A quantidade inserida não é válida. Tente novamente.")
            }
        } while ( App.isNotAValidNumber(spaceshipSeatsQuantity) );
        let spaceship = new TransportSpaceship(spaceshipName, spaceshipCrewQuantity, spaceshipSeatsQuantity)
        return spaceship
    }
    
    registerSpaceship() {
        let spaceship
        let spaceshipName = prompt("Qual o nome da espaçonave?")
        let spaceshipCrewQuantity
        let spaceshipOption = ""
    
        do {
            spaceshipCrewQuantity = prompt("Qual a quantidade de tripulantes?")
            parseInt(spaceshipCrewQuantity, 10)
    
            if ( App.isNotAValidNumber(spaceshipCrewQuantity) ) {
                alert("A quantidade inserida não é válida. Tente novamente.")
            }
    
        } while ( App.isNotAValidNumber(spaceshipCrewQuantity) );
    
        do {
            spaceshipOption = prompt("Qual o tipo de espaçonave será escolhido?\n1 - Batalha\n2 - Transporte")
            switch ( spaceshipOption ) {
                case "1":
                    spaceship = this.createBattleSpaceship(spaceshipName, spaceshipCrewQuantity)
                    return spaceship
                case "2":
                    spaceship = this.createTransportSpaceship(spaceshipName, spaceshipCrewQuantity)
                    return spaceship
                default:
                    alert("Este tipo de espaçonave não é válido. Tente novamente.")
                    break;
            }
        } while ( spaceshipOption != "1" && spaceshipOption != "2" );
    }
    
    spaceshipInfo(spaceship) {
        let text = ""
        text += ("Nome: " + spaceship.name + "\n")
        text += ("Quantidade de tripulantes: " + spaceship.crewQuantity + "\n")
        text += ("Velocidade atual: " + spaceship.currentVelocity)
        alert("Saindo...\n\n" + text)
    }

    start() {
        let chosenOption = ""
        let acceleration
        this.spaceship = this.registerSpaceship()

        do {
            chosenOption = prompt("MENU NAVE\n\n1 - Acelerar a nave\n2 - Troca a nave\n3 - Imprimir e sair")

            switch (chosenOption) {
                case "1":
                    acceleration = this.accelerate()
                    this.spaceship.speedUp(acceleration)
                    break;
                case "2":
                    this.spaceship = this.registerSpaceship()
                    break;
                case "3":
                    this.spaceshipInfo(this.spaceship)
                    break;
                default:
                    alert("A opção inserida não é válida. Tente novamente.")
                    break;
            }
        } while (chosenOption != "3")
    }
}
