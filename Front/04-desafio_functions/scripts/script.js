function some(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return false;
    };
    return n1 + n2;
};

function hello(name) {
    if (typeof name !== 'string') {
        return false;
    };
    return `hello, ${name}`;
};

function totalNum(array) {
    if (!Array.isArray(array)) {
        return false
    };
    return array.reduce((cur, acc) => cur + acc, 0);
};

function maxRating(ratings) {
    let rating = 0, count = 0;

    for (const element of ratings) {

        if (element[1] > rating || (element[1] == rating && element[0] > rating)) {
            rating = element[1];
            count = element[0];
        };
    };

    return count;
};

function telVerify(tel) {
    if (tel.length !== 10) return false;

    const ddd = tel.slice(0, 2);
    const number = tel.slice(2, 10);

    return `(${ddd}) ${number}`
}

function verifyMaxNumbers(arr) {
    /*
    Objetivo: Criar uma função que receba dois arrays de números e retorne
    o maior número de cada um deles.

    🔹 Exemplo de entrada:
        verifyMaxNumbers([[4, 7, 1], [9, 2, 6]])

    🔹 Saída esperada:
        [7, 9]

    🔹 Requisitos:
    - A função deve percorrer os dois arrays separadamente
    - Deve comparar os elementos de cada array e identificar o maior
    - Retornar os dois maiores valores em um novo array
    */

    const [arr1, arr2] = arr;
    let max1 = 0;
    let max2 = 0;

    arr1.forEach(element => {
        if (element > max1) {
            max1 = element;
        }
    });

    arr2.forEach(element => {
        if (element > max2) {
            max2 = element;
        }
    });

    console.log([max1, max2])
    return [max1, max2];
};

function verifyPalidromo(str) {
    /*
    Objetivo: Criar uma função que verifique se uma palavra é um palíndromo
    (ou seja, se é igual quando lida de trás pra frente).

    🔹 Exemplo de entrada:
        verifyPalidromo("arara")

    🔹 Saída esperada:
        true

    🔹 Outro exemplo:
        verifyPalidromo("cachorro")

    🔹 Saída esperada:
        false

    🔹 Requisitos:
    - A função deve inverter a string original
    - Comparar a string invertida com a original
    - Retornar true se forem iguais e false se não forem
    */

    let palidromo = "";

    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];
        palidromo += char;
    };

    if (palidromo === str) return true;
    else return false;
};

module.exports = {
    some,
    hello,
    totalNum,
    maxRating,
    telVerify,
    verifyMaxNumbers,
    verifyPalidromo
}