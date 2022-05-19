function showInfo() {
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    // atribui o texto dentro da opção selecionada na tag select
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value
    // atribui o valor do input que está marcado
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
    // atribui um array com todas opções marcadas
    let optionsValue = []
    developerOptions.forEach(element => { optionsValue.push(element.value) })
    // optionsValue vai receber o valor de cada checkbox
    // marcada em develooerOptions
    let optionChecked = optionsValue.join(", ")
    // vai juntar cada texto do elemento marcado na checkbox
    // em uma string
    alert("Nome: " + name + "\nCor primária: " + favoriteColor + "\nGosta de programar: " + likeProgramming + "\nConhecimentos em programação web: " + optionChecked)
}