function some(n1, n2) {
    /* 
    Objetivo: Criar uma função que some dois números, 
    mas retorne false se qualquer um dos argumentos for uma string.

    🔹Teste com números: some(2, 3) deve retornar 5.
    🔹Teste com strings: some("2", 3) deve retornar false.
    🔹Teste com strings: some(2, "3") deve retornar false.
    */
};

function hello(name) {
    /*
    Objetivo: Criar uma função que retorne uma string/texto personalizada, 
    mas retorne false se o argumento não for uma string.

    🔹Teste com uma string: "Jonh" 
        hello("John") 
        
    🔹Saída esperada:
        "hello, John".

    🔹Teste com um número: 123
        hello(123) 
    
    🔹Saída esperada:
        false
    */
}

function totalNum(array) {
    /*
    Objetivo: Criar uma função que calcule a soma de todos os números em um array, 
    mas retorne false se o argumento não for um array.

    🔹Teste com um array de números: 
        [1, 2, 3]
    
    🔹Saída:
        6

    🔹Teste com um argumento que não é um array:
        "123" 

    🔹Saída:
        false.
    */
}

function maxRating(ratings) {
    /*
    Você deve implementar a função maxRating, que recebe um array de arrays representando pedidos em um fast food. Cada pedido é um array contendo dois valores:
  
    Quantidade do pedido (um número inteiro positivo)
    Nota do pedido (um número inteiro de 1 a 5)
    O objetivo é encontrar o pedido com a maior nota. Caso haja mais de um pedido com a mesma nota máxima, deve-se retornar aquele que tem a menor quantidade.

    1 Exemplo de Entrada e Saída
    🔹 Entrada:
        [[123, 4], [133, 2], [423, 5], [100, 4]]

    🔹 Processamento:
        O pedido com a maior nota é [423, 5], pois tem a maior nota (5).

    🔹 Saída esperada:
        [423, 5]


    2 Exemplo:
    🔹 Entrada:
        [[123, 5], [133, 2], [99, 5], [100, 4]]

    🔹 Processamento:
        Os pedidos [123, 5] e [99, 5] possuem a maior nota (5).
        Entre eles, [99, 5] tem a menor quantidade.

    🔹 Saída esperada:
        [99, 5]
    */
}

function telVerify(tel) {
    /*
  Objetivo: Criar uma função que verifique e formate um número de telefone,
  retornando false se o número for inválido (não tiver 10 dígitos) ou
  formatando no padrão (DDD) NNNNNNNN se for válido.

  🔹Teste com número válido (10 dígitos):
      telVerify("1198765432")
  
  🔹Saída esperada:
      "(11) 98765432"

  🔹Teste com número inválido (mais de 10 dígitos):
      telVerify("11987654321")
  
  🔹Saída esperada:
      false

  🔹Teste com número inválido (menos de 10 dígitos):
      telVerify("11987654")
  
  🔹Saída esperada:
      false
  */
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

};

module.exports = {
    some,
    hello,
    totalNum,
    maxRating,
    telVerify
}