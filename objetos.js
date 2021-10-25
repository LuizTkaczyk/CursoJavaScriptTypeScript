function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoa1 = criaPessoa('Luiz', 'Tkaczyk', 32)
console.log(pessoa1.nome)

console.log('###################################')

const pessoa2 = {
    nome:'Luiz',
    sobrenome:'Pereira',
    idade : 29,

    fala(){
    console.log(`A minha idade atual é ${this.idade}`)
    
    },

    incrementaIdade(){
        this.idade++
    }
}

pessoa2.fala()
pessoa2.incrementaIdade()
pessoa2.fala()

