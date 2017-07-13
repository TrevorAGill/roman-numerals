$(document).ready(function() {
  $("form#romanNumeral").submit(function(event) {

    //alert("hi");

    function getRoman(inputNumber) {
      return "I";

    };



// FRONTEND
  var inputNumber = parseInt($("#input").val());
  var result = getRoman(inputNumber);

  $("#result").text(result);
  event.preventDefault();

  });
});
