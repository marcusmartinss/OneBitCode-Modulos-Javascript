function save() {
    window.event.preventDefault()
    // impede que a página seja recarregada
    // comportamento padrão no evento "submit"
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value
    alert("Nome: " + name + "\nLinguagem de programação: " + programmingLang)
}