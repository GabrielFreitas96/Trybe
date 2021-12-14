const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numbers) => {
 const divisible3E5 =  numbers % 3 === 0 && numbers % 5 === 0;
 return divisible3E5;  
}

const divisible = numbers.find(findDivisibleBy3And5);

console.log(divisible);

// console.log(findDivisibleBy3And5())

// Exercício 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // const fiveLetters = names.lenght === 5;
  const result = names.find((name) => name.length === 5);
  return result;
}

console.log(findNameWithFiveLetters());

// Exercicio 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
   const result = musicas.find((element) => element.id === id);
   return result;
}

console.log(findMusic('31031685'));