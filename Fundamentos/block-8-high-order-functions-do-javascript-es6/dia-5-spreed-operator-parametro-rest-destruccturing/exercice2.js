// Resolução usando o reduce
const sum = (...ent) => {
  return ent.reduce((acc,item) => acc + item )
};

console.log(sum(1,2,3,4)); // 10
// segunda possibilidade
const sum = (...ent) => {
  let soma = 0;
  ent.forEach((item) => {soma = soma + item} );
  return soma;
};

console.log(sum(1,2,3,4)); // 10