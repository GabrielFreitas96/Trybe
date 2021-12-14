if (true) {
  // inicio do escopo do if
  const userAge = "20";
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

let userName = "Isabella";
let userName = "Lucas";
console.log(userName); // Resultado: Lucas

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

// const printName = () => {
//   const myName = "Lucas";
//   return myName;
// }
// console.log(printName());

const printName = () => "Lucas";
console.log(printName());

const checkTernary = (age) => (
  age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
);
console.log(checkTernary(19));

const myName = "Isabella"
console.log(`Welcome ${myName}!`);