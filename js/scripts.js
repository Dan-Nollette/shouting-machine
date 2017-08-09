$(document).ready(function() {
  $("#formShout").submit(function(event) {
    var shoutInput = $("input#shoutingText").val().toUpperCase();
    $(".shoutOutput").text(shoutInput);

    event.preventDefault();
  });
});
