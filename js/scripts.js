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
      var found = 0;
      for (var index=0; index < baseNumbers.length; index+=1) {
        if ((baseNumbers[index] === inputNumber) && !found ) {
          found = 1;
          return (baseNumbers[index]);
        }
      };
    };

//getRoman returns Symbol
    function getRoman(inputNumber) {
      var answerString = "";
      var numbersToAdd= [];
       numbersToAdd.push((getBaseNumber(inputNumber)));
       numbersToAdd.push(1);
       numbersToAdd.forEach(function(numberToAdd) {
          answerString = answerString + getBaseNumberSymbol(numberToAdd);
       });
       return answerString;

    };



// FRONTEND
  var inputNumber = parseInt($("#input").val());
  var result = getRoman(inputNumber);

  $("#result").text(result);
  event.preventDefault();

  });
});
