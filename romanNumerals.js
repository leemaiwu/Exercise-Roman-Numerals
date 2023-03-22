
function toRoman(num) {
    const key = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    }
    let roman = ''
    for (let i in key ) {
        while (num >= key[i]) {
            roman += i
            num -= key[i]
        }
    }
    return roman
}

console.log(toRoman(99))


//// Jared's Solution ////
