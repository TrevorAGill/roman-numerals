$(document).ready(function() {
  $("form#romanNumeral").submit(function(event) {

    //alert("hi");

    var baseNumbers = [ 1,5,10,50,100,500,1000];
    var symbols = ["I","V","X","L","C","D","M"];

    function getBaseNumberSymbol(inputNumber) {
      var found = 0;
      for (var index=0; index < baseNumbers.length; index+=1) {
        if ((baseNumbers[index] === inputNumber) && !found ) {
          found = 1;
          return (symbols[index]);
        }
      };
    };

    function getBaseNumber(inputNumber) {
      //we want the largest baseNumber that
      // inputNumber mod baseNumber < inputNumber
      var found = 0;
      for (var index = baseNumbers.length; index >= 0; index -= 1) {
        if ((inputNumber % baseNumbers[index] < inputNumber) && !found ) {
          found = 1;
          return (baseNumbers[index]);
        }
      };
    };

    function pushRemainder(numbersToAdd, remainder) {
      //REMAINDER : accumulating ones based on remainder
       for ( var index = remainder; index > 0; index-- ) {
         //add 1 until accumulator === inputNumber
         numbersToAdd.push(1);
       };
       return numbersToAdd;
    };

    function getSymbolsString(numbersToAdd){
      var answerString = "";
      numbersToAdd.forEach(function(number) {
        //from array to concat'd string
            answerString = answerString + getBaseNumberSymbol(number);
      });
      return answerString;
    };

    function getAllBaseNumbers (inputNumber,numbersToAdd) {
      var number = 0;
      for (var remainder = inputNumber; remainder >= 3; remainder = remainder - number) {
        number = ((getBaseNumber(remainder)));
        numbersToAdd.push(number);
      };
      return remainder;
      //we need remainder !!!
    };

    //getRoman returns Symbol
    function getRoman(inputNumber) {
      var numbersToAdd= [];

      var remainder = getAllBaseNumbers(inputNumber,numbersToAdd);
      pushRemainder(numbersToAdd, remainder);
      return getSymbolsString(numbersToAdd);
    };



// FRONTEND
  var inputNumber = parseInt($("#input").val());
  var result = getRoman(inputNumber);

  $("#result").text(result);
  event.preventDefault();

  });
});
