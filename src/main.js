'use strict';
let _ = require('lodash');
let inputB = 'Q-8';
let inputA = '10-3-5';
function getFormattedInputs(inputA) {
    return _.split(inputA, '-');
}
function getNumbers(formattedInput) {
    let result = formattedInput.map(n=> {
        if (n === 'J' || n === 'Q' || n === 'K') {
            return '10';
        } else {
            return n;
        }
    })
    return result;
}
function getSum(formattedArray) {
    let sum = _(formattedArray).map(x=> {
        return x === 'A' ? 1 : parseInt(x);
    }).sum();
    if (sum <= 11) {
        sum += 10;
    } else {
        return sum;
    }
    return sum;
}

function getCompared(sumA, sumB) {
    let aLength = getFormattedInputs(inputA).length;
    let bLength = getFormattedInputs(inputB).length;
    if (sumA > 21 && sumB > 21) {
        return "a and b tied";
    } else if (sumA <= 21 && sumB > 21) {
        return "winner: A"
    } else if (sumA > 21 && sumB <= 21) {
        return "winner: B";
    } else if (sumA <= 21 && sumB <= 21) {
        if (sumA === sumB && aLength === bLength) {
            return 'A & B tied';
        } else if (sumA === sumB && aLength < bLength) {
            return 'winner:A';
        } else if (sumA === sumB && aLength > bLength) {
            return 'winner:B';
        } else if (sumA > sumB) {
            return 'winner：A';
        } else {
            return 'winner:B';
        }

    }


}
function print(inputA, inputB) {
    let formattedA = getFormattedInputs(inputA);
    let numberA = getNumbers(formattedA);
    let sumA = getSum(numberA);
    let formattedB = getFormattedInputs(inputB);
    let numberB = getNumbers(formattedB);
    let sumB = getSum(numberB);
    let result = getCompared(sumA, sumB);
    return result;

}
print(inputA, inputB);
module.exports = {
    getFormattedInputs,
    getNumbers,
    getSum,
    getCompared,
    print
};