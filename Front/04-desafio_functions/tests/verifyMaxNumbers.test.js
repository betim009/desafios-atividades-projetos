const { verifyMaxNumbers } = require("../scripts/script.js");

describe('Testando a função "verifyMaxNumbers"', () => {
    test('Deve retornar o corretamente o array de numero.', () => {
        expect(verifyMaxNumbers([[4, 7, 1], [9, 2, 6]])).toEqual([7, 9]);
    });

});