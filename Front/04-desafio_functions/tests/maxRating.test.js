const { maxRating } = require('../scripts/scripts.js')

describe('Testando a função "maxRating"', () => {
    test('Testando a função enviando: [[100, 4], [200, 1], [121, 5], [33, 3]]', () => {
        expect(maxRating([[100, 4], [200, 1], [121, 5], [33, 3]])).toBe(121);
    });

    test('Testando a função enviando: [[7, 4], [200, 1], [121, 5], [33, 5], [10, 5]]', () => {
        expect(maxRating([[7, 4], [200, 1], [121, 5], [33, 5], [10, 5]])).toBe(10);
    });
});