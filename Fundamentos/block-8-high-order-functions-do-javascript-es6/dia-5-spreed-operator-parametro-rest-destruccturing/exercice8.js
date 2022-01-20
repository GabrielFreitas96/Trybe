// escreva greet abaixo

// console.log(greet('John')) // 'Hi John'
//console.log(greet('John', 'Good morning')) // 'Good morning John'
//console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'
const greet = (name, expression = 'Hi') => {
  // if (!expression) {
  //   return `Hi ${name}`
  // }
  return `${expression} ${name}`
};
console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'