class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.areDoorsOpen = false
    }

    hitchSpaceship() {
        this.setIsHitched(true)
        this.setAreDoorsOpen(true)
    }

    setIsHitched(bool) {
        this.isHitched = bool
    }

    setAreDoorsOpen(bool) {
        this.areDoorsOpen = bool
    }
}

let spaceshipArray = new Array()

function addToSpaceshipArray(spaceship) {
    spaceshipArray.push(spaceship)
}

let chosenOption = ""

function registerSpaceship() {
    let spaceshipName = prompt("Qual o nome da nave?")
    let spaceshipCrewQuantity = prompt("Qual o número de tripulantes da nave?")
    
    let anySpaceship = new Spaceship(spaceshipName, spaceshipCrewQuantity)
    return anySpaceship
}

function spaceshipsList() {
    let text = ""

    spaceshipArray.forEach( (currentSpaceship, index) => {
        text += (index + 1) + " - " + currentSpaceship.name + " (" + currentSpaceship.crewQuantity + " tripulantes)\n"
    })

    alert(text)
}

function showMenu() {
    do {
        chosenOption = prompt("MENU NAVES\n\n1 - Realizar engate\n2 - Imprimir naves\n3 - Sair do programa")
    
        switch (chosenOption) {
            case "1":
                let spaceshipToAdd = registerSpaceship()
                spaceshipToAdd.hitchSpaceship()
                addToSpaceshipArray(spaceshipToAdd)
                break;
            case "2":
                spaceshipsList()
                break;
            case "3":
                alert("Você está saindo do programa.")
                break;
            default:
                alert("Opção inválida, tente novamente.")
                break;
        }
    } while (chosenOption != "3");
}

showMenu()