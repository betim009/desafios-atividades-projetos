function some(n1, n2) {
    /* 
    Objetivo: Criar uma função que some dois números, mas retorne false se qualquer um dos argumentos for uma string.
    Teste com números: some(2, 3) deve retornar 5.
    Teste com strings: some(2, "3") deve retornar false.
    */
};

function hello(name) {
    /*
    Objetivo: Criar uma função que retorne uma saudação personalizada, mas retorne false se o argumento não for uma string.

    Teste com uma string: hello("John") deve retornar "hello, John".
    Teste com um número: hello(123) deve retornar false.
    */
}

function totalNum(array) {
    /*
    Objetivo: Criar uma função que calcule a soma de todos os números em um array, mas retorne false se o argumento não for um array.
    Teste com um array de números: totalNum([1, 2, 3]) deve retornar 6.
    Teste com um argumento que não é um array: totalNum("123") deve retornar false.
    */
}

module.exports = {
    some,
    hello,
    totalNum
}