'use strict';
let _ = require('lodash');
let inputs = 'Q-2-3';
function getFormattedInputs(inputs) {
    return _.chain(inputs)
        .split('-')
        .value();
}
function getNumbers(formattedInputs) {
    let result = _.chain(formattedInputs)
        .filter(n=>n !== 'A')
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
    let result =_.chain(formattedArray)
        .map(n=>parseInt(n))
        .sum()
        .value();
    return result;
}
// function getCompared(formattedArray,sum,sumIncludesA) {
//     if(sum>sumIncludesA){
//         return "没有发到A的赢";
//     }else if(sum<sumIncludesA){
//         return "发到A的赢"
//     }else{
//         formattedArray.length
//     }
// }
function game(inputs) {
    let formattedInputs = getFormattedInputs(inputs);
    let formattedArray = getNumbers(formattedInputs);
    let sum=getSum(formattedArray);
    let sumIncludesA =getSumIncludesA(formattedArray);
    return sumIncludesA;
}
console.log(game(inputs));
module.exports = {getFormattedInputs,getNumbers,getSum,getSumIncludesA};