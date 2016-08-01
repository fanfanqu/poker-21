let {getFormattedInputs, getNumbers,getSum,getSumPointA,getSumPointB,getCompared}=require('../src/main');
 describe('poker21', function() {
  it('getFormattedInputs', function() {
      let inputs='Q-2-3';
      let formattedInputs = getFormattedInputs(inputs);
      let expected = ["Q", "2", "3"];
      expect(formattedInputs).toEqual(expected);
  });
   it('getNumbers',function () {
       let formattedInputs = ["Q", "A", "3"];
       let formattedArray = getNumbers(formattedInputs);
       let expected = ['10','A','3'];
       expect(formattedArray).toEqual(expected);
   }) ;
     it('getSum',function () {
         let formattedArray = ["10", "A", "3"];
         let sum = getSum(formattedArray);
         let expected = 14;
         expect(sum).toEqual(expected);
     })
     it('getSumPointA',function () {
         let stringA = "3-4-5-3";
         let sumA = getSumPointA(stringA);
         let expected = 15;
         expect(sumA).toEqual(expected);
     });
     it('getSumPointB',function () {
         let stringB = "3-Q-A";
         let sumB = getSumPointB(stringB);
         let expected = 15;
         expect(sumB).toEqual(expected); 
     });
     it('getSumPointB',function () {
         let inputA = "3-Q-A";
         let inputB = "1-5-7"
         let result = getCompared(inputA, inputB);
         let expected ="winner：A";
         expect(sumB).toEqual(expected);
     });
});