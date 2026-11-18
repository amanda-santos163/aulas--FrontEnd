console.log('missao iniciada');
console.log(document);

//passo 3 - por ID 
const titulo = document.querySelector('#titulo');
titulo.textContent = 'Aula de DOM';
titulo.style.color = 'red';

//passo 4 - por classe
const  p1 = document.querySelector('.texto');
p1.style.fontWeight = 'bold';

const textos = document.querySelectorAll('.texto');
textos.forEach(p => p.style.color = 'green');

//passo 5 - por tag e combinaçao
const caixa = document.querySelector('div');
caixa.style.border = '3px solid blue';
caixa.style.padding = '20px';

const campoNome = document.querySelector(
    '.container input [type="text"]'
);
campoNome.value = 'Maria';

//passo 6 - texto, html e atributos
textos[1].innerHTML = 'Segundo com <em>enfase</em>';

const campoEmail = document.querySelector(
    'input[type="email"]'
);
campoEmail.setAttribute('placeHolder', 'seu@email.com');