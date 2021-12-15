const decode = require('../src/decode.js');

describe('1-Testa de Encode é uma função', () => {
  it('Verifica se é uma função', () => {
    expect(typeof decode).toBe('function');
    
  });
});

 describe('2- A função retorna as vogais esperadas para os números', () => {
  it('Verifica se os números 1, 2, 3, 4 e 5 são convertidas nas vogais a, e, i, o, u, respectivamente;', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });
});
describe('3- A função retorna os numeros esperadas para os números diferentes de 1,2,3,4,5', () => {
  it('Verifica os numeros diferentes de 1,2,3,4,5, permanecem com o seu valor', () => {
    expect(decode('6')).toBe('6');
    expect(decode('789')).toBe('789');
    expect(decode('6789999')).toBe('6789999');

  });
});
describe('4- A função retorna o mesmo número de caractres da string passada como parametro', () => {
  it('O número de caracteres retornado é igual ao numero de caracteres da String parametro', () => {
    expect(decode('6').length).toBe(1);
    expect(decode('6789').length).toBe(4);
    expect(decode('67896789987').length).toBe(11);

  });
});
