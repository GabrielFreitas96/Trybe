// arquivo script.js

//console.log(document.getElementById('start').nextSibling) // nó

//console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);
console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);
document.getElementById("primeiroFilhoDoFilho").innerText = 'AAAAAAAAA';
document.getElementById("primeiroFilho").innerText = 'BBBBBBBB';
console.log(document.getElementById("pai").nextSibling);
console.log(document.getElementById("pai").nextElementSibling);
console.log(document.getElementById("pai").firstChild);

let paidoPai = document.getElementById('paiDoPai');
console.log(paidoPai);
let section = document.createElement('section');
section.innerText = "irmão do elemento onde você está";
console.log(section);
paidoPai.appendChild(section);

//2.Crie um filho para elementoOndeVoceEsta .
let ondeVoceEsta = document.getElementById("elementoOndeVoceEsta");
let paragraph = document.createElement('p');
paragraph.innerText = "Filho do elemento elementoOndeVoceEsta";
ondeVoceEsta.appendChild(paragraph);

//3.Crie um filho para primeiroFilhoDoFilho .
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
//console.log(primeiroFilhoDoFilho);
let paragraphPrimeiro = document.createElement('p');
paragraphPrimeiro.innerText = "Filho do elemento primeiroFilhoDoFilho";
primeiroFilhoDoFilho.appendChild(paragraphPrimeiro);

//4.A partir desse filho criado, acesse terceiroFilho .
 console.log(paragraphPrimeiro.parentElement);
 console.log(paragraphPrimeiro.parentElement.nextElementSibling.nextElementSibling);
 console.log(paragraphPrimeiro.parentNode.nextSibling);