function show() {
    let element = document.getElementById("name")
    console.log(element.value)

    /*  
        neste caso, document (que é a variável que mantém o DOM)
        recebe o método getElementById, que retorna o objeto
        com o id que é passado como parâmetro, e pode acessar o
        valor daquele objeto com o atributo "value", que seria
        o que estiver no campo de input.
    */

    let elements = document.getElementsByName("phone")
    console.log(elements.value)

    /*
        vai retornar todos elementos que recebem o nome "phone"
    */

    // console.log(elements[0].value)

    /*
        seleciona o elemento zero que recebe o nome "phone"
    */

    elements = document.querySelectorAll("div#phones input[name='phone']")
    console.log(elements)
    
    /*
        pega todos campos os campos input de nome "phone"
        que estão dentro da div e de id = "phones",
        retorna uma lista de nós
    */
    
    console.log(elements[1].value)
    /* imprimirá o valor do segundo elemento da lista de nós */

    elements = document.getElementsByTagName("input")
    console.log(elements)

    /*
        este método vai retornar uma lista de todos elementos
        que possuem a tag input dentro da página
    */
}