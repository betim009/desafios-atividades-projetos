const { telVerify } = require("../scripts/scripts.js");

describe('Testando a função "telVerify"', () => {
    test('Deve retornar false enviando um número com mais de 10 digitos', () => {
        expect(telVerify('27999888777665')).toBe(false);
    });

    test('Deve retonar false se enviar um número', () => {
        expect(telVerify('2799082744')).toBe("(27) 99082744");
    });
});q