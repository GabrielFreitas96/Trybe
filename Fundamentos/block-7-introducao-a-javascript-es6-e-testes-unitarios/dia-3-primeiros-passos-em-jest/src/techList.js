const techList = (array,name) => {
 let result = [];
 if (array.length === 0) {
   return 'Vazio!';
 }
 tech = array.sort();
  for (let index = 0; index < tech.length; index +=1) {
   result[index] ={name, tech:tech[index]};
 }
 return result;
};
const list = ['JavaScript', 'Html', 'CSS', 'Jest', 'React'];
const name = 'Lucas';
module.exports = techList;
// console.log(techList(list,name));
console.log(techList([],name));