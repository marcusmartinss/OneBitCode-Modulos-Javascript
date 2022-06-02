import "core-js"
import "regenerator-runtime/runtime"

import Neo from "./Neo"
import { getNeos } from "./neoService"

async function loadNeos() {
    let neos = []
    let neoJSON = await getNeos()

    neoJSON.forEach(neo => {
        const minDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_min"]
        const maxDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_max"]
        const averageDiameter = (minDiameter * maxDiameter) / 2

        const newNeo = new Neo(neo["id"], neo["name"], averageDiameter, neo["is_sentry_object"])

        neos.push(newNeo)
    })
    renderNEO(neos)
}

function renderNEO(neos) {
    const ulElement = document.getElementById("neo-list")
    neos.forEach(neo => {
        const liElement = document.createElement("li")
        const isSentry = neo.isSentry ? "Perigo de colisão" : "Sem perigo de colisão"
        const text = `${neo.id} | ${neo.name} | ${neo.averageEstimatedDiameter} | ${isSentry}`
        
        liElement.innerText = text
        ulElement.appendChild(liElement)
    })
}

loadNeos()