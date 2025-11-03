// Estruturas condicionais simples 
/* Operadores condicionais

== Verifica se algo é igual a outra
!= Verifica se algo é diferente do outro
< Menor que
> Maior que
<= Menor ou igual a
>= Maior ou igual a

if e else: 
if se isso acontecer
else se não 
*/

const interruptor = 'ligado'
if (interruptor == "ligado") {
    console.log("A luz está acess   .")
}
console.clear()

//Dois iguais verifica se é igual
const a = "10"

if (a == 10) {
    console.log("a é 10")
}

//compara se até o tipo do dado é igual (string, number e boolean)

const b = "10"

if (b === 10) {
    console.log("b é 10")
}

console.clear()

const nome = "Guilherme"

if (nome != "Pedro") {
    console.log("Saia daqui.");
}

console.clear()

const Idade = 19

if (Idade < 18) {
    console.log("Você não pode participar do evento")
}

if (Idade >= 16) {
    console.log("Beleza, você pode entrar no evento")
}

console.clear()

// Estrutura condicional com mais de duas opções

/*let pedido = prompt("Boa tarde, qual o seu pedido? escolçha entre as opções: X-Bacon, X-Salada ou X-Burguer")

if (pedido === "X-Bacon") {
    alert(`Ótima escolha, ${pedido} ficará pronto em 20 minutos`)
}
else if (pedido === "X-Salada") {
    alert(`Ótima escolha, ${pedido} ficará pronto em 15 minutos`)
}
else if (pedido === "X-Burguer") {
    alert(`Ótima escolha, seu ${pedido} ficará pronto em 10 minutos`)
}
else {
    alert(`Opção inválida, aperte F5 e escolha uma opção válida`)
}
*/

//Operadores lógicos 

// && = and (e)
// || = or (ou)
// ! = not (não)

let clima = prompt("Como está o clima? chuva ou sol")
let dinheiro = prompt("Você tem dinheiro? sim ou não")

if (clima === "sol" && dinheiro === "sim") {
    alert(`Partiu rolê`)
}
else {
    alert(`Nem tava com vontade de sair mesmo`)
}

