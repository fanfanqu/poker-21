'use strict';
let _ = require('lodash');
//let inputs = 'Q-2-3';

function getFormattedInputs(inputs) {
    return _.chain(inputs)
        .split('-')
        .value();
}
function getNumbers(formattedInputs) {
    let result = _.chain(formattedInputs)
        .map(n=> {
            if (n === 'J' || n === 'Q' || n === 'K') {
                return _.chain(n).replace(n, 10).value();
            } else {
                return n;
            }
        })
        .value();
    return result;
}
function getSum(formattedArray) {
    if (formattedArray.includes('A')) {
        let result = _.chain(formattedArray)
            .map(n=> {
                if (n === 'A') {
                    return _.chain(n).replace(n, 1).value()
                } else {
                    return n;
                }
            }).value();
        let sum = _.chain(result).map(n=>parseInt(n)).sum().value();
        if (sum <= 11) {
            sum = sum + 10;
        } else {
            return sum;
        }
    } else {
        return _.chain(formattedArray).map(n=>parseInt(n)).sum().value();
    }
}
let inputA = 'A-Q-Q';
let inputB = 'A-5-6';
function getSumPointA(inputA) {
    let formattedA = getFormattedInputs(inputA);
    let ArrayA = getNumbers(formattedA);
    let sumA = getSum(ArrayA);
    return sumA;
}
console.log(getSumPointA(inputA));
function getSumPointB(inputB) {
    let formattedB = getFormattedInputs(inputB);
    let ArrayB = getNumbers(formattedB);
    let sumB = getSum(ArrayB);
    return sumB;
}
console.log(getSumPointB(inputB));
function getCompared(inputA, inputB) {
    let aLength = getFormattedInputs(inputA).length;
    let bLength = getFormattedInputs(inputB).length;
    let a = getSumPointA(inputA);
    let b = getSumPointB(inputB);
    if (a > 21 && b > 21) {
        return "a and b tied";
    } else if (a <= 21 && b > 21) {
        return "winner: A"
    } else if (a > 21 && b <= 21) {
        return "winner: B";
    } else if (a <= 21 && b <= 21) {
        if (a === b) {
            if (aLength === bLength) {
                return 'A & B tied';
            } else {
                if (aLength > bLength) {
                    return 'winner:B';
                } else {
                    return 'winner:A';
                }
            }
        } else {
            if (a > b) {
                return 'winner：A';
            } else {
                return 'winner:B';
            }
        }
    }
}
function game(inputA, inputB) {
    let result = getCompared(inputA, inputB);
    return result;
}
console.log(game(inputA, inputB));
module.exports = {getFormattedInputs, getNumbers, getSum, getSumPointA, getSumPointB, getCompared};