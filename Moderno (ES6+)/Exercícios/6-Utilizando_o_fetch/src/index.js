import "core-js"
import "regenerator-runtime/runtime"

import SentryNeo from "./SentryObject"
import { getSentryNeo } from "./SentryService"

async function loadSentry() {
    let sentryNeosList = []
    let sentryNeoJSON = await getSentryNeo()

    sentryNeoJSON.forEach(element => {
        const newSentryNeo = new SentryNeo(element.fullname, element.sentryId, element.year_range_min, element.year_range_max)

        sentryNeosList.push(newSentryNeo)
    })
    renderSentryNEO(sentryNeosList)
}

function renderSentryNEO(sentryNeosList) {
    const olElement = document.getElementById("sentry-list")

    sentryNeosList.forEach(sentryNeo => {
        const liElement = document.createElement("li")

        const liText = `(${sentryNeo.id}) ${sentryNeo.name}: risco de colisão entre ${sentryNeo.minYearColision} e ${sentryNeo.maxYearColision}`

        liElement.innerText = liText
        olElement.appendChild(liElement)
    })
}

loadSentry()