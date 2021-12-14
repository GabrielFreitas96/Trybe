function fatorial (n) {
  let fatorial = 2;
  for( let i = 3;i <= n; i +=1) {
    fatorial = fatorial * i;
    console.log(fatorial);
  }
return fatorial;
console.log('O fatorial final', fatorial);
}

fatorial(5);

const fatorial = (n) => {
  let fatorial = 2;
  for ( let i = 3; i <= n; i +=1) {
    fatorial = fatorial * i;
  }
  return fatorial;
  // console.log(fatorial);
}

console.log(fatorial(5));

// Exerício 2
longestWord ="Antônio foi no banheiro e não sabemos o que aconteceu";

const maiorPalavra = (frase) => {
  let array = frase.split(" ");
  let string = "";
  let maior = 0;
  let resultado = "";
  let stringDois = "";
  for (let i = 0; i<array.length; i +=1) {
    string = array[i];
    // stringDois = array[(array.length-1)-i];
    if (string.length > resultado.length){
      resultado = string;
    }
   
    }
  return resultado;
}
console.log(maiorPalavra("Antônio foi no banheiro  aconteceu e não sabemos o que"));

// Exercício 3
// Feito separado ex3.html e scripEx3.js

// Exercicio 4

