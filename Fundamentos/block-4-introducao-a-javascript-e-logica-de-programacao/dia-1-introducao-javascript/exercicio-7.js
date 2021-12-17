// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F

const random = () => Math.round(Math.random()*(100-1)+1);

let nota = random();
//let nota = 101;
//let nota = -1;
console.log( `Nota inserida foi: ${nota}`);
const resultado = (nota) => {
  let conceito = '';
  if (nota > 100 || nota < 0) {
    return 'Error!!! Nota Inválida'
  } else {
    if ( nota < 50) {
      conceito = 'F';
    } else if (nota >= 50 && nota < 60) {
      conceito = 'E'; 
    } else if (nota >= 60 && nota < 70) {
      conceito = 'D';
    } else if (nota >= 70 && nota < 80) {
      conceito = 'C';
    } else if (nota >= 80 && nota < 90) {
      conceito = 'B';
    } else if (nota >= 90 ) {
      conceito = 'A';
    }
}
return conceito;
}

console.log(resultado(nota));