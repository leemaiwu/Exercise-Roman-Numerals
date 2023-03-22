
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

console.log(toRoman(5))


//// Jared's Solution ////

function toRoman1(n) {
    const converstionTable = [
        [1, 'I'],
        [5, 'V'],
        [10, 'X'],
        [50, 'L'],
        [100, 'C'],
        [500, 'D'],
        [1000, 'M']
    ]
    let finalAnswer = ''
    for (let i = converstionTable.length - 1; i >= 0; i--) {
        while (n - converstionTable[i][0] >= 0) {
            n = n - converstionTable[i][0]
            finalAnswer += converstionTable[i][1]
        }
    }
    return finalAnswer
}

console.log(toRoman1(267))