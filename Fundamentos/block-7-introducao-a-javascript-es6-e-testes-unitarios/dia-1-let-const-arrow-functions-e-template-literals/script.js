/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

const  testingScope = () =>  true ? 'Não devo ser utilizada fora do meu escopo (if)': 'Não devo ser utilizada fora meu escopo (else)';
console.log(testingScope(true)); */

// Exercício 1
const testingScope = escope => {
  if (escope === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope}  ótimo, fui utilizada no escopo !`);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Exercício 2
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// oddsAndEvens.sort(function(a, b){return a-b});
// console.log(oddsAndEvens);
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordenaArray = (array) => {
  array.sort(function(a, b){return a-b});
  console.log(`Os números ${array} se encontram ordenados de forma crescente!`)
}

ordenaArray(oddsAndEvens);


