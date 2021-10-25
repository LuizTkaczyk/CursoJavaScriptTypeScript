const numero = Number(prompt('Digite um número'))

const numeroTitulo = document.querySelector('#numberTitle');
const texto = document.querySelector("#texto")

numeroTitulo.innerHTML = numero
texto.innerHTML = `<p> Sua raiz quadrada é ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p> É NaN :${Number.isNaN(numero)}. </p>`;
texto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p> Arredondando para cima. ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p> Com duas casas decimais. ${numero.toFixed(2)} </p>`;