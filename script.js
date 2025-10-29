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

