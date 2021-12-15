const { TestResult } = require('@jest/types')
const {sum} = require('../src/sum.js');

describe('1 - Implemente a função `sum', () => {
  it('Verifica se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  it('Verifica se se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Verifica se a função sum lança um erro quando os parâmetros são 4 e "5"`', () => {
    expect(() => sum(4, '5')).toThrowError();
  });
  it('Verifica se a mensagem de erro é "parameters must be numbers', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});