const encode = require('../src/encodeDecode.js');

describe('1-Testa de Encode é uma função', () => {
  it('Verifica se é uma função', () => {
    expect(typeof encode).toBe('function');
    
  });
});

 describe('2- A função retorna as letras esperadas para as vogais', () => {
  it('Verifica se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });
});
describe('3- A função retorna as letras esperadas para não vogais', () => {
  it('Verifica se não vogais não são convertidas em números, permanecem com o seu valor', () => {
    expect(encode('b')).toBe('b');
    expect(encode('dddd')).toBe('dddd');
    expect(encode('zhgjklyt')).toBe('zhgjklyt');

  });
});
describe('4- A função retorna o mesmo número de caractres da string passada como parametro', () => {
  it('O número de caracteres retornado é igual ao numero de caracteres da String parametro', () => {
    expect(encode('b').length).toBe(1);
    expect(encode('dddd').length).toBe(4);
    expect(encode('Hi There!!!').length).toBe(11);

  });
});
