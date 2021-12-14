console.log("aaaaaaa");
const enviar = document.getElementById('enviar');
let clickCount  = 0;
function contador () {
  clickCount  = clickCount  +1;
  const span = document.querySelector('span');
  console.log(span);
  span.innerText = clickCount;
}

addEventListener('click', contador);