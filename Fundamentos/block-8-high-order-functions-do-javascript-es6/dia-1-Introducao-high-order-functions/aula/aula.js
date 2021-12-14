const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

//Exercicio da aula

const morning = () => 'Acordando';
// console.log(morning());
const coffe = () => 'Bora Tomar café!!';
const sleep = () => "Partiu dormir";

const doingThings = (func) => {
  const result = func();
  console.log(result);
};

doingThings(morning);