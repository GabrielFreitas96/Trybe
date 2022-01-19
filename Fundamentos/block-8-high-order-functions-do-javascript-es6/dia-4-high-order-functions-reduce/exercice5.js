const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  // escreva seu código aqui
  return array.reduce((acc, curent) =>{
    let string = curent.split('');
    let soma = 0;
    string.forEach((element) => {
      if (element ==='A' || element ==='a') {
        soma += 1;
      }
      return soma;
    });
    console.log(curent, soma);
    return soma + acc;
  },0);
}

console.log(containsA(names));