function saveHouse(params) {
    let area = document.querySelector("input[name='area']").value
    let city = document.querySelector("input[name='city']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let number = document.querySelector("input[name='number']").value

    /*
        cada uma das variáveis vai assumir o valor inserido
        dentro do input com o respectivo "name"
    */

    let newListValue = document.createElement("li")
    newListValue.innerText = area + " m², " + number + " (" + neighborhood + " - " + city + ")"

    /*
        a variável newListValue cria uma tag li e seu
        "innerText", que seria o que haveria entre as tags,
        seria o texto que é concatenado na atribuição
    */

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    /*
        a variável removeButton cria uma tag button do tipo
        "button" para evitar o padrão que é "submit", com 
        texto "Remover" dentro do botão e coloca o atributo
        "onClick="removeHouse(this)" na tag button para
        remover a casa ao clicar no botão que será cri
    */

    newListValue.appendChild(removeButton)

    /*
        appendChild está adicionando o botão como filho outro
        dentro do li de newListValue
    */

    document.getElementById("house-list").append(newListValue)

    /*
        adicionando ao DOM, tem-se o getElementById selecionando
        o id da lista sem-ordem e adicionando o newListValue
        que tem seus elementos envolvidos por uma tag "li"
    */
}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)

    /*
        quando a função removeHouse é chamada, ela traz como
        parâmetro o botão que foi utilizado para chamá-la,
        a variável liToRemove recebe o número do nó que o botão
        está dentro da lista de "li"s do DOM e depois o filho
        é removido da lista sem ordem de id "house-list"
    */
}
