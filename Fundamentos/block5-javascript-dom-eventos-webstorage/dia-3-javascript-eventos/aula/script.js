const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// ocorre por causa da clase tech, que desloca a primeira li 20 px

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let li = document.getElementsByTagName('li');
console.log(li);
console.log(li.length);
let li0 = li[0];
let li1 = li[1];
let li2 = li[2];
console.log(li2);
console.log(li1);
console.log(li0);
li2.addEventListener("click",ChangeClassTech);
li1.addEventListener("click",ChangeClassTech);
li0.addEventListener("click",ChangeClassTech);

function ChangeClassTech(event){
    let change = document.querySelector('.tech');
    console.log(change);
    change.classList.remove('tech');
    event.target.classList.add('tech');
    
    /*  li2.classList = "tech";
     alert("Função realizada");
     console.log("Função realizada"); */
 }

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup',changeText);
console.log('aaaa');
function changeText(e){
    let text = e.target.value;
    console.log(text);
    let change = document.querySelector('.tech');
    change.innerText = text;   
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
let spotry = document.getElementById('my-spotrybefy');
spotry.addEventListener('dblclick', pageWeb);

function pageWeb(){
    console.log('aaa');
    window.open('https://www.google.com/','blank');
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;


//console.log(spotry);
//console.log(myWebpage);

spotry.addEventListener('mouseleave',changeColor)

function changeColor (e){
  spotry.style.color = 'red';
  console.log("aaaaaa")
  console.log(e.target);
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.