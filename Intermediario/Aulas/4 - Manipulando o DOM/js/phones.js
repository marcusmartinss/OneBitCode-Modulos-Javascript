function addNewPhone() {
    const phoneForm = document.querySelector("form#phones")

    /*
       querySelector retorna o primeiro (pos 0) elemento da busca 
       querySelectorAll retorna uma lista de elementos da busca
    */

    // console.log(phoneForm.children)

    /*
       children informa todos os filhos que o formulário tem,
       no caso, apenas um
    */
    
    const newPhone = phoneForm.children[0].cloneNode(true)
    /* seleciona o filho da posição 0 do grupo e clona o elemento,

      - cloneNode recebe o parâmetro deep, "true" para clonar os
        filhos e os filhos dos filhos [...] de p, e "false"
        para clonar apenas o p
    */
    
    const phonePosition = phoneForm.children.length + 1
    /* 
        vê quantos filhos o formulário já tem, pega o tamanho
        e soma com 1
    */

    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": "
    /*
        chama o elemento que clonou, seleciona o query "label"
        do elemento, e chama o atributo innerText para inserir um
        texto dentro desse elemento
    */
    
    phoneForm.appendChild(newPhone)
}

function printPhones() {
    let message = ""
    const phones = document.querySelectorAll("input[name='phone']")

    /* é criada uma lista com todos campos de input com nome "phone" */

    phones.forEach( (phone, index) => {
        message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
    })

    /* cada um destes telefones, é adicionado a string com o indice  */
    /* e o que estiver inserido dentro de cada campo de input        */
    
    alert(message)
}