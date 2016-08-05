let {
    getFormattedInputs,
    getNumbers,
    getSum,
    getCompared,
    print
}=require('../src/main');
describe('poker21', function () {
    it('get formatted inputs', function () {
        let inputs = 'Q-2-3';
        let formattedInputs = getFormattedInputs(inputs);
        let expected = ["Q", "2", "3"];
        expect(formattedInputs).toEqual(expected);
    });
    it('replace jqk to 10 ', function () {
        let formattedInputs = ["Q", "2", "3"];
        let numberArray = getNumbers(formattedInputs);
        let expected = ['10', '2', '3'];
        expect(numberArray).toEqual(expected);
    });
    it('calculate sum with A', function () {
        let numberArray = ["10", "A", "3"];
        let sum = getSum(numberArray);
        let expected = 14;
        expect(sum).toEqual(expected);
    });
    it('calculate sum with number-1', function () {
        let formattedArray = ["2", "8", "10"];
        let sum = getSum(formattedArray);
        let expected = 20;
        expect(sum).toEqual(expected);
    });
    it('calculate sum with number-2', function () {
        let formattedArray = ["2", "5", "7"];
        let sum = getSum(formattedArray);
        let expected = 14;
        expect(sum).toEqual(expected);
    });
    it('calculate sum with JQK', function () {
        let formattedArray = ["J", "Q"];
        let numberArray = getNumbers(formattedArray);
        let sum = getSum(numberArray);
        let expected = 20;
        expect(sum).toEqual(expected);
    });
    it('calculate sum with number and JQK', function () {
        let formattedArray = ["K", "5"];
        let numberArray = getNumbers(formattedArray);
        let sum = getSum(numberArray);
        let expected = 15;
        expect(sum).toEqual(expected);
    });
    it('calculate sum with A', function () {
        let formattedArray = ["A", "9", "10"];
        let numberArray = getNumbers(formattedArray);
        let sum = getSum(numberArray);
        let expected = 20;
        expect(sum).toEqual(expected);
    });
    it('calculate sum with A and number', function () {
        let formattedArray = ["A", "3", "2"];
        let numberArray = getNumbers(formattedArray);
        let sum = getSum(numberArray);
        let expected = 16;
        expect(sum).toEqual(expected);
    });
    it('calculate sum with A,JQK and number', function () {
        let formattedArray = ["A", "K", "3"];
        let numberArray = getNumbers(formattedArray);
        let sum = getSum(numberArray);
        let expected = 14;
        expect(sum).toEqual(expected);
    });
    it('calculate sum with JQK and A', function () {
        let formattedArray = ["Q", "A"];
        let numberArray = getNumbers(formattedArray);
        let sum = getSum(numberArray);
        let expected = 21;
        expect(sum).toEqual(expected);
    });

    it('compare A and B are more than 21', function () {
        let inputA = ['10', '10', '10', '10'];
        let inputB = ['10', '10', '10'];
        let sumA = 40;
        let sumB = 30;
        let result = getCompared(sumA, sumB, inputA, inputB);
        let expected = 'A & B tied';
        expect(result).toEqual(expected);
    });
    it('compare A is more than 21,but B less than 21', function () {
        let inputA = ['10', '10', '10'];
        let inputB = ['6', '4', '10'];
        let sumA = 30;
        let sumB = 20;
        let result = getCompared(sumA, sumB, inputA, inputB);
        let expected = "winner:B";
        expect(result).toEqual(expected);
    });
    it('compare A is less than 21,but B more than 21', function () {
        let inputA = ['10', '5', '3'];
        let inputB = ['6', '4', '10', '10'];
        let sumA = 18;
        let sumB = 30;
        let result = getCompared(sumA, sumB, inputA, inputB);
        let expected = "winner:A";
        expect(result).toEqual(expected);
    });
    it('compare A and B are less than 21,and winner:A', function () {
        let inputA = ['10', '4', '5'];
        let inputB = ['6', '4', '4'];
        let sumA = 19;
        let sumB = 14;
        let result = getCompared(sumA, sumB, inputA, inputB);
        let expected = "winner:A";
        expect(result).toEqual(expected);
    });
    it('compare A and B are less than 21,and winner:B', function () {
        let inputA = ['10', '4'];
        let inputB = ['6', '4', '10'];
        let sumA = 14;
        let sumB = 20;
        let result = getCompared(sumA, sumB, inputA, inputB);
        let expected = "winner:B";
        expect(result).toEqual(expected);
    });
    it('compared sum A is equal to sum B,but length of A is more than length of B ', function () {
        let inputA = '10-2-5';
        let inputB = 'Q-7';
        let sumA = 18;
        let sumB = 18;
        let result = getCompared(sumA, sumB, inputA, inputB);
        const expected = "winner:B";
        expect(result).toEqual(expected);
    });
    it('compare sum A is equal to sum B,and length of A is equal to length of B', function () {
        let inputA = '10-8';
        let inputB = 'Q-8';
        let sumA = 18;
        let sumB = 18;
        let result = getCompared(sumA, sumB, inputA, inputB);
        const expected = "A & B tied";
        expect(result).toEqual(expected);
    });
    it('print who is winner', function () {
        let inputA = '2-3-10';
        let inputB = 'Q-8';
        let result = print(inputA, inputB);
        let expected = "winner:B";
        expect(result).toEqual(expected);
    });

});
