function somar(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return false
    }
    return n1 + n2
};

function hello(name) {
    if (typeof name !== 'string') {
        return false
    }
    return `hello, ${name}`
}

module.exports = {
    somar,
    hello
}