const { verifyPalidromo } = require("../scripts/script.js");

describe('Testando a função "verifyPalidromo"', () => {
    test('Deve retornar true para palíndromos', () => {
        expect(verifyPalidromo("arara")).toBe(true);
        expect(verifyPalidromo("ovo")).toBe(true);
        expect(verifyPalidromo("radar")).toBe(true);
    });

    test('Deve retornar false para palavras que não são palíndromos', () => {
        expect(verifyPalidromo("cachorro")).toBe(false);
        expect(verifyPalidromo("banana")).toBe(false);
        expect(verifyPalidromo("teste")).toBe(false);
    });
});
