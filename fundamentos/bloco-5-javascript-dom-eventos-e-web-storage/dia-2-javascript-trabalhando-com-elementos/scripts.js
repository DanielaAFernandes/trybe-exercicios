const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta"); 
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Estou aprendendo uma matéria nova e é muito difícil.'
const primeiroFilho = pai.firstElementChild;
const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
const atencao = elementoOndeVoceEsta.nextSibling;
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

const pai = document.getElementById('pai');
const proximoFilho = document.createElement('section');
proximoFilho.id = 'proximoFilho'; 
pai.appendChild(proximoFilho);

const elementoOndeVoceEsta2 = document.getElementById('elementoOndeVoceEsta');  
const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta); 