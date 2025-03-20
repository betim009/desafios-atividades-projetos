const { totalNum } = require('../scripts/scripts.js')

describe('Testando a função "totalNum"', () => {
    test('Testando a função enviando [3, 2, 2]', () => {
        expect(totalNum([3, 2, 2])).toBe(7);
    });

    test('Testando a função "3, 2, 2"', () => {
        expect(totalNum("3, 2, 2")).toBeFalsy();
    });
});