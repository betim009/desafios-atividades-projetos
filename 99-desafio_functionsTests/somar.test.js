const { somar } = require('./scripts.js')

describe('Testando a função "somar"', () => {
    test('Testando a função somando 4 + 4', () => {
        expect(somar(4, 4)).toBe(8);
    });
    test('Testando a função enviando o primeiro argumento como string', () => {
        expect(somar('4', 4)).toBeFalsy();
    });
    test('Testando a função enviando o segundo argumento como string', () => {
        expect(somar(4, '4')).toBeFalsy();
    });
});