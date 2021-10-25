function sauda(nome){
    console.log(`Olá ${nome}`)
}
function soma (num1, num2){
    console.log(`A soma de ${num1} e ${num2} é igual a ${num1 + num2}`)
    console.log(`A Subtração de ${num1} e ${num2} é igual a ${num1 - num2}`)
    console.log(`A Divisão de ${num1} e ${num2} é igual a ${num1 / num2}`)
    console.log(`A multiplicação de ${num1} e ${num2} é igual a ${num1 * num2}`)
}

sauda("luiz")
soma(65,100)

console.log("********************************************************")
//arrow function
ola = () =>{
    console.log('Arrow')
}

ola()
console.log("********************************************************")

//função anonima
const raiz = function(n){
    return n ** 0.5
}

console.log(raiz(99).toFixed(2))

console.log("********************************************************")
const raiz2 = n =>  n ** 0.5


console.log(raiz2(24).toFixed(2))