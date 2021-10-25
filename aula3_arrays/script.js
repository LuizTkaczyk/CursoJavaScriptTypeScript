const alunos = [ 'Luiz', 'Ana', 'Maria']
alunos.push('Marcia') //adicionando elementos  no final do array
alunos.push('Marcos') //adicionando elementos  no final do array
alunos.push('André') //adicionando elementos  no final do array
alunos.unshift('João')//adicionando elementos  no inicio do array
alunos.pop()//removendo elementos do final do array
alunos.shift()//removendo elementos do inicio do array
//delete alunos[2] // deletando elementos do array, porém permanacendo a sua posição

console.log(alunos.slice(0,3)) //fatiando o array

//console.log(alunos)