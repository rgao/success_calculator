$(document).ready(function() {
    // console.log( "ready!" );

    $("#button1").on("click", function() {
      var upgrade_percent = $("#upgrade-input1").val();

      var expected_value = (100 / upgrade_percent).toFixed(2);

      $("#result1").text(expected_value + " Attempts")
    });

    $("#button2").on("click", function() {
      var upgrade_percent = $("#upgrade-input2").val();
      var target_rate = $("#target-input").val();

      num_attempts = Math.log(target_rate/100) / Math.log(1-(upgrade_percent/100));

      $("#result2").text(num_attempts.toFixed(2))
    });

    $("#button3").on("click", function() {
      var upgrade_percent = $("#upgrade-input3").val();
      var num_attempts = $("#attempts-input").val();
      console.log(upgrade_percent, num_attempts)

      var all_fail = (1 - (upgrade_percent/100))**num_attempts;
      var success_chance = (100*(1 - all_fail)).toFixed(4);

      $("#result3").text(success_chance + " %")
    });
});
