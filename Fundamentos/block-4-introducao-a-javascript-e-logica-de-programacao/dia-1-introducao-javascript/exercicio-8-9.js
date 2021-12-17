const random = () => Math.round(Math.random()*(100-1)+1);

const num1 = random();
const num2 = random();
const num3 = random();

console.log(num1,num2,num3);

const par = (num1,num2,num3) =>{
  if ( num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    return true;
  } else {
    return false;
  }
} 

const impar = (num1,num2,num3) =>{
  if ( num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
    return true;
  } else {
    return false;
  }
} 

console.log(impar(num1,num2,num3));
console.log(par(num1,num2,num3));