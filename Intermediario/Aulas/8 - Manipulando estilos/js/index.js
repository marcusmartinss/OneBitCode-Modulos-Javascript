function setBlueBackground() {
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "blue"
    // (CSS) background-color => (JS) backgroundColor
}

function setTransparentBackground() {
    document.getElementById("style-text").style.backgroundColor = "transparent"
}

function setRedColor() {
    let element = document.getElementById("style-text")
    element.classList.add("red-color")
    // classList retorna o nome das classes CSS de um elemento,
    // add vai adicionar a propriedade "red-color" ao elemento,
    // como o style está mapeando uma classe red-color para uma
    // tag p, vai funcionar porque element é uma tag p
}

function removeRedColor() {
    document.getElementById("style-text").classList.remove("red-color")
}