let spaceship = "Golias"
let velocity = 80

console.log(velocity == 90)
// retorna falso porque os valores são diferentes

console.log(spaceship == "Golias")
// retorna verdadeiro porque os valores são iguais

console.log(velocity == "80")
// retorna verdadeiro porque mesmo com tipos sendo diferentes,
// o valor continua o mesmo (tipagem dinamica (fraca))

console.log(velocity === "80")
// retorna falso porque o valor é igual, mas em um tipo diferente
// tipo numérico 80 é diferente do tipo texto "80"

console.log(velocity != 80)
// retorna falso porque não é diferente

console.log(velocity != 70)
// retorna verdadeiro porque é diferente

console.log(velocity != "80")
// retorna falso porque não está considerando o tipo de dado

console.log(velocity(velocity !== "80"))
// retorna verdadeiro, considera o tipo do dado

console.log(velocity > 70)
// retorna verdadeiro porque velocity é maior que 70

console.log(spaceship > "Helmet")
// retorna falso
// compara lexicograficamente, como um dicionário,
// estando antes ou depois da palavra

console.log(velocity >= 90)
// retorna falso por não ser nem igual nem maior que 90

console.log(spaceship >= "Golias")
// retorna verdadeiro pois, apesar de não ser maior, é igual

console.log(velocity < 120)
// retorna verdadeiro pois 80 vem antes de 120

console.log(spaceship < "Helmet")
// retorna verdadeiro pois estaria antes em um dicionário
