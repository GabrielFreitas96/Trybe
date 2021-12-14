// Exercicio 1
const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));

// Exercicio 2
// Função getRandomIntInclusive usada do endereço
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomIntInclusive(1,5));

const checkDrawn = (drawn,numb) => {
  if (drawn === numb) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  } 
}

const numberDrawn = (numb,func) => {
  const min = 1;
  const max = 5;
  const drawn =  Math.floor(Math.random() *(max - min +1)) + min;
  const result = func(drawn,numb);
  return result;
}

console.log(numberDrawn(5,checkDrawn));

// Exercicio 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontuation = (gab,answers) => {
  let pontuation = 0;
  for (let index = 0; index <gab.length; index += 1) {
    if (answers[index] === gab[index]  ){
      pontuation +=1;
    } else if (answers[index] !== gab[index] && answers[index] !== 'N.A'){
      pontuation = pontuation - 0.5;
    }// else if (answers[index] ==='N.A') {
    //   pontuation = pontuation +0;
    // }
  }
  return `A pontuação do estudante foi de: ${pontuation}`;
}

const answersVerification = (gab,answers,func) => {
 const result = func(gab,answers);
 return result;
}

console.log(answersVerification(RIGHT_ANSWERS,STUDENT_ANSWERS,pontuation));