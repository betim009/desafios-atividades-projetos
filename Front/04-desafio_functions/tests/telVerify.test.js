const { telVerify } = require("../scripts/scripts.js");

describe('Testando a função "telVerify"', () => {
    test('Deve retornar false enviando um número com mais de 10 digitos', () => {
        expect(telVerify('27999082744')).toBe(false);
    });

    test('Deve retornar false enviando um número com menos de 10 digitos', () => {
        expect(telVerify('27999084')).toBe(false);
    });

    test('Enviando "2799082744" e recebendo "(27) 99082744"', () => {
        expect(telVerify('2799082744')).toBe("(27) 99082744");
    });
});q