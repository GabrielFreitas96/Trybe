const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  const result = arr.some((element) => element = name);
  // console.log(`Posição do ${name} dentro do array é a: ${index}`);
  return result;
}

console.log(hasName(names, 'Ana'));

// Exercício 2
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  const result = arr.every((element) => element.age > minimumAge);
  return result;
}

console.log(verifyAges(people, 14));

//Exercício 3

