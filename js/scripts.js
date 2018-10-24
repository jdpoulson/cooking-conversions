var multiply = function(gal, qt) {
  return gal * qt;
}

var multiply = function(tbsp, tsp) {
  return tbsp * tsp;
}

var multiply2 = function(qt, cup) {
  return qt * cup;
}
$(document).ready(function() {
  $("form#gal-qt").submit(function(event) {
    event.preventDefault();
    var gal = parseInt($("#gal").val());
    var qt = parseInt($("#qt").val());
    var result = multiply(gal, qt);
    $("#output1").text(result);
  });
  $("form#tbsp-tsp").submit(function(event) {
    event.preventDefault();
    var tbsp = parseInt($("#tbsp").val());
    var tsp = parseInt($("#tsp").val());
    var result = multiply(tbsp, tsp);
    $("#output2").text(result);
  });
  $("form#qt-cup").submit(function(event) {
    event.preventDefault();
    var qt = parseInt($("#qt").val());
    var cup = parseInt($("#cup").val());
    var result = multiply2(qt, cup);
    $("#output3").text(result);
  });
});
