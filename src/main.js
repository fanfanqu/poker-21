'use strict';
let _ = require('lodash');
function getFormattedInputs(input) {
    return _.split(input, '-');
}
function getNumbers(formattedInput) {
   return _.map(formattedInput,n=>{
       let isJqk= ['J','Q','K'].includes(n);
       return isJqk?'10':n;
   });
}
function getSum(formattedArray) {
    let sum = _(formattedArray).map(x=> {
        return x === 'A' ? 1 : parseInt(x);
    }).sum();
    return sum <= 11 ? sum + 10 : sum;
}
let inputB = 'Q-3-5';
let inputA = '10-8';
function getCompared(sumA, sumB, inputA, inputB) {
    let aLength = _.split(inputA, '-').length;
    let bLength = _.split(inputB, '-').length;
    if (sumA > 21 && sumB > 21) return "A & B tied";
    if (sumA > 21) return "winner:B";
    if (sumB > 21) return "winner:A";
    if (sumA > sumB) return "winner:A";
    if (sumB > sumA) return "winner:B";
    if (aLength > bLength) return "winner:B";
    if (bLength > aLength) return "winner:A";
    return "A & B tied";
}
function print(inputA, inputB) {
    let sumA = getSum(getNumbers(getFormattedInputs(inputA)));
    let sumB = getSum(getNumbers(getFormattedInputs(inputB)));
    return  getCompared(sumA, sumB,inputA,inputB);
}

print(inputA, inputB);
module.exports = {
    getFormattedInputs,
    getNumbers,
    getSum,
    getCompared,
    print
};
