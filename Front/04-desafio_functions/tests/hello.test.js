const { hello } = require("../scripts/script.js");

describe('Testando a função "hello"', () => {
    test('Deve retornar a string correta', () => {
        expect(hello('Alberto')).toBe('hello, Alberto');
    });

    test('Deve retonar false se enviar um número', () => {
        expect(hello(5)).toBe(false);
    });
});