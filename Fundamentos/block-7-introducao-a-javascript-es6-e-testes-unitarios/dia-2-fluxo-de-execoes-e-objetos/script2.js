const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1

const noite = (lesson,key,noite) => {
  lesson[key] = noite;
  return lesson;
}

console.log(noite(lesson2,'turno','noite'));

// Exercício 2

const keysObject = (object) => {
  return Object.keys(object);
}

console.log(keysObject(lesson2));

// Exercício 3

const sizeObject = (object) => {
  let array = Object.entries(object);
  console.log(`O array do objeto:
   ${array}`)
  let size = array.length;
  return size; 
}

console.log(sizeObject(lesson1));

// Exercício 4

const valueObject = (object) => {
  let value = Object.values(object);
  console.log(`Os valores do objeto são: 
  ${value}`)
}

valueObject(lesson3);

// Exercício 5

let allLessons = Object.assign({},{lesson1},{lesson2},{lesson3});
let allLessons2 = Object.assign({},{lesson1,lesson2,lesson3});
console.log(allLessons);
//console.log(allLessons2);

// (allLessons == allLessons2) ? console.log("São iguais"):console.log("Não São iguais");

// Exercício 6

const studentNumbers = (object) => {
  let arrayValue = Object.values(object);
  let arrayEntries =Object.entries(object);
  let arrayKeys = Object.keys(object);
  //console.log(arrayValue);
  //console.log(arrayEntries);
  //console.log(arrayKeys);
  let number1 = object[arrayKeys[0]].numeroEstudantes;
  let number2 = object[arrayKeys[1]].numeroEstudantes;
  let number3 = object[arrayKeys[2]].numeroEstudantes;
  let result = number1+number2+ number3;
  console.log(`Numero total de Estudantes em todas as aulas : ${result}`);
}

// console.log(studentNumbers(allLessons));
studentNumbers(allLessons);

// Exercicio 7
const getValueByNumber = (object,n) => {
  let result = Object.values(object)[n];
  return result;
}

console.log(getValueByNumber(lesson1, 0));

// Exercício 8
const verifyPair = (object,key,value) => {
  if (object[key] === value) {
    return true;
  } else {
      return false;
  }
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));