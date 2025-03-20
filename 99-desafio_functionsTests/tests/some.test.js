const { some } = require('../scripts/scripts.js')

describe('Testando a função "some"', () => {
    test('Testando a função somando 4 + 4', () => {
        expect(some(4, 4)).toBe(8);
    });
    test('Testando a função enviando o primeiro argumento como string', () => {
        expect(some('4', 4)).toBeFalsy();
    });
    test('Testando a função enviando o segundo argumento como string', () => {
        expect(some(4, '4')).toBeFalsy();
    });
});