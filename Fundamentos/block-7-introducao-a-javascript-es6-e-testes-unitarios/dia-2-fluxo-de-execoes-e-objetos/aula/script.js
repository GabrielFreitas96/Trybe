const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

// console.log(customer);

customer.lastName = 'Faria';

console.log(customer);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

//Ciar função que receba um objeto e adicione uma chave e um valor

const aluno = {
  nome: 'Antonio',
  age: 16,
  course: 'matematica',
}

const addKey = (objeto,key,value) => {
  objeto[key] = value;
  return objeto;
}

console.log(addKey(aluno,'lastName',"Batista"));
console.log(addKey(aluno,'adress',"Rua da Margarina"));

//Objects Keys

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// for (const property in coolestTvShow) {
//   console.log(property);
// }

console.log(Object.keys(coolestTvShow));

// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// console.log(Object.keys(student2));

const nivel = () =>{
  const skills = Object.keys(student2);
  console.log('Skills', skills);
  console.log('Skills Length', skills.length);
  for (i = 0; i <  skills.length; i++) {
    let string = skills[i];
    // console.log(string);
    console.log(`${string}, Nivel:${student2[string]}`);
  }
}

//console.log(nivel(student2));

nivel();

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));