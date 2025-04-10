const { maxRating } = require('../scripts/script.js')

describe('Testando a função "maxRating"', () => {
    test('Testando a função enviando: [[123, 4], [133, 2], [423, 5], [100, 4]]',
        () => {
            expect(maxRating([[123, 4], [133, 2], [423, 5], [100, 4]])).toEqual([423, 5]);
        });

    test('Testando a função enviando: [[100, 4], [200, 1], [121, 5], [33, 3]]',
        () => {
            expect(maxRating([[100, 4], [200, 1], [121, 5], [33, 3]])).toEqual([121, 5]);
        });

    test('Testando a função enviando: [[123, 5], [133, 2], [99, 5], [100, 4]]',
        () => {
            expect(maxRating([[123, 5], [133, 2], [99, 5], [100, 4]])).toEqual([99, 5]);
        });

    test('Testando a função enviando: [[7, 4], [200, 1], [121, 5], [33, 5], [10, 5]]',
        () => {
            expect(maxRating([[7, 4], [200, 1], [121, 5], [33, 5], [10, 5]])).toEqual([10, 5]);
        });
});