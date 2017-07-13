$(document).ready(function() {
  $("form#romanNumeral").submit(function(event) {

    //alert("hi");

    var baseNumbers = [ 1,5,10,50,100,500,1000];
    var symbols = ["I","V","X","L","C","D","M"];


    function getRoman(inputNumber) {
      var found = 0;
      for (var index=0; index < baseNumbers.length; index+=1) {
        if ((baseNumbers[index] === inputNumber) && !found ) {
          found = 1;
          return (symbols[index]);
        } 
      };
    };



// FRONTEND
  var inputNumber = parseInt($("#input").val());
  var result = getRoman(inputNumber);

  $("#result").text(result);
  event.preventDefault();

  });
});
