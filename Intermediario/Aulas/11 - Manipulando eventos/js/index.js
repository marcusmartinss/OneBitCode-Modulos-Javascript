function doChange() {
    alert(window.event.target.value)
}

/* --- TESTES NO CONSOLE DO NAVEGADOR ---
    >> let sampleInput = document.querySelector("input[name='sample-input']")
        << undefined
    // define o elemento sampleInput como input pelo query

    >> sampleInput
        << input type="text" name="sample-input"
    // testa a variável

    >> sampleInput.addEventListener("change", doChange)
        << undefined
    // adiciona um mapeamento do evento "change" chamando o
    // objeto da função doChange
    // colocando algum texto no input, ele executa a função

    >> let changeEvent = new Event("change")
        << undefined
    // criação de um objeto Event com o nome do evento que
    // será instanciado

    >> sampleInput.dispatchEvent(changeEvent)
        << true
    // dispara o evento dinamicamente

    >> sampleInput.removeEventListener("change", doChange)
        << undefined
    // remove uma função doChange de um evento change
    
    >> sampleInput.dispatchEvent(changeEvent)
        << true
    // o evento não está mais mapeado para esta função
*/