document.querySelector("select[name = 'select-option'").addEventListener("change", function() {
    alert(window.event.target.value)
})
// addEventListener - mapeia um evento do select-option para uma função
// o evento mapeado é o evento "change", que é o evento mapeado
// na propriedade onchange, o segundo atributo é a função
// que será chamada quando o evento for chamado