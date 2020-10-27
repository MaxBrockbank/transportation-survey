$(document).ready(function() {
  $("form#transportation").submit(function(event) {
    event.preventDefault();
    $("#work-trans-results").show();
    $("input:checkbox[name=work-trans]:checked").each(function() {
      const workTrans = $(this).val();
      $("#work-trans-results").append(workTrans + "<br>");
    });
    $("#fun-trans-results").show();
    $("input:checkbox[name=fun-trans]:checked").each(function() {
      const workTrans = $(this).val();
      $("#fun-trans-results").append(workTrans + "<br>");
    });
    $("#transportation").hide();
  });
});