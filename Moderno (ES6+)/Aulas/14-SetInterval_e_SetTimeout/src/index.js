let timeoutId = setTimeout(() => {
    console.log("Executando após 2 segundos")
}, 2000)
// conteúdo da função: o que executar
// segundo parametro: depois de quanto tempo executar após n milisegundos
// executa apenas uma vez

clearTimeout(timeoutId)
// vai cancelar a execução do setTimeout recebendo o id da execução
// antes de passar os dois segundos acaba cancelando a função acima

let seconds = 0

let intervalId = setInterval(() => {
    seconds += 2
    console.log(`Executando após ${seconds} segundos`)
    if( seconds >= 10 ) clearInterval(intervalId)
}, 2000)
// executa várias vezes apóes o intervalo
// ambas retornam o id de execução para a variável

console.log(timeoutId, intervalId)