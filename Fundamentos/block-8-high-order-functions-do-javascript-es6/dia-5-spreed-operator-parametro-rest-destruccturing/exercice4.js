const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = (people) => {
  const australian = people.filter((people) => people.nationality ==="Australian");
  const result = australian.filter((item) => item.bornIn < 2000 );
  return result;
};
console.log(filterPeople(people));

// solução alternativa
/*const filterPeople = (arr) => arr.filter(
  ({ nationality, bornIn }) =>
    nationality === 'Australian'
    && bornIn > 1900 && bornIn <= 2000,
  );
console.log(filterPeople(people));
*/
