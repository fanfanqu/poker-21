let {getFormattedInputs,getNumbers,getSum,getSumIncludesA}=require('../src/main');
 describe('poker21', function() {
  it('getFormattedInputs', function() {
      let inputs='Q-2-3';
      let formattedInputs = getFormattedInputs(inputs);
      let expected = ["Q", "2", "3"];
      expect(formattedInputs).toEqual(expected);
  });
   it('getNumber',function () {
       let formattedInputs = ["Q", "2", "3"];
       let formattedArray = getNumbers(formattedInputs);
       let expected = ['10','2','3'];
       expect(formattedArray).toEqual(expected);
   }) ;
     it('getSumWithOutA',function () {
         let formattedArray=['10','2','3'];
         let sum=getSum(formattedArray);
         let expected = 15;
         expect(sum).toEqual(expected);
     })
     it('getSumWithA',function () {
         let formattedArray = ['1','A','3'];
         let sumWithA = getSumIncludesA(formattedArray);
         let expected = 15;
         expect(sumWithA).toEqual(expected);
     })
});