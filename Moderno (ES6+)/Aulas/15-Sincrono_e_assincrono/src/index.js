function step02() {
    console.log("Passo 02")
}

console.log("Passo 01")
step02()
console.log("Passo 03")
console.log("Passo 04")

setTimeout(() => {
    console.log("Passo 05")
}, 1000)
// sendo setTimeout uma função assíncrona,
// ele começa a sua execução e passa para a
// próxima linha e após um segundo printou

console.log("Passo 06")