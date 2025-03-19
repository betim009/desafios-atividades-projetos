const { hello } = require("./scripts.js");


describe('Testando a função "hello"', () => {
    test('Deve retornar a saudação correta para o nome fornecido', () => {
        expect(hello('Alberto')).toBe('hello, Alberto');
    });
});