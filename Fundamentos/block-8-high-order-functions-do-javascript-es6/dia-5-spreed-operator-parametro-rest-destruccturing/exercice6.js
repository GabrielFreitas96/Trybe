const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const myobject = (parameter) => {
 [ car, model, year ] = parameter;
 //console.log(car, model, year);
 return {
   car, model, year,
 }
};

console.log(myobject(palio));