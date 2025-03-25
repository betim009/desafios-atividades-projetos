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

console.log(telVerify("2799082744"))


module.exports = {
    some,
    hello,
    totalNum,
    maxRating
}