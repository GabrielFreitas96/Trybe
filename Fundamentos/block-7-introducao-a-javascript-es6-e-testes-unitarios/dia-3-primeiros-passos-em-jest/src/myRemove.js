const { array } = require("yargs");

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
const numbers = [1, 2, 3, 4];
console.log(myRemove(numbers, 5));
module.exports = myRemove;