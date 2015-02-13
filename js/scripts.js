var Triangle = (function(sides) {

  var newSides = sides.split(",");
  var sideOne = parseFloat(newSides[0]);
  var sideTwo = parseFloat(newSides[1]);
  var sideThree = parseFloat(newSides[2]);

    if (sideOne + sideTwo < sideThree || sideOne + sideThree < sideTwo || sideTwo + sideThree < sideOne){
      return "These are not valid triangle dimensions"
    }else if (sideOne==sideTwo && sideOne!==sideThree || sideOne===sideThree && sideOne!==sideTwo || sideTwo=== sideThree && sideTwo!==sideOne){
      return "You have an Isosceles Triangle"
    }else if (sideOne === sideTwo && sideTwo === sideThree){
      return "You have an Equilateral Triangle"
    }else{
      return "You have a Scalene Triangle"
    }

});


// $(document).ready(function() {
//   $("form#input").submit(function(event) {
//     var result = wordOrder($("input#sentence").val());
//     $(".result").text(result);
//     $("#result").show();
//     event.preventDefault();
//   });
// });
