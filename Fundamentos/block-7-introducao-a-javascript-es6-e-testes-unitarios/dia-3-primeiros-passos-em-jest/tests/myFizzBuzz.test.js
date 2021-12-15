const myFizzBuzz = require('../src/myFizzBuzz.js')

describe('1-A função myFizzBuzz retorna "fizzbuzz" se for divisível por 3 e 5', () => {
  it('número divisível por 3 e 5 verifique se o retorno é "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    expect(myFizzBuzz(45)).toEqual('fizzbuzz');
  });
});

 describe('2- A função myFizzBuzz retorna "fizz" se for divisível apenas por 3', () => {
  it('número divisível por 3 verifique se o retorno é "fizz"', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
    expect(myFizzBuzz(18)).toEqual('fizz');
  });
});

describe('3- A função myFizzBuzz retorna "buzz" se divisível apenas por 5', () => {
  it('número divisível por 5 verifique se o retorno é "buzz"', () => {
    expect(myFizzBuzz(50)).toEqual('buzz');
    expect(myFizzBuzz(10)).toEqual('buzz');
  });
});
describe('4- A função myFizzBuzz retorna o próprio número caso não seja divisível por 3 ou 5', () => {
  it('caso número  não seja divisível por 3 ou 5 retorna o próprio número', () => {
    expect(myFizzBuzz(17)).toEqual(17);
    expect(myFizzBuzz(22)).toEqual(22);
  });
});

describe('5- A função myFizzBuzz retorna  false caso num não seja um número ', () => {
  it('caso num não seja um número retorna  false', () => {
    expect(myFizzBuzz('')).toBeFalsy();
    expect(myFizzBuzz('4')).toBeFalsy();
    expect(myFizzBuzz('a')).toBeFalsy();

  });
});