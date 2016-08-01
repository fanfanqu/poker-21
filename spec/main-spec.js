let {getFormattedInputs,
     getNumbers,
     getSum,
     getCompared,
    print
}=require('../src/main');
 describe('poker21', function() {
  it('getFormattedInputs', function() {
      let inputs='Q-2-3';
      let formattedInputs = getFormattedInputs(inputs);
      let expected = ["Q", "2", "3"];
      expect(formattedInputs).toEqual(expected);
  });
     it('',function () {
        let formattedInputs =["Q", "2", "3"];
         let numberArray = getNumbers(formattedInputs);
         let expected = ['10','2','3'];
         expect(numberArray).toEqual(expected);
     });
     it('getSum',function () {
         let numberArray = ["10", "A", "3"];
         let sum = getSum(numberArray);
         let expected = 14;
         expect(sum).toEqual(expected);
     });
     it('getSum',function () {
         let formattedArray = ["2", "8", "10"];
         let sum = getSum(formattedArray);
         let expected = 20;
         expect(sum).toEqual(expected);
     });
     it('getSum',function () {
         let formattedArray = ["2", "5", "7"];
         let sum = getSum(formattedArray);
         let expected = 14;
         expect(sum).toEqual(expected);
     });
     it('getSum',function () {
         let formattedArray = ["J", "Q"];
         let numberArray=getNumbers(formattedArray);
         let sum = getSum(numberArray);
         let expected = 20;
         expect(sum).toEqual(expected);
     });
     it('getSum',function () {
         let formattedArray = ["K", "5"];
         let numberArray=getNumbers(formattedArray);
         let sum = getSum(numberArray);
         let expected = 15;
         expect(sum).toEqual(expected);
     });
     it('getSum',function () {
         let formattedArray = ["A", "9", "10"];
         let numberArray=getNumbers(formattedArray);
         let sum = getSum(numberArray);
         let expected = 20;
         expect(sum).toEqual(expected);
     });
     it('getSum',function () {
         let formattedArray = ["A", "3", "2"];
         let numberArray=getNumbers(formattedArray);
         let sum = getSum(numberArray);
         let expected = 16;
         expect(sum).toEqual(expected);
     });
     it('getSum',function () {
         let formattedArray = ["A", "K", "3"];
         let numberArray=getNumbers(formattedArray);
         let sum = getSum(numberArray);
         let expected = 14;
         expect(sum).toEqual(expected);
     });
     it('getSum',function () {
         let formattedArray = ["Q","A"];
         let numberArray=getNumbers(formattedArray);
         let sum = getSum(numberArray);
         let expected = 21;
         expect(sum).toEqual(expected);
     });

     it('getCompared',function () {
         let sumA = 40;
         let sumB = 30;
         let result = getCompared(sumA, sumB);
         let expected ="a and b tied";
         expect(result).toEqual(expected);
     });
     it('getCompared',function () {
         let sumA = 30;
         let sumB = 30;
         let result = getCompared(sumA, sumB);
         let expected ="a and b tied";
         expect(result).toEqual(expected);
     });
     it('getCompared',function () {
         let sumA = 30;
         let sumB = 20;
         let result = getCompared(sumA, sumB);
         let expected ="winner: B";
         expect(result).toEqual(expected);
     });
     it('getCompared',function () {
         let sumA = 18;
         let sumB = 30;
         let result = getCompared(sumA, sumB);
         let expected ="winner: A";
         expect(result).toEqual(expected);
     });
     it('getCompared',function () {
         let sumA = 19;
         let sumB = 14;
         let result = getCompared(sumA, sumB);
         let expected ="winner：A";
         expect(result).toEqual(expected);
     });
     it('getCompared',function () {
         let sumA = 14;
         let sumB = 20;
         let result = getCompared(sumA, sumB);
         let expected ="winner:B";
         expect(result).toEqual(expected);
     });
     it('getCompared',function () {
         let inputA = '10-3-5';
         let inputB = 'Q-8';
         let sumA = 18;
         let sumB = 18;
         let result = getCompared(sumA, sumB);
         let expected ="winner:B";
         expect(result).toEqual(expected);
     });
     it('getCompared',function () {
         let inputA='2-3-10';
         let inputB='Q-8';
         let result = print(inputA,inputB);
         let expected ="winner:B";
         expect(result).toEqual(expected);
     });

 });