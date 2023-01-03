module.exports = function reverse(n) {
    const toPositive = Math.abs(n);
    return Array.from(String(toPositive)).reverse().join('')

}
